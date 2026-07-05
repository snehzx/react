import React, { useState } from "react";
import { UseTodo } from "../context";

export default function TodoForm() {
  const [todo, setTodo] = useState("");
  const { addTodo } = UseTodo();

  const add = (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!todo) return;
    addTodo({ id: Date.now(), todo, completed: false });
    setTodo("");
  };

  return (
    <form onSubmit={add}>
      <input
        type="text"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
        placeholder="write todo"
      />
      <button type="submit">add</button>
    </form>
  );
}
