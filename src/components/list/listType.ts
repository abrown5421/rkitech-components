import type { ReactNode } from "react";
import type { AnimationObject } from "../../shared/types/animationTypes";
import { TailwindColorOptions } from "../../shared/types/tailwindTypes";

export type ListOrientation = "vertical" | "horizontal";
export type ListVariant = "unordered" | "ordered" | "custom";

export interface ListProps {
  children: ReactNode;
  orientation?: ListOrientation;
  variant?: ListVariant; 
  bullets?: boolean;
  gap?: number; 
  tailwindClasses?: string;
  animationObject?: AnimationObject;
  style?: React.CSSProperties;
}

export interface ListItemProps {
  children: ReactNode;
  iconBullet?: ReactNode; 
  tailwindClasses?: string;
  colorOptions?: TailwindColorOptions;
  animationObject?: AnimationObject;
  style?: React.CSSProperties;
  onClick?: React.MouseEventHandler<HTMLLIElement>;
}