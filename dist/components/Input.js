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

var _Icon = _interopRequireDefault(require("./Icon"));

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

const SelectContainer = _styledComponents.default.div(_templateObject10 || (_templateObject10 = _taggedTemplateLiteral(["\n    position: relative;\n\n    &:after {\n        content: url(\"data:image/svg+xml,%3Csvg width='16' height='16' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M10.862 6.19533L8.00001 9.05733L5.13801 6.19533L4.19534 7.13799L8.00001 10.9427L11.8047 7.13799L10.862 6.19533Z' fill='%231B4568'/%3E%3C/svg%3E\");\n        color: ", ";\n        position: absolute;\n        z-index: 2;\n        top: calc(50% - 18px / 2);\n        right: ", ";\n\n        ", "\n    }\n"])), _Variables.default.Colors.Primary500, _Variables.default.Margins.XS, props => props.disabled && (0, _styledComponents.css)(_templateObject11 || (_templateObject11 = _taggedTemplateLiteral(["\n                content: url(\"data:image/svg+xml,%3Csvg width='16' height='16' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M10.862 6.19533L8.00001 9.05733L5.13801 6.19533L4.19534 7.13799L8.00001 10.9427L11.8047 7.13799L10.862 6.19533Z' fill='%232F2F2F'/%3E%3C/svg%3E\");\n            "])))); // Components


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
    type: props.password ? visible : props.type || "text",
    onChange: props.onChange,
    icon: props.icon,
    maxLength: props.counter
  }, props)), (props.validation || props.password) && /*#__PURE__*/_react.default.createElement(RightContainer, null, props.validation && props.value.length > 0 && (props.validation === "passed" ? props.customiconpassed ? /*#__PURE__*/_react.default.createElement(_Icon.default, {
    name: props.customiconpassed,
    color: _Variables.default.Colors.Success500,
    size: 16
  }) : /*#__PURE__*/_react.default.createElement("svg", {
    width: "16",
    height: "16",
    viewBox: "0 0 16 16",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/_react.default.createElement("path", {
    d: "M5.13333 7.528L6.666 9.058L10.1953 5.52867L11.138 6.47133L6.66733 10.942L4.192 8.472L5.13333 7.528Z",
    fill: _Variables.default.Colors.Success500
  }), /*#__PURE__*/_react.default.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M1.33334 8C1.33334 4.324 4.324 1.33334 8 1.33334C11.676 1.33334 14.6667 4.324 14.6667 8C14.6667 11.676 11.676 14.6667 8 14.6667C4.324 14.6667 1.33334 11.676 1.33334 8ZM2.66667 8C2.66667 10.9407 5.05934 13.3333 8 13.3333C10.9407 13.3333 13.3333 10.9407 13.3333 8C13.3333 5.05934 10.9407 2.66667 8 2.66667C5.05934 2.66667 2.66667 5.05934 2.66667 8Z",
    fill: _Variables.default.Colors.Success500
  })) : props.customiconnotpassed ? /*#__PURE__*/_react.default.createElement(_Icon.default, {
    name: props.customiconnotpassed,
    color: _Variables.default.Colors.Danger500,
    size: 16
  }) : /*#__PURE__*/_react.default.createElement("svg", {
    width: "16",
    height: "16",
    viewBox: "0 0 16 16",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/_react.default.createElement("path", {
    d: "M9.88532 10.828L7.99999 8.94267L6.11466 10.828L5.17199 9.88534L7.05733 8L5.17199 6.11467L6.11466 5.172L7.99999 7.05734L9.88532 5.172L10.828 6.11467L8.94266 8L10.828 9.88534L9.88532 10.828Z",
    fill: _Variables.default.Colors.Danger500
  }), /*#__PURE__*/_react.default.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M14.6667 8C14.6667 11.676 11.676 14.6667 7.99999 14.6667C4.32399 14.6667 1.33333 11.676 1.33333 8C1.33333 4.324 4.32399 1.33334 7.99999 1.33334C11.676 1.33334 14.6667 4.324 14.6667 8ZM13.3333 8C13.3333 5.05934 10.9407 2.66667 7.99999 2.66667C5.05933 2.66667 2.66666 5.05934 2.66666 8C2.66666 10.9407 5.05933 13.3333 7.99999 13.3333C10.9407 13.3333 13.3333 10.9407 13.3333 8Z",
    fill: _Variables.default.Colors.Danger500
  }))), props.password && /*#__PURE__*/_react.default.createElement(ButtonPassword, {
    onClick: () => setIsVisible(!isVisible),
    type: "button"
  }, props.iconpassword ? isVisible ? /*#__PURE__*/_react.default.createElement("svg", {
    width: "16",
    height: "16",
    viewBox: "0 0 16 16",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/_react.default.createElement("path", {
    d: "M8 6.66659C8 7.39659 8.60333 7.99992 9.33333 7.99992C9.56933 7.99992 9.78867 7.93125 9.982 7.82125C9.98384 7.8449 9.98703 7.86814 9.99021 7.89137C9.99511 7.92707 10 7.96276 10 7.99992C10 9.09459 9.094 9.99992 8 9.99992C6.90533 9.99992 6 9.09459 6 7.99992C6.00349 7.47056 6.21533 6.96388 6.58965 6.58957C6.96397 6.21525 7.47065 6.00341 8 5.99992C8.03716 5.99992 8.07285 6.00481 8.10855 6.00971C8.13178 6.01289 8.15502 6.01608 8.17867 6.01792C8.06867 6.21125 8 6.43059 8 6.66659Z",
    fill: _Variables.default.Colors.Primary500
  }), /*#__PURE__*/_react.default.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M1.36803 7.78925C1.38203 7.74458 2.91136 3.33325 8.00003 3.33325C13.0887 3.33325 14.618 7.74458 14.6327 7.78925L14.7027 7.99992L14.632 8.21058C14.618 8.25525 13.0887 12.6666 8.00003 12.6666C2.91136 12.6666 1.38203 8.25525 1.36736 8.21058L1.29736 7.99992L1.36803 7.78925ZM2.71603 7.99992C3.0507 8.76925 4.4327 11.3333 8.00003 11.3333C11.5654 11.3333 12.948 8.77192 13.284 7.99992C12.9494 7.23058 11.5674 4.66659 8.00003 4.66659C4.4347 4.66659 3.05203 7.22792 2.71603 7.99992Z",
    fill: _Variables.default.Colors.Primary500
  })) : /*#__PURE__*/_react.default.createElement("svg", {
    width: "16",
    height: "16",
    viewBox: "0 0 16 16",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/_react.default.createElement("path", {
    d: "M7.99999 12.6666C8.63065 12.6666 9.20665 12.5979 9.73199 12.4792L8.56065 11.3079C8.37865 11.3219 8.19399 11.3332 7.99999 11.3332C4.43265 11.3332 3.05065 8.76923 2.71599 7.9999C2.96728 7.4391 3.30668 6.92213 3.72132 6.46856L2.78932 5.53656C1.76399 6.6479 1.37532 7.76723 1.36799 7.78923C1.322 7.92614 1.322 8.07432 1.36799 8.21123C1.38199 8.25523 2.91132 12.6666 7.99999 12.6666ZM7.99999 3.33323C6.77532 3.33323 5.76932 3.59723 4.93065 3.98723L2.47132 1.52856L1.52865 2.47123L13.5287 14.4712L14.4713 13.5286L12.2587 11.3159C14.0013 10.0152 14.6233 8.23923 14.6327 8.21123C14.6786 8.07432 14.6786 7.92614 14.6327 7.78923C14.618 7.74456 13.0887 3.33323 7.99999 3.33323ZM11.3147 10.3719L9.79465 8.8519C9.92132 8.5919 9.99999 8.3059 9.99999 7.9999C9.99999 6.9059 9.09399 5.9999 7.99999 5.9999C7.69399 5.9999 7.40799 6.07856 7.14865 6.2059L5.94332 5.00056C6.605 4.77351 7.30046 4.66056 7.99999 4.66656C11.5673 4.66656 12.9493 7.23056 13.284 7.9999C13.0827 8.46123 12.5067 9.56123 11.3147 10.3719Z",
    fill: _Variables.default.Colors.Primary500
  })) : isVisible ? "Hide" : "Show"))) : props.type === "textarea" ? /*#__PURE__*/_react.default.createElement(InputStyled, _extends({
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
    id: props.id,
    maxLength: props.counter,
    type: props.password ? visible : props.type || "text"
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
    max: props.counter && props.counter,
    customiconpassed: props.customiconpassed,
    customiconnotpassed: props.customiconnotpassed
  }, props))) : /*#__PURE__*/_react.default.createElement(InputFunction, _extends({
    id: props.id
  }, props));
}

var _default = Input;
exports.default = _default;