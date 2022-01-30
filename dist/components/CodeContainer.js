"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactHighlight = _interopRequireDefault(require("react-highlight"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _Variables = _interopRequireDefault(require("./Variables"));

var _templateObject;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

// Styles
const Container = (0, _styledComponents.default)(_reactHighlight.default)(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n    padding: ", ";\n"])), _Variables.default.Margins.M);

function CodeContainer(props) {
  return /*#__PURE__*/_react.default.createElement(Container, props, props.children);
}

var _default = CodeContainer;
exports.default = _default;