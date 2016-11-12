import { Component, OnInit } from '@angular/core';
import {TodoService} from "../shared/todo.service";


@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
    //addedItems =[]
    todos= [];
    task ;
    deadline;
    done;

  constructor(private _todoService: TodoService) {}

  ngOnInit() {
      this.todos = this._todoService.getTodoItems();
  }

  addTodo(){
      this._todoService.addToIem({
          task: this.task,
          deadline: this.deadline,
          done: false
      })
  };
  deleteTodo(todoTask){
      this._todoService.removeFromIem(todoTask)
  }

}
