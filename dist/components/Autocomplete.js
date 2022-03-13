"use strict";

require("core-js/modules/es.object.assign.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("core-js/modules/web.dom-collections.iterator.js");

var _react = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Variables = _interopRequireDefault(require("./Variables"));

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
const Label = _styledComponents.default.label(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n    color: ", ";\n    font-weight: ", ";\n"])), _Variables.default.Colors.Primary500, _Variables.default.FontWeights.Bold);

const Helper = (0, _styledComponents.default)(Font.P)(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n    position: relative;\n    z-index: 0;\n"])));

const InputContainer = _styledComponents.default.div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n    position: relative;\n    z-index: 10;\n"])));

const IconContainer = _styledComponents.default.span(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n    position: absolute;\n    top: 0;\n    left: 0;\n    z-index: 2;\n    display: inline-flex;\n    align-items: center;\n    justify-content: center;\n    height: 100%;\n    width: 32px;\n    color: ", ";\n\n    &:after {\n        content: \"\";\n        position: absolute;\n        top: 1px;\n        right: 0;\n        height: calc(100% - 2px);\n        width: 1px;\n        background-color: ", ";\n    }\n"])), props => props.disabled ? _Variables.default.Colors.Gray800 : _Variables.default.Colors.Primary500, _Variables.default.Colors.Gray200);

const Input = _styledComponents.default.input(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n    position: relative;\n    z-index: 1;\n    border: 1px solid ", ";\n    border-radius: ", ";\n    outline: none;\n    padding: ", " ", ";\n    font-family: ", ";\n    font-size: ", ";\n    height: 35px;\n    width: 100%;\n\n    &:focus {\n        border-color: ", ";\n    }\n\n    &:disabled {\n        cursor: not-allowed;\n        color: ", ";\n        border-color: ", ";\n        background-color: ", ";\n    }\n\n    ", "\n"])), _Variables.default.Colors.Gray200, _Variables.default.Radiuses.S, _Variables.default.Spacers.XS, _Variables.default.Spacers.XS, _Variables.default.FontFamilies.Body, _Variables.default.FontSizes.Body, _Variables.default.Colors.Primary500, _Variables.default.Colors.Gray800, _Variables.default.Colors.Gray200, _Variables.default.Colors.Gray50, props => props.icon && (0, _styledComponents.css)(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n            padding-left: calc(", " + 32px);\n        "])), _Variables.default.Spacers.XS));

const List = _styledComponents.default.ul(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n    padding: 0;\n    margin: 0;\n    list-style: none;\n    position: absolute;\n    z-index: 0;\n    background-color: ", ";\n    width: 100%;\n    top: 0;\n    border-radius: ", ";\n    border: 1px solid ", ";\n    max-height: 0;\n    transition: ", ";\n    overflow: hidden;\n    padding-top: 0;\n    opacity: 0;\n    overflow-y: scroll;\n\n    ", "\n\n    li {\n        padding: ", ";\n        transition: ", ";\n        &:hover {\n            background-color: ", ";\n            color: ", ";\n            cursor: pointer;\n        }\n    }\n"])), _Variables.default.Colors.White, _Variables.default.Radiuses.S, _Variables.default.Colors.Primary500, _Variables.default.Transitions.Long, props => props.open && (0, _styledComponents.css)(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n            padding-top: 28px;\n            max-height: 200px;\n            opacity: 1;\n        "]))), _Variables.default.Spacers.XS, _Variables.default.Transitions.Short, _Variables.default.Colors.Primary500, _Variables.default.Colors.White);

const Autocomplete = props => {
  const [isOpen, setIsOpen] = (0, _react.useState)(false);

  const handleOpen = () => setIsOpen(true);

  const handleClose = () => setTimeout(setIsOpen(false), 500);

  return props.helper || props.helperBottom || props.label ? /*#__PURE__*/_react.default.createElement(_Grid.default, {
    gap: _Variables.default.Spacers.XXS
  }, props.label && /*#__PURE__*/_react.default.createElement(Label, {
    htmlFor: props.id
  }, props.label), props.helper && /*#__PURE__*/_react.default.createElement(Helper, null, props.helper), /*#__PURE__*/_react.default.createElement(InputContainer, null, props.icon && /*#__PURE__*/_react.default.createElement(IconContainer, {
    disabled: props.disabled
  }, /*#__PURE__*/_react.default.createElement(_Icon.default, {
    name: props.icon,
    size: 16
  })), /*#__PURE__*/_react.default.createElement(Input, _extends({
    id: props.id,
    onFocus: handleOpen,
    onBlur: handleClose
  }, props)), /*#__PURE__*/_react.default.createElement(List, {
    open: isOpen
  }, props.items.slice(0, 20).map((item, i) => /*#__PURE__*/_react.default.createElement("li", {
    onMouseDown: props.onMouseDown,
    key: i
  }, item)))), props.helperBottom && /*#__PURE__*/_react.default.createElement(Helper, {
    as: Font.Small
  }, props.helperBottom)) : /*#__PURE__*/_react.default.createElement(InputContainer, null, /*#__PURE__*/_react.default.createElement(Input, _extends({
    id: props.id,
    onFocus: handleOpen,
    onBlur: handleClose
  }, props)), /*#__PURE__*/_react.default.createElement(List, {
    open: isOpen
  }, props.items.slice(0, 20).map((item, i) => /*#__PURE__*/_react.default.createElement("li", {
    onMouseDown: props.onMouseDown,
    key: i
  }, item))));
};

Autocomplete.propTypes = {
  items: _propTypes.default.array.isRequired,
  onMouseDown: _propTypes.default.func.isRequired,
  onChange: _propTypes.default.func.isRequired,
  value: _propTypes.default.string.isRequired
};
var _default = Autocomplete;
exports.default = _default;