import Header from "@/components/ui/Header";
import { useGetRatesData } from "@/hooks";
import { StyleSheet, View, FlatList, ListRenderItemInfo } from "react-native";
import { RateItem } from "@/types";
import { useRouter } from "expo-router";
import { useCallback, useState, useTransition } from "react";
import Loader from "@/components/ui/Loader";
import { ITEM_HEIGHT, RateListTile } from "./components/RateListTile";
import ErrorComponent from "@/components/ui/ErrorComponent";

export default function HomeScreen() {
  const router = useRouter();
  const [searchText, setSearchText] = useState("");
  const [isPending, startTransition] = useTransition();

  const handleSearchChange = (term: string) => {
    startTransition(() => {
      setSearchText(term);
    });
  };

  const handleRatePress = (item: RateItem) => {
    router.push({
      pathname: "/(rates)/details",
      params: { item: JSON.stringify(item) },
    });
  };

  const { data, isLoading, isError } = useGetRatesData({
    searhTerm: searchText,
  });

  const renderItem = useCallback(
    ({ item }: ListRenderItemInfo<RateItem>) => (
      <RateListTile item={item} onRatePress={handleRatePress} />
    ),
    []
  );

  const keyExtractor = useCallback((item: RateItem) => item.name, []);

  if (isLoading) {
    return <Loader />;
  }

  if (isError) {
    return <ErrorComponent />;
  }

  return (
    <View style={{ flex: 1, height: "100%" }}>
      <Header showSearch={true} handleSearch={handleSearchChange} />
      <FlatList<RateItem>
        data={data}
        keyExtractor={keyExtractor}
        renderItem={renderItem}
        contentContainerStyle={styles.listContainer}
        initialNumToRender={10}
        maxToRenderPerBatch={10}
        windowSize={10}
        getItemLayout={(_, index) => ({
          length: ITEM_HEIGHT,
          offset: ITEM_HEIGHT * index,
          index,
        })}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  listContainer: {
    padding: 16,
  },
});
