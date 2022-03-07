"use strict";

require("core-js/modules/es.object.assign.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _reactSvg = require("react-svg");

var _propTypes = _interopRequireDefault(require("prop-types"));

var _templateObject;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

// Styles
const IconStyled = (0, _styledComponents.default)(_reactSvg.ReactSVG)(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n    display: inline-flex;\n    width: ", ";\n    height: ", ";\n    align-items: center;\n    justify-content: center;\n\n    span {\n        display: inline-flex;\n        align-items: center;\n        justify-content: center;\n        width: 100%;\n        height: 100%;\n    }\n\n    svg {\n        fill: black;\n        width: 100%;\n        height: 100%;\n    }\n\n    path {\n        fill: ", ";\n    }\n"])), props => "".concat(props.size, "px"), props => "".concat(props.size, "px"), props => props.color);

const Icon = props => {
  return /*#__PURE__*/_react.default.createElement(IconStyled, _extends({
    src: "/icons/".concat(props.name, ".svg"),
    color: props.color || "currentColor",
    size: props.size,
    wrapper: "span"
  }, props));
};

Icon.propTypes = {
  name: _propTypes.default.string.isRequired,
  size: _propTypes.default.number.isRequired
};
var _default = Icon; // How to use
// Import in the file you want to use this component
// import Icon from "/path/to/Icon"
// Use the component
// <Icon name="name-of-icon" size={32} color="color" />

exports.default = _default;