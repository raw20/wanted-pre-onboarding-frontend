import Button from "@mui/material/Button";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import useDeleteTodo from "../../hooks/api/todo/useDeleteTodo";
import { IPropsDeleteDialog } from "../../types/todo.t";
import { api } from "../../utils/api";

function DeleteDialog({
  todo,
  todos,
  setTodos,
  setOpenConfirm,
}: IPropsDeleteDialog) {
  const deleteTodo = useDeleteTodo(api);

  const deleteHandler = () => {
    deleteTodo(todo.id);
    setTodos(todos.filter((todoElement) => todoElement.id !== todo.id));
    setOpenConfirm(false);
  };

  return (
    <>
      <DialogTitle style={{ cursor: "move" }} id="draggable-dialog-title">
        정말로 삭제하시겠습니까?
      </DialogTitle>
      <DialogContent>
        <DialogContentText>
          삭제된 데이터는 복구할 수 없습니다.
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button autoFocus onClick={() => setOpenConfirm(false)}>
          취소
        </Button>
        <Button onClick={deleteHandler}>삭제</Button>
      </DialogActions>
    </>
  );
}

export default DeleteDialog;
