import { describe, expect, test } from "bun:test";
import invariant from "tiny-invariant";

import { whitespaceConsumer } from ".";
import { type Token, TokenKind } from "..";
import type { Context } from "../Context";
import { StringReader } from "~/CharReader";
import { defaultPos } from "~/Pos";

function consume(text: string): Token | null {
  const ctx: Context = {
    reader: new StringReader(text),
    pos: defaultPos(),
  };

  return whitespaceConsumer(ctx);
}

describe("whitespaceConsumer", () => {
  test("should return null if no whitespace", () => {
    expect(consume("a")).toBeNull();
  });

  test("should consume a single whitespace", () => {
    const token = consume(" ");

    expect(token).not.toBeNull();
    invariant(token != null);

    expect(token.kind).toBe(TokenKind.WS);
    expect(token.text).toBe(" ");
  });

  test("should consume multiple whitespaces", () => {
    const token = consume(" \t\n ");

    expect(token).not.toBeNull();
    invariant(token != null);

    expect(token.kind).toBe(TokenKind.WS);
    expect(token.text).toBe(" \t\n ");
  });

  test("should consume upto non-whitespace char", () => {
    const token = consume(" \t\na");

    expect(token).not.toBeNull();
    invariant(token != null);

    expect(token.kind).toBe(TokenKind.WS);
    expect(token.text).toBe(" \t\n");
  });
});
