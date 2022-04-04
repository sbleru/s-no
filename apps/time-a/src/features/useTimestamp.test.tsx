import { translateTimestamp, useTimestamp } from "./useTimestamp";
import { renderHook } from "../../test/render";

describe("useTimestamp", () => {
  test("Query params are not exist", () => {
    const now = new Date();
    const { result } = renderHook(() => useTimestamp(), {
      time: {
        now,
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
});

describe("translateTimestamp", () => {
  const nowMillis = new Date().getTime();
  const nowTimestamp = Math.floor(nowMillis / 1000);
  test("No query param", () => {
    expect(
      translateTimestamp({
        nowMillis,
      })
    ).toBe(nowTimestamp);
  });
  test("t is not a number", () => {
    expect(
      translateTimestamp({
        t: "hoge",
        nowMillis,
      })
    ).toBe(nowTimestamp);
  });
  test("t is shortage of digit", () => {
    expect(
      translateTimestamp({
        t: "123",
        nowMillis,
      })
    ).toBe(nowTimestamp);
  });
  test("t is timestamp millis", () => {
    const t = "1646445174123";
    expect(
      translateTimestamp({
        t,
        nowMillis,
      })
    ).toBe(1646445174);
  });
  test("t is timestamp", () => {
    const t = "1646445174";
    expect(
      translateTimestamp({
        t,
        nowMillis,
      })
    ).toBe(1646445174);
  });
});
