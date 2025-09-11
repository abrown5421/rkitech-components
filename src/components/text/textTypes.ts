import type { AnimationObject } from "../../shared/types/animationTypes";

export interface TextProps {
    text: string;
    tailwindClasses?: string;
    animationObject?: AnimationObject;
    style?: React.CSSProperties;
}