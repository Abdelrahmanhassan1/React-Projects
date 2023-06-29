import React from "react";
import Styles from "./TodoItem.module.css";

const TodoItem: React.FC<{ todoText: string }> = (props) => {
  return <li className={Styles.item}>{props.todoText}</li>;
};

export default TodoItem;
