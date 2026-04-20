import { AntDesign } from "@expo/vector-icons";
import moment from "moment";
import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

interface DateNavigatorProps {
  currentDate: moment.Moment;
  onPrevDay: () => void;
  onNextDay: () => void;
}

export default function DateNavigator2({ currentDate, onPrevDay, onNextDay }: DateNavigatorProps) {
  return (
    <View style={styles.navigator}>
      <Pressable onPress={onPrevDay} style={styles.navButton}>
        <AntDesign name="left" size={26} color="#1F2937" />
      </Pressable>
      <Text style={styles.dateText}>{currentDate.format("MMMM D, YYYY")}</Text>
      <Pressable onPress={onNextDay} style={styles.navButton}>
        <AntDesign name="right" size={26} color="#1F2937" />
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  navigator: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 24,
    marginVertical: 24,
  },
  navButton: {
    padding: 10,
  },
  dateText: {
    fontSize: 20,
    fontWeight: "700",
    color: "#1F2937",
  },
});