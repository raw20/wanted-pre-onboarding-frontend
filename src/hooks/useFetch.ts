import { useEffect } from "react";
import useGetTodos from "./api/todo/useGetTodos";

function useFetch() {
  const { getTodos, todos } = useGetTodos();

  useEffect(() => {
    getTodos();
  }, [getTodos]);
  return { todos, getTodos };
}
export default useFetch;
