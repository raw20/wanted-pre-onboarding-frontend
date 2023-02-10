import axios, { AxiosError } from "axios";

function useUpdateTodo(api: string) {
  const token = window.localStorage.getItem("todoList");

  const updateTodo = (
    id: number,
    todo: FormDataEntryValue,
    isCompleted: boolean
  ) =>
    axios
      .put(
        `${api}/todos/${id}`,
        {
          todo: todo,
          isCompleted: isCompleted,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      )
      .then((response) => {
        return response.data;
      })
      .catch((error: any) => {
        if (error instanceof AxiosError) {
          return error.response?.data;
        }
      });
  return updateTodo;
}

export default useUpdateTodo;
