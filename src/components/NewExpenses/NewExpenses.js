import React from "react";
import ExpensesFrom from "./ExpensesFrom";

import "./NewExpenses.css";

const NewExpenses = (props) => {
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
  };

  return (
    <div className="new-expense">
      <ExpensesFrom onSaveExpenseData={saveExpenseDataHandler} />
    </div>
  );
};

export default NewExpenses;
