import type { ReactNode } from "react";
import type { AnimationObject } from "../../shared/types/animationTypes";
import { TailwindColorOptions } from "../../shared/types/tailwindTypes";

export interface ButtonProps {
  children: ReactNode;
  tailwindClasses?: string;
  color?: TailwindColorOptions;
  animationObject?: AnimationObject;
  style?: React.CSSProperties;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  startIcon?: ReactNode; 
  endIcon?: ReactNode;   
}
