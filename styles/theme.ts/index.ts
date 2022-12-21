// AQUI HAVERA ALTERAÇÕES DE TEXTO, CORES, TAMANHOS DE FONTES, ESTILOS E LAYOUT

import { extendTheme } from "@chakra-ui/react";

const breakpoints = {
  base: "0rem",
  sm: "30rem", //480px
  md: "64rem", //1024px
  lg: "120rem", //1920px
};

export const defaultTheme = extendTheme({
  breakpoints,

  colors: {
    white: {
      "50": "#FFF5E5",
    },

    black: {
      "900": "#060808",
    },

    gray: {
      "700": "#333333",
      "300": "#c3c3c3",
      "50": "#F7F5F6",
    },

    blue: {
      "900": "#27509B",
      "500": "#0766C7",
    },

    yellow: {
      "900": "#FCE500",
      "50": "#FFF5E5",
    },

    green: {
      "900": "#1DB954",
      "50": "#EDF7ED",
      "1000": "#128a15",
    },

    red: {
      "900": "#FF003A",
      "100": "#FF95AD",
    },
  },

  fonts: {
    heading: "Poppins, Noto Sans, Arial, sans-serif",
    body: "Poppins, Noto Sans, Arial, sans-serif",
  },

  fontSizes: {
    h1: "1.75rem", //28px
    h2: "1.5rem", //24px
    h3: "1.25rem", //20px
    h4: "1,125rem", //18px
    text1: "1rem", //16px
    text2: "0.875rem", //14px
    text3: "0.75rem", //12px
    text4: "0.625rem", //10px
  },

  textStyles: {
    Header1: {
      fontFamily: "Exo, Arial, sans-serif",
      fontWeight: "300",
    },
    Header2: {
      fontFamily: "Exo, Arial, sans-serif",
      fontWeight: "700",
    },

    Regular: {
      fontFamily: "Poppins, Arial, sans-serif",
      fontWeight: "400",
    },

    Medium: {
      fontFamily: "Poppins, Arial, sans-serif",
      fontWeight: "500",
    },

    Bold: {
      fontFamily: "Poppins, Arial, sans-serif",
      fontWeight: "700",
    },

    MLight: {
      fontFamily: "Poppins, Noto Sans, Arial, sans-serif",
    },

    MRegular: {
      fontFamily: "Poppins, Noto Sans, Arial, sans-serif",
    },

    MSemi: {
      fontFamily: "Poppins, Noto Sans, Arial, sans-serif",
    },

    MBold: {
      fontFamily: "Poppins, Noto Sans, Arial, sans-serif",
    },

    MBlack: {
      fontFamily: "Poppins, Noto Sans, Arial, sans-serif",
      fontWeight: "700",
    },

    SearchBox: {
      fontSize: "text1",
      fontFamily: "Poppins, Noto Sans, Arial, sans-serif",
      lineHeight: "126%",
    },

    titleSpaced: {
      fontFamily: "Poppins, Noto Sans, Arial, sans-serif",

      fontSize: "text1",
      fontWeight: "500",
      lineHeight: "110%",
      letterSpacing: "0.50rem",
      color: "blue.900",
    },

    textSpacedSideMenu: {
      fontSize: "text2",
      fontWeight: "400",
      lineHeight: "14px",
      letterSpacing: "0.3rem",
    },
  },

  styles: {
    global: {
      body: { bg: "white.900", color: "gray.900" },
    },
  },
});
