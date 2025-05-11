import { Image, Pressable, Text, View } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { Link } from "expo-router";

import { useAudioPlayerStatus } from "expo-audio";
import { usePlayer } from "@/providers/PlayerProvider";
import dummyBooks from "@/dummy-books";

const FloatingPlayer = () => {
  const book = dummyBooks[0];
  // @ts-ignore
  const { player } = usePlayer();
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
