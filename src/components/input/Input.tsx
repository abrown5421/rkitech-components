import React, { useState, useRef, useEffect } from "react";
import type { InputProps } from "./inputTypes";

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
  color = "amber",
  intensity = 500,
  style,
  ...rest
}) => {
  const [focused, setFocused] = useState<boolean>(false);
  const [backgroundStyle, setBackgroundStyle] = useState<React.CSSProperties>({});
  const containerRef = useRef<HTMLDivElement>(null);
  const hasValue = value !== undefined && value !== null && String(value).length > 0;

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

  const focusRingColor = `ring-${color}-${intensity}`;
  const focusBorderColor = `border-${color}-${intensity}`;
  const focusLabelColor = `text-${color}-${intensity}`;

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
          : "border-gray-300"
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
      : "text-gray-900 bg-transparent"
    }
  `.trim();

  const labelClasses = `
    absolute transition-all duration-200 px-1 
    ${startAdornment ? "left-10" : "left-3"}
    ${focused || hasValue
      ? `text-xs -top-2.5 ${disabled ? "text-gray-400" : error ? "text-red-500" : focused ? focusLabelColor : "text-gray-950"}`
      : `text-base top-3 ${disabled ? "text-gray-400" : "text-gray-500"}`
    }
  `.trim();

  const helperTextClasses = `text-sm mt-1 ${error ? "text-red-500" : "text-gray-500"}`;

  return (
    <div ref={containerRef} className={containerClasses} style={{...style}}>
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