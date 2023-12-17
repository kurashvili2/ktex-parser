import { type ConsumeFn, simpleConsumerFunction } from "./ConsumerFn";
import { type Context } from "./Context";
import { type Token, TokenKind } from "./Token";
import { whitespaceConsumer } from "./whitespace";
import { wordConsumer } from "./word";

const defaultConsumers: ConsumeFn[] = [whitespaceConsumer, wordConsumer];

export function nextToken(ctx: Context): Token {
  if (!ctx.reader.hasNext()) {
    return {
      kind: TokenKind.EOF,
      text: "",
      pos: ctx.pos,
    };
  }

  for (const consumer of defaultConsumers) {
    const token = consumer(ctx);

    if (token != null) {
      return token;
    }
  }

  throw new Error("No consumer matched!");
}
