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
import { useAuth } from "../contexts/AuthContext";

export default function Header() {
  return (
    <Flex mb="4rem">
      <Text fontSize="30px" fontWeight="bold" color="blue.main">
        Weekly.
      </Text>
    </Flex>
  );
}
