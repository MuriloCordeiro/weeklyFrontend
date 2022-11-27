import { Flex, Image, Text } from "@chakra-ui/react";
import NavBar from "../mainNavBar/navBar";
import Header from "./header";
import Aos from "aos";
import "aos/dist/aos.css";
import { GoTriangleDown, GoTriangleUp } from "react-icons/go";
import useEmblaCarousel from "embla-carousel-react";
import { useEffect, useState } from "react";
import { Chart, ArcElement } from "chart.js";
import { Doughnut } from "react-chartjs-2";
// @ts-ignore
import Lottie from "react-lottie";
import animationData from "../../animation.json";

Chart.register(ArcElement);
export default function LayoutMob(props: any) {
  setTimeout(() => {
    Aos.init({ duration: 1500 });
  }, 1500);

  const [emblaRef] = useEmblaCarousel();
  const [teste, setTeste] = useState(300);

  const data = {
    options: {
      title: {
        display: true,
        text: " ",
      },
    },

    datasets: [
      {
        labels: ["teste", "Blue", "Yellow"],

        data: [300, teste, 100],
        backgroundColor: ["#e32929", "#197bce", "#48ba1c"],
        // hoverBorderColor: "red",
        cutout: 28,
        borderWidth: 0,
        // hoverOffset: 4,
      },
    ],
  };
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <>
      {/* <Flex
        ref={emblaRef}
        overflow="hidden"
        w="full"
        mr="2rem"
        paddingLeft="2rem"
        textAlign="start"
      >
        <Flex display="flex" w="full" alignContent="end">
          <Text flex="0 0 100%">teste 1</Text>
          <Text flex="0 0 100%"> teste 2</Text>

          
        </Flex>
      </Flex> */}
      <Flex bgColor="#011735" minHeight="100vh" direction="column" p="1rem">
        <Header />

        <Flex
          direction="column"
          color="white"
          p="0.5rem"
          data-aos="fade-right"
          ref={emblaRef}
          overflow="hidden"
        >
          <Flex display="flex" w="full">
            <Flex direction="column" flex="0 0 100%">
              <Text fontSize="14px" fontWeight="medium">
                Balanço disponível
              </Text>
              <Flex align="center">
                <Text fontSize="28px" fontWeight="bold" mr="0.5rem">
                  - R$1.000,00
                </Text>
                <GoTriangleDown size="25px" color="red" />
                <Flex ml="1rem" mb="1rem">
                  <Lottie options={defaultOptions} height={50} width={80} />
                </Flex>{" "}
              </Flex>
            </Flex>
            <Flex flex="0 0 100%" h="70px" paddingLeft="5rem">
              <Doughnut data={data} />

              <Flex
                justify="space-evenly"
                direction="column"
                fontWeight="bold"
                fontSize="12px"
                ml="1rem"
              >
                <Flex align="center">
                  <Flex
                    w="10px"
                    h="10px"
                    bgColor="green"
                    mr="5px"
                    borderRadius="2px"
                  />
                  Seu total de receitas
                </Flex>
                <Flex align="center">
                  <Flex
                    w="10px"
                    h="10px"
                    bgColor="red"
                    mr="5px"
                    borderRadius="2px"
                  />
                  Seu total de despesas
                </Flex>
                <Flex align="center">
                  <Flex
                    w="10px"
                    h="10px"
                    bgColor="blue"
                    mr="5px"
                    borderRadius="2px"
                  />
                  Seus totais
                </Flex>
              </Flex>
            </Flex>
          </Flex>
        </Flex>
        <Flex
          data-aos="fade-up"
          justify="space-between"
          bgColor="#021C45"
          borderRadius="10px"
          direction="column"
          minHeight="90vh"
          bgRepeat="no-repeat"
          bgAttachment="fixed"
          bgPosition="center"
          bgBlendMode="soft-light"
          bgImage="url(/Image/piggy1.png)"
        >
          <Flex> {props.children}</Flex>
          <NavBar />
        </Flex>
        {/* <Flex
          position="sticky"
          bottom="0"
          bgColor="#303958"
          borderBottomRadius="10px"
        >
          <NavBar />
        </Flex> */}
        {/* <Flex
          height="100vh"
          bgRepeat="no-repeat"
          bgAttachment="fixed"
          bgPosition="center"
          bgBlendMode="soft-light"
          bgImage="url(/Image/piggy1.png)"
          data-aos="fade-up"
          bgColor="#303958"
          mt="1rem"
        >
          {props.children}
        </Flex> */}
      </Flex>

      {/* <Flex>
        <Flex>Collapse</Flex>
        <Flex>Navbar</Flex>
      </Flex> */}
    </>
  );
}
