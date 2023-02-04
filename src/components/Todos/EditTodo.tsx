import React, { useState, MouseEvent } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import IconButton from "@mui/material/IconButton";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import CloseIcon from "@mui/icons-material/Close";
import Dialog from "@mui/material/Dialog";
import { IpropsEditTodoUtil } from "../../types/todo.t";
import PaperComponent from "../Paper/PaperComponent";
import UpdateDialog from "../Dialog/UpdateDialog";

function EditTodo({
  todos,
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
    console.log(todo);
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
          data-testid="new-todo-input"
          required
          id="todo"
          name="todo"
          size="small"
          label={todos.todo}
          autoFocus
          sx={{ width: 250 }}
        />
        <Box sx={{ display: "flex", ml: 3 }}>
          <IconButton type="submit" data-testid="modify-button">
            <EditOutlinedIcon />
          </IconButton>
          <IconButton data-testid="delete-button" onClick={cancelHandler}>
            <CloseIcon />
          </IconButton>
        </Box>
      </Box>

      <Dialog
        open={openConfirm}
        onClose={ConfirmModalCloseHandler}
        PaperComponent={PaperComponent}
        aria-labelledby="draggable-dialog-title"
      >
        <UpdateDialog
          todos={todos}
          isEditTodo={isEditTodo}
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
