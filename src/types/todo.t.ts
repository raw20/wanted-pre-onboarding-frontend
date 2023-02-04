import { Dispatch, SetStateAction } from "react";

export interface Todo {
  id: number;
  todo: string;
  isCompleted: boolean;
  userId: number;
}

export interface IpropsEditTodoUtil {
  todos: Todo;
  setIsEditTodo: Dispatch<SetStateAction<boolean[]>>;
  isEditTodo: boolean[];
  index: number;
}

export interface IPropsDeleteDialog {
  todos: Todo;
  setOpenConfirm: Dispatch<SetStateAction<boolean>>;
}

export interface IPropsUpdateDialog {
  todos: Todo;
  isEditTodo: boolean[];
  setIsEditTodo: Dispatch<SetStateAction<boolean[]>>;
  index: number;
  editedTodo: FormDataEntryValue;
  setOpenConfirm: Dispatch<SetStateAction<boolean>>;
}
