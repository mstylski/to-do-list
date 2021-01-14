import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TodoItemComponent} from './todo-item/todo-item.component';
import {TodoAddComponent} from './todo-add/todo-add.component';
import {TodosComponent} from './todos.component';
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
export class TodosModule {}
