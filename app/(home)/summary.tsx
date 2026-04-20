import { AntDesign } from "@expo/vector-icons";
import axios from "axios";
import moment from "moment";
import React, { useCallback, useEffect, useState } from "react";
import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";

import EmployeeCard from "../components/EmployeeCard";

interface AttendanceRecord {
  name: string;
  designation: string;
  employeeId: string;
  present: number;
  absent: number;
  halfday: number;
}

export default function Summary() {
  const [attendanceData, setAttendanceData] = useState<AttendanceRecord[]>([]);
  const [currentDate, setCurrentDate] = useState(moment());
  const [loading, setLoading] = useState(false);

  const fetchAttendanceReport = useCallback(async () => {
    setLoading(true);
    try {
      const response = await axios.get(
        "http://localhost:8000/attendance-report-all-employees",
        {
          params: {
            month: currentDate.month() + 1,
            year: currentDate.year(),
          },
        }
      );

      setAttendanceData(response.data?.report || []);
    } catch (error) {
      console.error("Error fetching attendance report:", error);
      setAttendanceData([]);
    } finally {
      setLoading(false);
    }
  }, [currentDate]);

  useEffect(() => {
    fetchAttendanceReport();
  }, [fetchAttendanceReport]);

  const goToNextMonth = () => {
    setCurrentDate((prev) => moment(prev).add(1, "months"));
  };

  const goToPrevMonth = () => {
    setCurrentDate((prev) => moment(prev).subtract(1, "months"));
  };

  const formatMonthYear = (date: moment.Moment) => date.format("MMMM YYYY");

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      {/* Month Navigation */}
      <View style={styles.navigation}>
        <Pressable onPress={goToPrevMonth} style={styles.navButton}>
          <AntDesign name="left" size={26} color="#1F2937" />
        </Pressable>

        <Text style={styles.monthText}>{formatMonthYear(currentDate)}</Text>

        <Pressable onPress={goToNextMonth} style={styles.navButton}>
          <AntDesign name="right" size={26} color="#1F2937" />
        </Pressable>
      </View>

      {/* Main Content */}
      <View style={styles.content}>
        {loading ? (
          <Text style={styles.loadingText}>Loading attendance data...</Text>
        ) : attendanceData.length === 0 ? (
          <Text style={styles.emptyText}>No attendance data found for this month</Text>
        ) : (
          attendanceData.map((employee, index) => (
            <EmployeeCard key={index} employee={employee} />
          ))
        )}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8fafc",
  },
  navigation: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 24,
    marginVertical: 24,
    paddingHorizontal: 16,
  },
  navButton: {
    padding: 10,
  },
  monthText: {
    fontSize: 20,
    fontWeight: "700",
    color: "#1F2937",
  },
  content: {
    paddingHorizontal: 16,
  },
  loadingText: {
    textAlign: "center",
    marginTop: 60,
    fontSize: 16,
    color: "#6B7280",
  },
  emptyText: {
    textAlign: "center",
    marginTop: 60,
    fontSize: 16,
    color: "#6B7280",
  },
});