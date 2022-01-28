"use strict";

require("core-js/modules/es.object.assign.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _Variables = _interopRequireDefault(require("./Variables"));

var _templateObject;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

// Styles
const Container = _styledComponents.default.button(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n    width: ", ";\n    height: ", ";\n    position: relative;\n    background: none;\n    border: none;\n    padding: 0;\n\n    span {\n        transition: ", ";\n        width: 100%;\n        height: ", ";\n        background-color: ", ";\n        position: absolute;\n        left: 0;\n\n        &:first-child {\n            top: 0;\n        }\n\n        &:nth-child(2) {\n            top: calc(50% - ", " / 2);\n        }\n\n        &:last-child {\n            bottom: 0;\n        }\n    }\n\n    &.open span {\n        &:first-child {\n            transform: rotate(45deg);\n            top: 45%;\n        }\n\n        &:nth-child(2) {\n            width: 0;\n        }\n\n        &:last-child {\n            transform: rotate(-45deg);\n            bottom: 45%;\n        }\n    }\n"])), props => "".concat(props.width, "px"), props => "".concat(props.height, "px"), _Variables.default.Transitions.Short, props => "".concat(props.border, "px"), props => props.color === "primary" ? _Variables.default.Colors.Primary500 : props.color === "secondary" ? _Variables.default.Colors.Secondary500 : props.color === "success" ? _Variables.default.Colors.Success500 : props.color === "danger" ? _Variables.default.Colors.Danger500 : props.color === "warning" ? _Variables.default.Colors.Warning500 : props.color === "white" ? _Variables.default.Colors.White : props.color, props => "".concat(props.border, "px"));

function Burger(props) {
  return /*#__PURE__*/_react.default.createElement(Container, _extends({
    width: props.width || 32,
    height: props.height || 24,
    color: props.color || "primary",
    border: props.border || 2
  }, props), /*#__PURE__*/_react.default.createElement("span", null), /*#__PURE__*/_react.default.createElement("span", null), /*#__PURE__*/_react.default.createElement("span", null));
}

var _default = Burger;
exports.default = _default;