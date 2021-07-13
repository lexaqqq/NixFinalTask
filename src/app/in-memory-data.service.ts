import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Todo } from './interface/todo';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {
  createDb(){
    const todos = [
      {id: 1 , title: "Learn Angular", about: "Сложно"},
      {id: 2 , title: "Learn Angular", about: "Сложно"},
      {id: 3 , title: "Learn Angular", about: "Сложно"}
    ];
    return {todos};
  }
  public genId(todos: Todo[]): number{
    return todos.length > 0 ? Math.max(...todos.map(todo => todo.id)) + 1 : 1;
  }
}
