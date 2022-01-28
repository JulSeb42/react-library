"use strict";

require("core-js/modules/es.object.assign.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _Variables = _interopRequireDefault(require("./Variables"));

var _templateObject;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

// Styles
const Container = _styledComponents.default.span(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n    width: 100%;\n    height: ", ";\n    background-color: ", ";\n    display: block;\n    border-radius: ", ";\n    position: relative;\n    overflow: hidden;\n\n    &:after {\n        content: \"\";\n        position: absolute;\n        top: 0;\n        left: 0;\n        width: ", ";\n        height: 100%;\n        background-color: ", ";\n        border-radius: ", ";\n        transition: ", ";\n    }\n"])), props => "".concat(props.height, "px"), _Variables.default.Colors.Gray100, _Variables.default.Radiuses.Round, props => "".concat(props.value, "%"), props => props.color === "primary" ? _Variables.default.Colors.Primary500 : props.color === "secondary" ? _Variables.default.Colors.Secondary500 : props.color === "success" ? _Variables.default.Colors.Success500 : props.color === "danger" ? _Variables.default.Colors.Danger500 : props.color === "warning" ? _Variables.default.Colors.Warning500 : props.color === "white" ? _Variables.default.Colors.White : props.color, _Variables.default.Radiuses.Round, _Variables.default.Transitions.Short);

function ProgressBar(props) {
  return /*#__PURE__*/React.createElement(Container, _extends({
    value: props.value || 50,
    height: props.height || 16,
    color: props.color || "primary"
  }, props));
}

var _default = ProgressBar;
exports.default = _default;