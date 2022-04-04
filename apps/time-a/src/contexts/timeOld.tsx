import {
  createContext,
  FC,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";

type Time = Readonly<{
  now: Date;
  revalidate: () => void;
}>;

const defaultDate: Time = {
  now: new Date(),
  revalidate: () => {},
};

const TimeContext = createContext<
  Readonly<{
    time: Time;
  }>
>({ time: defaultDate });

const useTimeContext = (): { time: Time } => {
  const context = useContext(TimeContext);
  if (context === undefined) {
    throw new Error(`Must be used within a TimeContextProvider`);
  }
  return context;
};

/**
 * @deprecated
 */
export const TimeContextProvider: FC<{
  /**
   * For testing
   */
  fixedNow?: Date;
}> = ({ children, fixedNow, ...values }) => {
  const [now, setNow] = useState(fixedNow ?? new Date());
  const revalidate = useCallback(() => {
    setNow(fixedNow ?? new Date());
  }, [fixedNow]);
  return (
    <TimeContext.Provider
      value={{ time: { ...defaultDate, ...values, now, revalidate } }}
    >
      {children}
    </TimeContext.Provider>
  );
};

/**
 * @deprecated
 */
export const useTime = (): Time => {
  const {
    time: { now, revalidate },
  } = useTimeContext();
  useEffect(() => {
    revalidate();
  }, [revalidate]);
  return {
    now,
    revalidate,
  };
};
