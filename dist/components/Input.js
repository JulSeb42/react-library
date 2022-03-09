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
const Container = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n    position: relative;\n    width: 100%;\n"])));

const InputStyled = _styledComponents.default.input(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n    position: relative;\n    z-index: 1;\n    border: 1px solid ", ";\n    border-radius: ", ";\n    outline: none;\n    padding: ", " ", ";\n    font-family: ", ";\n    font-size: ", ";\n    height: 35px;\n    width: 100%;\n\n    &:focus {\n        border-color: ", ";\n    }\n\n    &:disabled {\n        cursor: not-allowed;\n        color: ", ";\n        border-color: ", ";\n        background-color: ", ";\n    }\n\n    ", "\n\n    ", "\n\n    ", "\n    \n    ", "\n"])), _Variables.default.Colors.Gray200, _Variables.default.Radiuses.S, _Variables.default.Spacers.XS, _Variables.default.Spacers.XS, _Variables.default.FontFamilies.Body, _Variables.default.FontSizes.Body, _Variables.default.Colors.Primary500, _Variables.default.Colors.Gray800, _Variables.default.Colors.Gray200, _Variables.default.Colors.Gray50, props => props.type === "textarea" && (0, _styledComponents.css)(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n            min-height: calc(\n                ", " * ", " * 3 +\n                    ", " * 2\n            );\n            resize: vertical;\n        "])), _Variables.default.FontSizes.Body, _Variables.default.LineHeight, _Variables.default.Spacers.XXS), props => props.type === "select" && (0, _styledComponents.css)(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n            appearance: none;\n            cursor: pointer;\n\n            &::-ms-expand {\n                display: none;\n            }\n        "]))), props => props.icon && (0, _styledComponents.css)(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n            padding-left: calc(", " + 32px);\n        "])), _Variables.default.Spacers.XS), props => props.validation && props.validation !== "passed" && props.value.length > 0 && (0, _styledComponents.css)(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n            background-color: ", ";\n\n            &:focus {\n                border-color: ", ";\n            }\n        "])), _Variables.default.Colors.Danger50, _Variables.default.Colors.Danger500));

const IconContainer = _styledComponents.default.span(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n    position: absolute;\n    top: 0;\n    left: 0;\n    z-index: 2;\n    display: inline-flex;\n    align-items: center;\n    justify-content: center;\n    height: 100%;\n    width: 32px;\n    color: ", ";\n\n    &:after {\n        content: \"\";\n        position: absolute;\n        top: 1px;\n        right: 0;\n        height: calc(100% - 2px);\n        width: 1px;\n        background-color: ", ";\n    }\n"])), props => props.disabled ? _Variables.default.Colors.Gray800 : _Variables.default.Colors.Primary500, _Variables.default.Colors.Gray200);

const RightContainer = _styledComponents.default.span(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n    position: absolute;\n    top: 0;\n    right: ", ";\n    height: 100%;\n    z-index: 1;\n    display: inline-flex;\n    align-items: center;\n\n    & > *:not(:last-child) {\n        margin-right: ", ";\n    }\n"])), _Variables.default.Spacers.XS, _Variables.default.Spacers.XXS);

const ButtonPassword = _styledComponents.default.button(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral(["\n    border: none;\n    padding: 0;\n    background: none;\n    color: ", ";\n    font-size: ", ";\n    font-weight: ", ";\n    transition: ", ";\n    display: flex;\n    align-items: center;\n    justify-content: center;\n\n    &:hover {\n        color: ", ";\n    }\n\n    &:active {\n        color: ", ";\n    }\n"])), _Variables.default.Colors.Primary500, _Variables.default.FontSizes.Body, _Variables.default.FontWeights.Bold, _Variables.default.Transitions.Short, _Variables.default.Colors.Primary300, _Variables.default.Colors.Primary600);

const SelectContainer = _styledComponents.default.div(_templateObject10 || (_templateObject10 = _taggedTemplateLiteral(["\n    position: relative;\n\n    &:after {\n        content: url(\"data:image/svg+xml,%3Csvg width='16' height='16' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M10.862 6.19533L8.00001 9.05733L5.13801 6.19533L4.19534 7.13799L8.00001 10.9427L11.8047 7.13799L10.862 6.19533Z' fill='%231B4568'/%3E%3C/svg%3E\");\n        color: ", ";\n        position: absolute;\n        z-index: 2;\n        top: calc(50% - 18px / 2);\n        right: ", ";\n\n        ", "\n    }\n"])), _Variables.default.Colors.Primary500, _Variables.default.Spacers.XS, props => props.disabled && (0, _styledComponents.css)(_templateObject11 || (_templateObject11 = _taggedTemplateLiteral(["\n                content: url(\"data:image/svg+xml,%3Csvg width='16' height='16' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M10.862 6.19533L8.00001 9.05733L5.13801 6.19533L4.19534 7.13799L8.00001 10.9427L11.8047 7.13799L10.862 6.19533Z' fill='%232F2F2F'/%3E%3C/svg%3E\");\n            "]))));

