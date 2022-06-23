import { createAction, props } from '@ngrx/store';

export const createTodo = createAction(
    '[TODO] Create Todo',
    props<{ description: string }>()
);

export const editTodo = createAction(
    '[TODO] Edit Todo',
    props<{ id: number; description: string }>()
);

export const deleteTodo = createAction(
    '[TODO] Delete Todo',
    props<{ id: number }>()
);

export const toggleTodo = createAction(
    '[TODO] Toggle Todo',
    props<{ id: number }>()
);

export const toggleAll = createAction(
    '[TODO] Toggole all todos',
    props<{ statusTodo: boolean }>()
);
