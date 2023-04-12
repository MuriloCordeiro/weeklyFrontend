import { Flex } from "@chakra-ui/react";

import Header from "./header";

export default function LayoutDesk(props: any) {
  return (
    <>
      <Flex>
        <Flex
          bgColor="white"
          w="80px"
          boxShadow="0px 8px 10px rgba(0, 0, 0, 0.1)"
        >
          testes
        </Flex>
        <Flex
          bgColor="#EBEBEB"
          width="100vw"
          height="100vh"
          px="6rem"
          py="2.5rem"
          direction="column"
          borderWidth="2px"
        >
          {/* <Header /> */}
          {props.children}
          {/* <NavBar /> */}
        </Flex>
      </Flex>
    </>
  );
}
