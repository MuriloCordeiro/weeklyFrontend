import { Flex, Button } from "@chakra-ui/react";
import Layout from "../components/Layouts/layout";

export default function Home() {
  return (
    <>
      <Layout>
        <Flex direction="column" align="center" w="full">
          <Button w="100%">DESPESAS VARIÁVEIS</Button>
          <Button>DESPESAS VARIÁVEIS</Button>
        </Flex>
      </Layout>
    </>
  );
}
