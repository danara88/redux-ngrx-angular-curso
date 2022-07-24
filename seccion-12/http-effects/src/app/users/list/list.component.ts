import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { User } from 'src/app/models/user.model';
import { loadUsers } from 'src/app/store/actions';
import { AppState } from 'src/app/store/app.reducers';

@Component({
    selector: 'app-list',
    templateUrl: './list.component.html',
    styles: [],
})
export class ListComponent implements OnInit {
    public users: User[] = [];
    public loading: boolean = false;
    public error: any;

    constructor(private store: Store<AppState>) {}

    ngOnInit(): void {
        this.store.select('users').subscribe(({ users, loading, error }) => {
            this.users = users;
            this.loading = loading;
            this.error = error;
        });
        // this._userService.getUsers().subscribe((resp) => (this.users = resp));
        this.store.dispatch(loadUsers());
    }
}
