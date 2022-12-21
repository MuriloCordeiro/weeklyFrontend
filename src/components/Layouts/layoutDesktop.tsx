import { Flex } from "@chakra-ui/react";
import NavBar from "../mainNavBar/navBar";
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
        {/* <Header /> */}
        {props.children}
        {/* <NavBar /> */}
      </Flex>
    </>
  );
}
