import React, { useState, useRef, useEffect } from "react";
import type { RadioProps } from "./radioTypes";

const Radio: React.FC<RadioProps> = ({
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
  color = "amber",
  intensity = 500,
  size = "md",
  ...rest
}) => {
  const [focused, setFocused] = useState<boolean>(false);
  const [backgroundStyle, setBackgroundStyle] = useState<React.CSSProperties>({});
  const containerRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

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

  const focusRingColor = `ring-${color}-${intensity}`;
  const checkedColor = `bg-${color}-${intensity}`;
  const checkedBorderColor = `border-${color}-${intensity}`;

  const sizeConfig = {
    sm: { radio: "w-4 h-4", label: "text-sm", gap: "gap-2" },
    md: { radio: "w-5 h-5", label: "text-base", gap: "gap-3" },
    lg: { radio: "w-6 h-6", label: "text-lg", gap: "gap-3" }
  };

  const currentSize = sizeConfig[size];

  const containerClasses = `
    relative flex items-start ${currentSize.gap}
    ${tailwindClasses}
    ${animationClasses}
  `.trim();

  const radioWrapperClasses = `
    relative flex items-center justify-center ${currentSize.radio} rounded-full border-2 transition-all duration-200
    ${disabled 
      ? "border-gray-200 bg-gray-100 cursor-not-allowed" 
      : error 
        ? "border-red-500" 
        : checked
          ? `${checkedBorderColor} ${checkedColor}`
          : focused 
            ? `border-gray-400 ring-2 ${focusRingColor}` 
            : "border-gray-300 hover:border-gray-400"
    }
    ${!disabled ? "cursor-pointer" : ""}
  `.trim();

  const labelClasses = `
    ${currentSize.label} transition-colors duration-200
    ${disabled 
      ? "text-gray-400 cursor-not-allowed" 
      : error 
        ? "text-red-500" 
        : "text-gray-900"
    }
    ${!disabled ? "cursor-pointer" : ""}
  `.trim();

  const helperTextClasses = `text-sm mt-1 ml-8 ${error ? "text-red-500" : "text-gray-500"}`;

  const innerDot = checked && (
    <div className={`
      ${size === 'sm' ? 'w-1.5 h-1.5' : size === 'md' ? 'w-2 h-2' : 'w-2.5 h-2.5'} 
      rounded-full bg-white transition-all duration-200
    `} />
  );

  return (
    <div ref={containerRef} className="w-full">
      <div className={containerClasses}>
        <div className={radioWrapperClasses} onClick={handleLabelClick}>
          <input
            ref={inputRef}
            type="radio"
            className="sr-only"
            onFocus={handleFocus}
            onBlur={handleBlur}
            onChange={handleChange}
            checked={checked}
            disabled={disabled}
            {...rest}
          />
          {innerDot}
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

export default Radio;