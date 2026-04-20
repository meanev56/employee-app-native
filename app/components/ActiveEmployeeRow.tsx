import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function ActiveEmployeeRow() {
  return (
    <View style={styles.activeRow}>
      <Text style={styles.label}>Active Employee</Text>
      <Text style={styles.activeText}>True</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  activeRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "white",
    padding: 14,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#E5E7EB",
    marginBottom: 18,
  },
  label: {
    fontSize: 16,
    fontWeight: "600",
    color: "#374151",
  },
  activeText: {
    fontSize: 16,
    fontWeight: "600",
    color: "#10B981",
  },
});