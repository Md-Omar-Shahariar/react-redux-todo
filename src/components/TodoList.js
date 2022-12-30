import React from "react";
import Todo from "./Todo";
import { useSelector } from "react-redux";

const TodoList = () => {
  const todos = useSelector((state) => state.todos);
  const filter = useSelector((state) => state.filter);
  return (
    <div class="mt-2 text-gray-700 text-sm max-h-[300px] overflow-y-auto">
      {todos
        .filter((todo) => {
          const { status } = filter;
          switch (status) {
            case "Complete":
              return todo.completed;
            case "Incomplete":
              return !todo.completed;

            default:
              return true;
          }
        })
        .filter((todo) => {
          const { colors } = filter;
          if (colors.length > 0) {
            return colors.includes(todo.color);
          }
          return true;
        })
        .map((todo) => (
          <Todo todo={todo} key={todo.id}></Todo>
        ))}
    </div>
  );
};

export default TodoList;
