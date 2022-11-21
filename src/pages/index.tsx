import Head from "next/head";
import styles from "../styles/Home.module.css";
import {
  Flex,
  Button,
  Image,
  Box,
  Table,
  TableCaption,
  TableContainer,
  Tbody,
  Td,
  Tfoot,
  Th,
  Thead,
  Tr,
  Text,
} from "@chakra-ui/react";
import { useRouter } from "next/router";

export default function HomeLogin() {
  const Router = useRouter();
  return (
    <>
      <Box />
      <Flex
        // bgImage="url(/Image/mosaic2.jpg)"
        bgPosition="center"
        bgRepeat="no-repeat"
        justify="center"
        w="400px"
      >
        <TableContainer>
          <Table variant="unstyled" size="sm" mt="1rem">
            {/* <TableCaption>Imperial to metric conversion factors</TableCaption> */}
            <Thead>
              <Tr>
                <Th>
                  <Text align="center">Nome</Text>
                </Th>
                <Th>
                  <Text align="center">Parcela</Text>
                </Th>
                <Th>
                  <Text align="center">Valor</Text>
                </Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td>
                  <Text
                    align="center"
                    bgColor="#D9D9D9"
                    borderRadius="10px"
                    p="5px"
                  >
                    Conta de água
                  </Text>
                </Td>
                <Td>
                  <Text
                    align="center"
                    bgColor="#D9D9D9"
                    p="5px"
                    borderRadius="10px"
                  >
                    1/12
                  </Text>
                </Td>
                <Td>
                  <Text
                    align="center"
                    bgColor="#D9D9D9"
                    p="5px"
                    borderRadius="10px"
                  >
                    R$ 800,00
                  </Text>
                </Td>
              </Tr>
            </Tbody>
          </Table>
        </TableContainer>
        {/* Aqui vai ser o login
        <Button
          onClick={() => {
            Router.push("/homepage");
          }}
        >
          Ir para a tela de home
        </Button> */}
      </Flex>
    </>
  );
}
