import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IncomeEgressComponent } from './income-egress.component';
import { StadisticsComponent } from './stadistics/stadistics.component';
import { DetailComponent } from './detail/detail.component';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { SortItemsPipe } from '../pipes/sort-items.pipe';
import { ReactiveFormsModule } from '@angular/forms';
import { NgChartsModule } from 'ng2-charts';
import { SharedModule } from '../shared/shared.module';
import { DashboardRoutingModule } from '../dashboard/dashboard-routing.module';
import { StoreModule } from '@ngrx/store';
import { incomeEgressReducer } from './income-egress.reducer';

@NgModule({
    declarations: [
        IncomeEgressComponent,
        StadisticsComponent,
        DetailComponent,
        DashboardComponent,
        SortItemsPipe,
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        NgChartsModule,
        SharedModule,
        DashboardRoutingModule,
        StoreModule.forFeature('incomeEgress', incomeEgressReducer),
    ],
})
export class IncomeEgressModule {}
