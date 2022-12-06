import { View, useWindowDimensions, Animated } from "react-native";
import React from "react";
import { CarruselItemProps } from "../interfaces";
import { useTheme } from "native-base";
import { useColorMode } from "native-base";

export const Paginator = ({
  data,
  scrollX,
}: {
  data: CarruselItemProps[];
  scrollX: Animated.Value;
}) => {
  const { width } = useWindowDimensions();
  const { colors } = useTheme();
  const { colorMode } = useColorMode();

  const isColor =
    colorMode === "dark" ? colors.customQuaternary : colors.customTertiary;

  return (
    <View style={{ flexDirection: "row", height: 64 }}>
      {data.map((_: any, i: number) => {
        const inputRange = [(i - 1) * width, i * width, (i + 1) * width];
        const dotWidth = scrollX.interpolate({
          inputRange,
          outputRange: [10, 20, 10],
          extrapolate: "clamp",
        } as any);

        const opacity = scrollX.interpolate({
          inputRange,
          outputRange: [0.3, 1, 0.3],
          extrapolate: "clamp",
        } as any);

        return (
          <Animated.View
            key={i.toString()}
            style={{
              height: 10,
              width: dotWidth,
              opacity,
              borderRadius: 5,
              backgroundColor: isColor,
              marginHorizontal: 8,
            }}
          />
        );
      })}
    </View>
  );
};
