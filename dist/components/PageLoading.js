"use strict";

require("core-js/modules/es.object.assign.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _Variables = _interopRequireDefault(require("./Variables"));

var _Loader = _interopRequireDefault(require("./Loader"));

var _templateObject;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

// Styles
const Container = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n    position: fixed;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100vh;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    background-color: ", ";\n    z-index: 999;\n"])), props => props.backgroundColor === "primary" ? _Variables.default.Colors.Primary500 : props.backgroundColor === "secondary" ? _Variables.default.Colors.Secondary500 : props.backgroundColor === "success" ? _Variables.default.Colors.Success500 : props.backgroundColor === "danger" ? _Variables.default.Colors.Danger500 : props.backgroundColor === "warning" ? _Variables.default.Colors.Warning500 : props.backgroundColor === "white" ? _Variables.default.Colors.White : props.backgroundColor);

const PageLoading = props => {
  return /*#__PURE__*/_react.default.createElement(Container, _extends({
    backgroundColor: props.backgroundColor || "primary"
  }, props), /*#__PURE__*/_react.default.createElement(_Loader.default, {
    color: props.backgroundColor === "white" ? _Variables.default.Colors.Primary500 : _Variables.default.Colors.White,
    backgroundColor: props.backgroundColor || "primary",
    size: 48,
    border: 8
  }));
};

var _default = PageLoading;
exports.default = _default;