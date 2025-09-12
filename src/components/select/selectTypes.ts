import { ReactNode, SelectHTMLAttributes } from "react";
import { AnimationObject } from "../../shared/types/animationTypes";

export interface SelectProps extends Omit<SelectHTMLAttributes<HTMLSelectElement>, 'className'> {
  animationObject?: AnimationObject;
  tailwindClasses?: string;
  label?: string;
  error?: boolean;
  helperText?: string;
  startAdornment?: ReactNode;
  endAdornment?: ReactNode;
  color?: string;
  intensity?: number;
  children: ReactNode;
}