import React from "react";

import Expenses from "./components/Expenses/Expenses";
import NewExpenses from "./components/NewExpenses/NewExpenses";

const App = () => {
  const expenses = [
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
      date: new Date(2021, 11, 10),
    },
    {
      id: 3,
      title: "New TV",
      amount: 953.12,
      date: new Date(2021, 11, 10),
    },
    {
      id: 4,
      title: "New Desk",
      amount: 562.12,
      date: new Date(2021, 11, 10),
    },
  ];

  const addExpenseHandler = (expense) => {
    console.log(expense);
  };

  return (
    <>
      <NewExpenses onAddExpense={addExpenseHandler} />
      <Expenses expenses={expenses} />
    </>
  );
};

export default App;
