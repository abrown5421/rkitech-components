import { ImageProps } from "../image/imageTypes";

export interface PlaceholderImageProps {
    width: number,
    height: number,
    cellSize: number,
    variance: number,
    xColors: 'random',
    yColors: 'match',
    image: ImageProps
}