"use strict";

require("core-js/modules/es.object.assign.js");

require("core-js/modules/web.dom-collections.iterator.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var Variables = _interopRequireWildcard(require("./Variables"));

var _Grid = _interopRequireDefault(require("./Grid"));

var _templateObject;

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

// Styles
const Container = (0, _styledComponents.default)(_Grid.default)(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n    padding: ", ";\n    background-color: ", ";\n    border: 1px solid\n        ", ";\n    border-radius: ", ";\n"])), Variables.Margins.S, props => props.color === "primary" ? Variables.Colors.Primary50 : props.color === "secondary" ? Variables.Colors.Secondary50 : props.color === "success" ? Variables.Colors.Success50 : props.color === "danger" ? Variables.Colors.Danger50 : props.color === "warning" ? Variables.Colors.Warning50 : props.color === "white" ? Variables.Colors.White : props.color, props => props.color === "primary" ? Variables.Colors.Primary500 : props.color === "secondary" ? Variables.Colors.Secondary500 : props.color === "success" ? Variables.Colors.Success500 : props.color === "danger" ? Variables.Colors.Danger500 : props.color === "warning" ? Variables.Colors.Warning500 : props.color === "white" ? Variables.Colors.White : props.bordercolor, Variables.Radiuses.M);

function Alert(props) {
  return /*#__PURE__*/_react.default.createElement(Container, _extends({
    col: 1,
    gap: Variables.Margins.S,
    color: props.color || "success",
    bordercolor: props.bordercolor
  }, props), props.children);
}

var _default = Alert;
exports.default = _default;