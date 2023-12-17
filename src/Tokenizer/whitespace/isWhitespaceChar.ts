import { newlineChar, spaceChar, tabChar } from "../chars";

const whitespaceChars = new Set<number>([spaceChar, tabChar, newlineChar]);

export function isWhitespaceChar(char: number | string): boolean {
  if (typeof char === "string") {
    char = char.charCodeAt(0);
  }

  return whitespaceChars.has(char);
}
