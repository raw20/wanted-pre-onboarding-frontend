import React, { useState, MouseEvent } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import IconButton from "@mui/material/IconButton";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import CloseIcon from "@mui/icons-material/Close";
import Dialog from "@mui/material/Dialog";
import { IpropsEditTodoUtil } from "../../types/todo.t";
import UpdateDialog from "../Dialog/UpdateDialog";

function EditTodo({
  todo,
  todos,
  setTodos,
  setIsEditTodo,
  isEditTodo,
  index,
}: IpropsEditTodoUtil) {
  const [editedTodo, setEditedTodo] = useState<FormDataEntryValue>("");
  const [openConfirm, setOpenConfirm] = useState(false);

  const cancelHandler = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    let newIsEditTodo = [...isEditTodo];
    if (isEditTodo[index] === true) {
      newIsEditTodo[index] = false;
      setIsEditTodo([...newIsEditTodo]);
    }
  };
  const ConfirmModalCloseHandler = () => {
    setOpenConfirm(false);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const todo: FormDataEntryValue = data.get("todo") ?? "";
    setEditedTodo(todo);
    setOpenConfirm(true);
  };

  return (
    <>
      <Box
        component="form"
        onSubmit={handleSubmit}
        noValidate
        sx={{ display: "flex" }}
      >
        <TextField
          data-testid="modify-input"
          required
          id="todo"
          name="todo"
          size="small"
          label={todo.todo}
          autoFocus
          sx={{ width: 250 }}
        />
        <Box sx={{ display: "flex", ml: 3 }}>
          <IconButton type="submit" data-testid="submit-button">
            <EditOutlinedIcon />
          </IconButton>
          <IconButton data-testid="cancel-button" onClick={cancelHandler}>
            <CloseIcon />
          </IconButton>
        </Box>
      </Box>

      <Dialog open={openConfirm} onClose={ConfirmModalCloseHandler}>
        <UpdateDialog
          todo={todo}
          todos={todos}
          isEditTodo={isEditTodo}
          setTodos={setTodos}
          setIsEditTodo={setIsEditTodo}
          index={index}
          editedTodo={editedTodo}
          setOpenConfirm={setOpenConfirm}
        />
      </Dialog>
    </>
  );
}

export default EditTodo;
