import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';
import {HttpDeleteTodoResponse, HttpGetTodosResponse, HttpSaveTodoResponse} from './todos.model';

@Injectable({
  providedIn: 'root'
})
export class TodosService {

  constructor(private http: HttpClient) {}

  getTodos(): Observable<HttpGetTodosResponse> {
    return this.http.get<HttpGetTodosResponse>(environment.apiUrl);
  }

  saveTodo(payload: FormData): Observable<HttpSaveTodoResponse> {
    return this.http.post<HttpSaveTodoResponse>(environment.apiUrl, payload);
  }

  deleteTodo(id: string): Observable<HttpDeleteTodoResponse> {
    return this.http.delete<HttpDeleteTodoResponse>(`${environment.apiUrl}/${id}`);
  }
}
