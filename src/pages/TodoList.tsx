import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import Header from "../components/Header/Header";
import TodoTextField from "../components/Input/TodoTextField";
import Todos from "../components/Todos/Todos";
import useGetTodos from "../hooks/api/todo/useGetTodos";
import { Todo } from "../types/todo.t";
import { api } from "../utils/api";

function TodoList() {
  const token = window.localStorage.getItem("todoList");
  const [todos, setTodos] = useState<Todo[]>([]);
  const { getTodos } = useGetTodos(api);
  useEffect(() => {
    const fetchData = async () => {
      const todos = await getTodos();
      setTodos(todos);
    };
    fetchData();
  }, []);

  if (!token) return <Navigate replace to="/signin" />;
  return (
    <>
      <Header />
      <TodoTextField todos={todos} setTodos={setTodos} />
      <Todos todos={todos} setTodos={setTodos} />
    </>
  );
}

export default TodoList;
