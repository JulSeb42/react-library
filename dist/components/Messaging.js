"use strict";

require("core-js/modules/es.object.assign.js");

require("core-js/modules/web.dom-collections.iterator.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MessagesContainer = exports.MessageInput = exports.Message = exports.ListMessages = exports.EmptyContainer = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _reactLinkify = _interopRequireDefault(require("react-linkify"));

var _reactScrollToBottom = _interopRequireDefault(require("react-scroll-to-bottom"));

var _Variables = _interopRequireDefault(require("./Variables"));

var Font = _interopRequireWildcard(require("./Font"));

var _Icon = _interopRequireDefault(require("./Icon"));

var _Hr = _interopRequireDefault(require("./Hr"));

var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10, _templateObject11, _templateObject12, _templateObject13;

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

// Styles
const MessagesContainer = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n    width: 100%;\n    height: 65vh;\n    border: 1px solid ", ";\n    padding: ", ";\n    display: flex;\n    flex-direction: column;\n    border-radius: ", ";\n\n    hr {\n        margin: ", " 0;\n    }\n"])), _Variables.default.Colors.Gray100, _Variables.default.Spacers.M, _Variables.default.Radiuses.M, _Variables.default.Spacers.S);

exports.MessagesContainer = MessagesContainer;

const Empty = _styledComponents.default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n    flex-grow: 1;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n"])));

const ListMessages = (0, _styledComponents.default)(_reactScrollToBottom.default)(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n    flex-grow: 1;\n    display: grid;\n    margin-bottom: ", ";\n    overflow-y: scroll;\n\n    & > div {\n        display: grid;\n        grid-template-columns: 1fr;\n        gap: ", ";\n        align-content: start;\n    }\n"])), _Variables.default.Spacers.S, _Variables.default.Spacers.S);
exports.ListMessages = ListMessages;

const ContainerMessage = _styledComponents.default.div(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n    display: flex;\n    flex-direction: column;\n    align-items: ", ";\n"])), props => props.type === "sent" ? "flex-end" : "flex-start");

const DateTime = (0, _styledComponents.default)(Font.Small)(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n    color: ", ";\n    margin-top: ", ";\n"])), _Variables.default.Colors.Gray500, _Variables.default.Spacers.XXS);
const Bubble = (0, _styledComponents.default)(Font.P)(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n    width: auto;\n    display: inline;\n    max-width: 70%;\n    padding: ", " ", ";\n    border-radius: ", ";\n\n    a {\n        text-decoration: underline;\n        font-weight: ", ";\n    }\n\n    ", "\n\n    ", "\n"])), _Variables.default.Spacers.XS, _Variables.default.Spacers.S, _Variables.default.Radiuses.S, _Variables.default.FontWeights.Regular, props => props.type === "sent" && (0, _styledComponents.css)(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n            background-color: ", ";\n            color: ", ";\n\n            a {\n                color: ", ";\n\n                &:hover {\n                    color: ", ";\n                }\n            }\n        "])), _Variables.default.Colors.Primary500, _Variables.default.Colors.White, _Variables.default.Colors.White, _Variables.default.Colors.Gray100), props => props.type === "received" && (0, _styledComponents.css)(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n            background-color: ", ";\n            color: ", ";\n        "])), _Variables.default.Colors.Gray100, _Variables.default.Colors.Black));

const ContainerSend = _styledComponents.default.form(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral(["\n    height: 10%;\n    display: flex;\n    align-items: center;\n    min-height: 50px;\n"])));

const Input = _styledComponents.default.textarea(_templateObject10 || (_templateObject10 = _taggedTemplateLiteral(["\n    padding: 0;\n    border: none;\n    resize: none;\n    flex-grow: 1;\n    height: 100%;\n    font-family: ", ";\n    font-size: ", ";\n    margin-right: ", ";\n"])), _Variables.default.FontFamilies.Body, _Variables.default.FontSizes.Body, _Variables.default.Spacers.XS);

const Send = _styledComponents.default.button(_templateObject11 || (_templateObject11 = _taggedTemplateLiteral(["\n    ", "\n\n    ", "\n"])), props => props.textButton && (0, _styledComponents.css)(_templateObject12 || (_templateObject12 = _taggedTemplateLiteral(["\n            color: ", ";\n            font-weight: ", ";\n            border: none;\n            padding: 0;\n            background: none;\n            transition: ", ";\n            font-size: ", ";\n\n            &:hover {\n                color: ", ";\n            }\n\n            &:active {\n                color: ", ";\n            }\n        "])), _Variables.default.Colors.Primary500, _Variables.default.FontWeights.Bold, _Variables.default.Transitions.Short, _Variables.default.FontSizes.Body, _Variables.default.Colors.Primary300, _Variables.default.Colors.Primary600), props => !props.textButton && (0, _styledComponents.css)(_templateObject13 || (_templateObject13 = _taggedTemplateLiteral(["\n            --size: 32px;\n            width: var(--size);\n            height: var(--size);\n            display: flex;\n            align-items: center;\n            justify-content: center;\n            padding: 0;\n            border: none;\n            border-radius: 50%;\n            color: ", ";\n            background: none;\n            transition: ", ";\n\n            &:hover {\n                background-color: ", ";\n            }\n        "])), _Variables.default.Colors.Primary500, _Variables.default.Transitions.Short, _Variables.default.Colors.Gray50));

const EmptyContainer = props => {
  return /*#__PURE__*/_react.default.createElement(Empty, props, /*#__PURE__*/_react.default.createElement(Font.P, null, props.children));
};

exports.EmptyContainer = EmptyContainer;

const Message = props => {
  return /*#__PURE__*/_react.default.createElement(ContainerMessage, _extends({
    type: props.type
  }, props), /*#__PURE__*/_react.default.createElement(Bubble, {
    type: props.type
  }, /*#__PURE__*/_react.default.createElement(_reactLinkify.default, null, props.children)), (props.date || props.time) && /*#__PURE__*/_react.default.createElement(DateTime, null, props.date, props.date && props.time && " at ", props.time));
};

exports.Message = Message;

const MessageInput = props => {
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_Hr.default, null), /*#__PURE__*/_react.default.createElement(ContainerSend, {
    onSubmit: props.onSubmit
  }, /*#__PURE__*/_react.default.createElement(Input, props), /*#__PURE__*/_react.default.createElement(Send, {
    textButton: props.textButton,
    "aria-label": "Send message",
    type: "submit"
  }, props.textButton ? props.textButton : props.icon ? /*#__PURE__*/_react.default.createElement(_Icon.default, {
    name: props.icon,
    size: 16
  }) : /*#__PURE__*/_react.default.createElement("svg", {
    width: "16",
    height: "16",
    viewBox: "0 0 16 16",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/_react.default.createElement("path", {
    d: "M14.284 7.39666L2.95067 2.06333C2.83656 2.00934 2.70946 1.98889 2.58417 2.00437C2.45888 2.01985 2.34058 2.07062 2.24304 2.15076C2.1455 2.2309 2.07275 2.33711 2.03326 2.45702C1.99377 2.57692 1.98918 2.70558 2.02 2.82799L3.31267 7.99999L2.02 13.172C1.98889 13.2945 1.99328 13.4232 2.03268 13.5433C2.07208 13.6634 2.14484 13.7697 2.24247 13.8499C2.3401 13.9301 2.45854 13.9809 2.58396 13.9962C2.70938 14.0116 2.83657 13.9909 2.95067 13.9367L14.284 8.60333C14.3985 8.54949 14.4954 8.46416 14.5632 8.35732C14.631 8.25049 14.6671 8.12655 14.6671 7.99999C14.6671 7.87344 14.631 7.7495 14.5632 7.64266C14.4954 7.53582 14.3985 7.4505 14.284 7.39666V7.39666ZM3.654 12.1313L4.21334 9.89333L8 7.99999L4.21334 6.10666L3.654 3.86866L12.434 7.99999L3.654 12.1313Z",
    fill: "currentColor"
  })))));
};

exports.MessageInput = MessageInput;