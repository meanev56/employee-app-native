import axios from "axios";
import { useLocalSearchParams } from "expo-router";
import moment from "moment";
import React, { useState } from "react";
import { Alert, ScrollView, StyleSheet, Text, TextInput, View } from "react-native";

import AttendanceSelector from "../components/AttendanceSelector";
import DateNavigator from "../components/DateNavigator2";
import EmployeeHeader from "../components/EmployeeHeader";
import SubmitButton from "../components/SubmitButton2";

type AttendanceStatus = "present" | "absent" | "halfday" | "holiday";

interface EmployeeParams {
  id?: string;
  name?: string;
  designation?: string;
  salary?: string;
}

export default function User() {
  const params = useLocalSearchParams<EmployeeParams>();

  const [attendanceStatus, setAttendanceStatus] = useState<AttendanceStatus>("present");
  const [currentDate, setCurrentDate] = useState(moment());
  const [advance, setAdvance] = useState("");
  const [bonus, setBonus] = useState("");

  const goToNextDay = () => setCurrentDate((prev) => moment(prev).add(1, "days"));
  const goToPrevDay = () => setCurrentDate((prev) => moment(prev).subtract(1, "days"));

  const submitAttendance = async () => {
    if (!params.id || !params.name) {
      Alert.alert("Error", "Employee information is missing.");
      return;
    }

    try {
      const attendanceData = {
        employeeId: params.id,
        employeeName: params.name,
        date: currentDate.format("MMMM D, YYYY"),
        status: attendanceStatus,
        advance: advance || null,
        bonus: bonus || null,
      };

      const response = await axios.post("http://localhost:8000/attendance", attendanceData);

      if (response.status === 200) {
        Alert.alert("Success", `Attendance marked for ${params.name}`);
        // Optionally reset form here
      }
    } catch (error) {
      console.error("Error submitting attendance:", error);
      Alert.alert("Error", "Failed to submit attendance. Please try again.");
    }
  };

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <DateNavigator
        currentDate={currentDate}
        onPrevDay={goToPrevDay}
        onNextDay={goToNextDay}
      />

      <EmployeeHeader
        name={params.name || ""}
        designation={params.designation || ""}
        employeeId={params.id || ""}
        salary={params.salary || ""}
      />

      <View style={styles.content}>
        <Text style={styles.sectionTitle}>ATTENDANCE</Text>

        <AttendanceSelector
          selectedStatus={attendanceStatus}
          onSelect={setAttendanceStatus}
        />

        <View style={styles.inputRow}>
          <TextInput
            style={styles.input}
            placeholder="Advance / Loans"
            value={advance}
            onChangeText={setAdvance}
            placeholderTextColor="#999"
          />
          <TextInput
            style={styles.input}
            placeholder="Extra Bonus"
            value={bonus}
            onChangeText={setBonus}
            placeholderTextColor="#999"
          />
        </View>

        <SubmitButton onPress={submitAttendance} />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8fafc",
  },
  content: {
    paddingHorizontal: 16,
    paddingBottom: 40,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: "600",
    letterSpacing: 2,
    color: "#374151",
    marginTop: 12,
    marginBottom: 12,
  },
  inputRow: {
    flexDirection: "row",
    gap: 12,
    marginTop: 10,
  },
  input: {
    flex: 1,
    backgroundColor: "white",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#E5E7EB",
    padding: 14,
    fontSize: 15,
  },
});