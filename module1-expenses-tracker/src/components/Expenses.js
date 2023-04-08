import React from "react";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import Card from "./Card";

function Expenses(props) {
  return (
    <Card className="expenses">
      {props.expenses.map((expense) => (
        <ExpenseItem
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))}
    </Card>
  );
}

export default Expenses;
