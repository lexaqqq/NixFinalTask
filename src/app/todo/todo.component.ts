import { Component, OnInit } from '@angular/core';
import { Todo } from '../interface/todo';
import { TodoService } from '../services/todo.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {
  public todos!: Todo[];
  constructor(private todoService: TodoService) { }

  private getTodos():void{
    this.todoService.getTodos()
    .subscribe({
      next:(todos)=>{
        this.todos = todos;
      }
    })
  }
  ngOnInit(): void {
    this.getTodos()
  }
  public add(title:string, about: string):void{
    this.todoService.addTodo({title, about} as Todo)
    .subscribe({
      next:(todo)=>{
        this.todos.push(todo);
      }
    })
  }
  public delete(todo:Todo): void{
    this.todos = this.todos.filter(t=> t !== todo);
    this.todoService.deleteTodo(todo.id).subscribe();
  }
}
