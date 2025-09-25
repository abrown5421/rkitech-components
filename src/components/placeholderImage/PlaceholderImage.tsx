import React, { useMemo } from "react";
import Trianglify from "trianglify";
import { PlaceholderImageProps } from "./placeholderImageTypes";
import { tailwindToHex } from "../../shared/utils/tailwindToHex";

const normalizeSize = (value: number | string): string => {
  if (typeof value === "number") {
    return `${value}px`;
  }
  return value; 
};

const clampCellSize = (value: number): number => {
  return Math.min(Math.max(value, 10), 100);
};

const clampVariance = (value: number): number => {
  return Math.min(Math.max(value, 0.1), 1);
};

const PlaceholderImage: React.FC<PlaceholderImageProps> = ({
  width,
  height,
  placeholder,
  image,
}) => {
  const trianglifyDataUrl = useMemo(() => {
    if (image?.src) return null;

    const { cellSize, variance, xColors, yColors } = placeholder;

    const xTailwindToHex = xColors.map((c) =>
      tailwindToHex(c.color, c.intensity)
    );
    const yTailwindToHex = yColors.map((c) =>
      tailwindToHex(c.color, c.intensity)
    );

    const pattern = Trianglify({
        width: typeof width === "number" ? width : parseInt(width, 10),
        height: typeof height === "number" ? height : parseInt(height, 10),
        cellSize: clampCellSize(cellSize),
        variance: clampVariance(variance),
        xColors: xTailwindToHex, 
        yColors: yTailwindToHex, 
    });

    return pattern.toCanvas().toDataURL();
  }, [width, height, placeholder, image?.src]);

  return (
    <img
      src={image?.src || trianglifyDataUrl || ""}
      alt={image?.alt || "Placeholder image"}
      width={undefined}
      height={undefined}
      onClick={image?.onClick}
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
