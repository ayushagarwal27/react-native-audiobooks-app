import { Image, Pressable, Text, View } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { FC } from "react";
import { Link } from "expo-router";

import dummyBooks from "@/dummy-books";
import { useAudioPlayer, useAudioPlayerStatus } from "expo-audio";

const FloatingPlayer = () => {
  const book = dummyBooks[0];
  const player = useAudioPlayer({ uri: book.audio_url });
  const playerStatus = useAudioPlayerStatus(player);
  return (
    <Link href={"/player"} asChild>
      <Pressable className="flex-row gap-2 items-center p-2 bg-slate-100late-900">
        <Image
          source={{ uri: book.thumbnail_url }}
          className="size-24 rounded-16"
        />
        <View className="gap-1 flex-1">
          <Text className="text-gray-100 text-2xl font-bold">{book.title}</Text>
          <Text className="text-gray-400 ">{book.author}</Text>
        </View>
        <AntDesign
          name={playerStatus.playing ? "pausecircleo" : "playcircleo"}
          size={24}
          color={"gainsboro"}
          onPress={() => {
            if (playerStatus.playing) {
              player.pause();
            } else {
              player.play();
            }
          }}
        />
      </Pressable>
    </Link>
  );
};

export default FloatingPlayer;
