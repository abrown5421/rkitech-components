import React from "react";
import { Trianglify } from "react-trianglify";
import { PlaceholderImageProps } from "./placeholderImageTypes";
import { tailwindToHex } from "../../shared/utils/tailwindToHex";

const normalizeSize = (value: number | string): string => {
  return typeof value === "number" ? `${value}px` : value;
};

const clampCellSize = (value: number): number =>
  Math.min(Math.max(value, 10), 100);

const clampVariance = (value: number): number =>
  Math.min(Math.max(value, 0.1), 1);

const PlaceholderImage: React.FC<PlaceholderImageProps> = ({
  width,
  height,
  placeholder,
  image,
}) => {
  if (image?.src) {
    return (
      <img
        src={image.src}
        alt={image.alt || "Placeholder image"}
        width={undefined}
        height={undefined}
        onClick={image.onClick}
        className={image.tailwindClasses}
        style={{
          width: normalizeSize(image.width ?? width),
          height: normalizeSize(image.height ?? height),
          ...image.style,
        }}
      />
    );
  }

  const { cellSize, variance, xColors, yColors } = placeholder;

  const xTailwindToHex = xColors.map((c) =>
    tailwindToHex(c.color, c.intensity)
  );
  const yTailwindToHex = yColors.map((c) =>
    tailwindToHex(c.color, c.intensity)
  );

  return (
    <Trianglify
      width={typeof width === "number" ? width : parseInt(width, 10)}
      height={typeof height === "number" ? height : parseInt(height, 10)}
      cellSize={clampCellSize(cellSize)}
      variance={clampVariance(variance)}
      xColors={xTailwindToHex}
      yColors={yTailwindToHex}
      className={image?.tailwindClasses}
      style={{
        width: normalizeSize(image?.width ?? width),
        height: normalizeSize(image?.height ?? height),
        ...image?.style,
      }}
    />
  );
};

export default PlaceholderImage;
