import { AntDesign } from "@expo/vector-icons";
import moment from "moment";
import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

interface DateNavigatorProps {
  currentDate: moment.Moment;
  onPrevDay: () => void;
  onNextDay: () => void;
}

export default function DateNavigator({
  currentDate,
  onPrevDay,
  onNextDay,
}: DateNavigatorProps) {
  const formatDate = (date: moment.Moment) => date.format("MMMM D, YYYY");

  return (
    <View style={styles.navigation}>
      <Pressable onPress={onPrevDay} style={styles.navButton}>
        <AntDesign name="left" size={26} color="#1F2937" />
      </Pressable>

      <Text style={styles.dateText}>{formatDate(currentDate)}</Text>

      <Pressable onPress={onNextDay} style={styles.navButton}>
        <AntDesign name="right" size={26} color="#1F2937" />
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
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
  dateText: {
    fontSize: 20,
    fontWeight: "700",
    color: "#1F2937",
  },
});