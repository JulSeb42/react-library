"use strict";

require("core-js/modules/es.object.assign.js");

require("core-js/modules/web.dom-collections.iterator.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _reactRouterDom = require("react-router-dom");

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Variables = _interopRequireDefault(require("./Variables"));

var _Icon = _interopRequireDefault(require("./Icon"));

var _templateObject, _templateObject2, _templateObject3, _templateObject4;

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

// Styles
const Container = _styledComponents.default.button(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n    justify-self: start;\n    width: ", ";\n    height: ", ";\n    display: inline-flex;\n    align-items: center;\n    justify-content: center;\n    padding: 0;\n    border-radius: 50%;\n    border: none;\n    transition: ", ";\n\n    ", "\n\n    ", "\n"])), props => "".concat(props.size, "px"), props => "".concat(props.size, "px"), _Variables.default.Transitions.Short, props => props.btnStyle === "plain" && (0, _styledComponents.css)(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n            background-color: ", ";\n            color: ", ";\n\n            &:hover {\n                background-color: ", ";\n            }\n\n            &:active {\n                background-color: ", ";\n            }\n\n            &:disabled {\n                background-color: ", ";\n                color: ", ";\n            }\n        "])), props => props.color === "primary" ? _Variables.default.Colors.Primary500 : props.color === "secondary" ? _Variables.default.Colors.Secondary500 : props.color === "success" ? _Variables.default.Colors.Success500 : props.color === "danger" ? _Variables.default.Colors.Danger500 : props.color === "warning" ? _Variables.default.Colors.Warning500 : props.color === "white" ? _Variables.default.Colors.White : props.color, props => props.color === "white" ? _Variables.default.Colors.Primary500 : _Variables.default.Colors.White, props => props.color === "primary" ? _Variables.default.Colors.Primary300 : props.color === "secondary" ? _Variables.default.Colors.Secondary300 : props.color === "success" ? _Variables.default.Colors.Success300 : props.color === "danger" ? _Variables.default.Colors.Danger300 : props.color === "warning" ? _Variables.default.Colors.Warning300 : props.color === "white" ? _Variables.default.Colors.Gray100 : props.colorHover, props => props.color === "primary" ? _Variables.default.Colors.Primary600 : props.color === "secondary" ? _Variables.default.Colors.Secondary600 : props.color === "success" ? _Variables.default.Colors.Success600 : props.color === "danger" ? _Variables.default.Colors.Danger600 : props.color === "warning" ? _Variables.default.Colors.Warning600 : props.color === "white" ? _Variables.default.Colors.Gray300 : props.colorActive, _Variables.default.Colors.Gray100, _Variables.default.Colors.Gray500), props => props.btnStyle === "transparent" && (0, _styledComponents.css)(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n            background-color: transparent;\n            color: ", ";\n\n            &:hover {\n                color: ", ";\n\n                ", "\n            }\n\n            &:active {\n                color: ", ";\n            }\n\n            &:disabled {\n                color: ", ";\n            }\n        "])), props => props.color === "primary" ? _Variables.default.Colors.Primary500 : props.color === "secondary" ? _Variables.default.Colors.Secondary500 : props.color === "success" ? _Variables.default.Colors.Success500 : props.color === "danger" ? _Variables.default.Colors.Danger500 : props.color === "warning" ? _Variables.default.Colors.Warning500 : props.color === "white" ? _Variables.default.Colors.White : props.color, props => props.color === "primary" ? _Variables.default.Colors.Primary300 : props.color === "secondary" ? _Variables.default.Colors.Secondary300 : props.color === "success" ? _Variables.default.Colors.Success300 : props.color === "danger" ? _Variables.default.Colors.Danger300 : props.color === "warning" ? _Variables.default.Colors.Warning300 : props.color === "white" ? _Variables.default.Colors.Gray100 : props.colorHover, props => props.hoverBackground && (0, _styledComponents.css)(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n                        background-color: ", ";\n\n                        &:disabled {\n                            background-color: transparent;\n                        }\n                    "])), _Variables.default.Colors.Gray50), props => props.color === "primary" ? _Variables.default.Colors.Primary600 : props.color === "secondary" ? _Variables.default.Colors.Secondary600 : props.color === "success" ? _Variables.default.Colors.Success600 : props.color === "danger" ? _Variables.default.Colors.Danger600 : props.color === "warning" ? _Variables.default.Colors.Warning600 : props.color === "white" ? _Variables.default.Colors.Gray300 : props.colorActive, _Variables.default.Colors.Gray500));

const ButtonIcon = props => {
  return /*#__PURE__*/_react.default.createElement(Container, _extends({
    as: props.to && _reactRouterDom.Link,
    size: props.size || 48,
    btnStyle: props.btnStyle || "plain",
    color: props.color || "primary"
  }, props), /*#__PURE__*/_react.default.createElement(_Icon.default, {
    name: props.icon,
    size: props.size * 0.6 || 48 * 0.6
  }));
};

ButtonIcon.propTypes = {
  icon: _propTypes.default.string.isRequired
};
var _default = ButtonIcon;
exports.default = _default;