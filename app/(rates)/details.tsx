import Header from "@/components/ui/Header";
import { RateItem } from "@/types";
import { useLocalSearchParams } from "expo-router";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { Badge, List } from "react-native-paper";
import { LineChart } from "react-native-gifted-charts";

export default function DetailsScreen() {
  const { item } = useLocalSearchParams();

  //not a good practice, but it's ok for this example
  const rateData: RateItem = item ? JSON.parse(item as string) : null;

  if (!rateData) {
    return (
      <View style={styles.container}>
        <Text style={styles.errorText}>No data available.</Text>
      </View>
    );
  }

  const chartData = [
    { value: rateData.rate, label: "Rate" },
    { value: rateData.ask, label: "Ask" },
    { value: rateData.bid, label: "Bid" },
    { value: rateData.diff24h, label: "24h Diff" },
  ];

  return (
    <View style={{ flex: 1, height: "100%" }}>
      <Header showBackButton />
      <ScrollView style={styles.content}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>{rateData.name}</Text>
          <Badge style={styles.badge}>Info</Badge>
        </View>
        <List.Section>
          <List.Item
            title="Rate"
            description={rateData.rate.toString()}
            left={(props) => <List.Icon {...props} icon="currency-usd" />}
          />
          <List.Item
            title="Ask"
            description={rateData.ask.toString()}
            left={(props) => <List.Icon {...props} icon="arrow-up" />}
          />

          <List.Item
            title="Bid"
            description={rateData.bid.toString()}
            left={(props) => <List.Icon {...props} icon="arrow-down" />}
          />
          <List.Item
            title="24h Difference"
            description={rateData.diff24h.toString()}
            left={(props) => <List.Icon {...props} icon="chart-line" />}
          />
        </List.Section>
        <LineChart
          data={chartData}
          width={300}
          height={200}
          isAnimated
          hideDataPoints={false}
          dataPointsColor="#6200ee"
          color="#6200ee"
          yAxisThickness={0}
          xAxisThickness={0}
          xAxisLabelTextStyle={styles.axisLabel}
        />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },
  content: {
    flex: 1,
    padding: 16,
  },
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 16,
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#2c2d3f",
    marginRight: 8,
  },
  badge: {
    backgroundColor: "#6200ee",
    color: "#ffffff",
    fontSize: 14,
    paddingHorizontal: 8,
  },
  errorText: {
    fontSize: 18,
    color: "#d32f2f",
    textAlign: "center",
    marginTop: 16,
  },
  axisLabel: {
    fontSize: 12,
    color: "#555",
  },
});
