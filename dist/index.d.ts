import React$1, { ReactNode } from 'react';

type AnimationObject = {
    entranceAnimation: string;
    exitAnimation: string;
    isEntering: boolean;
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

export { Container, Text };
