import {
  useDisclosure,
  Button,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  Input,
  DrawerFooter,
  Text,
  Flex,
  Center,
  Divider,
} from "@chakra-ui/react";
import { IoIosArrowForward } from "react-icons/io";
import { VscAccount } from "react-icons/vsc";

type NavbarController = {
  isOpenSideBar: boolean;
  onCloseSideBar: any;
};

export default function SideBar({
  isOpenSideBar,
  onCloseSideBar,
}: NavbarController) {
  return (
    <>
      {/* <Button colorScheme="teal" onClick={onOpenSideBar}>
        Open
      </Button> */}
      <Drawer isOpen={isOpenSideBar} placement="right" onClose={onCloseSideBar}>
        <DrawerOverlay />
        <DrawerContent bgColor="#303958">
          <DrawerHeader>
            <Button
              _hover={{ bgColor: "#24293D" }}
              onClick={onCloseSideBar}
              rightIcon={<IoIosArrowForward />}
              w="full"
              color="white"
              bgColor="#24293D"
            >
              <Text fontWeight="bold" fontSize="18px">
                Voltar
              </Text>
            </Button>
          </DrawerHeader>

          <DrawerBody>
            <Flex color="white" direction="column" justify="start" w="full">
              <Flex w="full">
                <Button
                  color="white"
                  variant="link"
                  leftIcon={<IoIosArrowForward />}
                >
                  <Text fontWeight="bold" fontSize="16px">
                    MINHA CONTA
                  </Text>
                </Button>
              </Flex>
              <Flex borderWidth="1px" mt="1rem" mb="1rem" />
              <Flex w="full">
                <Button
                  color="white"
                  variant="link"
                  leftIcon={<IoIosArrowForward />}
                >
                  <Text fontWeight="bold" fontSize="16px">
                    GRÁFICOS
                  </Text>
                </Button>
              </Flex>
              <Flex borderWidth="1px" mt="1rem" mb="1rem" />
              <Flex w="full">
                <Button
                  color="white"
                  variant="link"
                  leftIcon={<IoIosArrowForward />}
                >
                  <Text fontWeight="bold" fontSize="16px">
                    PERCENTUAIS
                  </Text>
                </Button>
              </Flex>
              <Flex borderWidth="1px" mt="1rem" mb="1rem" />
            </Flex>
          </DrawerBody>

          <DrawerFooter>
            <Button w="full" color="white" bgColor="#24293D">
              <Text fontWeight="bold" fontSize="16px">
                ENCERRAR SESSÃO
              </Text>
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
}
