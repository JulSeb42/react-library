"use strict";

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

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

// Styles
const Container = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n    position: fixed;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100vh;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    background-color: ", ";\n"])), props => props.backgroundcolor === "primary" ? _Variables.default.Colors.Primary500 : props.backgroundcolor === "secondary" ? _Variables.default.Colors.Secondary500 : props.backgroundcolor === "success" ? _Variables.default.Colors.Success500 : props.backgroundcolor === "danger" ? _Variables.default.Colors.Danger500 : props.backgroundcolor === "warning" ? _Variables.default.Colors.Warning500 : props.backgroundcolor === "white" ? _Variables.default.Colors.White : props.backgroundcolor);

function PageLoading(props) {
  return /*#__PURE__*/_react.default.createElement(Container, {
    backgroundcolor: props.backgroundcolor || "primary"
  }, /*#__PURE__*/_react.default.createElement(_Loader.default, {
    color: props.backgroundcolor === "white" ? _Variables.default.Colors.Primary500 : _Variables.default.Colors.White,
    backgroundcolor: props.backgroundcolor || "primary",
    size: 48,
    border: 8
  }));
}

var _default = PageLoading;
exports.default = _default;