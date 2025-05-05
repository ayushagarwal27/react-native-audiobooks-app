import { View, Text, Button } from "react-native";
import React from "react";
import { useAuth } from "@clerk/clerk-expo";

export default function ProfileScreen() {
  const { signOut } = useAuth();
  return (
    <View>
      <Text>ProfileScreen</Text>
      <Button title="Sign Out" onPress={() => signOut()} />
    </View>
  );
}
