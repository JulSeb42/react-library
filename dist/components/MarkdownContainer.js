"use strict";

require("core-js/modules/es.object.assign.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _markdownToJsx = _interopRequireDefault(require("markdown-to-jsx"));

var _Variables = _interopRequireDefault(require("./Variables"));

var _templateObject;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

// Styles
const Container = (0, _styledComponents.default)(_markdownToJsx.default)(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n    display: grid;\n    grid-template-columns: 1fr;\n    gap: ", ";\n"])), _Variables.default.Spacers.XS);

const MarkdownContainer = props => {
  return /*#__PURE__*/_react.default.createElement(Container, _extends({
    options: props.options
  }, props), props.children);
};

var _default = MarkdownContainer;
exports.default = _default;