import { expect, test } from "bun:test";

import { isDashChar } from "./isDashChar";

test("isDash", () => {
  expect(isDashChar("-")).toBe(true);

  expect(isDashChar("a")).toBe(false);
  expect(isDashChar("—")).toBe(false);
  expect(isDashChar("–")).toBe(false);
});
