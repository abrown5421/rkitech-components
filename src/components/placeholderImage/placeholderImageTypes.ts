import { TailwindColor, TailwindIntensity } from "../../shared/types/tailwindTypes";
import { ImageProps } from "../image/imageTypes";

export type TailwindColorObject = {
    color: TailwindColor,
    intensity: TailwindIntensity
}

export type PlaceholderConfig = {
    cellSize: number;        
    variance: number;         
    xColors: TailwindColorObject[];
    yColors: TailwindColorObject[];
}

export interface PlaceholderImageProps {
    width: number | string;
    height: number | string;
    placeholder: PlaceholderConfig;
    image?: ImageProps;
}