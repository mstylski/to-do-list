import {ChangeDetectionStrategy, Component, EventEmitter, Input, Output} from '@angular/core';
import {Todo} from '../todos.model';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodoItemComponent {
  @Input() todo: Todo;
  @Output() doneToggled = new EventEmitter<Todo>();
  @Output() deleted = new EventEmitter<Todo>();
  @Output() edited = new EventEmitter<Todo>();

  toggleDone(isChecked: boolean): void {
    this.doneToggled.emit({
      ...this.todo,
      is_completed: isChecked ? 1 : 0,
    });
  }

  deleteTodo(): void {
    this.deleted.emit(this.todo);
  }

  editTodo(): void {
    this.edited.emit(this.todo);
  }
}
