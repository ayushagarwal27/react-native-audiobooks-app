import { View, Text, Pressable } from "react-native";
import React from "react";
import Entypo from "@expo/vector-icons/Entypo";
import { router } from "expo-router";

export default function PlayerScreen() {
  return (
    <View className="flex-1 justify-center items-center">
      <Pressable
        onPress={() => {
          router.back();
        }}
        className="absolute top-16 left-4 bg-gray-800 rounded-full p-2"
      >
        <Entypo name="chevron-down" size={24} color="white" />
      </Pressable>
      <Text className="text-white">PlayerScreen</Text>
    </View>
  );
}
