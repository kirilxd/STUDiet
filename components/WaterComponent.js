import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { FlatList } from "react-native-gesture-handler";
import WaterItem from "./WaterItem";

const waterData = [
  { id: 1 },
  { id: 2 },
  { id: 3 },
  { id: 4 },
  { id: 5 },
  { id: 6 },
  { id: 7 },
  { id: 8 },
  { id: 9 },
  { id: 10 },
  { id: 11 },
  { id: 12 },
];

export default function WaterComponent() {
  const [selected, setSelected] = React.useState(new Map());
  const [consumed, setConsumed] = React.useState(0);

  const onSelect = React.useCallback(
    (id) => {
      const newSelected = new Map(selected);
      newSelected.set(id, !selected.get(id));
      setSelected(newSelected);
      !selected.get(id)
        ? setConsumed(consumed + 0.25)
        : setConsumed(consumed - 0.25);
    },
    [selected]
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Water</Text>
      <View style={styles.list}>
        {waterData.map((item) => (
          <View key={item.id.toString()} style={{ marginTop: 10 }}>
            <WaterItem
              id={item.id}
              name={item.name}
              selected={!!selected.get(item.id)}
              onSelect={onSelect}
            />
          </View>
        ))}
        {/* <FlatList
          scrollEnabled={false}
          contentContainerStyle={styles.list}
          data={DATA}
          renderItem={({ item }) => (
            <WaterItem
              id={item.id}
              name={item.name}
              selected={!!selected.get(item.id)}
              onSelect={onSelect}
            />
          )}
          keyExtractor={(item) => item.id.toString()}
        /> */}
      </View>
      <Text style={styles.footer}>
        Water consumed: <Text style={styles.consumed}>{consumed}L</Text>
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginVertical: 25,
    backgroundColor: "#25b0db",
    borderRadius: 10,
    justifyContent: "space-between",
  },
  list: {
    flexDirection: "row",
    justifyContent: "space-between",
    flexWrap: "wrap",
  },
  header: {
    textAlign: "center",
    color: "#ffffff",
    fontSize: 25,
    margin: 10,
    fontWeight: "700",
  },
  footer: {
    textAlign: "center",
    margin: 20,
    fontSize: 20,
    color: "#fff",
  },
  consumed: {
    fontSize: 22,
    fontWeight: "600",
  },
});
