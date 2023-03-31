import { ScreenHeaderButton } from "app/components/atoms/ScreenHeaderButton";
import { NearbyJobs } from "app/components/organisms/NearbyJobs";
import { PopularJobs } from "app/components/organisms/PopularJobs";
import { Welcome } from "app/components/organisms/Welcome";
import { useFetch } from "app/hooks/useFetch";
import { Job } from "app/types/job";
import icons from "constants/icons";
import images from "constants/images";
import { COLORS, SIZES } from "constants/theme";
import { Stack } from "expo-router";
import { ScrollView, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Page() {
  const { data, error, loading } = useFetch<{ data: Job[] }>("search", {
    query: "React developer",
    num_pages: 1,
  });
  return (
    <SafeAreaView
      edges={["bottom", "left", "right"]}
      style={{
        flex: 1,
        backgroundColor: COLORS.lightWhite,
      }}
    >
      <Stack.Screen
        options={{
          headerStyle: { backgroundColor: COLORS.lightWhite },
          headerShadowVisible: false,
          headerLeft: () => (
            <ScreenHeaderButton iconUrl={icons.menu} dimension="60%" />
          ),
          headerRight: () => (
            <ScreenHeaderButton iconUrl={images.profile} dimension="100%" />
          ),
          headerTitle: "",
        }}
      />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View
          style={{
            flex: 1,
            padding: SIZES.medium,
            alignContent: "flex-start",
          }}
        >
          <Welcome />
          <PopularJobs error={error} jobs={data?.data} />
          <NearbyJobs error={error} jobs={data?.data} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
