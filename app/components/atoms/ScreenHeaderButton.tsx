import { COLORS, SIZES } from "constants/theme";
import { ComponentProps } from "react";
import { Image, ImageSourcePropType, StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

const styles = StyleSheet.create({
  btnContainer: {
    width: 40,
    height: 40,
    backgroundColor: COLORS.white,
    borderRadius: SIZES.small / 1.25,
    justifyContent: "center",
    alignItems: "center",
  },
});

type Props = {
  iconUrl: ImageSourcePropType;
  dimension: string;
} & ComponentProps<typeof TouchableOpacity>;

export const ScreenHeaderButton = ({
  iconUrl,
  dimension,
  ...touchableProps
}: Props) => (
  <TouchableOpacity style={styles.btnContainer} {...touchableProps}>
    <Image
      resizeMode="cover"
      source={iconUrl}
      style={{
        width: dimension,
        height: dimension,
        borderRadius: SIZES.small / 1.25,
      }}
    />
  </TouchableOpacity>
);
