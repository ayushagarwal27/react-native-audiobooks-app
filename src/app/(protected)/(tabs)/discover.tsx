import { Text, ActivityIndicator } from "react-native";
import React from "react";
import { useSupabase } from "@/lib/supabase";
import { useQuery } from "@tanstack/react-query";
import { FlatList } from "react-native";
import DiscoveryBookListItem from "@/components/DiscoveryBookListItem";

export default function DiscoverScreen() {
  const supabase = useSupabase();
  const { data, error, isLoading } = useQuery({
    queryKey: ["books"],
    queryFn: () => supabase.from("books").select("*").throwOnError(),
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
      renderItem={({ item }) => <DiscoveryBookListItem book={item} />}
    />
  );
}
