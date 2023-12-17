import { describe, expect, test } from "bun:test";
import invariant from "tiny-invariant";

import { wordConsumer } from ".";
import type { Context } from "../Context";
import { type Token, TokenKind } from "../Token";
import { StringReader } from "~/CharReader";
import { defaultPos } from "~/Pos";

function consume(text: string): Token | null {
  const ctx: Context = {
    reader: new StringReader(text),
    pos: defaultPos(),
  };

  return wordConsumer(ctx);
}

describe("wordConsumer", () => {
  test("should return null if no word", () => {
    expect(consume(" ")).toBeNull();
  });

  test("should consume a single word", () => {
    const token = consume("hello world");

    expect(token).not.toBeNull();
    invariant(token != null);

    expect(token.kind).toBe(TokenKind.Word);
    expect(token.text).toBe("hello");
  });

  test("should consume a dashed word", () => {
    const token = consume("hello-world");

    expect(token).not.toBeNull();
    invariant(token != null);

    expect(token.kind).toBe(TokenKind.Word);
    expect(token.text).toBe("hello-world");
  });
});
