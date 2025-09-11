import React from 'react';
import type { TextProps } from './textTypes';

const Text: React.FC<TextProps> = ({ text, tailwindClasses = '', animationObject, style }) => {
  const animationClasses = animationObject
    ? `animate__animated ${animationObject.isEntering ? animationObject.entranceAnimation : animationObject.exitAnimation}`
    : '';

  return (
    <div 
      className={`component-root ${tailwindClasses} ${animationClasses}`} 
      style={{
        animationDelay: `${animationObject?.delay ?? 0}s`,
        ...style, 
      }}
    >
      {text}
    </div>
  );
};

export default Text;
