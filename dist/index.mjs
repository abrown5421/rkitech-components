import { jsx } from 'react/jsx-runtime';

// src/components/text/Text.tsx
var Text = ({ text, tailwindClasses = "", animationObject, style }) => {
  const animationClasses = animationObject ? `animate__animated ${animationObject.isEntering ? animationObject.entranceAnimation : animationObject.exitAnimation}` : "";
  return /* @__PURE__ */ jsx("div", { className: `component-root ${tailwindClasses} ${animationClasses}`, style, children: text });
};
var Text_default = Text;

export { Text_default as Text };
//# sourceMappingURL=index.mjs.map
//# sourceMappingURL=index.mjs.map