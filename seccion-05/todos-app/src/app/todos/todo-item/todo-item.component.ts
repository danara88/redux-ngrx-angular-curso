import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { Todo } from '../models/todo.model';
import { FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducer';
import { deleteTodo, editTodo, toggleTodo } from '../todos.actions';

@Component({
    selector: 'app-todo-item',
    templateUrl: './todo-item.component.html',
    styleUrls: ['./todo-item.component.css'],
})
export class TodoItemComponent implements OnInit {
    @Input() public todo: Todo = new Todo('');
    @ViewChild('inputAddTodo', { static: true })
    public inputAddTodo: ElementRef = new ElementRef(null);

    public checkInput: FormControl = new FormControl();
    public textInput: FormControl = new FormControl();
    public editing: boolean = false;

    constructor(private _store: Store<AppState>) {}

    ngOnInit(): void {
        this.checkInput = new FormControl(this.todo.completed);

        this.textInput = new FormControl(
            this.todo.description,
            Validators.required
        );

        this.checkInput.valueChanges.subscribe((value) => {
            this._store.dispatch(toggleTodo({ id: this.todo.id }));
        });
    }

    /**
     * Method to edit the todo description
     */
    editField() {
        this.editing = true;
        this.textInput.setValue(this.todo.description);
        setTimeout(() => this.inputAddTodo.nativeElement.select(), 1);
    }

    /**
     * Method to finish the editing (blur)
     * @returns
     */
    finishEditing() {
        this.editing = false;
        if (
            this.todo.description === this.textInput.value ||
            this.textInput.invalid
        )
            return;
        this._store.dispatch(
            editTodo({ id: this.todo.id, description: this.textInput.value })
        );
    }

    /**
     * Method to delete a todo
     */
    deleteTodo() {
        this._store.dispatch(deleteTodo({ id: this.todo.id }));
    }
}
