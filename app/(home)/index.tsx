import { LinearGradient } from "expo-linear-gradient";
import { useRouter } from "expo-router";
import React from "react";
import { ScrollView, StyleSheet, View } from "react-native";

import Header from "../components/Header";
import QuickActionCards from "../components/QuickActionCards";
import ReportsSection from "../components/ReportsSection";
import StatsCards from "../components/StatsCards";

export default function Index() {
  const router = useRouter();

  return (
    <ScrollView style={styles.scrollView}>
      <LinearGradient colors={["#7F7FD5", "#E9E4F0"]} style={styles.gradient}>
        <View style={styles.container}>
          <Header />

          <QuickActionCards
            onEmployeePress={() => router.push("/(home)/employees")}
            onAttendancePress={() => router.push("/(home)/markattendance")}
          />

          <ReportsSection
            onSummaryPress={() => router.push("/(home)/summary")}
          />

          <StatsCards />
        </View>
      </LinearGradient>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
  },
  gradient: {
    flex: 1,
  },
  container: {
    padding: 12,
  },
});