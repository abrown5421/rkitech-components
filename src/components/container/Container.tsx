import React from 'react';
import type { ContainerProps } from './containerTypes';
import { shredColorOptions } from '../../shared/utils/shredColorOptions';

const Container: React.FC<ContainerProps> = ({
  children,
  tailwindClasses = '',
  color,
  animationObject,
  style,
  onClick, 
}) => {
  const animationClasses = animationObject
    ? `animate__animated ${animationObject.isEntering ? animationObject.entranceAnimation : animationObject.exitAnimation}`
    : '';
    const colorString = shredColorOptions(color)

  return (
    <div
      className={`component-root flex ${tailwindClasses} ${animationClasses} ${colorString}`}
      style={{
        animationDelay: `${animationObject?.delay ?? 0}s`,
        ...style, 
      }}
      onClick={onClick} 
    >
      {children}
    </div>
  );
};

export default Container;
