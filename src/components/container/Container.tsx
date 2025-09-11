import React from 'react';
import type { ContainerProps } from './containerTypes';

const Container: React.FC<ContainerProps> = ({
  children,
  tailwindClasses = '',
  animationObject,
  style,
  onClick, 
}) => {
  const animationClasses = animationObject
    ? `animate__animated ${animationObject.isEntering ? animationObject.entranceAnimation : animationObject.exitAnimation}`
    : '';

  return (
    <div
      className={`component-root flex ${tailwindClasses} ${animationClasses}`}
      style={style}
      onClick={onClick} 
    >
      {children}
    </div>
  );
};

export default Container;
