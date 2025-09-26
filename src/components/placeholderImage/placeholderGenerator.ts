import { TailwindColorObject } from "../../shared/types/tailwindTypes";

const getRandomInt = (min: number, max: number): number =>
  Math.floor(Math.random() * (max - min + 1)) + min;

const getRandomFloat = (min: number, max: number): number =>
  Math.random() * (max - min) + min;

const getRandomSubset = (arr: TailwindColorObject[], minSize = 2, maxSize = 5): TailwindColorObject[] => {
  const size = getRandomInt(minSize, maxSize);
  const shuffled = [...arr].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, size);
};

export const placeholderGenerator = (colorPool: TailwindColorObject[]) => {
  return {
    cellSize: getRandomInt(10, 100),
    variance: parseFloat(getRandomFloat(0.1, 1).toFixed(2)),
    xColors: getRandomSubset(colorPool),
    yColors: getRandomSubset(colorPool),
  };
};
