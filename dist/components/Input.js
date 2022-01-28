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
  }, props)), (props.validation || props.password) && /*#__PURE__*/_react.default.createElement(RightContainer, null, props.validation && props.value.length > 0 && /*#__PURE__*/_react.default.createElement(_Icon.default, {
    name: props.validation === "passed" ? "check-circle" : "close-circle",
    color: props.validation === "passed" ? _Variables.default.Colors.Success500 : _Variables.default.Colors.Danger500,
    size: 16,
    component: true
  }), props.password && /*#__PURE__*/_react.default.createElement(ButtonPassword, {
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