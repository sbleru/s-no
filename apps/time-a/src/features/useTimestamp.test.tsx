import { useTimestamp } from "./useTimestamp";
import { renderHook } from "../../test/render";

describe("useTimestamp", () => {
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
