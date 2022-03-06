import { useRouter } from "next/router";
import { useTime } from "../contexts/time";

export const useTimestamp = (): {
  timestamp: number;
  // renderView: () => JSX.Element;
} => {
  const {
    query: {
      // timestamp
      t,
    },
  } = useRouter();
  const { now } = useTime();

  // Suspenseが使えないならこれ正直あり
  // https://engineering.linecorp.com/ja/blog/line-securities-frontend-3/
  // const renderView = useCallback(() => {
  //   return <View timestamp={data.timestamp} />;
  // }, [data]);

  return {
    timestamp: translateTimestamp({
      t: t as string,
      nowMillis: now.getTime(),
    }),
    // renderView,
  };
};

/**
 * Return translated timestamp
 */
export const translateTimestamp = ({
  t,
  nowMillis,
}: {
  t?: string;
  nowMillis: number;
}): number => {
  //
  const baseDigitCount = 10;
  if (!t || isNaN(Number(t)) || t.length < baseDigitCount) {
    return Math.floor(nowMillis / 1000);
  }
  const floorDigitCount = t.length - baseDigitCount;
  const divideNumber = (() => {
    let c = "1";
    for (let i = 0; i < floorDigitCount; i++) {
      c = c.concat("0");
    }
    return Number(c);
  })();
  return Math.floor(Number(t) / divideNumber);
};
