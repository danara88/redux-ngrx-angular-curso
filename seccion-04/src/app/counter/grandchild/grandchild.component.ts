import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.reducers';
import { reset } from '../counter.actions';

@Component({
    selector: 'app-grandchild',
    templateUrl: './grandchild.component.html',
    styleUrls: ['./grandchild.component.css'],
})
export class GrandchildComponent implements OnInit {
    public counter: number = 0;
    constructor(private _store: Store<AppState>) {}

    ngOnInit(): void {
        this._store
            .select('count')
            .subscribe((count) => (this.counter = count));
    }

    reset() {
        this._store.dispatch(reset());
    }
}
