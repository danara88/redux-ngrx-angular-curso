import { createAction, props } from '@ngrx/store';

export const increment = createAction('[Counter] Increment');
export const decrement = createAction('[Counter] Decrement');
export const multiply = createAction(
    '[Counter] Multiply',
    props<{ multiplyNumber: number }>()
);
export const divide = createAction(
    '[Counter] Divide',
    props<{ divideNumber: number }>()
);
export const reset = createAction('[Counter] Reset');
