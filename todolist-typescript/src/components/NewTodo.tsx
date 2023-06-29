import React, { useRef } from "react";
import Styles from "./NewTodo.module.css";

const NewTodo: React.FC<{
  onAddTodo: (text: string) => void;
}> = (props) => {
  const todoItemTextRef = useRef<HTMLInputElement>(null);

  const submitFormHandler = (event: React.FormEvent) => {
    event.preventDefault();
    const newTodo = todoItemTextRef.current!.value;
    props.onAddTodo(newTodo);
  };

  return (
    <form className={Styles.form} onSubmit={submitFormHandler}>
      <label htmlFor="todo-text">Todo Text</label>
      <input type="text" id="todo-text" ref={todoItemTextRef} />
      <button type="submit">Add Todo</button>
    </form>
  );
};

export default NewTodo;
