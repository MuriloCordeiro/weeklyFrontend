import { Button, Flex, Text } from "@chakra-ui/react";
import "aos/dist/aos.css";

export default function SideBar() {
  return (
    <Flex
      display={["none", "none", "none", "none", "none", "flex"]}
      bgColor="rgba( 255, 255, 255, 0.9 )"
      boxShadow="5px 1px 16px -3px rgba(0, 0, 0, 0.25)"
      backdropBlur="xl"
      w="300px"
      align="center"
      justify="space-between"
      direction="column"
      h="full"
      py="1rem"
      px="1rem"
    >
      <Flex direction="column" w="full" align="center">
        <Text fontSize="24px" fontWeight="bold" color="blue.main">
          Weekly.
        </Text>
        <Flex mt="8rem" w="full">
          <Button variant="primary" w="full">
            Weekly
          </Button>
        </Flex>
      </Flex>
      <Flex>SAIR</Flex>
    </Flex>
  );
}
