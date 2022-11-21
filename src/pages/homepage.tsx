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
  useBreakpointValue,
} from "@chakra-ui/react";
import Footer from "../components/Layouts/footer";
import LayoutMob from "../components/Layouts/layoutMobile";
import LayoutDesk from "../components/Layouts/layoutDesktop";

export default function Home() {
  const { isOpen, onToggle } = useDisclosure();

  const isWideVersion = useBreakpointValue({
    base: true,
    sm: true,
    md: false,
    lg: false,
  });
  return (
    <>
      {isWideVersion ? (
        <LayoutMob>
          <Flex direction="column">
            <Button
              borderRadius="14px"
              w="100%"
              mb="2rem"
              h="70px"
              color="white"
              variant="outline"
              onClick={onToggle}
            >
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

            <Button
              w="100%"
              h="70px"
              color="white"
              variant="outline"
              borderRadius="14px"
            >
              DESPESAS FIXAS
            </Button>
            {/* <Footer /> */}
          </Flex>
        </LayoutMob>
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
