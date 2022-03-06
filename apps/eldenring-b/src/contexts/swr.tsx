/**
 * Provide swr client.
 */

import useSWRClient, {
  SWRConfig,
  Key,
  Fetcher,
  SWRConfiguration,
  BareFetcher,
  KeyedMutator,
} from "swr";

export const SWRContextProvider: React.FC<{
  value?: Partial<Parameters<typeof SWRConfig>[0]>["value"];
}> = ({ children, value }) => {
  /**
   * Enable suspense by default.
   * @see https://swr.vercel.app/docs/suspense
   */
  return <SWRConfig value={{ suspense: true, ...value }}>{children}</SWRConfig>;
};

/**
 * SWR client
 * Remove undefined type from data.
 * You don't need to check if data is `undefined`, But type define `undefined`.
 * @todo data can be `undefined` when conditional fetching.
 */
export const useSWR = useSWRClient as SWRHook;

/**
 * Copy from SWRHook in swr lib.
 */
interface SWRHook {
  <Data = unknown, Error = unknown, SWRKey extends Key = null>(
    key: SWRKey
  ): SWRResponse<Data, Error>;

  <Data = unknown, Error = unknown, SWRKey extends Key = null>(
    key: SWRKey,
    fetcher: Fetcher<Data, SWRKey> | null
  ): SWRResponse<Data, Error>;

  <Data = unknown, Error = unknown, SWRKey extends Key = null>(
    key: SWRKey,
    config: SWRConfiguration<Data, Error, Fetcher<Data, SWRKey>> | undefined
  ): SWRResponse<Data, Error>;

  <Data = unknown, Error = unknown, SWRKey extends Key = null>(
    key: SWRKey,
    fetcher: Fetcher<Data, SWRKey> | null,
    config: SWRConfiguration<Data, Error, Fetcher<Data, SWRKey>> | undefined
  ): SWRResponse<Data, Error>;

  <Data = unknown, Error = unknown>(key: Key): SWRResponse<Data, Error>;

  <Data = unknown, Error = unknown>(
    key: Key,
    fetcher: BareFetcher<Data> | null
  ): SWRResponse<Data, Error>;

  <Data = unknown, Error = unknown>(
    key: Key,
    config: SWRConfiguration<Data, Error, BareFetcher<Data>> | undefined
  ): SWRResponse<Data, Error>;

  <Data = unknown, Error = unknown>(
    key: Key,
    fetcher: BareFetcher<Data> | null,
    config: SWRConfiguration<Data, Error, BareFetcher<Data>> | undefined
  ): SWRResponse<Data, Error>;
}

/**
 * Copy from SWRResponse in swr lib.
 */
interface SWRResponse<Data = unknown, Error = unknown> {
  data: Data;
  error?: Error;
  mutate: KeyedMutator<Data>;
  isValidating: boolean;
}
