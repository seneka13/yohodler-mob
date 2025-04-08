import React from "react";
import { View, StyleSheet } from "react-native";
import { ActivityIndicator, Text } from "react-native-paper";

export default function Loader() {
  return (
    <View style={styles.container}>
      <ActivityIndicator animating={true} size="large" color="#2c2d3f" />
      <Text style={styles.message}>Loading...</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f5f5f5",
  },
  message: {
    marginTop: 16,
    fontSize: 16,
    color: "#2c2d3f",
  },
});
