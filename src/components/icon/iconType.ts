import type { AnimationObject } from "../../shared/types/animationTypes";
import { TailwindColor, TailwindIntensity } from "../../shared/types/tailwindTypes";

export interface IconProps {
  iconName: string; 
  tailwindClasses?: string;
  animationObject?: AnimationObject;
  style?: React.CSSProperties;
  color?: TailwindColor | 'parent'; 
  intensity?: TailwindIntensity;
  size?: number | string; 
}
