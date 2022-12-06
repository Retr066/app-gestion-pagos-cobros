import { Image } from "native-base";
import React, { FC } from "react";
import { ImageStyle } from "react-native";

const logo = require("../assets/logo.png");

interface Props {
  styles?: ImageStyle;
}

export const LogoMercadoLomas: FC<Props> = ({ styles }) => {
  return (
    <Image
      style={styles}
      width={50}
      height={50}
      alt="logo-mercado-lomas"
      source={logo}
    />
  );
};
