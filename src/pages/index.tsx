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
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import LayoutDesk from "../components/Layouts/layoutDesktop";
// import Lottie from "react-lottie";
import animationData from "../animations/login.json";
import { useAuth } from "../contexts/AuthContext";
import { AiOutlineUser, AiOutlineEyeInvisible } from "react-icons/ai";
import { BsShieldLock } from "react-icons/bs";
import {
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  User,
} from "firebase/auth";
import { auth } from "../services/firebase";
import { useState } from "react";

import SignUp from "../components/SignUp";
// import { useAuth } from "../contexts/AuthContext";
export default function HomeLogin() {
  const Router = useRouter();
  // const { signInEmailPassword } = useAuth();

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
  const { user, signInWithGoogle, signInEmailPassword } = useAuth();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const Toast = useToast({
    position: "bottom",
    isClosable: true,
    duration: 2500,
    containerStyle: {
      color: "white",
    },
  });
  // const [user, setUser] = useState<User>({} as User);

  // function signInWithGoogle() {
  //   const provider = new GoogleAuthProvider();

  //   signInWithPopup(auth, provider)
  //     .then((result) => {
  //       console.log(result.user);
  //       setUser(result.user);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // }

  async function handleLogin(email: string, password: string) {
    const response = await signInEmailPassword(email, password);
    if (response) {
      Toast.closeAll();
      Toast({
        title: "Usuário criado com sucesso!",
        status: "success",
        containerStyle: {
          color: "white",
        },
      });
    } else {
      Toast.closeAll();
      Toast({
        title: "Usuário inválido.",
        status: "error",
        containerStyle: {
          color: "white",
        },
      });
    }
  }

  return (
    <>
      {isWideVersion ? (
        <>
          {/* <SignUpPage isOpen={isOpen} onClose={onClose} /> */}
          <Flex
            bgColor="#011735"
            minHeight="100vh"
            direction="column"
            p="1rem"
            justify="center"
          >
            {/* <Button onClick={signInWithGoogle}>teste</Button> */}
            <Text fontSize="32px" color="white">
              {user?.email}
            </Text>
            <Text fontSize="32px" fontWeight="bold" color="white">
              {user?.displayName}
            </Text>
            {/* {user.photoURL && <img src={user.photoURL} alt="Foto do usuário" />} */}
            {/* <Button onClick={test}>criaremail</Button> */}

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

                <InputGroup mt="2rem" w="full" variant="solid" size="md">
                  <InputLeftElement>
                    <AiOutlineUser color="gray.300" />
                  </InputLeftElement>
                  <Input
                    placeholder="Digite seu email."
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                  />
                </InputGroup>
                <InputGroup w="full" variant="solid" size="md" mt="1rem">
                  <InputLeftElement>
                    <BsShieldLock color="gray.300" />
                  </InputLeftElement>
                  <Input
                    placeholder="Digite sua senha. "
                    variant="solid"
                    value={password}
                    onChange={(e) => {
                      setPassword(e.target.value);
                    }}
                  />
                </InputGroup>

                <Flex
                  justify="space-evenly"
                  w="full"
                  mt="1rem"
                  direction="column"
                >
                  {/* <Button mt="1rem" size="sm" w="100px">
                    Cadastre-se
                  </Button> */}
                  <Button
                    mt="1rem"
                    borderRadius="10px"
                    // bgColor="#011735"
                    variant="outline"
                    colorScheme="#021C45"
                    color="white"
                    onClick={() => {
                      handleLogin(email, password);
                    }}
                  >
                    Entrar
                  </Button>
                  <Button
                    mt="1rem"
                    borderRadius="10px"
                    colorScheme="#021C45"
                    color="white"
                    variant="outline"
                    onClick={signInWithGoogle}
                  >
                    Entrar com google
                  </Button>

                  {/* const { isOpen, onOpen, onClose } = useDisclosure(); */}
                  <Button
                    colorScheme="#021C45"
                    mt="1.5rem"
                    borderRadius="10px"
                    // onClick={handleCreateUser}
                    onClick={onOpen}
                  >
                    <Text as="u">Criar uma conta</Text>
                  </Button>

                  <SignUp isOpen={isOpen} onClose={onClose} />
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
