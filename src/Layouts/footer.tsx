import { Button, Flex, IconButton, Text, Img } from "@chakra-ui/react";
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
      bgColor="rgba( 255, 255, 255, 0.70 )"
      backdropBlur="xl"
      position="fixed"
      bottom="2"
      // left="50%"
      w="160px"
      h="75px"
      right="28%"
      // align="start"
      zIndex={99}
      p="0.5rem"
      borderRadius="full"
      // justify="center"
      // justifyContent={"space-evenly"}
    >
      <Flex h="full" w="full" justify="space-between">
        <IconButton
          borderRadius="full"
          w="60px"
          h="60px"
          bgColor="gray.400"
          onClick={() => {
            Router.push("/expenses");
          }}
          // variant="primary"
          aria-label="Search database"
          icon={<Img src="icons/weekly1.svg" w="40px" />}
        />
        {/* <Button borderRadius="full" w="60px" h="60px" variant="primary">
          oi
        </Button> */}
        <IconButton
          borderRadius="full"
          w="60px"
          h="60px"
          bgColor="gray.400"
          aria-label="Search database"
          icon={<Img src="icons/weekly2.svg" w="40px" />}
          onClick={() => {
            Router.push("/homepage");
          }}
        />
        {/* <Button borderRadius="full" w="60px" h="60px" variant="primary">
          oi
        </Button> */}
      </Flex>
      {/* <Flex
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
        variant="unstyled"
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
      </Flex> */}

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
