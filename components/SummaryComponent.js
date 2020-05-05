import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, ScrollView, Button } from "react-native";
import { useFocusEffect } from "@react-navigation/native";

export default function SummaryComponent() {
  const [kcalLeft, setKcalLeft] = useState(2500);
  const [eaten, setEaten] = useState(0);
  const [burned, setBurned] = useState(0);
  return (
    <View style={styles.container}>
      <Text>Summary Component</Text>
      <View style={styles.kcal}>
        <Text>Eaten: {eaten}</Text>
        <Button
          title="P"
          onPress={() => {
            setEaten(eaten + 5);
            setKcalLeft(kcalLeft - 5);
          }}
        ></Button>
        <Text>Kcal left: {kcalLeft}</Text>
        <Text>Burned: {burned}</Text>
        <Button
          title="P"
          onPress={() => {
            setBurned(burned + 5);
            setKcalLeft(kcalLeft + 5);
          }}
        ></Button>
      </View>
      <View style={styles.value}>
        <Text>Carbs</Text>
        <Text>Protein</Text>
        <Text>Fat</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f73a3a",
    alignItems: "center",
    borderRadius: 10,
  },
  kcal: {
    flex: 2,
    flexDirection: "row",
    alignItems: "center",
  },
  value: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
  },
});
