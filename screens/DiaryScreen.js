import React, { useState } from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import SummaryComponent from "../components/SummaryComponent";
import { ScrollView } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";
import WaterComponent from "../components/WaterComponent";

export default function DiaryScreen() {
  return (
    <View
      style={{
        flex: 1,
        margin: 10,
      }}
    >
      <SummaryComponent style={{ flex: 2 }} />
      <WaterComponent style={{ flex: 2 }} />
      <View style={{ flex: 4 }}></View>
    </View>
  );
}
