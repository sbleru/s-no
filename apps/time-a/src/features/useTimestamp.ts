import { useRouter } from "next/router";
import { useSWR } from "../contexts/swr";

export const useTimestamp = (): {
  timestamp: number;
  error: unknown;
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

  const { data, error } = useSWR("timestamp", () => {
    return {
      timestamp:
        t && !isNaN(Number(t))
          ? Math.floor(Number(t))
          : m && !isNaN(Number(m))
          ? Math.floor(Number(m) / 1000)
          : Math.floor(new Date().getTime() / 1000),
    };
  });

  // Suspenseが使えないならこれ正直あり
  // https://engineering.linecorp.com/ja/blog/line-securities-frontend-3/
  // const renderView = useCallback(() => {
  //   return <View timestamp={data.timestamp} />;
  // }, [data]);

  return {
    timestamp: data.timestamp,
    error,
    // renderView,
  };
};
