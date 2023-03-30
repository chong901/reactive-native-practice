import icons from "constants/icons";
import { COLORS, FONT, SIZES } from "constants/theme";
import { useRouter } from "expo-router";
import { useState } from "react";
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

const styles = StyleSheet.create({
  container: {
    width: "100%",
  },
  userName: {
    fontFamily: FONT.regular,
    fontSize: SIZES.large,
    color: COLORS.secondary,
  },
  welcomeMessage: {
    fontFamily: FONT.bold,
    fontSize: SIZES.xLarge,
    color: COLORS.primary,
    marginTop: 2,
  },
  searchContainer: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    marginTop: SIZES.large,
    height: 50,
  },
  searchWrapper: {
    flex: 1,
    backgroundColor: COLORS.white,
    marginRight: SIZES.small,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: SIZES.medium,
    height: "100%",
  },
  searchInput: {
    fontFamily: FONT.regular,
    width: "100%",
    height: "100%",
    paddingHorizontal: SIZES.medium,
  },
  searchBtn: {
    width: 50,
    height: "100%",
    backgroundColor: COLORS.tertiary,
    borderRadius: SIZES.medium,
    justifyContent: "center",
    alignItems: "center",
  },
  searchBtnImage: {
    width: "50%",
    height: "50%",
    tintColor: COLORS.white,
  },
  tabsContainer: {
    width: "100%",
    marginTop: SIZES.medium,
  },
});

const getTabStyle = (activeJobType: string, item: string) => ({
  paddingVertical: SIZES.small / 2,
  paddingHorizontal: SIZES.small,
  borderRadius: SIZES.medium,
  borderWidth: 1,
  borderColor: activeJobType === item ? COLORS.secondary : COLORS.gray2,
});
const getTabTextStyle = (activeJobType: string, item: string) => ({
  fontFamily: FONT.medium,
  color: activeJobType === item ? COLORS.secondary : COLORS.gray2,
});

const jobTypes = ["Full-Time", "Part-Time", "Contract"] as const;

export const Welcome = () => {
  const router = useRouter();
  const [activeJobType, setActiveJobType] = useState(jobTypes[0] as string);
  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.userName}>Hello, John</Text>
        <Text style={styles.welcomeMessage}>Find ur perfect jobs</Text>
      </View>
      <View style={styles.searchContainer}>
        <View style={styles.searchWrapper}>
          <TextInput
            style={styles.searchInput}
            placeholder="What r u looking for?"
          />
        </View>
        <TouchableOpacity style={styles.searchBtn}>
          <Image
            resizeMode="contain"
            source={icons.search}
            style={styles.searchBtnImage}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.tabsContainer}>
        <FlatList
          data={jobTypes}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={getTabStyle(activeJobType, item)}
              onPress={() => {
                setActiveJobType(item);
                router.push(`/search/${item.toLowerCase()}`);
              }}
            >
              <Text style={getTabTextStyle(activeJobType, item)}>{item}</Text>
            </TouchableOpacity>
          )}
          keyExtractor={(item) => item}
          horizontal
          contentContainerStyle={{ columnGap: SIZES.small }}
        />
      </View>
    </View>
  );
};
