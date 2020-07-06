import React from "react";
import { ChakraProvider } from "@chakra-ui/system";
import { CSSReset } from "@chakra-ui/css-reset";

import theme from "../chakra";

export default ({ Component, pageProps }) => (
  <ChakraProvider theme={theme}>
    <CSSReset />
    <Component {...pageProps} />
  </ChakraProvider>
);
