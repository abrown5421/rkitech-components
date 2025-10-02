import { InputHTMLAttributes } from "react";
import { AnimationObject } from "../../shared/types/animationTypes";

export interface CheckboxProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'className' | 'type' | 'size'> {
  animationObject?: AnimationObject;
  tailwindClasses?: string;
  label?: string;
  error?: boolean;
  helperText?: string;
  indeterminate?: boolean;
  color?: string;
  intensity?: number;
  size?: 'sm' | 'md' | 'lg';
  style?: React.CSSProperties;
}