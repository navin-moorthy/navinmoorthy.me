import React from "react";
import { ThemeProvider, GlobalStyle } from "@chakra-ui/system";
import theme from "@chakra-ui/theme";
import { CSSReset } from "@chakra-ui/css-reset";

export default ({ Component, pageProps }) => (
  <ThemeProvider theme={theme}>
    <CSSReset />
    <GlobalStyle />
    <Component {...pageProps} />
  </ThemeProvider>
);
