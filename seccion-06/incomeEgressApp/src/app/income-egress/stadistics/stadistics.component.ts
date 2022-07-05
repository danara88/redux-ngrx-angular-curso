import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { ChartData, ChartType } from 'chart.js';
import { AppState } from 'src/app/app.reducer';
import { IncomeEgress } from 'src/app/models/income-egress.model';

@Component({
    selector: 'app-stadistics',
    templateUrl: './stadistics.component.html',
})
export class StadisticsComponent implements OnInit {
    public incomes: number = 0;
    public outcomes: number = 0;
    public totalIncomes: number = 0;
    public totalOutcomes: number = 0;
    public doughnutChartLabels: string[] = ['Income', 'Outcome'];
    public doughnutChartData: ChartData<'doughnut'> = {
        labels: this.doughnutChartLabels,
        datasets: [{ data: [0, 0] }],
    };

    constructor(private _store: Store<AppState>) {}

    ngOnInit(): void {
        this._store.select('incomeEgress').subscribe(({ items }) => this.getStadistics(items));
    }

    getStadistics(items: IncomeEgress[]) {
        this.totalIncomes = 0;
        this.totalOutcomes = 0;
        this.incomes = 0;
        this.outcomes = 0;

        for (const item of items) {
            if (item.type === 'income') {
                this.incomes++;
                this.totalIncomes = +item.amount;
            }
            if (item.type === 'egress') {
                this.outcomes++;
                this.totalOutcomes = +item.amount;
            }
        }
        this.doughnutChartData.datasets = [{ data: [this.totalIncomes, this.totalOutcomes] }];
    }
}
