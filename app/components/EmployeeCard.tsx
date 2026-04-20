import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { DataTable } from "react-native-paper";

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

      {/* Attendance Summary Table */}
      <View style={styles.tableContainer}>
        <DataTable>
          <DataTable.Header>
            <DataTable.Title style={styles.tableHeader}>P</DataTable.Title>
            <DataTable.Title style={styles.tableHeader}>A</DataTable.Title>
            <DataTable.Title style={styles.tableHeader}>HD</DataTable.Title>
            <DataTable.Title style={styles.tableHeader}>H</DataTable.Title>
            <DataTable.Title style={styles.tableHeader}>NW</DataTable.Title>
          </DataTable.Header>

          <DataTable.Row>
            <DataTable.Cell>{employee.present}</DataTable.Cell>
            <DataTable.Cell>{employee.absent}</DataTable.Cell>
            <DataTable.Cell>{employee.halfday}</DataTable.Cell>
            <DataTable.Cell>1</DataTable.Cell>
            <DataTable.Cell>8</DataTable.Cell>
          </DataTable.Row>
        </DataTable>
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
    shadowOpacity: 0.08,
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
    marginTop: 2,
  },
  tableContainer: {
    backgroundColor: "#A1FFCE",
    borderRadius: 12,
    padding: 8,
    overflow: "hidden",
  },
  tableHeader: {
    fontWeight: "600",
    color: "#374151",
  },
});