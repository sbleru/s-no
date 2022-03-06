import { useRouter } from "next/router";
import { useSWR } from "../contexts/swr";
import { useTime } from "../contexts/time";

export const useSample = (): {
  timestamp: number;
  error: unknown;
} => {
  const {
    query: {
      // timestamp
      t,
      // timestamp millis
      m,
    },
  } = useRouter();
  const { now } = useTime();
  const { data, error } = useSWR("useSample", async () => {
    await sleep(1000);
    return {
      timestamp: Math.floor(now.getTime() / 1000),
    };
  });

  return {
    timestamp: data.timestamp,
    error,
  };
};

const sleep = (ms: number): Promise<void> => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};
