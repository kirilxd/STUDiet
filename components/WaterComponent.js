import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { FlatList } from "react-native-gesture-handler";
import WaterItem from "./WaterItem";

const DATA = [
  { id: 1, name: "cup" },
  { id: 2, name: "cup" },
  { id: 3, name: "cup" },
  { id: 4, name: "cup" },
  { id: 5, name: "cup" },
  { id: 6, name: "cup" },
  { id: 7, name: "cup" },
  { id: 8, name: "cup" },
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
      <Text>Water Component</Text>
      <View>
        <FlatList
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
          keyExtractor={(item) => item.id}
        />
      </View>
      <Text>Water consumed: {consumed}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
    backgroundColor: "#5981f8",
    borderRadius: 10,
  },
  list: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
