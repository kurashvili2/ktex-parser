import { type Context } from "./Context";
import { type Token, TokenKind } from "./Token";
import { movePos } from "~/Pos";

export type ConsumeFn = (ctx: Context) => Token | null;

type TestFn = (char: number) => boolean;

export function simpleConsumerFunction(testFunction: TestFn, kind: TokenKind): ConsumeFn {
  return (ctx: Context): Token | null => {
    let tokenStr = "";
    let nextPos = ctx.pos;

    while (ctx.reader.hasNext() && testFunction(ctx.reader.seek())) {
      const char = ctx.reader.consume();
      nextPos = movePos(nextPos, char);
      tokenStr += String.fromCharCode(char);
    }

    if (tokenStr.length === 0) return null;

    const token = { kind, text: tokenStr, pos: ctx.pos };

    ctx.pos = nextPos;

    return token;
  };
}
