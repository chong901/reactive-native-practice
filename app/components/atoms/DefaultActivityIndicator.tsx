import { COLORS } from "constants/theme";
import React, { ComponentProps } from "react";
import { ActivityIndicator } from "react-native";

export const DefaultActivityIndicator = (
  props: ComponentProps<typeof ActivityIndicator>
) => <ActivityIndicator size="large" color={COLORS.primary} {...props} />;
