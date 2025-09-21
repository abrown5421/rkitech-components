import { InputHTMLAttributes } from "react";
import { AnimationObject } from "../../shared/types/animationTypes";
import { TailwindColorOptions } from "../../shared/types/tailwindTypes";

export interface RadioProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'className' | 'type' | 'size'> {
  animationObject?: AnimationObject;
  tailwindClasses?: string;
  label?: string;
  error?: boolean;
  helperText?: string;
  colorOptions?: TailwindColorOptions;
  size?: 'sm' | 'md' | 'lg';
}