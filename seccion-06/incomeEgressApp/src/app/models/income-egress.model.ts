/**
 * IncomeEgress model
 */
export class IncomeEgress {
    constructor(
        public description: string,
        public amount: number,
        public type: string,
        public uid?: string
    ) {}
}
