import {
  Flex,
  Button,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverFooter,
  PopoverArrow,
  PopoverCloseButton,
  PopoverAnchor,
  Fade,
  ScaleFade,
  Slide,
  SlideFade,
  Collapse,
  useDisclosure,
  Text,
} from "@chakra-ui/react";
import Layout from "../components/Layouts/layout";

export default function Home() {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <>
      <Layout>
        <Flex direction="column" align="center" w="full">
          <Button w="100%" h="10%" mb="2rem" color="red" onClick={onToggle}>
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
          <Button w="100%" h="10%" color="green">
            DESPESAS FIXAS
          </Button>
        </Flex>
      </Layout>
    </>
  );
}
