import { describe, expect, test } from "bun:test";

import { StringReader } from "./StringReader";

describe("StringReader", () => {
  test("consumption", () => {
    const reader = new StringReader("abc");

    expect(reader.hasNext()).toBe(true);
    expect(reader.consume()).toBe(97); // "a"

    expect(reader.hasNext()).toBe(true);
    expect(reader.consume()).toBe(98); // "b"

    expect(reader.hasNext()).toBe(true);
    expect(reader.consume()).toBe(99); // "c"

    expect(reader.hasNext()).toBe(false);
  });

  test("seeking", () => {
    const reader = new StringReader("abc");

    for (let i = 0; i < 3; i++) {
      expect(reader.seek(1)).toBe(97); // "a"
      expect(reader.seek(2)).toBe(98); // "b"
      expect(reader.seek(3)).toBe(99); // "c"
    }
  });
});
