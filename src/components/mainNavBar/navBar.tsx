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
import { BiMessageSquareAdd } from "react-icons/bi";
import { VscSettingsGear } from "react-icons/vsc";
import { GoTriangleDown, GoTriangleUp } from "react-icons/go";

import {
  MdOutlineAddchart,
  MdAddChart,
  MdOutlineBookmarkAdd,
  MdOutlinePlaylistAdd,
  MdOutlinePersonAddDisabled,
} from "react-icons/md";

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
          bgColor="#011735"
          borderRadius="50px"
          p="10px"
        >
          <IconButton
            size="md"
            aria-label={"ActionButton"}
            icon={<BsHouseDoor />}
            borderRadius="50px"
          />
          <Popover>
            <PopoverTrigger>
              <IconButton
                size="md"
                aria-label={"ActionButton"}
                icon={<BsPlusLg />}
                borderRadius="50px"
              />
            </PopoverTrigger>
            <PopoverContent mb="1rem" borderWidth="0">
              <PopoverArrow mt="0.5rem" />
              <PopoverCloseButton />

              <PopoverBody>
                <Flex justifyContent="space-between">
                  {/* MdOutlineAddchart, MdAddChart, MdOutlineBookmarkAdd,
              MdOutlinePlaylistAdd, MdOutlinePersonAddDisabled, */}
                  {/* GoTriangleDown, GoTriangleUp */}
                  <Button
                    w="full"
                    mr="1rem"
                    _hover={{ color: "gray" }}
                    color="white"
                    bgColor="#011735"
                    // bgColor="white"
                    fontSize="12px"
                    rightIcon={<GoTriangleUp size="1.5rem" color="green" />}
                    // leftIcon={<MdOutlineAddchart size="1.5rem" color="green" />}
                  >
                    NOVA RENDA
                  </Button>

                  <Button
                    w="full"
                    _hover={{ color: "gray" }}
                    color="white"
                    // bgColor="white"
                    bgColor="#011735"
                    fontSize="12px"
                    leftIcon={<GoTriangleDown size="1.5rem" color="red" />}
                    // rightIcon={<MdOutlineAddchart size="1.5rem" color="red" />}
                  >
                    NOVA DESPESA
                  </Button>
                </Flex>
              </PopoverBody>
            </PopoverContent>
          </Popover>

          <IconButton
            size="md"
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
