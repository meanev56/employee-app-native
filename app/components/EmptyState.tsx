import { AntDesign } from "@expo/vector-icons";
import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

interface EmptyStateProps {
  onAddPress: () => void;
}

export default function EmptyState({ onAddPress }: EmptyStateProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>No Employees Found</Text>
      <Text style={styles.subtitle}>
        Press the plus button to add your first employee
      </Text>

      <Pressable onPress={onAddPress} style={styles.addButton}>
        <AntDesign name="pluscircle" size={48} color="#0072b1" />
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 40,
  },
  title: {
    fontSize: 20,
    fontWeight: "600",
    color: "#1F2937",
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 15,
    color: "#6B7280",
    textAlign: "center",
    marginBottom: 32,
  },
  addButton: {
    padding: 12,
  },
});