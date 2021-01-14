export interface HttpGetTodosResponse {
  status: HttpResponseStatus;
  data: Todo[];
}

export interface HttpSaveTodoResponse {
  status: HttpResponseStatus;
  data: [Todo];
}

export interface HttpDeleteTodoResponse {
  status: HttpResponseStatus;
  data: {
    id: string
  };
}

export interface Todo {
  id: string;
  candidate?: string;
  task: string;
  is_completed: 1 | 0;
}

type HttpResponseStatus = 'success' | 'error';
