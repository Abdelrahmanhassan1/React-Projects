import React, { useState } from "react";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

function Expenses(props) {
  const [filterYear, setFilterYear] = useState("2020");

  let filteredContent = props.expenses;

  const selectValueHandler = (selectValue) => {
    setFilterYear(selectValue);
  };

  filteredContent = props.expenses.filter(
    (expense) => expense.date.getFullYear().toString() === filterYear
  );

  return (
    <Card className="expenses">
      <ExpensesFilter
        selectedYear={filterYear}
        onChangingSelectValue={selectValueHandler}
      />
      <ExpensesChart expenses={filteredContent} />
      <ExpensesList items={filteredContent} />
    </Card>
  );
}

export default Expenses;
