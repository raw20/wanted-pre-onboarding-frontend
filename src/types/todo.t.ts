import { Dispatch, SetStateAction } from "react";

export interface Todo {
  id: number;
  todo: string;
  isCompleted: boolean;
  userId: number;
}

export interface ITodosState {
  todos: Todo[];
  setTodos: Dispatch<SetStateAction<Todo[]>>;
}
export interface IpropsEditTodoUtil {
  todo: Todo;
  todos: Todo[];
  setTodos: Dispatch<SetStateAction<Todo[]>>;
  setIsEditTodo: Dispatch<SetStateAction<boolean[]>>;
  isEditTodo: boolean[];
  index: number;
}

export interface IPropsDeleteDialog extends ITodosState {
  todo: Todo;
  setOpenConfirm: Dispatch<SetStateAction<boolean>>;
}

export interface IPropsUpdateDialog extends ITodosState {
  todo: Todo;
  isEditTodo: boolean[];
  setIsEditTodo: Dispatch<SetStateAction<boolean[]>>;
  index: number;
  editedTodo: FormDataEntryValue;
  setOpenConfirm: Dispatch<SetStateAction<boolean>>;
}
