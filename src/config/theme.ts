import { extendTheme } from "native-base";

interface colorsProps {
  customPrimary: string;
  customSecondary: string;
  customTertiary: string;
  customQuaternary: string;
  customRed: string;
}

const config = {
  useSystemColorMode: false,
  initialColorMode: "light",
};

const colors: colorsProps = {
  customPrimary: "#161853",
  customSecondary: "#21247b",
  customTertiary: "#ED7D3A",
  customQuaternary: "#83AFD0",
  customRed: "#EF2D56",
};

const fontConfig = {
  SourceSanPro: {
    200: {
      normal: "SourceSansPro_200ExtraLight",
      italic: "SourceSansPro_200ExtraLight_Italic",
    },
    300: {
      normal: "SourceSansPro_300Light",
      italic: "SourceSansPro_300Light_Italic",
    },
    400: {
      normal: "SourceSansPro_400Regular",
      italic: "SourceSansPro_400Regular_Italic",
    },
    500: {
      normal: "SourceSansPro_400Regular",
      italic: "SourceSansPro_400Regular_Italic",
    },
    600: {
      normal: "SourceSansPro_600SemiBold",
      italic: "SourceSansPro_600SemiBold_Italic",
    },

    700: {
      normal: "SourceSansPro_700Bold",
      italic: "SourceSansPro_700Bold_Italic",
    },

    900: {
      normal: "SourceSansPro_900Black",
      italic: "SourceSansPro_900Black_Italic",
    },
  },
};

const fonts = {
  heading: "SourceSanPro",
  body: "SourceSanPro",
  mono: "SourceSanPro",
};

const components = {
  Button: {
    variants: {
      primary: {
        _light: {
          bg: "customSecondary",
          _hover: {
            bg: "darkBlue.700",
          },
          _pressed: {
            bg: "darkBlue.800",
          },
          _text: {
            color: "white",
            fontWeight: "semibold",
          },
        },
        _dark: {
          bg: "customQuaternary",
          _hover: {
            bg: "primary.800",
          },
          _pressed: {
            bg: "cyan.700",
          },
          _text: {
            color: "white",
            fontWeight: "semibold",
          },
        },
      },
      secondary: {
        _light: {
          bg: "customQuaternary",
          _hover: {
            bg: "primary.800",
          },
          _pressed: {
            bg: "cyan.700",
          },
          _text: {
            color: "white",
            fontWeight: "semibold",
          },
        },
        _dark: {
          bg: "customTertiary",
          _hover: {
            bg: "orange.700",
          },
          _pressed: {
            bg: "orange.800",
          },
          _text: {
            color: "white",
            fontWeight: "semibold",
          },
        },
      },
    },
  },
  Checkbox: {
    baseStyle: {
      _light: {
        backgroundColor: "customPrimary",
        _checked: {
          borderColor: "customPrimary",
        },
      },
    },
  },
  Input: {
    variants: {
      primary: {
        _light: {
          borderColor: "customPrimary",
          borderWidth: 1,
          _focus: {
            backgroundColor: "blue.50",
            borderColor: "customPrimary",
          },
        },
        _dark: {
          borderWidth: 1,
          borderColor: "customQuaternary",
          _focus: {
            borderColor: "customQuaternary",
          },
        },
      },
    },
  },
};

export const theme = extendTheme({
  config,
  colors,
  fonts,
  fontConfig,
  components,
});
type CustomThemeType = typeof theme;

// 3. Extend the internal NativeBase Theme
declare module "native-base" {
  interface ICustomTheme extends CustomThemeType {}
}
