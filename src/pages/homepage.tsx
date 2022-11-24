import {
  Flex,
  Button,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverFooter,
  PopoverArrow,
  PopoverCloseButton,
  PopoverAnchor,
  Fade,
  ScaleFade,
  Slide,
  SlideFade,
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
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Stat,
  StatLabel,
  StatNumber,
  StatHelpText,
  StatArrow,
  StatGroup,
} from "@chakra-ui/react";
import Footer from "../components/mainNavBar/navBar";
import LayoutMob from "../components/Layouts/layoutMobile";
import LayoutDesk from "../components/Layouts/layoutDesktop";
import { GiPayMoney, GiReceiveMoney } from "react-icons/gi";
import { IoIosArrowDown } from "react-icons/io";
import { BsStack } from "react-icons/bs";
import { TfiStatsDown, TfiStatsUp, TfiClipboard } from "react-icons/tfi";
import NavBar from "../components/mainNavBar/navBar";
// import navStyles from "../components/mainNavBar/navBar.module.css";

export default function Home() {
  const { isOpen: isOpenExpense, onToggle: onToggleExpense } = useDisclosure();
  const { isOpen: isOpenIncome, onToggle: onToggleIncome } = useDisclosure();
  const { isOpen: isOpenTotal, onToggle: onToggleTotal } = useDisclosure();

  const isWideVersion = useBreakpointValue({
    base: true,
    sm: true,
    md: false,
    lg: false,
  });
  return (
    <>
      {isWideVersion ? (
        <LayoutMob>
          <Flex direction="column" p="1rem" w="full" h="full">
            <Text
              align="center"
              fontSize="18px"
              fontWeight="bold"
              color="white"
              mb="1rem"
            >
              CARTEIRA 1
            </Text>
            {/* AQUI É OS GASTOS */}
            <Button
              alignItems="center"
              size="lg"
              borderRadius="6px"
              w="100%"
              h="40px"
              colorScheme="white"
              bgColor="#24293D"
              onClick={onToggleIncome}
              leftIcon={<TfiStatsUp />}
              rightIcon={<IoIosArrowDown />}
              mb="1rem"
            >
              <Text mr="full" ml="full" fontWeight="medium" w="full">
                Rendas
              </Text>
            </Button>
            <Collapse in={isOpenIncome} animateOpacity>
              <Flex
                direction="column"
                color="white"
                bgColor="#24293D"
                borderRadius="6px"
                mb="1rem"
                w="full"
                p="1rem"
              >
                <TableContainer>
                  <Table variant="unstyled" size="xsm">
                    {/* <TableCaption>Imperial to metric conversion factors</TableCaption> */}
                    <Thead>
                      <Tr>
                        <Th>
                          <Text
                            align="center"
                            fontSize="14px"
                            fontWeight="medium"
                          >
                            Nome
                          </Text>
                        </Th>
                        <Th>
                          <Text
                            align="center"
                            fontWeight="medium"
                            fontSize="14px"
                          >
                            Parcela
                          </Text>
                        </Th>
                        <Th>
                          <Text
                            align="center"
                            fontWeight="medium"
                            fontSize="14px"
                          >
                            Valor
                          </Text>
                        </Th>
                      </Tr>
                    </Thead>
                    <Tbody>
                      <Tr>
                        <Td>
                          <Text
                            fontWeight="bold"
                            align="center"
                            bgColor="#D9D9D9"
                            borderRadius="10px"
                            fontSize="14px"
                            p="2px"
                            color="#24293D"
                          >
                            Salário
                          </Text>
                        </Td>
                        <Td>
                          <Text
                            fontWeight="bold"
                            align="center"
                            bgColor="#D9D9D9"
                            p="2px"
                            borderRadius="10px"
                            color="#24293D"
                            fontSize="14px"
                          >
                            vazio
                          </Text>
                        </Td>
                        <Td>
                          <Text
                            fontWeight="bold"
                            align="center"
                            bgColor="#D9D9D9"
                            p="2px"
                            borderRadius="10px"
                            color="#24293D"
                            fontSize="14px"
                          >
                            R$ 1.200,00
                          </Text>
                        </Td>
                      </Tr>
                    </Tbody>
                  </Table>
                </TableContainer>
              </Flex>
            </Collapse>
            {/* AQUI É AS RENDA */}
            <Button
              alignItems="center"
              size="lg"
              borderRadius="6px"
              w="100%"
              h="40px"
              colorScheme="white"
              bgColor="#24293D"
              onClick={onToggleExpense}
              mb="1rem"
              leftIcon={<TfiStatsDown />}
              rightIcon={<IoIosArrowDown />}
            >
              <Text mr="full" ml="full" fontWeight="medium" w="full">
                Despesas
              </Text>
            </Button>
            <Collapse in={isOpenExpense} animateOpacity>
              <Flex
                direction="column"
                color="white"
                bgColor="#24293D"
                borderRadius="6px"
                mb="1rem"
                w="full"
                p="1rem"
              >
                <TableContainer>
                  <Table variant="unstyled" size="xsm">
                    {/* <TableCaption>Imperial to metric conversion factors</TableCaption> */}
                    <Thead>
                      <Tr>
                        <Th>
                          <Text
                            align="center"
                            fontSize="14px"
                            fontWeight="medium"
                          >
                            Nome
                          </Text>
                        </Th>
                        <Th>
                          <Text
                            align="center"
                            fontWeight="medium"
                            fontSize="14px"
                          >
                            Parcela
                          </Text>
                        </Th>
                        <Th>
                          <Text
                            align="center"
                            fontWeight="medium"
                            fontSize="14px"
                          >
                            Valor
                          </Text>
                        </Th>
                      </Tr>
                    </Thead>
                    <Tbody>
                      <Tr>
                        <Td>
                          <Text
                            fontWeight="bold"
                            align="center"
                            bgColor="#D9D9D9"
                            borderRadius="10px"
                            fontSize="14px"
                            p="2px"
                            color="#24293D"
                          >
                            Conta de água
                          </Text>
                        </Td>
                        <Td>
                          <Text
                            fontWeight="bold"
                            align="center"
                            bgColor="#D9D9D9"
                            p="2px"
                            borderRadius="10px"
                            color="#24293D"
                            fontSize="14px"
                          >
                            1/12
                          </Text>
                        </Td>
                        <Td>
                          <Text
                            fontWeight="bold"
                            align="center"
                            bgColor="#D9D9D9"
                            p="2px"
                            borderRadius="10px"
                            color="#24293D"
                            fontSize="14px"
                          >
                            R$ 800,00
                          </Text>
                        </Td>
                      </Tr>
                    </Tbody>
                  </Table>
                </TableContainer>
              </Flex>
            </Collapse>
            {/* AQUI É OS TOTAIS */}
            <Button
              alignItems="center"
              size="lg"
              borderRadius="6px"
              w="100%"
              h="40px"
              colorScheme="white"
              bgColor="#24293D"
              onClick={onToggleTotal}
              mb="1rem"
              leftIcon={<TfiClipboard />}
              rightIcon={<IoIosArrowDown />}
            >
              <Text mr="full" ml="full" fontWeight="medium" w="full">
                Totais
              </Text>
            </Button>
            <Collapse in={isOpenTotal} animateOpacity>
              <Flex
                direction="column"
                color="white"
                bgColor="#24293D"
                borderRadius="6px"
                mb="1rem"
                w="full"
                p="1rem"
              >
                <TableContainer>
                  <Table variant="unstyled" size="xsm">
                    {/* <TableCaption>Imperial to metric conversion factors</TableCaption> */}
                    <Thead>
                      <Tr>
                        <Th>
                          <Text
                            align="center"
                            fontSize="14px"
                            fontWeight="medium"
                          >
                            Nome
                          </Text>
                        </Th>
                        <Th>
                          <Text
                            align="center"
                            fontWeight="medium"
                            fontSize="14px"
                          >
                            Parcela
                          </Text>
                        </Th>
                        <Th>
                          <Text
                            align="center"
                            fontWeight="medium"
                            fontSize="14px"
                          >
                            Valor
                          </Text>
                        </Th>
                      </Tr>
                    </Thead>
                    <Tbody>
                      <Tr>
                        <Td>
                          <Text
                            fontWeight="bold"
                            align="center"
                            bgColor="#D9D9D9"
                            borderRadius="10px"
                            fontSize="14px"
                            p="2px"
                            color="#24293D"
                          >
                            Conta de água
                          </Text>
                        </Td>
                        <Td>
                          <Text
                            fontWeight="bold"
                            align="center"
                            bgColor="#D9D9D9"
                            p="2px"
                            borderRadius="10px"
                            color="#24293D"
                            fontSize="14px"
                          >
                            1/12
                          </Text>
                        </Td>
                        <Td>
                          <Text
                            fontWeight="bold"
                            align="center"
                            bgColor="#D9D9D9"
                            p="2px"
                            borderRadius="10px"
                            color="#24293D"
                            fontSize="14px"
                          >
                            R$ 800,00
                          </Text>
                        </Td>
                      </Tr>
                    </Tbody>
                  </Table>
                </TableContainer>
              </Flex>
            </Collapse>
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
