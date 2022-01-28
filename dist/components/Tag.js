"use strict";

require("core-js/modules/es.object.assign.js");

require("core-js/modules/web.dom-collections.iterator.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var Variables = _interopRequireWildcard(require("./Variables"));

var _Icon = _interopRequireDefault(require("./Icon"));

var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6;

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

// Styles
const Container = _styledComponents.default.span(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n    display: inline-flex;\n    align-items: center;\n    transition: ", ";\n    padding: ", " ", ";\n    border-radius: ", ";\n\n    background-color: ", ";\n\n    color: ", ";\n\n    ", "\n\n    ", "\n"])), Variables.Transitions.Short, Variables.Margins.XXS, Variables.Margins.S, props => props.pill ? Variables.Radiuses.Round : Variables.Radiuses.M, props => props.color === "primary" ? Variables.Colors.Primary500 : props.color === "secondary" ? Variables.Colors.Secondary500 : props.color === "success" ? Variables.Colors.Success500 : props.color === "danger" ? Variables.Colors.Danger500 : props.color === "warning" ? Variables.Colors.Warning500 : props.color === "white" ? Variables.Colors.White : props.color === "disabled" ? Variables.Colors.Gray100 : props.color, props => props.color === "white" ? Variables.Colors.Primary500 : props.color === "disabled" ? Variables.Colors.Gray500 : Variables.Colors.White, props => props.select && (0, _styledComponents.css)(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n            cursor: ", ";\n\n            &:hover {\n                background-color: ", ";\n            }\n\n            &:active {\n                background-color: ", ";\n            }\n        "])), props => props.color === "disabled" ? "not-allowed" : "pointer", props => props.color === "primary" ? Variables.Colors.Primary300 : props.color === "secondary" ? Variables.Colors.Secondary300 : props.color === "success" ? Variables.Colors.Success300 : props.color === "danger" ? Variables.Colors.Danger300 : props.color === "warning" ? Variables.Colors.Warning300 : props.color === "white" ? Variables.Colors.Gray100 : props.colorHover, props => props.color === "primary" ? Variables.Colors.Primary600 : props.color === "secondary" ? Variables.Colors.Secondary600 : props.color === "success" ? Variables.Colors.Success600 : props.color === "danger" ? Variables.Colors.Danger600 : props.color === "warning" ? Variables.Colors.Warning600 : props.color === "white" ? Variables.Colors.Gray300 : props.colorActive), props => props.justify && (0, _styledComponents.css)(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n            justify-self: ", ";\n        "])), props => props.justify));

const Label = _styledComponents.default.label(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n    cursor: ", ";\n    font-size: ", ";\n"])), props => props.color === "disabled" ? "not-allowed" : "pointer", Variables.FontSizes.Body);

const Input = _styledComponents.default.input(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n    display: none;\n\n    &:checked ~ .icon {\n        margin-left: ", ";\n        width: inherit;\n    }\n"])), Variables.Margins.XXS);

const IconContainer = _styledComponents.default.label(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n    cursor: ", ";\n    width: 0;\n    margin-left: 0;\n    overflow: hidden;\n    transition: ", ";\n"])), props => props.color === "disabled" ? "not-allowed" : "pointer", Variables.Transitions.Long);

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
  }, /*#__PURE__*/_react.default.createElement(_Icon.default, {
    name: "close",
    size: 16
  }))) : props.label);
}

var _default = Tag;
exports.default = _default;