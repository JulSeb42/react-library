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

var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10, _templateObject11;

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

// Styles
const Container = _styledComponents.default.label(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n    display: inline-flex;\n    align-items: center;\n    cursor: pointer;\n\n    ", "\n\n    ", "\n"])), props => props.disabled && (0, _styledComponents.css)(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n            cursor: not-allowed;\n        "]))), props => props.justify && (0, _styledComponents.css)(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n            justify-self: ", ";\n        "])), props.justify));

const Label = _styledComponents.default.span(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n    font-size: ", ";\n\n    ", "\n"])), Variables.FontSizes.Body, props => props.disabled && (0, _styledComponents.css)(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n            color: ", ";\n        "])), Variables.Colors.Gray500));

const Input = _styledComponents.default.input(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n    display: none;\n\n    &:checked ~ .checkbox {\n        background-color: ", ";\n        border-color: ", ";\n\n        .icon {\n            display: inline-flex;\n        }\n    }\n\n    &:disabled:checked ~ .checkbox {\n        background-color: ", ";\n        border-color: ", ";\n        color: ", ";\n    }\n\n    &:checked ~ .radio:before {\n        background-color: ", ";\n    }\n\n    &:disabled:checked ~ .radio:before {\n        background-color: ", ";\n    }\n\n    &:checked ~ .toggle {\n        border-color: ", ";\n\n        &:before {\n            left: 12px;\n            background-color: ", ";\n        }\n    }\n\n    &:disabled ~ .toggle {\n        border-color: ", ";\n    }\n\n    &:disabled ~ .toggle:before {\n        background-color: ", ";\n    }\n"])), Variables.Colors.Primary500, Variables.Colors.Primary500, Variables.Colors.Gray200, Variables.Colors.Gray200, Variables.Colors.Gray800, Variables.Colors.Primary500, Variables.Colors.Gray500, Variables.Colors.Success500, Variables.Colors.Success500, Variables.Colors.Gray500, Variables.Colors.Gray500);

const Checkbox = _styledComponents.default.label(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n    --size: 14px;\n    width: var(--size);\n    height: var(--size);\n    border: 1px solid ", ";\n    border-radius: ", ";\n    margin-right: ", ";\n    position: relative;\n    color: ", ";\n    display: inline-flex;\n    align-items: center;\n    justify-content: center;\n    cursor: pointer;\n\n    .icon {\n        display: none;\n    }\n\n    ", "\n"])), Variables.Colors.Primary500, Variables.Radiuses.S, Variables.Margins.XXS, Variables.Colors.White, props => props.disabled && (0, _styledComponents.css)(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n            border-color: ", ";\n            background-color: ", ";\n            color: ", ";\n            cursor: not-allowed;\n        "])), Variables.Colors.Gray200, Variables.Colors.Gray50, Variables.Colors.Gray800));

const Radio = _styledComponents.default.label(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral(["\n    --size: 14px;\n    width: var(--size);\n    height: var(--size);\n    border-radius: 50%;\n    border: 1px solid ", ";\n    margin-right: ", ";\n    position: relative;\n\n    &:before {\n        content: \"\";\n        --size: 8px;\n        width: var(--size);\n        height: var(--size);\n        background-color: transparent;\n        position: absolute;\n        top: 2px;\n        left: 2px;\n        border-radius: 50%;\n    }\n\n    ", "\n"])), Variables.Colors.Primary500, Variables.Margins.XXS, props => props.disabled && (0, _styledComponents.css)(_templateObject10 || (_templateObject10 = _taggedTemplateLiteral(["\n            border-color: ", ";\n            cursor: not-allowed;\n        "])), Variables.Colors.Gray500));

const Toggle = _styledComponents.default.label(_templateObject11 || (_templateObject11 = _taggedTemplateLiteral(["\n    width: 24px;\n    height: 14px;\n    display: inline-block;\n    border-radius: 32px;\n    border: 1px solid ", ";\n    margin-right: ", ";\n    transition: ", ";\n    position: relative;\n\n    &:before {\n        content: \"\";\n        position: absolute;\n        --size: 8px;\n        width: var(--size);\n        height: var(--size);\n        background-color: ", ";\n        border-radius: 50%;\n        left: 2px;\n        top: calc(50% - 8px / 2);\n        transition: ", ";\n    }\n"])), Variables.Colors.Primary500, Variables.Margins.XS, Variables.Transitions.Short, Variables.Colors.Primary500, Variables.Transitions.Short);

function CheckInput(props) {
  return /*#__PURE__*/_react.default.createElement(Container, {
    justify: props.justify,
    disabled: props.disabled
  }, /*#__PURE__*/_react.default.createElement(Input, _extends({
    type: props.type,
    id: props.id
  }, props)), !props.toggle && props.type === "checkbox" && /*#__PURE__*/_react.default.createElement(Checkbox, {
    className: "checkbox",
    htmlFor: props.id,
    disabled: props.disabled
  }, /*#__PURE__*/_react.default.createElement(_Icon.default, {
    name: "check",
    size: 14,
    className: "icon"
  })), !props.toggle && props.type === "radio" && /*#__PURE__*/_react.default.createElement(Radio, {
    className: "radio",
    htmlFor: props.id,
    disabled: props.disabled
  }), props.toggle && /*#__PURE__*/_react.default.createElement(Toggle, {
    className: "toggle",
    htmlFor: props.id,
    disabled: props.disabled
  }), /*#__PURE__*/_react.default.createElement(Label, {
    disabled: props.disabled
  }, props.label));
}

var _default = CheckInput;
exports.default = _default;