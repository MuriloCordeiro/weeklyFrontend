import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Flex,
  Button,
  Input,
  Text,
  useToast,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useAuth } from "../contexts/AuthContext";
import {
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  User,
} from "firebase/auth";
import { auth } from "../services/firebase";
import { useRouter } from "next/router";

type SignUpModal = {
  isOpen: boolean;
  onClose: any;
};

export default function SignUpPage({ isOpen, onClose }: SignUpModal) {
  // const { signup } = useAuth();
  const Toast = useToast({
    position: "bottom",
    isClosable: true,
    duration: 2500,
    containerStyle: {
      color: "white",
    },
  });
  const Router = useRouter();
  const { user, signInWithGoogle, signInEmailPassword } = useAuth();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  ("");
  const [isFilled, setIsFilled] = useState<boolean>(true);

  function handleCreateUser() {
    if (confirmPassword.length < 6) {
      Toast({
        title: "Sua senha precisa de no mínimo 6 caracteres",
        status: "error",
        containerStyle: {
          color: "white",
        },
      });
    } else if (password !== confirmPassword) {
      setIsFilled(false);
      Toast({
        title: "Sua senha deve ser idêntica.",
        status: "error",
        containerStyle: {
          color: "white",
        },
      });
    } else {
      createUserWithEmailAndPassword(auth, email, password)
        .then((result) => {
          if (result) {
            Toast.closeAll();
            Toast({
              title: "Usuário criado com sucesso!",
              status: "success",
              containerStyle: {
                color: "white",
              },
            });
          }

          Router.reload();
        })
        .catch((error) => {
          // window.alert("não deu boa");
          // console.log("errorrrr", error);

          Toast({
            title: "Email já existe, tente outro.",
            status: "error",
            containerStyle: {
              color: "white",
            },
          });
        });
    }
  }

  // function handleInputs() {
  //   if (name.length > 1) {
  //     setIsFilled(true);
  //   } else if (email.length > 1) {
  //     setIsFilled(true);
  //   } else if (password.length > 1) {
  //     setIsFilled(true);
  //   } else {
  //     setIsFilled(false);
  //     window.alert("preencha");
  //   }
  // }

  // window.alert("preencha");
  // if (isFilled === false) {
  //   window.alert("preencha");
  // }
  // useEffect(() => {

  // }, [isFilled]);

  // useEffect(() => {
  //   Toast.closeAll();
  //   if (confirmPassword.length < 6 && confirmPassword.length > 4) {
  //     Toast({
  //       title: "Usuário criado com sucesso!",
  //       status: "warning",
  //       containerStyle: {
  //         color: "white",
  //       },
  //     });
  //   }
  // }, [confirmPassword]);

  console.log("email", email, "password", password);
  return (
    <>
      <Flex>
        <Modal isOpen={isOpen} onClose={onClose} size="xl">
          <ModalOverlay />
          <ModalContent m="1rem" alignSelf="center" bgColor="#021C45">
            <ModalHeader color="white">
              <Text fontSize="24px">Vamos começar!</Text>
              <Text fontSize="12px" color="gray.300">
                Preencha todos os campos pra criar uma conta
              </Text>
            </ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <Flex direction="column">
                <Input
                  borderRadius="10px"
                  variant="solid"
                  placeholder="Nome"
                  value={name}
                  onChange={(e) => {
                    setName(e.currentTarget.value);
                  }}
                />
              </Flex>
              <Flex direction="column" mt="1.5rem">
                <Input
                  // isDisabled={isFilled}
                  borderRadius="10px"
                  variant="solid"
                  placeholder="E-mail"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.currentTarget.value);
                  }}
                />
              </Flex>
              <Flex direction="column" mt="1.5rem">
                <Input
                  bgColor={isFilled ? "white" : "red.200"}
                  borderRadius="10px"
                  variant="solid"
                  placeholder="Senha"
                  value={password}
                  onChange={(e) => {
                    setPassword(e.currentTarget.value);
                  }}
                />
              </Flex>
              <Flex direction="column" mt="1.5rem">
                {/* <Text color="white">
                  {password.length > 1 && password === confirmPassword
                    ? "Confirme sua senha:"
                    : "A senha deve ser igual"}
                </Text> */}
                <Input
                  bgColor={isFilled ? "white" : "red.200"}
                  borderRadius="10px"
                  variant="solid"
                  placeholder="Confirme sua senha aqui"
                  value={confirmPassword}
                  onChange={(e) => {
                    setConfirmPassword(e.currentTarget.value);
                  }}
                />
              </Flex>
              {/* <Button onClick={submit}>teste</Button> */}
            </ModalBody>

            <ModalFooter>
              <Flex justify="center" w="full">
                <Button colorScheme="red" mr={3} onClick={onClose}>
                  Cancelar
                </Button>
                <Button
                  isDisabled={
                    name.length > 1 && email.length > 4 && password.length > 2
                      ? false
                      : true
                  }
                  colorScheme="green"
                  onClick={handleCreateUser}
                  // onClick={handleCreateUser}
                >
                  Confirmar
                </Button>
              </Flex>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </Flex>
    </>
  );
}
