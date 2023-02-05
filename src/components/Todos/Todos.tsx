import { Container } from "@mui/material";
import Box from "@mui/material/Box";
import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import Checkbox from "@mui/material/Checkbox";
import TodoUtilButton from "../Button/TodoUtilButton";
import useFetch from "../../hooks/useFetch";
import EditTodo from "./EditTodo";

function Todos() {
  const { todos, updateTodo } = useFetch();
  const [checkTodo, setCheckTodo] = useState<number[]>([]);
  const [isEditTodo, setIsEditTodo] = useState<boolean[]>([]);

  const checkhandleChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    id: number,
    todo: string
  ) => {
    if (event.target.checked) {
      setCheckTodo((prev) => [...prev, id]);
    } else {
      setCheckTodo(checkTodo.filter((todoId) => todoId !== id));
    }
    updateTodo(id, todo, event.target.checked);
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
              onChange={(event) => checkhandleChange(event, todo.id, todo.todo)}
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
              textDecoration: todo.isCompleted ? "line-through" : "none",
            }}
          >
            {isEditTodo[index] === true ? (
              <EditTodo
                todo={todo}
                todos={todos}
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
