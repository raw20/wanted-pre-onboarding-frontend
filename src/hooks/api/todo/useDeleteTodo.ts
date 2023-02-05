import axios, { AxiosError } from "axios";
import { PORT } from "../../../utils/port";

function useDeleteTodo() {
  const token = window.localStorage.getItem("todoList");

  const deleteTodo = (id: number) =>
    axios
      .delete(`${PORT}/todos/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        console.log(response);
        return response.data;
      })
      .catch((error: any) => {
        if (error instanceof AxiosError) {
          return error.response?.data;
        }
      });
  return deleteTodo;
}

export default useDeleteTodo;
