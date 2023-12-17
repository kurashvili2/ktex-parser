import { isDashChar } from "./isDashChar";
import { isWordChar } from "./isWordChar";
import type { CharReader } from "~/CharReader";

export function wordLen(reader: CharReader): number {
  let len = 0;
  let prevIsDash = false;

  while (true) {
    const char = reader.seek(len + 1);

    if (isNaN(char)) return len - (prevIsDash ? 1 : 0);

    const isDash = isDashChar(char);
    const isWord = isWordChar(char);

    if (isDash && len === 0) {
      return 0;
    } else if (isDash && prevIsDash) {
      return len - 1;
    } else if (isWord) {
      prevIsDash = false;
    } else {
      return len - (prevIsDash ? 1 : 0);
    }

    len++;
    prevIsDash = isDash;
  }
}
