"use strict";

require("core-js/modules/es.object.assign.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("core-js/modules/web.dom-collections.iterator.js");

var _react = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Variables = _interopRequireDefault(require("./Variables"));

var _templateObject, _templateObject2, _templateObject3, _templateObject4;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

// Styles
const Container = _styledComponents.default.span(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n    position: relative;\n    color: ", ";\n\n    ", "\n\n    ", "\n\n    &:after {\n        content: \"\";\n        position: absolute;\n        bottom: 75%;\n        left: 50%;\n        margin-left: -5px;\n        border-width: 5px;\n        border-style: solid;\n        opacity: 0;\n        transition: ", ";\n        border-color: ", " transparent\n            transparent transparent;\n        visibility: hidden;\n    }\n\n    &:hover:before,\n    &:hover:after {\n        opacity: 1;\n        visibility: visible;\n    }\n"])), props => props.color === "primary" ? _Variables.default.Colors.Primary500 : props.color === "secondary" ? _Variables.default.Colors.Secondary500 : props.color === "success" ? _Variables.default.Colors.Success500 : props.color === "danger" ? _Variables.default.Colors.Danger500 : props.color === "warning" ? _Variables.default.Colors.Warning500 : props.color === "white" ? _Variables.default.Colors.White : props.color || "currentColor", props => (props.textStyle === "underline" || props.textStyle === "dotted") && (0, _styledComponents.css)(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n            border-bottom: 1px\n                ", "\n                currentColor;\n        "])), props.textStyle === "underline" ? "solid" : "dotted"), props => props.textStyle === "bold" && (0, _styledComponents.css)(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n            font-weight: ", ";\n        "])), _Variables.default.FontWeights.Bold), _Variables.default.Transitions.Short, _Variables.default.Overlays.Plain.Black80);

const Tip = _styledComponents.default.span(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n    position: absolute;\n    width: 150px;\n    background-color: ", ";\n    color: ", ";\n    text-align: center;\n    padding: ", ";\n    border-radius: ", ";\n    z-index: 1;\n    opacity: ", ";\n    transition: ", ";\n    bottom: 125%;\n    left: calc(50% - 150px / 2);\n    font-size: ", ";\n    visibility: ", ";\n"])), _Variables.default.Overlays.Plain.Black80, _Variables.default.Colors.White, _Variables.default.Spacers.XS, _Variables.default.Radiuses.M, props => props.isVisible ? 1 : 0, _Variables.default.Transitions.Short, _Variables.default.FontSizes.Small, props => props.isVisible ? "visible" : "hidden");

const Tooltip = props => {
  const [isVisible, setIsVisible] = (0, _react.useState)(false);
  return /*#__PURE__*/_react.default.createElement(Container, _extends({
    textStyle: props.textStyle || "dotted",
    onMouseEnter: () => setIsVisible(true),
    onMouseLeave: () => setIsVisible(false)
  }, props), /*#__PURE__*/_react.default.createElement(Tip, {
    isVisible: isVisible
  }, props.text), props.children);
};

Tooltip.propTypes = {
  text: _propTypes.default.string.isRequired,
  children: _propTypes.default.string.isRequired
};
var _default = Tooltip;
exports.default = _default;