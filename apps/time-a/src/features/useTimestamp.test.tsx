import { useTimestamp } from "./useTimestamp";
import { renderHook } from "../../test/render";

describe("useTimestamp", () => {
  test("Query params are not exist", () => {
    const now = new Date();
    const { result } = renderHook(() => useTimestamp(), {
      time: {
        fixedNow: now,
      },
    });
    expect(result.current.timestamp).toBe(Math.floor(now.getTime() / 1000));
  });

  test("Timestamp query is exist", () => {
    const { result } = renderHook(() => useTimestamp(), {
      router: {
        query: {
          t: "1645258213",
        },
      },
    });
    expect(result.current.timestamp).toBe(1645258213);
  });

  test("Timestamp millis query is exist", () => {
    const { result } = renderHook(() => useTimestamp(), {
      router: {
        query: {
          m: "1645258213000",
        },
      },
    });
    expect(result.current.timestamp).toBe(1645258213);
  });
});
