import type { Pos } from "./Pos";

export function defaultPos(): Pos {
  return { pos: 0, line: 1, column: 1 };
}
