import { Flex } from "@chakra-ui/react";
import Footer from "./footerMobile";
import Header from "./headerMobile";

const batata = "testando";

export default function LayoutMob(props: any) {
  return (
    <>
      <Flex
        width="100vw"
        height="100vh"
        p="1rem"
        direction="column"
        borderWidth="2px"
      >
        <Header />
        {props.children}
        <Footer />
      </Flex>
    </>
  );
}
