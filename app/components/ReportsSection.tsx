import { Entypo, Ionicons, Octicons } from "@expo/vector-icons";
import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

type ReportsSectionProps = {
  onSummaryPress: () => void;
};

export default function ReportsSection({ onSummaryPress }: ReportsSectionProps) {
  return (
    <View style={styles.container}>
      <ReportItem
        icon={<Ionicons name="newspaper-outline" size={24} color="black" />}
        title="Attendance Report"
      />
      <ReportItem
        icon={<Octicons name="repo-pull" size={24} color="black" />}
        title="Summary Report"
        onPress={onSummaryPress}
      />
      <ReportItem
        icon={<Octicons name="report" size={24} color="black" />}
        title="All Generated Reports"
      />
      <ReportItem
        icon={<Ionicons name="people" size={24} color="black" />}
        title="Overtime Employees"
      />
    </View>
  );
}

type ReportItemProps = {
  icon: React.ReactNode;
  title: string;
  onPress?: () => void;
};

function ReportItem({ icon, title, onPress }: ReportItemProps) {
  return (
    <Pressable style={styles.reportItem} onPress={onPress}>
      <View style={styles.reportIcon}>{icon}</View>
      <Text style={styles.reportText}>{title}</Text>
      <View style={styles.chevron}>
        <Entypo name="chevron-right" size={24} color="black" />
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    backgroundColor: "white",
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderRadius: 7,
  },
  reportItem: {
    backgroundColor: "#BE93C5",
    borderRadius: 6,
    padding: 10,
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 10,
  },
  reportIcon: {
    padding: 7,
    width: 45,
    height: 45,
    borderRadius: 7,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },
  reportText: {
    marginLeft: 10,
    fontSize: 16,
    fontWeight: "600",
    flex: 1,
  },
  chevron: {
    width: 35,
    height: 35,
    borderRadius: 7,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },
});