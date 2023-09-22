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
  Toast,
  IconButton,
  Icon,
  Box,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import LayoutDesk from "../Layouts/Layout";
// import Lottie from "react-lottie";
import { useAuth } from "../contexts/AuthContext";
import { AiOutlineUser, AiOutlineEyeInvisible } from "react-icons/ai";
import { BsShieldLock } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";
import {
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  User,
} from "firebase/auth";
import { auth } from "../services/firebase";
import { useState } from "react";

import SignUp from "../components/SignUp";
import { parseCookies } from "nookies";

export default function HomeLogin() {
  const toast = useToast({
    duration: 5000,
    isClosable: true,
  });
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [loading, setLoading] = useState<boolean>();

  const isMobileVersion = useBreakpointValue({
    base: true,
    sm: true,
    md: false,
    lg: false,
  });

  const { user, signInWithGoogle, signInEmailPassword, isAuthenticated } =
    useAuth();
  const { isOpen, onOpen, onClose } = useDisclosure();

  const Toast = useToast({
    position: "bottom",
    isClosable: true,
    duration: 2500,
    containerStyle: {
      color: "white",
    },
  });

  const CLIENT_TOKEN: any = process.env.NEXT_PUBLIC_CLIENT_TOKEN;

  const cookies = parseCookies();

  const userToken = cookies[CLIENT_TOKEN];

  async function handleLogin(email: string, password: string) {
    await signInEmailPassword(email, password);

    console.log("isLoading", loading);

    if (email == "" || null) {
      setLoading(true);

      toast.closeAll();
      toast({
        title: "Verifique o e-mail",
        description: "O campo de e-mail esta vazio.",
        status: "error",
      });
      setLoading(false);
    } else if (password == "" || null) {
      setLoading(true);
      toast.closeAll();
      toast({
        title: "Verifique a senha.",
        description: "O campo de senha esta vazio.",
        status: "error",
      });
      setLoading(false);
    } else {
      setLoading(true);
      const response = await signInEmailPassword(email, password);
      if (response !== undefined) {
        toast.closeAll();
        toast({
          title: "Dados inválidos",
          description: "Email ou senha incorretos",
          status: "error",
        });
      } else {
        toast.closeAll();
        toast({
          title: "Login realizado com sucesso",
          status: "success",
        });
      }
      setLoading(false);
    }
  }

  return (
    <>
      <Flex
        direction="column"
        // bgColor="#EBEBEB"
        h="100vh"
        align="center"
        justify="center"
        bgRepeat="no-repeat"
        bgSize="cover"
        bgImage="/image/background.jpg"
        borderRadius="10px"
      >
        <Flex
          p="4rem"
          direction="column"
          gap="1rem"
          boxShadow="5px 1px 16px -3px rgba(0, 0, 0, 0.25)"
          bgColor="rgba( 255, 255, 255, 0.40 )"
          backdropBlur="xl"
          borderRadius="15px"
          align="center"
          w="30%"
        >
          <Text fontSize="28px" fontWeight="bold" color="blue.main">
            Weekly.
          </Text>
          <Text mb="1rem" fontSize="16px">
            Seja bem vindo, faça seu login começar.
          </Text>
          <Input
            // opacity="70%"
            // h="50px"
            borderColor="gray.300"
            variant="outline"
            borderRadius="15px"
            placeholder="Digite seu email."
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <Input
            // opacity="70%"
            borderColor="gray.300"
            variant="outline"
            // h="50px"
            borderRadius="15px"
            placeholder="Digite sua senha. "
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <Button
            // boxShadow="lg"
            isLoading={loading}
            borderWidth="1px"
            mt="1rem"
            // h="40px"
            variant="primary"
            borderRadius="15px"
            // bgColor="#4887FA"
            // variant="solid"
            // colorScheme="#021C45"
            color="white"
            onClick={() => {
              handleLogin(email, password);
            }}
            w="full"
          >
            Entrar
          </Button>
          <Text align="center" color="gray.main" fontSize="13px">
            Você também pode se conectar com:
          </Text>
          {/* <IconButton>
                    <Text>teste</Text>
                  </IconButton> */}

          <Button
            alignContent="end"
            h="40px"
            justifyContent="center"
            // bgColor="#4887FA"
            borderRadius="15px"
            colorScheme="#021C45"
            color="#4887FA"
            variant="outline"
            onClick={signInWithGoogle}
            aria-label={"Entrar com google"}
          >
            {<FcGoogle size="25px" />}
            <Text alignSelf="center" ml="1rem">
              Entrar com Conta Google
            </Text>
          </Button>
        </Flex>
      </Flex>
    </>
  );
}
