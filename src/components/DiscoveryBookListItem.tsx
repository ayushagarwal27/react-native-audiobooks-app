import { Image, Pressable, Text, View } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { FC } from "react";
import { useSupabase } from "@/lib/supabase";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useUser } from "@clerk/clerk-expo";

type Book = {
  id: string;
  title: string;
  author: string;
  audio_url: string;
  thumbnail_url?: string;
};

interface DiscoveryBookListItemProps {
  book: Book;
}

const DiscoveryBookListItem: FC<DiscoveryBookListItemProps> = ({ book }) => {
  const supabase = useSupabase();
  const { user } = useUser();

  const queryClient = useQueryClient();

  const { mutate } = useMutation({
    mutationFn: async () =>
      supabase
        .from("user-books")
        .insert({
          user_id: user?.id,
          book_id: book.id,
          position: 0,
        })
        .throwOnError(),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["my-books"] });
    },
  });
  return (
    <View className="flex-row gap-2 items-center">
      <Image
        source={{ uri: book.thumbnail_url }}
        className="size-24 rounded-16"
      />
      <View className="gap-1 flex-1">
        <Text className="text-gray-100 text-2xl font-bold">{book.title}</Text>
        <Text className="text-gray-400 ">{book.author}</Text>
      </View>
      <AntDesign
        name="plus"
        size={24}
        color={"gainsboro"}
        onPress={() => {
          mutate();
        }}
      />
    </View>
  );
};

export default DiscoveryBookListItem;
