import React$1 from 'react';

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

export { Text };
