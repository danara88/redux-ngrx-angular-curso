import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { map } from 'rxjs';
import { User } from '../models/user.model';

@Injectable({
    providedIn: 'root',
})
export class AuthService {
    constructor(public auth: AngularFireAuth, public firestore: AngularFirestore) {}

    /**
     * Method to listen the changes of the user session
     */
    initAuthListener() {
        this.auth.authState.subscribe((firebaseUser) => {
            console.log(firebaseUser?.uid);
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
