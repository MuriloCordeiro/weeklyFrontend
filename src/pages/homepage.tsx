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
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/react";

import LayoutDesk from "../Layouts/Layout";
import { GiPayMoney, GiReceiveMoney } from "react-icons/gi";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { BsPencilSquare, BsStack } from "react-icons/bs";
import { TfiStatsDown, TfiStatsUp, TfiClipboard } from "react-icons/tfi";
import { GoTriangleDown, GoTriangleUp } from "react-icons/go";
import { useAuth } from "../contexts/AuthContext";
import { SendMessages, getMessages } from "../hooks/useSendMessage";
import Layout from "../Layouts/Layout";

export default function Home() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [phoneNumber, setPhoneNumber] = useState<any>();
  const [textMessage, setTextMessage] = useState<any>();

  const isWideVersion = useBreakpointValue({
    base: true,
    sm: true,
    md: false,
    lg: false,
  });

  async function Send() {
    const response = await SendMessages(phoneNumber, textMessage);

    console.log("response", response);
  }
  async function test() {
    const response = await getMessages();

    console.log("responseeeeeeeee", response);
  }

  return (
    <Layout>
      <Flex direction="column" w="100%" h="100%">
        <Text mb="2rem">LOGO VAI AQUI</Text>
        <Button
          onClick={() => {
            test();
          }}
        >
          test
        </Button>
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
              <Img src="/podcast.svg" mr="1rem" />
              <Flex direction="column" mr="1rem" mt="1rem">
                <Text fontSize="16px" fontWeight="bold">
                  +43
                </Text>{" "}
                <Text fontSize="16px" fontWeight="bold">
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
          <Flex w="full" mb="2rem">
            <Input placeholder="Filtros" borderRadius="20px" mr="1rem" />
            <Input placeholder="Pesquisar" borderRadius="20px" mr="1rem" />
            <Button
              justifySelf="end"
              borderRadius="10px"
              bgColor="#4887FA"
              color="white"
              boxShadow="0px 8px 10px rgba(0, 0, 0, 0.25)"
              onClick={onOpen}
            >
              +
            </Button>
            <Modal isOpen={isOpen} onClose={onClose} size="lg">
              <ModalOverlay />
              <ModalContent>
                <ModalHeader>
                  <Text color="#081F49">Nova Lista de Transmissão</Text>
                </ModalHeader>
                <ModalCloseButton />
                <ModalBody p="2rem">
                  <Flex direction="column">
                    <Text>Insira o número de telefone aqui</Text>
                    <Input
                      mb="1rem"
                      onChange={(e) => {
                        setPhoneNumber(e.target.value);
                      }}
                    />
                    <Text>Insira a mensagem a ser enviada aqui</Text>
                    <Input
                      mb="1rem"
                      h="100px"
                      onChange={(e) => {
                        setTextMessage(e.target.value);
                      }}
                    />
                    <Button
                      justifySelf="end"
                      borderRadius="10px"
                      bgColor="#4887FA"
                      color="white"
                      boxShadow="0px 8px 10px rgba(0, 0, 0, 0.25)"
                      onClick={() => {
                        Send();
                      }}
                    >
                      Enviar mensagem
                    </Button>
                  </Flex>
                </ModalBody>
              </ModalContent>
            </Modal>
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
                  <Td></Td>
                  <Td></Td>
                  <Td></Td>
                  <Td></Td>
                </Tr>
              </Tbody>
            </Table>
          </TableContainer>
        </Flex>
      </Flex>
    </Layout>
  );
}
