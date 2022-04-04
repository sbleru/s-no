/*!
Testing utilities

render providers are inspired by https://github.com/blitz-js/blitz
@see https://github.com/blitz-js/blitz/blob/6653f31b27b6cc324f87aa4f68b7c0385f70d47c/nextjs/test/blitz-test-utils.tsx

- swr
Use fallback to inject data.
@see https://swr.vercel.app/docs/with-nextjs
*/

import {
  renderHook as defaultRenderHook,
  RenderHookOptions as DefaultRenderHookOptions,
} from "@testing-library/react-hooks";
import { RouterContext } from "next/dist/shared/lib/router-context";
import { NextRouter } from "next/router";
import React from "react";
import { SWRContextProvider } from "../src/contexts/swr";
import { TimeProvider } from "../src/contexts/time";

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
    swr,
    ...options
  }: DefaultRenderHookOptions<TProps> & {
    router?: Partial<NextRouter>;
    dehydratedState?: unknown;
    time?: Parameters<typeof TimeProvider>[0];
    swr?: Parameters<typeof SWRContextProvider>[0]["value"];
  } = {}
) => {
  if (!wrapper) {
    // eslint-disable-next-line react/display-name
    wrapper = ({ children }) => (
      <RouterContext.Provider value={{ ...mockRouter, ...router }}>
        <SWRContextProvider value={{ ...swr }}>
          <TimeProvider {...time}>{children} </TimeProvider>
        </SWRContextProvider>
      </RouterContext.Provider>
    );
  }
  return defaultRenderHook(hook, { wrapper, ...options });
};
