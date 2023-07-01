import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import Form from 'react-bootstrap/Form';
import { addTodo } from "../todo/todoSlice";

export default function AddToDo() {
  const [todo, setTodo] = useState('');
  const dispatch = useDispatch();
    const handleSubmit = (e, {id, title}) => {
        e.preventDefault()
        dispatch(addTodo({id, title}))
      }

  return (
    <div>
      <h1>To Do List</h1>
      <Form onSubmit={(e) => handleSubmit(e, {id:Date.now(),title:todo})}>
        <Form.Group className="mb-3">
          <Form.Control
            placeholder="Enter your to-do item"
            value={todo}
            onChange={event => setTodo(event.target.value)}
          />
          <button type="submit">Add</button>
        </Form.Group>
      </Form>
    </div>
  );
}
