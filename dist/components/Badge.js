"use strict";

require("core-js/modules/es.object.assign.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _Variables = _interopRequireDefault(require("./Variables"));

var _Icon = _interopRequireDefault(require("./Icon"));

var _templateObject;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

// Styles
const Container = _styledComponents.default.span(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n    width: ", ";\n    height: ", ";\n    border-radius: 50%;\n    overflow: hidden;\n    display: inline-flex;\n    align-items: center;\n    justify-content: center;\n    font-size: calc(", " * 0.7);\n    line-height: 100%;\n    background-color: ", ";\n    color: ", ";\n    font-weight: ", ";\n"])), props => "".concat(props.size, "px"), props => "".concat(props.size, "px"), props => "".concat(props.size, "px"), props => props.color === "primary" ? _Variables.default.Colors.Primary500 : props.color === "secondary" ? _Variables.default.Colors.Secondary500 : props.color === "success" ? _Variables.default.Colors.Success500 : props.color === "danger" ? _Variables.default.Colors.Danger500 : props.color === "warning" ? _Variables.default.Colors.Warning500 : props.color, props => props.textColor || _Variables.default.Colors.White, _Variables.default.FontWeights.Black);

const Badge = props => {
  return /*#__PURE__*/_react.default.createElement(Container, _extends({
    size: props.size || 16,
    color: props.color || "primary"
  }, props), props.icon && /*#__PURE__*/_react.default.createElement(_Icon.default, {
    name: props.icon,
    size: props.size * 0.7 || 48 * 0.7
  }), props.children && props.children);
};

var _default = Badge;
exports.default = _default;