import Header from "@/components/ui/Header";
import { useGetRatesData } from "@/hooks";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { RateItem } from "@/types";
import { MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "expo-router";

export const ITEM_HEIGHT = 120;

interface RateListTileProps {
  item: RateItem;
  onRatePress: (item: RateItem) => void;
}

export const RateListTile = ({ item, onRatePress }: RateListTileProps) => {
  return (
    <TouchableOpacity style={styles.tile} onPress={() => onRatePress(item)}>
      <View style={styles.rateContainer}>
        <Text style={styles.title}>
          {item.name}:<Text style={styles.rateText}> {item.rate}</Text>
        </Text>
        <MaterialIcons name="chevron-right" size={24} color="#555" />
      </View>
      <View style={styles.rateContainer}>
        <Text
          numberOfLines={1}
          ellipsizeMode="tail"
          style={[styles.rateText, { color: "green" }]}
        >
          Ask: {item.ask}
        </Text>
        <Text
          numberOfLines={1}
          ellipsizeMode="tail"
          style={[styles.rateText, { color: "red" }]}
        >
          Bid: {item.bid}
        </Text>
        <Text
          numberOfLines={1}
          ellipsizeMode="tail"
          style={[styles.rateText, { color: "blue" }]}
        >
          24h diff: {item.diff24h}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  tile: {
    backgroundColor: "#ffffff",
    borderRadius: 8,
    padding: 16,
    marginBottom: 16,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    height: ITEM_HEIGHT,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 8,
    height: 45,
    color: "#2c2d3f",
  },
  rateContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  rateText: {
    paddingHorizontal: 5,
    fontSize: 16,
    color: "#555",
    fontVariant: ["tabular-nums"],
    flexShrink: 1,
  },
});
