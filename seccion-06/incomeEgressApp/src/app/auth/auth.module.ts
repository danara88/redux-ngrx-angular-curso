import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { RouterModule } from '@angular/router';

@NgModule({
    declarations: [LoginComponent, RegisterComponent],
    imports: [CommonModule, ReactiveFormsModule, RouterModule],
})
export class AuthModule {}
