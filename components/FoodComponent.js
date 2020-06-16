import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, ScrollView, Button } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import FoodItem from "./FoodItem";
const foodData = [
  { id: 1, title: "breakfast", image: require("../assets/breakfast.png") },
  { id: 2, title: "lunch", image: require("../assets/lunch.png") },
  { id: 3, title: "dinner", image: require("../assets/dinner.png") },
  { id: 4, title: "snack", image: require("../assets/snack.png") },
];
export default function FoodComponent(props) {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Food</Text>
      <View>
        {foodData.map((item) => (
          <View key={item.id.toString()}>
            <FoodItem
              id={item.id}
              title={item.title}
              image={item.image}
              navigation={props.navigation}
            />
          </View>
        ))}
        {/* <FlatList
          scrollEnabled={false}
          data={DATA}
          renderItem={({ item }) => (
            <FoodItem id={item.id} title={item.title} image={item.image} />
          )}
          keyExtractor={(item) => item.id.toString()}
        /> */}
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    marginVertical: 25,
  },
  header: {
    textAlign: "center",
    fontSize: 25,
    fontWeight: "600",
    marginBottom: 10,
  },
});
