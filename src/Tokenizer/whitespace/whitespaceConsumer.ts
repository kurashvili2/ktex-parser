import { TokenKind } from "..";
import { simpleConsumerFunction } from "../ConsumerFn";
import { isWhitespaceChar } from "./isWhitespaceChar";

export const whitespaceConsumer = simpleConsumerFunction(isWhitespaceChar, TokenKind.WS);
