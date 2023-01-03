import { deleted } from "../action";

const deleteTodos = (todoId) => {
  return async (dispatch) => {
    await fetch(`http://localhost:9000/todos/${todoId}`, {
      method: "DELETE",

      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });

    dispatch(deleted(todoId));
  };
};
export default deleteTodos;
