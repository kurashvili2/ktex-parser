import { CharReader } from ".";

export class StringReader implements CharReader {
  private source: string;
  private position: number = 0;

  constructor(source: string) {
    this.source = source;
    this.position = 0;
  }

  public hasNext(): boolean {
    return this.position < this.source.length;
  }

  public consume(k: number = 1): string {
    const char = this.seek(k);
    this.position += k;
    return char;
  }

  public seek(k: number = 1): string {
    if (k < 0) throw new Error("k must be positive");

    return this.source[this.position + k - 1];
  }
}
