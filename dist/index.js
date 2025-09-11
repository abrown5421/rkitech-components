'use strict';

var jsxRuntime = require('react/jsx-runtime');

// src/components/text/Text.tsx
var Text = ({ text, tailwindClasses = "", animationObject, style }) => {
  const animationClasses = animationObject ? `animate__animated ${animationObject.isEntering ? animationObject.entranceAnimation : animationObject.exitAnimation}` : "";
  return /* @__PURE__ */ jsxRuntime.jsx("div", { className: `component-root ${tailwindClasses} ${animationClasses}`, style, children: text });
};
var Text_default = Text;

exports.Text = Text_default;
//# sourceMappingURL=index.js.map
//# sourceMappingURL=index.js.map