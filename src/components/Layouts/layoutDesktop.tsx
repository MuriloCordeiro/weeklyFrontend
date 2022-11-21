import { Flex } from "@chakra-ui/react";
import Footer from "./footer";
import Header from "./header";

export default function LayoutDesk(props: any) {
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
