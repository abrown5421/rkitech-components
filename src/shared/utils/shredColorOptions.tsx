import { ColorSuffix, TailwindColorOptions, TailwindInteractionVariantObject } from "../types/tailwindTypes";

const interactionPrefixes: Record<keyof TailwindInteractionVariantObject, string> = {
  base: '',
  hover: 'hover:',
  focus: 'focus:',
  active: 'active:',
  visited: 'visited:',
  disabled: 'disabled:',
  checked: 'checked:',
  indeterminate: 'indeterminate:',
  focusVisible: 'focus-visible:',
  focusWithin: 'focus-within:',
};

function buildClassName(
  prefix: string,
  interaction: keyof TailwindInteractionVariantObject,
  suffix: ColorSuffix
): string {
  const variantPrefix = interactionPrefixes[interaction];
  return `${variantPrefix}${prefix}-${suffix.color}-${suffix.intensity}`;
}

export function shredColorOptions(obj?: TailwindColorOptions): string {
  if (!obj) return "";
  const classes: string[] = [];

  for (const [prefix, variantObj] of Object.entries(obj) as [keyof TailwindColorOptions, TailwindInteractionVariantObject][]) {
    if (!variantObj) continue;

    for (const [interaction, suffix] of Object.entries(variantObj) as [keyof TailwindInteractionVariantObject, ColorSuffix][]) {
      if (!suffix) continue;
      classes.push(buildClassName(prefix, interaction, suffix));
    }
  }

  return classes.join(" ");
}