"use strict";

require("core-js/modules/es.object.assign.js");

require("core-js/modules/web.dom-collections.iterator.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SlideshowPaginationContainer = exports.SlideshowPaginationButton = exports.SlideshowItem = exports.SlideshowContainer = exports.SlideshowButton = exports.Slideshow = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Variables = _interopRequireDefault(require("./Variables"));

var _Icon = _interopRequireDefault(require("./Icon"));

var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10;

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

// Styles
const SlideshowContainer = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n    position: relative;\n    display: inline-grid;\n    grid-template-columns: 1fr;\n    gap: ", ";\n    width: ", ";\n"])), _Variables.default.Spacers.XS, props => props.width || "100%");

exports.SlideshowContainer = SlideshowContainer;

const Slideshow = _styledComponents.default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n    width: ", ";\n    height: ", ";\n    overflow: hidden;\n    position: relative;\n    display: block;\n"])), props => props.width || "100%", props => props.height || "70vh");

exports.Slideshow = Slideshow;

const SlideshowItem = _styledComponents.default.div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n    width: 100%;\n    height: 100%;\n    position: absolute;\n    top: 0;\n    z-index: 1;\n    transition: ", ";\n\n    ", "\n\n    ", "\n    \n    ", "\n\n    .lazyload-wrapper,\n    img {\n        width: 100%;\n        height: 100%;\n        object-fit: cover;\n    }\n"])), _Variables.default.Transitions.Long, props => props.position === "previous" && (0, _styledComponents.css)(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n            left: -100%;\n        "]))), props => props.position === "active" && (0, _styledComponents.css)(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n            left: 0;\n        "]))), props => props.position === "next" && (0, _styledComponents.css)(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n            left: 100%;\n        "]))));

exports.SlideshowItem = SlideshowItem;

const SlideshowButtonContainer = _styledComponents.default.button(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n    --size: 48px;\n    width: var(--size);\n    height: var(--size);\n    border: none;\n    background-color: ", ";\n    position: absolute;\n    top: calc(50% - var(--size) / 2);\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    transition: ", ";\n    z-index: 2;\n    color: ", ";\n\n    &:hover {\n        background-color: ", ";\n    }\n\n    &:first-child {\n        left: 0;\n        border-radius: 0 ", " ", " 0;\n    }\n\n    &:last-child {\n        right: 0;\n        border-radius: ", " 0 0 ", ";\n    }\n"])), _Variables.default.Overlays.Plain.White50, _Variables.default.Transitions.Short, _Variables.default.Colors.Primary500, _Variables.default.Overlays.Plain.White80, _Variables.default.Spacers.S, _Variables.default.Spacers.S, _Variables.default.Spacers.S, _Variables.default.Spacers.S);

const SlideshowButton = props => {
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
};

exports.SlideshowButton = SlideshowButton;

const SlideshowPaginationContainer = _styledComponents.default.div(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    margin-top: ", ";\n\n    button:not(:last-child) {\n        margin-right: ", ";\n    }\n"])), _Variables.default.Spacers.M, _Variables.default.Spacers.XS);

exports.SlideshowPaginationContainer = SlideshowPaginationContainer;

const SlideshowPaginationButton = _styledComponents.default.button(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral(["\n    --size: ", ";\n    width: var(--size);\n    height: var(--size);\n    border-radius: 50%;\n    border: none;\n    background-color: ", ";\n    transition: all 0.2s ease;\n    display: block;\n    padding: 0;\n\n    &:hover {\n        background-color: ", ";\n    }\n\n    ", "\n"])), props => "".concat(props.size || 8, "px"), _Variables.default.Colors.Primary300, _Variables.default.Colors.Primary300, props => props.active && (0, _styledComponents.css)(_templateObject10 || (_templateObject10 = _taggedTemplateLiteral(["\n            background-color: ", ";\n        "])), _Variables.default.Colors.Primary500));

exports.SlideshowPaginationButton = SlideshowPaginationButton;
SlideshowButton.propTypes = {
  type: _propTypes.default.string.isRequired,
  onClick: _propTypes.default.func.isRequired
};
SlideshowItem.propTypes = {
  position: _propTypes.default.string.isRequired
};
SlideshowPaginationButton.propTypes = {
  active: _propTypes.default.bool.isRequired,
  onClick: _propTypes.default.func.isRequired
};