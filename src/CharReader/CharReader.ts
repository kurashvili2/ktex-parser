export interface CharReader {
  consume(): number;

  seek(k?: number): number;

  hasNext(): boolean;
}
