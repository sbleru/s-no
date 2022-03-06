import { extendTheme, ChakraTheme } from "@chakra-ui/react";

const styles: ChakraTheme["styles"] = {
  global: {
    "html, body": {
      backgroundColor: "#0b0a0a",
      color: "white",
      // fontFamily: 'Hina Mincho, sans-serif',
      // foPntStyle: "normal"

      //       font-family: dnp-shuei-mincho-pr6n, sans-serif;
      // font-style: normal;
      // font-weight: 400;
    },
  },
};

const fonts = {
  heading: "Hina Mincho, sans-serif",
  body: "Hina Mincho, sans-serif",
};

// .tk-fot-rodin-pron{font-family:"fot-rodin-pron",sans-serif;}.tk-dnp-shuei-mincho-pr6n{font-family:"dnp-shuei-mincho-pr6n",sans-serif;}

export const theme = extendTheme({ styles, fonts }) as ChakraTheme;
