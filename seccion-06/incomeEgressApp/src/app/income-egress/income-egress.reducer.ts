import { createReducer, on } from '@ngrx/store';
import { AppState } from '../app.reducer';
import { IncomeEgress } from '../models/income-egress.model';
import { setItems, unSetItems } from './income-egress.actions';

export interface State {
    items: IncomeEgress[];
}

export interface AppStateWithIncomeEgress extends AppState {
    incomeEgress: State;
}

export const initialState: State = {
    items: [],
};

export const incomeEgressReducer = createReducer(
    initialState,
    on(setItems, (state, { items }) => ({ ...state, items: [...items] })),
    on(unSetItems, (state) => ({ items: [] }))
);
