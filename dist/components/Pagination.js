"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Pagination = void 0;
exports.PaginationButton = PaginationButton;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _Variables = _interopRequireDefault(require("./Variables"));

var _Icon = _interopRequireDefault(require("./Icon"));

var _templateObject, _templateObject2;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

// Styles
const Pagination = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n    display: flex;\n    align-items: center;\n    justify-content: center;\n\n    button:not(:last-child) {\n        margin-right: ", ";\n    }\n"])), _Variables.default.Margins.XS);

exports.Pagination = Pagination;

const Button = _styledComponents.default.button(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n    --size: 32px;\n    width: var(--size);\n    height: var(--size);\n    border-radius: 50%;\n    border: none;\n    font-size: ", ";\n    line-height: ", ";\n    font-family: ", ";\n    font-weight: ", ";\n    display: inline-flex;\n    align-items: center;\n    justify-content: center;\n    background: none;\n    color: ", ";\n    transition: ", ";\n\n    &:hover {\n        background-color: ", ";\n        color: ", ";\n    }\n\n    &:active {\n        background-color: ", ";\n        color: ", ";\n    }\n\n    &.active {\n        background-color: ", ";\n        color: ", ";\n\n        &:hover {\n            background-color: ", ";\n        }\n    }\n\n    &:disabled {\n        color: ", ";\n        background-color: ", ";\n    }\n"])), _Variables.default.FontSizes.Body, _Variables.default.FontSizes.Body, _Variables.default.FontFamilies.Body, _Variables.default.FontWeights.Bold, _Variables.default.Colors.Primary500, _Variables.default.Transitions.Short, _Variables.default.Colors.Primary300, _Variables.default.Colors.White, _Variables.default.Colors.Primary600, _Variables.default.Colors.White, _Variables.default.Colors.Primary500, _Variables.default.Colors.White, _Variables.default.Colors.Primary300, _Variables.default.Colors.Gray500, _Variables.default.Colors.Gray100);

function PaginationButton(props) {
  return /*#__PURE__*/_react.default.createElement(Button, props, props.icon === "previous" && /*#__PURE__*/_react.default.createElement(_Icon.default, {
    name: "chevron-left",
    size: 16,
    component: true
  }), props.number && props.number, props.icon === "next" && /*#__PURE__*/_react.default.createElement(_Icon.default, {
    name: "chevron-right",
    size: 16,
    component: true
  }));
}