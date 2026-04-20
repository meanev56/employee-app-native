import axios from "axios";
import React, { useState } from "react";
import { Alert, ScrollView, StyleSheet, View } from "react-native";

import ActiveEmployeeRow from "../components/ActiveEmployeeRow";
import FormHeader from "../components/FormHeader";
import InputField from "../components/InputField";
import SubmitButton from "../components/SubmitButton";

interface EmployeeFormData {
  employeeName: string;
  employeeId: string;
  designation: string;
  phoneNumber: string;
  dateOfBirth: string;
  joiningDate: string;
  salary: string;
  address: string;
  activeEmployee: boolean;
}

export default function AddDetails() {
  const [formData, setFormData] = useState<EmployeeFormData>({
    employeeName: "",
    employeeId: "",
    designation: "",
    phoneNumber: "",
    dateOfBirth: "",
    joiningDate: "",
    salary: "",
    address: "",
    activeEmployee: true,
  });

  const [loading, setLoading] = useState(false);

  const updateField = (field: keyof EmployeeFormData, value: string | boolean) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleRegister = async () => {
    const { employeeName, employeeId, designation } = formData;

    if (!employeeName.trim() || !employeeId.trim() || !designation.trim()) {
      Alert.alert("Missing Fields", "Please fill in Full Name, Employee ID, and Designation.");
      return;
    }

    setLoading(true);

    try {
      await axios.post("http://localhost:8000/addEmployee", formData);

      Alert.alert("Success", "Employee added successfully!");

      // Reset form after success
      setFormData({
        employeeName: "",
        employeeId: "",
        designation: "",
        phoneNumber: "",
        dateOfBirth: "",
        joiningDate: "",
        salary: "",
        address: "",
        activeEmployee: true,
      });
    } catch (error) {
      console.error("Failed to add employee:", error);
      Alert.alert("Error", "Failed to add employee. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <View style={styles.content}>
        <FormHeader />

        <InputField
          label="Full Name (First and Last)"
          value={formData.employeeName}
          onChangeText={(text) => updateField("employeeName", text)}
          placeholder="Enter full name"
        />

        <InputField
          label="Employee ID"
          value={formData.employeeId}
          onChangeText={(text) => updateField("employeeId", text)}
          placeholder="Enter employee ID"
          autoCapitalize="none"
        />

        <InputField
          label="Designation"
          value={formData.designation}
          onChangeText={(text) => updateField("designation", text)}
          placeholder="Enter designation"
        />

        <InputField
          label="Mobile Number"
          value={formData.phoneNumber}
          onChangeText={(text) => updateField("phoneNumber", text)}
          placeholder="Enter mobile number"
          keyboardType="phone-pad"
        />

        <InputField
          label="Date of Birth"
          value={formData.dateOfBirth}
          onChangeText={(text) => updateField("dateOfBirth", text)}
          placeholder="YYYY-MM-DD"
        />

        <InputField
          label="Joining Date"
          value={formData.joiningDate}
          onChangeText={(text) => updateField("joiningDate", text)}
          placeholder="YYYY-MM-DD"
        />

        <ActiveEmployeeRow />

        <InputField
          label="Salary"
          value={formData.salary}
          onChangeText={(text) => updateField("salary", text)}
          placeholder="Enter salary"
          keyboardType="numeric"
        />

        <InputField
          label="Address"
          value={formData.address}
          onChangeText={(text) => updateField("address", text)}
          placeholder="Enter full address"
          multiline
          numberOfLines={3}
        />

        <SubmitButton
          onPress={handleRegister}
          loading={loading}
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8fafc",
  },
  content: {
    padding: 16,
  },
});