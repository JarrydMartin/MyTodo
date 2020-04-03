import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.scss']
})
export class AddTodoComponent implements OnInit {

  title: string;

  @Output() addATodo: EventEmitter<any> = new EventEmitter();
  
  constructor() { }

  ngOnInit(): void {
  }

  /*onSubmit(){
    console.log("Adding Todo");
    const todo = {
      title: this.title,
      completed: false
    }
    this.addATodo.emit(todo);
  }*/
}
