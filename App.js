import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { FontAwesome } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import DiaryScreen from "./screens/DiaryScreen";
import ProfileScreen from "./screens/ProfileScreen";
import PlusScreen from "./screens/PlusScreen";

const Tab = createBottomTabNavigator();
const RootStack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <RootStack.Navigator mode="modal" headerMode="none">
        <RootStack.Screen
          name="Main"
          component={MainStackContainer}
          options={{ headerShown: false }}
        />
        <RootStack.Screen name="PlusModal" component={PlusScreen} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
}

function MainStackContainer({ navigation }) {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "Diary") {
            iconName = "list-alt";
          } else if (route.name === "Profile") {
            iconName = "user";
          }

          // You can return any component that you like here!
          return <FontAwesome name={iconName} size={size} color={color} />;
        }
      })}
      tabBarOptions={{
        activeTintColor: "red",
        inactiveTintColor: "gray"
      }}
      initialRouteName="Diary"
    >
      <Tab.Screen name="Diary" component={DiaryScreen} />
      <Tab.Screen
        name="Plus"
        component={PlusScreen}
        options={{
          tabBarButton: () => (
            <FontAwesome
              onPress={() => navigation.navigate("PlusModal")}
              name="plus-circle"
              size={50}
            />
          )
        }}
      />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
}