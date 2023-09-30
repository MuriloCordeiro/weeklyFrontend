import {
  Flex,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
} from "@chakra-ui/react";
import { expensesTypes } from "../types/typeExpenses";

type expensesType = {
  expenses: expensesTypes[];
};

export default function TableDesk({ expenses }: expensesType) {
  console.log(expenses);

  return (
    <>
      <Flex
        boxShadow="5px 1px 16px -3px rgba(0, 0, 0, 0.25)"
        bgColor="rgba(255, 255, 255, 0.40)"
        backdropBlur="xl"
        borderRadius="10px"
        w="full"
        gap="2rem"
      >
        <TableContainer w="full">
          <Table size="lg">
            <Thead>
              <Tr>
                <Th>Título</Th>
                <Th>Descrição</Th>
                <Th>Data criação</Th>
                <Th>Data fim</Th>
                <Th>Parcelas</Th>
                <Th>Valor</Th>
                <Th>Tipo</Th>
                <Th>Ações</Th>
              </Tr>
            </Thead>
            <Tbody>
              {expenses &&
                expenses?.map((exp, index) => (
                  <Tr key={index}>
                    <Td>{exp.title}</Td>
                    <Td>{exp.description}</Td>
                    <Td>{String(exp.createdAt)}</Td>
                    <Td>{String(exp.endDate)}</Td>
                    <Td>{exp.installments}</Td>
                    <Td>{exp.value}</Td>
                    <Td>{exp.type === "fixed" ? "Fixa" : "Variável"}</Td>
                    <Td>Acoes</Td>
                  </Tr>
                ))}
            </Tbody>
          </Table>
        </TableContainer>
      </Flex>
    </>
  );
}
