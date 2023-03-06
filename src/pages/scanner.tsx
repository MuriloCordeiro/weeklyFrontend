// import Lottie from "react-lottie";
import { useState, useEffect } from "react";
import { Flex } from "@chakra-ui/react";
import useScanDetection from "use-scan-detection";

export default function Scanner() {
  const [barcodeScan, setBarcodeScan] = useState<any>("");

  if (typeof window !== "undefined") {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useScanDetection({
      onComplete: (barcode): any => {
        setBarcodeScan(barcode);
      },
      minLength: 3,
    });
  }

  console.log("estado2", barcodeScan);

  return (
    <>
      <Flex>teste:{barcodeScan}</Flex>
    </>
  );
}
