import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Button,
  Image,
} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

export default function FoodItem({ title, image, navigation }) {
  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate("Plus");
      }}
    >
      <View style={styles.container}>
        <View>
          <Image source={image} style={{ width: 55, height: 55 }} />
        </View>
        <Text style={styles.text}>Add {title}</Text>
        <Image
          source={require("../assets/plus.png")}
          style={{ width: 25, height: 25 }}
        />
      </View>
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    height: 75,
    margin: 5,
    padding: 10,
    backgroundColor: "white",
    borderRadius: 15,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,

    elevation: 6,
  },
  text: {
    fontSize: 17,
    fontWeight: "600",
  },
});
