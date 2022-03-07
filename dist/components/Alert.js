"use strict";

require("core-js/modules/es.object.assign.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _Variables = _interopRequireDefault(require("./Variables"));

var _Grid = _interopRequireDefault(require("./Grid"));

var _templateObject;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

// Styles
const Container = (0, _styledComponents.default)(_Grid.default)(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n    padding: ", ";\n    background-color: ", ";\n    border: 1px solid\n        ", ";\n    border-radius: ", ";\n"])), _Variables.default.Spacers.S, props => props.color === "primary" ? _Variables.default.Colors.Primary50 : props.color === "secondary" ? _Variables.default.Colors.Secondary50 : props.color === "success" ? _Variables.default.Colors.Success50 : props.color === "danger" ? _Variables.default.Colors.Danger50 : props.color === "warning" ? _Variables.default.Colors.Warning50 : props.color === "white" ? _Variables.default.Colors.White : props.color, props => props.color === "primary" ? _Variables.default.Colors.Primary500 : props.color === "secondary" ? _Variables.default.Colors.Secondary500 : props.color === "success" ? _Variables.default.Colors.Success500 : props.color === "danger" ? _Variables.default.Colors.Danger500 : props.color === "warning" ? _Variables.default.Colors.Warning500 : props.color === "white" ? _Variables.default.Colors.White : props.borderColor, _Variables.default.Radiuses.M);

const Alert = props => {
  return /*#__PURE__*/_react.default.createElement(Container, _extends({
    col: 1,
    gap: _Variables.default.Spacers.S,
    color: props.color || "success",
    borderColor: props.borderColor
  }, props), props.children);
};

var _default = Alert;
exports.default = _default;