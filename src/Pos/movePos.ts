import type { Pos } from "./Pos";

export function movePos(pos: Pos, char: number | string): Pos {
  if (typeof char === "string") {
    char = char.charCodeAt(0);
  }

  const nextPos = { ...pos };

  nextPos.pos += 1;

  if (char === 10) {
    nextPos.line += 1;
    nextPos.column = 1;
  } else {
    nextPos.column += 1;
  }

  return nextPos;
}
