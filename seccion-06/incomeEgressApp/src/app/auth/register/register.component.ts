import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import Swal from 'sweetalert2';

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
})
export class RegisterComponent implements OnInit {
    public registerForm: FormGroup = new FormGroup({});
    constructor(
        private _fb: FormBuilder,
        private _authService: AuthService,
        private router: Router
    ) {}

    ngOnInit(): void {
        this.registerForm = this._fb.group({
            name: ['', Validators.required],
            email: ['', [Validators.required, Validators.email]],
            password: ['', Validators.required],
        });
    }

    submit() {
        if (this.registerForm.invalid) return;
        Swal.fire({
            title: 'Por favor, espere',
            didOpen: () => {
                Swal.showLoading();
            },
        });

        const { name, email, password } = this.registerForm.value;
        this._authService
            .createUser(name, email, password)
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
