import React from "react";
import type { ButtonProps } from "./buttonTypes";

const Button: React.FC<ButtonProps> = ({
  children,
  tailwindClasses = "",
  animationObject,
  style,
  onClick,
  startIcon,
  endIcon,
}) => {
  const animationClasses = animationObject
    ? `animate__animated ${
        animationObject.isEntering
          ? animationObject.entranceAnimation
          : animationObject.exitAnimation
      }`
    : "";

  return (
    <button
      className={`component-root inline-flex items-center gap-2 ${tailwindClasses} ${animationClasses}`}
      style={{
        animationDelay: `${animationObject?.delay ?? 0}s`,
        ...style, 
      }}
      onClick={onClick}
    >
      {startIcon && <span className="flex items-center">{startIcon}</span>}
      <span>{children}</span>
      {endIcon && <span className="flex items-center">{endIcon}</span>}
    </button>
  );
};

export default Button;
