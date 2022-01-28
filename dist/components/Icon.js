"use strict";

require("core-js/modules/es.object.assign.js");

require("core-js/modules/web.dom-collections.iterator.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.IconMixin = void 0;
exports.default = Icon;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _reactSvg = require("react-svg");

var _templateObject, _templateObject2;

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

const IconStyled = (0, _styledComponents.default)(_reactSvg.ReactSVG)(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n    display: inline-flex;\n    width: ", ";\n    height: ", ";\n    align-items: center;\n    justify-content: center;\n\n    span {\n        display: inline-flex;\n        align-items: center;\n        justify-content: center;\n        width: 100%;\n        height: 100%;\n    }\n\n    svg {\n        fill: black;\n        width: 100%;\n        height: 100%;\n    }\n\n    path {\n        fill: ", ";\n    }\n"])), props => "".concat(props.size, "px"), props => "".concat(props.size, "px"), props => props.color);

function Icon(props) {
  return /*#__PURE__*/_react.default.createElement(IconStyled, _extends({
    src: props.component ? "./icons/".concat(props.name, ".svg") : "/icons/".concat(props.name, ".svg"),
    color: props.color || "currentColor",
    size: props.size,
    wrapper: "span"
  }, props));
} // How to use
// Import in the file you want to use this component
// import Icon from "/path/to/Icon.js"
// Use the component
// <Icon name="name-of-icon" size={32} color="color" />


const IconMixin = _ref => {
  let {
    icon,
    size,
    color
  } = _ref;
  return (0, _styledComponents.css)(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n    content: \"\";\n    mask: url(\"./icons/", ".svg\") no-repeat 50% 50%;\n    mask-size: cover;\n    background-color: ", ";\n    display: inline-block;\n    width: ", "px;\n    height: ", "px;\n"])), icon, color || "currentColor", size, size);
}; // How to use the mixin
// Import in the file you want to use this component
// import { IconMixin } from "/path/to/Icon.js"
// div:before {
//     ${IconMixin({
//         icon: "name-of-icon",
//         size: "12px",
//         color: "black",
//     })}
// }


exports.IconMixin = IconMixin;