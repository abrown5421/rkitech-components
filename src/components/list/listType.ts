import type { ReactNode } from "react";
import type { AnimationObject } from "../../shared/types/animationTypes";

export type ListOrientation = "vertical" | "horizontal";
export type ListVariant = "unordered" | "ordered" | "custom";

export interface ListProps {
  children: ReactNode;
  orientation?: ListOrientation;
  variant?: ListVariant; 
  gap?: number; 
  tailwindClasses?: string;
  animationObject?: AnimationObject;
  style?: React.CSSProperties;
}

export interface ListItemProps {
  children: ReactNode;
  iconName?: string; 
  tailwindClasses?: string;
  animationObject?: AnimationObject;
  style?: React.CSSProperties;
  onClick?: () => any; 
}