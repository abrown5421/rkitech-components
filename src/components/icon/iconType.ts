import type { AnimationObject } from "../../shared/types/animationTypes";

export interface IconProps {
  iconName: string; 
  tailwindClasses?: string;
  animationObject?: AnimationObject;
  style?: React.CSSProperties;
  color?: string; 
  size?: number | string; 
}
