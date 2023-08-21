import { Text } from "react-native";
import ExpenseCard from "../components/ExpenseCard";

const AllExpensesScreen = () => {
  const title = "title";
  const amount = "1200$";
  const date = "25/52/2555";
  return (
    <>
      <ExpenseCard title={title} amount={amount} date={date} />
    </>
  );
};

export default AllExpensesScreen;
