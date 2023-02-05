import axios, { AxiosError } from "axios";
import { useState } from "react";
import { Todo } from "../../../types/todo.t";
import { PORT } from "../../../utils/port";
import { token } from "../../../utils/token";

function useGetTodos() {
  const [todos, setTodos] = useState<Todo[]>([]);

  const getTodos = (): Promise<Todo[]> =>
    axios
      .get(`${PORT}/todos`, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        setTodos(response.data);
      })
      .catch((error: any) => {
        if (error instanceof AxiosError) {
          console.log(error.response);
          return error.response?.data;
        }
      });
  return { getTodos, todos };
}

export default useGetTodos;
