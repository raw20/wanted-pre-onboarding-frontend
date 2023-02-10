import React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import useCreateTodo from "../../hooks/api/todo/useCreateTodo";
import { api } from "../../utils/api";
import { ITodosState } from "../../types/todo.t";

function TodoTextField({ todos, setTodos }: ITodosState) {
  const { createTodo, feedbackMessage } = useCreateTodo(api);
  const [todoDefaultValue, setTodoDefaultValue] = useState(" ");

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const todo: FormDataEntryValue = data.get("todo") ?? "";
    const newTodos = await createTodo(todo);
    setTodos([...todos, newTodos]);
    setTodoDefaultValue("");
  };
  return (
    <Container sx={{ display: "flex", justifyContent: "center" }}>
      <Box
        component="form"
        onSubmit={handleSubmit}
        noValidate
        sx={{ display: "flex", flexDirection: "column", mt: 1 }}
      >
        <TextField
          data-testid="new-todo-input"
          margin="normal"
          required
          id="todo"
          label="Enter your todo"
          name="todo"
          autoFocus
          value={todoDefaultValue}
          onChange={(newValue) => {
            setTodoDefaultValue(newValue.target.value);
          }}
        />
        <Grid item xs={12}>
          <Typography
            variant="subtitle2"
            gutterBottom
            sx={{
              color:
                feedbackMessage === "Created" ? "success.main" : "warning.main",
              fontWeight: "bold",
            }}
          >
            {feedbackMessage}
          </Typography>
        </Grid>
      </Box>
      <Box sx={{ ml: 2, mt: 1 }}>
        <Grid container justifyContent="center">
          <Button
            data-testid="new-todo-add-button"
            type="submit"
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            추가
          </Button>
        </Grid>
      </Box>
    </Container>
  );
}

export default TodoTextField;
