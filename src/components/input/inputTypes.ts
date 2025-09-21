import { InputHTMLAttributes, ReactNode } from "react";
import { AnimationObject } from "../../shared/types/animationTypes";
import { TailwindColor, TailwindColorOptions } from "../../shared/types/tailwindTypes";

export interface InputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'className'> {
  animationObject?: AnimationObject;
  tailwindClasses?: string;
  label?: string;
  error?: boolean;
  helperText?: string;
  startAdornment?: ReactNode;
  endAdornment?: ReactNode;
  multiline?: boolean;
  rows?: number | 'fill';
  colorOptions?: TailwindColorOptions;
}