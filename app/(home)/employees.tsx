import axios from "axios";
import { useRouter } from "expo-router";
import React, { useCallback, useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";

import EmptyState from "../components/EmptyState";
import Header from "../components/Header2";
import SearchResults from "../components/SearchResults";

interface Employee {
  employeeId: string;
  employeeName: string;
  designation: string;
  salary?: number;
  // Add any other fields returned by your API
}

export default function Employees() {
  const router = useRouter();

  const [employees, setEmployees] = useState<Employee[]>([]);
  const [searchInput, setSearchInput] = useState("");
  const [loading, setLoading] = useState(true);

  const fetchEmployees = useCallback(async () => {
    setLoading(true);
    try {
      const response = await axios.get("http://localhost:8000/employees");
      setEmployees(response.data || []);
    } catch (error) {
      console.error("Error fetching employees:", error);
      setEmployees([]);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchEmployees();
  }, [fetchEmployees]);

  return (
    <View style={styles.container}>
      <Header
        searchInput={searchInput}
        setSearchInput={setSearchInput}
        onBack={() => router.back()}
        onAddPress={() => router.push("/(home)/adddetails")}
      />

      {loading ? (
        <View style={styles.centerContainer}>
          <Text style={styles.loadingText}>Loading employees...</Text>
        </View>
      ) : employees.length === 0 ? (
        <EmptyState onAddPress={() => router.push("/(home)/adddetails")} />
      ) : (
        <SearchResults
          data={employees}
          input={searchInput}
          setInput={setSearchInput}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8fafc",
  },
  centerContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  loadingText: {
    fontSize: 16,
    color: "#6B7280",
  },
});