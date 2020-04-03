import { Injectable } from '@angular/core';
import { AngularFirestore} from '@angular/fire/firestore';
import { Todo } from '../Models/Todo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  
  private mockTodos: Todo[];
  private mockIdCounter: number;

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
       this.mockIdCounter = this.mockTodos.length;
    }

  addTodo(todo: Todo){
    this.mockIdCounter ++;
    todo.id = this.mockIdCounter.toString(); 
    this.mockTodos.push(todo);
    console.log(`Firebase Add todo ${todo.title}`);
  }

  getTodos():Todo[] {
    console.log('Firebase get todos');
    return this.mockTodos;
  }

  updateTodos(todo: Todo) {
    this.mockTodos.find(t => {
      t.id === todo.id;
      t = todo;
    })
    console.log(`Firebase Update ${todo.id}`);
  }
 
  deleteTodo(todo: Todo){
    this.mockTodos = this.mockTodos.filter(t => t.id !== todo.id);
    console.log(`Firebase delete ${todo.id}`);
  }
}
