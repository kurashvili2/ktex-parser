import { expect, test } from "bun:test";
import { isWhitespaceChar } from "./isWhitespaceChar";

test("isWhitespaceChar", () => {
  expect(isWhitespaceChar(" ")).toBe(true);
  expect(isWhitespaceChar("\t")).toBe(true);
  expect(isWhitespaceChar("\n")).toBe(true);

  expect(isWhitespaceChar("a")).toBe(false);
  expect(isWhitespaceChar("z")).toBe(false);
});
