import type { AnimationObject } from "../../shared/types/animationTypes";

export interface ImageProps {
  src: string;
  alt?: string;
  width?: string | number;
  height?: string | number;
  animationObject?: AnimationObject;
  tailwindClasses?: string;
  style?: React.CSSProperties;
  onClick?: () => any; 
}