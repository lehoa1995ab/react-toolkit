import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { removeTodo } from "../todo/todoSlice";

export default function ToDoItem({ id, title, completed }) {
  console.log(title);
  const [isCompleted, setIsCompleted] = useState(false);
  const dispatch = useDispatch();
  return (
    <div>
      <input type="checkbox"  checked={isCompleted}
            onChange={() => setIsCompleted(!isCompleted)}
          ></input>
          <span style={isCompleted ? { textDecoration: "line-through" } : {}}>
            {title}
          </span>
      <button onClick={() => dispatch(removeTodo(id))}>X</button>
    </div>
  );
}
