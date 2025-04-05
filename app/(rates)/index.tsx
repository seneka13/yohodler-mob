import Header from "@/components/ui/Header";
import { Image, StyleSheet, Platform, View, Text } from "react-native";

import { Badge, List, Button } from "react-native-paper";

export default function HomeScreen() {
  return (
    <View style={{ flex: 1, height: "100%" }}>
      <Header title={"dsdsd"} />
      <Text style={{ fontSize: 24, fontWeight: "bold", marginBottom: 16 }}>
        R
      </Text>
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
