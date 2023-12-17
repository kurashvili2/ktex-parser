import { isWhitespaceChar } from "../whitespace";

export function isWordChar(char: number | string): boolean {
  return !isWhitespaceChar(char);
}
