import { ActivityIndicator, FlatList, Text } from "react-native";
import books from "@/dummy-books";
import BookListItem from "@/components/BookListItem";
import { useSupabase } from "@/lib/supabase";
import { useQuery } from "@tanstack/react-query";

export default function App() {
  const supabase = useSupabase();
  const { data, isLoading, error } = useQuery({
    queryKey: ["my-books"],
    queryFn: async () =>
      supabase.from("user-books").select("*, book:books(*)").throwOnError(),
  });

  if (isLoading) {
    return <ActivityIndicator />;
  }

  if (error) {
    return <Text className="text-white">{error.message}</Text>;
  }

  return (
    <FlatList
      data={data?.data || []}
      contentContainerClassName="gap-4 p-2"
      renderItem={({ item }) => <BookListItem book={item.book} />}
    />
  );
}
