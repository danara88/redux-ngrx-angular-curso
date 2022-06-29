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
    selector: 'app-register',
    templateUrl: './register.component.html',
})
export class RegisterComponent implements OnInit, OnDestroy {
    public registerForm: FormGroup = new FormGroup({});
    public uiSubscription: Subscription = new Subscription();
    public loading: boolean = false;

    constructor(
        private _fb: FormBuilder,
        private _authService: AuthService,
        private router: Router,
        private _store: Store<AppState>
    ) {}

    ngOnInit(): void {
        this.registerForm = this._fb.group({
            name: ['', Validators.required],
            email: ['', [Validators.required, Validators.email]],
            password: ['', Validators.required],
        });
        this.uiSubscription = this._store
            .select('ui')
            .subscribe((state) => (this.loading = state.isLoading));
    }

    submit() {
        if (this.registerForm.invalid) return;
        this._store.dispatch(isLoading());
        // Swal.fire({
        //     title: 'Por favor, espere',
        //     didOpen: () => {
        //         Swal.showLoading();
        //     },
        // });

        const { name, email, password } = this.registerForm.value;
        this._authService
            .createUser(name, email, password)
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

    ngOnDestroy(): void {
        this.uiSubscription.unsubscribe();
    }
}
