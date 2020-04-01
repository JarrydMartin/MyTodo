import { Component, OnInit, Input } from '@angular/core';
import { Todo } from "../../Models/Todo";

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss']
})
export class TodoItemComponent implements OnInit {

  @Input()todo: Todo;
  
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
    this.todo.completed = !this.todo.completed
  }

  onDelete(){
    console.log("Clicked delete on todo " + this.todo.id);
  }
}
