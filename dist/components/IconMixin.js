"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _styledComponents = require("styled-components");

var _templateObject;

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

// Styles
const IconMixin = _ref => {
  let {
    icon,
    size,
    color
  } = _ref;
  return (0, _styledComponents.css)(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n    content: \"\";\n    mask: url(\"/icons/", ".svg\") no-repeat 50% 50%;\n    mask-size: cover;\n    background-color: ", ";\n    display: inline-block;\n    width: ", "px;\n    height: ", "px;\n"])), icon, color || "currentColor", size, size);
};

var _default = IconMixin; // How to use the mixin
// Import in the file you want to use this component
// import { IconMixin } from "/path/to/Icon"
// div:before {
//     ${IconMixin({
//         icon: "name-of-icon",
//         size: "12px",
//         color: "black",
//     })}
// }

exports.default = _default;