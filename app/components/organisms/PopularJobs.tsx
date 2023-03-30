import { PopularJobCard } from "app/components/molecules/PopularJobCard";
import { useFetch } from "app/hooks/useFetch";
import { Job } from "app/types/job";
import { COLORS, FONT, SIZES } from "constants/theme";
import {
  ActivityIndicator,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { FlatList } from "react-native-gesture-handler";

const styles = StyleSheet.create({
  container: {
    marginTop: SIZES.xLarge,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  headerTitle: {
    fontSize: SIZES.large,
    fontFamily: FONT.medium,
    color: COLORS.primary,
  },
  headerBtn: {
    fontSize: SIZES.medium,
    fontFamily: FONT.medium,
    color: COLORS.gray,
  },
  cardsContainer: {
    marginTop: SIZES.medium,
  },
});

export const PopularJobs = () => {
  const { data, error, loading } = useFetch<{ data: Job[] }>("search", {
    query: "React developer",
    num_pages: 1,
  });
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Popular jobs</Text>
        <TouchableOpacity>
          <Text style={styles.headerBtn}>Show all</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.cardsContainer}>
        {loading || !data ? (
          <ActivityIndicator size="large" color={COLORS.primary} />
        ) : error ? (
          <Text>Something went wrong</Text>
        ) : (
          <FlatList
            data={data.data ?? []}
            renderItem={({ item }) => <PopularJobCard job={item} />}
            keyExtractor={(item) => item.job_id}
            horizontal
            contentContainerStyle={{ columnGap: SIZES.medium }}
          />
        )}
      </View>
    </View>
  );
};
