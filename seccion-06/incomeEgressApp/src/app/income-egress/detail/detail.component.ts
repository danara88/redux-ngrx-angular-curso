import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { IncomeEgress } from 'src/app/models/income-egress.model';
import { IncomeEgressService } from 'src/app/services/income-egress.service';
import Swal from 'sweetalert2';
import { AppStateWithIncomeEgress } from '../income-egress.reducer';

@Component({
    selector: 'app-detail',
    templateUrl: './detail.component.html',
})
export class DetailComponent implements OnInit, OnDestroy {
    public incomeEgressItems: IncomeEgress[] = [];
    public incomeEgressSubs: Subscription = new Subscription();

    constructor(
        private _store: Store<AppStateWithIncomeEgress>,
        private _incomeEgressService: IncomeEgressService
    ) {}

    ngOnInit(): void {
        this.incomeEgressSubs = this._store
            .select('incomeEgress')
            .subscribe(({ items }) => (this.incomeEgressItems = items));
    }

    deleteItem(uid: string) {
        this._incomeEgressService
            .deleteIncomeEgress(uid)
            .then(() => Swal.fire('Borrado !', 'Item borrado', 'success'))
            .catch((err) => Swal.fire('Error', err.message, 'error'));
    }

    ngOnDestroy(): void {
        this.incomeEgressSubs.unsubscribe();
    }
}
