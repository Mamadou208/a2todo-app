import {Injectable} from '@angular/core';

@Injectable()
export class TodoService {
    private todoItems = [
        {text: 'Pickup Binta at school'},
        {text: 'Meeting with boss'},
        {text: 'Dinner with wife'}
    ]

    constructor() {
        console.log('TodoService initialized...');
    }
    getTodoItems(){
        return this.todoItems;
    }

}
