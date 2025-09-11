import React from "react";
import * as LucideIcons from "lucide-react";
import type { IconProps } from "./iconType";
import { tailwindToHex } from "../../shared/utils/tailwindToHex";

const Icon: React.FC<IconProps> = ({
  iconName,
  tailwindClasses = "",
  animationObject,
  style,
  color = "gray",
  intensity = 950, 
  size = 24,
}) => {
  const IconComponent = (LucideIcons as any)[iconName];

  if (!IconComponent) {
    console.warn(`Icon "${iconName}" not found in Lucide icons.`);
    return null;
  }

  const animationClasses = animationObject
    ? `animate__animated ${
        animationObject.isEntering
          ? animationObject.entranceAnimation
          : animationObject.exitAnimation
      }`
    : "";

  const colorClass =
    color === "parent" ? "text-current" : `text-${color}-${intensity}`;

  const hexColor = color === "parent" ? undefined : tailwindToHex(color, intensity);

  return (
    <div
      className={`component-root ${tailwindClasses} ${animationClasses} ${colorClass}`}
      style={style}
    >
      <IconComponent size={size} stroke={hexColor} />
    </div>
  );
};


export default Icon;
