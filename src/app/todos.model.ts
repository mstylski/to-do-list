export interface HttpTodosResponse {
  status: HttpResponseStatus;
  data: Todo[];
}

export interface HttpTodoPayload {
  status: HttpResponseStatus;
  data: {
      id: string,
      task: string,
      is_completed: boolean;
    };
}

export interface DeleteTodo {
  status: HttpResponseStatus;
  data: {
    id: string
  };
}

export interface Todo {
  id: string;
  candidate: string;
  task: string;
  is_completed: 0;
}

type HttpResponseStatus = 'success' | 'error';

