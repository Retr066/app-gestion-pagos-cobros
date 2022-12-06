import React, { useCallback, useState } from "react";
import {
  Box,
  Button,
  Center,
  FormControl,
  Heading,
  HStack,
  IFormControlLabelProps,
  ScrollView,
  Text,
  VStack,
} from "native-base";
import { InputCustom } from "../../components";
import { Formik, FormikProps } from "formik";
import { RegisterFormProps } from "../../interfaces/register.interface";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { loginRequest, loginSuccess } from "../../reducers/authReducer";
import * as SplashScreen from "expo-splash-screen";
import { Loading } from "../Loading";
import { useNavigation } from "@react-navigation/native";
import { RootStackScreenProps } from "../../interfaces/routes.interface";
import { Checkbox } from "native-base";

SplashScreen.preventAutoHideAsync();
export const RegisterScreen = () => {
  const dispatch = useDispatch();
  const [appIsReady, setAppIsReady] = useState(false);
  const navigation =
    useNavigation<RootStackScreenProps<"Register">["navigation"]>();

  interface OthersProps {
    acceptedTerms: boolean;
  }
  type INITIAL_STATE_PROPS = RegisterFormProps & OthersProps;

  const INITIAL_STATE: INITIAL_STATE_PROPS = {
    name: "",
    lastName: "",
    email: "",
    dni: "",
    numberOfPost: "",
    password: "",
    passwordConfirmation: "",
    acceptedTerms: false,
  };

  const onSubmit = (data: INITIAL_STATE_PROPS) => {
    dispatch(loginRequest());
    setAppIsReady(true);
    setTimeout(() => {
      dispatch(
        loginSuccess({
          uid: new Date().getTime().toString(),
          ...data,
        })
      );
      setAppIsReady(false);
      navigation.navigate("Login");
    }, 2000);
  };

  const onLayoutRootView = useCallback(async () => {
    if (appIsReady) {
      await SplashScreen.hideAsync();
    }
  }, [appIsReady]);

  if (appIsReady) {
    return <Loading />;
  }

  const validationSchema = Yup.object().shape({
    name: Yup.string()
      .min(3, "El nombre debe tener al menos 3 caracteres como mínimo")
      .max(100, `El nombre debe tener como máximo 100 caracteres`)
      .trim()
      .required("El nombre es requerido"),
    lastName: Yup.string()
      .min(3, "El apellido debe tener al menos 3 caracteres como mínimo")
      .max(100, "El apellido debe tener menos de 100 caracteres")
      .trim()
      .required("El apellido es requerido"),
    email: Yup.string()
      .email("Email no es válido")
      .max(100, "El email debe tener menos de 100 caracteres")
      .trim()
      .required("El email es requerido"),
    dni: Yup.string()
      .min(8, "El DNI debe tener al menos 8 caracteres como mínimo")
      .max(8, "El DNI debe tener menos de 8 caracteres")
      .matches(/^[0-9]+$/, "El DNI debe ser un número")
      .required("El DNI es requerido"),
    numberOfPost: Yup.string()
      .min(
        1,
        "El número de puesto debe tener al menos 1 caracteres como mínimo"
      )
      .max(3, "El número de puesto  debe tener menos de 3 caracteres")
      .required("El número del puesto es requerido")
      .matches(/^[0-9]+$/, "El número del puesto debe ser un número")
      .test(
        "is-valid-number",
        "El número del puesto debe ser un número entre 1 y 196",
        (value) => {
          if (value) {
            const number = parseInt(value);
            return number >= 1 && number <= 196;
          }
          return false;
        }
      ),

    password: Yup.string()
      .min(6, "La contraseña debe tener al menos 6 caracteres")
      .max(100, "La contraseña debe tener menos de 100 caracteres")
      .required("La contraseña es requerida"),
    passwordConfirmation: Yup.string()
      .oneOf([Yup.ref("password"), null], "Las contraseñas no coinciden")
      .required("La confirmación de la contraseña es requerida"),
    acceptedTerms: Yup.boolean().oneOf([true], "Debe aceptar los términos"),
  });

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
    <ScrollView onLayout={onLayoutRootView}>
      <Center
        justifyContent="flex-start"
        flex={1}
        _dark={{ bg: "customPrimary" }}
        _light={{ bg: "blueGray.50" }}
      >
        <Box safeArea py="5" w="90%" maxW="370px">
          <Heading
            size="lg"
            _dark={{
              color: "customTertiary",
            }}
            _light={{
              color: "customPrimary",
            }}
            fontWeight="semibold"
          >
            Formulario de Registro
          </Heading>
          <Heading
            mt={1}
            color="coolGray.600"
            _dark={{
              color: "warmGray.200",
            }}
            fontWeight="medium"
            size="sm"
          >
            Regístrate para continuar 👇
          </Heading>
          <Formik
            initialValues={INITIAL_STATE}
            onSubmit={onSubmit}
            validationSchema={validationSchema}
          >
            {({
              errors,
              handleChange,
              handleSubmit,
              values,
            }: FormikProps<INITIAL_STATE_PROPS>) => (
              <VStack space={3} mt="5">
                <InputCustom
                  isRequired={true}
                  placeholder="Escriba sus nombres"
                  type="text"
                  name="name"
                  maxLength={100}
                  label="Nombres Completos"
                  size="lg"
                  variant="primary"
                  propsLabel={propsLabel}
                />

                <InputCustom
                  isRequired={true}
                  placeholder="Escriba sus apellidos"
                  maxLength={100}
                  type="text"
                  name="lastName"
                  label="Apellidos Completos"
                  size="lg"
                  variant="primary"
                  propsLabel={propsLabel}
                />
                <InputCustom
                  isRequired={true}
                  maxLength={100}
                  placeholder="Escriba su correo electrónico"
                  type="text"
                  name="email"
                  label="Correo Electrónico"
                  size="lg"
                  variant="primary"
                  propsLabel={propsLabel}
                />
                <InputCustom
                  isRequired={true}
                  placeholder="Escriba su DNI"
                  keyboardType="numeric"
                  type="text"
                  name="dni"
                  label="DNI"
                  size="lg"
                  maxLength={8}
                  variant="primary"
                  propsLabel={propsLabel}
                />

                <InputCustom
                  type="text"
                  keyboardType="numeric"
                  isRequired={true}
                  placeholder="Seleccione el numero de su puesto"
                  name="numberOfPost"
                  label="Nº Puesto"
                  size="lg"
                  maxLength={3}
                  variant="primary"
                  propsLabel={propsLabel}
                />
                <InputCustom
                  isRequired={true}
                  placeholder="Escriba su contraseña"
                  type="password"
                  name="password"
                  maxLength={100}
                  size="lg"
                  label="Contraseña"
                  variant="primary"
                  propsLabel={propsLabel}
                />
                <InputCustom
                  isRequired={true}
                  placeholder="Escriba su contraseña"
                  type="password"
                  maxLength={100}
                  name="passwordConfirmation"
                  label="Confirmar Contraseña"
                  size="lg"
                  variant="primary"
                  propsLabel={propsLabel}
                  ComponentComplement={
                    <FormControl.HelperText>
                      Escriba la misma contraseña que anteriormente
                    </FormControl.HelperText>
                  }
                />
                <Checkbox
                  onChange={(isSelected) => {
                    handleChange("acceptedTerms")(`${isSelected}`);
                  }}
                  colorScheme="cyan"
                  defaultIsChecked={values.acceptedTerms}
                  value={`${values.acceptedTerms}`}
                  fontSize="sm"
                  name="acceptedTerms"
                  isInvalid={errors.acceptedTerms ? true : false}
                >
                  Aceptar Términos y condiciones
                </Checkbox>

                <Button
                  onPress={() => handleSubmit()}
                  mb="5"
                  size="lg"
                  variant="primary"
                >
                  Regístrate ahora
                </Button>
              </VStack>
            )}
          </Formik>
          <HStack mb="6" justifyContent="center">
            <Text
              fontSize="md"
              _dark={{
                color: "warmGray.200",
              }}
            >
              ¿Ya tienes cuenta?{" "}
            </Text>
            <Text
              _light={{
                color: "customSecondary",
              }}
              _dark={{
                color: "customTertiary",
              }}
              fontSize="md"
              fontWeight="semibold"
              onPress={() => navigation.navigate("Login")}
            >
              Inicia sesión 👈
            </Text>
          </HStack>
        </Box>
      </Center>
    </ScrollView>
  );
};
