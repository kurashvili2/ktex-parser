import { expect, test } from "bun:test";
import { isWordChar } from "./isWordChar";

test("isWordChar", () => {
  expect(isWordChar(" ")).toBe(false);
  expect(isWordChar("\t")).toBe(false);
  expect(isWordChar("\n")).toBe(false);

  expect(isWordChar("a")).toBe(true);
  expect(isWordChar("z")).toBe(true);
});
