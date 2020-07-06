import React from "react";
import {
  Box,
  ThemeProvider,
  ColorModeProvider,
  CSSReset,
} from "@chakra-ui/core";

import theme from "../../styles/theme";

export default function Container(props) {
  return (
    <ThemeProvider theme={theme}>
      <CSSReset />
      <Box height="100vh" {...props} />
    </ThemeProvider>
  );
}
