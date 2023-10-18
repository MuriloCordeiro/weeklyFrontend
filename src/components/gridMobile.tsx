import { Box, Flex, Grid, GridItem, IconButton, Text } from "@chakra-ui/react";
import { expensesTypes } from "../types/typeExpenses";
import MainFooter from "../Layouts/footer";
import formatData from "../utils/formatData";
import { HiOutlinePencilAlt } from "react-icons/hi";
import { AiFillDelete } from "react-icons/ai";

type expensesType = {
  expenses: expensesTypes[];
};

export default function GridMobile({ expenses }: expensesType) {
  return (
    <>
      {expenses &&
        expenses?.map((exp, index) => (
          <Flex
            mb="4rem"
            key={index}
            boxShadow="5px 1px 16px -3px rgba(0, 0, 0, 0.25)"
            bgColor="rgba( 255, 255, 255, 0.40 )"
            backdropBlur="xl"
            borderRadius="10px"
            w="full"
            h="full"
            gap="2rem"
          >
            <Grid
              w="full"
              p="2rem"
              templateColumns={[
                "repeat(2, 1fr)",
                "repeat(3, 1fr)",
                "repeat(5, 1fr)",
                "repeat(5, 1fr)",
                "repeat(1, 2fr)",
              ]}
              gap={"1rem"}
              fontSize="15px"
            >
              <GridItem bgColor="#EDF2F7" p="0.5rem" borderRadius="5px">
                <Text mr="0.5rem" fontWeight="semibold" color="gray.500">
                  Titulo:
                </Text>
                <Text fontWeight="bold">{exp.title}</Text>
              </GridItem>
              <GridItem bgColor="#EDF2F7" p="0.5rem" borderRadius="5px">
                <Text mr="0.5rem" fontWeight="semibold" color="gray.500">
                  Valor:
                </Text>
                <Text fontWeight="bold">{exp.value}</Text>
              </GridItem>
              <GridItem bgColor="#EDF2F7" p="0.5rem" borderRadius="5px">
                <Text fontWeight="semibold" color="gray.500">
                  Descrição:
                </Text>
                <Text fontWeight="bold">{exp.description}</Text>
              </GridItem>
              <GridItem bgColor="#EDF2F7" p="0.5rem" borderRadius="5px">
                <Text mr="0.5rem" fontWeight="semibold" color="gray.500">
                  Data criação:
                </Text>
                <Text fontWeight="bold">
                  {formatData(String(exp.createdAt))}
                </Text>
              </GridItem>
              <GridItem
                fontSize="15px"
                bgColor="#EDF2F7"
                w="full"
                p="0.5rem"
                borderRadius="5px"
              >
                <Text mr="0.5rem" fontWeight="semibold" color="gray.500">
                  Data fim:
                </Text>
                <Text fontWeight="bold">{formatData(String(exp.endDate))}</Text>
              </GridItem>
              <GridItem bgColor="#EDF2F7" p="0.5rem" borderRadius="5px">
                <Text mr="0.5rem" fontWeight="semibold" color="gray.500">
                  Parcelas :
                </Text>
                <Text fontWeight="bold">{exp.installments}</Text>
              </GridItem>
              <GridItem justifySelf={"center"}>
                <Flex w="2px" variant="ghost" as={IconButton} color="blue">
                  <HiOutlinePencilAlt size="25" />
                </Flex>
              </GridItem>
              <GridItem justifySelf={"center"}>
                <Flex
                  variant="ghost"
                  as={IconButton}
                  color="red"
                  justify={"center"}
                >
                  <AiFillDelete size="25" />
                </Flex>
              </GridItem>
            </Grid>
          </Flex>
        ))}
    </>
  );
}
