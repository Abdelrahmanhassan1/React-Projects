import React, { useState } from "react";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";

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
      <ExpensesList items={filteredContent} />
    </Card>
  );
}

export default Expenses;
