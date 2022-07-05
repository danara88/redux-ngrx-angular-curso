import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import Swal from 'sweetalert2';
import { AppState } from '../app.reducer';
import { IncomeEgress } from '../models/income-egress.model';
import { IncomeEgressService } from '../services/income-egress.service';
import { isLoading, stopLoading } from '../shared/ui.actions';

export type Movement = 'egress' | 'income';

@Component({
    selector: 'app-income-egress',
    templateUrl: './income-egress.component.html',
})
export class IncomeEgressComponent implements OnInit, OnDestroy {
    public incomeForm: FormGroup = new FormGroup({});
    public typeMovement: Movement = 'income';
    public loading: boolean = false;
    public uiSubscription: Subscription = new Subscription();

    constructor(
        private _fb: FormBuilder,
        private _incomeEgressService: IncomeEgressService,
        private _store: Store<AppState>
    ) {}

    ngOnInit(): void {
        this.incomeForm = this._fb.group({
            description: ['', Validators.required],
            amount: [null, Validators.required],
        });
        this.uiSubscription = this._store
            .select('ui')
            .subscribe((state) => (this.loading = state.isLoading));
    }

    submit() {
        this._store.dispatch(isLoading());

        if (this.incomeForm.invalid) return;

        const { description, amount } = this.incomeForm.value;
        const incomeEgress = new IncomeEgress(description, amount, this.typeMovement);

        this._incomeEgressService
            .createIncomeEgress(incomeEgress)
            .then(() => {
                this.incomeForm.reset();
                this._store.dispatch(stopLoading());
                Swal.fire('Success !', description, 'success');
            })
            .catch((err) => {
                this._store.dispatch(stopLoading());
                Swal.fire('Error', err.message, 'error');
            });
    }

    ngOnDestroy(): void {
        this.uiSubscription.unsubscribe();
    }
}
