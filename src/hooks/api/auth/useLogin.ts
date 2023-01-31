import axios, { AxiosError } from "axios";
import { useState } from "react";
import { PORT } from "../../../utils/port";

function useLogin() {
  const [feedbackMessage, setFeedbackMessage] = useState(" ");

  const loginController = (
    email: FormDataEntryValue,
    password: FormDataEntryValue
  ) =>
    axios
      .post(
        `${PORT}/auth/signin`,
        {
          email: email,
          password: password,
        },
        {
          headers: { "Content-Type": "application/json" },
        }
      )
      .then((response) => {
        const token = response.data.token;
        window.localStorage.setItem("todoList", token);
        window.location.replace("/todo");
        return response.data.message;
      })
      .catch((error: any) => {
        if (error instanceof AxiosError) {
          console.log(error.response);
          setFeedbackMessage(error.response?.data.message);
        }
      });
  return { loginController, feedbackMessage };
}

export default useLogin;
