import { Box } from "@chakra-ui/react";
import React from "react";

type Props = {
  children: React.ReactNode;
};

const CustomBox = ({ children }: Props) => {
  const width = {
    "max-width": "1512px",
    margin: "0 auto",

  }
  return <Box
    style={width}
  >{children}</Box>;
};

export default CustomBox;
