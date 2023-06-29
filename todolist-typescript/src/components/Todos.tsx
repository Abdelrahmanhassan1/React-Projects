import React from "react";
import TodoItem from "./TodoItem";
import Todo from "../models/todo";
import Styles from "./Todos.module.css";

const Todos: React.FC<{ items: Todo[] }> = (props) => {
  return (
    <ul className={Styles.todos}>
      {props.items.map((item) => {
        return <TodoItem key={item.id} todoText={item.text} />;
      })}
    </ul>
  );
};

export default Todos;
