import { useCallback } from "react";
import { atom, useRecoilState } from "recoil";
import { RecoilRoot } from "recoil";
import { RecoilAtomKeys } from "./recoilKeys";

const timeState = atom({
  key: RecoilAtomKeys.TIME,
  default: {
    now: new Date(),
  },
});

/**
 * Time provider
 *
 * RecoilRootは複数使用できる。作りたいglobal stateごとに使用してもよい。
 * そのほうがProviderとセットで作成できる（RecoilRoot一つで一元化することもできそう）
 * @see https://recoiljs.org/docs/api-reference/core/RecoilRoot
 */
export const TimeProvider: React.FC<{
  now?: Date;
}> = ({ children, now }) => {
  if (now) {
    return (
      <RecoilRoot
        // initializeStateをテストでDIするために使用。
        initializeState={({ set }) => {
          set(timeState, {
            now,
          });
        }}
      >
        {children}
      </RecoilRoot>
    );
  }
  return <RecoilRoot>{children}</RecoilRoot>;
};

export const useTime = () => {
  const [time, setTime] = useRecoilState(timeState);
  const revalidate = useCallback(() => {
    setTime({
      now: new Date(),
    });
  }, [setTime]);
  return {
    now: time.now,
    revalidate,
  };
};
