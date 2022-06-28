import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import Swal from 'sweetalert2';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
})
export class LoginComponent implements OnInit {
    public loginForm: FormGroup = new FormGroup({});
    constructor(
        private _fb: FormBuilder,
        private _authService: AuthService,
        private router: Router
    ) {}

    ngOnInit(): void {
        this.loginForm = this._fb.group({
            email: ['', Validators.required],
            password: ['', Validators.required],
        });
    }

    submit() {
        if (this.loginForm.invalid) return;
        const { email, password } = this.loginForm.value;
        Swal.fire({
            title: 'Por favor, espere',
            didOpen: () => {
                Swal.showLoading();
            },
        });

        this._authService
            .login(email, password)
            .then(() => {
                Swal.close();
                this.router.navigate(['/']);
            })
            .catch((err) => {
                Swal.close();
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: err.message,
                });
            });
    }
}
