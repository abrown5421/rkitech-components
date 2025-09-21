import React, { useState, useRef, useEffect } from "react";
import type { SwitchProps } from "./switchTypes";
import { buildColorOptions } from "../../shared/utils/buildColorOptions";

const Switch: React.FC<SwitchProps> = ({
  label,
  tailwindClasses = "",
  animationObject,
  error = false,
  helperText,
  checked,
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
    checked
  });

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
    sm: { 
      track: "w-8 h-5", 
      thumb: "w-3 h-3", 
      translate: "translate-x-3.5", 
      label: "text-sm", 
      gap: "gap-2" 
    },
    md: { 
      track: "w-10 h-6", 
      thumb: "w-4 h-4", 
      translate: "translate-x-4", 
      label: "text-base", 
      gap: "gap-3" 
    },
    lg: { 
      track: "w-12 h-7", 
      thumb: "w-5 h-5", 
      translate: "translate-x-5", 
      label: "text-lg", 
      gap: "gap-3" 
    }
  };

  const currentSize = sizeConfig[size];

  const containerClasses = `
    relative flex items-start ${currentSize.gap}
    ${tailwindClasses}
    ${animationClasses}
  `.trim();

  const trackClasses = `
    relative inline-flex ${currentSize.track} rounded-full border-2 transition-all duration-200
    ${disabled 
      ? "border-gray-200 bg-gray-100 cursor-not-allowed" 
      : error 
        ? "border-red-500 bg-red-100" 
        : checked
          ? `${colorClasses.checkedBgClasses} border-transparent`
          : focused 
            ? `bg-gray-200 border-gray-400 ring-2 ${colorClasses.focusRingClasses}` 
            : `bg-gray-200 ${colorClasses.borderClasses} hover:bg-gray-300`
    }
    ${!disabled ? "cursor-pointer" : ""}
  `.trim();

  const thumbClasses = `
    inline-block ${currentSize.thumb} rounded-full bg-white shadow-lg transform transition-transform duration-200
    ${checked ? currentSize.translate : "translate-x-0.5"}
    ${disabled ? "shadow-sm" : "shadow-lg"}
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

  const helperTextClasses = `text-sm mt-1 ml-12 ${error ? "text-red-500" : "text-gray-500"}`;

  return (
    <div ref={containerRef} className="w-full">
      <div className={containerClasses}>
        <div className={trackClasses} onClick={handleLabelClick}>
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
          <span className={thumbClasses} />
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

export default Switch;