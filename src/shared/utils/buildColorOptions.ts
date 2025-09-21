import { TailwindColorOptions, ColorSuffix, TailwindInteractionVariantObject } from "../types/tailwindTypes";

export const generateColorClass = (prefix: string, colorSuffix: ColorSuffix, variant?: string): string => {
  const variantPrefix = variant ? `${variant}:` : '';
  return `${variantPrefix}${prefix}-${colorSuffix.color}-${colorSuffix.intensity}`;
};

export const getStateColor = (
  variantObject: TailwindInteractionVariantObject,
  state: 'base' | 'hover' | 'focus' | 'active' | 'visited' | 'disabled' | 'checked' | 'indeterminate' | 'focusVisible' | 'focusWithin' | 'error'
): ColorSuffix => {
  if (state === 'error') {
    return { color: 'red', intensity: 500 };
  }
  
  return variantObject[state as keyof TailwindInteractionVariantObject] || variantObject.base;
};

export const buildColorOptions = (
  colorOptions?: TailwindColorOptions,
  states: {
    focused?: boolean;
    error?: boolean;
    disabled?: boolean;
    hovered?: boolean;
    active?: boolean;
    checked?: boolean;
    indeterminate?: boolean;
  } = {}
): {
  textClasses: string;
  bgClasses: string;
  borderClasses: string;
  ringClasses: string;
  focusTextClasses: string;
  focusBorderClasses: string;
  focusRingClasses: string;
  checkedBgClasses: string;
  checkedBorderClasses: string;
  checkedTextClasses: string;
} => {
  const defaults = {
    textClasses: 'text-gray-900',
    bgClasses: 'bg-transparent',
    borderClasses: 'border-gray-300',
    ringClasses: '',
    focusTextClasses: 'text-blue-600',
    focusBorderClasses: 'border-blue-500',
    focusRingClasses: 'ring-blue-500',
    checkedBgClasses: 'bg-blue-500',
    checkedBorderClasses: 'border-blue-500',
    checkedTextClasses: 'text-blue-600',
  };

  if (!colorOptions) return defaults;

  const currentState = 
    states.disabled ? 'disabled' :
    states.error ? 'error' :
    states.indeterminate ? 'indeterminate' :
    states.checked ? 'checked' :
    states.active ? 'active' :
    states.focused ? 'focus' :
    states.hovered ? 'hover' :
    'base';

  const result = { ...defaults };

  if (colorOptions.text) {
    const textColor = getStateColor(colorOptions.text, currentState);
    result.textClasses = generateColorClass('text', textColor);
    
    if (colorOptions.text.focus) {
      const focusTextColor = getStateColor(colorOptions.text, 'focus');
      result.focusTextClasses = generateColorClass('text', focusTextColor);
    }

    if (colorOptions.text.checked) {
      const checkedTextColor = getStateColor(colorOptions.text, 'checked');
      result.checkedTextClasses = generateColorClass('text', checkedTextColor);
    }
  }

  if (colorOptions.bg) {
    const bgColor = getStateColor(colorOptions.bg, currentState);
    result.bgClasses = generateColorClass('bg', bgColor);

    if (colorOptions.bg.checked) {
      const checkedBgColor = getStateColor(colorOptions.bg, 'checked');
      result.checkedBgClasses = generateColorClass('bg', checkedBgColor);
    }
  }

  if (colorOptions.border) {
    const borderColor = getStateColor(colorOptions.border, currentState);
    result.borderClasses = generateColorClass('border', borderColor);
    
    if (colorOptions.border.focus) {
      const focusBorderColor = getStateColor(colorOptions.border, 'focus');
      result.focusBorderClasses = generateColorClass('border', focusBorderColor);
    }

    if (colorOptions.border.checked) {
      const checkedBorderColor = getStateColor(colorOptions.border, 'checked');
      result.checkedBorderClasses = generateColorClass('border', checkedBorderColor);
    }
  }

  if (colorOptions.ring) {
    const ringColor = getStateColor(colorOptions.ring, currentState);
    result.ringClasses = generateColorClass('ring', ringColor);
    
    if (colorOptions.ring.focus) {
      const focusRingColor = getStateColor(colorOptions.ring, 'focus');
      result.focusRingClasses = generateColorClass('ring', focusRingColor);
    }
  }

  return result;
};