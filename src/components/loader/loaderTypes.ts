import { TailwindColor, TailwindIntensity } from "../../shared/types/tailwindTypes";

export interface LoaderProps {
    show: boolean;
    color?: TailwindColor; 
    intensity?: TailwindIntensity;
    type: 'Dots' | 'Bars' | 'Spinner' | 'Progress';
    variant: number;
    tailwindClasses?: string;
    style?: React.CSSProperties;
}