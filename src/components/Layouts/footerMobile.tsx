import { Flex, Button, Text } from "@chakra-ui/react";

export default function Footer() {
  return (
    <Flex align="end" h="full">
      <Flex justify="space-around" w="full" align="end">
        <Flex direction="column" align="center">
          <Text>R$1200</Text>
          <Text>Débito</Text>
        </Flex>
        <Flex direction="column" align="center">
          <Text>R$1200,00</Text>
          <Button borderRadius="20px" size="lg">
            +
          </Button>
        </Flex>
        <Flex direction="column" align="center">
          <Text>R$1200</Text>
          <Text>Credito</Text>
        </Flex>
      </Flex>
    </Flex>
  );
}
