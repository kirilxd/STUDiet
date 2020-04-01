import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";

export default function PlusScreen({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>PlusScreen</Text>
      <Button title="Back" onPress={() => navigation.navigate("Main")} />
    </View>
  );
}
