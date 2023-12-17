import { type ConsumeFn } from "../ConsumerFn";
import type { Context } from "../Context";
import { type Token, TokenKind } from "../Token";
import { wordLen } from "./wordLen";
import { movePos } from "~/Pos";

export const wordConsumer: ConsumeFn = (ctx: Context): Token | null => {
  const len = wordLen(ctx.reader);

  if (len === 0) return null;

  let text = "";
  let nextPos = ctx.pos;

  for (let i = 0; i < len; i++) {
    const char = ctx.reader.consume();
    text += String.fromCharCode(char);
    nextPos = movePos(nextPos, char);
  }

  const token: Token = {
    kind: TokenKind.Word,
    text,
    pos: ctx.pos,
  };

  ctx.pos = nextPos;

  return token;
};
