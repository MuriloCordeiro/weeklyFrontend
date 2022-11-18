import { Flex } from "@chakra-ui/react";
import Footer from "./footer";
import Header from "./header";

const batata = "testando";

export default function LayoutMob(props: any) {
  return (
    <>
      <Flex direction="column">
        <Flex
          width="100vw"
          h="100vh"
          p="1rem"
          direction="column"
          borderWidth="2px"
          justify="space-between"
        >
          {props.children}
          <Footer />
        </Flex>
      </Flex>
    </>
  );
}
