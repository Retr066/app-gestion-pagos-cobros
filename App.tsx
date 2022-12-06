import React, { useCallback, useEffect, useState } from "react";
import AppContainer from "./src/context/AppContainer";
import Navigator from "./src";
import { registerRootComponent } from "expo";
import * as SplashScreen from "expo-splash-screen";
import * as Font from "expo-font";
import { View } from "react-native";
import { Provider } from "react-redux";
import store from "./src/store";
import {
  SourceSansPro_200ExtraLight,
  SourceSansPro_200ExtraLight_Italic,
  SourceSansPro_300Light,
  SourceSansPro_300Light_Italic,
  SourceSansPro_400Regular,
  SourceSansPro_400Regular_Italic,
  SourceSansPro_600SemiBold,
  SourceSansPro_600SemiBold_Italic,
  SourceSansPro_700Bold,
  SourceSansPro_700Bold_Italic,
  SourceSansPro_900Black,
  SourceSansPro_900Black_Italic,
} from "@expo-google-fonts/source-sans-pro";

SplashScreen.preventAutoHideAsync();
export default function App() {
  const [appIsReady, setAppIsReady] = useState(false);

  useEffect(() => {
    async function prepare() {
      try {
        await Font.loadAsync({
          SourceSansPro_200ExtraLight,
          SourceSansPro_200ExtraLight_Italic,
          SourceSansPro_300Light,
          SourceSansPro_300Light_Italic,
          SourceSansPro_400Regular,
          SourceSansPro_400Regular_Italic,
          SourceSansPro_600SemiBold,
          SourceSansPro_600SemiBold_Italic,
          SourceSansPro_700Bold,
          SourceSansPro_700Bold_Italic,
          SourceSansPro_900Black,
          SourceSansPro_900Black_Italic,
        });
      } catch (e) {
        console.warn(e);
      } finally {
        setAppIsReady(true);
      }
    }

    prepare();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (appIsReady) {
      await SplashScreen.hideAsync();
    }
  }, [appIsReady]);

  if (!appIsReady) {
    return null;
  }

  return (
    <Provider store={store}>
      <View style={{ flex: 1 }} onLayout={onLayoutRootView}>
        <AppContainer>
          <Navigator />
        </AppContainer>
      </View>
    </Provider>
  );
}

registerRootComponent(App);
