import React from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

function NewExpense(props) {
  const ExpenseFormDataHandler = (formData) => {
    const expensesData = {
      ...formData,
      id: Math.random(),
    };
    props.onAddingNewExpense(expensesData);
  };
  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpenseFormData={ExpenseFormDataHandler} />
    </div>
  );
}

export default NewExpense;
