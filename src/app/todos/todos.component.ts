import {Component, OnInit} from '@angular/core';
import {TodosService} from './todos.service';
import {Todo} from './todos.model';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  todos: Todo[] = [];
  todoInEdit: null | Todo;
  hasError = false;
  isTodoFormVisible = false;
  onlyDoneTodosVisible = false;

  constructor(private todosService: TodosService) {
  }

  ngOnInit(): void {
    this.getTodos();
  }

  toggleAddTodoFormVisibility(): void {
    this.isTodoFormVisible = !this.isTodoFormVisible;
  }

  toggleDoneTodosVisibility(): void {
    this.onlyDoneTodosVisible = !this.onlyDoneTodosVisible;
  }
  saveTodo(todo: Todo): void {
    const formData = new FormData();
    formData.append('id', todo.id);
    formData.append('task', todo.task);
    formData.append('is_completed', String(todo.is_completed));
    this.todosService.saveTodo(formData).subscribe(() => {
      this.getTodos();
      this.todoInEdit = null;
    });
  }

  deleteTodo(todo: Todo): void {
    this.todosService.deleteTodo(todo.id).subscribe(() => {
      this.getTodos();
    });
  }

  editTodo(todo: Todo): void {
    this.todoInEdit = todo;
  }

  private getTodos(): void {
    this.todosService.getTodos().subscribe((response) => {
      this.todos = response.data;
      this.hasError = false;
    }, () => {
      this.todos = [];
      this.hasError = true;
    });
  }
}
