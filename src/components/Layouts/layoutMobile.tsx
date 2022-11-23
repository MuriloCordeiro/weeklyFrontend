import { Flex, Image } from "@chakra-ui/react";
import Footer from "./footer";
import Header from "./header";
import Aos from "aos";
import "aos/dist/aos.css";

export default function LayoutMob(props: any) {
  setTimeout(() => {
    Aos.init({ duration: 1500 });
  }, 1500);

  return (
    <>
      <Flex direction="column">
        <Flex
          bgColor="#24293D"
          width="100vw"
          height="100vh"
          p="1rem"
          direction="column"
          justify="space-between"
        >
          <Header />
          <Flex
            bgRepeat="no-repeat"
            bgAttachment="fixed"
            bgPosition="center"
            bgBlendMode="soft-light"
            bgImage="url(/Image/piggy1.png)"
            data-aos="fade-up"
            h="full"
            borderTopRadius="10px"
            bgColor="#303958"
            mt="1rem"
          >
            {props.children}
          </Flex>
          <Footer />
        </Flex>
      </Flex>
    </>
  );
}
