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
  Grid,
  GridItem,
  Box,
  useBreakpointValue,
} from "@chakra-ui/react";
import LayoutDesk from "../Layouts/Layout";
import { FaPlus } from "react-icons/fa";
import GridMobile from "../components/gridMobile";
import TableDesk from "../components/tableDesk";
import { budgetExpenseTypes } from "../types/typeBudgetExpenses";
import { api } from "../services";
import { GetBudgetExpenses } from "../hooks/getBudgetExpenses";
import { useEffect, useState } from "react";

type budgetType = {
  budget: budgetExpenseTypes;
};

export default function Expenses({ budget }: budgetType) {
  const isWideVersion = useBreakpointValue({
    base: false,
    xsm: false,
    sm: false,
    md: true,
    lg: true,
  });

  const [budgetValue, setBudgetValue] = useState<any>("");
  const [budgetRemaining, setBudgetRemaining] = useState<any>("");
  const [expenseData, setExpenseData] = useState<any>("");

  async function handleBudgetExpense() {
    // setBudgetIsLoading(true);
    const { response, error } = await GetBudgetExpenses("Juliao");

    if (response) {
      console.log("response", response.data);
      setBudgetValue(response.data.totalBudget);
      setBudgetRemaining(response.data.remainingBudget);
      setExpenseData(response.data.expenses);

      console.log("expensesData", expenseData);
    } else if (error) {
      console.log("error", error);
    }
    // setBudgetIsLoading(false);
  }

  useEffect(() => {
    handleBudgetExpense();
  }, []);

  return (
    <>
      <LayoutDesk>
        <Flex w="full" h="full" gap="3rem" direction="column">
          <Flex gap="1rem">
            <Flex
              align="start"
              direction="column"
              display="flex"
              alignItems={"baseline"}
            >
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
                  {`R$ ${budgetValue}`}
                </Text>
              </Flex>
            </Flex>
            <Flex
              align="start"
              direction="column"
              display="flex"
              alignItems={"baseline"}
            >
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
                  {`R$ ${budgetRemaining}`}
                </Text>
              </Flex>
            </Flex>
          </Flex>

          <Flex direction={["column"]} gap="3rem">
            <Flex
              boxShadow="5px 1px 16px -3px rgba(0, 0, 0, 0.25)"
              bgColor="rgba( 255, 255, 255, 0.40 )"
              backdropBlur="xl"
              borderRadius="10px"
              display="flex"
              p="1.5rem"
              w="full"
              h={["full", "full", "5rem", "5rem"]}
              gap="2rem"
              direction={["column", "column", "row", "row"]}
              justifyContent={"flex-start"}
              alignItems={"baseline"}
            >
              <Text w={["full", "full", "15%", "15%"]} textStyle="semibold">
                Tipo de despesa
              </Text>
              <Select
                placeholder="Select option"
                w={["full", "full", "15%", "15%"]}
              >
                <option value="fixed">Despesa fixa</option>
                <option value="variable">Despesa variável</option>
              </Select>
              <Text w={["full", "full", "15%", "15%"]} textStyle="semibold">
                Data inicial
              </Text>
              <Input
                w={["full", "full", "15%", "15%"]}
                placeholder="Inicio"
                size="md"
                type="datetime-local"
              />
              <Text w={["full", "full", "15%", "15%"]} textStyle="semibold">
                Data final
              </Text>
              <Input
                w={["full", "full", "15%", "15%"]}
                placeholder="Fim"
                size="md"
                type="datetime-local"
              />
              <Button variant="primary" w={["full", "full", "15%", "15%"]}>
                Buscar
              </Button>

              <IconButton
                alignSelf={["center", "center", "start", "start"]}
                w={["full", "full", "3%", "3%"]}
                onClick={() => {}}
                variant="primary"
                icon={<FaPlus />}
                aria-label={"Adicionar"}
              />
            </Flex>
            {isWideVersion && <TableDesk expenses={expenseData} />}
            {!isWideVersion && <GridMobile expenses={expenseData} />}
          </Flex>
        </Flex>
      </LayoutDesk>
    </>
  );
}
