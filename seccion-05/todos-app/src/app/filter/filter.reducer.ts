import { createReducer, on, Action } from '@ngrx/store';
import { setFilter, validFilters } from './filter.actions';

export const initialState: validFilters = 'all'

export const filterReducer = createReducer<validFilters, Action>(
    initialState,
    on(setFilter, (state, { filterType }) => filterType)
);
