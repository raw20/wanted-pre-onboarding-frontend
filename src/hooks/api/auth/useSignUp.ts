import axios, { AxiosError } from "axios";
import { useState } from "react";
import { PORT } from "../../../utils/port";

function useSignUp() {
  const [feedbackMessage, setFeedbackMessage] = useState(" ");

  const signUpController = (
    email: FormDataEntryValue,
    password: FormDataEntryValue
  ) =>
    axios
      .post(
        `${PORT}/auth/signup`,
        {
          email: email,
          password: password,
        },
        {
          headers: { "Content-Type": "application/json" },
        }
      )
      .then((response) => {
        alert("회원가입이 완료되었습니다.");
        window.location.replace("/signin");
        return response.data;
      })
      .catch((error: any) => {
        if (error instanceof AxiosError) {
          setFeedbackMessage(error.response?.data.message);
        }
      });
  return { signUpController, feedbackMessage };
}

export default useSignUp;
