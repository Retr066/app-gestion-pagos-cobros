import { MaterialCommunityIcons } from "@expo/vector-icons";
import { ResponseType } from "expo-auth-session";
import * as Facebook from "expo-auth-session/providers/facebook";
import * as Google from "expo-auth-session/providers/google";
import * as WebBrowser from "expo-web-browser";
import { Formik } from "formik";
import {
  Box,
  Button,
  Center,
  Heading,
  HStack,
  Icon,
  IconButton,
  IFormControlLabelProps,
  Text,
  VStack,
} from "native-base";
import React, { useState } from "react";
import * as Yup from "yup";

import { InputCustom } from "../../components";
import { RootStackScreenProps } from "../../interfaces/routes.interface";

export const LoginScreen = ({ navigation }: RootStackScreenProps<"Login">) => {
  //tipar todo los datos que vengan del fecthGoogle
  // interface GoogleUser {
  //   id: string;
  //   email: string;
  //   name: string;
  //   givenName: string;
  //   familyName: string;
  //   photoUrl: string;
  //   locale: string;
  //   user: any;
  // }

  const [user, setUser] = useState<any>({});

  const [googleRequest, , googlePromptAsync] = Google.useAuthRequest({
    expoClientId:
      "954292828607-js7sup1usrtag5442lhker578amcvjpm.apps.googleusercontent.com",
    iosClientId:
      "954292828607-c11b65m1q3jv0euil0le44i4vfbgdlbb.apps.googleusercontent.com",
    androidClientId:
      "954292828607-4pv8m154v1p3lh18fm5j2ana21595cjp.apps.googleusercontent.com",
    webClientId:
      "954292828607-dtjs2v89rqaaruisnura1r5eid0oqt4e.apps.googleusercontent.com",
  });

  // const [, , promptAsyncFB] = Facebook.useAuthRequest({
  //   expoClientId: "2989678841341316",
  // });

  const fetchInfoUserGoogle = async (accessToken: string) => {
    console.log("accessToken fecthGoogle", accessToken);
    try {
      const response = await fetch(
        "https://www.googleapis.com/userinfo/v2/me",
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );
      return await response.json();
    } catch (error) {
      console.log(error);
    }
  };

  const googleRegister = async () => {
    const response = await googlePromptAsync();
    if (response.type === "success") {
      const { access_token } = response.params;
      const user = await fetchInfoUserGoogle(access_token);
      setUser(user);
    }
  };

  // const facebookRegister = async () => {
  //   const response = await promptAsyncFB({
  //     proxyOptions: { isTripleSlashed: true },
  //   });
  //   console.log("response", response.type);
  //   if (response.type === "success") {
  //     setAccessTokenFacebook(response.params.access_token);
  //     fetchInfoUserFacebook();
  //   }
  // };

  // const fetchInfoUserFacebook = async () => {
  //   try {
  //     const response = await fetch(
  //       "https://graph.facebook.com/me?fields=id,name,email,picture&access_token=" +
  //         accessTokenFacebook,
  //       {
  //         headers: {
  //           Authorization: `Bearer ${accessTokenFacebook}`,
  //         },
  //       }
  //     );

  //     const user = await response.json();
  //     setUserFacebook(user);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  const showUserInfo = () => {
    if (user) {
      return (
        <VStack>
          <Heading>User Google</Heading>
          <Text>{user?.name}</Text>
          <Text>{user?.email}</Text>
        </VStack>
      );
    }
  };

  const propsLabel: IFormControlLabelProps = {
    _light: {
      _text: {
        fontSize: "md",
        color: "customPrimary",
      },
    },
    _dark: {
      _text: {
        fontSize: "md",
        color: "white",
      },
    },
  };

  return (
    <Center
      w="100%"
      flex={1}
      justifyContent="flex-start"
      _dark={{ bg: "customPrimary" }}
      _light={{ bg: "blueGray.50" }}
    >
      <Box safeArea py="5" w="90%" maxW="370px">
        <Heading
          size="lg"
          fontWeight="semibold"
          color="whiteBlue"
          _dark={{
            color: "warmGray.50",
          }}
        >
          Iniciar Sesión
        </Heading>
        <Heading
          mt="1"
          _dark={{
            color: "warmGray.200",
          }}
          color="coolGray.600"
          fontWeight="medium"
          size="xs"
        >
          Completa los campos para continuar! 👇
        </Heading>

        <VStack space={3} mt="5">
          <Formik
            initialValues={{ email: "", password: "" }}
            onSubmit={(values) => {
              console.log(values);
              navigation.navigate("Root", { screen: "Home" });
            }}
            validationSchema={Yup.object().shape({
              email: Yup.string()
                .email("Email no válido")
                .required("El email es requerido"),
              password: Yup.string().required("La contraseña es requerida"),
            })}
          >
            {({ handleSubmit }) => (
              <VStack space={3}>
                <InputCustom
                  type="text"
                  label="Correo Electrónico"
                  size="lg"
                  name="email"
                  placeholder="Escriba su correo electrónico"
                  variant="primary"
                  propsLabel={propsLabel}
                />
                <InputCustom
                  type="password"
                  label="Contraseña"
                  size="lg"
                  name="password"
                  placeholder="Escribe tu contraseña"
                  variant="primary"
                  propsLabel={propsLabel}
                />
                <Text
                  _light={{
                    color: "customPrimary",
                  }}
                  _dark={{
                    color: "white",
                  }}
                  fontSize="md"
                  fontWeight="semibold"
                  alignSelf="flex-end"
                  mt="2"
                >
                  Olvidaste tu Contraseña?
                </Text>

                <Button
                  variant="primary"
                  onPress={() => handleSubmit()}
                  mt="2"
                  size="lg"
                >
                  Iniciar Sesión
                </Button>
              </VStack>
            )}
          </Formik>
          <HStack mt="6" justifyContent="center">
            <Text
              fontSize="md"
              _dark={{
                color: "warmGray.200",
              }}
            >
              ¿No tienes una cuenta?{" "}
            </Text>
            <Text
              _light={{
                color: "customPrimary",
              }}
              _dark={{
                color: "white",
              }}
              fontSize="md"
              fontWeight="semibold"
              onPress={() => navigation.navigate("Register")}
            >
              Regístrate aquí 👈
            </Text>
          </HStack>
          <HStack justifyContent="center" alignItems="center">
            {/* <IconButton
              onPress={() => facebookRegister()}
              variant="unstyled"
              icon={
                <Icon
                  as={<MaterialCommunityIcons name="facebook" />}
                  color="blue.700"
                  size="5xl"
                />
              }
            /> */}
            <IconButton
              disabled={!googleRequest}
              onPress={() => googleRegister()}
              variant="unstyled"
              icon={
                <Icon
                  as={<MaterialCommunityIcons name="google" />}
                  color="red.700"
                  size="5xl"
                />
              }
            />
          </HStack>
        </VStack>
      </Box>
      <Box
        w="100%"
        flex={1}
        justifyContent="flex-start"
        _dark={{
          bg: "dimBlack",
        }}
      >
        {user && showUserInfo()}
      </Box>
    </Center>
  );
};
