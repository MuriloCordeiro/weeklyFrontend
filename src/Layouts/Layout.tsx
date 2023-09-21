import { Flex } from "@chakra-ui/react";

import Header from "./header";

export default function LayoutDesk(props: any) {
  return (
    <>
      <Flex
        w="full"
        direction="column"
        p="1rem"
        mb="4rem"
        bgSize="cover"
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
        <Header />
        {props.children}
        {/* <NavBar /> */}
      </Flex>
    </>
  );
}
