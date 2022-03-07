"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Variables = _interopRequireDefault(require("./Variables"));

var _templateObject;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

// Styles
const ProgressBar = _styledComponents.default.span(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n    width: 100%;\n    height: ", ";\n    background-color: ", ";\n    display: block;\n    border-radius: ", ";\n    position: relative;\n    overflow: hidden;\n\n    &:after {\n        content: \"\";\n        position: absolute;\n        top: 0;\n        left: 0;\n        width: ", ";\n        height: 100%;\n        background-color: ", ";\n        border-radius: ", ";\n        transition: ", ";\n    }\n"])), props => "".concat(props.height || 16, "px"), _Variables.default.Colors.Gray100, _Variables.default.Radiuses.Round, props => "".concat(props.value, "%"), props => props.color === "primary" ? _Variables.default.Colors.Primary500 : props.color === "secondary" ? _Variables.default.Colors.Secondary500 : props.color === "success" ? _Variables.default.Colors.Success500 : props.color === "danger" ? _Variables.default.Colors.Danger500 : props.color === "warning" ? _Variables.default.Colors.Warning500 : props.color === "white" ? _Variables.default.Colors.White : props.color || _Variables.default.Colors.Primary500, _Variables.default.Radiuses.Round, _Variables.default.Transitions.Short);

ProgressBar.propTypes = {
  value: _propTypes.default.number.isRequired
};
var _default = ProgressBar;
exports.default = _default;