import { Container } from "@mui/material";
import Box from "@mui/material/Box";
import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import Checkbox from "@mui/material/Checkbox";
import TodoUtilButton from "../Button/TodoUtilButton";
import EditTodo from "./EditTodo";
import useUpdateTodo from "../../hooks/api/todo/useUpdateTodo";
import { api } from "../../utils/api";
import { ITodosState } from "../../types/todo.t";

function Todos({ todos, setTodos }: ITodosState) {
  const updateTodo = useUpdateTodo(api);
  const [checkTodo, setCheckTodo] = useState<number[]>([]);
  const [isEditTodo, setIsEditTodo] = useState<boolean[]>([]);

  const checkhandleChange = async (
    event: React.ChangeEvent<HTMLInputElement>,
    id: number,
    todo: string,
    index: number
  ) => {
    if (event.target.checked) {
      setCheckTodo((prev) => [...prev, id]);
    } else {
      setCheckTodo(checkTodo.filter((todoId) => todoId !== id));
    }
    const cloneTodos = [...todos];
    const checkedTodo = await updateTodo(id, todo, event.target.checked);
    cloneTodos.splice(index, 1, checkedTodo);

    setTodos(cloneTodos);
  };
  return (
    <Container component="main" maxWidth="xs" sx={{ mt: 5 }}>
      {todos?.map((todo, index) => (
        <Box
          key={todo.id}
          sx={{
            height: 50,
            display: "flex",
            justifyContent: "space-between",
            borderBottom: "1px solid primary.light",
          }}
        >
          <Grid
            item
            xs={2}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Checkbox
              checked={checkTodo.includes(todo.id) ? true : false}
              onChange={(event) =>
                checkhandleChange(event, todo.id, todo.todo, index)
              }
              inputProps={{ "aria-label": "controlled" }}
            />
          </Grid>

          <Grid
            item
            xs={4}
            sx={{
              width: 150,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              color: todo.isCompleted ? "#666" : "#000",
              textDecoration: todo.isCompleted ? "line-through" : "none",
            }}
          >
            {isEditTodo[index] === true ? (
              <EditTodo
                todo={todo}
                todos={todos}
                setTodos={setTodos}
                setIsEditTodo={setIsEditTodo}
                isEditTodo={isEditTodo}
                index={index}
              />
            ) : (
              todo.todo
            )}
          </Grid>

          <Grid
            item
            xs={6}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {isEditTodo[index] === true ? null : (
              <TodoUtilButton
                todo={todo}
                todos={todos}
                setTodos={setTodos}
                setIsEditTodo={setIsEditTodo}
                isEditTodo={isEditTodo}
                index={index}
              />
            )}
          </Grid>
        </Box>
      ))}
    </Container>
  );
}

export default Todos;
