import React, { useState, useRef, useEffect, ReactNode } from "react";
import { SelectProps } from "./selectTypes";

const Select: React.FC<SelectProps> = ({
  label,
  tailwindClasses = "",
  animationObject,
  error = false,
  helperText,
  startAdornment,
  endAdornment,
  value,
  onFocus,
  onBlur,
  onChange,
  disabled = false,
  color = "amber",
  intensity = 500,
  children,
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

  const handleFocus = (e: React.FocusEvent<HTMLSelectElement>) => {
    setFocused(true);
    onFocus?.(e);
  };

  const handleBlur = (e: React.FocusEvent<HTMLSelectElement>) => {
    setFocused(false);
    onBlur?.(e);
  };

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    onChange?.(e);
  };

  const animationClasses = animationObject
    ? `animate__animated ${animationObject.isEntering ? animationObject.entranceAnimation : animationObject.exitAnimation}`
    : '';

  const focusRingColor = `ring-${color}-${intensity}`;
  const focusBorderColor = `border-${color}-${intensity}`;
  const focusLabelColor = `text-${color}-${intensity}`;

  const containerClasses = `
    relative w-full
    ${tailwindClasses}
    ${animationClasses}
  `.trim();

  const selectWrapperClasses = `
    relative flex border rounded-md transition-colors duration-200 items-center
    ${disabled 
      ? "border-gray-200 bg-gray-100" 
      : error 
        ? "border-red-500" 
        : focused 
          ? `${focusBorderColor} ring-2 ${focusRingColor}` 
          : "border-gray-300"
    }
  `.trim();

  const baseSelectClasses = `
    peer w-full h-12 text-base focus:outline-none appearance-none cursor-pointer
    ${startAdornment ? "pl-10" : "pl-3"}
    ${endAdornment ? "pr-10" : "pr-8"}
    ${disabled 
      ? "cursor-not-allowed text-gray-400 bg-gray-100" 
      : "text-gray-900 bg-transparent"
    }
  `.trim();

  const labelClasses = `
    absolute transition-all duration-200 px-1 pointer-events-none
    ${startAdornment ? "left-10" : "left-3"}
    ${focused || hasValue
      ? `text-xs -top-2.5 ${disabled ? "text-gray-400" : error ? "text-red-500" : focused ? focusLabelColor : "text-gray-950"}`
      : `text-base top-3 ${disabled ? "text-gray-400" : "text-gray-500"}`
    }
  `.trim();

  const helperTextClasses = `text-sm mt-1 ${error ? "text-red-500" : "text-gray-500"}`;

  // Default dropdown arrow
  const defaultDropdownArrow = (
    <svg 
      className="w-4 h-4" 
      fill="none" 
      stroke="currentColor" 
      viewBox="0 0 24 24"
    >
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
    </svg>
  );

  return (
    <div ref={containerRef} className={containerClasses}>
      <div className={selectWrapperClasses}>
        {startAdornment && (
          <div className="absolute left-2 flex items-center text-gray-500 pointer-events-none">
            {startAdornment}
          </div>
        )}

        <select
          className={baseSelectClasses}
          onFocus={handleFocus}
          onBlur={handleBlur}
          onChange={handleChange}
          value={value}
          disabled={disabled}
          {...rest}
        >
          {children}
        </select>

        {label && (
          <label 
            className={labelClasses}
            style={focused || hasValue ? backgroundStyle : {}}
          >
            {label}
          </label>
        )}

        {endAdornment ? (
          <div className="absolute right-2 flex items-center text-gray-500 pointer-events-none">
            {endAdornment}
          </div>
        ) : (
          <div className="absolute right-2 flex items-center text-gray-500 pointer-events-none">
            {defaultDropdownArrow}
          </div>
        )}
      </div>

      {helperText && <p className={helperTextClasses}>{helperText}</p>}
    </div>
  );
};

export default Select;