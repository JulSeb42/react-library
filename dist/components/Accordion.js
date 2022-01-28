"use strict";

require("core-js/modules/es.object.assign.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Accordion = Accordion;
exports.AccordionItem = AccordionItem;

require("core-js/modules/web.dom-collections.iterator.js");

var _react = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var Variables = _interopRequireWildcard(require("./Variables"));

var Font = _interopRequireWildcard(require("./Font"));

var _Grid = _interopRequireDefault(require("./Grid"));

var _Icon = _interopRequireDefault(require("./Icon"));

var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

// Styles
const AccordionContainer = (0, _styledComponents.default)(_Grid.default)(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n    gap: 0;\n\n    ", "\n\n    ", "\n"])), props => props.accordionstyle === "basic" && (0, _styledComponents.css)(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n            width: 100%;\n            gap: ", ";\n\n            .content-accordion {\n                padding: 0;\n            }\n\n            .open-accordion {\n                padding: ", " 0;\n            }\n\n            .content-accordion.open {\n                padding-bottom: ", ";\n            }\n\n            & > div:not(:last-child) {\n                border-bottom: 1px solid ", ";\n            }\n        "])), Variables.Margins.XS, Variables.Margins.XS, Variables.Margins.XS, Variables.Colors.Primary500), props => props.accordionstyle === "rounded" && (0, _styledComponents.css)(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n            width: 100%;\n            border-radius: ", ";\n            border: 1px solid ", ";\n            overflow: hidden;\n\n            & > div:not(:last-child) {\n                border-bottom: 1px solid ", ";\n            }\n\n            .open-accordion,\n            .content-accordion.open {\n                padding: ", ";\n            }\n\n            .open-accordion {\n                background-color: ", ";\n                color: ", ";\n            }\n        "])), Variables.Radiuses.M, Variables.Colors.Gray200, Variables.Colors.White, Variables.Margins.S, Variables.Colors.Primary500, Variables.Colors.White));

const Item = _styledComponents.default.div(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n    display: grid;\n    grid-template-columns: 1fr;\n"])));

const Button = _styledComponents.default.button(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n    border: none;\n    background: none;\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    font-size: ", ";\n    font-weight: ", ";\n\n    .icon {\n        transition: ", ";\n    }\n\n    ", "\n\n    ", "\n"])), Variables.FontSizes.Body, Variables.FontWeights.Bold, Variables.Transitions.Short, props => props.icon === "plus" && (0, _styledComponents.css)(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n            .icon.open {\n                transform: rotate(45deg);\n            }\n        "]))), props => props.icon !== "plus" && (0, _styledComponents.css)(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n            .icon.open {\n                transform: rotate(180deg);\n            }\n        "]))));

const Content = (0, _styledComponents.default)(Font.P)(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n    max-height: 0;\n    padding: 0;\n    overflow: hidden;\n    transition: ", ";\n    padding: 0 ", ";\n\n    &.open {\n        max-height: 600px;\n    }\n"])), Variables.Transitions.Short, Variables.Margins.S);

function Accordion(props) {
  return /*#__PURE__*/_react.default.createElement(AccordionContainer, _extends({
    accordionstyle: props.accordionstyle || "basic"
  }, props), props.children);
}

function AccordionItem(props) {
  const [isOpen, setIsOpen] = (0, _react.useState)(props.isOpen || false);
  return /*#__PURE__*/_react.default.createElement(Item, props, /*#__PURE__*/_react.default.createElement(Button, {
    className: "open-accordion",
    onClick: () => setIsOpen(!isOpen),
    icon: props.icon
  }, /*#__PURE__*/_react.default.createElement("span", null, props.title), /*#__PURE__*/_react.default.createElement(_Icon.default, {
    name: props.icon === "plus" ? "plus" : "chevron-down",
    size: 16,
    className: "icon ".concat(isOpen ? "open" : "")
  })), /*#__PURE__*/_react.default.createElement(Content, {
    className: "content-accordion ".concat(isOpen ? "open" : "")
  }, props.children));
}