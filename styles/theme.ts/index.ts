// AQUI HAVERA ALTERAÇÕES DE TEXTO, CORES, TAMANHOS DE FONTES, ESTILOS E LAYOUT

import { extendTheme } from "@chakra-ui/react";

const breakpoints = {
  base: "0rem",
  xsm: "43.125rem", //690px
  sm: "54.875rem", //878px
  md: "82.875rem", //1326px
  lg: "120rem", //1920px
};

const toastOptions = {
  duration: 3000,
  isClosable: true,
  containerStyle: {
    color: "white",
  },
};

export const defaultTheme = extendTheme({
  breakpoints,

  toast: toastOptions,

  components: {
    Select: {
      baseStyle: {
        _hover: {
          transform: "scale(1.01)",
        },
      },
    },

    // _active={{
    //   boxShadow: "inset -3px -1px 20px -3px rgba(0,0,0,0.75)",
    // }}
    // boxShadow="-1px 8px 10px -8px rgba(0,0,0,0.80)"

    Button: {
      // baseStyle: {
      //   _hover: {
      //     // transform: "scale(1.01)",
      //     boxShadow: "md",
      //     _disabled: {
      //       transform: "scale(1)",
      //       bgColor: "gray.400",
      //       opacity: "50%",
      //       color: "gray.200",
      //     },
      //   },
      // },
      variants: {
        primary: {
          borderRadius: "15px",
          boxShadow: "lg",
          _active: {
            boxShadow: "0px 2px 5px 0px rgba(0, 0, 0, 0.25) inset",
            borderBottom: "1px solid ",
          },

          // boxShadow: "-1px 8px 10px -8px rgba(0,0,0,0.80)",
          bgColor: "#4871CC",
          color: "white",
        },
        secundary: {
          borderRadius: "15px",
          borderColor: "black",
          boxShadow: "lg",
          _active: {
            boxShadow: "0px 2px 5px 0px rgba(0, 0, 0, 0.25) inset",
            borderBottom: "1px solid ",
          },

          // boxShadow: "-1px 8px 10px -8px rgba(0,0,0,0.80)",
          bgColor: "#F6F6FF",
          color: "black",
        },
        confirmAction: {
          borderRadius: "15px",
          boxShadow: "lg",
          _active: {
            boxShadow: "0px 2px 5px 0px rgba(0, 0, 0, 0.25) inset",
            borderBottom: "1px solid ",
          },

          // boxShadow: "-1px 8px 10px -8px rgba(0,0,0,0.80)",
          bgColor: "#48CC5D",
          color: "white",
        },
        cancelAction: {
          borderRadius: "15px",
          boxShadow: "lg",
          _active: {
            boxShadow: "0px 2px 5px 0px rgba(0, 0, 0, 0.25) inset",
            borderBottom: "1px solid ",
          },

          // boxShadow: "-1px 8px 10px -8px rgba(0,0,0,0.80)",
          bgColor: "#CC4848",
          color: "white",
        },
      },
    },
  },

  colors: {
    blue: {
      main: "#005165",
      action: "#4871CC",
      "3": "",
    },

    gray: {
      main: "#898989",
    },
    white: {
      filter: "#F6F6FF",
    },

    red: {
      "1": "#E30613",
      "2": "",
      "5": "",
    },
    yellow: {
      "1": "#F9B000",
    },
  },

  fonts: {
    heading: "Montserrat, Noto Sans, Arial",
    body: "Montserrat, Noto Sans, Arial",
  },

  fontSizes: {
    title: "20px",
    subtitle: "18px",
    text1: "16px",
    text2: "14px",
    text3: "12px",
    text4: "10px",
    h1: "40px",
    h2: "28px",
  },

  textStyles: {
    regular: {
      fontWeight: "400",
    },
    medium: {
      fontWeight: "500",
    },
    semibold: {
      fontWeight: "600",
    },
    bold: {
      fontWeight: "700",
    },
  },

  styles: {
    global: {
      body: { bg: "white.900", color: "gray.900" },
    },
  },
});
