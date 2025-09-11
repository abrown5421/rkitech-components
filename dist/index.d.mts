import React$1, { ReactNode } from 'react';

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

export { Button, Container, Icon, Text };
