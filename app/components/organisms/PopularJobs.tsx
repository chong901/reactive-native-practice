import { DefaultActivityIndicator } from "app/components/atoms/DefaultActivityIndicator";
import { PopularJobCard } from "app/components/molecules/PopularJobCard";
import { Job } from "app/types/job";
import { COLORS, FONT, SIZES } from "constants/theme";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
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

export const PopularJobs = ({
  error,
  jobs,
}: {
  jobs?: Job[];
  error?: unknown;
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Popular jobs</Text>
        <TouchableOpacity>
          <Text style={styles.headerBtn}>Show all</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.cardsContainer}>
        {!jobs ? (
          <DefaultActivityIndicator />
        ) : error ? (
          <Text>Something went wrong</Text>
        ) : (
          <FlatList
            data={jobs}
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
