import { Button, Flex, IconButton, Text } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { FaPlus } from "react-icons/fa";

type footerType = {
  AddButton: any;
};

export default function MainFooter({ AddButton }: footerType) {
  const { asPath } = useRouter();
  const Router = useRouter();
  return (
    <Flex
      boxShadow="5px 1px 16px -3px rgba(0, 0, 0, 0.25)"
      bgColor="white"
      backdropBlur="xl"
      borderRadius="10px"
      position="fixed"
      h="80px"
      bottom="0"
      w="full"
      zIndex={99}
      p="1rem"
      justify="center"
      justifyContent={"space-evenly"}
    >
      <Flex
        direction="column"
        align="center"
        justify="center"
        as={Button}
        variant="unystled"
        transform={asPath.includes("/expenses") ? "scale(1.08)" : ""}
      >
        <Text
          h="30px"
          color={asPath.includes("/expenses") ? "blue.action" : "#423E3F"}
        />
        <Flex
          color={asPath.includes("/expenses") ? "blue.action" : "#423E3F"}
          direction="column"
          onClick={() => {
            Router.push("/expenses");
          }}
        >
          <Text>Despesas</Text>
        </Flex>
      </Flex>

      <Flex
        direction="column"
        align="center"
        justify="center"
        as={Button}
        variant="unystled"
        transform={asPath.includes("/homepage") ? "scale(1.08)" : ""}
      >
        <Text
          h="30px"
          color={asPath.includes("/homepage") ? "#blue.action" : "#423E3F"}
        />
        <Flex
          color={asPath.includes("/homepage") ? "blue.action" : "#423E3F"}
          direction="column"
          // variant="unystled"
          onClick={() => {
            Router.push("/homepage");
          }}
        >
          <Text>Weekly</Text>
        </Flex>
      </Flex>

      {/* <Flex
        direction="column"
        align="center"
        justify="center"
        as={Button}
        variant="unystled"
        transform={asPath.includes("/pedido") ? "scale(1.08)" : ""}
      >
        <Text
          h="30px"
          color={asPath.includes("/pedido") ? "#005F27" : "#423E3F"}
        />
        <Flex
          color={asPath.includes("/pedido") ? "#005F27" : "#423E3F"}
          direction="column"
          onClick={() => {
            Router.push("/pedido/buscar");
          }}
        >
          <Text>Pedidos</Text>
        </Flex>
      </Flex> */}
    </Flex>
  );
}
