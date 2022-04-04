import { ChakraProvider } from "@chakra-ui/react";
import { SWRContextProvider } from "../contexts/swr";
import { theme } from "../ui/theme";
import type { AppProps } from "next/app";
import { TimeProvider } from "../contexts/time";

const App: React.VFC<AppProps> = ({ Component, pageProps }) => {
  return (
    <ChakraProvider theme={theme}>
      <SWRContextProvider>
        <TimeProvider>
          <Component {...pageProps} />
        </TimeProvider>
      </SWRContextProvider>
    </ChakraProvider>
  );
};

export default App;
