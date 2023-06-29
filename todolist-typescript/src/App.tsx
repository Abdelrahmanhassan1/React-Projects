import { useState } from "react";
import "./App.css";
import NewTodo from "./components/NewTodo";
import Todos from "./components/Todos";
import Todo from "./models/todo";

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);

  const addingTodo = (todoItemText: string) => {
    if (todoItemText?.trim().length === 0) {
      return;
    }

    const newTodo = new Todo(todoItemText);
    setTodos((prev) => {
      return [...prev, newTodo];
    });
  };
  return (
    <div>
      <NewTodo onAddTodo={addingTodo} />
      <Todos items={todos} />
    </div>
  );
}

export default App;
