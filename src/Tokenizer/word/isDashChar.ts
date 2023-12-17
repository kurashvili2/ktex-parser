import { dashChar } from "../chars";

export function isDashChar(char: number | string): boolean {
  if (typeof char === "string") {
    char = char.charCodeAt(0);
  }

  return char === dashChar;
}
