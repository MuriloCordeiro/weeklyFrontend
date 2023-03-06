// import Lottie from "react-lottie";
import { useState, useEffect } from "react";
import { Button, Flex } from "@chakra-ui/react";
import useScanDetection from "use-scan-detection";

export default function Scanner() {
  const [barcodeScan, setBarcodeScan] = useState<any>("");
  const [verifyTest, setVerifyTest] = useState<any>("Iniciar");

  if (typeof window !== "undefined") {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useScanDetection({
      onComplete: (barcode): any => {
        setBarcodeScan(barcode);
      },
      minLength: 3,
    });
  }

  function handleVerify() {
    if (verifyTest === "Iniciar") {
      setVerifyTest("Cancelar");
    } else {
      setVerifyTest("Iniciar");
    }
  }

  console.log("estado2", barcodeScan);

  return (
    <>
      <Flex>teste:{barcodeScan}</Flex>
      <Button
        mt="10rem"
        onClick={() => {
          handleVerify();
        }}
      >
        {verifyTest} verificação
      </Button>
    </>
  );
}
