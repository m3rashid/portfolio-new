import React from "react";

import {
  Box,
  Flex,
  Image,
  // Skeleton,
  forwardRef,
} from "@chakra-ui/react";
import { motion, isValidMotionProp } from "framer-motion";

export const MotionBox = motion(
  forwardRef((props, ref) => {
    const chakraProps = Object.fromEntries(
      // do not pass framer props to DOM element
      Object.entries(props).filter(([key]) => !isValidMotionProp(key))
    );
    return <Box ref={ref} {...chakraProps} />;
  })
);
export const MotionFlex = motion(
  forwardRef((props, ref) => {
    const chakraProps = Object.fromEntries(
      // do not pass framer props to DOM element
      Object.entries(props).filter(([key]) => !isValidMotionProp(key))
    );
    return <Flex ref={ref} {...chakraProps} />;
  })
);

export const MotionImage = motion(
  forwardRef((props, ref) => {
    const chakraProps = Object.fromEntries(
      // do not pass framer props to DOM element
      Object.entries(props).filter(([key]) => !isValidMotionProp(key))
    );
    return (
      <Image ref={ref} fallbackSrc="/images/placeholder.png" {...chakraProps} />
    );
  })
);
