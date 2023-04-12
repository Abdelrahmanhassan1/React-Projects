import React, { useState } from "react";
import "./ExpenseForm.css";

function ExpenseForm(props) {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");

  //   const [userInput, setUserInput] = useState({
  //     title: "",
  //     amount: "",
  //     date: "",
  //   });

  const titleChangeHandler = (event) => {
    setTitle(event.target.value);

    // setUserInput((prevInput) => {
    //   return { ...prevInput, title: event.target.value };
    // });
  };
  const amountChangeHandler = (event) => {
    setAmount(event.target.value);

    // setUserInput((prevInput) => {
    //   return { ...prevInput, amount: event.target.value };
    // });
  };
  const dateChangeHandler = (event) => {
    setDate(event.target.value);

    // setUserInput((prevInput) => {
    //   return { ...prevInput, date: event.target.value };
    // });
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();

    const formInput = {
      title: title,
      amount: amount,
      date: new Date(date),
    };

    props.onSaveExpenseFormData(formInput);
    setTitle("");
    setAmount("");
    setDate("");
  };

  const [showForm, setShowForm] = useState(false);

  if (!showForm) {
    return (
      <button
        onClick={() => {
          setShowForm(true);
        }}
      >
        Add New Expense
      </button>
    );
  }
  return (
    showForm && (
      <form onSubmit={formSubmitHandler}>
        <div className="new-expense__controls">
          <div className="new-expense__control">
            <label>Title</label>
            <input type="text" onChange={titleChangeHandler} value={title} />
          </div>
          <div className="new-expense__control">
            <label>Amount</label>

            <input
              type="number"
              min="0.01"
              step="0.01"
              onChange={amountChangeHandler}
              value={amount}
            />
          </div>
          <div className="new-expense__control">
            <label>Date</label>
            <input
              type="date"
              min="2019-01-01"
              max="2023-12-31"
              onChange={dateChangeHandler}
              value={date}
            />
          </div>
        </div>

        <div className="new-expense__actions">
          <button
            onClick={() => {
              setShowForm(false);
            }}
          >
            Cancel
          </button>
          <button
            type="submit"
            onClick={() => {
              setShowForm(true);
            }}
          >
            Add Expense
          </button>
        </div>
      </form>
    )
  );
}

export default ExpenseForm;
