import { Injectable } from '@angular/core';
import { AngularFirestore} from '@angular/fire/firestore';
import { Todo } from '../Models/Todo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  
  constructor(private firestore:AngularFirestore) {  
    }

  addTodo(todo: Todo){
    console.log(`Firebase Add todo ${todo.title}`);
    delete todo.id
    this.firestore.collection('Todos').add(todo);
  }

  getTodos() {
    console.log('Firebase get todos');
    return this.firestore.collection('Todos').snapshotChanges();
  }

  updateTodos(todo: Todo) {
   const id = todo.id;
   delete todo.id
   this.firestore.doc('Todos/' + id).update(todo);
    console.log(`Firebase Update ${todo.id}`);
  }
 
  deleteTodo(todo: Todo){
    console.log(`Firebase delete ${todo.id}`);
    this.firestore.doc('Todos/' + todo.id).delete();
  }
}
