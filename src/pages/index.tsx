import Head from "next/head";
import styles from "../styles/Home.module.css";
import { Flex, Button, Image, Box } from "@chakra-ui/react";
import { useRouter } from "next/router";

const batata = "testando";

export default function HomeLogin() {
  const Router = useRouter();
  return (
    <>
      <Box />
      <Flex
        bgImage="url(/Image/mosaic2.jpg)"
        bgPosition="center"
        bgRepeat="no-repeat"
        justify="center"
      >
        Aqui vai ser o login
        <Button
          onClick={() => {
            Router.push("/homepage");
          }}
        >
          Ir para a tela de home
        </Button>
      </Flex>
    </>
  );
}
