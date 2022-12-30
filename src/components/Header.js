import React, { useState } from "react";
import note from "../images/notes.png";
import plus from "../images/plus.png";
import double_tick from "../images/double-tick.png";
import { useDispatch } from "react-redux";
import { added } from "../redux/todos/action";

const Header = () => {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();
  const handleInput = (e) => {
    setInput(e.target.value);
  };
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(added(input));
    setInput("");
  };
  return (
    <div>
      <form
        class="flex items-center bg-gray-100 px-4 py-4 rounded-md"
        onSubmit={submitHandler}
      >
        <img src={note} class="w-6 h-6" alt="Add todo" />
        <input
          type="text"
          placeholder="Type your todo"
          class="w-full text-lg px-4 py-1 border-none outline-none bg-gray-100 text-gray-500"
          value={input}
          onChange={handleInput}
        />
        <button
          type="submit"
          style={{
            backgroundImage: `url(${plus})`,
          }}
          class="appearance-none w-8 h-8  bg-no-repeat bg-contain"
        ></button>
      </form>

      <ul class="flex justify-between my-4 text-xs text-gray-500">
        <li class="flex space-x-1 cursor-pointer">
          <img class="w-4 h-4" src={double_tick} alt="Complete" />
          <span>Complete All Tasks</span>
        </li>
        <li class="cursor-pointer">Clear completed</li>
      </ul>
    </div>
  );
};

export default Header;
