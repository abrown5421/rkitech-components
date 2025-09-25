import React$1, { ReactNode, InputHTMLAttributes, SelectHTMLAttributes } from 'react';

type EntranceAnimation = "animate__backInDown" | "animate__backInLeft" | "animate__backInRight" | "animate__backInUp" | "animate__bounceIn" | "animate__bounceInDown" | "animate__bounceInLeft" | "animate__bounceInRight" | "animate__bounceInUp" | "animate__fadeIn" | "animate__fadeInDown" | "animate__fadeInDownBig" | "animate__fadeInLeft" | "animate__fadeInLeftBig" | "animate__fadeInRight" | "animate__fadeInRightBig" | "animate__fadeInUp" | "animate__fadeInUpBig" | "animate__fadeInTopLeft" | "animate__fadeInTopRight" | "animate__fadeInBottomLeft" | "animate__fadeInBottomRight" | "animate__flipInX" | "animate__flipInY" | "animate__lightSpeedInRight" | "animate__lightSpeedInLeft" | "animate__rotateIn" | "animate__rotateInDownLeft" | "animate__rotateInDownRight" | "animate__rotateInUpLeft" | "animate__rotateInUpRight" | "animate__jackInTheBox" | "animate__rollIn" | "animate__zoomIn" | "animate__zoomInDown" | "animate__zoomInLeft" | "animate__zoomInRight" | "animate__zoomInUp" | "animate__slideInDown" | "animate__slideInLeft" | "animate__slideInRight" | "animate__slideInUp";
type ExitAnimation = "animate__backOutDown" | "animate__backOutLeft" | "animate__backOutRight" | "animate__backOutUp" | "animate__bounceOut" | "animate__bounceOutDown" | "animate__bounceOutLeft" | "animate__bounceOutRight" | "animate__bounceOutUp" | "animate__fadeOut" | "animate__fadeOutDown" | "animate__fadeOutDownBig" | "animate__fadeOutLeft" | "animate__fadeOutLeftBig" | "animate__fadeOutRight" | "animate__fadeOutRightBig" | "animate__fadeOutUp" | "animate__fadeOutUpBig" | "animate__fadeOutTopLeft" | "animate__fadeOutTopRight" | "animate__fadeOutBottomRight" | "animate__fadeOutBottomLeft" | "animate__flipOutX" | "animate__flipOutY" | "animate__lightSpeedOutRight" | "animate__lightSpeedOutLeft" | "animate__rotateOut" | "animate__rotateOutDownLeft" | "animate__rotateOutDownRight" | "animate__rotateOutUpLeft" | "animate__rotateOutUpRight" | "animate__rollOut" | "animate__zoomOut" | "animate__zoomOutDown" | "animate__zoomOutLeft" | "animate__zoomOutRight" | "animate__zoomOutUp" | "animate__slideOutDown" | "animate__slideOutLeft" | "animate__slideOutRight" | "animate__slideOutUp";
type AnimationObject = {
    entranceAnimation: EntranceAnimation;
    exitAnimation: ExitAnimation;
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
    onClick?: React.MouseEventHandler<HTMLDivElement>;
}

declare const Container: React$1.FC<ContainerProps>;

interface ButtonProps {
    children: ReactNode;
    tailwindClasses?: string;
    animationObject?: AnimationObject;
    style?: React.CSSProperties;
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
    startIcon?: ReactNode;
    endIcon?: ReactNode;
}

declare const Button: React$1.FC<ButtonProps>;

type TailwindColor = 'red' | 'orange' | 'amber' | 'yellow' | 'lime' | 'green' | 'emerald' | 'teal' | 'cyan' | 'sky' | 'blue' | 'indigo' | 'violet' | 'purple' | 'fuchsia' | 'pink' | 'rose' | 'slate' | 'gray' | 'zinc' | 'neutral' | 'stone';
type ThemeOptions = 'primary' | 'secondary' | 'tertiary' | 'quaternary' | 'quinary' | 'black' | 'white';
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
    onClick?: React.MouseEventHandler<HTMLImageElement>;
}

declare const Image: React$1.FC<ImageProps>;

type ListOrientation = "vertical" | "horizontal";
type ListVariant = "unordered" | "ordered" | "custom";
interface ListProps {
    children: ReactNode;
    orientation?: ListOrientation;
    variant?: ListVariant;
    bullets?: boolean;
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
    onClick?: React.MouseEventHandler<HTMLLIElement>;
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

interface RadioProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'className' | 'type' | 'size'> {
    animationObject?: AnimationObject;
    tailwindClasses?: string;
    label?: string;
    error?: boolean;
    helperText?: string;
    color?: string;
    intensity?: number;
    size?: 'sm' | 'md' | 'lg';
}

declare const Radio: React$1.FC<RadioProps>;

interface CheckboxProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'className' | 'type' | 'size'> {
    animationObject?: AnimationObject;
    tailwindClasses?: string;
    label?: string;
    error?: boolean;
    helperText?: string;
    indeterminate?: boolean;
    color?: string;
    intensity?: number;
    size?: 'sm' | 'md' | 'lg';
}

declare const Checkbox: React$1.FC<CheckboxProps>;

interface SwitchProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'className' | 'type' | 'size'> {
    animationObject?: AnimationObject;
    tailwindClasses?: string;
    label?: string;
    error?: boolean;
    helperText?: string;
    color?: string;
    intensity?: number;
    size?: 'sm' | 'md' | 'lg';
}

declare const Switch: React$1.FC<SwitchProps>;

interface LoaderProps {
    show: boolean;
    color?: TailwindColor;
    intensity?: TailwindIntensity;
    type: 'Dots' | 'Bars' | 'Spinner' | 'Progress';
    variant: number;
    tailwindClasses?: string;
    style?: React.CSSProperties;
}

declare const Loader: React$1.FC<LoaderProps>;

interface PlaceholderImageProps {
    width: number;
    height: number;
    cellSize: number;
    variance: number;
    xColors: 'random';
    yColors: 'match';
    image: ImageProps;
}

declare const PlaceholderImage: React$1.FC<PlaceholderImageProps>;

declare function tailwindToHex(colorName: string, intensity: number): string;

export { AnimationObject, Button, Checkbox, Container, EntranceAnimation, ExitAnimation, Icon, Image, Input, List, ListItem, Loader, PlaceholderImage, Radio, Select, Switch, TailwindColor, TailwindIntensity, Text, ThemeOptions, tailwindToHex };
