import axios, { AxiosError } from "axios";

function useDeleteTodo(api: String) {
  const token = window.localStorage.getItem("todoList");

  const deleteTodo = (id: number) =>
    axios
      .delete(`${api}/todos/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
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
