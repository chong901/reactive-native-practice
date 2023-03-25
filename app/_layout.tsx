import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";

SplashScreen.preventAutoHideAsync();

export default function Layout() {
  const [isFontsLoaded] = useFonts({
    DMBold: require("assets/fonts/DMSans-Bold.ttf"),
    DMRegular: require("assets/fonts/DMSans-Regular.ttf"),
    DMMedium: require("assets/fonts/DMSans-Medium.ttf"),
  });

  useEffect(() => {
    if (isFontsLoaded) {
      SplashScreen.hideAsync();
    }
  }, [isFontsLoaded]);

  if (!isFontsLoaded) {
    return null;
  }
  return <Stack />;
}
