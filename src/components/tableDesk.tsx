import {
  Flex,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  IconButton,
  Button,
  useDisclosure,
} from "@chakra-ui/react";
import { expensesTypes } from "../types/typeExpenses";
import formatData from "../utils/formatData";
import { HiOutlinePencilAlt } from "react-icons/hi";
import { AiFillDelete } from "react-icons/ai";
import { useEffect, useState } from "react";
import ModalUpdateExpense from "./modalUpdateExpense";
import { parseCookies } from "nookies";
import { getExpenseById } from "../hooks/getExpenseById";

type expensesType = {
  expenses: expensesTypes[];
};

export default function TableDesk({ expenses }: expensesType) {
  const cookies: any = parseCookies();
  const [userId, setUserId] = useState<any>(cookies.userLogin);
  const [title, setTitle] = useState<any>();
  const [description, setDescription] = useState<any>();
  const [value, setValue] = useState<any>();
  const [checkBoxValue, setCheckBoxValue] = useState<boolean>(false);
  const [valueOfType, setValueOfType] = useState<string>();
  const [installments, setInstallments] = useState<number>();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const {
    isOpen: isOpenAddExpense,
    onOpen: onOpenAddExpense,
    onClose: onCloseAddExpense,
  } = useDisclosure();

  async function handleExpenseById(expenseId: string) {
    const { response, error } = await getExpenseById(userId, expenseId);
    setIsLoading(true);
    if (response) {
      setTitle(response.data[0].expenses[0].title);
      setDescription(response.data[0].expenses[0].description);
      setValue(response.data[0].expenses[0].value);
      setValueOfType(response.data[0].expenses[0].type);
      setInstallments(response.data[0].expenses[0].installments);
      setIsLoading(false);
    } else if (error) {
      console.log(error);
      setIsLoading(false);
    }
  }

  async function handleUpdateExpenseByid() {}

  function handleCheckBoxValidation() {
    if (valueOfType === "variable") {
      setCheckBoxValue(false);
    } else {
      setCheckBoxValue(true);
    }
  }

  useEffect(() => {
    handleCheckBoxValidation();
    console.log("valueOfType", valueOfType);
  }, [checkBoxValue, valueOfType]);
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
          <Table size="md">
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
                    <Td>{formatData(String(exp.createdAt))}</Td>
                    <Td>{formatData(String(exp.endDate))}</Td>
                    <Td>{exp.installments}</Td>
                    <Td>{exp.value}</Td>
                    <Td>{exp.type === "fixed" ? "Fixa" : "Variável"}</Td>
                    <Td>
                      <Flex gap="1.5rem">
                        <Flex
                          variant="ghost"
                          as={Button}
                          color="blue"
                          onClick={() => {
                            handleExpenseById(exp._id);
                            onOpenAddExpense();
                          }}
                        >
                          <HiOutlinePencilAlt size="25" />
                        </Flex>
                        <Flex variant="ghost" as={IconButton} color="red">
                          <AiFillDelete size="25" />
                        </Flex>
                      </Flex>
                    </Td>
                  </Tr>
                ))}
            </Tbody>
          </Table>
        </TableContainer>
      </Flex>
      <ModalUpdateExpense
        isLoading={isLoading}
        isOpen={isOpenAddExpense}
        onClose={onCloseAddExpense}
        setDescription={setDescription}
        description={description}
        setTitle={setTitle}
        title={title}
        setValue={setValue}
        value={value}
        checkBoxValue={checkBoxValue}
        setValueOfType={setValueOfType}
        valueOfType={valueOfType}
        setInstallments={setInstallments}
        installments={installments}
        action={() => {
          handleUpdateExpenseByid();
        }}
      />
    </>
  );
}
