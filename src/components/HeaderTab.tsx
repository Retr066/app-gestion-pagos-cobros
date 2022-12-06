import { Box, HStack, StatusBar, Text } from "native-base";
import React from "react";
import { LogoMercadoLomas } from "./LogoMercadoLomas";

export const HeaderTab = () => {
  return (
    <>
      <StatusBar backgroundColor="#7cb4d6" barStyle="light-content" />
      <Box safeAreaTop bg="white" />
      <HStack
        bg="white"
        px="2"
        py="1"
        justifyContent="space-between"
        alignItems="center"
        w="100%"
      >
        <HStack alignItems="center">
          <Text
            color="black"
            marginLeft={1}
            fontSize="2xl"
            fontFamily="heading"
            fontWeight={700}
          >
            Mercado las Lomas
          </Text>
        </HStack>
        <LogoMercadoLomas />
      </HStack>
    </>
  );
};
