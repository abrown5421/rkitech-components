import type { AnimationObject } from "../../shared/types/animationTypes";
import { TailwindColorOptions } from "../../shared/types/tailwindTypes";

export interface TextProps {
    text: string;
    tailwindClasses?: string;
    colorOptions?: TailwindColorOptions;
    animationObject?: AnimationObject;
    style?: React.CSSProperties;
}