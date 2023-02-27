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
import LayoutDesk from "../components/Layouts/layoutDesktop";
// import Lottie from "react-lottie";
import animationData from "../animations/login.json";
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

import {
  MotionFlex,
  animationFlex,
  itemAnimation,
  InputMotion,
  inputAnimation,
} from "../../styles/animation";
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

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
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
          description: "Bem-vindo à Dashboard da Pneufree!",
          status: "success",
        });
      }
      setLoading(false);
    }
  }

  return (
    <>
      {isMobileVersion ? (
        <>
          <Flex
            bgColor="#EBEBEB"
            minHeight="100vh"
            direction="column"
            p="1rem"
            justify="center"
          >
            <MotionFlex
              initial="hidden"
              animate="visible"
              variants={itemAnimation}
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

              <MotionFlex
                variants={inputAnimation}
                initial="hidden"
                animate="visible"
                direction="column"
                align="center"
                p="1rem"
              >
                {/* <Lottie options={defaultOptions} /> */}
                <Image src="/Image/bgimagelogin.gif" alt="" />
                <Text
                  fontSize="24px"
                  color="white"
                  fontWeight="bold"
                  alignSelf="start"
                >
                  Seja bem-vindo!
                </Text>
                <Text
                  fontSize="16px"
                  color="gray.300"
                  fontWeight="medium"
                  alignSelf="start"
                >
                  Faça o login para começar.
                </Text>
                <InputGroup mt="2rem" w="full" variant="solid" size="md">
                  <InputLeftElement>
                    <AiOutlineUser color="gray.300" />
                  </InputLeftElement>
                  <Input
                    borderRadius="15px"
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
                    borderRadius="15px"
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
                    borderWidth="1px"
                    mt="1rem"
                    h="40px"
                    borderRadius="10px"
                    bgColor="#011735"
                    // variant="solid"
                    colorScheme="#021C45"
                    color="white"
                    onClick={() => {
                      handleLogin(email, password);
                    }}
                  >
                    Entrar
                  </Button>

                  <Text
                    mt="1.5rem"
                    align="center"
                    color="gray.300"
                    fontSize="13px"
                  >
                    Você também pode se conectar com:
                  </Text>
                  {/* <IconButton>
                    <Text>teste</Text>
                  </IconButton> */}

                  <Button
                    alignContent="end"
                    h="40px"
                    justifyContent="center"
                    mt="1.5rem"
                    bgColor="#011735"
                    borderRadius="10px"
                    colorScheme="#021C45"
                    color="white"
                    variant="outline"
                    onClick={signInWithGoogle}
                    aria-label={"Entrar com google"}
                  >
                    {<FcGoogle size="25px" />}
                    <Text alignSelf="center" ml="1rem">
                      Entrar com Conta Google
                    </Text>
                  </Button>

                  {/* const { isOpen, onOpen, onClose } = useDisclosure(); */}

                  <Button
                    colorScheme="#021C45"
                    mt="1rem"
                    borderRadius="10px"
                    // onClick={handleCreateUser}
                    onClick={onOpen}
                  >
                    {" "}
                    <Text as="u" fontSize="14px" fontWeight="medium">
                      Criar uma conta
                    </Text>
                  </Button>

                  <SignUp isOpen={isOpen} onClose={onClose} />
                </Flex>
              </MotionFlex>
            </MotionFlex>
          </Flex>
          {/* <LayoutMob></LayoutMob> */}
        </>
      ) : (
        <>
          <Flex
            bgColor="#EBEBEB"
            w="full"
            h="100vh"
            align="center"
            justify="center"
          >
            <MotionFlex
              boxShadow="lg"
              rounded="lg"
              initial="hidden"
              animate="visible"
              variants={itemAnimation}
              borderRadius="15px"
              direction="column"
              align="center"
              justify="center"
              px="3rem"
              py="1rem"
              bgColor="#FFFFFF"
              w="35%"
            >
              {/* <Lottie options={defaultOptions} /> */}
              <MotionFlex
                justify="start"
                direction="column"
                variants={itemAnimation}
                initial="hidden"
                animate="visible"
              >
                <Image
                  src="/Image/login.svg"
                  alt=""
                  mt="-1rem"
                  w="227px"
                  h="227px"
                />

                <Text
                  fontSize="25px"
                  color="#081F49"
                  fontWeight="bold"
                  alignSelf="center"
                >
                  Seja bem-vindo!
                </Text>

                <Text
                  opacity="45%"
                  fontSize="14px"
                  color="black"
                  fontWeight="medium"
                  alignSelf="center"
                >
                  Faça o login para começar.
                </Text>
              </MotionFlex>
              <InputMotion
                variants={inputAnimation}
                initial="hidden"
                animate="visible"
                mt="1rem"
                w="full"
                variant="solid"
                size="md"
              >
                <InputLeftElement>
                  <AiOutlineUser opacity="45%" />
                </InputLeftElement>
                <Input
                  opacity="70%"
                  borderColor="gray.300"
                  variant="outline"
                  borderRadius="15px"
                  placeholder="Digite seu email."
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                />
              </InputMotion>
              <InputMotion
                variants={inputAnimation}
                initial="hidden"
                animate="visible"
                w="full"
                variant="solid"
                size="md"
                mt="1rem"
              >
                <InputLeftElement>
                  <BsShieldLock opacity="45%" />
                </InputLeftElement>
                <Input
                  opacity="70%"
                  borderColor="gray.300"
                  variant="outline"
                  borderRadius="15px"
                  placeholder="Digite sua senha. "
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                />
              </InputMotion>

              <MotionFlex
                variants={inputAnimation}
                initial="hidden"
                animate="visible"
                justify="space-evenly"
                w="full"
                direction="column"
              >
                {/* <Button mt="1rem" size="sm" w="100px">
                    Cadastre-se
                    
                  </Button> */}

                <Button
                  boxShadow="lg"
                  isLoading={loading}
                  borderWidth="1px"
                  mt="1rem"
                  h="40px"
                  borderRadius="15px"
                  bgColor="#4887FA"
                  // variant="solid"
                  colorScheme="#021C45"
                  color="white"
                  onClick={() => {
                    handleLogin(email, password);
                  }}
                >
                  Entrar
                </Button>

                <Text
                  mt="0.5rem"
                  align="center"
                  color="gray.300"
                  fontSize="13px"
                >
                  Você também pode se conectar com:
                </Text>
                {/* <IconButton>
                    <Text>teste</Text>
                  </IconButton> */}

                <Button
                  alignContent="end"
                  h="40px"
                  justifyContent="center"
                  mt="0.5rem"
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

                {/* const { isOpen, onOpen, onClose } = useDisclosure(); */}

                <Button
                  colorScheme="#021C45"
                  borderRadius="10px"
                  // onClick={handleCreateUser}
                  onClick={onOpen}
                >
                  {" "}
                  <Text
                    mt="0.5rem"
                    as="u"
                    fontSize="14px"
                    fontWeight="medium"
                    color="gray.300"
                  >
                    Criar uma conta
                  </Text>
                </Button>

                <SignUp isOpen={isOpen} onClose={onClose} />
              </MotionFlex>
            </MotionFlex>
          </Flex>
        </>
      )}
    </>
  );
}
