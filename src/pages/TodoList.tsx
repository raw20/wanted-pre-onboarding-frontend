import React from "react";
import { Navigate } from "react-router-dom";
import Header from "../components/Header/Header";
import TodoTextField from "../components/Input/TodoTextField";
import Todos from "../components/Todos/Todos";

function TodoList() {
  const token = window.localStorage.getItem("todoList");

  if (!token) return <Navigate replace to="/signin" />;
  return (
    <>
      <Header />
      <TodoTextField />
      <Todos />
    </>
  );
}

export default TodoList;
