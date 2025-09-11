import React from "react";
import { ListItemProps } from "./listType";

const ListItem: React.FC<ListItemProps> = ({
  children,
  iconBullet,
  tailwindClasses = "",
  animationObject,
  onClick,
  style,
}) => {
  const animationClasses = animationObject
    ? `animate__animated ${
        animationObject.isEntering
          ? animationObject.entranceAnimation
          : animationObject.exitAnimation
      }`
    : "";

  if (iconBullet) {
    return (
      <li
        className={`component-root flex items-center ${tailwindClasses} ${animationClasses}`}
        style={{
            animationDelay: `${animationObject?.delay ?? 0}s`,
            ...style,
        }}
        onClick={onClick}
      >
        {iconBullet && <span className="mr-2 flex-shrink-0">{iconBullet}</span>}
        {children}
      </li>
    );
  }

  return (
    <li
      className={`component-root ${tailwindClasses} ${animationClasses}`}
      style={{
        animationDelay: `${animationObject?.delay ?? 0}s`,
        ...style, 
      }}
      onClick={onClick}
    >
      {children}
    </li>
  );
};

export default ListItem;
