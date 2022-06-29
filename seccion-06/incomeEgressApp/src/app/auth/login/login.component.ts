import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { AppState } from 'src/app/app.reducer';
import { AuthService } from 'src/app/services/auth.service';
import { isLoading, stopLoading } from 'src/app/shared/ui.actions';
import Swal from 'sweetalert2';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
})
export class LoginComponent implements OnInit, OnDestroy {
    public loginForm: FormGroup = new FormGroup({});
    public loading: boolean = false;
    public uiSubscription: Subscription = new Subscription();

    constructor(
        private _fb: FormBuilder,
        private _authService: AuthService,
        private router: Router,
        private _store: Store<AppState>
    ) {}

    ngOnInit(): void {
        this.loginForm = this._fb.group({
            email: ['', Validators.required],
            password: ['', Validators.required],
        });
        this.uiSubscription = this._store.select('ui').subscribe((state) => {
            this.loading = state.isLoading;
            console.log(this.loading);
        });
    }

    submit() {
        if (this.loginForm.invalid) return;
        const { email, password } = this.loginForm.value;

        this._store.dispatch(isLoading());

        // Swal.fire({
        //     title: 'Por favor, espere',
        //     didOpen: () => {
        //         Swal.showLoading();
        //     },
        // });

        this._authService
            .login(email, password)
            .then(() => {
                // Swal.close();
                this._store.dispatch(stopLoading());
                this.router.navigate(['/']);
            })
            .catch((err) => {
                // Swal.close();
                this._store.dispatch(stopLoading());
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: err.message,
                });
            });
    }

    // Method to unsuscribe from observable
    ngOnDestroy(): void {
        this.uiSubscription.unsubscribe();
    }
}
