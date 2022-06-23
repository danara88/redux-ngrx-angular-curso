import { createAction, props } from '@ngrx/store';

export type validFilters = 'all' | 'completed' | 'inProcess';

export const setFilter = createAction(
    '[Filter] Set filter',
    props<{ filterType: validFilters }>()
);
