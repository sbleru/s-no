import { Suspense, useCallback, useState } from "react";
import { Center, Heading, VStack, Input, Container } from "../ui/Chakra";
import { NextPage } from "next";
import { useTimestamp } from "./useTimestamp";

export const TimeA: NextPage = () => {
  return (
    <Center h={"100vh"}>
      <Container
        position={"absolute"}
        display={"block"}
        zIndex={0}
        minH={["100%", "inherit"]}
        minW={"100%"}
      >
        <Heading
          color={"lightgray"}
          transform={["rotate(90deg)", "rotate(0deg)"]}
          opacity={0.04}
          whiteSpace={"nowrap"}
          fontSize={["29vh", "29vw"]}
        >
          Time-A
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
  const { timestamp } = useTimestamp();
  return <View timestamp={timestamp} />;
};

const View: React.FC<{
  timestamp: number;
}> = ({ timestamp }) => {
  const [date, setDate] = useState(new Date(timestamp * 1000));
  const handleInput = useCallback((e) => {
    const t = e.currentTarget.value;
    if (isNaN(t)) return;
    setDate(new Date(t * 1000));
  }, []);
  return (
    <VStack spacing={8}>
      <Heading>{date.toLocaleString()}</Heading>
      <Input defaultValue={timestamp} onChange={handleInput} autoFocus={true} />
    </VStack>
  );
};

const Loading = () => {
  return <Heading>Loading...</Heading>;
};
