import { Flex, Image } from "@chakra-ui/react";
import NavBar from "../mainNavBar/navBar";
import Header from "./header";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function LayoutMob(props: any) {
  setTimeout(() => {
    Aos.init({ duration: 1500 });
  }, 1500);

  // useEffect(()=>{})

  return (
    <>
      <Flex bgColor="#24293D" minHeight="100vh" direction="column" p="1rem">
        <Header />

        <Flex
          data-aos="fade-up"
          justify="space-between"
          bgColor="#303958"
          borderRadius="10px"
          direction="column"
          minHeight="90vh"
        >
          <Flex> {props.children}</Flex>
          <NavBar />
        </Flex>
        {/* <Flex
          position="sticky"
          bottom="0"
          bgColor="#303958"
          borderBottomRadius="10px"
        >
          <NavBar />
        </Flex> */}
        {/* <Flex
          height="100vh"
          bgRepeat="no-repeat"
          bgAttachment="fixed"
          bgPosition="center"
          bgBlendMode="soft-light"
          bgImage="url(/Image/piggy1.png)"
          data-aos="fade-up"
          bgColor="#303958"
          mt="1rem"
        >
          {props.children}
        </Flex> */}
      </Flex>

      {/* <Flex>
        <Flex>Collapse</Flex>
        <Flex>Navbar</Flex>
      </Flex> */}
    </>
  );
}
