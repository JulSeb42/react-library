"use strict";

require("core-js/modules/es.object.assign.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Slideshow = void 0;
exports.SlideshowButton = SlideshowButton;
exports.SlideshowPaginationContainer = exports.SlideshowPaginationButton = exports.SlideshowItem = exports.SlideshowContainer = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _Variables = _interopRequireDefault(require("./Variables"));

var _Icon = _interopRequireDefault(require("./Icon"));

var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

// Styles
const SlideshowContainer = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n    position: relative;\n    display: grid;\n    grid-template-columns: 1fr;\n    gap: ", ";\n"])), _Variables.default.Margins.XS);

exports.SlideshowContainer = SlideshowContainer;

const Slideshow = _styledComponents.default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n    width: ", ";\n    height: ", ";\n    overflow: hidden;\n    position: relative;\n"])), props => props.width || "100%", props => props.height || "70vh");

exports.Slideshow = Slideshow;

const SlideshowItem = _styledComponents.default.div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n    width: 100%;\n    height: 100%;\n    position: absolute;\n    top: 0;\n    z-index: 1;\n    transition: ", ";\n\n    &.previous {\n        left: -100%;\n    }\n\n    &.active {\n        left: 0;\n    }\n\n    &.next {\n        left: 100%;\n    }\n\n    img {\n        width: 100%;\n        height: 100%;\n        object-fit: cover;\n    }\n"])), _Variables.default.Transitions.Long);

exports.SlideshowItem = SlideshowItem;

const SlideshowButtonContainer = _styledComponents.default.button(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n    --size: 48px;\n    width: var(--size);\n    height: var(--size);\n    border: none;\n    background-color: ", ";\n    position: absolute;\n    top: calc(50% - var(--size) / 2);\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    transition: ", ";\n    z-index: 2;\n    color: ", ";\n\n    &:hover {\n        background-color: ", ";\n    }\n\n    &:first-child {\n        left: 0;\n        border-radius: 0 ", " ", " 0;\n    }\n\n    &:last-child {\n        right: 0;\n        border-radius: ", " 0 0 ", ";\n    }\n"])), _Variables.default.Overlays.Plain.White50, _Variables.default.Transitions.Short, _Variables.default.Colors.Primary500, _Variables.default.Overlays.Plain.White80, _Variables.default.Margins.S, _Variables.default.Margins.S, _Variables.default.Margins.S, _Variables.default.Margins.S);

function SlideshowButton(props) {
  return /*#__PURE__*/_react.default.createElement(SlideshowButtonContainer, _extends({
    type: "button"
  }, props), props.type === "prev" && (props.customiconprev ? /*#__PURE__*/_react.default.createElement(_Icon.default, {
    name: props.customiconprev,
    size: 32
  }) : /*#__PURE__*/_react.default.createElement("svg", {
    width: "32",
    height: "32",
    viewBox: "0 0 32 32",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/_react.default.createElement("path", {
    d: "M17.724 8.39066L10.1147 16L17.724 23.6093L19.6093 21.724L13.8853 16L19.6093 10.276L17.724 8.39066Z",
    fill: "currentColor"
  }))), props.type === "next" && (props.customiconnext ? /*#__PURE__*/_react.default.createElement(_Icon.default, {
    name: props.customiconnext,
    size: 32
  }) : /*#__PURE__*/_react.default.createElement("svg", {
    width: "32",
    height: "32",
    viewBox: "0 0 32 32",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/_react.default.createElement("path", {
    d: "M14.276 23.6093L21.8853 16L14.276 8.39066L12.3907 10.276L18.1147 16L12.3907 21.724L14.276 23.6093Z",
    fill: "currentColor"
  }))));
}

const SlideshowPaginationContainer = _styledComponents.default.div(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    margin-top: ", ";\n\n    button:not(:last-child) {\n        margin-right: ", ";\n    }\n"])), _Variables.default.Margins.M, _Variables.default.Margins.XS);

exports.SlideshowPaginationContainer = SlideshowPaginationContainer;

const SlideshowPaginationButton = _styledComponents.default.button(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n    --size: ", ";\n    width: var(--size);\n    height: var(--size);\n    border-radius: 50%;\n    border: none;\n    background-color: ", ";\n    transition: all 0.2s ease;\n    display: block;\n    padding: 0;\n\n    &:hover,\n    &.active {\n        background-color: ", ";\n    }\n"])), props => "".concat(props.size || 8, "px"), _Variables.default.Colors.Primary300, _Variables.default.Colors.Primary500);

exports.SlideshowPaginationButton = SlideshowPaginationButton;