import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Todo } from "../../Models/Todo";

import { TodoService } from "../../Services/todo.service";
@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss']
})
export class TodoItemComponent implements OnInit {

  @Input()todo: Todo;
  @Output() deleteTodo: EventEmitter<Todo> = new EventEmitter();
  
  constructor(private todoService:TodoService) { }

  ngOnInit(): void {
  }

  setClasses() {
    let classes = {
      todo: true,
      'is-completed': this.todo.completed
    }

    return classes;
  }
  onToggle(){
    //UI side
    this.todo.completed = !this.todo.completed
    //Server side
    this.todoService.setTodoCompleted(this.todo).subscribe(todo => {
      console.log(todo);
    })
  }

  onDelete(){
    this.deleteTodo.emit(this.todo);
  }
}
