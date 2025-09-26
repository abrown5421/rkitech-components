declare module "trianglify" {
  interface TrianglifyOptions {
    width: number;
    height: number;
    cellSize?: number;
    variance?: number;
    xColors?: string[] | "random";
    yColors?: string[] | "match";
  }

  interface Pattern {
    toCanvas(): HTMLCanvasElement;
    toSVG(): string;
  }

  export default function Trianglify(options: TrianglifyOptions): Pattern;
}
