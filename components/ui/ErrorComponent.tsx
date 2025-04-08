import React from "react";
import { View, StyleSheet } from "react-native";
import { Text, Button } from "react-native-paper";

type ErrorComponentProps = {
  message?: string;
};

export default function ErrorComponent({
  message = "Something went wrong.",
}: ErrorComponentProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.errorMessage}>{message}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
    backgroundColor: "#f5f5f5",
  },
  errorMessage: {
    fontSize: 18,
    color: "#d32f2f",
    textAlign: "center",
    marginBottom: 16,
  },
});
