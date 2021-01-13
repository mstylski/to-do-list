import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../environments/environment';
import {DeleteTodo, HttpTodosResponse, Todo} from './todos.model';

@Injectable({
  providedIn: 'root'
})
export class TodosService {

  constructor(private http: HttpClient) {
  }

  getTodos(): Observable<HttpTodosResponse> {
    return this.http.get<HttpTodosResponse>(`${environment.apiUrl}`);
  }

  saveTodo(payload: any): Observable<Todo> {
    return this.http.post<Todo>(`${environment.apiUrl}`, payload );
  }

  deleteTodo(id: string): Observable<DeleteTodo> {
    return this.http.delete<DeleteTodo>(`${environment.apiUrl}/${ id }`);
  }
}
