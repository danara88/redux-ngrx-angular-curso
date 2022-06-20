import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.reducers';
import * as actions from '../counter.actions';

@Component({
    selector: 'app-child',
    templateUrl: './child.component.html',
    styleUrls: ['./child.component.css'],
})
export class ChildComponent implements OnInit {
    public counter: number = 0;

    constructor(private _store: Store<AppState>) {}

    ngOnInit(): void {
        this._store
            .select('count')
            .subscribe((count) => (this.counter = count));
    }

    multiplyCounter() {
        this._store.dispatch(actions.multiply({ multiplyNumber: 3 }));
    }

    divideCounter() {
        this._store.dispatch(actions.divide({ divideNumber: 2 }));
    }

    resetGrandchild(event: number) {}
}
