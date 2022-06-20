import { NgModule } from '@angular/core';
import { environment } from 'src/environments/environment';
import { BrowserModule } from '@angular/platform-browser';

// NgRx
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { counterReducer } from './counter/counter.reducer';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChildComponent } from './counter/child/child.component';
import { GrandchildComponent } from './counter/grandchild/grandchild.component';

@NgModule({
    declarations: [AppComponent, ChildComponent, GrandchildComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        StoreModule.forRoot({ count: counterReducer }),
        StoreDevtoolsModule.instrument({
            maxAge: 25, // Retains last 25 states
            logOnly: environment.production, // Restrict extension to log-only mode
            autoPause: true, // Pauses recording actions and state changes when the extension window is not open
        }),
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
