import { useEffect, useState } from "react";
import useCreateTodo from "./api/todo/useCreateTodo";
import useGetTodos from "./api/todo/useGetTodos";
import useDeleteTodo from "./api/todo/useDeleteTodo";
import useUpdateTodo from "./api/todo/useUpdateTodo";

function useFetch() {
  const [update, setUpdate] = useState(false);
  const { getTodos, todos } = useGetTodos();
  const { createTodo, feedbackMessage } = useCreateTodo();
  const deleteTodo = useDeleteTodo();
  const updateTodo = useUpdateTodo();

  useEffect(() => {
    setUpdate(false);
    getTodos();
  }, [update]);
  return {
    todos,
    getTodos,
    createTodo,
    feedbackMessage,
    deleteTodo,
    updateTodo,
  };
}
export default useFetch;
