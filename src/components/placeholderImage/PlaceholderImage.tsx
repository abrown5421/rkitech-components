import React, { useMemo } from "react";
import Trianglify from "trianglify";
import { PlaceholderImageProps } from "./placeholderImageTypes";

const PlaceholderImage: React.FC<PlaceholderImageProps> = ({
  width,
  height,
  cellSize,
  variance,
  xColors,
  yColors,
  image,
}) => {
  const trianglifyDataUrl = useMemo(() => {
    if (image?.src) return null;
    const pattern = Trianglify({
      width,
      height,
      cell_size: cellSize,
      variance,
      x_colors: xColors,
      y_colors: yColors,
    });
    return pattern.toCanvas().toDataURL();
  }, [width, height, cellSize, variance, xColors, yColors, image?.src]);

  return (
    <img
      src={image?.src || trianglifyDataUrl || ""}
      alt={image?.alt || "Placeholder image"}
      width={image?.width || width}
      height={image?.height || height}
      onClick={image?.onClick}
      className={image?.tailwindClasses}
      style={image?.style}
    />
  );
};

export default PlaceholderImage;
