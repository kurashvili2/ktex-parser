import { type CharReader } from "~/CharReader";
import { type Pos } from "~/Pos";

export type Context = {
  reader: CharReader;
  pos: Pos;
};
