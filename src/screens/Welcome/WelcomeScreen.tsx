import React, { useEffect, useRef } from "react";
import { Box, Button, Center, Heading, Text } from "native-base";
import { ToggleDarkMode } from "../../components";
import { RootStackScreenProps } from "../../interfaces/routes.interface";
import { useWindowDimensions } from "react-native";
import LottieView from "lottie-react-native";

export const WelcomeScreen = ({
  navigation,
}: RootStackScreenProps<"Welcome">) => {
  const { width, height } = useWindowDimensions();
  const animation = useRef<LottieView>(null);
  useEffect(() => {
    animation.current?.play();
  }, []);
  return (
    <Box
      flex={1}
      paddingX={10}
      w={"100%"}
      _dark={{
        bg: "customPrimary",
      }}
      _light={{
        bg: "white",
      }}
    >
      <Box flex={0.8} justifyContent="center" alignItems="center">
        <Heading
          flex={0.2}
          size="lg"
          textAlign="center"
          fontWeight="semibold"
          mb="4"
        >
          Bienvenido a nueva aplicación del{" "}
          <Heading color="customTertiary">Mercado las Lomas</Heading>
        </Heading>
        <Box flex={0.6} justifyContent="center" alignItems="center">
          <LottieView
            autoPlay
            ref={animation}
            style={{
              width: width,
              height: height,
              backgroundColor: "transparent",
            }}
            // Find more Lottie files at https://lottiefiles.com/featured
            source={require("../../assets/33810-payments.json")}
          />
        </Box>
        <Text
          pt="3"
          fontSize="sm"
          textAlign={"center"}
          marginTop={10}
          lineHeight={"xs"}
          fontFamily={"heading"}
        >
          Esta aplicación te ayudará a controlar los pagos en los diferentes
          servicios y te notificara cuando tengas que pagar.
        </Text>
      </Box>
      <Box flex={0.2}>
        <Center>
          <ToggleDarkMode />
          <Button
            marginBottom={3}
            colorScheme="blueGray"
            onPress={() => {
              navigation.navigate("Login");
            }}
            variant="primary"
            size="lg"
            padding={2}
            width="100%"
          >
            Iniciar Sesión
          </Button>
        </Center>
        <Center>
          <Button
            marginBottom={3}
            variant="secondary"
            onPress={() => {
              navigation.navigate("Register");
            }}
            size="lg"
            padding={2}
            width="100%"
          >
            Regístrate
          </Button>
        </Center>
      </Box>
    </Box>
  );
};
