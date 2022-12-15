import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "bootstrap/dist/css/bootstrap.min.css";

function Home() {
  const url = "https://pre-onboarding-selection-task.shop";
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  function emailHandler(e) {
    setEmail(e.target.value);
  }
  function passwordHandler(e) {
    setPassword(e.target.value);
  }
  function loginHandler(e) {
    e.preventDefault();
    axios
      .post(
        `${url}/auth/signin`,
        { email: email, password: password },
        {
          headers: { "Content-Type": "application/json" },
        }
      )
      .then((res) => {
        const token = res.data.access_token;
        window.localStorage.setItem("token", token);
        console.log(res);
        navigate("/todo");
      })
      .catch((error) => {
        console.log(error);
        alert("등록되지 않는 회원이거나 회원정보가 일치하지 않습니다.");
      });
  }

  return (
    <>
      <h1>로그인</h1>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>이메일</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            onChange={(e) => emailHandler(e)}
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>비밀번호</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            onChange={(e) => passwordHandler(e)}
          />
        </Form.Group>

        <Button
          variant="primary"
          type="submit"
          onClick={(e) => loginHandler(e)}
        >
          로그인
        </Button>
        <Link to="/signup">
          <Button variant="primary" type="submit">
            회원 가입
          </Button>
        </Link>
      </Form>
    </>
  );
}

export default Home;
