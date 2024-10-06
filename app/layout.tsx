import { Stack } from "expo-router";
import React from "react";
import { View, Text } from "react-native";
const RootLayout = () => {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ title: "Home" }} />
      <Stack.Screen name="detail" options={{ title: "Details" }} />
    </Stack>
  );
};
export default RootLayout;
