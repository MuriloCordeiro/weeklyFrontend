/* eslint-disable react-hooks/exhaustive-deps */
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
  useDisclosure,
  Skeleton,
} from "@chakra-ui/react";
import LayoutDesk from "../Layouts/Layout";
import { FaPlus } from "react-icons/fa";
import GridMobile from "../components/gridMobile";
import TableDesk from "../components/tableDesk";
import { budgetExpenseTypes } from "../types/typeBudgetExpenses";
import { api } from "../services";
import { GetBudgetExpenses } from "../hooks/getBudgetExpenses";
import { useEffect, useState } from "react";
import { CreateBudgetExpense } from "../hooks/createBudgetExpense";
import { parseCookies } from "nookies";
import ModalAddExpense from "../components/modalAddExpense";
import { AddExpenseBudget } from "../hooks/addExpenseBudget";
import { getExpensesByType } from "../hooks/getExpensesByType";
import MainFooter from "../Layouts/footer";

type budgetType = {
  budget: budgetExpenseTypes;
};

export default function Expenses() {
  const isWideVersion = useBreakpointValue({
    base: false,
    xsm: false,
    sm: false,
    md: true,
    lg: true,
  });
  const cookies: any = parseCookies();
  const [budgetData, setBudgetData] = useState<budgetType>();
  const [budgetValue, setBudgetValue] = useState<any>("");
  const [budgetRemaining, setBudgetRemaining] = useState<any>("");
  const [expenseData, setExpenseData] = useState<any>("");
  const [userId, setUserId] = useState<any>(cookies.userLogin);
  const [totalBudget, setTotalBudget] = useState<any>("");
  const [title, setTitle] = useState<any>();
  const [description, setDescription] = useState<any>();
  const [value, setValue] = useState<any>();
  const [checkBoxValue, setCheckBoxValue] = useState<boolean>(false);
  const [valueOfType, setValueOfType] = useState<string>("variable");
  const [installments, setInstallments] = useState<number>(1);
  const [parameter, setParameter] = useState<string>("type");
  const [parameterValue, setParameterValue] = useState<string>(valueOfType);
  const [startDate, setStartDate] = useState<string>("");
  const [endDate, setEndDate] = useState<string>("");
  const [isLoaded, setIsLoaded] = useState<boolean>(false);

  const {
    isOpen: isOpenAddExpense,
    onOpen: onOpenAddExpense,
    onClose: onCloseAddExpense,
  } = useDisclosure();

  async function handleBudgetExpense() {
    // setBudgetIsLoading(true);
    const { response, error } = await GetBudgetExpenses(userId);
    setIsLoaded(false);
    if (response) {
      console.log("response", response.data);
      setBudgetData(response.data);
      setBudgetValue(response.data.totalBudget);
      setBudgetRemaining(response.data.remainingBudget);
      setExpenseData(response.data.expenses);
    } else if (error) {
      console.log("error", error);
    }
    setIsLoaded(true);

    // setBudgetIsLoading(false);
  }
  async function handleCreateBudgetExpense() {
    const { response, error } = await CreateBudgetExpense(userId, totalBudget);
    setIsLoaded(false);
    if (response) {
      console.log(userId);
      setTotalBudget(response.data.totalBudget);
    } else if (error) {
      console.log("error", error);
    }
    setIsLoaded(true);
  }
  async function handleAddExpenseBudget() {
    const { response, error } = await AddExpenseBudget(
      userId,
      title,
      description,
      value,
      installments,
      valueOfType
    );
    setIsLoaded(false);

    if (response) {
      console.log(isLoaded);
      onCloseAddExpense();
      handleBudgetExpense();
    } else if (error) {
      console.log("error", error);
    }
    setIsLoaded(true);
  }
  function handleCheckBoxValidation() {
    if (valueOfType === "variable") {
      setCheckBoxValue(false);
    } else {
      setCheckBoxValue(true);
    }
  }
  async function handleGetExpensesByType() {
    const { response, error } = await getExpensesByType(
      userId,
      parameter,
      valueOfType,
      startDate,
      endDate
    );
    setIsLoaded(false);
    if (response) {
      setExpenseData(response.data);
      onCloseAddExpense();
      handleBudgetExpense();
    } else if (error) {
      console.log("error", error);
    }
    setIsLoaded(true);
  }

  useEffect(() => {
    handleBudgetExpense();
  }, []);
  useEffect(() => {
    handleCheckBoxValidation();
  }, [checkBoxValue, valueOfType]);

  return (
    <>
      {!budgetData ? (
        <LayoutDesk>
          <Flex align="center" justify="center" h="full">
            <Flex
              w="full"
              align="center"
              justify="center"
              h="full"
              gap="1rem"
              direction="column"
              bgColor="rgba( 255, 255, 255, 0.2 )"
              backdropBlur="xl"
              borderRadius="10px"
              p="2rem"
            >
              <Text fontSize="26px" fontWeight="bold" align="center">
                Começando no Weekly.
              </Text>
              <Text
                fontSize={["16px", "18px"]}
                // w="500px"
                align="center"
                fontWeight="bold"
                color="gray.main"
              >
                Para começar a gerenciar seu dinheiro de maneira mais
                inteligente, clique no botão abaixo
              </Text>

              <Input
                type="number"
                w="full"
                onChange={(e) => {
                  setTotalBudget(e.target.value);
                }}
              />
              <Button
                onClick={() => {
                  handleCreateBudgetExpense();
                }}
                isDisabled={totalBudget ? false : true}
                variant="primary"
                fontWeight="bold"
                boxShadow="0 2px 10px #4871CC"
              >
                Criar meu orçamento{" "}
              </Button>
            </Flex>
          </Flex>
        </LayoutDesk>
      ) : (
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
                  bgColor={budgetRemaining < 0 ? "red" : "green"}
                  color="white"
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
                  onChange={(e) => {
                    setParameterValue(e.target.value);
                  }}
                  w={["full", "full", "15%", "15%"]}
                >
                  <option value="variable">Despesa variável</option>
                  <option value="fixed">Despesa fixa</option>
                </Select>
                <Text w={["full", "full", "15%", "15%"]} textStyle="semibold">
                  Data inicial
                </Text>
                <Input
                  onChange={(e) => {
                    setStartDate(e.target.value);
                  }}
                  w={["full", "full", "15%", "15%"]}
                  placeholder="Inicio"
                  size="md"
                  type="date"
                />
                <Text w={["full", "full", "15%", "15%"]} textStyle="semibold">
                  Data final
                </Text>
                <Input
                  onChange={(e) => {
                    setEndDate(e.target.value);
                  }}
                  w={["full", "full", "15%", "15%"]}
                  placeholder="Fim"
                  size="md"
                  type="date"
                />
                <Button
                  onClick={() => {
                    handleGetExpensesByType();
                  }}
                  variant="primary"
                  w={["full", "full", "15%", "15%"]}
                >
                  Buscar
                </Button>

                <IconButton
                  alignSelf={["center", "center", "start", "start"]}
                  w={["full", "full", "3%", "3%"]}
                  onClick={() => {
                    onOpenAddExpense();
                  }}
                  variant="primary"
                  icon={<FaPlus />}
                  aria-label={"Adicionar"}
                />
              </Flex>
              {isWideVersion && (
                <Skeleton isLoaded={isLoaded}>
                  <TableDesk expenses={expenseData} />{" "}
                </Skeleton>
              )}
              {!isWideVersion && <GridMobile expenses={expenseData} />}
            </Flex>
          </Flex>
          <ModalAddExpense
            isOpen={isOpenAddExpense}
            onClose={onCloseAddExpense}
            setDescription={setDescription}
            setTitle={setTitle}
            setValue={setValue}
            checkBoxValue={checkBoxValue}
            setValueOfType={setValueOfType}
            setInstallments={setInstallments}
            action={() => {
              handleAddExpenseBudget();
            }}
          />
        </LayoutDesk>
      )}
    </>
  );
}
