import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Todo} from '../../todos.model';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})

export class TodoItemComponent implements OnInit {
  @Input() todo: Todo;
  @Output() doneToggled = new EventEmitter<Todo>();
  @Output() deleted = new EventEmitter<Todo>();
  @Output() edited = new EventEmitter<Todo>();

  constructor() {
  }

  ngOnInit(): void {
  }

  deleteTodo(): void {
    this.deleted.emit(this.todo);
  }

  editTodo(): void {
    this.edited.emit(this.todo);
  }

  doneTasks(): void {
    this.doneToggled.emit(this.todo);
  }
}
