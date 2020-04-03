import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { TodoService } from '../../Services/todo.service';
import { Todo } from '../../Models/Todo';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.scss']
})
export class AddTodoComponent implements OnInit {
  title: string;

  @Output() addATodo: EventEmitter<any> = new EventEmitter();

  constructor(private todoService: TodoService) {}

  ngOnInit(): void {}

  onSubmit() {
    if (this.title) {
      const todo = {
        id: '',
        title: this.title,
        completed: false
      };
      this.todoService.addTodo(todo);

      this.title = '';
    }
  }
}
