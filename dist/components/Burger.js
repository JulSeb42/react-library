"use strict";

require("core-js/modules/es.object.assign.js");

require("core-js/modules/web.dom-collections.iterator.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Variables = _interopRequireDefault(require("./Variables"));

var _templateObject, _templateObject2;

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

// Styles
const Container = _styledComponents.default.button(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n    width: ", ";\n    height: ", ";\n    position: relative;\n    background: none;\n    border: none;\n    padding: 0;\n\n    span {\n        transition: ", ";\n        width: 100%;\n        height: ", ";\n        background-color: ", ";\n        position: absolute;\n        left: 0;\n\n        &:first-child {\n            top: 0;\n        }\n\n        &:nth-child(2) {\n            top: calc(50% - ", " / 2);\n        }\n\n        &:last-child {\n            bottom: 0;\n        }\n    }\n\n    ", "\n"])), props => "".concat(props.width, "px"), props => "".concat(props.height, "px"), _Variables.default.Transitions.Short, props => "".concat(props.border, "px"), props => props.color === "primary" ? _Variables.default.Colors.Primary500 : props.color === "secondary" ? _Variables.default.Colors.Secondary500 : props.color === "success" ? _Variables.default.Colors.Success500 : props.color === "danger" ? _Variables.default.Colors.Danger500 : props.color === "warning" ? _Variables.default.Colors.Warning500 : props.color === "white" ? _Variables.default.Colors.White : props.color, props => "".concat(props.border, "px"), props => props.open && (0, _styledComponents.css)(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n            span {\n                &:first-child {\n                    transform: rotate(45deg);\n                    top: 45%;\n                }\n\n                &:nth-child(2) {\n                    width: 0;\n                }\n\n                &:last-child {\n                    transform: rotate(-45deg);\n                    bottom: 45%;\n                }\n            }\n        "]))));

const Burger = props => {
  return /*#__PURE__*/_react.default.createElement(Container, _extends({
    width: props.width || 32,
    height: props.height || 24,
    color: props.color || "primary",
    border: props.border || 2,
    "aria-label": props.ariaLabel || "Menu button"
  }, props), /*#__PURE__*/_react.default.createElement("span", null), /*#__PURE__*/_react.default.createElement("span", null), /*#__PURE__*/_react.default.createElement("span", null));
};

Burger.propTypes = {
  onClick: _propTypes.default.func.isRequired,
  open: _propTypes.default.bool.isRequired
};
var _default = Burger;
exports.default = _default;