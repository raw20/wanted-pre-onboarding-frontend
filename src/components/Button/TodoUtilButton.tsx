import React, { MouseEvent, useState } from "react";
import IconButton from "@mui/material/IconButton";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import DeleteDialog from "../Dialog/DeleteDialog";
import Dialog from "@mui/material/Dialog";
import PaperComponent from "../Paper/PaperComponent";
import { IpropsEditTodoUtil } from "../../types/todo.t";

function TodoUtilButton({
  todo,
  todos,
  setIsEditTodo,
  isEditTodo,
  index,
}: IpropsEditTodoUtil) {
  const [openConfirm, setOpenConfirm] = useState(false);

  const editHandler = (event: MouseEvent<HTMLButtonElement>) => {
    const todosEditBooleanArray = Array.from(
      { length: todos.length },
      () => false
    );
    setIsEditTodo(todosEditBooleanArray);
    let newIsEditTodo = [...isEditTodo];
    if (isEditTodo[index] === false) {
      newIsEditTodo[index] = true;
      setIsEditTodo([...newIsEditTodo]);
    }
  };

  const deleteHandler = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    setOpenConfirm(true);
  };
  const ConfirmModalCloseHandler = () => {
    setOpenConfirm(false);
  };

  return (
    <>
      <IconButton data-testid="modify-button" onClick={editHandler}>
        <EditOutlinedIcon />
      </IconButton>
      <IconButton data-testid="delete-button" onClick={deleteHandler}>
        <DeleteOutlinedIcon />
      </IconButton>
      <Dialog
        open={openConfirm}
        onClose={ConfirmModalCloseHandler}
        PaperComponent={PaperComponent}
        aria-labelledby="draggable-dialog-title"
      >
        <DeleteDialog todo={todo} setOpenConfirm={setOpenConfirm} />
      </Dialog>
    </>
  );
}

export default TodoUtilButton;
