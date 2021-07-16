import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodoComponent } from './todo/todo.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CompletedComponent } from './completed/completed.component';

const routes: Routes = [
  { path: '', redirectTo: '/todo', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'todo', component: TodoComponent },
  { path: 'completed', component: CompletedComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
