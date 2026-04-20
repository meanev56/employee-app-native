import React from "react";
import { Pressable, StyleSheet, Text } from "react-native";

interface SubmitButtonProps {
  onPress: () => void;
  loading: boolean;
}

export default function SubmitButton({ onPress, loading }: SubmitButtonProps) {
  return (
    <Pressable
      style={[styles.button, loading && styles.buttonDisabled]}
      onPress={onPress}
      disabled={loading}
    >
      <Text style={styles.buttonText}>
        {loading ? "Adding Employee..." : "Add Employee"}
      </Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#ABCABA",
    paddingVertical: 16,
    borderRadius: 12,
    alignItems: "center",
    marginTop: 12,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 5,
  },
  buttonDisabled: {
    opacity: 0.7,
  },
  buttonText: {
    color: "white",
    fontSize: 17,
    fontWeight: "700",
  },
});