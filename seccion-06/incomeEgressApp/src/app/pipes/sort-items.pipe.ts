import { Pipe, PipeTransform } from '@angular/core';
import { IncomeEgress } from '../models/income-egress.model';

@Pipe({
    name: 'sortItems',
})

/**
 * Pipe to return first the incomes then the outcomes
 */
export class SortItemsPipe implements PipeTransform {
    transform(items: IncomeEgress[]): IncomeEgress[] {
        return items.slice().sort((a, b) => {
            if (a.type === 'income') {
                return -1;
            } else {
                return 1;
            }
        });
    }
}
