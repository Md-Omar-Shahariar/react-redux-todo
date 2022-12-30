import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { colorChanged, statusChanged } from "../redux/filter/action";

const Footer = () => {
  const todos = useSelector((state) => state.todos);
  const filters = useSelector((state) => state.filter);
  const { status, colors } = filters;
  const dispatch = useDispatch();
  const todosRemaining = todos.filter((todo) => !todo.completed).length;
  const handleStatusChanged = (status) => {
    dispatch(statusChanged(status));
  };
  const handleColorChange = (color) => {
    if (colors.includes(color)) {
      dispatch(colorChanged(color, "remove"));
    } else {
      dispatch(colorChanged(color, "added"));
    }
  };
  return (
    <div class="mt-4 flex justify-between text-xs text-gray-500">
      <p>
        {todosRemaining < 1
          ? "No task"
          : todosRemaining < 2
          ? todosRemaining + " task"
          : todosRemaining + " tasks"}{" "}
        left
      </p>
      <ul class="flex space-x-1 items-center text-xs">
        <li
          class={`cursor-pointer ${status === "All" && "font-bold"}`}
          onClick={() => handleStatusChanged("All")}
        >
          All
        </li>
        <li>|</li>
        <li
          class={`cursor-pointer ${status === "Incomplete" && "font-bold"}`}
          onClick={() => handleStatusChanged("Incomplete")}
        >
          Incomplete
        </li>
        <li>|</li>
        <li
          class={`cursor-pointer ${status === "Complete" && "font-bold"}`}
          onClick={() => handleStatusChanged("Complete")}
        >
          Complete
        </li>
        <li></li>
        <li></li>
        <li
          onClick={() => handleColorChange("green")}
          class={`h-3 w-3 border-2 border-green-500 md:hover:bg-green-500 rounded-full cursor-pointer ${
            colors.includes("green") && "bg-green-500"
          }`}
        ></li>
        <li
          onClick={() => handleColorChange("red")}
          class={`h-3 w-3 border-2 border-red-500 md:hover:bg-red-500 rounded-full cursor-pointer ${
            colors.includes("red") && "bg-red-500"
          }`}
        ></li>
        <li
          onClick={() => handleColorChange("yellow")}
          class={`h-3 w-3 border-2 border-yellow-500 md:hover:bg-yellow-500 rounded-full cursor-pointer ${
            colors.includes("yellow") && "bg-yellow-500"
          }`}
        ></li>
      </ul>
    </div>
  );
};

export default Footer;
