"use strict";

require("core-js/modules/es.object.assign.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _Variables = _interopRequireDefault(require("./Variables"));

var _InputContainer = _interopRequireDefault(require("./InputContainer"));

var _Image = _interopRequireDefault(require("./Image"));

var _Icon = _interopRequireDefault(require("./Icon"));

var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

// Styles
const Container = _styledComponents.default.label(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n    position: relative;\n    --size: 80px;\n    width: var(--size);\n    height: var(--size);\n    display: inline-flex;\n    align-items: center;\n    justify-content: center;\n    border-radius: ", ";\n    overflow: hidden;\n    cursor: pointer;\n\n    &:hover .hover {\n        opacity: 1;\n    }\n"])), _Variables.default.Radiuses.M);

const Input = _styledComponents.default.input(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n    display: none;\n"])));

const Img = (0, _styledComponents.default)(_Image.default)(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n    width: 100%;\n    height: 100%;\n    position: relative;\n    z-index: 1;\n    object-fit: cover;\n"])));

const EmptyContainer = _styledComponents.default.div(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n    width: 100%;\n    height: 100%;\n    position: relative;\n    z-index: 1;\n    background-color: ", ";\n    display: inline-flex;\n    align-items: center;\n    justify-content: center;\n"])), _Variables.default.Colors.Gray200);

const HoverContainer = _styledComponents.default.span(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n    position: absolute;\n    z-index: 2;\n    background-color: ", ";\n    color: ", ";\n    opacity: 0;\n    width: 100%;\n    height: 100%;\n    transition: ", ";\n    display: inline-flex;\n    align-items: center;\n    justify-content: center;\n"])), _Variables.default.Overlays.Plain.White50, _Variables.default.Colors.Primary500, _Variables.default.Transitions.Short);

function Empty() {
  return /*#__PURE__*/_react.default.createElement(EmptyContainer, null, /*#__PURE__*/_react.default.createElement(_Icon.default, {
    name: "user",
    size: 64,
    component: true
  }));
}

function Hover() {
  return /*#__PURE__*/_react.default.createElement(HoverContainer, {
    className: "hover"
  }, /*#__PURE__*/_react.default.createElement(_Icon.default, {
    name: "edit",
    size: 32,
    component: true
  }));
}

function InputImage(props) {
  return props.label || props.helper || props.validation ? /*#__PURE__*/_react.default.createElement(_InputContainer.default, {
    label: props.label,
    helper: props.helper,
    validation: props.validation,
    id: props.id
  }, /*#__PURE__*/_react.default.createElement(Container, null, /*#__PURE__*/_react.default.createElement(Input, _extends({
    type: "file",
    id: props.id
  }, props)), props.src === "" ? /*#__PURE__*/_react.default.createElement(Empty, null) : /*#__PURE__*/_react.default.createElement(Img, {
    src: props.src,
    alt: props.alt
  }), /*#__PURE__*/_react.default.createElement(Hover, null))) : /*#__PURE__*/_react.default.createElement(Container, null, /*#__PURE__*/_react.default.createElement(Input, _extends({
    type: "file",
    id: props.id
  }, props)), props.src === "" ? /*#__PURE__*/_react.default.createElement(Empty, null) : /*#__PURE__*/_react.default.createElement(Img, {
    src: props.src,
    alt: props.alt
  }), /*#__PURE__*/_react.default.createElement(Hover, null));
}

var _default = InputImage;
exports.default = _default;