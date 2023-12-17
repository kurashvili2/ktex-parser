import { describe, expect, test } from "bun:test";

import { StringReader } from "./StringReader";

describe("StringReader", () => {
  test("consumption", () => {
    const reader = new StringReader("abc");

    expect(reader.hasNext()).toBe(true);
    expect(reader.consume()).toBe("a");

    expect(reader.hasNext()).toBe(true);
    expect(reader.consume()).toBe("b");

    expect(reader.hasNext()).toBe(true);
    expect(reader.consume()).toBe("c");

    expect(reader.hasNext()).toBe(false);
  });

  test("seeking", () => {
    const reader = new StringReader("abc");

    for (let i = 0; i < 3; i++) {
      expect(reader.seek(1)).toBe("a");
      expect(reader.seek(2)).toBe("b");
      expect(reader.seek(3)).toBe("c");
    }
  });
});
