import { useWindowDimensions } from "react-native";
import React, { FC } from "react";
import { CarruselItemProps } from "../interfaces";
import { Box, Heading, Text } from "native-base";
import { SvgCssUri } from "react-native-svg";

export const CarruselItem: FC<CarruselItemProps> = ({ text, title, uri }) => {
  const { width } = useWindowDimensions();
  return (
    <Box
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
      width={width}
    >
      <Box flex={0.7} justifyContent="center" alignItems="center">
        <SvgCssUri width={width - 10} height={250} uri={uri} />
      </Box>

      <Box flex={0.3}>
        <Heading
          _dark={{
            color: "customTertiary",
          }}
          color="customPrimary"
          textAlign="center"
          size="xl"
          mb="4"
          fontWeight="semibold"
        >
          {title}
        </Heading>
        <Text
          _dark={{
            color: "gray.200",
          }}
          textAlign="center"
          color="black"
          fontSize="sm"
        >
          {text}
        </Text>
      </Box>
    </Box>
  );
};
