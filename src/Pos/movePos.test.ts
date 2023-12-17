import { expect, test } from "bun:test";
import { defaultPos } from "./defaultPos";
import { movePos } from "./movePos";

test("movePos", () => {
  let pos = defaultPos();

  pos = movePos(pos, "a");
  pos = movePos(pos, "b");
  pos = movePos(pos, "c");
  expect(pos).toEqual({ pos: 3, line: 1, column: 4 });

  pos = movePos(pos, "\n");
  pos = movePos(pos, "d");
  pos = movePos(pos, "e");
  pos = movePos(pos, "f");
  expect(pos).toEqual({ pos: 7, line: 2, column: 4 });
});
