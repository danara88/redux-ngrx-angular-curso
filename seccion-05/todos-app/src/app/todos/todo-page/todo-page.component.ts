import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducer';
import { toggleAll } from '../todos.actions';

@Component({
    selector: 'app-todo-page',
    templateUrl: './todo-page.component.html',
    styleUrls: ['./todo-page.component.css'],
})
export class TodoPageComponent implements OnInit {
    public completed: boolean = false;

    constructor(private _store: Store<AppState>) {}

    ngOnInit(): void {}

    /**
     * Toggle the status of all the todos
     */
    toggleAllTodos() {
        this.completed = !this.completed;
        this._store.dispatch(toggleAll({ statusTodo: this.completed }));
    }
}
