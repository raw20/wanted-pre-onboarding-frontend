import React from "react";
import Button from "@mui/material/Button";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { IPropsUpdateDialog } from "../../types/todo.t";
import useUpdateTodo from "../../hooks/api/todo/useUpdateTodo";
import { api } from "../../utils/api";

function UpdateDialog({
  todo,
  todos,
  editedTodo,
  isEditTodo,
  setTodos,
  setIsEditTodo,
  index,
  setOpenConfirm,
}: IPropsUpdateDialog) {
  const updateTodo = useUpdateTodo(api);

  const updateHandler = async () => {
    let newIsEditTodo = [...isEditTodo];
    const cloneTodos = [...todos];

    if (isEditTodo[index] === true) {
      newIsEditTodo[index] = false;
      setIsEditTodo([...newIsEditTodo]);
      const updatedTodo = await updateTodo(
        todo.id,
        editedTodo,
        todo.isCompleted
      );
      cloneTodos.splice(index, 1, updatedTodo);

      setTodos(cloneTodos);
      setOpenConfirm(false);
    }
  };
  return (
    <>
      <DialogTitle style={{ cursor: "move" }} id="draggable-dialog-title">
        정말로 수정하시겠습니까?
      </DialogTitle>
      <DialogContent>
        <DialogContentText>
          수정된 데이터는 복구할 수 없습니다.
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button autoFocus onClick={() => setOpenConfirm(false)}>
          취소
        </Button>
        <Button onClick={updateHandler}>수정</Button>
      </DialogActions>
    </>
  );
}

export default UpdateDialog;
