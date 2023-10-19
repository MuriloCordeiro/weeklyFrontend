/* eslint-disable react-hooks/exhaustive-deps */
import {
  Button,
  Flex,
  Grid,
  GridItem,
  Input,
  Spinner,
  Text,
  Img,
  Icon,
  Center,
  Skeleton,
  IconButton,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  useToast,
} from "@chakra-ui/react";
import Layout from "../Layouts/Layout";
import { useAuth } from "../contexts/AuthContext";
import { CreateBudget } from "../hooks/createUserBudget";
import { parseCookies } from "nookies";
import { useEffect, useState } from "react";
import { GetBudget } from "../hooks/getWeeklyBudget";

import { BsThreeDotsVertical } from "react-icons/bs";
import { FaPlus } from "react-icons/fa";
import { AddWeeklyExpenses } from "../hooks/addWeeklyExpenses";
import { UpdateWeeklyBudget } from "../hooks/updateWeeklyUserBudget";
import { UpdateWeeklyExpense } from "../hooks/updateWeeklyExpense";
import { DeleteWeeklyExpense } from "../hooks/deteleWeeklyExpense";

type weekTypes = [
  {
    budget: number;
    endDate: string;
    expenses: [
      {
        description: string;
        expenseDate: string;
        value: number;
      }
    ];
    remainingBudget: string;
    startDate: string;
    weekNumber: number;
  }
];

