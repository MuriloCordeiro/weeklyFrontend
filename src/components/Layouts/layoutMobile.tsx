import { Flex, Image } from "@chakra-ui/react";
import Footer from "./footer";
import Header from "./header";

const batata = "testando";

export default function LayoutMob(props: any) {
  return (
    <>
      <Flex direction="column">
        {/* <Image alt="" src="/mosaic1.jpg" /> */}

        {/* <Flex
            w={'full'}
            backgroundImage={
              brandSettings.store == 'MICHELIN'
                ? 'url(./image/note-corte.png)'
                : brandSettings.store == 'XBRI'
                ? 'url(./image/xbri-desk.png)'
                : brandSettings.store == 'PNEUFREE'
                ? 'url(./image/free-desk.png)'
                : null
            }
            // backgroundImage={'url(./image/note-corte.png)'}
            backgroundSize={'100%'}
            backgroundRepeat={'no-repeat'}
            alignItems={'center'}
            justifyContent={'center'}
          ></Flex> */}
        {/* bgImage="url(/Image/purple1.jpg)"
          bgPosition="center"
          bgRepeat="no-repeat" */}
        <Flex
          bgColor="#24293D"
          width="100vw"
          h="100vh"
          p="1rem"
          direction="column"
          borderWidth="2px"
          justify="space-between"
        >
          <Header />
          <Flex h="full" borderTopRadius="10px" bgColor="#303958" mt="1rem">
            {props.children}
          </Flex>
        </Flex>
        <Footer />
      </Flex>
    </>
  );
}
