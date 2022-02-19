import { Input } from "@chakra-ui/react";
import { Suspense, useCallback, useState } from "react";
import { Center, Heading, VStack } from "../ui/Chakra";
import { NextPage } from "next";
import { useTimestamp } from "./useTimestamp";

export const TimeA: NextPage = () => {
  return (
    <Center h={"100vh"}>
      <VStack spacing={12} w={["90%", "20%"]}>
        <Heading>Time-a</Heading>
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
    <>
      <Heading>{date.toLocaleString()}</Heading>
      <Input defaultValue={timestamp} onChange={handleInput} />
    </>
  );
};

const Loading = () => {
  return <Heading>Loading...</Heading>;
};
