import { DefaultActivityIndicator } from "app/components/atoms/DefaultActivityIndicator";
import { ScreenHeaderButton } from "app/components/atoms/ScreenHeaderButton";
import { Company } from "app/components/molecules/Company";
import { Tabs } from "app/components/molecules/Tabs";
import { useFetch } from "app/hooks/useFetch";
import { Job } from "app/types/job";
import icons from "constants/icons";
import { COLORS, SIZES } from "constants/theme";
import { Stack, useRouter, useSearchParams } from "expo-router";
import { useState } from "react";
import {
  RefreshControl,
  SafeAreaView,
  ScrollView,
  Text,
  View,
} from "react-native";

export default function JobDetail() {
  const routerParams = useSearchParams<{ id: string }>();
  const router = useRouter();
  const tabs = ["About", "Qualifications", "Responsibilities"] as const;
  const { data, error, loading, refetch } = useFetch<{ data: [Job] | [] }>(
    "job-details",
    {
      job_id: routerParams.id,
    }
  );

  const [refreshing, setRefreshing] = useState(false);
  const [activeTab, setActiveTab] = useState<typeof tabs[number]>(tabs[0]);
  const job = data?.data[0];

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
      <Stack.Screen
        options={{
          headerStyle: { backgroundColor: COLORS.lightWhite },
          headerShadowVisible: false,
          headerLeft: () => (
            <ScreenHeaderButton
              dimension="60%"
              iconUrl={icons.left}
              onPress={() => router.back()}
            />
          ),
          headerRight: () => (
            <ScreenHeaderButton dimension="60%" iconUrl={icons.share} />
          ),
          headerTitle: "",
        }}
      />
      <ScrollView
        showsVerticalScrollIndicator={false}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={refetch} />
        }
      >
        {loading ? (
          <DefaultActivityIndicator />
        ) : error ? (
          <Text>Something went wrong</Text>
        ) : !job ? (
          <Text>No job found</Text>
        ) : (
          <View style={{ padding: SIZES.medium, paddingBottom: 100 }}>
            <Company {...job} />
            <Tabs tabs={tabs} activeTab={activeTab} onTabClick={setActiveTab} />
          </View>
        )}
      </ScrollView>
    </SafeAreaView>
  );
}
