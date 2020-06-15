import React from "react";
import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { FontAwesome } from "@expo/vector-icons";
import Home from "../screens/Home";
import CalorieCounter from "../calorieCounter/CalorieCounter.js";
import DiaryScreen from "../screens/DiaryScreen";
import ProfileScreen from "../screens/ProfileScreen";
import PlusScreen from "../screens/PlusScreen";
const getTabBarIcon = ({ navigation, focused, color }) => {
  let iconName;
  const { routeName } = navigation.state;
  if (routeName === "Home") {
    iconName = "list-alt";
  } else if (routeName === "Profile") {
    iconName = "user";
  }

  return <FontAwesome name={iconName} size={25} color={color} />;
};
const AppNavigation = createBottomTabNavigator(
  {
    Home: {
      screen: DiaryScreen,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <FontAwesome name="list-alt" size={25} color={tintColor} />
        ),
      },
    },
    Plus: {
      screen: PlusScreen,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <FontAwesome name="plus-circle" size={35} color={tintColor} />
        ),
      },
    },
    Profile: {
      screen: ProfileScreen,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <FontAwesome name="user" size={25} color={tintColor} />
        ),
      },
    },
  },

  {
    initialRouteName: "Home",
  },
  {
    tabBarOptions: {
      activeTintColor: "red",
      inactiveTintColor: "gray",
    },
  }
);

export default AppNavigation;
