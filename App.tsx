import "./global.css";
import { StatusBar } from "expo-status-bar";
import { View } from "react-native";
import books from "./src/dummy-books";
import BookListItem from "./src/components/BookListItem";

export default function App() {
  return (
    <View className="flex-1  justify-center bg-slate-800 p-4">
      {/* Book Rows */}
      <BookListItem book={books[0]} />
      <BookListItem book={books[1]} />
      <BookListItem book={books[2]} />
      <StatusBar style="auto" />
    </View>
  );
}
