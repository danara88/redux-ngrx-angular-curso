import { Routes } from '@angular/router';
import { DetailComponent } from '../income-egress/detail/detail.component';
import { IncomeEgressComponent } from '../income-egress/income-egress.component';
import { StadisticsComponent } from '../income-egress/stadistics/stadistics.component';

export const dashboardRoutes: Routes = [
    {
        path: '',
        component: StadisticsComponent,
    },
    {
        path: 'income-egress',
        component: IncomeEgressComponent,
    },
    {
        path: 'detail',
        component: DetailComponent,
    },
];
