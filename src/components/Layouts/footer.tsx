import { Flex, Button, Text } from "@chakra-ui/react";

export default function Footer() {
  return (
    <Flex
      borderTopWidth="2px"
      justify="space-around"
      w="full"
      zIndex={1}
      position="fixed"
      bottom="0"
      align="center"
      p="1.5rem"
      fontSize="16px"
    >
      <Flex direction="column" align="center">
        <Text color="white">R$1200</Text>
        <Text color="white">Débito</Text>
      </Flex>
      <Button
        borderRadius="20px"
        size="md"
        position="fixed"
        bottom="20"
        bgColor="#272A2E"
        color="white"
      >
        +
      </Button>
      <Flex direction="column" align="center">
        <Text color="white">R$1200,00</Text>
        <Text color="white">Total</Text>
      </Flex>

      <Flex direction="column" align="center">
        <Text color="white">R$1200</Text>
        <Text color="white">Credito</Text>
      </Flex>
    </Flex>
  );
}
