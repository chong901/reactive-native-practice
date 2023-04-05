import { ImageWithDefaultUri } from "app/components/atoms/ImageWithDefault";
import { Job } from "app/types/job";
import icons from "constants/icons";
import { COLORS, FONT, SIZES } from "constants/theme";
import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

const styles = StyleSheet.create({
  container: {
    marginVertical: SIZES.medium,
    justifyContent: "center",
    alignItems: "center",
  },
  logoBox: {
    width: 80,
    height: 80,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFF",
    borderRadius: SIZES.large,
  },
  logoImage: {
    width: "80%",
    height: "80%",
  },
  jobTitleBox: {
    marginTop: SIZES.small,
  },
  jobTitle: {
    fontSize: SIZES.large,
    color: COLORS.primary,
    fontFamily: FONT.bold,
    textAlign: "center",
  },
  companyInfoBox: {
    marginTop: SIZES.small / 2,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  companyName: {
    fontSize: SIZES.medium - 2,
    color: COLORS.primary,
    fontFamily: FONT.medium,
  },
  locationBox: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  locationImage: {
    width: 14,
    height: 14,
    tintColor: COLORS.gray,
  },
  locationName: {
    fontSize: SIZES.medium - 2,
    color: COLORS.gray,
    fontFamily: FONT.regular,
    marginLeft: 2,
  },
});
export const Company = ({
  employer_logo,
  job_title,
  employer_name,
  job_country,
}: Pick<
  Job,
  "employer_logo" | "job_title" | "employer_name" | "job_country"
>) => (
  <View style={styles.container}>
    <View style={styles.logoBox}>
      <ImageWithDefaultUri
        defaultUri="https://t4.ftcdn.net/jpg/05/05/61/73/360_F_505617309_NN1CW7diNmGXJfMicpY9eXHKV4sqzO5H.jpg"
        uri={employer_logo}
        style={styles.logoImage}
      />
    </View>
    <View style={styles.jobTitleBox}>
      <Text style={styles.jobTitle}>{job_title}</Text>
    </View>
    <View style={styles.companyInfoBox}>
      <Text style={styles.companyName}>{employer_name} / </Text>
      <View style={styles.locationBox}>
        <Image
          source={icons.location}
          resizeMode="contain"
          style={styles.locationImage}
        />
        <Text style={styles.locationName}>{job_country}</Text>
      </View>
    </View>
  </View>
);
