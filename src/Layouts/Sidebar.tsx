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
  PopoverAnchor,
} from "@chakra-ui/react";
import Aos from "aos";
import "aos/dist/aos.css";
import { useAuth } from "../contexts/AuthContext";

export default function Sidebar() {
  return (
    <Flex
      bgColor="rgba( 255, 255, 255, 0.9 )"
      boxShadow="5px 1px 16px -3px rgba(0, 0, 0, 0.25)"
      backdropBlur="xl"
      w="300px"
      justify="center"
    >
      <Text
        fontSize="24px"
        fontWeight="bold"
        mt="1rem"
        color="blue.main"
        position="fixed"
      >
        Weekly.
      </Text>
    </Flex>
  );
}
