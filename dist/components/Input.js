"use strict";

require("core-js/modules/es.object.assign.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("core-js/modules/web.dom-collections.iterator.js");

var _react = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _reactMdEditor = _interopRequireDefault(require("@uiw/react-md-editor"));

var _Variables = _interopRequireDefault(require("./Variables"));

var _InputContainer = _interopRequireDefault(require("./InputContainer"));

var _Icon = _interopRequireWildcard(require("./Icon"));

var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10, _templateObject11;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

// Styles
const Container = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n    position: relative;\n"])));

const InputStyled = _styledComponents.default.input(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n    position: relative;\n    z-index: 1;\n    border: 1px solid ", ";\n    border-radius: ", ";\n    outline: none;\n    padding: ", " ", ";\n    font-family: ", ";\n    font-size: ", ";\n    height: 35px;\n    width: 100%;\n\n    &:focus {\n        border-color: ", ";\n    }\n\n    &:disabled {\n        cursor: not-allowed;\n        color: ", ";\n        border-color: ", ";\n        background-color: ", ";\n    }\n\n    ", "\n\n    ", "\n\n    ", "\n    \n    ", "\n"])), _Variables.default.Colors.Gray200, _Variables.default.Radiuses.S, _Variables.default.Margins.XS, _Variables.default.Margins.XS, _Variables.default.FontFamilies.Body, _Variables.default.FontSizes.Body, _Variables.default.Colors.Primary500, _Variables.default.Colors.Gray800, _Variables.default.Colors.Gray200, _Variables.default.Colors.Gray50, props => props.type === "textarea" && (0, _styledComponents.css)(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n            min-height: calc(\n                ", " * ", " * 3 +\n                    ", " * 2\n            );\n            resize: vertical;\n        "])), _Variables.default.FontSizes.Body, _Variables.default.LineHeight, _Variables.default.Margins.XXS), props => props.type === "select" && (0, _styledComponents.css)(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n            appearance: none;\n            cursor: pointer;\n\n            &::-ms-expand {\n                display: none;\n            }\n        "]))), props => props.icon && (0, _styledComponents.css)(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n            padding-left: calc(", " + 32px);\n        "])), _Variables.default.Margins.XS), props => props.validation && props.validation !== "passed" && props.value.length > 0 && (0, _styledComponents.css)(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n            background-color: ", ";\n\n            &:focus {\n                border-color: ", ";\n            }\n        "])), _Variables.default.Colors.Danger50, _Variables.default.Colors.Danger500));

const IconContainer = _styledComponents.default.span(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n    position: absolute;\n    top: 0;\n    left: 0;\n    z-index: 2;\n    display: inline-flex;\n    align-items: center;\n    justify-content: center;\n    height: 100%;\n    width: 32px;\n    color: ", ";\n\n    &:after {\n        content: \"\";\n        position: absolute;\n        top: 1px;\n        right: 0;\n        height: calc(100% - 2px);\n        width: 1px;\n        background-color: ", ";\n    }\n"])), props => props.disabled ? _Variables.default.Colors.Gray800 : _Variables.default.Colors.Primary500, _Variables.default.Colors.Gray200);

const RightContainer = _styledComponents.default.span(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n    position: absolute;\n    top: 0;\n    right: ", ";\n    height: 100%;\n    z-index: 1;\n    display: inline-flex;\n    align-items: center;\n\n    & > *:not(:last-child) {\n        margin-right: ", ";\n    }\n"])), _Variables.default.Margins.XS, _Variables.default.Margins.XXS);

const ButtonPassword = _styledComponents.default.button(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral(["\n    border: none;\n    padding: 0;\n    background: none;\n    color: ", ";\n    font-size: ", ";\n    font-weight: ", ";\n    transition: ", ";\n\n    &:hover {\n        color: ", ";\n    }\n\n    &:active {\n        color: ", ";\n    }\n"])), _Variables.default.Colors.Primary500, _Variables.default.FontSizes.Body, _Variables.default.FontWeights.Bold, _Variables.default.Transitions.Short, _Variables.default.Colors.Primary300, _Variables.default.Colors.Primary600);

const SelectContainer = _styledComponents.default.div(_templateObject10 || (_templateObject10 = _taggedTemplateLiteral(["\n    position: relative;\n\n    &:after {\n        ", "\n        position: absolute;\n        z-index: 2;\n        top: calc(50% - 16px / 2);\n        right: ", ";\n\n        ", "\n    }\n"])), (0, _Icon.IconMixin)({
  icon: "chevron-down",
  size: 16,
  color: _Variables.default.Colors.Primary500
}), _Variables.default.Margins.XS, props => props.disabled && (0, _styledComponents.css)(_templateObject11 || (_templateObject11 = _taggedTemplateLiteral(["\n                ", "\n            "])), (0, _Icon.IconMixin)({
  icon: "chevron-down",
  size: 16,
  color: _Variables.default.Colors.Gray800
}))); // Components


