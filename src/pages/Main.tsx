import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Main() {
  const navigate = useNavigate();
  const token = window.localStorage.getItem("todoList");

  useEffect(() => {
    if (!token) {
      navigate("/signin");
    } else {
      navigate("/todo");
    }
  }, []);
  return <></>;
}

export default Main;
