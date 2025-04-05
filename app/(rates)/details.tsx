import { Image, StyleSheet, Platform, View } from "react-native";

import { Badge, List, Button } from "react-native-paper";

const RateTile = () => (
  <List.Item
    title="First Item"
    description="Item description"
    left={(props) => <List.Icon {...props} icon="hand-coin" />}
    right={() => (
      <Button
        icon="details"
        mode="contained"
        onPress={() => console.log("Pressed")}
      >
        Details
      </Button>
    )}
  />
);

export default function DetailsScreen() {
  return (
    <View style={{ flex: 1, height: "100%" }}>
      <RateTile />
    </View>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: "absolute",
  },
});
