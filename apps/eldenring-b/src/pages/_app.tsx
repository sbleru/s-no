import { ChakraProvider } from "@chakra-ui/react";
import { SWRContextProvider } from "../contexts/swr";
import { theme } from "../ui/theme";
import type { AppProps } from "next/app";
import { TimeContextProvider } from "../contexts/time";
import "@fontsource/hina-mincho";

const App: React.VFC<AppProps> = ({ Component, pageProps }) => {
  return (
    <ChakraProvider theme={theme}>
      <SWRContextProvider>
        <TimeContextProvider>
          <Component {...pageProps} />
        </TimeContextProvider>
      </SWRContextProvider>
    </ChakraProvider>
  );
};

export default App;
