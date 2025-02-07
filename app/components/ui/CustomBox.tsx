// CustomBox.tsx
import React, { forwardRef } from "react";
import { Box } from "@chakra-ui/react";

type Props = {
  children: React.ReactNode;
};

const CustomBox = forwardRef<HTMLDivElement, Props>(({ children }, ref) => {
  const widthStyle = {
    maxWidth: "1512px",
    margin: "0 auto",
  };

  return (
    <Box ref={ref} style={widthStyle}>
      {children}
    </Box>
  );
});

CustomBox.displayName = "CustomBox";

export default CustomBox;
