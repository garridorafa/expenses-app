import React, { useState } from "react";

import Expenses from "./components/Expenses/Expenses";
import NewExpenses from "./components/NewExpenses/NewExpenses";

const INITIAL_EXPENSES = [
  {
    id: 1,
    title: "Car Insurance",
    amount: 276.56,
    date: new Date(2021, 11, 10),
  },
  {
    id: 2,
    title: "Toilet Paper",
    amount: 74.36,
    date: new Date(2021, 10, 10),
  },
  {
    id: 3,
    title: "New TV",
    amount: 953.12,
    date: new Date(2021, 9, 10),
  },
  {
    id: 4,
    title: "New Desk",
    amount: 562.12,
    date: new Date(2021, 5, 10),
  },
];

const App = () => {
  const [expenses, setExpenses] = useState(INITIAL_EXPENSES);

  const addExpenseHandler = (newExpense) => {
    setExpenses((prevExpenses) => [newExpense, ...prevExpenses]);
  };

  return (
    <>
      <NewExpenses onAddExpense={addExpenseHandler} />
      <Expenses expenses={expenses} />
    </>
  );
};

export default App;
