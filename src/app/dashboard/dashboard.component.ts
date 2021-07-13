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
}
