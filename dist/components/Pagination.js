"use strict";

require("core-js/modules/web.dom-collections.iterator.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Pagination = void 0;
exports.PaginationButton = PaginationButton;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _Variables = _interopRequireDefault(require("./Variables"));

var _Icon = _interopRequireDefault(require("./Icon"));

var _templateObject, _templateObject2, _templateObject3;

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

// Styles
const Pagination = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n    display: flex;\n    align-items: center;\n    justify-content: center;\n\n    button:not(:last-child) {\n        margin-right: ", ";\n    }\n"])), _Variables.default.Margins.XS);

exports.Pagination = Pagination;

const Button = _styledComponents.default.button(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n    --size: 32px;\n    width: var(--size);\n    height: var(--size);\n    border-radius: 50%;\n    border: none;\n    font-size: ", ";\n    line-height: ", ";\n    font-family: ", ";\n    font-weight: ", ";\n    display: inline-flex;\n    align-items: center;\n    justify-content: center;\n    background: none;\n    color: ", ";\n    transition: ", ";\n\n    &:hover {\n        background-color: ", ";\n        color: ", ";\n    }\n\n    &:active {\n        background-color: ", ";\n        color: ", ";\n    }\n\n    &.active {\n        background-color: ", ";\n        color: ", ";\n\n        &:hover {\n            background-color: ", ";\n        }\n    }\n\n    &:disabled {\n        color: ", ";\n        background-color: transparent;\n    }\n\n    ", "\n"])), _Variables.default.FontSizes.Body, _Variables.default.FontSizes.Body, _Variables.default.FontFamilies.Body, _Variables.default.FontWeights.Bold, _Variables.default.Colors.Primary500, _Variables.default.Transitions.Short, _Variables.default.Colors.Primary300, _Variables.default.Colors.White, _Variables.default.Colors.Primary600, _Variables.default.Colors.White, _Variables.default.Colors.Primary500, _Variables.default.Colors.White, _Variables.default.Colors.Primary300, _Variables.default.Colors.Gray500, props => props.icon === "more" && (0, _styledComponents.css)(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n            cursor: default;\n\n            &:hover {\n                background-color: transparent;\n                color: ", ";\n            }\n        "])), _Variables.default.Colors.Primary500));

function PaginationButton(props) {
  return /*#__PURE__*/_react.default.createElement(Button, props, props.icon === "previous" && (props.customiconprev ? /*#__PURE__*/_react.default.createElement(_Icon.default, {
    name: props.customiconprev,
    size: 16
  }) : /*#__PURE__*/_react.default.createElement("svg", {
    width: "16",
    height: "16",
    viewBox: "0 0 16 16",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/_react.default.createElement("path", {
    d: "M8.862 4.19533L5.05733 7.99999L8.862 11.8047L9.80466 10.862L6.94266 7.99999L9.80466 5.13799L8.862 4.19533Z",
    fill: "currentColor"
  }))), props.icon === "more" && (props.customiconmore ? /*#__PURE__*/_react.default.createElement(_Icon.default, {
    name: props.customiconmore,
    size: 16
  }) : /*#__PURE__*/_react.default.createElement("svg", {
    width: "16",
    height: "16",
    viewBox: "0 0 16 16",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/_react.default.createElement("path", {
    d: "M8.00002 6.66669C7.26669 6.66669 6.66669 7.26669 6.66669 8.00002C6.66669 8.73335 7.26669 9.33335 8.00002 9.33335C8.73335 9.33335 9.33335 8.73335 9.33335 8.00002C9.33335 7.26669 8.73335 6.66669 8.00002 6.66669ZM12 6.66669C11.2667 6.66669 10.6667 7.26669 10.6667 8.00002C10.6667 8.73335 11.2667 9.33335 12 9.33335C12.7334 9.33335 13.3334 8.73335 13.3334 8.00002C13.3334 7.26669 12.7334 6.66669 12 6.66669ZM4.00002 6.66669C3.26669 6.66669 2.66669 7.26669 2.66669 8.00002C2.66669 8.73335 3.26669 9.33335 4.00002 9.33335C4.73335 9.33335 5.33335 8.73335 5.33335 8.00002C5.33335 7.26669 4.73335 6.66669 4.00002 6.66669Z",
    fill: "currentColor"
  }))), props.number && props.number, props.icon === "next" && (props.customiconnext ? /*#__PURE__*/_react.default.createElement(_Icon.default, {
    name: props.customiconnext,
    size: 16
  }) : /*#__PURE__*/_react.default.createElement("svg", {
    width: "16",
    height: "16",
    viewBox: "0 0 16 16",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/_react.default.createElement("path", {
    d: "M7.138 11.8047L10.9427 7.99999L7.138 4.19533L6.19534 5.13799L9.05734 7.99999L6.19534 10.862L7.138 11.8047Z",
    fill: "currentColor"
  }))));
}