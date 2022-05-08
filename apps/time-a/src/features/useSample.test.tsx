import { renderHook } from "../../test/render";
import { useSample } from "./useSample";

describe("useSample", () => {
  test("Contain useSWR in custom hook", () => {
    const now = new Date();
    const nowTimestamp = now.getTime();
    const { result } = renderHook(() => useSample(), {
      time: {
        now,
      },
      swr: {
        fallback: {
          useSample: {
            timestamp: nowTimestamp,
          },
        },
      },
    });
    expect(result.current.timestamp).toBe(nowTimestamp);
  });
});
