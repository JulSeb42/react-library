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

var _InputContainer = _interopRequireDefault(require("./InputContainer"));

var _Image = _interopRequireDefault(require("./Image"));

var _Icon = _interopRequireDefault(require("./Icon"));

var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5;

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

// Styles
const Container = _styledComponents.default.label(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n    position: relative;\n    --size: 80px;\n    width: var(--size);\n    height: var(--size);\n    display: inline-flex;\n    align-items: center;\n    justify-content: center;\n    border-radius: ", ";\n    overflow: hidden;\n    cursor: pointer;\n\n    &:hover .hover {\n        opacity: 1;\n    }\n"])), Variables.Radiuses.M);

const Input = _styledComponents.default.input(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n    display: none;\n"])));

const Img = (0, _styledComponents.default)(_Image.default)(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n    width: 100%;\n    height: 100%;\n    position: relative;\n    z-index: 1;\n    object-fit: cover;\n"])));

const EmptyContainer = _styledComponents.default.div(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n    width: 100%;\n    height: 100%;\n    position: relative;\n    z-index: 1;\n    background-color: ", ";\n    display: inline-flex;\n    align-items: center;\n    justify-content: center;\n"])), Variables.Colors.Gray200);

const HoverContainer = _styledComponents.default.span(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n    position: absolute;\n    z-index: 2;\n    background-color: ", ";\n    color: ", ";\n    opacity: 0;\n    width: 100%;\n    height: 100%;\n    transition: ", ";\n    display: inline-flex;\n    align-items: center;\n    justify-content: center;\n"])), Variables.Overlays.Plain.White50, Variables.Colors.Primary500, Variables.Transitions.Short);

function Empty() {
  return /*#__PURE__*/_react.default.createElement(EmptyContainer, null, /*#__PURE__*/_react.default.createElement(_Icon.default, {
    name: "user",
    size: 64
  }));
}

function Hover() {
  return /*#__PURE__*/_react.default.createElement(HoverContainer, {
    className: "hover"
  }, /*#__PURE__*/_react.default.createElement(_Icon.default, {
    name: "edit",
    size: 32
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