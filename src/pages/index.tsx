import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { Flex, Button } from "@chakra-ui/react";
import { useRouter } from "next/router";

const batata = "testando";

export default function HomeLogin() {
  const Router = useRouter();
  return (
    <>
      <Flex justify="center" h="full">
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
