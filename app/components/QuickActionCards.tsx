import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

type QuickActionCardsProps = {
  onEmployeePress: () => void;
  onAttendancePress: () => void;
};

export default function QuickActionCards({
  onEmployeePress,
  onAttendancePress,
}: QuickActionCardsProps) {
  return (
    <View style={styles.container}>
      <Pressable style={styles.card} onPress={onEmployeePress}>
        <View style={styles.iconContainer}>
          <Ionicons name="people-sharp" size={24} color="black" />
        </View>
        <Text style={styles.text}>Employee List</Text>
      </Pressable>

      <Pressable style={styles.card} onPress={onAttendancePress}>
        <View style={styles.iconContainer}>
          <Ionicons name="people-sharp" size={24} color="black" />
        </View>
        <Text style={styles.text}>Mark Attendance</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    flexDirection: "row",
    gap: 20,
  },
  card: {
    backgroundColor: "#D3CCE3",
    padding: 12,
    borderRadius: 6,
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
  iconContainer: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    marginTop: 7,
    fontWeight: "600",
  },
});