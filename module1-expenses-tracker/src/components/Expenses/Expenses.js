import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";

function Expenses(props) {
  const [filterYear, setFilterYear] = useState("2020");

  const [filteredContent, setFilteredContent] = useState(props.expenses);

  const selectValueHandler = (selectValue) => {
    setFilterYear(selectValue);
    setFilteredContent(
      props.expenses.filter(
        (expense) => expense.date.getFullYear().toString() === selectValue
      )
    );
  };
  return (
    <Card className="expenses">
      <ExpensesFilter
        selectedYear={filterYear}
        onChangingSelectValue={selectValueHandler}
      />

      {filteredContent.map((expense) => (
        <ExpenseItem
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
          key={expense.id}
        />
      ))}
    </Card>
  );
}

export default Expenses;
