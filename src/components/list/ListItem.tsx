import React from "react";
import Icon from "../icon/Icon";
import { ListItemProps } from "./listType";

const ListItem: React.FC<ListItemProps> = ({
  children,
  iconName,
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

  if (iconName) {
    return (
      <li
        className={`component-root list-none flex items-center ${tailwindClasses} ${animationClasses}`}
        style={style}
      >
        <span className="mr-2">
          <Icon iconName={iconName} size={16} />
        </span>
        {children}
      </li>
    );
  }

  return (
    <li
      className={`component-root ${tailwindClasses} ${animationClasses}`}
      style={style}
      onClick={onClick}
    >
      {children}
    </li>
  );
};

export default ListItem;
