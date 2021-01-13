import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TodoItemComponent} from './todos/todo-item/todo-item.component';
import {TodoAddComponent} from './todos/todo-add/todo-add.component';
import {TodosComponent} from './todos/todos.component';
import {RouterModule} from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    TodosComponent,
    TodoItemComponent,
    TodoAddComponent
  ],
  exports: [
    TodosComponent,
    TodoItemComponent,
    TodoAddComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class TodosModule { }
