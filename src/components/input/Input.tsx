import React, { useState, useRef, useEffect } from "react";
import type { InputProps } from "./inputTypes";
import { TailwindColorOptions, ColorSuffix } from "../../shared/types/tailwindTypes";

const generateColorClass = (prefix: string, colorSuffix: ColorSuffix, variant?: string): string => {
  const variantPrefix = variant ? `${variant}:` : '';
  return `${variantPrefix}${prefix}-${colorSuffix.color}-${colorSuffix.intensity}`;
};

const useInputColorClasses = (colorOptions?: TailwindColorOptions, focused?: boolean, error?: boolean, disabled?: boolean) => {
  if (!colorOptions) {
    return {
      focusRingColor: 'ring-blue-500',
      focusBorderColor: 'border-blue-500',
      focusLabelColor: 'text-blue-500',
      borderClasses: '',
      ringClasses: '',
      textClasses: '',
    };
  }

  const getStateColor = (variantObject: any) => {
    if (disabled && variantObject.disabled) return variantObject.disabled;
    if (error && variantObject.base) return { color: 'red', intensity: 500 }; 
    if (focused && variantObject.focus) return variantObject.focus;
    return variantObject.base;
  };

  const borderColor = colorOptions.border ? getStateColor(colorOptions.border) : null;
  const ringColor = colorOptions.ring ? getStateColor(colorOptions.ring) : null;
  const textColor = colorOptions.text ? getStateColor(colorOptions.text) : null;

  return {
    focusRingColor: ringColor ? generateColorClass('ring', ringColor) : 'ring-blue-500',
    focusBorderColor: borderColor ? generateColorClass('border', borderColor) : 'border-blue-500',
    focusLabelColor: textColor ? generateColorClass('text', textColor) : 'text-blue-500',
    borderClasses: borderColor ? generateColorClass('border', borderColor) : '',
    ringClasses: ringColor ? generateColorClass('ring', ringColor) : '',
    textClasses: textColor ? generateColorClass('text', textColor) : '',
  };
};

const Input: React.FC<InputProps> = ({
  label,
  tailwindClasses = "",
  animationObject,
  error = false,
  helperText,
  startAdornment,
  endAdornment,
  value,
  multiline = false,
  rows = 3,
  onFocus,
  onBlur,
  onChange,
  disabled = false,
  colorOptions,
  ...rest
}) => {
  const [focused, setFocused] = useState<boolean>(false);
  const [backgroundStyle, setBackgroundStyle] = useState<React.CSSProperties>({});
  const containerRef = useRef<HTMLDivElement>(null);
  const hasValue = value !== undefined && value !== null && String(value).length > 0;
  
  const {
    focusRingColor,
    focusBorderColor,
    focusLabelColor,
    borderClasses,
    ringClasses,
    textClasses,
  } = useInputColorClasses(colorOptions, focused, error, disabled);

  useEffect(() => {
    if (containerRef.current) {
      const element = containerRef.current;
      const computedStyle = window.getComputedStyle(element.parentElement || element);
      const backgroundColor = computedStyle.backgroundColor;
      
      let parentElement = element.parentElement;
      let finalBackground = backgroundColor;
      
      while (parentElement && (backgroundColor === 'rgba(0, 0, 0, 0)' || backgroundColor === 'transparent')) {
        const parentStyle = window.getComputedStyle(parentElement);
        const parentBg = parentStyle.backgroundColor;
        
        if (parentBg !== 'rgba(0, 0, 0, 0)' && parentBg !== 'transparent') {
          finalBackground = parentBg;
          break;
        }
        
        parentElement = parentElement.parentElement;
      }
      
      if (finalBackground === 'rgba(0, 0, 0, 0)' || finalBackground === 'transparent') {
        finalBackground = '#ffffff';
      }
      
      setBackgroundStyle({ backgroundColor: finalBackground });
    }
  }, []);

  const handleFocus = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFocused(true);
    onFocus?.(e as React.FocusEvent<HTMLInputElement>);
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFocused(false);
    onBlur?.(e as React.FocusEvent<HTMLInputElement>);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    onChange?.(e as React.ChangeEvent<HTMLInputElement>);
  };

  const animationClasses = animationObject
    ? `animate__animated ${animationObject.isEntering ? animationObject.entranceAnimation : animationObject.exitAnimation}`
    : '';

  const containerClasses = `
    relative w-full
    ${rows === "fill" ? "flex-grow" : ""}
    ${tailwindClasses}
    ${animationClasses}
  `.trim();

  const inputWrapperClasses = `
    relative flex border rounded-md transition-colors duration-200
    ${rows === "fill" ? "h-full" : "items-center"}
    ${disabled 
      ? "border-gray-200 bg-gray-100" 
      : error 
        ? "border-red-500" 
        : focused 
          ? `${focusBorderColor} ring-2 ${focusRingColor}` 
          : borderClasses || "border-gray-300"
    }
  `.trim();

  const baseInputClasses = `
    peer w-full text-base placeholder-transparent focus:outline-none
    ${startAdornment ? "pl-10" : "pl-3"}
    ${endAdornment ? "pr-10" : "pr-3"}
    ${multiline ? "resize-none pt-2" : "h-12"}
    ${rows === "fill" ? "flex-grow" : ""}
    ${disabled 
      ? "cursor-not-allowed text-gray-400 bg-gray-100" 
      : `${textClasses || "text-gray-900"} bg-transparent`
    }
  `.trim();

  const labelClasses = `
    absolute transition-all duration-200 px-1 
    ${startAdornment ? "left-10" : "left-3"}
    ${focused || hasValue
      ? `text-xs -top-2.5 ${
          disabled 
            ? "text-gray-400" 
            : error 
              ? "text-red-500" 
              : focused 
                ? focusLabelColor 
                : textClasses || "text-gray-950"
        }`
      : `text-base top-3 ${disabled ? "text-gray-400" : "text-gray-500"}`
    }
  `.trim();

  const helperTextClasses = `text-sm mt-1 ${error ? "text-red-500" : "text-gray-500"}`;

  return (
    <div ref={containerRef} className={containerClasses}>
      <div className={inputWrapperClasses}>
        {startAdornment && (
          <div className="absolute left-2 flex items-center text-gray-500">
            {startAdornment}
          </div>
        )}

        {multiline ? (
          <textarea
            className={baseInputClasses}
            rows={typeof rows === "number" ? rows : undefined}
            onFocus={handleFocus}
            onBlur={handleBlur}
            onChange={handleChange}
            value={value}
            disabled={disabled}
            {...(rest as React.TextareaHTMLAttributes<HTMLTextAreaElement>)}
          />
        ) : (
          <input
            className={baseInputClasses}
            onFocus={handleFocus}
            onBlur={handleBlur}
            onChange={handleChange}
            value={value}
            disabled={disabled}
            {...rest}
          />
        )}

        {label && (
          <label 
            className={labelClasses}
            style={focused || hasValue ? backgroundStyle : {}}
          >
            {label}
          </label>
        )}

        {endAdornment && (
          <div className="absolute right-2 flex items-center text-gray-500">
            {endAdornment}
          </div>
        )}
      </div>

      {helperText && <p className={helperTextClasses}>{helperText}</p>}
    </div>
  );
};

export default Input;