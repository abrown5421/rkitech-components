import React$1, { ReactNode, InputHTMLAttributes, SelectHTMLAttributes } from 'react';

type AnimationObject = {
    entranceAnimation: string;
    exitAnimation: string;
    isEntering: boolean;
    delay?: number;
};

interface TextProps {
    text: string;
    tailwindClasses?: string;
    animationObject?: AnimationObject;
    style?: React.CSSProperties;
}

declare const Text: React$1.FC<TextProps>;

interface ContainerProps {
    children: ReactNode;
    tailwindClasses?: string;
    animationObject?: AnimationObject;
    style?: React.CSSProperties;
    onClick?: () => any;
}

declare const Container: React$1.FC<ContainerProps>;

interface ButtonProps {
    children: ReactNode;
    tailwindClasses?: string;
    animationObject?: AnimationObject;
    style?: React.CSSProperties;
    onClick?: () => any;
    startIcon?: ReactNode;
    endIcon?: ReactNode;
}

declare const Button: React$1.FC<ButtonProps>;

type TailwindColor = "red" | "orange" | "amber" | "yellow" | "lime" | "green" | "emerald" | "teal" | "cyan" | "sky" | "blue" | "indigo" | "violet" | "purple" | "fuchsia" | "pink" | "rose";
type TailwindIntensity = 50 | 100 | 200 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | 950;

interface IconProps {
    iconName: string;
    tailwindClasses?: string;
    animationObject?: AnimationObject;
    style?: React.CSSProperties;
    color?: TailwindColor | 'parent';
    intensity?: TailwindIntensity;
    size?: number | string;
}

declare const Icon: React$1.FC<IconProps>;

interface ImageProps {
    src: string;
    alt?: string;
    width?: string | number;
    height?: string | number;
    animationObject?: AnimationObject;
    tailwindClasses?: string;
    style?: React.CSSProperties;
    onClick?: () => any;
}

declare const Image: React$1.FC<ImageProps>;

type ListOrientation = "vertical" | "horizontal";
type ListVariant = "unordered" | "ordered" | "custom";
interface ListProps {
    children: ReactNode;
    orientation?: ListOrientation;
    variant?: ListVariant;
    gap?: number;
    tailwindClasses?: string;
    animationObject?: AnimationObject;
    style?: React.CSSProperties;
}
interface ListItemProps {
    children: ReactNode;
    iconBullet?: ReactNode;
    tailwindClasses?: string;
    animationObject?: AnimationObject;
    style?: React.CSSProperties;
    onClick?: () => any;
}

declare const List: React$1.FC<ListProps>;

declare const ListItem: React$1.FC<ListItemProps>;

interface InputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'className'> {
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

declare const Input: React$1.FC<InputProps>;

interface SelectProps extends Omit<SelectHTMLAttributes<HTMLSelectElement>, 'className'> {
    animationObject?: AnimationObject;
    tailwindClasses?: string;
    label?: string;
    error?: boolean;
    helperText?: string;
    startAdornment?: ReactNode;
    endAdornment?: ReactNode;
    color?: string;
    intensity?: number;
    placeholder?: string;
    children: ReactNode;
}

declare const Select: React$1.FC<SelectProps>;

export { Button, Container, Icon, Image, Input, List, ListItem, Select, Text };
