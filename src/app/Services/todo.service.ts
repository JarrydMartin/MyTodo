import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
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

  todosUrl: string = 'https://my-json-server.typicode.com/JarrydMartin/MyTodo/todos/';

  constructor(private http: HttpClient) {}

  getTodos(): Observable<Todo[]> {
    return this.http.get<Todo[]>(this.todosUrl);
  }
 
  setTodoCompleted(todo: Todo):Observable<any>{
    return this.http.put(`${this.todosUrl}${todo.id}`, todo, this.httpOptions);
  }

  deleteTodo(todo: Todo){
    this.http.delete(`${this.todosUrl}${todo.id}`)
  }
}
