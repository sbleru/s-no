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
      // timestamp millis
      m,
    },
  } = useRouter();
  const { now } = useTime();

  // Suspenseが使えないならこれ正直あり
  // https://engineering.linecorp.com/ja/blog/line-securities-frontend-3/
  // const renderView = useCallback(() => {
  //   return <View timestamp={data.timestamp} />;
  // }, [data]);

  return {
    timestamp:
      t && !isNaN(Number(t))
        ? Math.floor(Number(t))
        : m && !isNaN(Number(m))
        ? Math.floor(Number(m) / 1000)
        : Math.floor(now.getTime() / 1000),
    // renderView,
  };
};
