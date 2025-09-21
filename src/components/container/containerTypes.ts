import type { ReactNode } from "react";
import type { AnimationObject } from "../../shared/types/animationTypes";
import { TailwindColorOptions } from "../../shared/types/tailwindTypes";

export interface ContainerProps {
  children: ReactNode;
  tailwindClasses?: string;
  colorOptions?: TailwindColorOptions;
  animationObject?: AnimationObject;
  style?: React.CSSProperties;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
}