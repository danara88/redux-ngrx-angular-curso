import { createReducer, on } from '@ngrx/store';
import { Todo } from './models/todo.model';
import {
    createTodo,
    toggleTodo,
    editTodo,
    deleteTodo,
    toggleAll,
    clearAllCompleted,
} from './todos.actions';

export const initialState: Todo[] = [
    new Todo('Go and watch a movie'),
    new Todo('Buy some milk'),
    new Todo('Make some code'),
];
// No utilizar push para no mutar el estado
// Siempre retornar un nuevo elemento
// No mutar lo que se devuelve (los objetos pasan como referencia)
// Dentro del State manipulamos el lugar de memoria donde apuntamos
// Los pipes no mutan los objetos
export const todoReducer = createReducer(
    initialState,
    on(createTodo, (state, { description }) => [
        ...state,
        new Todo(description), // Retornar un nuevo arreglo
    ]),
    on(toggleTodo, (state, { id }) => {
        return state.map((todo) => {
            if (todo.id === id) {
                return {
                    ...todo,
                    completed: !todo.completed,
                };
            } else {
                return todo;
            }
        });
    }),
    on(editTodo, (state, { id, description }) => {
        return state.map((todo) => {
            if (todo.id === id) {
                return {
                    ...todo,
                    description,
                };
            } else {
                return todo;
            }
        });
    }),
    on(deleteTodo, (state, { id }) => state.filter((todo) => todo.id !== id)),
    on(toggleAll, (state, { statusTodo }) =>
        state.map((todo) => ({ ...todo, completed: statusTodo }))
    ),
    on(clearAllCompleted, (state) => state.filter(todo => !todo.completed))
);
