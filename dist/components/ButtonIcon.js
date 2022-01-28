"use strict";

require("core-js/modules/es.object.assign.js");

require("core-js/modules/web.dom-collections.iterator.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var Variables = _interopRequireWildcard(require("./Variables"));

var _LinkScroll = _interopRequireDefault(require("./LinkScroll"));

var _Icon = _interopRequireDefault(require("./Icon"));

var _templateObject;

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

// Styles
const Container = _styledComponents.default.button(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n    justify-self: start;\n    width: ", ";\n    height: ", ";\n    display: inline-flex;\n    align-items: center;\n    justify-content: center;\n    padding: 0;\n    border-radius: 50%;\n    border: none;\n    transition: ", ";\n\n    background-color: ", ";\n\n    color: ", ";\n\n    &:hover {\n        background-color: ", ";\n    }\n\n    &:active {\n        background-color: ", ";\n    }\n\n    &:disabled {\n        background-color: ", ";\n        color: ", ";\n    }\n"])), props => "".concat(props.size, "px"), props => "".concat(props.size, "px"), Variables.Transitions.Short, props => props.color === "primary" ? Variables.Colors.Primary500 : props.color === "secondary" ? Variables.Colors.Secondary500 : props.color === "success" ? Variables.Colors.Success500 : props.color === "danger" ? Variables.Colors.Danger500 : props.color === "warning" ? Variables.Colors.Warning500 : props.color === "white" ? Variables.Colors.White : props.color, props => props.color === "white" ? Variables.Colors.Primary500 : Variables.Colors.White, props => props.color === "primary" ? Variables.Colors.Primary300 : props.color === "secondary" ? Variables.Colors.Secondary300 : props.color === "success" ? Variables.Colors.Success300 : props.color === "danger" ? Variables.Colors.Danger300 : props.color === "warning" ? Variables.Colors.Warning300 : props.color === "white" ? Variables.Colors.Gray100 : props.colorHover, props => props.color === "primary" ? Variables.Colors.Primary600 : props.color === "secondary" ? Variables.Colors.Secondary600 : props.color === "success" ? Variables.Colors.Success600 : props.color === "danger" ? Variables.Colors.Danger600 : props.color === "warning" ? Variables.Colors.Warning600 : props.color === "white" ? Variables.Colors.Gray300 : props.colorActive, Variables.Colors.Gray100, Variables.Colors.Gray500);

function ButtonIcon(props) {
  return /*#__PURE__*/_react.default.createElement(Container, _extends({
    as: props.to && _LinkScroll.default,
    size: props.size || 48
  }, props), /*#__PURE__*/_react.default.createElement(_Icon.default, {
    name: props.icon,
    size: props.size * 0.6 || 48 * 0.6
  }));
}

var _default = ButtonIcon;
exports.default = _default;