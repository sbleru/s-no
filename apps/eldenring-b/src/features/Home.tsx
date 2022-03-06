import { Suspense } from "react";
import { Center, Heading, VStack, Container } from "../ui/Chakra";
import { NextPage } from "next";
import { useRouter } from "next/router";

export const Home: NextPage = () => {
  const { isReady } = useRouter();
  // isReady === true でCSRになる。
  if (!isReady) {
    return null;
  }
  return (
    <Center h={"100vh"}>
      <Container
        position={"absolute"}
        display={"block"}
        zIndex={0}
        minH={["100%", "initial"]}
        minW={"100%"}
      >
        <Heading
          color={"lightgray"}
          transform={["rotate(90deg)", "rotate(0deg)"]}
          opacity={0.04}
          whiteSpace={["nowrap", "initial"]}
          lineHeight={"1em"}
          fontSize={["29vh", "29vw"]}
        >
          ELDENRING
        </Heading>
      </Container>
      <VStack zIndex={1} w={["90%", "30%"]}>
        <Suspense fallback={<Loading />}>
          <RenderAsFetch />
        </Suspense>
      </VStack>
    </Center>
  );
};

const RenderAsFetch = () => {
  return <View />;
};

const View: React.VFC = () => {
  return (
    <VStack spacing={"16"} textAlign={"center"}>
      <Heading size={"sm"} whiteSpace={"pre"} lineHeight={"2em"}>
        永遠の女王マリカを戴く狭間の地で{"\n"}
        黄金樹の根源たる、エルデンリングが砕けた
      </Heading>
      <Heading size={"sm"} whiteSpace={"pre"} lineHeight={"2em"}>
        マリカの血を受けた子供たち、デミゴッドたちは{"\n"}
        エルデンリングの破片たる大ルーンを手にし{"\n"}
        その力に狂い、歪み、破砕戦争を起こし…
      </Heading>
      <Heading size={"sm"} whiteSpace={"pre"} lineHeight={"2em"}>
        大いなる意志に見捨てられた
      </Heading>
      <Heading size={"sm"} whiteSpace={"pre"} lineHeight={"2em"}>
        そして、かつて瞳から黄金の祝福を失い{"\n"}
        狭間の地を追われた褪せ人たちの元に{"\n"}
        祝福の導きがもたらされる
      </Heading>

      <Heading size={"sm"} whiteSpace={"pre"} lineHeight={"2em"}>
        祝福なく、死にきれぬ死者たちよ{"\n"}
        導きに従い、霧の海の先、狭間の地に向かい{"\n"}
        エルデンリングに見えよ
      </Heading>

      <Heading size={"sm"} whiteSpace={"pre"} lineHeight={"2em"}>
        そして、エルデの王となるがよい
      </Heading>
    </VStack>
  );
};

const Loading = () => {
  return <Heading>Loading...</Heading>;
};
