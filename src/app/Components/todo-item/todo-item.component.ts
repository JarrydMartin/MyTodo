import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Todo } from "../../Models/Todo";

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss']
})
export class TodoItemComponent implements OnInit {

  @Input()todo: Todo;
  @Output() deleteTodo: EventEmitter<Todo> = new EventEmitter();
  @Output() updateTodo: EventEmitter<Todo> = new EventEmitter();
  
  constructor() { }

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
    this.todo.completed = !this.todo.completed;
    this.updateTodo.emit(this.todo);
  }

  onDelete(){
    this.deleteTodo.emit(this.todo);
  }
}
