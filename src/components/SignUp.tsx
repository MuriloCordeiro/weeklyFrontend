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
  const [isFilled, setIsFilled] = useState<boolean>(false);

  function handleCreateUser() {
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
        console.log("error", error);
      });
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

  console.log("email", email, "password", password);
  return (
    <>
      <Flex>
        <Modal isOpen={isOpen} onClose={onClose} size="xl">
          <ModalOverlay />
          <ModalContent m="1rem" alignSelf="center" bgColor="#021C45">
            <ModalHeader color="white">Criar novo usuário:</ModalHeader>
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
                  bgColor={
                    password.length > 1 && password === confirmPassword
                      ? "white"
                      : "red.200"
                  }
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
                    name.length > 1 &&
                    email.length > 1 &&
                    password.length > 1 &&
                    password === confirmPassword
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
