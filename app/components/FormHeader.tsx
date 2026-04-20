import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function FormHeader() {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>Add New Employee</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    marginBottom: 24,
  },
  title: {
    fontSize: 22,
    fontWeight: "700",
    color: "#1F2937",
  },
});