type budgetTypes = {
  remainingBudget: number;
  totalBudget: number;
  userId: string;
  weeks: [
    {
      budget: number;
      endDate: string;
      expenses: [
        {
          description: string;
          expenseDate: string;
          value: number;
        }
      ];
      weekRemainingBudget: string;
      startDate: string;
      weekNumber: number;
    }
  ];
};
export default function Homepage() {
  const cookies: any = parseCookies();

  const { user } = useAuth();
  const [userId, setUserId] = useState<any>(cookies.userLogin);
  const [totalBudget, setTotalBudget] = useState<any>();
  const [budgetData, setBudgetData] = useState<budgetTypes>();
  const [monthlyBudget, setMonthlyBudget] = useState<number>();
  const [remainingMonthly, setRemainingMonthly] = useState<number>();
  const [expensesData, setExpensesData] = useState<any>();
  const [expenseId, setExpenseId] = useState<string | undefined>();
  const [expenseTitle, setExpenseTitle] = useState<string>();
  const [expenseDescription, setExpenseDescription] = useState<
    string | number
  >();
  const [expenseValue, setExpenseValue] = useState<any>();
  const [currentVigency, setCurrentVigency] = useState<any>("10/2023");
  const [title, setTitle] = useState<string>();
  const [description, setDescription] = useState<string>();
  const [value, setValue] = useState<number>();
  const [expenseDate, setExpenseDate] = useState<string>();
  const [newBudget, setNewBudget] = useState<number>();

  const [weekNumber, setWeekNumber] = useState<number | undefined>();

  const [budgetIsLoading, setBudgetIsLoading] = useState<any>(false);
  const [buttonHandler, setButtonHandler] = useState<Record<number, boolean>>(
    {}
  );

  const { isOpen, onOpen, onClose } = useDisclosure();
  const {
    isOpen: isOpenMothlyBudget,
    onOpen: onOpenMothlyBudget,
    onClose: onCloseMothlyBudget,
  } = useDisclosure();

  const {
    isOpen: isOpenAddWeekly,
    onOpen: onOpenAddWeekly,
    onClose: onCloseAddWeekly,
  } = useDisclosure();

  console.log("cookies", cookies.userLogin);
  console.log("userId", userId);
  const toast = useToast();

  // const CurrentDate = () => {
  //   const getDate = () => {
  //     const today = new Date();
  //     const day = String(today.getDate()).padStart(2, "0");
  //     const month = String(today.getMonth() + 1).padStart(2, "0"); // Janeiro é 0!
  //     const year = today.getFullYear();

  //     return `${day}/${month}/${year}`;
  //   };
  // };

  async function handleCreateBudget() {
    setBudgetIsLoading(true);
    const { response, error } = await CreateBudget(userId, totalBudget);

    if (response) {
      console.log("response", response);
      setBudgetData(response.data);
      handleGetBudget();
    } else if (error) {
      console.log("error", error);
    }
    setBudgetIsLoading(false);
  }

  async function handleGetBudget() {
    setBudgetIsLoading(true);
    const { response, error } = await GetBudget(userId);

    if (response) {
      console.log("response", response);
      setBudgetData(response.data);
      setMonthlyBudget(response.data.totalBudget);
      setRemainingMonthly(response.data.remainingBudget);

      console.log("expensesData", expensesData);
    } else if (error) {
      console.log("error", error);
    }
    setBudgetIsLoading(false);
  }

  async function handleAddWeeklyExpense() {
    const today = new Date();
    const day = String(today.getDate()).padStart(2, "0");
    const month = String(today.getMonth() + 1).padStart(2, "0"); // Janeiro é 0!
    const year = today.getFullYear();

    const expenseDate = `${day}/${month}/${year}`;

    const expense = [
      {
        title,
        description,
        value,
        expenseDate,
      },
    ];
    const { response, error } = await AddWeeklyExpenses(
      userId,
      weekNumber,
      currentVigency,
      title,
      description,
      value,
      expenseDate
    );

    if (response) {
      console.log("response", response);
      toast({
        title: "Sucesso!.",
        description: "Despesa adicionada com sucesso.",
        status: "success",
        duration: 4000,
        isClosable: true,
      });
      handleGetBudget();
      onCloseAddWeekly();
    } else if (error) {
    }
  }

  async function handleNewBudget() {
    const { response, error } = await UpdateWeeklyBudget(
      userId,
      newBudget,
      currentVigency
    );

    if (response) {
      console.log("new budget", response);
      toast({
        title: "Sucesso!.",
        description: "Orçamento alterado com sucesso.",
        status: "success",
        duration: 4000,
        isClosable: true,
      });
      handleGetBudget();
      onCloseMothlyBudget();
    } else if (error) {
    }
  }

  async function handleEditExpense() {
    const newExpense = {
      title: expenseTitle,
      description: expenseDescription,
      value: expenseValue,
      expenseDate: expenseDate,
    };
    const { response, error } = await UpdateWeeklyExpense(
      userId,
      weekNumber,
      expenseId,
      newExpense
    );

    if (response) {
      console.log("new budget", response);
      toast({
        title: "Sucesso!.",
        description: "Despesa editada com sucesso.",
        status: "success",
        duration: 4000,
        isClosable: true,
      });
      handleGetBudget();
      onClose();
    } else if (error) {
    }
  }

  async function handleDeleteExpense() {
    const { response, error } = await DeleteWeeklyExpense(
      userId,
      weekNumber,
      currentVigency,
      expenseId
    );

    if (response) {
      console.log("new budget", response);
      toast({
        title: "Sucesso!",
        description: "Despesa removida com sucesso.",
        status: "success",
        duration: 4000,
        isClosable: true,
      });
      handleGetBudget();
      onClose();
    } else if (error) {
      console.log("error", error);
      toast({
        title: "Erro!",
        description: "Orçamento da semana insuficiente.",
        status: "error",
        duration: 4000,
        isClosable: true,
      });
    }
  }
  useEffect(() => {
    handleGetBudget();
  }, []);

  console.log("weekNumber", weekNumber);
  return (
    <Layout>
      <>
        {/* <Input
          onChange={(e) => {
            setTotalBudget(e.target.value);
          }}
        /> */}

        {budgetData ? (
          <Flex w="full" h="full" direction="column" gap="1rem" mb="6rem">
            <Flex align="end" gap="1rem">
              <Flex align="start" direction="column">
                <Text fontSize="14px" fontWeight="bold" color="#005165">
                  Orçamento Mensal
                </Text>
                <Flex
                  as={Button}
                  bgColor="white"
                  p="0.5rem"
                  borderRadius="15px"
                  align="center"
                  justify="center"
                  w="150px"
                  onClick={() => {
                    setNewBudget(monthlyBudget);
                    onOpenMothlyBudget();
                  }}
                  gap="0.5rem"
                >
                  <Img src="/icons/budgetIcon.svg" alt="budget" h="20px" />
                  <Text fontWeight="bold" fontSize="18px">
                    R${monthlyBudget}
                  </Text>
                </Flex>
              </Flex>
              <Flex align="start" direction="column">
                <Text fontSize="14px" fontWeight="bold" color="#005165">
                  Saldo Mensal
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
                    R${remainingMonthly}
                  </Text>
                </Flex>
              </Flex>
            </Flex>
            <Flex justify="center" align="center" w="full" h="full">
              {/* AQUI SÃO OS GASTOS SEMANAIS */}
              {budgetData ? (
                <Grid
                  templateColumns={[
                    "repeat(1, 1fr)",
                    "repeat(1, 1fr)",
                    "repeat(2, 1fr)",
                    "repeat(2, 1fr)",
                    "repeat(3, 1fr)",
                    "repeat(3, 1fr)",
                  ]}
                  gap={6}
                  w="full"
                >
                  {budgetData &&
                    budgetData?.weeks?.map((week: any, index: number) => (
                      <>
                        <Flex direction="column" gap="1rem">
                          <GridItem
                            key={index}
                            px="1rem"
                            py="0.5rem"
                            w={["full", "full", "full", "full", "full", "full"]}
                            h="460px"
                            bg="blue.500"
                            boxShadow="5px 1px 16px -3px rgba(0, 0, 0, 0.25)"
                            bgColor="rgba( 255, 255, 255, 0.40 )"
                            backdropBlur="xl"
                            borderRadius="10px"
                          >
                            <Flex
                              w="full"
                              direction="column"
                              h="full"
                              gap="1rem"
                            >
                              <Flex align="center" w="100%" gap="2rem">
                                <Img
                                  src="/icons/calendarIcon.svg"
                                  alt="calendario"
                                  h="35px"
                                />
                                <Flex direction="column" w="full">
                                  <Text
                                    fontWeight="bold"
                                    fontSize="16px"
                                    color="#005165"
                                  >
                                    Semana {week.weekNumber}
                                  </Text>
                                  <Text
                                    fontWeight="bold"
                                    color="gray.main"
                                    fontSize="14px"
                                  >
                                    de {week.startDate} até {week.endDate}
                                  </Text>
                                </Flex>

                                <Flex justify="end">
                                  <IconButton
                                    onClick={() => {
                                      setWeekNumber(week.weekNumber);
                                      onOpenAddWeekly();
                                    }}
                                    justifySelf="start"
                                    variant="primary"
                                    icon={<FaPlus />}
                                    aria-label={"Adicionar"}
                                  />
                                  {/* <Button >
                                    {"+"}
                                  </Button> */}
                                </Flex>
                              </Flex>

                              {week.expenses.length === 0 ? (
                                // Caso o array esteja vazio, exibe a imagem de fundo
                                <Flex
                                  align="center"
                                  justify="center"
                                  w="full"
                                  h="250px" // ou qualquer altura que desejar
                                  // bgImage="/icons/emptyExpense.svg"
                                  bgSize="50px"
                                  // bgPosition="center" // Centraliza a imagem de fundo
                                  // bgRepeat="no-repeat"
                                  style={{ opacity: "0.7" }}
                                >
                                  <Text>
                                    Nenhuma despesa encontrada pra essa semana.
                                  </Text>
                                </Flex>
                              ) : (
                                // Caso contrário, mapeia e exibe as despesas
                                week.expenses.map((exp: any, index: any) => (
                                  <Flex
                                    boxShadow="lg"
                                    as={Button}
                                    key={index}
                                    align="center"
                                    w="full"
                                    bgColor="white"
                                    p="1rem"
                                    borderRadius="15px"
                                    justify="space-between"
                                    onClick={() => {
                                      setExpenseId(exp._id);
                                      setExpenseTitle(exp.title);
                                      setExpenseDescription(exp.description);
                                      setExpenseValue(exp.value);
                                      setWeekNumber(week.weekNumber);
                                      onOpen();
                                    }}
                                    color="#005165"
                                  >
                                    <Text fontWeight="bold">{exp.title}</Text>
                                    <Text fontWeight="bold" color="gray.main">
                                      {exp.description}
                                    </Text>
                                    {/* <Text fontWeight="bold" color="gray.main">
                                      {exp.expenseDate}
                                    </Text> */}
                                    <Text fontWeight="bold">R${exp.value}</Text>
                                    {/* <IconButton
                                      icon={<BsThreeDotsVertical />}
                                      aria-label={"Ações"}
                                    /> */}
                                  </Flex>
                                ))
                              )}
                              <Flex justify="end" h="full">
                                {" "}
                                <Flex
                                  p="0.5rem"
                                  justify="end"
                                  direction="column"
                                >
                                  Saldo:
                                  <Text
                                    borderRadius="15px"
                                    bgColor="white"
                                    p="0.5rem"
                                    fontWeight="bold"
                                    fontSize="16px"
                                    alignSelf="end"
                                  >
                                    R${week.weekRemainingBudget}
                                  </Text>
                                </Flex>
                              </Flex>
                            </Flex>
                          </GridItem>
                        </Flex>
                      </>
                    ))}
                </Grid>
              ) : (
                <Spinner />
              )}
            </Flex>
          </Flex>
        ) : (
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
              p="1rem"
            >
              <Text
                fontSize="26px"
                fontWeight="bold"
                color="blue.main"
                align="center"
              >
                Começando no Weekly.
              </Text>
              <Text
                w="800px"
                fontSize={["16px", "18px"]}
                // w="500px"
                align="center"
                // fontWeight="bold"
                color="gray.main"
              >
                Para começar a gerenciar seu dinheiro de maneira mais
                inteligente, digite um orçamento mensal e clique em Criar meu
                orçamento
              </Text>

              <Input
                placeholder="Ex: R$1000,00"
                type="number"
                // w="full"
                w="400px"
                onChange={(e) => {
                  setTotalBudget(e.target.value);
                }}
              />
              <Button
                onClick={() => {
                  handleCreateBudget();
                }}
                isDisabled={totalBudget ? false : true}
                variant="primary"
                fontWeight="bold"
                // boxShadow="0 2px 10px #4871CC"
              >
                Criar meu orçamento{" "}
              </Button>
            </Flex>
          </Flex>
        )}

        {/* Editar o valor do orçamento mensal */}
        <Modal isOpen={isOpenMothlyBudget} onClose={onCloseMothlyBudget}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader color="#005165">Editar orçamento mensal</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <Flex direction="column" gap="2rem">
                <Flex direction="column">
                  <Text fontWeight="bold" color="#005165">
                    Título
                  </Text>
                  <Input
                    type="number"
                    value={newBudget}
                    placeholder="Ex: 1200"
                    onChange={(e) => {
                      setNewBudget(e.currentTarget.valueAsNumber);
                    }}
                  />
                </Flex>
              </Flex>
            </ModalBody>

            <ModalFooter gap="1rem">
              <Button
                variant="cancelAction"
                onClick={() => {
                  onCloseMothlyBudget();
                }}
              >
                Cancelar
              </Button>

              <Button
                variant="confirmAction"
                onClick={() => {
                  handleNewBudget();
                }}
              >
                Salvar novo orçamento
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>

        {/* Adicionar uma despesa */}
        <Modal isOpen={isOpenAddWeekly} onClose={onCloseAddWeekly}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader color="#005165">Adicione uma nova despesa</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <Flex direction="column" gap="2rem">
                <Flex direction="column">
                  <Text fontWeight="bold" color="#005165">
                    Título
                  </Text>
                  <Input
                    placeholder="Ex: conta de luz"
                    onChange={(e) => {
                      setTitle(e.target.value);
                    }}
                  />
                </Flex>

                <Flex direction="column">
                  <Text fontWeight="bold" color="#005165">
                    Descrição
                  </Text>
                  <Input
                    placeholder="Ex: a conta deve ser paga em 2x"
                    onChange={(e) => {
                      setDescription(e.target.value);
                    }}
                  />
                </Flex>
                <Flex direction="column">
                  <Text fontWeight="bold" color="#005165">
                    Valor
                  </Text>
                  <Input
                    type="number"
                    placeholder="Ex: R$150,00"
                    onChange={(e) => {
                      setValue(e.target.valueAsNumber);
                    }}
                  />
                </Flex>
              </Flex>
            </ModalBody>

            <ModalFooter gap="1rem">
              <Button variant="cancelAction">Cancelar</Button>

              <Button
                variant="confirmAction"
                onClick={() => {
                  handleAddWeeklyExpense();
                }}
              >
                Salvar nova despesa
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>

        {/* Editar uma despesa */}
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Modal Title</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <Flex direction="column" gap="2rem">
                <Flex direction="column">
                  <Text>Título</Text>
                  <Input
                    placeholder="Ex: contas de luz"
                    value={expenseTitle}
                    onChange={(e) => {
                      setExpenseTitle(e.target.value);
                    }}
                  />
                </Flex>

                <Flex direction="column">
                  <Text>Descrição</Text>
                  <Input
                    value={expenseDescription}
                    onChange={(e) => {
                      setExpenseDescription(e.target.value);
                    }}
                  />
                </Flex>
                <Flex direction="column">
                  <Text>Data</Text>
                  <Input
                    value={expenseDate}
                    onChange={(e) => {
                      setExpenseDate(e.target.value);
                    }}
                  />
                </Flex>
                <Flex direction="column">
                  <Text>Valor</Text>
                  <Input
                    type="number"
                    value={expenseValue}
                    onChange={(e) => {
                      setExpenseValue(e.currentTarget.value);
                    }}
                  />
                </Flex>
              </Flex>
            </ModalBody>

            <ModalFooter justifyContent={"space-evenly"}>
              <Button
                colorScheme="blue"
                mr={3}
                onClick={() => {
                  handleDeleteExpense();
                }}
                variant="cancelAction"
              >
                Remover despesa
              </Button>
              <Button
                variant="primary"
                onClick={() => {
                  handleEditExpense();
                }}
              >
                Salvar alterações
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    </Layout>
  );
}
