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
// import navStyles from "../components/mainNavBar/navBar.module.css";

export default function Home() {
  const { isOpen: isOpenIncome, onToggle: onToggleIncome } = useDisclosure();
  const { isOpen: isOpenExpense, onToggle: onToggleExpense } = useDisclosure();
  const { isOpen: isOpenTotal, onToggle: onToggleTotal } = useDisclosure();

  const isWideVersion = useBreakpointValue({
    base: true,
    sm: true,
    md: false,
    lg: false,
  });

  const Income = [
    {
      Nome: "Salário",
      Tipo: "Fixo",
      Valor: "R$ 1200,00",
    },
    {
      Nome: "Vendas",
      Tipo: "Variavel",
      Valor: "R$ 1200,00",
    },
  ];

  return (
    <>
      {isWideVersion ? (
        <LayoutMob>
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
              {Income &&
                Income.map((value, index) => (
                  <TabPanels key={index}>
                    <TabPanel>
                      <Flex
                        as="button"
                        h="50px"
                        w="full"
                        bgColor="#011735"
                        align="center"
                        p="1rem"
                        borderRadius="10px"
                      >
                        <GoTriangleUp size="25px" color="green" />

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
                          <Text color="white" fontSize="14px" fontWeight="bold">
                            {value.Nome}
                          </Text>
                        </Flex>
                        <Text fontSize="14px" color="green" fontWeight="bold">
                          {value.Valor}
                        </Text>
                      </Flex>
                    </TabPanel>

                    <TabPanel>
                      <Flex
                        as="button"
                        h="50px"
                        w="full"
                        bgColor="#011735"
                        align="center"
                        p="1rem"
                        borderRadius="10px"
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
                            Ontem
                          </Text>
                          <Text color="white" fontSize="14px" fontWeight="bold">
                            Mercadinho da esquina
                          </Text>
                        </Flex>
                        <Text fontSize="14px" color="red" fontWeight="bold">
                          R$15,00
                        </Text>
                      </Flex>
                    </TabPanel>
                  </TabPanels>
                ))}
            </Tabs>
          </Flex>
        </LayoutMob>
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
