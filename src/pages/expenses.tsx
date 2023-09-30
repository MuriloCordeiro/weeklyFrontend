import {
  Flex,
  Text,
  Button,
  Img,
  Select,
  Input,
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  IconButton,
} from "@chakra-ui/react";
import LayoutDesk from "../Layouts/Layout";
import { FaPlus } from "react-icons/fa";

export default function Expenses() {
  return (
    <>
      <LayoutDesk>
        <Flex w="full" h="full" gap="3rem" direction="column">
          <Flex gap="1rem">
            <Flex align="start" direction="column" display="flex">
              <Text fontSize="14px" fontWeight="bold" color="#005165">
                orçamento mensal
              </Text>
              <Flex
                as={Button}
                bgColor="white"
                p="0.5rem"
                borderRadius="15px"
                align="center"
                justify="center"
                w="150px"
                onClick={() => {}}
                gap="0.5rem"
              >
                <Img src="/icons/budgetIcon.svg" alt="budget" h="20px" />
                <Text fontWeight="bold" fontSize="18px">
                  R$ milhoes
                </Text>
              </Flex>
            </Flex>
            <Flex align="start" direction="column" display="flex">
              <Text fontSize="14px" fontWeight="bold" color="#005165">
                saldo mensal
              </Text>
              <Flex
                bgColor="white"
                p="0.5rem"
                borderRadius="15px"
                align="center"
                justify="center"
                w="150px"
                gap="0.5rem"
              >
                <Img src="/icons/budgetIcon.svg" alt="budget" h="20px" />
                <Text fontWeight="bold" fontSize="18px">
                  R$ milhoes
                </Text>
              </Flex>
            </Flex>
          </Flex>

          <Flex direction="column" gap="3rem">
            <Flex
              boxShadow="5px 1px 16px -3px rgba(0, 0, 0, 0.25)"
              bgColor="rgba( 255, 255, 255, 0.40 )"
              backdropBlur="xl"
              borderRadius="10px"
              display="flex"
              p="1.5rem"
              w="full"
              h="5rem"
              gap="2rem"
              justifyContent={"flex-start"}
              alignItems={"baseline"}
            >
              <Text textStyle="semibold">Tipo de despesa</Text>
              <Select placeholder="Select option" w="15%">
                <option value="fixed">Despesa fixa</option>
                <option value="variable">Despesa variável</option>
              </Select>
              <Text textStyle="semibold">Data inicial</Text>
              <Input
                w="15%"
                placeholder="Inicio"
                size="md"
                type="datetime-local"
              />
              <Text textStyle="semibold">Data final</Text>
              <Input
                w="15%"
                placeholder="Fim"
                size="md"
                type="datetime-local"
              />
              <Button variant="primary" w="15%">
                Buscar
              </Button>

              <IconButton
                alignSelf={"start"}
                onClick={() => {}}
                variant="primary"
                icon={<FaPlus />}
                aria-label={"Adicionar"}
              />
            </Flex>
            <Flex
              boxShadow="5px 1px 16px -3px rgba(0, 0, 0, 0.25)"
              bgColor="rgba( 255, 255, 255, 0.40 )"
              backdropBlur="xl"
              borderRadius="10px"
              w="full"
              gap="2rem"
            >
              <TableContainer w="full" maxWidth="100%">
                <Table size="lg">
                  <Thead>
                    <Tr>
                      <Th>Título</Th>
                      <Th>Descrição</Th>
                      <Th>Data criação</Th>
                      <Th>Data fim</Th>
                      <Th>Parcelas</Th>
                      <Th>Valor</Th>
                      <Th>Ações</Th>
                    </Tr>
                  </Thead>
                  <Tbody>
                    <Tr>
                      <Td>inches</Td>
                      <Td>millimetres (mm)</Td>
                      <Td>25.4</Td>
                      <Td>25.4</Td>
                      <Td>25.4</Td>
                      <Td>25.4</Td>
                      <Td>...</Td>
                    </Tr>
                    <Tr>
                      <Td>inches</Td>
                      <Td>millimetres (mm)</Td>
                      <Td>25.4</Td>
                      <Td>25.4</Td>
                      <Td>25.4</Td>
                      <Td>25.4</Td>
                      <Td>...</Td>
                    </Tr>
                    <Tr>
                      <Td>inches</Td>
                      <Td>millimetres (mm)</Td>
                      <Td>25.4</Td>
                      <Td>25.4</Td>
                      <Td>25.4</Td>
                      <Td>25.4</Td>
                      <Td>...</Td>
                    </Tr>
                  </Tbody>
                </Table>
              </TableContainer>
            </Flex>
          </Flex>
        </Flex>
      </LayoutDesk>
    </>
  );
}
