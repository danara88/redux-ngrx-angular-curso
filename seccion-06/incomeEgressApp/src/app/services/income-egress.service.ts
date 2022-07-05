import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { map } from 'rxjs';
import { IncomeEgress } from '../models/income-egress.model';
import { AuthService } from './auth.service';

@Injectable({
    providedIn: 'root',
})
export class IncomeEgressService {
    /**
     * Main constructor
     */
    constructor(private firestore: AngularFirestore, private _authService: AuthService) {}

    /**
     * Method to create an income-egress
     * @param incomeEgress
     */
    createIncomeEgress(incomeEgress: IncomeEgress) {
        const { uid, ...data } = incomeEgress;
        const { uid: id } = this._authService.user;
        return this.firestore
            .doc(`${id}/incomeEgress`)
            .collection('items')
            .add({
                ...data,
            });
    }

    /**
     * Metod to listen income egress items
     * @param uid
     * @returns
     */
    initIncomeEgressListener(uid: string) {
        return this.firestore
            .collection(`/${uid}/incomeEgress/items`)
            .snapshotChanges()
            .pipe(
                map((snapShot) =>
                    snapShot.map((doc) => ({
                        uid: doc.payload.doc.id,
                        ...(doc.payload.doc.data() as any),
                    }))
                )
            );
    }

    /**
     * Method to delete an income egress item
     * @param uidItem
     * @returns
     */
    deleteIncomeEgress(uidItem: string) {
        const { uid } = this._authService.user;
        return this.firestore.doc(`${uid}/incomeEgress/items/${uidItem}`).delete();
    }
}
