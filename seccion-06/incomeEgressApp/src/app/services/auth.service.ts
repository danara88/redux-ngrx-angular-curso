import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Store } from '@ngrx/store';
import { map, Subscription } from 'rxjs';
import { AppState } from '../app.reducer';
import * as authActions from '../auth/auth.actions';
import { unSetItems } from '../income-egress/income-egress.actions';
import { User } from '../models/user.model';

@Injectable({
    providedIn: 'root',
})
export class AuthService {
    public userSubscription: Subscription = new Subscription();
    private _user: User | null = new User('', '', '');

    get user() {
        return { ...this._user };
    }

    /**
     * Main constructor
     * @param auth
     * @param firestore
     * @param _store
     */
    constructor(
        private auth: AngularFireAuth,
        private firestore: AngularFirestore,
        private _store: Store<AppState>
    ) {}

    /**
     * Method to listen the changes of the user session
     */
    initAuthListener() {
        // Esta subscripsion esta pendiente a la autenticacion con firebase
        this.auth.authState.subscribe((firebaseUser) => {
            if (firebaseUser) {
                // Esta subscripsion es solo para un usuario activo
                this.userSubscription = this.firestore
                    .doc(`${firebaseUser.uid}/user`)
                    .valueChanges()
                    .subscribe((fireUser: any) => {
                        // console.log(fireUser);
                        const user = User.fromFirebase(fireUser);
                        this._user = user;
                        this._store.dispatch(authActions.setUser({ user }));
                    });
            } else {
                this.userSubscription.unsubscribe();
                this._user = null;
                this._store.dispatch(authActions.unSetUser());
                this._store.dispatch(unSetItems());
            }
        });
    }

    /**
     * Method to create a user in firebase
     * @param name
     * @param email
     * @param password
     * @returns
     */
    createUser(name: string, email: string, password: string) {
        return this.auth.createUserWithEmailAndPassword(email, password).then((firebaseUser) => {
            const newUser = new User(firebaseUser.user!.uid, name, email);
            return this.firestore.doc(`${firebaseUser.user!.uid}/user`).set({
                ...newUser,
            });
        });
    }

    /**
     * Method to login a user in firebase
     * @param email
     * @param password
     * @returns
     */
    login(email: string, password: string) {
        return this.auth.signInWithEmailAndPassword(email, password);
    }

    /**
     * Method to logout
     */
    logout() {
        return this.auth.signOut();
    }

    /**
     * Method to verify if the user is authenticated
     * @returns
     */
    isAuth() {
        return this.auth.authState.pipe(map((firebaseUser) => firebaseUser !== null));
    }
}
