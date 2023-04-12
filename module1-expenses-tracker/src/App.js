import { useState } from "react";
import "./App.css";

import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

function App() {
  const INITIAL_EXPENSES = [
    {
      id: "e1",
      title: "Laptop",
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    {
      id: "e2",
      title: "New TV (Toshiba)",
      amount: 799.49,
      date: new Date(2021, 2, 12),
    },
    {
      id: "e3",
      title: "Car Insurance",
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: "e4",
      title: "New Desk (Wooden)",
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ];

  const [expenses, setExpenses] = useState(INITIAL_EXPENSES);

  const AddingNewExpenseHandler = (newExpense) => {
    setExpenses((prevExpenses) => {
      return [newExpense, ...prevExpenses];
    });
  };

  return (
    <div className="App">
      <NewExpense onAddingNewExpense={AddingNewExpenseHandler} />
      <Expenses expenses={expenses} />
    </div>
  );
}

export default App;
