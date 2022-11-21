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
} from "@chakra-ui/react";
import Home from "../../pages/homepage";

export default function Header() {
  return (
    <Flex h="auto" w="auto">
      <Wrap align="center">
        <WrapItem>
          <Avatar name="Dan Abrahmov" src="/Image/murilo.jpg" />
        </WrapItem>
        <Text color="white" fontWeight="bold" fontSize="18px">
          Bem-vindo, Murilo
        </Text>
      </Wrap>
    </Flex>
  );
}
