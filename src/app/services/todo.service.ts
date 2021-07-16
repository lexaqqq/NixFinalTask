import { Injectable } from '@angular/core';
import { Todo } from '../interface/todo';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class TodoService {
  private todoUrl = "api/todos";
    public httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  constructor(private http: HttpClient) { }
  public getTodos(): Observable<Todo[]>{
    return this.http.get<Todo[]>(this.todoUrl);
  }
  public getTodo(id: number): Observable<Todo>{
    const url = `${this.todoUrl}/${id}`;
    return this.http.get<Todo>(url);
  }
  public updateTodo(todo: Todo): Observable<any>{
    return this.http.put(this.todoUrl,todo,this.httpOptions);
  }
  public addTodo(todo:Todo): Observable<Todo>{
    return this.http.post<Todo>(this.todoUrl,todo,this.httpOptions);
  }
  public deleteTodo(id: number): Observable<Todo>{
    const url = `${this.todoUrl}/${id}`;
    return this.http.delete<Todo>(url,this.httpOptions);
  }
}
