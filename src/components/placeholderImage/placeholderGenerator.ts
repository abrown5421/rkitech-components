import { TailwindColor, TailwindIntensity } from "../../shared/types/tailwindTypes";
import { PlaceholderConfig, TailwindColorObject } from "./placeholderImageTypes";

const COLORS: TailwindColor[] = [
  "red", "orange", "amber", "yellow", "lime", "green", "emerald",
  "teal", "cyan", "sky", "blue", "indigo", "violet", "purple", "fuchsia",
  "pink", "rose"
];

const INTENSITIES: TailwindIntensity[] = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900];

const randomInt = (min: number, max: number): number =>
  Math.floor(Math.random() * (max - min + 1)) + min;

const randomFloat = (min: number, max: number, decimals = 2): number => {
  const str = (Math.random() * (max - min) + min).toFixed(decimals);
  return parseFloat(str);
};

const randomColorObject = (): TailwindColorObject => ({
  color: COLORS[randomInt(0, COLORS.length - 1)],
  intensity: INTENSITIES[randomInt(0, INTENSITIES.length - 1)],
});

export const placeholderGenerator = (): PlaceholderConfig => {
  const numXColors = randomInt(2, 5); 
  const numYColors = randomInt(2, 5);

  const xColors: TailwindColorObject[] = Array.from({ length: numXColors }, randomColorObject);
  const yColors: TailwindColorObject[] = Array.from({ length: numYColors }, randomColorObject);

  return {
    cellSize: randomInt(10, 100),
    variance: randomFloat(0.1, 1, 2),
    xColors,
    yColors,
  };
};
