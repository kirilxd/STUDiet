import React, { useState } from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import SummaryComponent from "../components/SummaryComponent";
import { ScrollView } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";
import WaterComponent from "../components/WaterComponent";
import FoodComponent from "../components/FoodComponent";
export default function DiaryScreen() {
  return (
    <ScrollView>
      <View
        style={{
          margin: 10,
        }}
      >
        <SummaryComponent />
        <FoodComponent />
        <WaterComponent />
      </View>
    </ScrollView>
  );
}
