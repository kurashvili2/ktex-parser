export interface CharReader {
  consume(k?: number): string;

  seek(k?: number): string;

  hasNext(): boolean;
}
