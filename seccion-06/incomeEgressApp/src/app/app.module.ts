import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { environment } from '../environments/environment';

import { provideFirestore, getFirestore } from '@angular/fire/firestore';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { provideAuth, getAuth } from '@angular/fire/auth';

import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';

import { StoreModule } from '@ngrx/store';
import { appReducers } from './app.reducer';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { AppComponent } from './app.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { IncomeEgressComponent } from './income-egress/income-egress.component';
import { StadisticsComponent } from './income-egress/stadistics/stadistics.component';
import { DetailComponent } from './income-egress/detail/detail.component';
import { FooterComponent } from './shared/footer/footer.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SortItemsPipe } from './pipes/sort-items.pipe';

import { NgChartsModule } from 'ng2-charts';

@NgModule({
    declarations: [
        AppComponent,
        LoginComponent,
        RegisterComponent,
        IncomeEgressComponent,
        StadisticsComponent,
        DetailComponent,
        FooterComponent,
        NavbarComponent,
        SidebarComponent,
        DashboardComponent,
        SortItemsPipe,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        ReactiveFormsModule,
        provideFirebaseApp(() => initializeApp(environment.firebase)),
        provideAuth(() => getAuth()),
        provideFirestore(() => getFirestore()),
        AngularFireModule.initializeApp(environment.firebase),
        AngularFireAuthModule, // Para trabajar con la autenticacion
        AngularFirestoreModule, // Para trabjar con firestore
        StoreModule.forRoot(appReducers),
        StoreDevtoolsModule.instrument({
            maxAge: 25, // Retains last 25 states
            logOnly: environment.production, // Restrict extension to log-only mode
            autoPause: true, // Pauses recording actions and state changes when the extension window is not open
        }),
        NgChartsModule,
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
