"use strict";

require("core-js/modules/es.object.assign.js");

require("core-js/modules/web.dom-collections.iterator.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EmptyContainer = EmptyContainer;
exports.ListMessages = void 0;
exports.Message = Message;
exports.MessageInput = MessageInput;
exports.MessagesContainer = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _reactLinkify = _interopRequireDefault(require("react-linkify"));

var _reactScrollToBottom = _interopRequireDefault(require("react-scroll-to-bottom"));

var Variables = _interopRequireWildcard(require("./Variables"));

var Font = _interopRequireWildcard(require("./Font"));

var _Icon = _interopRequireDefault(require("./Icon"));

var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10;

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

// Styles
const MessagesContainer = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n    width: 100%;\n    height: 65vh;\n    border: 1px solid ", ";\n    padding: ", ";\n    display: flex;\n    flex-direction: column;\n    border-radius: ", ";\n\n    hr {\n        margin: ", " 0;\n    }\n"])), Variables.Colors.Gray100, Variables.Margins.M, Variables.Radiuses.M, Variables.Margins.S);

exports.MessagesContainer = MessagesContainer;

const Empty = _styledComponents.default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n    flex-grow: 1;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n"])));

const ListMessages = (0, _styledComponents.default)(_reactScrollToBottom.default)(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n    flex-grow: 1;\n    display: grid;\n    margin-bottom: ", ";\n    overflow-y: scroll;\n\n    & > div {\n        display: grid;\n        grid-template-columns: 1fr;\n        gap: ", ";\n        align-content: start;\n    }\n"])), Variables.Margins.S, Variables.Margins.S);
exports.ListMessages = ListMessages;

const ContainerMessage = _styledComponents.default.div(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n    display: flex;\n    justify-content: ", ";\n"])), props => props.type === "sent" ? "flex-end" : "flex-start");

const Bubble = (0, _styledComponents.default)(Font.P)(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n    width: auto;\n    display: inline;\n    max-width: 70%;\n    padding: ", " ", ";\n    border-radius: ", ";\n\n    a {\n        text-decoration: underline;\n        font-weight: ", ";\n    }\n\n    ", "\n\n    ", "\n"])), Variables.Margins.XS, Variables.Margins.S, Variables.Radiuses.S, Variables.FontWeights.Regular, props => props.type === "sent" && (0, _styledComponents.css)(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n            background-color: ", ";\n            color: ", ";\n\n            a {\n                color: ", ";\n\n                &:hover {\n                    color: ", ";\n                }\n            }\n        "])), Variables.Colors.Primary500, Variables.Colors.White, Variables.Colors.White, Variables.Colors.Gray100), props => props.type === "received" && (0, _styledComponents.css)(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n            background-color: ", ";\n            color: ", ";\n        "])), Variables.Colors.Gray100, Variables.Colors.Black));

const ContainerSend = _styledComponents.default.div(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n    height: 10%;\n    display: flex;\n    align-items: center;\n    min-height: 50px;\n"])));

const Input = _styledComponents.default.textarea(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral(["\n    padding: 0;\n    border: none;\n    resize: none;\n    flex-grow: 1;\n    height: 100%;\n    font-family: ", ";\n    font-size: ", ";\n    margin-right: ", ";\n"])), Variables.FontFamilies.Body, Variables.FontSizes.Body, Variables.Margins.XS);

const Send = _styledComponents.default.button(_templateObject10 || (_templateObject10 = _taggedTemplateLiteral(["\n    --size: 32px;\n    width: var(--size);\n    height: var(--size);\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    padding: 0;\n    border: none;\n    border-radius: 50%;\n    color: ", ";\n    background: none;\n    transition: ", ";\n\n    &:hover {\n        background-color: ", ";\n    }\n"])), Variables.Colors.Primary500, Variables.Transitions.Short, Variables.Colors.Gray50);

function EmptyContainer(props) {
  return /*#__PURE__*/_react.default.createElement(Empty, props, /*#__PURE__*/_react.default.createElement(Font.P, null, props.children));
}

function Message(props) {
  return /*#__PURE__*/_react.default.createElement(ContainerMessage, _extends({
    type: props.type
  }, props), /*#__PURE__*/_react.default.createElement(Bubble, {
    type: props.type
  }, /*#__PURE__*/_react.default.createElement(_reactLinkify.default, null, props.children)));
}

function MessageInput(props) {
  return /*#__PURE__*/_react.default.createElement(ContainerSend, null, /*#__PURE__*/_react.default.createElement(Input, props), /*#__PURE__*/_react.default.createElement(Send, {
    onClick: props.onClick
  }, props.textbutton ? props.textbutton : /*#__PURE__*/_react.default.createElement(_Icon.default, {
    name: "send",
    size: 16
  })));
}