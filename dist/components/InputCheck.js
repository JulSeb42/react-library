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

var _Icon = _interopRequireDefault(require("./Icon"));

var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10, _templateObject11, _templateObject12;

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

// Styles
const Container = _styledComponents.default.label(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n    display: inline-flex;\n    align-items: center;\n    cursor: pointer;\n\n    ", "\n\n    ", "\n"])), props => props.disabled && (0, _styledComponents.css)(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n            cursor: not-allowed;\n        "]))), props => props.justify && (0, _styledComponents.css)(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n            justify-self: ", ";\n        "])), props.justify));

const Label = _styledComponents.default.label(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n    font-size: ", ";\n    cursor: pointer;\n\n    ", "\n\n    ", "\n"])), _Variables.default.FontSizes.Body, props => props.disabled && (0, _styledComponents.css)(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n            color: ", ";\n        "])), _Variables.default.Colors.Gray500), props => props.selector && (0, _styledComponents.css)(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n            background-color: ", ";\n            transition: ", ";\n            padding: ", " ", ";\n            border-radius: ", ";\n\n            &:hover {\n                background-color: ", ";\n                color: ", ";\n            }\n\n            &:active {\n                background-color: ", ";\n                color: ", ";\n            }\n        "])), _Variables.default.Colors.Gray100, _Variables.default.Transitions.Short, _Variables.default.Spacers.XXS, _Variables.default.Spacers.S, _Variables.default.Radiuses.Round, _Variables.default.Colors.Primary300, _Variables.default.Colors.White, _Variables.default.Colors.Primary600, _Variables.default.Colors.White));

const Input = _styledComponents.default.input(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n    display: none;\n\n    &:checked ~ .checkbox {\n        background-color: ", ";\n        border-color: ", ";\n\n        .icon {\n            display: inline-flex;\n        }\n    }\n\n    &:disabled:checked ~ .checkbox {\n        background-color: ", ";\n        border-color: ", ";\n        color: ", ";\n    }\n\n    &:disabled ~ label {\n        cursor: not-allowed;\n    }\n\n    &:checked ~ .radio:before {\n        background-color: ", ";\n    }\n\n    &:disabled:checked ~ .radio:before {\n        background-color: ", ";\n    }\n\n    &:checked ~ .toggle {\n        border-color: ", ";\n\n        &:before {\n            left: 12px;\n            background-color: ", ";\n        }\n    }\n\n    &:disabled ~ .toggle {\n        border-color: ", ";\n    }\n\n    &:disabled ~ .toggle:before {\n        background-color: ", ";\n    }\n\n    &:checked ~ .selector {\n        background-color: ", ";\n        color: ", ";\n\n        &:hover {\n            background-color: ", ";\n        }\n\n        &:active {\n            background-color: ", ";\n        }\n    }\n\n    &:disabled ~ .selector {\n        cursor: not-allowed;\n        background-color: ", ";\n        color: ", ";\n    }\n\n    &:checked:disabled ~ .selector {\n        background-color: ", ";\n        color: ", ";\n    }\n"])), _Variables.default.Colors.Primary500, _Variables.default.Colors.Primary500, _Variables.default.Colors.Gray200, _Variables.default.Colors.Gray200, _Variables.default.Colors.Gray800, _Variables.default.Colors.Primary500, _Variables.default.Colors.Gray500, _Variables.default.Colors.Success500, _Variables.default.Colors.Success500, _Variables.default.Colors.Gray500, _Variables.default.Colors.Gray500, _Variables.default.Colors.Primary500, _Variables.default.Colors.White, _Variables.default.Colors.Primary300, _Variables.default.Colors.Primary600, _Variables.default.Colors.Gray200, _Variables.default.Colors.Gray500, _Variables.default.Colors.Gray300, _Variables.default.Colors.Gray600);

const Checkbox = _styledComponents.default.label(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n    --size: 14px;\n    width: var(--size);\n    height: var(--size);\n    border: 1px solid ", ";\n    border-radius: ", ";\n    margin-right: ", ";\n    position: relative;\n    color: ", ";\n    display: inline-flex;\n    align-items: center;\n    justify-content: center;\n    cursor: pointer;\n\n    .icon {\n        display: none;\n    }\n\n    ", "\n"])), _Variables.default.Colors.Primary500, _Variables.default.Radiuses.S, _Variables.default.Spacers.XXS, _Variables.default.Colors.White, props => props.disabled && (0, _styledComponents.css)(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral(["\n            border-color: ", ";\n            background-color: ", ";\n            color: ", ";\n            cursor: not-allowed;\n        "])), _Variables.default.Colors.Gray200, _Variables.default.Colors.Gray50, _Variables.default.Colors.Gray800));

const Radio = _styledComponents.default.label(_templateObject10 || (_templateObject10 = _taggedTemplateLiteral(["\n    --size: 14px;\n    width: var(--size);\n    height: var(--size);\n    border-radius: 50%;\n    border: 1px solid ", ";\n    margin-right: ", ";\n    position: relative;\n\n    &:before {\n        content: \"\";\n        --size: 8px;\n        width: var(--size);\n        height: var(--size);\n        background-color: transparent;\n        position: absolute;\n        top: 2px;\n        left: 2px;\n        border-radius: 50%;\n    }\n\n    ", "\n"])), _Variables.default.Colors.Primary500, _Variables.default.Spacers.XXS, props => props.disabled && (0, _styledComponents.css)(_templateObject11 || (_templateObject11 = _taggedTemplateLiteral(["\n            border-color: ", ";\n            cursor: not-allowed;\n        "])), _Variables.default.Colors.Gray500));

const Toggle = _styledComponents.default.label(_templateObject12 || (_templateObject12 = _taggedTemplateLiteral(["\n    width: 24px;\n    height: 14px;\n    display: inline-block;\n    border-radius: 32px;\n    border: 1px solid ", ";\n    margin-right: ", ";\n    transition: ", ";\n    position: relative;\n\n    &:before {\n        content: \"\";\n        position: absolute;\n        --size: 8px;\n        width: var(--size);\n        height: var(--size);\n        background-color: ", ";\n        border-radius: 50%;\n        left: 2px;\n        top: calc(50% - 8px / 2);\n        transition: ", ";\n    }\n"])), _Variables.default.Colors.Primary500, _Variables.default.Spacers.XS, _Variables.default.Transitions.Short, _Variables.default.Colors.Primary500, _Variables.default.Transitions.Short);

const InputCheck = props => {
  return props.selector ? /*#__PURE__*/_react.default.createElement(Container, {
    justify: props.justify,
    disabled: props.disabled,
    as: "span"
  }, /*#__PURE__*/_react.default.createElement(Input, _extends({
    type: props.type || "checkbox",
    id: props.id,
    defaultChecked: props.defaultChecked
  }, props)), /*#__PURE__*/_react.default.createElement(Label, {
    disabled: props.disabled,
    defaultChecked: props.defaultChecked,
    selector: props.selector,
    className: "selector",
    htmlFor: props.id
  }, props.label)) : props.toggle ? /*#__PURE__*/_react.default.createElement(Container, {
    justify: props.justify,
    disabled: props.disabled
  }, /*#__PURE__*/_react.default.createElement(Input, _extends({
    type: props.type || "checkbox",
    id: props.id
  }, props)), /*#__PURE__*/_react.default.createElement(Toggle, {
    className: "toggle",
    htmlFor: props.id,
    disabled: props.disabled
  }), /*#__PURE__*/_react.default.createElement(Label, {
    disabled: props.disabled,
    selector: props.selector,
    htmlFor: props.id
  }, props.label)) : /*#__PURE__*/_react.default.createElement(Container, {
    justify: props.justify,
    disabled: props.disabled,
    htmlFor: props.id
  }, /*#__PURE__*/_react.default.createElement(Input, _extends({
    type: props.type || "checkbox",
    id: props.id
  }, props)), props.type === "checkbox" && /*#__PURE__*/_react.default.createElement(Checkbox, {
    className: "checkbox",
    htmlFor: props.id,
    disabled: props.disabled
  }, props.icon ? /*#__PURE__*/_react.default.createElement(_Icon.default, {
    name: props.icon,
    size: 14
  }) : /*#__PURE__*/_react.default.createElement("svg", {
    width: "14",
    height: "14",
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http:www.w3.org/2000/svg",
    className: "icon"
  }, /*#__PURE__*/_react.default.createElement("path", {
    d: "M5.83334 9.09183L3.91242 7.17092L3.08759 7.99575L5.83334 10.7415L11.4958 5.07908L10.6709 4.25425L5.83334 9.09183Z",
    fill: "currentColor"
  }))), props.type === "radio" && /*#__PURE__*/_react.default.createElement(Radio, {
    className: "radio",
    htmlFor: props.id,
    disabled: props.disabled
  }), /*#__PURE__*/_react.default.createElement(Label, {
    disabled: props.disabled,
    htmlFor: props.id
  }, props.label));
};

var _default = InputCheck;
exports.default = _default;