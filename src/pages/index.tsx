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
  Image,
  useToast,
  useDisclosure,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import LayoutDesk from "../components/Layouts/layoutDesktop";
// import Lottie from "react-lottie";
import animationData from "../animations/login.json";

import { AiOutlineUser, AiOutlineEyeInvisible } from "react-icons/ai";
import { BsShieldLock } from "react-icons/bs";
import { useAuth } from "../contexts/AuthContext";
import { useState } from "react";
import SignUpPage from "../components/SignUp";

export default function HomeLogin() {
  const Router = useRouter();
  const { signInEmailPassword } = useAuth();

  // const { createUserWithEmailAndPassword } = useAuth();
  const toast = useToast({
    duration: 5000,
    isClosable: true,
  });
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>();
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

  // async function createNewUser(newemail: string, newpasword: string) {
  //   const response = await createUserWithEmailAndPassword(
  //     newemail,
  //     newpassword
  //   );
  // }

  // async function submitLogin(email: string, password: string) {
  //   setIsLoading(true);
  //   if (email == "" || null) {
  //     toast.closeAll();
  //     toast({
  //       title: "Verifique o e-mail",
  //       description: "O campo de e-mail esta vazio.",
  //       status: "error",
  //     });
  //     setIsLoading(false);
  //   } else if (password == "" || null) {
  //     toast.closeAll();
  //     toast({
  //       title: "Verifique a senha.",
  //       description: "O campo de senha esta vazio.",
  //       status: "error",
  //     });
  //     setIsLoading(false);
  //   } else {
  //     const response = await signInEmailPassword(email, password);
  //     if (response !== undefined) {
  //       toast.closeAll();
  //       toast({
  //         title: "Dados inválidos",
  //         description: "Email ou senha incorretos",
  //         status: "error",
  //       });
  //     } else {
  //       toast.closeAll();
  //       localStorage.setItem("email", email);
  //       toast({
  //         title: "Login realizado com sucesso",
  //         description: "Bem-vindo à Dashboard da Pneufree!",
  //         status: "success",
  //       });
  //     }
  //     setIsLoading(false);
  //   }
  // }
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      {isWideVersion ? (
        <>
          <SignUpPage isOpen={isOpen} onClose={onClose} />
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
                {/* <Lottie options={defaultOptions} /> */}
                <Image src="/Image/bgimagelogin.gif" alt="" />
                <Text
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
                  <Input placeholder="Digite sua senha. " variant="solid" />
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
                    onClick={onOpen}
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
