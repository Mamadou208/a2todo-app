import { Component, OnInit } from '@angular/core';
import {TodoService} from "../shared/todo.service";

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
 todos;
 text ;

  constructor(private _todoService: TodoService) {
      this.todos = _todoService;
  }

  ngOnInit() {
      this.todos = this._todoService.getTodoItems()
  }
  addTodo(){
      this.todos.push({text: this.text});
  };
  deleteTodo(todoText){
      for(var i =0; i < this.todos.length; i++){
        if(this.todos[i].text == todoText){
            this.todos.splice(i, 1);
        }
      }
  }

}
