import { type Pos } from "~/Pos";

export enum TokenKind {
  EOF = "EOF",
  Word = "Word",
  WS = "WS",
}

export type Token = {
  kind: TokenKind;
  text: string;
  pos: Pos;
};
