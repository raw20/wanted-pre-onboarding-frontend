import axios, { AxiosError } from "axios";

function useGetTodos(api: string) {
  const token = window.localStorage.getItem("todoList");

  const getTodos = () =>
    axios
      .get(`${api}/todos`, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
          "Cache-Control": "no-store",
          Pragma: "no-store",
          Expires: "0",
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

  return { getTodos };
}

export default useGetTodos;