const InputFunction = props => {
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
  }, props)), (props.validation || props.password) && /*#__PURE__*/_react.default.createElement(RightContainer, null, props.validation && props.value.length > 0 && (props.validation === "passed" ? props.customIconPassed ? /*#__PURE__*/_react.default.createElement(_Icon.default, {
    name: props.customIconPassed,
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
  })) : props.customIconNotPassed ? /*#__PURE__*/_react.default.createElement(_Icon.default, {
    name: props.customIconNotPassed,
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
  }, props.iconPassword ? isVisible ? /*#__PURE__*/_react.default.createElement("svg", {
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/_react.default.createElement("path", {
    d: "M12 10C12 11.095 12.905 12 14 12C14.354 12 14.683 11.897 14.973 11.732C14.9758 11.7675 14.9805 11.8023 14.9853 11.8372C14.9927 11.8907 15 11.9443 15 12C15 13.642 13.641 15 12 15C10.358 15 9 13.642 9 12C9.00524 11.206 9.323 10.4459 9.88447 9.88447C10.4459 9.323 11.206 9.00524 12 9C12.0557 9 12.1093 9.00734 12.1628 9.01468C12.1977 9.01946 12.2325 9.02424 12.268 9.027C12.103 9.317 12 9.646 12 10Z",
    fill: "currentColor"
  }), /*#__PURE__*/_react.default.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M2.05204 11.684C2.07305 11.617 4.36704 5 12 5C19.633 5 21.927 11.617 21.949 11.684L22.054 12L21.948 12.316C21.927 12.383 19.633 19 12 19C4.36704 19 2.07305 12.383 2.05104 12.316L1.94604 12L2.05204 11.684ZM4.07404 12C4.57604 13.154 6.64904 17 12 17C17.348 17 19.422 13.158 19.926 12C19.424 10.846 17.351 7 12 7C6.65204 7 4.57804 10.842 4.07404 12Z",
    fill: "currentColor"
  })) : /*#__PURE__*/_react.default.createElement("svg", {
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/_react.default.createElement("path", {
    d: "M12 19C12.946 19 13.81 18.897 14.598 18.719L12.841 16.962C12.568 16.983 12.291 17 12 17C6.64898 17 4.57598 13.154 4.07398 12C4.45093 11.1588 4.96003 10.3833 5.58198 9.70297L4.18398 8.30497C2.64598 9.97197 2.06298 11.651 2.05198 11.684C1.983 11.8893 1.983 12.1116 2.05198 12.317C2.07298 12.383 4.36698 19 12 19ZM12 4.99997C10.163 4.99997 8.65398 5.39597 7.39598 5.98097L3.70698 2.29297L2.29298 3.70697L20.293 21.707L21.707 20.293L18.388 16.974C21.002 15.023 21.935 12.359 21.949 12.317C22.018 12.1116 22.018 11.8893 21.949 11.684C21.927 11.617 19.633 4.99997 12 4.99997ZM16.972 15.558L14.692 13.278C14.882 12.888 15 12.459 15 12C15 10.359 13.641 8.99997 12 8.99997C11.541 8.99997 11.112 9.11797 10.723 9.30897L8.91498 7.50097C9.9075 7.16038 10.9507 6.99097 12 6.99997C17.351 6.99997 19.424 10.846 19.926 12C19.624 12.692 18.76 14.342 16.972 15.558Z",
    fill: "currentColor"
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
};

const Input = props => {
  return props.label || props.helper || props.validation || props.counter || props.helperBottom ? /*#__PURE__*/_react.default.createElement(_InputContainer.default, {
    label: props.label,
    helper: props.helper,
    validation: props.validation,
    validationText: props.validationText,
    id: props.id,
    value: props.value,
    counter: props.counter,
    maxLength: props.maxLength,
    helperBottom: props.helperBottom
  }, /*#__PURE__*/_react.default.createElement(InputFunction, _extends({
    validation: props.validation,
    id: props.id,
    maxLength: props.maxLength,
    customIconPassed: props.customIconPassed,
    customIconNotPassed: props.customIconNotPassed
  }, props))) : /*#__PURE__*/_react.default.createElement(InputFunction, _extends({
    id: props.id
  }, props));
};

var _default = Input;
exports.default = _default;