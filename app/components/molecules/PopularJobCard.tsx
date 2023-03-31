import { Job } from "app/types/job";
import { COLORS, FONT, SHADOWS, SIZES } from "constants/theme";
import { useRouter } from "expo-router";
import { useState } from "react";
import {
  Image,
  StyleProp,
  StyleSheet,
  Text,
  TextStyle,
  View,
  ViewStyle,
} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
const getContainerStyle = (
  selectedJob: Job | undefined,
  item: Job
): StyleProp<ViewStyle> => ({
  width: 250,
  padding: SIZES.xLarge,
  backgroundColor:
    selectedJob?.job_id === item.job_id ? COLORS.primary : "#FFF",
  borderRadius: SIZES.medium,
  justifyContent: "space-between",
  ...SHADOWS.medium,
  shadowColor: COLORS.white,
});
const getLogoContainerStyle = (
  selectedJob: Job | undefined,
  item: Job
): StyleProp<ViewStyle> => ({
  width: 50,
  height: 50,
  backgroundColor: selectedJob?.job_id === item.job_id ? "#FFF" : COLORS.white,
  borderRadius: SIZES.medium,
  justifyContent: "center",
  alignItems: "center",
});
const getJobNameStyle = (
  selectedJob: Job | undefined,
  item: Job
): StyleProp<TextStyle> => ({
  fontSize: SIZES.large,
  fontFamily: FONT.medium,
  color: selectedJob?.job_id === item.job_id ? COLORS.white : COLORS.primary,
});
const getPublisherStyle = (
  selectedJob: Job,
  item: Job
): StyleProp<TextStyle> => ({
  fontSize: SIZES.medium - 2,
  fontFamily: FONT.regular,
  color: selectedJob.job_id === item.job_id ? COLORS.white : COLORS.primary,
});

const styles = StyleSheet.create({
  logoImage: {
    width: "70%",
    height: "70%",
  },
  companyName: {
    fontSize: SIZES.medium,
    fontFamily: FONT.regular,
    color: "#B3AEC6",
    marginTop: SIZES.small / 1.5,
  },
  infoContainer: {
    marginTop: SIZES.large,
  },
  infoWrapper: {
    flexDirection: "row",
    marginTop: 5,
    justifyContent: "flex-start",
    alignItems: "center",
  },
  location: {
    fontSize: SIZES.medium - 2,
    fontFamily: FONT.regular,
    color: "#B3AEC6",
  },
});

type Props = {
  job: Job;
  selectedJob?: Job;
};

export const PopularJobCard = ({ job, selectedJob }: Props) => {
  const [isImageError, setIsImageError] = useState(false);
  const router = useRouter();
  return (
    <TouchableOpacity
      style={getContainerStyle(selectedJob, job)}
      onPress={() => router.push(`/job-details/${job.job_id}`)}
    >
      <View style={getLogoContainerStyle(selectedJob, job)}>
        <Image
          source={{
            uri:
              isImageError || !job.employer_logo
                ? "https://t4.ftcdn.net/jpg/05/05/61/73/360_F_505617309_NN1CW7diNmGXJfMicpY9eXHKV4sqzO5H.jpg"
                : job.employer_logo,
          }}
          resizeMode="contain"
          style={styles.logoImage}
          onError={() => setIsImageError(true)}
        />
      </View>
      <Text style={styles.companyName} numberOfLines={1}>
        {job.employer_name}
      </Text>
      <View style={styles.infoContainer}>
        <Text style={getJobNameStyle(selectedJob, job)} numberOfLines={1}>
          {job.job_title}
        </Text>
        <Text style={styles.location}>{job.job_country}</Text>
      </View>
    </TouchableOpacity>
  );
};
