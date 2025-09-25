declare module "trianglify" {
  interface TrianglifyOptions {
    width: number;
    height: number;
    cell_size?: number;
    variance?: number;
    x_colors?: string[] | "random";
    y_colors?: string[] | "match";
  }

  interface Pattern {
    toCanvas(): HTMLCanvasElement;
    toSVG(): string;
  }

  export default function Trianglify(options: TrianglifyOptions): Pattern;
}