function InputFunction(props) {
  const [isVisible, setIsVisible] = (0, _react.useState)(false);
  const visible = isVisible ? "text" : "password";
  return props.icon || props.password || props.validation ? /*#__PURE__*/_react.default.createElement(Container, {
    type: props.type
  }, props.icon && /*#__PURE__*/_react.default.createElement(IconContainer, {
    disabled: props.disabled
  }, /*#__PURE__*/_react.default.createElement(_Icon.default, {
    name: props.icon,
    size: 16
  })), /*#__PURE__*/_react.default.createElement(InputStyled, _extends({
    id: props.id,
    value: props.value,
    type: props.password ? visible : props.type,
    onChange: props.onChange,
    icon: props.icon
  }, props)), (props.validation || props.password) && /*#__PURE__*/_react.default.createElement(RightContainer, null, props.validation && props.value.length > 0 && (props.validation === "passed" ? /*#__PURE__*/_react.default.createElement("svg", {
    width: "16",
    height: "16",
    viewBox: "0 0 16 16",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/_react.default.createElement("path", {
    d: "M5.13333 7.528L6.666 9.058L10.1953 5.52867L11.138 6.47133L6.66733 10.942L4.192 8.472L5.13333 7.528Z",
    fill: _Variables.default.Colors.Success500
  }), /*#__PURE__*/_react.default.createElement("path", {
    "fill-rule": "evenodd",
    "clip-rule": "evenodd",
    d: "M1.33334 8C1.33334 4.324 4.324 1.33334 8 1.33334C11.676 1.33334 14.6667 4.324 14.6667 8C14.6667 11.676 11.676 14.6667 8 14.6667C4.324 14.6667 1.33334 11.676 1.33334 8ZM2.66667 8C2.66667 10.9407 5.05934 13.3333 8 13.3333C10.9407 13.3333 13.3333 10.9407 13.3333 8C13.3333 5.05934 10.9407 2.66667 8 2.66667C5.05934 2.66667 2.66667 5.05934 2.66667 8Z",
    fill: _Variables.default.Colors.Success500
  })) : /*#__PURE__*/_react.default.createElement("svg", {
    width: "16",
    height: "16",
    viewBox: "0 0 16 16",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/_react.default.createElement("path", {
    d: "M9.88532 10.828L7.99999 8.94267L6.11466 10.828L5.17199 9.88534L7.05733 8L5.17199 6.11467L6.11466 5.172L7.99999 7.05734L9.88532 5.172L10.828 6.11467L8.94266 8L10.828 9.88534L9.88532 10.828Z",
    fill: _Variables.default.Colors.Danger500
  }), /*#__PURE__*/_react.default.createElement("path", {
    "fill-rule": "evenodd",
    "clip-rule": "evenodd",
    d: "M14.6667 8C14.6667 11.676 11.676 14.6667 7.99999 14.6667C4.32399 14.6667 1.33333 11.676 1.33333 8C1.33333 4.324 4.32399 1.33334 7.99999 1.33334C11.676 1.33334 14.6667 4.324 14.6667 8ZM13.3333 8C13.3333 5.05934 10.9407 2.66667 7.99999 2.66667C5.05933 2.66667 2.66666 5.05934 2.66666 8C2.66666 10.9407 5.05933 13.3333 7.99999 13.3333C10.9407 13.3333 13.3333 10.9407 13.3333 8Z",
    fill: _Variables.default.Colors.Danger500
  }))), props.password && /*#__PURE__*/_react.default.createElement(ButtonPassword, {
    onClick: () => setIsVisible(!isVisible),
    type: "button"
  }, isVisible ? "Hide" : "Show"))) : props.type === "textarea" ? /*#__PURE__*/_react.default.createElement(InputStyled, _extends({
    id: props.id,
    as: "textarea",
    maxLength: props.counter
  }, props)) : props.type === "select" ? /*#__PURE__*/_react.default.createElement(SelectContainer, {
    disabled: props.disabled
  }, /*#__PURE__*/_react.default.createElement(InputStyled, _extends({
    as: "select",
    id: props.id
  }, props), props.children)) : props.type === "markdown" ? /*#__PURE__*/_react.default.createElement(_reactMdEditor.default, _extends({
    value: props.value,
    onChange: props.onChange,
    preview: props.preview || "edit"
  }, props)) : /*#__PURE__*/_react.default.createElement(InputStyled, _extends({
    id: props.id
  }, props));
}

function Input(props) {
  return props.label || props.helper || props.validation || props.counter ? /*#__PURE__*/_react.default.createElement(_InputContainer.default, {
    label: props.label,
    helper: props.helper,
    validation: props.validation,
    validationText: props.validationText,
    id: props.id,
    value: props.value,
    counter: props.counter
  }, /*#__PURE__*/_react.default.createElement(InputFunction, _extends({
    validation: props.validation,
    id: props.id,
    max: props.counter && props.counter
  }, props))) : /*#__PURE__*/_react.default.createElement(InputFunction, _extends({
    id: props.id
  }, props));
}

var _default = Input;
exports.default = _default;