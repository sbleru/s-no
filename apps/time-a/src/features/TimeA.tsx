import { Input } from "@chakra-ui/react";
import { Suspense, useCallback, useEffect, useState } from "react";
import { Center, Heading, VStack } from "../ui/Chakra";
import { useRouter } from "next/router";
import { NextPage } from "next";

export const TimeA: NextPage = () => {
  return (
    <Center h={"100vh"}>
      <VStack spacing={12}>
        <Heading>Time-a</Heading>
        <Suspense fallback={<Loading />}>
          <RenderAsFetch />
        </Suspense>
      </VStack>
    </Center>
  );
};

/**
 * @todo fix https://nextjs.org/docs/messages/react-hydration-error
 */
const RenderAsFetch = () => {
  const {
    query: {
      // timestamp
      t,
      // timestamp millis
      m,
    },
    isReady,
  } = useRouter();

  const [timestamp, setTimestamp] = useState(null);

  useEffect(() => {
    if (!isReady) return;
    if (t) {
      setTimestamp(Math.floor(Number(t)));
      return;
    }
    if (m) {
      setTimestamp(Math.floor(Number(m) / 1000));
      return;
    }
    setTimestamp(Math.floor(new Date().getTime() / 1000));
  }, [t, m, isReady]);

  if (!timestamp) return <Loading />;

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
      <Input defaultValue={timestamp} onChange={handleInput} />
      <Heading>{date.toLocaleString()}</Heading>
    </>
  );
};

const Loading = () => {
  return <Heading>Loading...</Heading>;
};
