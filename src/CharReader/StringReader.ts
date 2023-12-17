import type { CharReader } from "./CharReader";

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

  public consume(): number {
    const char = this.seek();
    this.position += 1;
    return char;
  }

  public seek(k: number = 1): number {
    if (k < 0) throw new Error("k must be positive");

    return this.source.charCodeAt(this.position + k - 1);
  }
}
