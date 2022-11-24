import {
  Flex,
  Button,
  Text,
  IconButton,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverFooter,
  PopoverArrow,
  PopoverCloseButton,
  PopoverAnchor,
} from "@chakra-ui/react";

import { BsPlusLg } from "react-icons/bs";
import { BsHouseDoor } from "react-icons/bs";
import { VscSettingsGear } from "react-icons/vsc";
import navStyles from "../mainNavBar/navbar.module.css";

import Aos from "aos";
import "aos/dist/aos.css";
export default function NavBar() {
  setTimeout(() => {
    Aos.init({ duration: 1500 });
  }, 5000);

  return (
    <>
      <Flex
        w="full"
        className={navStyles.mobileNav}
        p="1rem"
        position="sticky"
        bottom="0"
        borderBottomRadius="10px"
      >
        <Flex
          justify="space-between"
          w="full"
          bgColor="#24293D"
          borderRadius="50px"
          p="15px"
        >
          <IconButton
            size="lg"
            aria-label={"ActionButton"}
            icon={<BsHouseDoor />}
            borderRadius="50px"
          />
          <Popover>
            <PopoverTrigger>
              <IconButton
                size="lg"
                aria-label={"ActionButton"}
                icon={<BsPlusLg />}
                borderRadius="50px"
              />
            </PopoverTrigger>
            <PopoverContent bgColor="#24293D" w="full" mb="1rem">
              <PopoverArrow mt="8px" />
              <PopoverCloseButton />

              <PopoverBody>
                <Flex justifyContent="space-between">
                  <Button fontSize="12px" mr="1rem">
                    Adicionar despesa
                  </Button>
                  <Button fontSize="12px">Adicionar renda</Button>
                </Flex>
              </PopoverBody>
            </PopoverContent>
          </Popover>

          <IconButton
            size="lg"
            aria-label={"ActionButton"}
            icon={<VscSettingsGear />}
            borderRadius="50px"
          />
        </Flex>
      </Flex>
    </>
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
