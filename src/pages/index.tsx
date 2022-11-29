import {
  Flex,
  Button,
  Text,
  useBreakpointValue,
  Input,
  InputGroup,
  InputLeftAddon,
  InputLeftElement,
  InputRightElement,
  Stack,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import LayoutDesk from "../components/Layouts/layoutDesktop";
// @ts-ignore
import Lottie from "react-lottie";
import animationData from "../animations/login.json";

import { AiOutlineUser, AiOutlineEyeInvisible } from "react-icons/ai";
import { BsShieldLock } from "react-icons/bs";

export default function HomeLogin() {
  const Router = useRouter();

  const isWideVersion = useBreakpointValue({
    base: true,
    sm: true,
    md: false,
    lg: false,
  });

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <>
      {isWideVersion ? (
        <>
          <Flex
            bgColor="#011735"
            minHeight="100vh"
            direction="column"
            p="1rem"
            justify="center"
          >
            <Flex
              justify="center"
              // data-aos="fade-up"
              bgColor="#021C45"
              borderRadius="10px"
              direction="column"
              minHeight="full"
              // bgRepeat="no-repeat"
              // bgAttachment="fixed"
              // bgPosition="center"
              // bgBlendMode="soft-light"
              // bgImage="url(/Image/piggy1.png)"
            >
              {/* <Flex> {props.children}</Flex> */}
              {/* <NavBar /> */}

              <Flex direction="column" align="center" p="1rem">
                <Lottie options={defaultOptions} />
                <Text
                  mt="2rem"
                  fontSize="24px"
                  color="white"
                  fontWeight="bold"
                  textAlign="center"
                >
                  Bem-vindo ao
                  <br /> Seu Controle de Gastos
                </Text>

                <InputGroup mt="2rem" w="80%" variant="solid" size="md">
                  <InputLeftElement>
                    <AiOutlineUser color="gray.300" />
                  </InputLeftElement>
                  <Input placeholder="Digite seu email." />
                </InputGroup>
                <InputGroup w="80%" variant="solid" size="md" mt="1rem">
                  <InputLeftElement>
                    <BsShieldLock color="gray.300" />
                  </InputLeftElement>
                  <Input placeholder="Digite sua senha." variant="solid" />
                </InputGroup>

                <Flex justify="space-evenly" w="full" mt="1rem">
                  {/* <Button mt="1rem" size="sm" w="100px">
                    Cadastre-se
                  </Button> */}
                  <Button
                    mt="1rem"
                    borderRadius="10px"
                    // bgColor="#011735"
                    variant="outline"
                    color="white"
                    w="125px"
                  >
                    Cadastre-se
                  </Button>
                  <Button
                    mt="1rem"
                    borderRadius="10px"
                    // bgColor="#011735"
                    variant="outline"
                    color="white"
                    w="125px"
                  >
                    Entrar
                  </Button>
                </Flex>
              </Flex>
            </Flex>
          </Flex>
          {/* <LayoutMob></LayoutMob> */}
        </>
      ) : (
        <LayoutDesk>
          AQUI SERÁ O DESKTOP
          {/* <Flex direction="column">
            <Button w="100%" mb="2rem" color="red" onClick={onToggle}>
              DESPESAS VARIAVEIS
            </Button>
            <Collapse in={isOpen} animateOpacity>
              <Flex mb="1rem" justify="space-between" w="100%">
                <Text mr="1rem">Conta de luz</Text>
                <Text>R$ 150,00</Text>
              </Flex>
              <Flex mb="1rem" justify="space-between" w="100%">
                <Text mr="1rem">Conta de agua</Text>
                <Text>R$ 80,00</Text>
              </Flex>
            </Collapse>
            <Button w="100%" color="green">
              DESPESAS FIXAS
            </Button>
          </Flex> */}
        </LayoutDesk>
      )}
    </>
  );
}
