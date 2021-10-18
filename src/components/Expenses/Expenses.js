import React, { useState } from "react";
import ExpensesFilter from "./ExpensesFilter";

import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2021");

  const filterChangedHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
    console.log(filteredYear);
  };

  return (
    <Card className="expenses">
      <ExpensesFilter onFilterChangedHandler={filterChangedHandler} />
      {props.expenses.map((expense) => (
        <ExpenseItem key={expense.id} {...expense} />
      ))}
    </Card>
  );
};

export default Expenses;
