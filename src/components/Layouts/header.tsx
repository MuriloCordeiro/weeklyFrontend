import {
  Flex,
  Button,
  Text,
  TabList,
  Tab,
  TabPanel,
  TabPanels,
  Tabs,
} from "@chakra-ui/react";
import Home from "../../pages/homepage";

export default function Header() {
  return (
    <Flex h="auto" w="auto">
      <Tabs w="full">
        <TabList>
          <Tab>One</Tab>
          <Tab>Two</Tab>
          <Tab>Three</Tab>
        </TabList>

        <TabPanels>
          <TabPanel></TabPanel>
          <TabPanel>
            <p>two!</p>
          </TabPanel>
          <TabPanel>
            <p>three!</p>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Flex>
  );
}
