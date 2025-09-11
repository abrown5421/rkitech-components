import React from "react";
import type { ImageProps } from "./imageTypes";

const Image: React.FC<ImageProps> = ({
  src,
  alt = "",
  width,
  height,
  animationObject,
  tailwindClasses = "",
  onClick,
  ...rest
}) => {
  const animationClasses = animationObject
    ? `animate__animated ${animationObject.isEntering ? animationObject.entranceAnimation : animationObject.exitAnimation}`
    : '';

  const classes = `block ${animationClasses} ${tailwindClasses}`

  return (
    <img
      src={src}
      alt={alt}
      onClick={onClick}
      className={classes}
      style={{
        width: width ? (typeof width === "number" ? `${width}px` : width) : undefined,
        height: height ? (typeof height === "number" ? `${height}px` : height) : undefined,
      }}
      {...rest}
    />
  );
};

export default Image;
