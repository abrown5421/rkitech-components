import { TailwindColorObject } from "../../shared/types/tailwindTypes";

const colorPool: TailwindColorObject[] = [
  { color: 'amber', intensity: 300 },
  { color: 'amber', intensity: 400 },
  { color: 'amber', intensity: 500 },
  { color: 'amber', intensity: 600 },
  { color: 'amber', intensity: 700 },
  { color: 'orange', intensity: 300 },
  { color: 'orange', intensity: 400 },
  { color: 'orange', intensity: 500 },
  { color: 'orange', intensity: 600 },
  { color: 'orange', intensity: 700 },
  { color: 'yellow', intensity: 400 },
  { color: 'yellow', intensity: 500 },
  { color: 'yellow', intensity: 600 },
  { color: 'yellow', intensity: 700 },
  { color: 'yellow', intensity: 800 },
  { color: 'red', intensity: 500 },
  { color: 'red', intensity: 600 },
  { color: 'red', intensity: 700 },
  { color: 'red', intensity: 800 },
  { color: 'red', intensity: 900 },
  { color: 'gray', intensity: 900 },
];

const getRandomInt = (min: number, max: number): number =>
  Math.floor(Math.random() * (max - min + 1)) + min;

const getRandomFloat = (min: number, max: number): number =>
  Math.random() * (max - min) + min;

const getRandomSubset = (arr: TailwindColorObject[], minSize = 2, maxSize = 5): TailwindColorObject[] => {
  const size = getRandomInt(minSize, maxSize);
  const shuffled = [...arr].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, size);
};

export const placeholderGenerator = () => {
  return {
    cellSize: getRandomInt(10, 100),
    variance: parseFloat(getRandomFloat(0.1, 1).toFixed(2)),
    xColors: getRandomSubset(colorPool),
    yColors: getRandomSubset(colorPool),
  };
};
