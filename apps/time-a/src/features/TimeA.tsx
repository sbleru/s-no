import { Suspense, useCallback, useState } from "react";
import { Center, Heading, VStack, Input, Container } from "../ui/Chakra";
import { NextPage } from "next";
import { useTimestamp } from "./useTimestamp";
import { atom, selector, useRecoilState, useRecoilValue } from "recoil";

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
      <CharacterCounter />
    </VStack>
  );
};

const Loading = () => {
  return <Heading>Loading...</Heading>;
};

function CharacterCounter() {
  return (
    <div>
      <TextInput />
      <CharacterCount />
    </div>
  );
}

function TextInput() {
  const [text, setText] = useRecoilState(textState);

  const onChange = (event: {
    target: { value: string | ((currVal: string) => string) };
  }) => {
    setText(event.target.value);
  };

  return (
    <div>
      <input type="text" value={text} onChange={onChange} />
      <br />
      Echo: {text}
    </div>
  );
}

const textState = atom({
  key: "textState", // unique ID (with respect to other atoms/selectors)
  default: "", // default value (aka initial value)
});

const charCountState = selector({
  key: "charCountState", // unique ID (with respect to other atoms/selectors)
  get: ({ get }) => {
    const text = get(textState);

    return text.length;
  },
});

function CharacterCount() {
  const count = useRecoilValue(charCountState);

  return <>Character Count: {count}</>;
}
