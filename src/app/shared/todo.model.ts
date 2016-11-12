/**
 * Created by Home on 12/11/2016.
 */
export class TodoModel{
    public task:string;
    public deadline: string;
    public done: boolean;

    constructor(task:string, deadline:string, done:boolean) {
        this.task = task;
        this.deadline = deadline;
        this.done = done;
    }
}