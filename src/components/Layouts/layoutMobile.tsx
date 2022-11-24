import { Flex, Image } from "@chakra-ui/react";
import NavBar from "../mainNavBar/navBar";
import Header from "./header";
import Aos from "aos";
import "aos/dist/aos.css";

export default function LayoutMob(props: any) {
  setTimeout(() => {
    Aos.init({ duration: 1500 });
  }, 1500);

  return (
    <>
      <Flex
        minHeight="100vh"
        bgColor="#24293D"
        width="100vw"
        direction="column"
        p="1rem"
      >
        <Header />
        <Flex
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
        </Flex>
        <NavBar />
      </Flex>
    </>
  );
}
