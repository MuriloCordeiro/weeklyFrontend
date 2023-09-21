import { Flex } from "@chakra-ui/react";

import Header from "./header";
import Sidebar from "./Sidebar";

export default function LayoutDesk(props: any) {
  return (
    <>
      <Flex
        w="full"
        h="1100px"
        direction="row"
        bgSize="cover"
        // bgColor="#86CEFF"
        // bgColor="red"
        bgRepeat="no-repeat"
        bgImage="/image/background.jpg"
        // bgColor="#EBEBEB"
        // width="100vw"
        // height="100vh"
        // px="6rem"
        // py="2.5rem"
        // direction="column"
        // borderWidth="2px"
      >
        <Sidebar />
        <Flex direction="column" p="1rem" h="full">
          {/* <Header /> */}
          {props.children}
        </Flex>
        {/* <NavBar /> */}
      </Flex>
    </>
  );
}
