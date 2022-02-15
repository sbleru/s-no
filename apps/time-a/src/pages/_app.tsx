import { ChakraProvider } from "@chakra-ui/react";
import { SWRContextProvider } from "../contexts/swr";
import { theme } from "../ui/theme";
import type { AppProps } from "next/app";

const App: React.VFC<AppProps> = ({ Component, pageProps }) => {
  return (
    <ChakraProvider theme={theme}>
      <SWRContextProvider>
        <Component {...pageProps} />
      </SWRContextProvider>
    </ChakraProvider>
  );
};

export default App;
