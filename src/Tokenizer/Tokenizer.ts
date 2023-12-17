import type { Context } from "./Context";
import { type Token, TokenKind } from "./Token";
import { nextToken } from "./nextToken";
import type { CharReader } from "~/CharReader";
import { defaultPos } from "~/Pos";

export class Tokenizer {
  private context: Context;
  private buffer: Token[];
  private offset: number;

  constructor(reader: CharReader) {
    this.context = {
      reader,
      pos: defaultPos(),
    };

    this.buffer = [];
    this.offset = 0;
  }

  public hasNext(): boolean {
    return this.context.reader.hasNext() || this.offset < this.buffer.length;
  }

  public consume(): Token {
    const val = this.seek(1);
    this.offset++;

    if (this.offset >= this.buffer.length) {
      this.buffer = [];
      this.offset = 0;
    }

    return val;
  }

  public seek(k: number = 1): Token {
    const pos = this.offset + k - 1;

    for (let i = this.buffer.length; i <= pos; i++) {
      const val = nextToken(this.context);
      if (val.kind === TokenKind.EOF) {
        return val;
      }
      this.buffer.push(val);
    }

    return this.buffer[pos];
  }
}
