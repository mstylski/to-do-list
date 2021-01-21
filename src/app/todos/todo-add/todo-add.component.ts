import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnChanges, Output} from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import {Todo} from '../todos.model';

@Component({
  selector: 'app-todo-add',
  templateUrl: './todo-add.component.html',
  styleUrls: ['./todo-add.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodoAddComponent implements OnChanges {
  @Input() todoToEdit: null | Todo = null;
  @Output() saved = new EventEmitter<Todo>();
  titleControl = new FormControl('', Validators.required);

  ngOnChanges(): void {
    if (this.todoToEdit) {
      this.titleControl.patchValue(this.todoToEdit.task);
    } else {
      this.titleControl.reset();
    }
  }

  saveTodo(): void {
    const todo = {
      id: this.todoToEdit ? this.todoToEdit.id : '',
      task: this.titleControl.value,
      is_completed: this.todoToEdit ? this.todoToEdit.is_completed : 0,
    } as Todo;
    this.saved.emit(todo);
  }
}
