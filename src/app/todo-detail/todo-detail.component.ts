import { Component, OnInit } from '@angular/core';
import { Todo } from '../interface/todo';
import { Location } from '@angular/common';
import { TodoService } from '../services/todo.service';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-todo-detail',
  templateUrl: './todo-detail.component.html',
  styleUrls: ['./todo-detail.component.scss']
})
export class TodoDetailComponent implements OnInit {
  public todo?:Todo;
  constructor(
    private route: ActivatedRoute,
    private todoService: TodoService,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.getTodo();
  }
  public getTodo():void{
    const id = Number(this.route.snapshot.paramMap.get("id"));
    this.todoService.getTodo(id)
    .subscribe({
      next:(todo)=>{
        this.todo = todo;
      }
    })
  }
  public goBack(): void{
    this.location.back();
  }
  public save(): void{
    if(this.todo){
      this.todoService.updateTodo(this.todo)
      .subscribe({
        next:()=>{
          this.goBack();
        }
      })

    }
  }
}
