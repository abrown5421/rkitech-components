import { ReactNode, SelectHTMLAttributes } from "react";
import { AnimationObject } from "../../shared/types/animationTypes";
import { TailwindColorOptions } from "../../shared/types/tailwindTypes";

export interface SelectProps extends Omit<SelectHTMLAttributes<HTMLSelectElement>, 'className'> {
  animationObject?: AnimationObject;
  tailwindClasses?: string;
  label?: string;
  error?: boolean;
  helperText?: string;
  startAdornment?: ReactNode;
  endAdornment?: ReactNode;
  colorOptions?: TailwindColorOptions;
  placeholder?: string;
  children: ReactNode;
}