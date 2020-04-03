import { Injectable } from '@angular/core';
import { AngularFirestore} from '@angular/fire/firestore';
import { Todo } from '../Models/Todo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  
  private mockTodos: Todo[];

  constructor(private firestore:AngularFirestore) {
      this.mockTodos = [
        {
          id: "1",
          title: "first todo",
          completed: false
        },
        {
          id: "2",
          title: "second todo",
          completed: false
        },
        {
          id: "3",
          title: "third todo",
          completed: false
        }
       ];
    }

  addTodo(todo: Todo){
   console.log(`Firebase Add ${todo.id}`);
  }

  getTodos():Todo[] {
    console.log('Firebase get todos');
    return this.mockTodos;
  }

  updateTodos(todo: Todo) {
    console.log(`Firebase Update ${todo.id}`);
  }
 
  deleteTodo(todo: Todo){
    console.log(`Firebase Add ${todo.id}`);
  }
}
