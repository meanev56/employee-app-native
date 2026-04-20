import React from "react";
import { StyleSheet, Text, View } from "react-native";

interface AttendanceRecord {
  name: string;
  designation: string;
  employeeId: string;
  present: number;
  absent: number;
  halfday: number;
}

interface EmployeeCardProps {
  employee: AttendanceRecord;
}

export default function EmployeeCard({ employee }: EmployeeCardProps) {
  return (
    <View style={styles.card}>
      {/* Employee Header */}
      <View style={styles.header}>
        <View style={styles.avatar}>
          <Text style={styles.avatarText}>
            {employee.name?.charAt(0)?.toUpperCase() || "?"}
          </Text>
        </View>

        <View style={styles.info}>
          <Text style={styles.name}>{employee.name}</Text>
          <Text style={styles.designation}>
            {employee.designation} • {employee.employeeId}
          </Text>
        </View>
      </View>

      {/* Attendance Summary */}
      <View style={styles.tableContainer}>
        <View style={styles.tableHeader}>
          <Text style={styles.headerCell}>P</Text>
          <Text style={styles.headerCell}>A</Text>
          <Text style={styles.headerCell}>HD</Text>
          <Text style={styles.headerCell}>H</Text>
          <Text style={styles.headerCell}>NW</Text>
        </View>

        <View style={styles.tableRow}>
          <Text style={styles.cell}>{employee.present}</Text>
          <Text style={styles.cell}>{employee.absent}</Text>
          <Text style={styles.cell}>{employee.halfday}</Text>
          <Text style={styles.cell}>1</Text>
          <Text style={styles.cell}>8</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "white",
    borderRadius: 16,
    padding: 16,
    marginBottom: 16,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
    marginBottom: 16,
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
  tableContainer: {
    backgroundColor: "#E0F2E9",
    borderRadius: 12,
    padding: 12,
  },
  tableHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 8,
    paddingHorizontal: 4,
  },
  headerCell: {
    flex: 1,
    textAlign: "center",
    fontWeight: "700",
    color: "#1F2937",
    fontSize: 15,
  },
  tableRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "white",
    borderRadius: 8,
    padding: 12,
  },
  cell: {
    flex: 1,
    textAlign: "center",
    fontSize: 16,
    fontWeight: "600",
  },
});