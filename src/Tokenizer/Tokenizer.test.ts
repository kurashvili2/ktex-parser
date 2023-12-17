import { describe, expect, test } from "bun:test";

import { TokenKind } from "./Token";
import { Tokenizer } from "./Tokenizer";
import { StringReader } from "~/CharReader";

function buildTokenizer(src: string): Tokenizer {
  return new Tokenizer(new StringReader(src));
}

describe("Tokenizer", () => {
  test("consecutive consumption", () => {
    const tokenizer = buildTokenizer("hello world");

    expect(tokenizer.hasNext()).toBe(true);
    const t1 = tokenizer.consume();
    expect(t1.kind).toBe(TokenKind.Word);
    expect(t1.text).toBe("hello");

    expect(tokenizer.hasNext()).toBe(true);
    const t2 = tokenizer.consume();
    expect(t2.kind).toBe(TokenKind.WS);
    expect(t2.text).toBe(" ");

    expect(tokenizer.hasNext()).toBe(true);
    const t3 = tokenizer.consume();
    expect(t3.kind).toBe(TokenKind.Word);
    expect(t3.text).toBe("world");

    expect(tokenizer.hasNext()).toBe(false);
  });

  test("seeking", () => {
    const tokenizer = buildTokenizer("hello world");

    const t3 = tokenizer.seek(3);
    expect(t3.kind).toBe(TokenKind.Word);
    expect(t3.text).toBe("world");
  });

  test("seeking beyond the end", () => {
    const tokenizer = buildTokenizer("hello world");

    const token = tokenizer.seek(10);
    expect(token.kind).toBe(TokenKind.EOF);

    expect(tokenizer.hasNext()).toBe(true);
    const t1 = tokenizer.consume();
    expect(t1.kind).toBe(TokenKind.Word);
    expect(t1.text).toBe("hello");

    expect(tokenizer.hasNext()).toBe(true);
    const t2 = tokenizer.consume();
    expect(t2.kind).toBe(TokenKind.WS);
    expect(t2.text).toBe(" ");

    expect(tokenizer.hasNext()).toBe(true);
    const t3 = tokenizer.consume();
    expect(t3.kind).toBe(TokenKind.Word);
    expect(t3.text).toBe("world");

    expect(tokenizer.hasNext()).toBe(false);
  });
});
