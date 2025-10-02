import { TailwindColorObject } from "../../shared/types/tailwindTypes";

export interface PlaceholderImageProps {
    src?: string,
    width: string | number,
    height: string | number,
    cellSize: number,
    variance: number,
    xColors: TailwindColorObject[],
    yColors: TailwindColorObject[],
    tailwindClasses?: string;
    style?: React.CSSProperties;
}