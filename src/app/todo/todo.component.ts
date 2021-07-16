import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Todo } from '../interface/todo';
import { TodoService } from '../services/todo.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {
  public todos!: Todo[];
  constructor(private todoService: TodoService, private fb: FormBuilder) { }
  public form!:FormGroup;
  public form2!:FormGroup;
  private getTodos():void{
    this.todoService.getTodos()
    .subscribe({
      next:(todos)=>{
        this.todos = todos;
      }
    })
  }

  ngOnInit(): void {
    this.getTodos();
    this.form = this.fb.group({
      title: this.fb.control("", Validators.required),
      about: this.fb.control(""),
      firstTask: this.fb.control("", Validators.required)
    })
    this.form2 = this.fb.group({
      tasks: this.fb.array([], Validators.required),
    })
  }
 
  public add(title:string, about: string, firstTask:string):void{
    let first = {name:firstTask,completed:false}
    let list = this.transformation();
    list.unshift(first)
     let isCompleted:boolean = false
     this.todoService.addTodo({title,about,list,isCompleted} as Todo)
    .subscribe({
      next:(todo)=>{
        this.todos.push(todo);
      }
    })
    this.form.reset();
    this.form2.reset();
  }
  public delete(todo:Todo): void{
    this.todos = this.todos.filter(t=> t !== todo);
    this.todoService.deleteTodo(todo.id).subscribe();
  }

  get task():FormArray{
    return this.form2.controls["tasks"] as FormArray
  }
  public addTask():void {
    const tasksForm = this.fb.control("");
    this.task.push(tasksForm);
  }
  private transformation():Array<any>{
    let list:any = []
    let list2 = this.form2.value
    for(let key in list2){
      let a = (list2[key]);
      for(let i in a){
        let obj = {name:a[i], completed:false};
        list.push(obj)
      }
    }
    return list;
  }
}
