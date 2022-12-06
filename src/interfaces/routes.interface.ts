import { NativeStackScreenProps } from "@react-navigation/native-stack";
import type { CompositeScreenProps } from "@react-navigation/native";
import type { BottomTabScreenProps } from "@react-navigation/bottom-tabs";
import { NavigatorScreenParams } from "@react-navigation/native";

export type RootStackParamsList = {
  Login: undefined;
  Presentation: undefined;
  Register: undefined;
  Welcome: undefined;
  Root: NavigatorScreenParams<RootTabParamsList>;
};

export type RootTabParamsList = {
  Home: undefined;
  Community: undefined;
  Profile: undefined;
  Settings: undefined;
  Chat: undefined;
  Charges: undefined;
  CollectionHistory: undefined;
};

export type RootStackScreenProps<T extends keyof RootStackParamsList> =
  NativeStackScreenProps<RootStackParamsList, T>;

export type RootTabScreenProps<T extends keyof RootTabParamsList> =
  CompositeScreenProps<
    BottomTabScreenProps<RootTabParamsList, T>,
    NativeStackScreenProps<RootStackParamsList>
  >;

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamsList {}
  }
}
