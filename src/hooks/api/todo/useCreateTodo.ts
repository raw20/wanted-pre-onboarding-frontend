import axios, { AxiosError } from "axios";
import { useState } from "react";
import { PORT } from "../../../utils/port";
import { token } from "../../../utils/token";

function useCreateTodo() {
  const [feedbackMessage, setFeedbackMessage] = useState(" ");

  const createTodo = (todo: FormDataEntryValue) =>
    axios
      .post(
        `${PORT}/todos`,
        {
          todo: todo,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      )
      .then((response) => {
        if (response.status === 201) setFeedbackMessage(response.statusText);
        return response.data;
      })
      .catch((error: any) => {
        if (error instanceof AxiosError) {
          setFeedbackMessage(error.response?.data.message);
          return error.response?.data;
        }
      });
  return { createTodo, feedbackMessage };
}

export default useCreateTodo;
