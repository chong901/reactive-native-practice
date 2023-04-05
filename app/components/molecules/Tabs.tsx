import { COLORS, SHADOWS, SIZES } from "constants/theme";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

const styles = StyleSheet.create({
  container: {
    marginTop: SIZES.small,
    marginBottom: SIZES.small / 2,
  },
  activeTabBtn: {
    backgroundColor: COLORS.primary,
  },
  tabBtn: {
    paddingVertical: SIZES.medium,
    paddingHorizontal: SIZES.xLarge,
    backgroundColor: "#F3F4F8",
    borderRadius: SIZES.medium,
    marginLeft: 2,
    ...SHADOWS.medium,
    shadowColor: COLORS.white,
  },
  activeTabText: {
    fontFamily: "DMMedium",
    fontSize: SIZES.small,
    color: "#C3BFCC",
  },
  tabText: {
    fontFamily: "DMMedium",
    fontSize: SIZES.small,
    color: "#AAA9B8",
  },
});

const Tab = <T extends string>({
  tab,
  isActive,
  onPress,
}: {
  tab: T;
  isActive: boolean;
  onPress: (tab: T) => void;
}) => {
  return (
    <TouchableOpacity
      style={[styles.tabBtn, ...(isActive ? [styles.activeTabBtn] : [])]}
      onPress={() => onPress(tab)}
    >
      <Text
        style={[styles.tabText, ...(isActive ? [styles.activeTabText] : [])]}
      >
        {tab}
      </Text>
    </TouchableOpacity>
  );
};

export const Tabs = <T extends string>({
  tabs,
  activeTab,
  onTabClick,
}: {
  tabs: readonly T[];
  activeTab: T;
  onTabClick: (tab: T) => void;
}) => {
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-evenly",
        ...styles.container,
      }}
    >
      {tabs.map((tab) => (
        <Tab
          key={tab}
          tab={tab}
          isActive={tab === activeTab}
          onPress={onTabClick}
        />
      ))}
    </View>
  );
};
