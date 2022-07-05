import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { filter, Subscription } from 'rxjs';
import { AppState } from '../app.reducer';
import { setItems } from '../income-egress/income-egress.actions';
import { IncomeEgressService } from '../services/income-egress.service';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styles: [],
})
export class DashboardComponent implements OnInit, OnDestroy {
    public userSubs: Subscription = new Subscription();
    public incomeEgressSubs: Subscription = new Subscription();
    constructor(
        private _store: Store<AppState>,
        private _incomeEgressService: IncomeEgressService
    ) {}

    ngOnInit(): void {
        this.userSubs = this._store
            .select('user')
            .pipe(filter((resp) => resp.user !== null))
            .subscribe((resp: any) => {
                this.incomeEgressSubs = this._incomeEgressService
                    .initIncomeEgressListener(resp.user.uid)
                    .subscribe((items) => this._store.dispatch(setItems({ items })));
            });
    }

    ngOnDestroy(): void {
        this.incomeEgressSubs.unsubscribe();
        this.userSubs.unsubscribe();
    }
}
