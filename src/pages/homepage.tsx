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
} from "@chakra-ui/react";

import LayoutMob from "../components/Layouts/layoutMobile";
import LayoutDesk from "../components/Layouts/layoutDesktop";
import { GiPayMoney, GiReceiveMoney } from "react-icons/gi";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { BsPencilSquare, BsStack } from "react-icons/bs";
import { TfiStatsDown, TfiStatsUp, TfiClipboard } from "react-icons/tfi";
import { GoTriangleDown, GoTriangleUp } from "react-icons/go";
import { useAuth } from "../contexts/AuthContext";

// import { Chart, ArcElement } from "chart.js";

// import { Doughnut } from "react-chartjs-2";

// Chart.register(ArcElement);

// import navStyles from "../components/mainNavBar/navBar.module.css";

export default function Home() {
  const { isOpen: isOpenIncome, onToggle: onToggleIncome } = useDisclosure();
  const { isOpen: isOpenExpense, onToggle: onToggleExpense } = useDisclosure();
  const { isOpen: isOpenTotal, onToggle: onToggleTotal } = useDisclosure();

  const [teste, setTeste] = useState(300);

  const isWideVersion = useBreakpointValue({
    base: true,
    sm: true,
    md: false,
    lg: false,
  });

  const data = {
    labels: ["Red", "Blue", "Yellow"],
    datasets: [
      {
        label: "My First Dataset",
        data: [300, teste, 100],
        backgroundColor: [
          "rgb(255, 99, 132)",
          "rgb(54, 162, 235)",
          "rgb(255, 205, 86)",
        ],
        hoverBorderColor: "red",
        cutout: 15,

        hoverOffset: 4,
      },
    ],
  };

  const Income = [
    {
      Nome: "Salário",
      Tipo: "Fixo",
      Valor: "R$ 1200,00",
    },
    {
      Nome: "Mesada",
      Tipo: "Variavel",
      Valor: "R$ 500,00",
    },
    {
      Nome: "Roubo",
      Tipo: "Variavel",
      Valor: "R$ 200,00",
    },
  ];
  const Expense = [
    {
      Nome: "Café sem graça",
      Tipo: "Variavel",
      Valor: "R$ 15,00",
    },
    {
      Nome: "Carro",
      Tipo: "Parcela - 1/12",
      Valor: "R$ 1200,00",
    },
    {
      Nome: "Luz",
      Tipo: "Fixo",
      Valor: "R$ 100,00",
    },
  ];

  return (
    <>
      {isWideVersion ? (
        <>
          <LayoutMob>
            {/* <div class="embla">
            <div class="embla__container">
              <div class="embla__slide">Slide 1</div>
              <div class="embla__slide">Slide 2</div>
              <div class="embla__slide">Slide 3</div>
            </div>
          </div> */}
            {/* <Flex w="60px" h="100px">
            <Doughnut data={data} />
          </Flex> */}
            <Flex direction="column" py="1rem" w="full" h="full">
              <Tabs variant="unstyled" w="full" align="center">
                <TabList>
                  <Tab
                    _selected={{
                      color: "white",
                      bg: "#011735",
                      borderRadius: "10px",
                    }}
                  >
                    <Flex color="white">Rendas</Flex>
                  </Tab>
                  <Tab
                    _selected={{
                      color: "white",
                      bg: "#011735",
                      borderRadius: "10px",
                    }}
                  >
                    <Flex color="white">Despesas</Flex>
                  </Tab>
                  <Tab
                    _selected={{
                      color: "white",
                      bg: "#011735",
                      borderRadius: "10px",
                    }}
                  >
                    <Flex color="white">Totais</Flex>
                  </Tab>
                </TabList>

                <TabPanels>
                  <TabPanel>
                    {Income &&
                      Income.map((value, index) => (
                        <Flex
                          key={index}
                          as="button"
                          h="50px"
                          w="full"
                          bgColor="#011735"
                          align="center"
                          p="1rem"
                          borderRadius="10px"
                          mb="0.5rem"
                        >
                          <GoTriangleUp size="30px" color="green" />

                          <Flex
                            ml="1rem"
                            w="full"
                            direction="column"
                            align="start"
                            justify="space-between"
                          >
                            <Text
                              fontSize="11px"
                              color="#B6B6B9"
                              fontWeight="bold"
                            >
                              Hoje - {value.Tipo}
                            </Text>
                            <Text
                              color="white"
                              fontSize="14px"
                              fontWeight="bold"
                            >
                              {value.Nome}
                            </Text>
                          </Flex>
                          <Text
                            fontSize="14px"
                            color="green"
                            fontWeight="bold"
                            w="full"
                          >
                            {value.Valor}
                          </Text>
                        </Flex>
                      ))}
                  </TabPanel>

                  <TabPanel>
                    {Expense &&
                      Expense.map((value, index) => (
                        <Flex
                          key={index}
                          as="button"
                          h="50px"
                          w="full"
                          bgColor="#011735"
                          align="center"
                          p="1rem"
                          borderRadius="10px"
                          mb="0.5rem"
                        >
                          <GoTriangleDown size="25px" color="red" />

                          <Flex
                            ml="1rem"
                            w="full"
                            direction="column"
                            align="start"
                            justify="space-between"
                          >
                            <Text
                              fontSize="11px"
                              color="#B6B6B9"
                              fontWeight="bold"
                            >
                              {value.Tipo}
                            </Text>
                            <Text
                              color="white"
                              fontSize="14px"
                              fontWeight="bold"
                            >
                              {value.Nome}
                            </Text>
                          </Flex>
                          <Text
                            fontSize="14px"
                            color="red"
                            fontWeight="bold"
                            w="full"
                          >
                            {value.Valor}
                          </Text>
                        </Flex>
                      ))}
                  </TabPanel>
                </TabPanels>
              </Tabs>
            </Flex>
          </LayoutMob>
        </>
      ) : (
        <LayoutDesk>
          AQUI SERÁ O DESKTOP
          {/* <Flex direction="column">
            <Button w="100%" mb="2rem" color="red" onClick={onToggle}>
              DESPESAS VARIAVEIS
            </Button>
            <Collapse in={isOpen} animateOpacity>
              <Flex mb="1rem" justify="space-between" w="100%">
                <Text mr="1rem">Conta de luz</Text>
                <Text>R$ 150,00</Text>
              </Flex>
              <Flex mb="1rem" justify="space-between" w="100%">
                <Text mr="1rem">Conta de agua</Text>
                <Text>R$ 80,00</Text>
              </Flex>
            </Collapse>
            <Button w="100%" color="green">
              DESPESAS FIXAS
            </Button>
          </Flex> */}
        </LayoutDesk>
      )}
    </>
  );
}
