import { Dispatch, SetStateAction } from "react";

export interface Todo {
  id: number;
  todo: string;
  isCompleted: boolean;
  userId: number;
}

export interface IpropsEditTodoUtil {
  todo: Todo;
  todos: Todo[];
  setIsEditTodo: Dispatch<SetStateAction<boolean[]>>;
  isEditTodo: boolean[];
  index: number;
}

export interface IPropsDeleteDialog {
  todo: Todo;
  setOpenConfirm: Dispatch<SetStateAction<boolean>>;
}

export interface IPropsUpdateDialog {
  todo: Todo;
  isEditTodo: boolean[];
  setIsEditTodo: Dispatch<SetStateAction<boolean[]>>;
  index: number;
  editedTodo: FormDataEntryValue;
  setOpenConfirm: Dispatch<SetStateAction<boolean>>;
}
