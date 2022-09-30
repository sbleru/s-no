import logo from "./netflix-seeklogo.com.svg";
import { Button, Center, Heading, Image, Link, VStack } from "@chakra-ui/react";

function App() {
  // const priceId = "price_1Kx2HUASQM55JB5sGzKGtbE8"; // 6ヶ月
  const priceId = "price_1LIR9XASQM55JB5snSyVU1Uq"; // 月額
  const url =
    `https://us-central1-fir-no-1904e.cloudfunctions.net/subscribeWarikan?priceId=${priceId}`;

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
      <VStack spacing={"4"}>
        <Image src={logo} alt="logo" h={"40vmin"} pointerEvents={"none"} />
        <Heading>Netflix割り勘</Heading>
        {/* <Heading>Netflixプレミアム月額1980円 x 1ヶ月 / 3人 = 3960円</Heading> */}
        <Heading>Netflixプレミアム月額1980円 / 3人 = 660円</Heading>
        <Heading>
          <LinkArea href={url}>
            <Button color={"black"}>サブスクで割り勘する</Button>
          </LinkArea>
        </Heading>
      </VStack>
    </Center>
  );
}

export default App;

export const LinkArea: React.FC<{
  href: string;
  isExternal?: boolean;
  children: React.ReactNode;
}> = ({ href, isExternal = false, children }) => (
  <Link href={href} isExternal={isExternal}>
    {children}
  </Link>
);
