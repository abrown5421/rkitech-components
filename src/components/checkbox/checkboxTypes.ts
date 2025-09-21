import { InputHTMLAttributes } from "react";
import { AnimationObject } from "../../shared/types/animationTypes";
import { TailwindColorOptions } from "../../shared/types/tailwindTypes";

export interface CheckboxProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'className' | 'type' | 'size'> {
  animationObject?: AnimationObject;
  tailwindClasses?: string;
  label?: string;
  error?: boolean;
  helperText?: string;
  indeterminate?: boolean;
  colorOptions: TailwindColorOptions;
  size?: 'sm' | 'md' | 'lg';
}