/*!
Testing utilities

render providers are inspired by https://github.com/blitz-js/blitz
@see https://github.com/blitz-js/blitz/blob/6653f31b27b6cc324f87aa4f68b7c0385f70d47c/nextjs/test/blitz-test-utils.tsx
*/

import {
  renderHook as defaultRenderHook,
  RenderHookOptions as DefaultRenderHookOptions,
} from "@testing-library/react-hooks";
import { RouterContext } from "next/dist/shared/lib/router-context";
import { NextRouter } from "next/router";
import React from "react";
import { TimeContextProvider } from "../src/contexts/time";

/**
 * WIP swr
 * https://swr.vercel.app/ja/blog/swr-v1#%E4%BB%A3%E6%9B%BF%E3%83%87%E3%83%BC%E3%82%BF
 */
//  import { Middleware, SWRConfig, SWRResponse } from "swr";
// Try using swr middleware for testing.
// const testMiddleware: unknown = () => {
//   return (key: string): SWRResponse<unknown, unknown> => {
//     const mockData: Record<string, unknown> = {
//       timestamp: {
//         data: {
//           timestamp: null
//         },
//       },
//     };
//     return {
//       data: mockData?.[key],
//       error: undefined,
//       mutate: (_) => Promise.resolve(),
//       isValidating: false,
//     };
//   };
// };

const mockRouter: NextRouter = {
  basePath: "",
  pathname: "/",
  route: "/",
  asPath: "/",
  query: {},
  isReady: true,
  isLocaleDomain: false,
  isPreview: false,
  push: jest.fn(),
  replace: jest.fn(),
  reload: jest.fn(),
  back: jest.fn(),
  prefetch: jest.fn(),
  beforePopState: jest.fn(),
  events: {
    on: jest.fn(),
    off: jest.fn(),
    emit: jest.fn(),
  },
  isFallback: false,
};

export const renderHook = <TProps, TResult>(
  hook: (props: TProps) => TResult,
  {
    wrapper,
    router,
    dehydratedState,
    time,
    ...options
  }: DefaultRenderHookOptions<TProps> & {
    router?: Partial<NextRouter>;
    dehydratedState?: unknown;
    time?: Parameters<typeof TimeContextProvider>[0];
  } = {}
) => {
  if (!wrapper) {
    // eslint-disable-next-line react/display-name
    wrapper = ({ children }) => (
      <RouterContext.Provider value={{ ...mockRouter, ...router }}>
        <TimeContextProvider {...time}>{children}</TimeContextProvider>
      </RouterContext.Provider>
    );
  }
  return defaultRenderHook(hook, { wrapper, ...options });
};
