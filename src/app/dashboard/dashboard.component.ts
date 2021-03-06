import { Component, OnInit } from '@angular/core';
import { TodoService } from '../services/todo.service';
import { Todo } from '../interface/todo';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  public todos: Todo[] = [];
  public todo!:Todo;
  public date: Date = new Date();

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
    todo.isCompleted = !todo.isCompleted;
    this.todoService.updateTodo(todo).subscribe()
  }
}
