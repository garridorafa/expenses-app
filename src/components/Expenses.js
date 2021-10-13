import Card from "./Card";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";

function Expenses(props) {
  return (
    <Card className="expenses">
      {props.expenses.map((expense) => (
        <ExpenseItem {...expense} />
      ))}
    </Card>
  );
}

export default Expenses;
