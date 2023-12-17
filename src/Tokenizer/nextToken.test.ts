import { describe, expect, test } from "bun:test";

import { type Context } from "./Context";
import { TokenKind } from "./Token";
import { nextToken } from "./nextToken";
import { StringReader } from "~/CharReader";
import { defaultPos } from "~/Pos";

describe("nextToken", () => {
  test("hello world", () => {
    const ctx: Context = {
      reader: new StringReader("hello world"),
      pos: defaultPos(),
    };

    const t1 = nextToken(ctx);
    expect(t1.kind).toBe(TokenKind.Word);
    expect(t1.text).toBe("hello");
    expect(t1.pos).toEqual({ pos: 0, line: 1, column: 1 });

    const t2 = nextToken(ctx);
    expect(t2.kind).toBe(TokenKind.WS);
    expect(t2.text).toBe(" ");
    expect(t2.pos).toEqual({ pos: 5, line: 1, column: 6 });

    const t3 = nextToken(ctx);
    expect(t3.kind).toBe(TokenKind.Word);
    expect(t3.text).toBe("world");
    expect(t3.pos).toEqual({ pos: 6, line: 1, column: 7 });
  });
});
