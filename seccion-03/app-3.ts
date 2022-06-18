import { incrementadorAction } from './contador/contador.actions';
import { contadorReducer } from './contador/contador.reducer';
import { Action, Reducer } from './ngrx-fake/ngrx';

class Store<T> {
    constructor(private reducer: Reducer<T>, private state: T) {}

    /**
     * Method to get the state
     * @returns
     */
    getState() {
        return this.state;
    }

    /**
     * Method to trigger actions
     * @param action
     */
    dispatch(action: Action) {
        this.state = this.reducer(this.state, action);
    }
}

const store = new Store(contadorReducer, 10);

console.log(store.getState()); // 10

store.dispatch(incrementadorAction);

console.log(store.getState()); // 11
