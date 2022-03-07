"use strict";

require("core-js/modules/es.object.assign.js");

require("core-js/modules/web.dom-collections.iterator.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _Variables = _interopRequireDefault(require("./Variables"));

var _Grid = _interopRequireDefault(require("./Grid"));

var Font = _interopRequireWildcard(require("./Font"));

var _Icon = _interopRequireDefault(require("./Icon"));

var _templateObject, _templateObject2, _templateObject3, _templateObject4;

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

// Styles
const Container = (0, _styledComponents.default)(_Grid.default)(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n    background-color: ", ";\n    padding: ", ";\n    box-shadow: ", ";\n    border-radius: ", ";\n    max-width: 300px;\n"])), _Variables.default.Colors.White, _Variables.default.Spacers.M, _Variables.default.Shadows.S, _Variables.default.Radiuses.M);

const Close = _styledComponents.default.button(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n    --size: 32px;\n    width: var(--size);\n    height: var(--size);\n    border-radius: 50%;\n    border: none;\n    background-color: transparent;\n    color: ", ";\n    display: inline-flex;\n    align-items: center;\n    justify-content: center;\n    transition: ", ";\n\n    &:hover {\n        background-color: ", ";\n    }\n"])), _Variables.default.Colors.Primary500, _Variables.default.Transitions.Short, _Variables.default.Colors.Gray50);

const TitleContainer = _styledComponents.default.span(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n"])));

const Title = _styledComponents.default.span(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n    display: flex;\n    align-items: center;\n\n    & > span {\n        margin-right: ", ";\n    }\n"])), _Variables.default.Spacers.XXS);

const TitleFunction = props => {
  return props.icon ? /*#__PURE__*/_react.default.createElement(Title, null, /*#__PURE__*/_react.default.createElement(_Icon.default, {
    name: props.icon,
    size: 16,
    color: props.iconColor
  }), /*#__PURE__*/_react.default.createElement(Font.H5, null, props.title)) : /*#__PURE__*/_react.default.createElement(Font.H5, null, props.title);
};

const Toast = props => {
  return /*#__PURE__*/_react.default.createElement(Container, _extends({
    gap: _Variables.default.Spacers.XS
  }, props), props.close ? /*#__PURE__*/_react.default.createElement(TitleContainer, null, /*#__PURE__*/_react.default.createElement(TitleFunction, {
    title: props.title,
    icon: props.icon,
    iconColor: props.iconColor
  }), /*#__PURE__*/_react.default.createElement(Close, {
    onClick: props.close
  }, props.customiconclose ? /*#__PURE__*/_react.default.createElement(_Icon.default, {
    name: props.customIconClose,
    size: 24
  }) : /*#__PURE__*/_react.default.createElement("svg", {
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/_react.default.createElement("path", {
    d: "M16.192 6.34399L11.949 10.586L7.707 6.34399L6.293 7.75799L10.535 12L6.293 16.242L7.707 17.656L11.949 13.414L16.192 17.656L17.606 16.242L13.364 12L17.606 7.75799L16.192 6.34399Z",
    fill: "currentColor"
  })))) : /*#__PURE__*/_react.default.createElement(TitleFunction, {
    title: props.title,
    icon: props.icon,
    iconColor: props.iconColor
  }), props.children && /*#__PURE__*/_react.default.createElement(Font.P, null, props.children));
};

var _default = Toast;
exports.default = _default;