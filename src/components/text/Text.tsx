import React from 'react';
import type { TextProps } from './textTypes';
import { shredColorOptions } from '../../shared/utils/shredColorOptions';

const Text: React.FC<TextProps> = ({ text, tailwindClasses = '', animationObject, style, colorOptions }) => {
  const animationClasses = animationObject
    ? `animate__animated ${animationObject.isEntering ? animationObject.entranceAnimation : animationObject.exitAnimation}`
    : '';
  const colorString = shredColorOptions(colorOptions)

  return (
    <div 
      className={`component-root ${tailwindClasses} ${animationClasses} ${colorString}`} 
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
