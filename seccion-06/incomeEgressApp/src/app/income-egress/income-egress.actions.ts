import { createAction, props } from '@ngrx/store';
import { IncomeEgress } from '../models/income-egress.model';

export const setItems = createAction(
    '[IncomeEgress] Set Items',
    props<{ items: IncomeEgress[] }>()
);
export const unSetItems = createAction('[IncomeEgress] Unset Items');
