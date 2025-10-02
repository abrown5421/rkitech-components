import React from 'react';
import { LoaderProps } from './loaderTypes';
import { tailwindToHex } from '../../shared/utils/tailwindToHex';

const Loader: React.FC<LoaderProps> = ({ 
    show,
    color = 'blue', 
    intensity = 500,
    loaderType,
    variant,
    tailwindClasses = '',
    style = {}
}) => {
  if (!show) return null;

  const hexColor = tailwindToHex(color, intensity);
  
  const getLoaderStyles = (): React.CSSProperties => {
    const baseStyle: React.CSSProperties = {
      ...style,
      '--loader-color': hexColor,
    } as React.CSSProperties;

    const key = `${loaderType.toLowerCase()}-${variant}`;
    
    switch (key) {
      // DOT ANIMATIONS
      case 'dots-1':
        return {
          ...baseStyle,
          width: '60px',
          aspectRatio: '2',
          background: `
            radial-gradient(circle closest-side, ${hexColor} 90%, transparent) 0% 50%,
            radial-gradient(circle closest-side, ${hexColor} 90%, transparent) 50% 50%,
            radial-gradient(circle closest-side, ${hexColor} 90%, transparent) 100% 50%
          `,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'calc(100%/3) 50%',
          animation: 'loader-dot-1-anim 1s infinite linear',
        };

      case 'dots-2':
        return {
          ...baseStyle,
          width: '60px',
          aspectRatio: '4',
          background: `
            radial-gradient(circle closest-side, ${hexColor} 90%, transparent) 0% 50%,
            radial-gradient(circle closest-side, ${hexColor} 90%, transparent) 50% 50%,
            radial-gradient(circle closest-side, ${hexColor} 90%, transparent) 100% 50%
          `,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'calc(100%/3) 100%',
          animation: 'loader-dot-2-anim 1s infinite linear',
        };

      case 'dots-3':
        return {
          ...baseStyle,
          width: '15px',
          aspectRatio: '1',
          position: 'relative',
          animation: 'loader-dot-3-scale 1.5s infinite steps(2)',
        };

      case 'dots-4':
        return {
          ...baseStyle,
          width: '35px',
          aspectRatio: '1',
          background: `
            radial-gradient(circle closest-side, ${hexColor} 90%, transparent) 0 0,
            radial-gradient(circle closest-side, ${hexColor} 90%, transparent) 0 100%,
            radial-gradient(circle closest-side, ${hexColor} 90%, transparent) 100% 100%
          `,
          backgroundRepeat: 'no-repeat',
          backgroundSize: '40% 40%',
          animation: 'loader-dot-4-anim 1s infinite linear',
        };

      case 'dots-5':
        return {
          ...baseStyle,
          width: '40px',
          aspectRatio: '1.154',
          background: `
            radial-gradient(farthest-side, ${hexColor} 90%, transparent) 50% 0,
            radial-gradient(farthest-side, ${hexColor} 90%, transparent) 0 100%,
            radial-gradient(farthest-side, ${hexColor} 90%, transparent) 100% 100%
          `,
          backgroundRepeat: 'no-repeat',
          backgroundSize: '35% calc(35%*1.154)',
          animation: 'loader-dot-5-anim 1s infinite',
        };

      // BAR ANIMATIONS
      case 'bars-1':
        return {
          ...baseStyle,
          width: '45px',
          aspectRatio: '1',
          background: `
            linear-gradient(${hexColor} 0 0) 0% 50%,
            linear-gradient(${hexColor} 0 0) 50% 50%,
            linear-gradient(${hexColor} 0 0) 100% 50%
          `,
          backgroundRepeat: 'no-repeat',
          backgroundSize: '20% 100%',
          animation: 'loader-bar-1-anim 1s infinite linear',
        };

      case 'bars-2':
        return {
          ...baseStyle,
          width: '45px',
          aspectRatio: '1',
          background: `
            linear-gradient(${hexColor} calc(50% - 10px), transparent 0 calc(50% + 10px), ${hexColor} 0) 0% 100%,
            linear-gradient(${hexColor} calc(50% - 10px), transparent 0 calc(50% + 10px), ${hexColor} 0) 50% 100%,
            linear-gradient(${hexColor} calc(50% - 10px), transparent 0 calc(50% + 10px), ${hexColor} 0) 100% 100%
          `,
          backgroundRepeat: 'no-repeat',
          backgroundSize: '20% calc(200% + 20px)',
          animation: 'loader-bar-2-anim 1s infinite linear',
        };

      case 'bars-3':
        return {
          ...baseStyle,
          width: '45px',
          aspectRatio: '0.75',
          background: `
            linear-gradient(${hexColor} 0 0) 0% 50%,
            linear-gradient(${hexColor} 0 0) 50% 50%,
            linear-gradient(${hexColor} 0 0) 100% 50%
          `,
          backgroundRepeat: 'no-repeat',
          animation: 'loader-bar-3-anim 1s infinite linear alternate',
        };

      case 'bars-4':
        return {
          ...baseStyle,
          width: '45px',
          aspectRatio: '1',
          background: `
            linear-gradient(${hexColor} 0 0),
            linear-gradient(${hexColor} 0 0),
            linear-gradient(${hexColor} 0 0)
          `,
          backgroundRepeat: 'no-repeat',
          animation: 'loader-bar-4-size 1s infinite, loader-bar-4-pos 1s infinite',
        };

      case 'bars-5':
        return {
          ...baseStyle,
          width: '45px',
          aspectRatio: '1',
          background: `
            linear-gradient(${hexColor} 0 0) 0 0,
            linear-gradient(${hexColor} 0 0) 50% 50%,
            linear-gradient(${hexColor} 0 0) 100% 100%
          `,
          backgroundRepeat: 'no-repeat',
          animation: 'loader-bar-5-anim 1s infinite alternate',
        };

      // SPINNER ANIMATIONS
      case 'spinner-1':
        return {
          ...baseStyle,
          width: '50px',
          padding: '8px',
          aspectRatio: '1',
          borderRadius: '50%',
          background: hexColor,
          WebkitMask: `
            conic-gradient(transparent 10%, ${hexColor}),
            linear-gradient(${hexColor} 0 0) content-box
          `,
          mask: `
            conic-gradient(transparent 10%, ${hexColor}),
            linear-gradient(${hexColor} 0 0) content-box
          `,
          WebkitMaskComposite: 'source-out',
          maskComposite: 'subtract',
          animation: 'loader-spinner-1-anim 1s infinite linear',
        };

      case 'spinner-2':
        return {
          ...baseStyle,
          width: '50px',
          aspectRatio: '1',
          borderRadius: '50%',
          border: '8px solid #e5e7eb',
          borderRightColor: hexColor,
          animation: 'loader-spinner-2-anim 1s infinite linear',
        };

      case 'spinner-3':
        return {
          ...baseStyle,
          width: '50px',
          aspectRatio: '1',
          borderRadius: '50%',
          padding: '1px',
          background: `conic-gradient(transparent 10%, ${hexColor}) content-box`,
          WebkitMask: `
            repeating-conic-gradient(transparent 0deg, #000 1deg 20deg, transparent 21deg 36deg),
            radial-gradient(farthest-side, transparent calc(100% - 8px - 1px), #000 calc(100% - 8px))
          `,
          WebkitMaskComposite: 'destination-in',
          maskComposite: 'intersect',
          animation: 'loader-spinner-3-anim 1s infinite steps(10)',
        };

      case 'spinner-4':
        return {
          ...baseStyle,
          width: '50px',
          aspectRatio: '1',
          borderRadius: '50%',
          border: '8px solid',
          borderColor: `${hexColor} transparent`,
          animation: 'loader-spinner-4-anim 1s infinite',
        };

      case 'spinner-5':
        return {
          ...baseStyle,
          width: '50px',
          aspectRatio: '1',
          display: 'grid',
          border: '4px solid transparent',
          borderRadius: '50%',
          borderRightColor: hexColor,
          animation: 'loader-spinner-5-anim 1s infinite linear',
        };

      // PROGRESS ANIMATIONS
      case 'progress-1':
        return {
          ...baseStyle,
          width: '120px',
          height: '20px',
          background: `linear-gradient(${hexColor} 0 0) 0/0% no-repeat #ddd`,
          animation: 'loader-progress-1-anim 2s infinite linear',
        };

      case 'progress-2':
        return {
          ...baseStyle,
          width: '120px',
          height: '22px',
          borderRadius: '20px',
          color: hexColor,
          border: '2px solid',
          position: 'relative',
        };

      case 'progress-3':
        return {
          ...baseStyle,
          width: '120px',
          height: '20px',
          WebkitMask: 'linear-gradient(90deg, #000 70%, transparent 0) 0/20%',
          mask: 'linear-gradient(90deg, #000 70%, transparent 0) 0/20%',
          background: `linear-gradient(${hexColor} 0 0) 0/0% no-repeat #ddd`,
          animation: 'loader-progress-3-anim 2s infinite steps(6)',
        };

      case 'progress-4':
        return {
          ...baseStyle,
          width: '120px',
          height: '20px',
          background: `
            linear-gradient(${hexColor} 50%, transparent 0),
            linear-gradient(transparent 50%, ${hexColor} 0),
            linear-gradient(${hexColor} 50%, transparent 0),
            linear-gradient(transparent 50%, ${hexColor} 0),
            linear-gradient(${hexColor} 50%, transparent 0),
            linear-gradient(transparent 50%, ${hexColor} 0)
            #ddd
          `,
          backgroundSize: 'calc(100%/6 + 1px) 200%',
          backgroundRepeat: 'no-repeat',
          animation: 'loader-progress-4-anim 2s infinite',
        };

      case 'progress-5':
        return {
          ...baseStyle,
          height: '4px',
          width: '130px',
          background: `
            linear-gradient(${hexColor} 0 0),
            linear-gradient(${hexColor} 0 0),
            #d7b8fc
          `,
          backgroundRepeat: 'no-repeat',
          backgroundSize: '60% 100%',
          animation: 'loader-progress-5-anim 3s infinite',
        };

      default:
        return baseStyle;
    }
  };

  const renderSpecialElements = () => {
    const key = `${loaderType.toLowerCase()}-${variant}`;
    
    // Special handling for dots-3 pseudo-elements
    if (key === 'dots-3') {
      return (
        <>
          <div
            style={{
              content: '""',
              position: 'absolute',
              inset: 0,
              borderRadius: '50%',
              background: hexColor,
              boxShadow: `26px 0 ${hexColor}`,
              transform: 'translateX(-26px)',
              animation: 'loader-dot-3-shadow 0.75s infinite linear alternate',
            }}
          />
          <div
            style={{
              content: '""',
              position: 'absolute',
              inset: 0,
              borderRadius: '50%',
              background: hexColor,
              transform: 'translateX(13px) rotate(0deg) translateX(13px)',
              animation: 'loader-dot-3-rotate 0.75s infinite linear alternate',
            }}
          />
        </>
      );
    }

    // Special handling for progress-2 pseudo-element
    if (key === 'progress-2') {
      return (
        <div
          style={{
            content: '""',
            position: 'absolute',
            margin: '2px',
            inset: '0 100% 0 0',
            borderRadius: 'inherit',
            background: 'currentColor',
            animation: 'loader-progress-2-anim 2s infinite',
          }}
        />
      );
    }

    // Special handling for spinner-5 pseudo-elements
    if (key === 'spinner-5') {
      return (
        <>
          <div
            style={{
              gridArea: '1/1',
              margin: '2px',
              border: '4px solid transparent',
              borderRadius: '50%',
              borderRightColor: hexColor,
              animation: 'loader-spinner-5-anim 2s infinite',
            }}
          />
          <div
            style={{
              gridArea: '1/1',
              margin: '8px',
              border: '4px solid transparent',
              borderRadius: '50%',
              borderRightColor: hexColor,
              animation: 'loader-spinner-5-anim 3s infinite',
            }}
          />
        </>
      );
    }

    return null;
  };

  return (
    <>
      <style>
        {`
          @keyframes loader-dot-1-anim {
            20% { background-position: 0% 0%, 50% 50%, 100% 50% }
            40% { background-position: 0% 100%, 50% 0%, 100% 50% }
            60% { background-position: 0% 50%, 50% 100%, 100% 0% }
            80% { background-position: 0% 50%, 50% 50%, 100% 100% }
          }

          @keyframes loader-dot-2-anim {
            33% { background-size: calc(100%/3) 0%, calc(100%/3) 100%, calc(100%/3) 100% }
            50% { background-size: calc(100%/3) 100%, calc(100%/3) 0%, calc(100%/3) 100% }
            66% { background-size: calc(100%/3) 100%, calc(100%/3) 100%, calc(100%/3) 0% }
          }

          @keyframes loader-dot-3-scale {
            0%, 49.9% { transform: scale(1) }
            50%, 100% { transform: scale(-1) }
          }

          @keyframes loader-dot-3-shadow {
            100% { box-shadow: 52px 0 var(--loader-color) }
          }

          @keyframes loader-dot-3-rotate {
            100% { transform: translateX(13px) rotate(-180deg) translateX(13px) }
          }

          @keyframes loader-dot-4-anim {
            25% { background-position: 100% 0, 0 100%, 100% 100% }
            50% { background-position: 100% 0, 0 0, 100% 100% }
            75% { background-position: 100% 0, 0 0, 0 100% }
            100% { background-position: 100% 100%, 0 0, 0 100% }
          }

          @keyframes loader-dot-5-anim { 
            50%, 100% { background-position: 100% 100%, 50% 0, 0 100% } 
          }

          @keyframes loader-bar-1-anim {
            0% { background-size: 20% 100%, 20% 100%, 20% 100% }
            33% { background-size: 20% 10%, 20% 100%, 20% 100% }
            50% { background-size: 20% 100%, 20% 10%, 20% 100% }
            66% { background-size: 20% 100%, 20% 100%, 20% 10% }
            100% { background-size: 20% 100%, 20% 100%, 20% 100% }
          }

          @keyframes loader-bar-2-anim {
            33% { background-position: 0% 50%, 50% 100%, 100% 100% }
            50% { background-position: 0% 0%, 50% 50%, 100% 100% }
            66% { background-position: 0% 0%, 50% 0%, 100% 50% }
            100% { background-position: 0% 0%, 50% 0%, 100% 0% }
          }

          @keyframes loader-bar-3-anim {
            0% { background-size: 20% 50%, 20% 50%, 20% 50% }
            20% { background-size: 20% 20%, 20% 50%, 20% 50% }
            40% { background-size: 20% 100%, 20% 20%, 20% 50% }
            60% { background-size: 20% 50%, 20% 100%, 20% 20% }
            80% { background-size: 20% 50%, 20% 50%, 20% 100% }
            100% { background-size: 20% 50%, 20% 50%, 20% 50% }
          }

          @keyframes loader-bar-4-size {
            0%, 100% { background-size: 20% 100% }
            33%, 66% { background-size: 20% 40% }
          }

          @keyframes loader-bar-4-pos {
            0%, 33% { background-position: 0 0, 50% 100%, 100% 0 }
            66%, 100% { background-position: 0 100%, 50% 0, 100% 100% }
          }

          @keyframes loader-bar-5-anim {
            0%, 10% { background-size: 20% 100% }
            50% { background-size: 20% 20% }
            90%, 100% { background-size: 100% 20% }
          }

          @keyframes loader-spinner-1-anim {
            to { transform: rotate(1turn) }
          }

          @keyframes loader-spinner-2-anim {
            to { transform: rotate(1turn) }
          }

          @keyframes loader-spinner-3-anim {
            to { transform: rotate(1turn) }
          }

          @keyframes loader-spinner-4-anim {
            to { transform: rotate(0.5turn) }
          }

          @keyframes loader-spinner-5-anim { 
            100% { transform: rotate(1turn) }
          }

          @keyframes loader-progress-1-anim {
            100% { background-size: 100% }
          }

          @keyframes loader-progress-2-anim {
            100% { inset: 0 }
          }

          @keyframes loader-progress-3-anim {
            100% { background-size: 120% }
          }

          @keyframes loader-progress-4-anim {
            0% { background-position: calc(0*100%/5) 100%, calc(1*100%/5) 0%, calc(2*100%/5) 100%, calc(3*100%/5) 0%, calc(4*100%/5) 100%, calc(5*100%/5) 0% }
            16.67% { background-position: calc(0*100%/5) 0%, calc(1*100%/5) 0%, calc(2*100%/5) 100%, calc(3*100%/5) 0%, calc(4*100%/5) 100%, calc(5*100%/5) 0% }
            33.33% { background-position: calc(0*100%/5) 0%, calc(1*100%/5) 100%, calc(2*100%/5) 100%, calc(3*100%/5) 0%, calc(4*100%/5) 100%, calc(5*100%/5) 0% }
            50% { background-position: calc(0*100%/5) 0%, calc(1*100%/5) 100%, calc(2*100%/5) 0%, calc(3*100%/5) 0%, calc(4*100%/5) 100%, calc(5*100%/5) 0% }
            66.67% { background-position: calc(0*100%/5) 0%, calc(1*100%/5) 100%, calc(2*100%/5) 0%, calc(3*100%/5) 100%, calc(4*100%/5) 100%, calc(5*100%/5) 0% }
            83.33% { background-position: calc(0*100%/5) 0%, calc(1*100%/5) 100%, calc(2*100%/5) 0%, calc(3*100%/5) 100%, calc(4*100%/5) 0%, calc(5*100%/5) 0% }
            100% { background-position: calc(0*100%/5) 0%, calc(1*100%/5) 100%, calc(2*100%/5) 0%, calc(3*100%/5) 100%, calc(4*100%/5) 0%, calc(5*100%/5) 100% }
          }

          @keyframes loader-progress-5-anim {
            0% { background-position: -150% 0, -150% 0 }
            66% { background-position: 250% 0, -150% 0 }
            100% { background-position: 250% 0, 250% 0 }
          }
        `}
      </style>
      <div 
        className={tailwindClasses}
        style={getLoaderStyles()}
      >
        {renderSpecialElements()}
      </div>
    </>
  );
};

export default Loader;