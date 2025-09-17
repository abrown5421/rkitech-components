import type { ReactNode } from "react";
import type { AnimationObject } from "../../shared/types/animationTypes";

export interface ButtonProps {
  children: ReactNode;
  tailwindClasses?: string;
  animationObject?: AnimationObject;
  style?: React.CSSProperties;
  onClick?: (() => any) | ((e: React.MouseEvent<HTMLDivElement, MouseEvent>) => any);
  startIcon?: ReactNode; 
  endIcon?: ReactNode;   
}
