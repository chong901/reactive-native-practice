import { ScreenHeaderButton } from "app/components/atoms/ScreenHeaderButton";
import { PopularJobs } from "app/components/organisms/PopularJobs";
import { Welcome } from "app/components/organisms/Welcome";
import icons from "constants/icons";
import images from "constants/images";
import { COLORS, SIZES } from "constants/theme";
import { Stack } from "expo-router";
import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Page() {
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
      <View
        style={{
          flex: 1,
          padding: SIZES.medium,
          alignContent: "flex-start",
        }}
      >
        <Welcome />
        <PopularJobs />
        <NearbyJobs />
      </View>
    </SafeAreaView>
  );
}

const NearbyJobs = () => <Text>Nearby jobs</Text>;
