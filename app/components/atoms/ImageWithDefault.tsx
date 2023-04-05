import React, { ComponentProps, useState } from "react";
import { Image, ImageErrorEventData, NativeSyntheticEvent } from "react-native";

export const ImageWithDefaultUri = (
  props: Omit<ComponentProps<typeof Image>, "source"> & {
    defaultUri: string;
    uri: string;
  }
) => {
  const [error, setError] =
    useState<NativeSyntheticEvent<ImageErrorEventData> | null>(null);
  return (
    <Image
      onError={setError}
      source={{ uri: !props.uri || !!error ? props.defaultUri : props.uri }}
      {...props}
    />
  );
};
