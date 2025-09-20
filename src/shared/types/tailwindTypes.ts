export type TailwindColor =
  | 'red' | 'orange' | 'amber' | 'yellow' | 'lime' | 'green' | 'emerald'
  | 'teal' | 'cyan' | 'sky' | 'blue' | 'indigo' | 'violet' | 'purple'
  | 'fuchsia' | 'pink' | 'rose' | 'slate' | 'gray' | 'zinc' | 'neutral' | 'stone';

export type TailwindIntensity = 
  | 50
  | 100
  | 200
  | 200
  | 300
  | 400
  | 500
  | 600
  | 700
  | 800
  | 900
  | 950

export type TailwindInteractionVariantObject = {
  hover: string;
  focus: string;
  active: string;
  visited: string;
  disabled: string;
  checked: string;
  ndeterminate: string;
  focusVisible: string;
  focusWithin: string;
}

export type TailwindColorOptions = {
  text?: TailwindInteractionVariantObject;
  bg?: TailwindInteractionVariantObject;
  border?: TailwindInteractionVariantObject;
  borderX?: TailwindInteractionVariantObject;
  borderY?: TailwindInteractionVariantObject;
  borderT?: TailwindInteractionVariantObject;
  borderR?: TailwindInteractionVariantObject;
  borderB?: TailwindInteractionVariantObject;
  borderL?: TailwindInteractionVariantObject;
  divide?: TailwindInteractionVariantObject;
  outline?: TailwindInteractionVariantObject;
  ring?: TailwindInteractionVariantObject;
  ringOffset?: TailwindInteractionVariantObject;
  shadow?: TailwindInteractionVariantObject;
  accent?: TailwindInteractionVariantObject;
  caret?: TailwindInteractionVariantObject;
  decoration?: TailwindInteractionVariantObject;
  placeholder?: TailwindInteractionVariantObject;
  from?: TailwindInteractionVariantObject;
  via?: TailwindInteractionVariantObject;
  to?: TailwindInteractionVariantObject;
  fill?: TailwindInteractionVariantObject;
  stroke?: TailwindInteractionVariantObject;
};