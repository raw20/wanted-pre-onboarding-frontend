import axios, { AxiosError } from "axios";
import { useState } from "react";

function useCreateTodo(api: string) {
  const [feedbackMessage, setFeedbackMessage] = useState(" ");
  const token = window.localStorage.getItem("todoList");

  const createTodo = (todo: FormDataEntryValue) =>
    axios
      .post(
        `${api}/todos`,
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
        setFeedbackMessage(response.statusText);
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
