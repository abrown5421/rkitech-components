import { jsx } from 'react/jsx-runtime';

// src/components/text/Text.tsx
var Text = ({ text, tailwindClasses = "", animationObject, style }) => {
  const animationClasses = animationObject ? `animate__animated ${animationObject.isEntering ? animationObject.entranceAnimation : animationObject.exitAnimation}` : "";
  return /* @__PURE__ */ jsx("div", { className: `component-root ${tailwindClasses} ${animationClasses}`, style, children: text });
};
var Text_default = Text;
var Container = ({
  children,
  tailwindClasses = "",
  animationObject,
  style,
  onClick
}) => {
  const animationClasses = animationObject ? `animate__animated ${animationObject.isEntering ? animationObject.entranceAnimation : animationObject.exitAnimation}` : "";
  return /* @__PURE__ */ jsx(
    "div",
    {
      className: `component-root flex ${tailwindClasses} ${animationClasses}`,
      style,
      onClick,
      children
    }
  );
};
var Container_default = Container;

export { Container_default as Container, Text_default as Text };
//# sourceMappingURL=index.mjs.map
//# sourceMappingURL=index.mjs.map