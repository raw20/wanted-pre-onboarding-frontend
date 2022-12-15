import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";

function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const url = "https://pre-onboarding-selection-task.shop";
  const navigate = useNavigate();

  function emailHandler(e) {
    if (e.target.value.indexOf("@") !== -1) {
      setEmail(e.target.value);
    } else {
      setEmail("");
    }
  }
  function passwordHandler(e) {
    if (e.target.value.length > 7) {
      setPassword(e.target.value);
    } else {
      setPassword("");
    }
  }

  function signUpHandler(e) {
    e.preventDefault();
    axios
      .post(
        `${url}/auth/signup`,
        { email: email, password: password },
        {
          headers: { "Content-Type": "application/json" },
        }
      )
      .then((res) => {
        const status = res.status;
        if (status === 201) {
          alert("성공적으로 가입되었습니다.");
          navigate("/");
        }
      })
      .catch((error) => {
        const status = error.response.status;
        if (status === 400) {
          setMessage(error.response.data.message);
        }
      });
  }
  return (
    <>
      <div style={{ display: "flex" }}>
        <h1>회원가입</h1>
        <Link to="/">
          <Button variant="primary" type="submit">
            뒤로가기
          </Button>
        </Link>
      </div>

      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>이메일</Form.Label>
          <Form.Control
            onChange={(e) => emailHandler(e)}
            type="email"
            placeholder="Enter email"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>비밀번호</Form.Label>
          <Form.Control
            onChange={(e) => passwordHandler(e)}
            type="password"
            placeholder="Password"
          />
          <Form.Text className="text-muted">{message}</Form.Text>
        </Form.Group>
        <Form.Group>
          {email && password ? (
            <Button
              variant="primary"
              type="submit"
              onClick={(e) => signUpHandler(e)}
            >
              회원 가입
            </Button>
          ) : (
            <p>이메일은 @포함 비밀번호는 8글자 이상 입력해주세요.</p>
          )}
        </Form.Group>
      </Form>
    </>
  );
}

export default SignUp;
