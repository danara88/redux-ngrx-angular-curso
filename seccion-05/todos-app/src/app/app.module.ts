import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from 'src/environments/environment';

import { AppComponent } from './app.component';
import { TodosModule } from './todos/todos.module';
import { FooterComponent } from './footer/footer.component';
import { appReducers } from './app.reducer';

@NgModule({
    declarations: [AppComponent, FooterComponent],
    imports: [
        BrowserModule,
        TodosModule,
        StoreModule.forRoot(appReducers),
        StoreDevtoolsModule.instrument({
            maxAge: 25, // Retains last 25 states
            logOnly: environment.production, // Restrict extension to log-only mode
            autoPause: true, // Pauses recording actions and state changes when the extension window is not open
        }),
        ReactiveFormsModule,
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
