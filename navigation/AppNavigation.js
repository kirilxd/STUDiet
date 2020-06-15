import { createStackNavigator } from "react-navigation-stack";
import Home from "../screens/Home";
import CalorieCounter from "../calorieCounter/CalorieCounter.js";

const AppNavigation = createStackNavigator(
  {
    Home: { screen: CalorieCounter }
  },
  {
    initialRouteName: "Home"
  }
);

export default AppNavigation;
