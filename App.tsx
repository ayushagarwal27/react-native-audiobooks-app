import "./global.css";
import { StatusBar } from "expo-status-bar";
import { FlatList, View } from "react-native";
import books from "./src/dummy-books";
import BookListItem from "./src/components/BookListItem";

export default function App() {
  return (
    <View className="flex-1  justify-center bg-slate-800 p-4 pt-24">
      {/* Book Rows */}
      <FlatList
        data={books}
        contentContainerClassName="gap-4"
        renderItem={({ item }) => <BookListItem book={item} />}
      />
      <StatusBar style="auto" />
    </View>
  );
}
