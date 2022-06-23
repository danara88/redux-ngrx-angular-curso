/**
 * Todo model
 */
export class Todo {
    public id: number;
    public description: string;
    public completed: boolean;

    constructor(description: string) {
        this.id = Math.random();
        this.description = description;
        this.completed = false;
    }
}
