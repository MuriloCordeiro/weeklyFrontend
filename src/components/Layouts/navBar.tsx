import { Flex, Button, Text, IconButton } from "@chakra-ui/react";

import { BsPlusLg } from "react-icons/bs";
import { BsHouseDoor } from "react-icons/bs";
import { VscSettingsGear } from "react-icons/vsc";

import Aos from "aos";
import "aos/dist/aos.css";
export default function NavBar() {
  setTimeout(() => {
    Aos.init({ duration: 1500 });
  }, 1500);

  return (
    <Flex
      p="6px"
      bgColor="#24293D"
      left="8"
      right="8"
      bottom="6"
      justify="space-between"
      zIndex={2}
      borderRadius="50px"
      position="absolute"
    >
      {/* teste */}
      <Flex justify="space-between" w="full">
        <IconButton
          size="lg"
          aria-label={"ActionButton"}
          icon={<BsHouseDoor />}
          borderRadius="50px"
        />
        <IconButton
          size="lg"
          aria-label={"ActionButton"}
          icon={<BsPlusLg />}
          borderRadius="50px"
        />
        <IconButton
          size="lg"
          aria-label={"ActionButton"}
          icon={<VscSettingsGear />}
          borderRadius="50px"
        />
      </Flex>
    </Flex>
    // <Flex align="center">
    //   <Flex
    //     bgColor="#24293D"
    //     justify="space-around"
    //     w="full"
    //     zIndex={1}
    //     bottom="0"
    //     align="center"
    //     p="1rem"
    //     fontSize="16px"
    //   >
    //     <Flex direction="column" align="center">
    //       <Text color="white">R$1200</Text>
    //       <Text color="white">Débito</Text>
    //     </Flex>

    //     <Flex direction="column" align="center">
    //       <Button
    //         borderRadius="20px"
    //         size="md"
    //         position="fixed"
    //         bottom="20"
    //         bgColor="#272A2E"
    //         color="white"
    //       >
    //         +
    //       </Button>
    //     </Flex>

    //     <Flex direction="column" align="center">
    //       <Text color="white">R$1200</Text>
    //       <Text color="white">Credito</Text>
    //     </Flex>
    //   </Flex>
    // </Flex>
  );
}
