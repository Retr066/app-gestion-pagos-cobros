import type { StorageManager } from "native-base";
import { ColorMode, NativeBaseProvider } from "native-base";
import React from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { theme } from "../config/theme";

type AppContainerProps = {
  children: React.ReactNode;
};

const AppContainer = ({ children }: AppContainerProps) => {
  // const fonts = useFonts();
  const colorModeManager: StorageManager = {
    get: async () => {
      try {
        const val = await AsyncStorage.getItem("@my-app-color-mode");
        return val === "dark" ? "dark" : "light";
      } catch (e) {
        console.log(e);
        return "light";
      }
    },
    set: async (value: ColorMode) => {
      try {
        await AsyncStorage.setItem(
          "@my-app-color-mode",
          value === "dark" ? "dark" : "light"
        );
      } catch (e) {
        console.log(e);
      }
    },
  };

  const config = {
    dependencies: {
      "linear-gradient": require("expo-linear-gradient").LinearGradient,
    },
  };

  return (
    <NativeBaseProvider
      config={config}
      colorModeManager={colorModeManager}
      theme={theme}
    >
      {children}
    </NativeBaseProvider>
  );
};

export default AppContainer;
