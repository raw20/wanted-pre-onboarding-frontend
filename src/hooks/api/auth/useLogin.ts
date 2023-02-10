import axios, { AxiosError } from "axios";
import { useState } from "react";

function useLogin() {
  const api = "https://pre-onboarding-selection-task.shop";
  const [feedbackMessage, setFeedbackMessage] = useState(" ");

  const loginController = (
    email: FormDataEntryValue,
    password: FormDataEntryValue
  ) =>
    axios
      .post(
        `${api}/auth/signin`,
        {
          email: email,
          password: password,
        },
        {
          headers: { "Content-Type": "application/json" },
        }
      )
      .then((response) => {
        const token = response.data.access_token;
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
