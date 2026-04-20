import axios from "axios";
import { useRouter } from "expo-router";
import moment from "moment";
import React, { useCallback, useEffect, useState } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";

import DateNavigator from "../components/DateNavigator";
import EmployeeRow from "../components/EmployeeRow";

interface Employee {
  employeeId: string;
  employeeName: string;
  designation: string;
  salary?: number;
}

interface AttendanceRecord {
  employeeId: string;
  status: string;
}

interface EmployeeWithAttendance extends Employee {
  status: string;
}

export default function MarkAttendance() {
  const router = useRouter();

  const [currentDate, setCurrentDate] = useState(moment());
  const [employees, setEmployees] = useState<Employee[]>([]);
  const [attendance, setAttendance] = useState<AttendanceRecord[]>([]);
  const [loading, setLoading] = useState(false);

  // Fetch all employees (only once)
  const fetchEmployees = useCallback(async () => {
    try {
      const response = await axios.get("http://localhost:8000/employees");
      setEmployees(response.data || []);
    } catch (error) {
      console.error("Error fetching employees:", error);
    }
  }, []);

  // Fetch attendance for current date
  const fetchAttendanceData = useCallback(async () => {
    setLoading(true);
    try {
      const response = await axios.get("http://localhost:8000/attendance", {
        params: {
          date: currentDate.format("MMMM D, YYYY"),
        },
      });
      setAttendance(response.data || []);
    } catch (error) {
      console.error("Error fetching attendance:", error);
      setAttendance([]);
    } finally {
      setLoading(false);
    }
  }, [currentDate]);

  useEffect(() => {
    fetchEmployees();
  }, [fetchEmployees]);

  useEffect(() => {
    fetchAttendanceData();
  }, [fetchAttendanceData]);

  const goToNextDay = () => {
    setCurrentDate((prev) => moment(prev).add(1, "days"));
  };

  const goToPrevDay = () => {
    setCurrentDate((prev) => moment(prev).subtract(1, "days"));
  };

  // Merge employees with attendance status
  const employeesWithAttendance: EmployeeWithAttendance[] = employees.map((emp) => {
    const record = attendance.find((a) => a.employeeId === emp.employeeId);
    return {
      ...emp,
      status: record?.status || "Not Marked",
    };
  });

  return (
    <View style={styles.container}>
      <DateNavigator
        currentDate={currentDate}
        onPrevDay={goToPrevDay}
        onNextDay={goToNextDay}
      />

      <ScrollView
        style={styles.scrollView}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        {loading ? (
          <Text style={styles.loadingText}>Loading employees...</Text>
        ) : employeesWithAttendance.length === 0 ? (
          <Text style={styles.emptyText}>No employees found</Text>
        ) : (
          employeesWithAttendance.map((employee) => (
            <EmployeeRow
              key={employee.employeeId}
              employee={employee}
              onPress={() =>
                router.push({
                  pathname: "/[user]",
                  params: {
                    name: employee.employeeName,
                    id: employee.employeeId,
                    salary: employee.salary?.toString() || "",
                    designation: employee.designation,
                  },
                })
              }
            />
          ))
        )}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8fafc",
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    paddingHorizontal: 16,
    paddingBottom: 40,
  },
  loadingText: {
    textAlign: "center",
    marginTop: 50,
    fontSize: 16,
    color: "#6B7280",
  },
  emptyText: {
    textAlign: "center",
    marginTop: 50,
    fontSize: 16,
    color: "#6B7280",
  },
});