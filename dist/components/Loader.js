"use strict";

require("core-js/modules/web.dom-collections.iterator.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var Variables = _interopRequireWildcard(require("./Variables"));

var _templateObject, _templateObject2;

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

// Styles
const Rotation = (0, _styledComponents.keyframes)(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n    0% {\n        transform: rotate(0deg);\n    }\n    100% {\n        transform: rotate(360deg);\n    }\n"])));

const Container = _styledComponents.default.span(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n    width: ", ";\n    height: ", ";\n    border: ", " solid\n        ", ";\n    border-bottom-color: ", ";\n    border-radius: 50%;\n    display: inline-block;\n    box-sizing: border-box;\n    animation: ", " 1s linear infinite;\n    margin-right: ", ";\n"])), props => "".concat(props.size, "px"), props => "".concat(props.size, "px"), props => "".concat(props.border, "px"), props => props.backgroundcolor === "primary" ? Variables.Colors.Primary500 : props.backgroundcolor === "secondary" ? Variables.Colors.Secondary500 : props.backgroundcolor === "success" ? Variables.Colors.Success500 : props.backgroundcolor === "danger" ? Variables.Colors.Danger500 : props.backgroundcolor === "warning" ? Variables.Colors.Warning500 : props.backgroundcolor === "white" ? Variables.Colors.White : props.backgroundcolor, props => props.color === "primary" ? Variables.Colors.Primary500 : props.color === "secondary" ? Variables.Colors.Secondary500 : props.color === "success" ? Variables.Colors.Success500 : props.color === "danger" ? Variables.Colors.Danger500 : props.color === "warning" ? Variables.Colors.Warning500 : props.color === "white" ? Variables.Colors.White : props.color, Rotation, Variables.Margins.XS);

function Loader(props) {
  return /*#__PURE__*/_react.default.createElement(Container, {
    border: props.border || 2,
    color: props.color || "primary",
    backgroundcolor: props.backgroundcolor || "white",
    size: props.size || 48
  });
}

var _default = Loader;
exports.default = _default;