import { Pressable, StyleSheet, Text, View } from "react-native";

const ExpenseCard = ({ title, date, amount }) => {
  return (
    <>
      <Pressable android_ripple={{color: "blue"}} style={styles.rootContainer}>
        <View style={styles.itemContainer}>
          <View style={styles.textContainer}>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.date}>{date}</Text>
          </View>
          <Text style={styles.amount}>{amount}</Text>
        </View>
      </Pressable>
    </>
  );
};

const styles = StyleSheet.create({
  rootContainer: {
    backgroundColor: "red",
    borderRadius: 5,
    padding: 15,
    margin: 25,
  },
  itemContainer: { flexDirection: "row" },
  textContainer: { flexDirection: "column", marginRight: 200 },
  title: { fontWeight: "bold", color: "white" },
  date: {},
  amount: {},
});
export default ExpenseCard;
