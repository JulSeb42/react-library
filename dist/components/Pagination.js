"use strict";

require("core-js/modules/web.dom-collections.iterator.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Pagination = void 0;
exports.PaginationButton = PaginationButton;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var Variables = _interopRequireWildcard(require("./Variables"));

var _Icon = _interopRequireDefault(require("./Icon"));

var _templateObject, _templateObject2;

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

// Styles
const Pagination = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n    display: flex;\n    align-items: center;\n    justify-content: center;\n\n    button:not(:last-child) {\n        margin-right: ", ";\n    }\n"])), Variables.Margins.XS);

exports.Pagination = Pagination;

const Button = _styledComponents.default.button(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n    --size: 32px;\n    width: var(--size);\n    height: var(--size);\n    border-radius: 50%;\n    border: none;\n    font-size: ", ";\n    line-height: ", ";\n    font-family: ", ";\n    font-weight: ", ";\n    display: inline-flex;\n    align-items: center;\n    justify-content: center;\n    background: none;\n    color: ", ";\n    transition: ", ";\n\n    &:hover {\n        background-color: ", ";\n        color: ", ";\n    }\n\n    &:active {\n        background-color: ", ";\n        color: ", ";\n    }\n\n    &.active {\n        background-color: ", ";\n        color: ", ";\n\n        &:hover {\n            background-color: ", ";\n        }\n    }\n\n    &:disabled {\n        color: ", ";\n        background-color: ", ";\n    }\n"])), Variables.FontSizes.Body, Variables.FontSizes.Body, Variables.FontFamilies.Body, Variables.FontWeights.Bold, Variables.Colors.Primary500, Variables.Transitions.Short, Variables.Colors.Primary300, Variables.Colors.White, Variables.Colors.Primary600, Variables.Colors.White, Variables.Colors.Primary500, Variables.Colors.White, Variables.Colors.Primary300, Variables.Colors.Gray500, Variables.Colors.Gray100);

function PaginationButton(props) {
  return /*#__PURE__*/_react.default.createElement(Button, props, props.icon === "previous" && /*#__PURE__*/_react.default.createElement(_Icon.default, {
    name: "chevron-left",
    size: 16
  }), props.number && props.number, props.icon === "next" && /*#__PURE__*/_react.default.createElement(_Icon.default, {
    name: "chevron-right",
    size: 16
  }));
}