import React from "react";
import { ThemeProvider, GlobalStyle } from "@chakra-ui/system";
import { CSSReset } from "@chakra-ui/css-reset";

import theme from "../chakra";

export default ({ Component, pageProps }) => (
  <ThemeProvider theme={theme}>
    <CSSReset />
    <GlobalStyle />
    <Component {...pageProps} />
  </ThemeProvider>
);
