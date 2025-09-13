import { InputHTMLAttributes } from "react";
import { AnimationObject } from "../../shared/types/animationTypes";

export interface RadioProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'className' | 'type' | 'size'> {
  animationObject?: AnimationObject;
  tailwindClasses?: string;
  label?: string;
  error?: boolean;
  helperText?: string;
  color?: string;
  intensity?: number;
  size?: 'sm' | 'md' | 'lg';
}