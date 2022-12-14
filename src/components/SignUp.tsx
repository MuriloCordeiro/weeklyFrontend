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

type SignUpModal = {
  isOpen: boolean;
  onClose: any;
};

export default function SignUpPage({ isOpen, onClose }: SignUpModal) {
  // const { signup } = useAuth();
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
        // window.alert("deu boa");
        console.log("result", result);
      })
      .catch((error) => {
        // window.alert("não deu boa");
        console.log("error", error);
      });
  }

  function handleInputs() {
    if (name.length > 1) {
      setIsFilled(true);
    } else if (email.length > 1) {
      setIsFilled(true);
    } else if (password.length > 1) {
      setIsFilled(true);
    } else {
      setIsFilled(false);
      window.alert("preencha");
    }
    if (name.length > 1 && email.length > 1 && password.length > 1) {
      handleCreateUser;
    }
  }

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
                <Text color="white">Nome:</Text>
                <Input
                  borderRadius="10px"
                  variant="solid"
                  placeholder="Digite seu nome aqui."
                  value={name}
                  onChange={(e) => {
                    setName(e.currentTarget.value);
                  }}
                />
              </Flex>
              <Flex direction="column" mt="1rem">
                <Text color="white">Email:</Text>
                <Input
                  // isDisabled={isFilled}
                  borderRadius="10px"
                  variant="solid"
                  placeholder="Digite seu email aqui."
                  value={email}
                  onChange={(e) => {
                    setEmail(e.currentTarget.value);
                  }}
                />
              </Flex>
              <Flex direction="column" mt="1rem">
                <Text color="white">Digite sua senha:</Text>
                <Input
                  borderRadius="10px"
                  variant="solid"
                  placeholder="Digite sua senha aqui."
                  value={password}
                  onChange={(e) => {
                    setPassword(e.currentTarget.value);
                  }}
                />
              </Flex>
              <Flex direction="column" mt="1rem">
                <Text color="white">
                  {password.length === confirmPassword.length
                    ? "Confirme sua senha:"
                    : "A senha deve ser igual"}
                </Text>
                <Input
                  bgColor={
                    password.length === confirmPassword.length
                      ? "white"
                      : "red.200"
                  }
                  borderRadius="10px"
                  variant="solid"
                  placeholder="Confirme sua senha aqui."
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
                    password.length === confirmPassword.length ? false : true
                  }
                  colorScheme="green"
                  onClick={handleInputs}
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
