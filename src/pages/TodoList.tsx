import React from "react";
import Header from "../components/Header/Header";
import TodoTextField from "../components/Input/TodoTextField";
import Todos from "../components/Todos/Todos";

function TodoList() {
  return (
    <>
      <Header />
      <TodoTextField />
      <Todos />
    </>
  );
}

export default TodoList;
