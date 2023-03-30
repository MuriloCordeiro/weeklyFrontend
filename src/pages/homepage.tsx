import { useState } from "react";
import {
  Flex,
  Button,
  Collapse,
  useDisclosure,
  Text,
  useBreakpointValue,
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Icon,
  Img,
  Input,
  Tfoot,
} from "@chakra-ui/react";

import LayoutDesk from "../Layouts/Layout";
import { GiPayMoney, GiReceiveMoney } from "react-icons/gi";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { BsPencilSquare, BsStack } from "react-icons/bs";
import { TfiStatsDown, TfiStatsUp, TfiClipboard } from "react-icons/tfi";
import { GoTriangleDown, GoTriangleUp } from "react-icons/go";
import { useAuth } from "../contexts/AuthContext";
import { SendMessages } from "../hooks/useSendMessage";
import Layout from "../Layouts/Layout";

export default function Home() {
  const [teste, setTeste] = useState<any>("julio teste");

  const isWideVersion = useBreakpointValue({
    base: true,
    sm: true,
    md: false,
    lg: false,
  });

  async function Send() {
    const response = await SendMessages("teste");

    console.log("response", response);
  }

  return (
    <Layout>
      {/* <Button
        onClick={() => {
          Send();
        }}
      >
        go
      </Button> */}
      <Flex direction="column" w="100%" h="100%">
        <Text mb="2rem">LOGO VAI AQUI</Text>
        <Flex w="full" justify="space-between" mb="4rem">
          <Flex
            w="30%"
            h="150px"
            bgColor="white"
            borderRadius="20px"
            p="1rem"
            boxShadow="0px 8px 10px rgba(0, 0, 0, 0.1)"
          >
            <Flex w="full" justify="space-between">
              <Img src="/podcast.svg" mr="6rem" />
              <Flex direction="column" align="end" mr="1rem">
                <Text fontSize="32px" fontWeight="bold">
                  +43
                </Text>{" "}
                <Text fontSize="26px" fontWeight="bold" justifySelf="end">
                  transmissões realizadas
                </Text>
              </Flex>
            </Flex>
          </Flex>
          <Flex
            w="30%"
            h="150px"
            bgColor="white"
            borderRadius="20px"
            p="1rem"
            boxShadow="0px 8px 10px rgba(0, 0, 0, 0.1)"
          >
            TESTE
          </Flex>
          <Flex
            w="30%"
            h="150px"
            bgColor="white"
            borderRadius="20px"
            p="1rem"
            boxShadow="0px 8px 10px rgba(0, 0, 0, 0.1)"
          >
            TESTE
          </Flex>
        </Flex>
        <Flex
          boxShadow="0px 8px 10px rgba(0, 0, 0, 0.1)"
          bgColor="white"
          w="full"
          h="full"
          borderRadius="20px"
          p="2rem"
          direction="column"
        >
          <Flex w="30%" mb="2rem">
            <Input placeholder="Filtros" borderRadius="20px" mr="1rem" />
            <Input placeholder="Pesquisar" borderRadius="20px" mr="1rem" />
          </Flex>
          <TableContainer>
            <Table variant="simple">
              <Thead>
                <Tr>
                  <Th>Nome</Th>
                  <Th>Descrição</Th>
                  <Th>Data de criação</Th>
                  <Th>Enviado por</Th>
                </Tr>
              </Thead>
              <Tbody>
                <Tr>
                  <Td>inches</Td>
                  <Td>millimetres (mm)</Td>
                  <Td>25.4</Td>
                  <Td>25.4</Td>
                </Tr>
              </Tbody>
            </Table>
          </TableContainer>
        </Flex>
      </Flex>
    </Layout>
  );
}
