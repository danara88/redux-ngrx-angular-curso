import { createReducer, on } from '@ngrx/store';
import {
    decrement,
    divide,
    increment,
    multiply,
    reset,
} from './counter.actions';

// export function counterReducer(state: number = 10, action: Action) {
//     switch (action.type) {
//         case increment.type:
//             return state + 1;

//         case decrement.type:
//             return state - 1;

//         default:
//             return state;
//     }
// }
export const initialState = 20;

export const counterReducer = createReducer(
    initialState,
    on(increment, (state) => state + 1),
    on(decrement, (state) => state - 1),
    on(multiply, (state, { multiplyNumber }) => state * multiplyNumber),
    on(divide, (state, { divideNumber }) => state / divideNumber),
    on(reset, (state) => initialState)
);
