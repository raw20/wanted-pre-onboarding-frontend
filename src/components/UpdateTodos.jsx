import React, { useState } from "react";
import axios from "axios";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

function UpdateTodos({ setIsOpen, id, editToDo }) {
  const url = "https://pre-onboarding-selection-task.shop";
  const token = window.localStorage.getItem("token");
  const [toDo, setToDo] = useState("");

  function toDosHandler(e) {
    e.preventDefault();
    setToDo(e.target.value);
  }
  function updateHandler(e) {
    e.preventDefault();
    axios
      .put(
        `${url}/todos/${id}`,
        { todo: toDo, isCompleted: false },
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      )
      .then((res) => {
        console.log("success", res);
        alert("수정되었습니다.");
        setIsOpen(false);
      })
      .catch((error) => {
        console.log("update-error", error.response);
      });
  }
  function closeModal() {
    setIsOpen(false);
  }
  return (
    <>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>할일을 적어주세요.</Form.Label>
          <Form.Control
            type="text"
            placeholder={editToDo}
            value={toDo}
            onChange={(e) => toDosHandler(e)}
          />
        </Form.Group>
        <Button type="submit" onClick={(e) => updateHandler(e)}>
          수정
        </Button>
        <Button onClick={closeModal}>취소</Button>
      </Form>
    </>
  );
}

export default UpdateTodos;
