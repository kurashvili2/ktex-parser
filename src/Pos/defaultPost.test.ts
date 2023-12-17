import { expect, test } from "bun:test";
import { defaultPos } from "./defaultPos";

test("defaultPost", () => {
  const pos = defaultPos();

  expect(pos.column).toBe(1);
  expect(pos.line).toBe(1);
  expect(pos.pos).toBe(0);
});
