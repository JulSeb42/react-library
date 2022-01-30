"use strict";

require("core-js/modules/es.object.assign.js");

require("core-js/modules/web.dom-collections.iterator.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _Variables = _interopRequireDefault(require("./Variables"));

var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6;

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

// Styles
const Container = _styledComponents.default.span(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n    display: inline-flex;\n    align-items: center;\n    transition: ", ";\n    padding: ", " ", ";\n    border-radius: ", ";\n\n    background-color: ", ";\n\n    color: ", ";\n\n    ", "\n\n    ", "\n"])), _Variables.default.Transitions.Short, _Variables.default.Margins.XXS, _Variables.default.Margins.S, props => props.pill ? _Variables.default.Radiuses.Round : _Variables.default.Radiuses.M, props => props.color === "primary" ? _Variables.default.Colors.Primary500 : props.color === "secondary" ? _Variables.default.Colors.Secondary500 : props.color === "success" ? _Variables.default.Colors.Success500 : props.color === "danger" ? _Variables.default.Colors.Danger500 : props.color === "warning" ? _Variables.default.Colors.Warning500 : props.color === "white" ? _Variables.default.Colors.White : props.color === "disabled" ? _Variables.default.Colors.Gray100 : props.color, props => props.color === "white" ? _Variables.default.Colors.Primary500 : props.color === "disabled" ? _Variables.default.Colors.Gray500 : _Variables.default.Colors.White, props => props.select && (0, _styledComponents.css)(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n            cursor: ", ";\n\n            &:hover {\n                background-color: ", ";\n            }\n\n            &:active {\n                background-color: ", ";\n            }\n        "])), props => props.color === "disabled" ? "not-allowed" : "pointer", props => props.color === "primary" ? _Variables.default.Colors.Primary300 : props.color === "secondary" ? _Variables.default.Colors.Secondary300 : props.color === "success" ? _Variables.default.Colors.Success300 : props.color === "danger" ? _Variables.default.Colors.Danger300 : props.color === "warning" ? _Variables.default.Colors.Warning300 : props.color === "white" ? _Variables.default.Colors.Gray100 : props.colorHover, props => props.color === "primary" ? _Variables.default.Colors.Primary600 : props.color === "secondary" ? _Variables.default.Colors.Secondary600 : props.color === "success" ? _Variables.default.Colors.Success600 : props.color === "danger" ? _Variables.default.Colors.Danger600 : props.color === "warning" ? _Variables.default.Colors.Warning600 : props.color === "white" ? _Variables.default.Colors.Gray300 : props.colorActive), props => props.justify && (0, _styledComponents.css)(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n            justify-self: ", ";\n        "])), props => props.justify));

const Label = _styledComponents.default.label(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n    cursor: ", ";\n    font-size: ", ";\n"])), props => props.color === "disabled" ? "not-allowed" : "pointer", _Variables.default.FontSizes.Body);

const Input = _styledComponents.default.input(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n    display: none;\n\n    &:checked ~ .icon {\n        margin-left: ", ";\n        width: inherit;\n    }\n"])), _Variables.default.Margins.XXS);

const IconContainer = _styledComponents.default.label(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n    cursor: ", ";\n    width: 0;\n    margin-left: 0;\n    overflow: hidden;\n    transition: ", ";\n    display: inline-flex;\n    align-items: center;\n"])), props => props.color === "disabled" ? "not-allowed" : "pointer", _Variables.default.Transitions.Long);

function Tag(props) {
  return /*#__PURE__*/_react.default.createElement(Container, {
    justify: props.justify,
    color: props.color || "primary",
    pill: props.pill,
    select: props.select
  }, props.select ? /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(Input, _extends({
    type: props.type || "checkbox",
    id: props.id,
    name: props.name
  }, props)), /*#__PURE__*/_react.default.createElement(Label, {
    htmlFor: props.id,
    color: props.color
  }, props.label), /*#__PURE__*/_react.default.createElement(IconContainer, {
    htmlFor: props.id,
    className: "icon",
    color: props.color
  }, /*#__PURE__*/_react.default.createElement("svg", {
    width: "16",
    height: "16",
    viewBox: "0 0 16 16",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/_react.default.createElement("path", {
    d: "M10.7947 4.22933L7.96601 7.05733L5.13801 4.22933L4.19534 5.172L7.02334 8L4.19534 10.828L5.13801 11.7707L7.96601 8.94267L10.7947 11.7707L11.7373 10.828L8.90934 8L11.7373 5.172L10.7947 4.22933Z",
    fill: "currentColor"
  })))) : props.label);
}

var _default = Tag;
exports.default = _default;