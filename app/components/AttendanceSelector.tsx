import { Entypo, FontAwesome5 } from "@expo/vector-icons";
import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

type AttendanceStatus = "present" | "absent" | "halfday" | "holiday";

interface AttendanceSelectorProps {
  selectedStatus: AttendanceStatus;
  onSelect: (status: AttendanceStatus) => void;
}

const options: { label: string; value: AttendanceStatus }[] = [
  { label: "Present", value: "present" },
  { label: "Absent", value: "absent" },
  { label: "Half Day", value: "halfday" },
  { label: "Holiday", value: "holiday" },
];

export default function AttendanceSelector({ selectedStatus, onSelect }: AttendanceSelectorProps) {
  return (
    <View style={styles.container}>
      {options.map((option, index) => (
        <Pressable
          key={index}
          style={[
            styles.option,
            selectedStatus === option.value && styles.selectedOption,
          ]}
          onPress={() => onSelect(option.value)}
        >
          {selectedStatus === option.value ? (
            <FontAwesome5 name="dot-circle" size={24} color="#1F2937" />
          ) : (
            <Entypo name="circle" size={24} color="#6B7280" />
          )}
          <Text style={styles.optionText}>{option.label}</Text>
        </Pressable>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 12,
    marginBottom: 20,
  },
  option: {
    flex: 1,
    minWidth: "47%",
    backgroundColor: "#F3F4F6",
    padding: 14,
    borderRadius: 12,
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },
  selectedOption: {
    backgroundColor: "#C4E0E5",
    borderWidth: 1,
    borderColor: "#4b6cb7",
  },
  optionText: {
    fontSize: 16,
    fontWeight: "500",
  },
});