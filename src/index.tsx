import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import {
  createNativeStackNavigator,
  NativeStackNavigationOptions,
} from "@react-navigation/native-stack";
import { useTheme, useColorMode } from "native-base";
import React from "react";
import { useSelector } from "react-redux";

import { HeaderTab, LogoMercadoLomas } from "./components";
import {
  RootStackParamsList,
  RootTabParamsList,
} from "./interfaces/routes.interface";
import {
  ChatScreen,
  CollectionHistoryScreen,
  CommunityScreen,
  HomeScreen,
  LoginScreen,
  Presentation,
  RegisterScreen,
  WelcomeScreen,
} from "./screens";

const Stack = createNativeStackNavigator<RootStackParamsList>();

const optionsScreensNavigation = () => {
  const { colors } = useTheme();
  const { colorMode } = useColorMode();

  const backgroundColor =
    colorMode === "dark" ? colors.customPrimary : colors.white;

  const optionsLogin: NativeStackNavigationOptions = {
    headerShown: true,
    title: "Login",
    headerTintColor: colors.white,
    headerStyle: {
      backgroundColor: colors.customPrimary,
    },
    statusBarStyle: "light",
    statusBarColor: colors.customPrimary,
    headerTitleStyle: {
      fontWeight: "600",
    },

    headerRight: () => <LogoMercadoLomas />,
  };

  const optionsRegister: NativeStackNavigationOptions = {
    headerShown: true,
    title: "Registrarse",
    headerTintColor: colors.white,
    headerStyle: {
      backgroundColor: colors.customPrimary,
    },
    statusBarStyle: "light",
    statusBarColor: colors.customPrimary,
    headerTitleStyle: {
      fontWeight: "600",
    },
    headerRight: () => <LogoMercadoLomas />,
  };

  return {
    optionsLogin,
    optionsRegister,
  };
};

const Tab = createBottomTabNavigator<RootTabParamsList>();
const TabHomeStack = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        options={{
          title: "Inicio",
          header: () => <HeaderTab />,

          tabBarIcon: ({ color, focused, size }) => {
            const iconName = focused ? "home" : "home-outline";
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        }}
        name="Home"
        component={HomeScreen}
      />
      <Tab.Screen
        options={{
          title: "Comunidad",
          tabBarBadge: 3,
          tabBarIcon: ({ color, focused, size }) => {
            const iconName = focused ? "people" : "people-outline";
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        }}
        name="Community"
        component={CommunityScreen}
      />
      <Tab.Screen
        options={{
          title: "Chats",
          tabBarBadge: 3,
          tabBarIcon: ({ color, focused, size }) => {
            const iconName = focused ? "chatbox" : "chatbox-outline";
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        }}
        name="Chat"
        component={ChatScreen}
      />
      <Tab.Screen
        options={{
          title: "Historial de Cobros",

          tabBarIcon: ({ color, size }) => {
            return <MaterialIcons name={"history"} size={size} color={color} />;
          },
        }}
        name="CollectionHistory"
        component={CollectionHistoryScreen}
      />
    </Tab.Navigator>
  );
};

const Navigator = () => {
  const { optionsLogin, optionsRegister } = optionsScreensNavigation();
  const store = useSelector((store) => store);
  const { colors } = useTheme();
  const { colorMode } = useColorMode();

  const statusBarColor =
    colorMode === "dark" ? colors.customPrimary : colors.white;
  const statusBarStyle = colorMode === "dark" ? "light" : "dark";
  console.log(store);
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Presentation">
        <Stack.Group>
          <Stack.Screen
            name="Presentation"
            component={Presentation}
            options={{
              headerShown: false,
              statusBarStyle: statusBarStyle,
              statusBarColor: statusBarColor,
            }}
          />
          <Stack.Screen
            options={{
              headerShown: false,
              statusBarStyle: statusBarStyle,
              statusBarColor: statusBarColor,
            }}
            name="Welcome"
            component={WelcomeScreen}
          />
          <Stack.Screen
            options={optionsLogin}
            name="Login"
            component={LoginScreen}
          />
          <Stack.Screen
            options={optionsRegister}
            name="Register"
            component={RegisterScreen}
          />
        </Stack.Group>

        <Stack.Group>
          <Stack.Screen
            options={{
              headerShown: false,
            }}
            name="Root"
            component={TabHomeStack}
          />
        </Stack.Group>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigator;
