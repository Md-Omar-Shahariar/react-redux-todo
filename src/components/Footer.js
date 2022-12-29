import React from "react";
import { useSelector } from "react-redux";

const Footer = () => {
  const todos = useSelector((state) => state.todos);
  const todosRemaining = todos.filter((todo) => !todo.completed).length;
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
        <li class="cursor-pointer font-bold">All</li>
        <li>|</li>
        <li class="cursor-pointer">Incomplete</li>
        <li>|</li>
        <li class="cursor-pointer">Complete</li>
        <li></li>
        <li></li>
        <li class="h-3 w-3 border-2 border-green-500 md:hover:bg-green-500 rounded-full cursor-pointer bg-green-500"></li>
        <li class="h-3 w-3 border-2 border-red-500 md:hover:bg-red-500 rounded-full cursor-pointer"></li>
        <li class="h-3 w-3 border-2 border-yellow-500 md:hover:bg-yellow-500 rounded-full cursor-pointer"></li>
      </ul>
    </div>
  );
};

export default Footer;
