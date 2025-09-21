import React, { useState, useRef, useEffect } from "react";
import type { CheckboxProps } from "./checkboxTypes";
import { buildColorOptions } from "../../shared/utils/buildColorOptions";

const Checkbox: React.FC<CheckboxProps> = ({
  label,
  tailwindClasses = "",
  animationObject,
  error = false,
  helperText,
  checked,
  indeterminate = false,
  onFocus,
  onBlur,
  onChange,
  disabled = false,
  colorOptions,
  size = "md",
  ...rest
}) => {
  const [focused, setFocused] = useState<boolean>(false);
  const [backgroundStyle, setBackgroundStyle] = useState<React.CSSProperties>({});
  const containerRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const colorClasses = buildColorOptions(colorOptions, {
    focused,
    error,
    disabled,
    checked,
    indeterminate
  });

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.indeterminate = indeterminate;
    }
  }, [indeterminate]);

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

  const handleFocus = (e: React.FocusEvent<HTMLInputElement>) => {
    setFocused(true);
    onFocus?.(e);
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    setFocused(false);
    onBlur?.(e);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange?.(e);
  };

  const handleLabelClick = () => {
    if (!disabled && inputRef.current) {
      inputRef.current.focus();
      inputRef.current.click();
    }
  };

  const animationClasses = animationObject
    ? `animate__animated ${animationObject.isEntering ? animationObject.entranceAnimation : animationObject.exitAnimation}`
    : '';

  const sizeConfig = {
    sm: { checkbox: "w-4 h-4", label: "text-sm", gap: "gap-2", icon: "w-2.5 h-2.5" },
    md: { checkbox: "w-5 h-5", label: "text-base", gap: "gap-3", icon: "w-3 h-3" },
    lg: { checkbox: "w-6 h-6", label: "text-lg", gap: "gap-3", icon: "w-4 h-4" }
  };

  const currentSize = sizeConfig[size];

  const containerClasses = `
    relative flex items-start ${currentSize.gap}
    ${tailwindClasses}
    ${animationClasses}
  `.trim();

  const checkboxWrapperClasses = `
    relative flex items-center justify-center ${currentSize.checkbox} rounded border-2 transition-all duration-200
    ${disabled 
      ? "border-gray-200 bg-gray-100 cursor-not-allowed" 
      : error 
        ? "border-red-500" 
        : checked || indeterminate
          ? `${colorClasses.checkedBorderClasses} ${colorClasses.checkedBgClasses}`
          : focused 
            ? `border-gray-400 ring-2 ${colorClasses.focusRingClasses}` 
            : `${colorClasses.borderClasses} hover:border-gray-400`
    }
    ${!disabled ? "cursor-pointer" : ""}
  `.trim();

  const labelClasses = `
    ${currentSize.label} transition-colors duration-200
    ${disabled 
      ? "text-gray-400 cursor-not-allowed" 
      : error 
        ? "text-red-500" 
        : colorClasses.textClasses
    }
    ${!disabled ? "cursor-pointer" : ""}
  `.trim();

  const helperTextClasses = `text-sm mt-1 ml-8 ${error ? "text-red-500" : "text-gray-500"}`;

  const checkIcon = (checked || indeterminate) && (
    <svg 
      className={`${currentSize.icon} text-white transition-all duration-200`}
      fill="none" 
      stroke="currentColor" 
      viewBox="0 0 24 24"
    >
      {indeterminate ? (
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M20 12H4" />
      ) : (
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
      )}
    </svg>
  );

  return (
    <div ref={containerRef} className="w-full">
      <div className={containerClasses}>
        <div className={checkboxWrapperClasses} onClick={handleLabelClick}>
          <input
            ref={inputRef}
            type="checkbox"
            className="sr-only"
            onFocus={handleFocus}
            onBlur={handleBlur}
            onChange={handleChange}
            checked={checked}
            disabled={disabled}
            {...rest}
          />
          {checkIcon}
        </div>

        {label && (
          <label 
            className={labelClasses}
            onClick={handleLabelClick}
          >
            {label}
          </label>
        )}
      </div>

      {helperText && <p className={helperTextClasses}>{helperText}</p>}
    </div>
  );
};

export default Checkbox;