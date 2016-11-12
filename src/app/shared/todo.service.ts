import {Injectable} from '@angular/core';
import {TodoModel} from "./todo.model";

@Injectable()
export class TodoService {
    todoItems: TodoModel[] = [
        {

            task: "WordPress website afmaken",
            deadline: "2016-11-06T16:50:53",
            done: false
        },
        {
            task: "Write the requirement",
            deadline: "2016-11-06T15:50:53",
            done: true
        },
        {
            task: "Write the requirement",
            deadline: "2016-11-06T15:50:53",
            done: false
        },
        {
            task: "Write test case",
            deadline: "2016-11-06T15:50:53",
            done: false
        },
        {
            task: "Write test case21",
            deadline: "2016-11-06T15:50:53",
            done: false
        }
    ];
    private todoItem: TodoModel[] = [];

    constructor() {
        console.log('TodoService initialized...');
    }

    getTodoItems() {
        return this.todoItems;
    }

    getTodoIem() {
        return  this.todoItem;
    }
    addToIem(item) {
        console.log(item)
        //let check if item contain to the
        if (this.todoItems.indexOf(item) !== -1) {
            return;
        }
        this.todoItems.push(item);
    }

    removeFromIem(item: TodoModel) {
        this.todoItems.splice(this.todoItems.indexOf(item), 1);
    }

}
