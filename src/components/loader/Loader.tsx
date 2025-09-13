import React from 'react';
import { LoaderProps } from './loaderTypes';
import './loaderStyles.css'
import { tailwindToHex } from '../../shared/utils/tailwindToHex';

const Loader: React.FC<LoaderProps> = ({ 
    show,
    color = 'blue', 
    intensity = 500,
    type,
    variant,
    tailwindClasses = '',
    style = {}
}) => {
  if (!show) return null;

  const hexColor = tailwindToHex(color, intensity);
  
  const getClassName = () => {
    const baseClass = `loader-${type.toLowerCase()}-${variant}`;
    return `${baseClass} ${tailwindClasses}`.trim();
  };

  const loaderStyle: React.CSSProperties = {
    ...style,
    '--loader-color': hexColor,
  } as React.CSSProperties;

  return (
    <div 
      className={getClassName()}
      style={loaderStyle}
    />
  );
};

export default Loader;
