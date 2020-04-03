import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AngularFirestore, AngularFirestoreCollection   } from '@angular/fire/firestore';
import { Todo } from '../Models/Todo';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  
   httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json'
    })
  }

  private todoCollection: AngularFirestoreCollection<Todo>;

  todosUrl: string = 'https://my-json-server.typicode.com/JarrydMartin/MyTodo/todos/';

  constructor(
    private http: HttpClient, 
    private firestore:AngularFirestore) {
      this.todoCollection = firestore.collection<Todo>('Todos')
    }

  createTodo(todo: Todo){
    this.todoCollection.add(todo);
  }

  getTodos():Observable<Todo[]> {
    return this.todoCollection.valueChanges();
  }
 
  setTodoCompleted(todo: Todo):Observable<any>{
    return this.http.put(`${this.todosUrl}${todo.id}`, todo, this.httpOptions);
  }

  deleteTodo(todo: Todo){
    this.http.delete(`${this.todosUrl}${todo.id}`)
  }
}
