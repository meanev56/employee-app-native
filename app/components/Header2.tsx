import { AntDesign, Ionicons } from "@expo/vector-icons";
import React from "react";
import { Pressable, StyleSheet, TextInput, View } from "react-native";

interface HeaderProps {
  searchInput: string;
  setSearchInput: (text: string) => void;
  onBack: () => void;
  onAddPress: () => void;
}

export default function Header2({
  searchInput,
  setSearchInput,
  onBack,
  onAddPress,
}: HeaderProps) {
  return (
    <View style={styles.header}>
      <Ionicons
        name="arrow-back"
        size={26}
        color="#1F2937"
        onPress={onBack}
        style={styles.backButton}
      />

      <View style={styles.searchContainer}>
        <AntDesign
          name="search1"
          size={20}
          color="#6B7280"
          style={styles.searchIcon}
        />

        <TextInput
          value={searchInput}
          onChangeText={setSearchInput}
          placeholder="Search employees..."
          style={styles.searchInput}
          placeholderTextColor="#9CA3AF"
        />

        <Pressable onPress={onAddPress} style={styles.addButton}>
          <AntDesign name="pluscircle" size={32} color="#0072b1" />
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "white",
    paddingVertical: 12,
    paddingHorizontal: 8,
    borderBottomWidth: 1,
    borderBottomColor: "#E5E7EB",
  },
  backButton: {
    padding: 8,
    marginRight: 4,
  },
  searchContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F3F4F6",
    borderRadius: 12,
    paddingHorizontal: 12,
    height: 48,
    marginHorizontal: 8,
  },
  searchIcon: {
    marginRight: 10,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    color: "#1F2937",
  },
  addButton: {
    padding: 4,
  },
});