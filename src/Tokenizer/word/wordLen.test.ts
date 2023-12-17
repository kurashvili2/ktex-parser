import { expect, test } from "bun:test";

import { wordLen } from "./wordLen";
import { StringReader } from "~/CharReader";

function len(str: string): number {
  return wordLen(new StringReader(str));
}

test("wordLen", () => {
  expect(len("")).toBe(0);

  expect(len("test")).toBe(4);
  expect(len("test-")).toBe(4);
  expect(len("test- ")).toBe(4);
  expect(len("test test")).toBe(4);
  expect(len("test--test")).toBe(4);

  expect(len("test-test")).toBe(9);
  expect(len("test-test-")).toBe(9);
  expect(len("test-test- ")).toBe(9);
  expect(len("test-test--")).toBe(9);

  expect(len("-test")).toBe(0);
});
