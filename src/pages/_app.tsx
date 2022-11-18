import type { AppProps } from "next/app";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import Layout from "../components/Layouts/layoutMobile";
import Footer from "../components/Layouts/footerMobile";

const breakpoints = {
  base: "0rem",
  sm: "22.5rem", //360px
  md: "64rem", //1024px
  lg: "120rem", //1920px
};
const theme = extendTheme({
  breakpoints,
  fonts: {
    heading: "Montserrat, arial, sans-serif",
    body: "Montserrat, arial, sans-serif",
  },
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}
