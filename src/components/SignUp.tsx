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
import { useState } from "react";
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
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

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

  console.log("email", email, "password", password);
  return (
    <>
      <Flex>
        <Modal isOpen={isOpen} onClose={onClose} size="xl">
          <ModalOverlay />
          <ModalContent m="1rem" alignSelf="center" bgColor="#021C45">
            <ModalHeader>Modal Title</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <Flex direction="column">
                <Text>Digite seu email:</Text>
                <Input
                  placeholder="Email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.currentTarget.value);
                  }}
                />
              </Flex>
              <Flex direction="column" mt="1rem">
                <Text>Digite sua senha:</Text>
                <Input
                  placeholder="Senha"
                  value={password}
                  onChange={(e) => {
                    setPassword(e.currentTarget.value);
                  }}
                />
              </Flex>
              {/* <Flex direction="column" mt="1rem">
                <Text>Confirme sua senha:</Text>
                <Input
                  placeholder="Senha"
                  value={password}
                  onChange={(e) => {
                    setPassword(e.currentTarget.value);
                  }}
                />
              </Flex> */}
              {/* <Button onClick={submit}>teste</Button> */}
            </ModalBody>

            <ModalFooter>
              <Button colorScheme="blue" mr={3} onClick={onClose}>
                Close
              </Button>
              <Button variant="ghost" onClick={handleCreateUser}>
                Confirmar
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </Flex>
    </>
  );
}
