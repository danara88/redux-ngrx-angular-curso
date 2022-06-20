import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from './app.reducers';
import * as actions from './counter/counter.actions';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
    public counter: number = 0;

    constructor(private _store: Store<AppState>) {}

    ngOnInit() {
        this._store
            .select('count')
            .subscribe((count) => (this.counter = count));
    }

    increaseCounter() {
        this._store.dispatch(actions.increment());
    }

    decreaseCounter() {
        this._store.dispatch(actions.decrement());
    }
}
