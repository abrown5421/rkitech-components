

import React from "react";
import type { ListProps } from "./listType";

const List: React.FC<ListProps> = ({
  children,
  orientation = "vertical",
  variant = "unordered",
  gap = 2,
  tailwindClasses = "",
  animationObject,
  style,
}) => {
  const animationClasses = animationObject
    ? `animate__animated ${
        animationObject.isEntering
          ? animationObject.entranceAnimation
          : animationObject.exitAnimation
      }`
    : "";

  let Wrapper: React.ElementType = "div";
  let baseClasses = "";

  if (variant === "ordered") {
    Wrapper = "ol";
    baseClasses = `list-decimal list-inside space-y-${gap}`;
  } else if (variant === "unordered") {
    Wrapper = "ul";
    baseClasses = `list-disc list-inside space-y-${gap}`;
  } else {
    Wrapper = "div";
    baseClasses = `flex ${orientation === "vertical" ? "flex-col" : "flex-row"} gap-${gap}`;
  }

  return (
    <Wrapper
      className={`component-root ${baseClasses} ${tailwindClasses} ${animationClasses}`}
      style={{
        animationDelay: `${animationObject?.delay ?? 0}s`,
        ...style, 
      }}
    >
      {children}
    </Wrapper>
  );
};

export default List;
