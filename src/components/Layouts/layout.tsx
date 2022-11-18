import { Flex } from "@chakra-ui/react";

const batata = "testando";

export default function layout(props: any) {
  return (
    <Flex maxWidth="1200px" h="750px" p="2rem">
      {props.children}
    </Flex>
  );
}
