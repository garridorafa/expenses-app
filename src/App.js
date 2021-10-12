import ExpenseItem from "./components/ExpenseItem";

function App() {
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
      id: 3,
      title: "New Desk",
      amount: 562.12,
      date: new Date(2021, 11, 10),
    },
  ];

  return (
    <>
      {expenses.map((expense) => (
        <ExpenseItem {...expense} />
      ))}
    </>
  );
}

export default App;
