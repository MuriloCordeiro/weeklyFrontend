import { Flex } from "@chakra-ui/react";

import Header from "./header";
import SideBar from "./Sidebar";

export default function LayoutDesk(props: any) {
  return (
    <>
      <Flex
        w="full"
        h={["full", "full", "full", "full", "full", "100vh"]}
        direction={["column", "column", "column", "row"]}
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
        <SideBar />
        <Flex direction="column" px="1rem" py="0.5rem" w="full" h="full">
          {/* <Header /> */}
          {props.children}
        </Flex>
        {/* <NavBar /> */}
      </Flex>
    </>
  );
}
