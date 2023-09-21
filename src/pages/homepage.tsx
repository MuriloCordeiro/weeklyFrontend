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
} from "@chakra-ui/react";
import Layout from "../Layouts/Layout";
import { useAuth } from "../contexts/AuthContext";
import { CreateBudget } from "../hooks/createUserBudget";
import { parseCookies } from "nookies";
import { useEffect, useState } from "react";
import { GetBudget } from "../hooks/getUserBudget";
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
      remainingBudget: string;
      startDate: string;
      weekNumber: number;
    }
  ];
};
export default function Homepage() {
  const cookies: any = parseCookies();

  const { user } = useAuth();
  const [userId, setUserId] = useState<any>(cookies.userEmail);
  const [totalBudget, setTotalBudget] = useState<any>();
  const [budgetData, setBudgetData] = useState<budgetTypes>();
  const [monthlyBudget, setMonthlyBudget] = useState<number>();
  const [remainingMonthly, setRemainingMonthly] = useState<number>();
  const [expensesData, setExpensesData] = useState<any>();

  const [budgetIsLoading, setBudgetIsLoading] = useState<any>(false);

  console.log("cookies", cookies.userEmail);

  async function handleCreateBudget() {
    setBudgetIsLoading(true);
    const { response, error } = await CreateBudget(userId, totalBudget);

    if (response) {
      console.log("response", response);
      setBudgetData(response.data);
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

  console.log("totalBudget", totalBudget);
  console.log("budgetData", budgetData);

  useEffect(() => {
    handleGetBudget();
  }, []);

  return (
    <Layout>
      <>
        {/* <Input
          onChange={(e) => {
            setTotalBudget(e.target.value);
          }}
        /> */}
        {budgetIsLoading ? (
          <Flex
            align="center"
            justify="center"
            gap="1rem"
            direction="column"
            bgColor="rgba( 255, 255, 255, 0.2 )"
            backdropBlur="xl"
            borderRadius="10px"
            p="4rem"
            h="full"
          >
            <Spinner />
          </Flex>
        ) : (
          <>
            {budgetData ? (
              <Flex w="full" h="full" direction="column" gap="1rem">
                <Flex align="end" gap="1rem">
                  <Flex align="start" direction="column">
                    <Text fontSize="14px" fontWeight="bold">
                      Orçamento Mensal
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
                        R${monthlyBudget}
                      </Text>
                    </Flex>
                  </Flex>
                  <Flex align="start" direction="column">
                    <Text fontSize="14px" fontWeight="bold">
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
                <Flex justify="center" w="full">
                  <Grid templateColumns="repeat(3, 1fr)" gap={6} w="full">
                    {budgetData &&
                      budgetData.weeks.map((week: any, index: number) => (
                        <GridItem
                          key={index}
                          px="1rem"
                          py="0.5rem"
                          w="420px"
                          h="480px"
                          bg="blue.500"
                          bgColor="rgba( 255, 255, 255, 0.40 )"
                          backdropBlur="xl"
                          borderRadius="10px"
                        >
                          <Flex w="full" direction="column" gap="2rem">
                            <Flex align="center" w="100%" gap="2rem">
                              <Img
                                src="/icons/calendarIcon.svg"
                                alt="calendario"
                                h="35px"
                              />
                              <Flex direction="column" w="full">
                                <Text fontWeight="bold" fontSize="16px">
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
                              <Flex
                                bgColor="white"
                                p="0.5rem"
                                borderRadius="15px"
                                alignSelf="end"
                                justify="center"
                              >
                                {" "}
                                <Text fontWeight="bold" fontSize="13px">
                                  {week.remainingBudget}
                                </Text>
                              </Flex>
                            </Flex>

                            {week.expenses.map((exp: any, index: any) => (
                              <Flex
                                key={index}
                                align="center"
                                w="full"
                                bgColor="white"
                                p="1rem"
                                borderRadius="15px"
                                justify="space-between"
                              >
                                <Text fontWeight="bold">{exp.description}</Text>
                                <Text fontWeight="bold" color="gray.main">
                                  {exp.expenseDate}
                                </Text>
                                <Text fontWeight="bold">R${exp.value}</Text>
                              </Flex>
                            ))}
                          </Flex>
                        </GridItem>
                      ))}
                  </Grid>
                </Flex>
              </Flex>
            ) : (
              <Flex align="center" justify="center" w="full" h="full">
                <Flex
                  align="center"
                  justify="center"
                  gap="1rem"
                  direction="column"
                  bgColor="rgba( 255, 255, 255, 0.2 )"
                  backdropBlur="xl"
                  borderRadius="10px"
                  p="4rem"
                >
                  <Text fontSize="26px" fontWeight="bold">
                    Começando no Weekly.
                  </Text>
                  <Text
                    fontSize="18px"
                    w="500px"
                    align="center"
                    fontWeight="bold"
                    color="gray.main"
                  >
                    Para começar a gerenciar seu dinheiro de maneira mais
                    inteligente, clique no botão abaixo
                  </Text>
                  <Button
                    onClick={() => {
                      handleCreateBudget();
                    }}
                    variant="primary"
                    fontWeight="bold"
                    boxShadow="0 2px 10px #4871CC"
                  >
                    Criar meu orçamento{" "}
                  </Button>
                </Flex>
              </Flex>
            )}
          </>
        )}
      </>
    </Layout>
  );
}
