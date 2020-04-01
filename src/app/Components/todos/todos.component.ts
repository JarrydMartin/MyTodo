import { Component, OnInit } from '@angular/core';
import { Todo } from "../../Models/Todo";
import { TodoService } from "../../Services/todo.service";


@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {

  todos: Todo[];
  
  constructor(private todoService:TodoService) { }

  ngOnInit(): void {
    this.todoService.getTodos().subscribe(todos =>{
      this.todos = todos;
    });
  }

}
