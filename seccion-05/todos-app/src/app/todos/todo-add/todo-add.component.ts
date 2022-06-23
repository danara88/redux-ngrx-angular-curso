import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducer';
import * as actions from '../todos.actions';

@Component({
    selector: 'app-todo-add',
    templateUrl: './todo-add.component.html',
    styleUrls: ['./todo-add.component.css'],
})
export class TodoAddComponent implements OnInit {
    public textInput: FormControl;

    constructor(private _store: Store<AppState>) {
        this.textInput = new FormControl('', Validators.required);
    }

    ngOnInit(): void {}

    addTask() {
        if (this.textInput.invalid) return;
        this._store.dispatch(
            actions.createTodo({ description: this.textInput.value })
        );
        this.textInput.reset();
    }
}
