import { useState } from "react";
import logo from "./logo.svg";
import { Button, Center, Heading, Image, Link, VStack } from "@chakra-ui/react";
import { keyframes } from "@chakra-ui/react";

const animationKeyframes = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const animation = `${animationKeyframes} infinite 20s linear`;

function App() {
  const [count, setCount] = useState(0);

  return (
    <Center
      minH={"100vh"}
      backgroundColor="#282c34"
      display={"flex"}
      flexDir={"column"}
      alignItems={"center"}
      justifyContent={"center"}
      fontSize={"xl"}
      color={"white"}
    >
      <Image
        src={logo}
        alt="logo"
        h={"40vmin"}
        pointerEvents={"none"}
        animation={animation}
      />
      <VStack spacing={"2"}>
        <Heading>Hello Vite + React!</Heading>
        <Heading>
          <Button
            onClick={() => setCount((count) => count + 1)}
            color={"black"}
          >
            count is: {count}
          </Button>
        </Heading>
        <Heading>
          Edit <code>App.tsx</code> and save to test HMR updates.
        </Heading>
        <Heading>
          <Link
            color={"#61dafb"}
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </Link>
          {" | "}
          <Link
            color={"#61dafb"}
            href="https://vitejs.dev/guide/features.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            Vite Docs
          </Link>
        </Heading>
      </VStack>
    </Center>
  );
}

export default App;
