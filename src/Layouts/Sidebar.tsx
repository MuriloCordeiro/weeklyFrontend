import { Button, Flex, Text } from "@chakra-ui/react";
import "aos/dist/aos.css";
import { useRouter } from "next/router";

export default function SideBar() {
  const router = useRouter();

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
        <Flex mt="8rem" w="full" direction="column" gap="2rem">
          <Button
            onClick={() => {
              router.push("/expenses");
            }}
            variant={router.asPath === "/expenses" ? "primary" : "secundary"}
            w="full"
          >
            Expenses
          </Button>
          <Button
            onClick={() => {
              router.push("/homepage");
            }}
            variant={router.asPath === "/homepage" ? "primary" : "secundary"}
            w="full"
          >
            Weekly
          </Button>
        </Flex>
      </Flex>
      <Flex>SAIR</Flex>
    </Flex>
  );
}
