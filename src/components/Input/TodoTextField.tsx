import React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import useCreateTodo from "../../hooks/api/todo/useCreateTodo";
import Container from "@mui/material/Container";

function TodoTextField() {
  const { createTodo, feedbackMessage } = useCreateTodo();
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const todo: FormDataEntryValue = data.get("todo") ?? "";
    createTodo(todo);
  };

  return (
    <Container>
      <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
        <TextField
          data-testid="new-todo-input"
          margin="normal"
          required
          fullWidth
          id="todo"
          label="Enter your todo"
          name="todo"
          autoFocus
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
