import { Input } from "@chakra-ui/react";
import { Suspense, useCallback, useState } from "react";
import { Center, Heading, VStack } from "../ui/Chakra";
import { useRouter } from "next/router";

export const TimeA = () => {
  return (
    <Center h={"100vh"}>
      <VStack spacing={12}>
        <Heading>Time-a</Heading>
        {/* <Suspense fallback={<Loading />}> */}
        <DateView />
        {/* </Suspense> */}
      </VStack>
    </Center>
  );
};

/**
 * @todo fix https://nextjs.org/docs/messages/react-hydration-error
 */
const DateView = () => {
  const {
    query: { t },
  } = useRouter();
  const timestamp = t
    ? Math.floor(Number(t))
    : Math.floor(new Date().getTime() / 1000);
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
