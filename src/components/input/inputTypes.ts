import { InputHTMLAttributes, ReactNode } from "react";
import { AnimationObject } from "../../shared/types/animationTypes";

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
  color?: string;
  intensity?: number;
}