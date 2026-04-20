import { Feather, MaterialCommunityIcons } from "@expo/vector-icons";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function StatsCards() {
  return (
    <>
      <View style={styles.statsRow}>
        <StatCard
          backgroundColor="#f79d00"
          icon={<MaterialCommunityIcons name="guy-fawkes-mask" size={24} color="black" />}
          title="Attendance Criteria"
        />
        <StatCard
          backgroundColor="#ABCABA"
          icon={<Feather name="bar-chart" size={24} color="black" />}
          title="Increased Workflow"
        />
      </View>

      <View style={styles.statsRow}>
        <StatCard
          backgroundColor="#D3CCE3"
          icon={<MaterialCommunityIcons name="guy-fawkes-mask" size={24} color="black" />}
          title="Cost Savings"
        />
        <StatCard
          backgroundColor="#bdc3c7"
          icon={<Feather name="bar-chart" size={24} color="black" />}
          title="Employee Performance"
        />
      </View>
    </>
  );
}

type StatCardProps = {
  backgroundColor: string;
  icon: React.ReactNode;
  title: string;
};

function StatCard({ backgroundColor, icon, title }: StatCardProps) {
  return (
    <View style={[styles.statCard, { backgroundColor }]}>
      <View style={styles.smallIconContainer}>{icon}</View>
      <Text style={styles.statText}>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  statsRow: {
    marginTop: 20,
    flexDirection: "row",
    gap: 12,
  },
  statCard: {
    borderRadius: 6,
    padding: 12,
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
  smallIconContainer: {
    width: 35,
    height: 35,
    borderRadius: 7,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },
  statText: {
    marginTop: 7,
    fontSize: 13,
    textAlign: "center",
  },
});