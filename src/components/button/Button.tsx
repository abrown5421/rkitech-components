import React from "react";
import type { ButtonProps } from "./buttonTypes";
import { shredColorOptions } from "../../shared/utils/shredColorOptions";

const Button: React.FC<ButtonProps> = ({
  children,
  tailwindClasses = "",
  color,
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
  const colorString = shredColorOptions(color)

  return (
    <button
      className={`component-root inline-flex items-center gap-2 ${tailwindClasses} ${animationClasses} ${colorString}`}
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
