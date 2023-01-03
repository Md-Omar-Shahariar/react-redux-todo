import { loaded, updateText } from "../action";
import fetchTodos from "./fetchTodos";

const updateTodo = (todoId, todoText) => {
  console.log(todoId, todoText);
  return async (dispatch) => {
    const response = await fetch(`http://localhost:9000/todos/${todoId}`, {
      method: "PATCH",
      body: JSON.stringify({
        text: todoText,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });
    const todo = await response.json();
    console.log(todo);
    dispatch(updateText(todo.id, todoText));
    dispatch(fetchTodos);
  };
};
export default updateTodo;
