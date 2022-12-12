import {
  Flex,
  Button,
  Text,
  TabList,
  Tab,
  TabPanel,
  TabPanels,
  Tabs,
  Avatar,
  Wrap,
  WrapItem,
  IconButton,
  useDisclosure,
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
import Aos from "aos";
import "aos/dist/aos.css";
import { useAuth } from "../../contexts/AuthContext";
import SideBar from "../SidebarNav";

export default function Header() {
  const { user, signInWithGoogle } = useAuth();

  setTimeout(() => {
    Aos.init({ duration: 1200 });
  }, 1500);

  const {
    isOpen: isOpenSideBar,
    onOpen: onOpenSideBar,
    onClose: onCloseSideBar,
  } = useDisclosure();
  return (
    <Flex
      h="auto"
      w="auto"
      p="1rem"
      data-aos="fade-right"
      align="center"
      justify="space-between"
    >
      <Wrap align="center">
        <WrapItem>
          {/* <Avatar name="Dan Abrahmov" src={user?.photoURL} /> */}
        </WrapItem>
        <Text color="white" fontWeight="bold" fontSize="18px">
          Bem-vindo, {user?.displayName}
        </Text>
      </Wrap>
      <Flex
        onClick={onOpenSideBar}
        variant="unstyled"
        as={Button}
        h="25px"
        justify="space-evenly"
        color="white"
        fontWeight="bold"
        fontSize="18px"
        direction="column"
        data-aos="fade-right"
      >
        <Flex w="30px" color="red" borderWidth="2px" />
        <Flex w="30px" color="red" borderWidth="2px" />
        <Flex w="30px" color="red" borderWidth="2px" />
      </Flex>
      <SideBar isOpenSideBar={isOpenSideBar} onCloseSideBar={onCloseSideBar} />
    </Flex>
  );
}
