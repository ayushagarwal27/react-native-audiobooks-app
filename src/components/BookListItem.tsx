import { Image, Pressable, Text, View } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { FC } from "react";
import { usePlayer } from "@/providers/PlayerProvider";

type Book = {
  id: string;
  title: string;
  author: string;
  audio_url: string;
  thumbnail_url?: string;
};

interface BookListItemProps {
  book: Book;
}

const BookListItem: FC<BookListItemProps> = ({ book }) => {
  const { setBook } = usePlayer();
  return (
    <Pressable
      className="flex-row gap-2 items-center"
      onPress={() => {
        setBook(book);
      }}
    >
      <Image
        source={{ uri: book.thumbnail_url }}
        className="size-24 rounded-16"
      />
      <View className="gap-1 flex-1">
        <Text className="text-gray-100 text-2xl font-bold">{book.title}</Text>
        <Text className="text-gray-400 ">{book.author}</Text>
      </View>
      <AntDesign name="playcircleo" size={24} color={"gainsboro"} />
    </Pressable>
  );
};

export default BookListItem;
