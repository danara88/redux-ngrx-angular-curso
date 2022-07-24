import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { User } from 'src/app/models/user.model';
import { loadUser } from 'src/app/store/actions';
import { AppState } from 'src/app/store/app.reducers';

@Component({
    selector: 'app-user',
    templateUrl: './user.component.html',
    styles: [],
})
export class UserComponent implements OnInit, OnDestroy {
    public user: User | null = new User('', '', '', '');
    public userSubs: Subscription = new Subscription();
    public routeSubs: Subscription = new Subscription();
    constructor(private _route: ActivatedRoute, private _store: Store<AppState>) {}

    ngOnInit(): void {
        this.userSubs = this._store.select('user').subscribe(({ user }) => (this.user = user));
        this.routeSubs = this._route.params.subscribe(({ id }) =>
            this._store.dispatch(loadUser({ id }))
        );
    }

    ngOnDestroy(): void {
        this.userSubs.unsubscribe();
        this.routeSubs.unsubscribe();
    }
}
