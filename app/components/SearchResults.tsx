import React, { useMemo } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";

interface Employee {
  employeeId: string;
  employeeName: string;
  designation: string;
  salary?: number;
  // Add any other fields your API returns
}

interface SearchResultsProps {
  data: Employee[];
  input: string;
  setInput: (text: string) => void;
}

export default function SearchResults({ data, input, setInput }: SearchResultsProps) {
  // Filter employees based on search input (memoized for performance)
  const filteredEmployees = useMemo(() => {
    if (!input.trim()) return data;

    const searchTerm = input.toLowerCase().trim();
    return data.filter((employee) =>
      employee.employeeName.toLowerCase().includes(searchTerm)
    );
  }, [data, input]);

  const renderItem = ({ item }: { item: Employee }) => (
    <View style={styles.employeeCard}>
      {/* Avatar */}
      <View style={styles.avatar}>
        <Text style={styles.avatarText}>
          {item.employeeName?.charAt(0)?.toUpperCase() || "?"}
        </Text>
      </View>

      {/* Employee Info */}
      <View style={styles.info}>
        <Text style={styles.name}>{item.employeeName}</Text>
        <Text style={styles.designation}>
          {item.designation} • {item.employeeId}
        </Text>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={filteredEmployees}
        keyExtractor={(item) => item.employeeId}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.listContent}
        ListEmptyComponent={
          input.trim() ? (
            <View style={styles.emptySearch}>
              <Text style={styles.emptyText}>No employees found for "{input}"</Text>
            </View>
          ) : null
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  listContent: {
    padding: 12,
    paddingBottom: 40,
  },
  employeeCard: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "white",
    padding: 16,
    borderRadius: 16,
    marginBottom: 12,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.08,
    shadowRadius: 8,
    elevation: 4,
  },
  avatar: {
    width: 52,
    height: 52,
    borderRadius: 12,
    backgroundColor: "#4b6cb7",
    alignItems: "center",
    justifyContent: "center",
  },
  avatarText: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
  },
  info: {
    flex: 1,
    marginLeft: 14,
  },
  name: {
    fontSize: 17,
    fontWeight: "600",
    color: "#1F2937",
  },
  designation: {
    fontSize: 14,
    color: "#6B7280",
    marginTop: 4,
  },
  emptySearch: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 80,
  },
  emptyText: {
    fontSize: 16,
    color: "#6B7280",
    textAlign: "center",
  },
});