import React from "react";
import { StyleSheet, Text, View } from "react-native";

interface EmployeeHeaderProps {
  name: string;
  designation: string;
  employeeId: string;
  salary: string;
}

export default function EmployeeHeader({ name, designation, employeeId, salary }: EmployeeHeaderProps) {
  return (
    <View style={styles.header}>
      <View style={styles.avatar}>
        <Text style={styles.avatarText}>{name.charAt(0)?.toUpperCase() || "?"}</Text>
      </View>
      <View style={styles.info}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.designation}>
          {designation} ({employeeId})
        </Text>
      </View>
      {salary && <Text style={styles.salary}>Basic Pay: ₹{salary}</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    marginHorizontal: 16,
    marginBottom: 20,
  },
  avatar: {
    width: 56,
    height: 56,
    borderRadius: 12,
    backgroundColor: "#4b6cb7",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 12,
  },
  avatarText: {
    color: "white",
    fontSize: 22,
    fontWeight: "bold",
  },
  info: {
    marginBottom: 8,
  },
  name: {
    fontSize: 18,
    fontWeight: "700",
    color: "#1F2937",
  },
  designation: {
    fontSize: 15,
    color: "#6B7280",
  },
  salary: {
    fontSize: 16,
    fontWeight: "600",
    color: "#374151",
  },
});