"use strict";

require("core-js/modules/es.object.assign.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _reactLowlight = _interopRequireDefault(require("react-lowlight"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _javascript = _interopRequireDefault(require("highlight.js/lib/languages/javascript"));

var _vbscriptHtml = _interopRequireDefault(require("highlight.js/lib/languages/vbscript-html"));

var _css = _interopRequireDefault(require("highlight.js/lib/languages/css"));

var _scss = _interopRequireDefault(require("highlight.js/lib/languages/scss"));

var _shell = _interopRequireDefault(require("highlight.js/lib/languages/shell"));

var _Variables = _interopRequireDefault(require("./Variables"));

var _templateObject;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

// Styles
const Container = (0, _styledComponents.default)(_reactLowlight.default)(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n    padding: ", " !important;\n    overflow-x: scroll !important;\n    max-width: 100% !important;\n    white-space: pre;\n    background-color: ", ";\n\n    code {\n        background-color: ", ";\n        padding: 0 !important;\n        white-space: pre !important;\n    }\n\n    & > * {\n        white-space: pre !important;\n    }\n"])), _Variables.default.Spacers.M, _Variables.default.Colors.Gray800, _Variables.default.Colors.Gray800);

const CodeContainer = props => {
  _reactLowlight.default.registerLanguage("html", _vbscriptHtml.default);

  _reactLowlight.default.registerLanguage("css", _css.default);

  _reactLowlight.default.registerLanguage("scss", _scss.default);

  _reactLowlight.default.registerLanguage("js", _javascript.default);

  _reactLowlight.default.registerLanguage("shell", _shell.default);

  return /*#__PURE__*/_react.default.createElement(Container, _extends({
    language: props.language,
    value: props.children
  }, props));
};

CodeContainer.propTypes = {
  language: _propTypes.default.string.isRequired
};
var _default = CodeContainer;
exports.default = _default;