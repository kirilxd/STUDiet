import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import { Entypo } from "@expo/vector-icons";

export default function WaterItem({ id, name, selected, onSelect }) {
  return (
    <Entypo
      name={name}
      color={selected ? "blue" : "white"}
      size={50}
      onPress={() => onSelect(id)}
    />
  );
}
