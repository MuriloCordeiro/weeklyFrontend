import {
  Flex,
  FlexProps,
  InputGroup,
  InputGroupProps,
  Text,
  TextProps,
  BoxProps,
} from "@chakra-ui/react";
import { motion } from "framer-motion";

export const animationFlex = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.4,
      staggerChildren: 0.4,
    },
  },
};

export const itemAnimation = {
  hidden: { y: 60, opacity: 0 },
  visible: {
    y: 1,
    opacity: 1,
    transition: {
      delay: 0.3,
    },
  },
};

export const inputAnimation = {
  hidden: { y: 35, opacity: 0 },
  visible: {
    y: 1,
    opacity: 1,
    transition: {
      delay: 0.6,
    },
  },
};

export const textAnimation = {
  hidden: { x: -60, opacity: 0 },
  visible: {
    x: 1,
    opacity: 1,
    transition: {
      delayChildren: 0.8,
      staggerChildren: 0.2,
    },
  },
};

export const MotionFlex = motion<FlexProps>(Flex);

export const InputMotion = motion<InputGroupProps>(InputGroup);

export const textMotion = motion<TextProps>(Text);
