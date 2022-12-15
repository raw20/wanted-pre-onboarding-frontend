import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import Modal from "react-modal";
import UpdateTodos from "../components/UpdateTodos";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};
Modal.setAppElement("#root");

function Todo() {
  const url = "https://pre-onboarding-selection-task.shop";
  const [data, setData] = useState([]);
  const [toDo, setToDo] = useState("");
  const [message, setMessage] = useState("");
  const [id, setId] = useState(0);
  const [editToDo, setEditToDo] = useState("");
  const [modalIsOpen, setIsOpen] = useState(false);
  const token = window.localStorage.getItem("token");
  const navigate = useNavigate();

  function toDosHandler(e) {
    e.preventDefault();
    setToDo(e.target.value);

    if (e.target.value.length > 0) {
      setMessage("");
    } else {
      setMessage("1글자 이상 입력해주세요.");
    }
  }

  function submitHandler(e) {
    e.preventDefault();
    setToDo("");
    axios
      .post(
        `${url}/todos`,
        { todo: toDo },
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      )
      .then((res) => {
        const status = res.status;
        if (status === 201) {
          console.log("success", res);
        }
      })
      .catch((error) => {
        const status = error.response.status;
        console.log("submit-error", error.response);
        if (status === 400) {
          alert("1 글자 이상 입력해주세요.");
        }
      });
  }

  function updateHandler(e, id, todo) {
    e.preventDefault();
    setIsOpen(true);
    setId(id);
    setEditToDo(todo);
  }

  function finishedTodos(e, id, todos, complete) {
    e.preventDefault();
    axios
      .put(
        `${url}/todos/${id}`,
        { todo: todos, isCompleted: complete === false ? true : false },
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      )
      .then((res) => {
        console.log("success", res);
      })
      .catch((error) => {
        console.log("update-error", error.response);
      });
  }
  function deleteHandler(e, id) {
    e.preventDefault();

    axios
      .delete(`${url}/todos/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        console.log("success", res);
      })
      .catch((error) => {
        console.log("delete-error", error.response);
      });
  }

  function logOut() {
    window.localStorage.removeItem("token");
    alert("로그아웃 되었습니다.");
    navigate("/");
  }

  async function getToDos() {
    await axios
      .get(`${url}/todos`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        const status = res.status;
        if (status === 200) {
          setData(res.data);
        }
      })
      .catch((error) => {
        console.log("get-error", error.response);
        if (!token) {
          navigate("/");
        }
      });
  }

  useEffect(() => {
    getToDos();
  }, [data]);

  return (
    <>
      <div style={{ display: "flex" }}>
        <h1>ToDo 리스트</h1>
        <Link to="/">
          <Button onClick={logOut} variant="primary" type="submit">
            로그아웃
          </Button>
        </Link>
      </div>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>할일을 적어주세요.</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter toDos"
            value={toDo}
            onChange={(e) => toDosHandler(e)}
          />
          <Form.Label>{message}</Form.Label>
        </Form.Group>
        <Button
          variant="primary"
          type="submit"
          onClick={(e) => submitHandler(e)}
        >
          작성
        </Button>

        {data?.map((ele) => (
          <>
            <Card key={ele.id} style={{ width: "18rem" }}>
              <Card.Body>
                <Card.Text>{ele.todo}</Card.Text>
                <Button
                  variant="primary"
                  onClick={(e) => updateHandler(e, ele.id, ele.todo)}
                >
                  수정
                </Button>
                <Button
                  variant="primary"
                  onClick={(e) => deleteHandler(e, ele.id)}
                >
                  삭제
                </Button>
                <Button
                  variant="primary"
                  onClick={(e) =>
                    finishedTodos(e, ele.id, ele.todo, ele.isCompleted)
                  }
                >
                  {ele.isCompleted ? "다시" : "완료"}
                </Button>
              </Card.Body>
            </Card>
            <Modal
              isOpen={modalIsOpen}
              style={customStyles}
              contentLabel="Example Modal"
            >
              <UpdateTodos
                id={id}
                editToDo={editToDo}
                modalIsOpen={modalIsOpen}
                setIsOpen={setIsOpen}
              />
            </Modal>
          </>
        ))}
      </Form>
    </>
  );
}

export default Todo;
