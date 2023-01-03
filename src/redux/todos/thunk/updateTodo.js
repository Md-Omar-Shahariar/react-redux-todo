import { loaded, updateText } from "../action";

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
    const response1 = await fetch("http://localhost:9000/todos");
    const todos = await response1.json();
    dispatch(loaded(todos));
  };
};
export default updateTodo;
