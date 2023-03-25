import { ScreenHeaderButton } from "app/components/atoms/ScreenHeaderButton";
import { COLORS, SIZES } from "constants/theme";
import { Stack } from "expo-router";
import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Page() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
      <Stack.Screen
        options={{
          headerStyle: { backgroundColor: COLORS.lightWhite },
          headerShadowVisible: false,
          headerLeft: () => <ScreenHeaderButton />,
          headerRight: () => <ScreenHeaderButton />,
          headerTitle: "",
        }}
      />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View
          style={{
            flex: 1,
            padding: SIZES.medium,
          }}
        >
          <Welcome />
          <PopularJobs />
          <NearbyJobs />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const Welcome = () => <Text>Welcome</Text>;

const PopularJobs = () => <Text>Popular jobs</Text>;
const NearbyJobs = () => <Text>Nearby jobs</Text>;
