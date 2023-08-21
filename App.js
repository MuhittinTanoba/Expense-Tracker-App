import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button, Pressable } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Ionicons from "react-native-vector-icons/Ionicons";

import AddExpenseScreen from "./screens/AddExpenseScreen";
import AllExpensesScreen from "./screens/AllExpensesScreen";
import RecentExpensesScreen from "./screens/RecentExpensesScreen";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function Tabs({ navigation }) {
  return (
    <Tab.Navigator
      screenOptions={{
        headerRight: ({ color }) => (
          <Pressable onPress={() => navigation.navigate("AddExpense")}>
            <Ionicons name="add" color={color} size={30} />
          </Pressable>
        ),
      }}
    >
      <Tab.Screen
        name="RecentExpenses"
        component={RecentExpensesScreen}
        options={{
          title: "Recent Expenses",
          tabBarIcon: ({ color, size }) => (
            <Ionicons
              name="battery-charging-outline"
              color={color}
              size={size}
            />
          ),
        }}
      />
      <Tab.Screen
        name="AllExpenses"
        component={AllExpensesScreen}
        options={{
          title: "All Expenses",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{}}>
          <Stack.Screen
            name="Tabs"
            component={Tabs}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen name="AddExpense" component={AddExpenseScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({});
