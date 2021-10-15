import React from "react";

import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
import NewExpense from "../NewExpenses/NewExpenses";
import "./Expenses.css";

const Expenses = (props) => {
  return (
    <Card className="expenses">
      <NewExpense />
      {props.expenses.map((expense) => (
        <ExpenseItem key={expense.id} {...expense} />
      ))}
    </Card>
  );
};

export default Expenses;
