import { extendTheme, type ThemeConfig } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";
import type { StyleFunctionProps } from "@chakra-ui/styled-system";

const config: ThemeConfig = {
  initialColorMode: "system",
  useSystemColorMode: false,
};

const theme = extendTheme(
  { config },
  {
    colors: {
      brand: {
        100: "#f7fafc",
        // ...
        900: "#1a202c",
      },
    },
    styles: {
      global: (props: StyleFunctionProps) => ({
        body: {
          fontFamily: "body",
          color: mode("gray.800", "whiteAlpha.900")(props),
          bg: mode("white", "gray.800")(props),
          lineHeight: "base",
        },
      }),
    },
  }
);

export default theme;
