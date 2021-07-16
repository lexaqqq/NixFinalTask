import { Component, OnInit } from '@angular/core';
import { TodoService } from '../services/todo.service';
import { Todo } from '../interface/todo';

@Component({
  selector: 'app-completed',
  templateUrl: './completed.component.html',
  styleUrls: ['./completed.component.scss']
})
export class CompletedComponent implements OnInit {

  public todos: Todo[] = [];
  public todo!:Todo;

  constructor(private todoService: TodoService) { }
  ngOnInit(): void {
    this.getTodos();
  }
  public getTodos():void{
    this.todoService.getTodos()
    .subscribe({
      next:(todos)=>{
        this.todos = todos;
      }
    })
  }
  public delete(todo:Todo): void{
    this.todos = this.todos.filter(t=> t !== todo);
    this.todoService.deleteTodo(todo.id).subscribe();
  }
  public complete(todo:Todo): void{
    this.todoService.updateTodo(todo).subscribe()
  }
}
