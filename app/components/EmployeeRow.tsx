import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

interface Employee {
  employeeId: string;
  employeeName: string;
  designation: string;
  salary?: number;
  status: string;
}

interface EmployeeRowProps {
  employee: Employee;
  onPress: () => void;
}

export default function EmployeeRow({ employee, onPress }: EmployeeRowProps) {
  return (
    <Pressable style={styles.row} onPress={onPress}>
      {/* Avatar */}
      <View style={styles.avatar}>
        <Text style={styles.avatarText}>
          {employee.employeeName?.charAt(0)?.toUpperCase() || "?"}
        </Text>
      </View>

      {/* Employee Info */}
      <View style={styles.info}>
        <Text style={styles.name}>{employee.employeeName}</Text>
        <Text style={styles.designation}>
          {employee.designation} • {employee.employeeId}
        </Text>
      </View>

      {/* Status Badge */}
      <View
        style={[
          styles.statusBadge,
          employee.status === "Not Marked" && styles.notMarked,
        ]}
      >
        <Text style={styles.statusText}>
          {employee.status.charAt(0).toUpperCase()}
        </Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "white",
    padding: 16,
    borderRadius: 16,
    marginBottom: 12,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.08,
    shadowRadius: 8,
    elevation: 4,
  },
  avatar: {
    width: 52,
    height: 52,
    borderRadius: 12,
    backgroundColor: "#4b6cb7",
    alignItems: "center",
    justifyContent: "center",
  },
  avatarText: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
  },
  info: {
    flex: 1,
    marginLeft: 14,
  },
  name: {
    fontSize: 17,
    fontWeight: "600",
    color: "#1F2937",
  },
  designation: {
    fontSize: 14,
    color: "#6B7280",
    marginTop: 4,
  },
  statusBadge: {
    width: 50,
    height: 50,
    borderRadius: 12,
    backgroundColor: "#FF69B4",
    alignItems: "center",
    justifyContent: "center",
  },
  notMarked: {
    backgroundColor: "#9CA3AF",
  },
  statusText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "white",
  },
});