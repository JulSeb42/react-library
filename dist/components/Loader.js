"use strict";

require("core-js/modules/es.object.assign.js");

require("core-js/modules/web.dom-collections.iterator.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _Variables = _interopRequireDefault(require("./Variables"));

var _templateObject, _templateObject2, _templateObject3;

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

// Styles
const Rotation = (0, _styledComponents.keyframes)(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n    0% {\n        transform: rotate(0deg);\n    }\n    100% {\n        transform: rotate(360deg);\n    }\n"])));

const Container = _styledComponents.default.span(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n    width: ", ";\n    height: ", ";\n    border: ", " solid\n        ", ";\n    border-bottom-color: ", ";\n    border-radius: 50%;\n    display: inline-block;\n    box-sizing: border-box;\n    animation: ", " 1s linear infinite;\n\n    ", "\n"])), props => "".concat(props.size, "px"), props => "".concat(props.size, "px"), props => "".concat(props.border, "px"), props => props.backgroundColor === "primary" ? _Variables.default.Colors.Primary500 : props.backgroundColor === "secondary" ? _Variables.default.Colors.Secondary500 : props.backgroundColor === "success" ? _Variables.default.Colors.Success500 : props.backgroundColor === "danger" ? _Variables.default.Colors.Danger500 : props.backgroundColor === "warning" ? _Variables.default.Colors.Warning500 : props.backgroundColor === "white" ? _Variables.default.Colors.White : props.backgroundColor, props => props.color === "primary" ? _Variables.default.Colors.Primary500 : props.color === "secondary" ? _Variables.default.Colors.Secondary500 : props.color === "success" ? _Variables.default.Colors.Success500 : props.color === "danger" ? _Variables.default.Colors.Danger500 : props.color === "warning" ? _Variables.default.Colors.Warning500 : props.color === "white" ? _Variables.default.Colors.White : props.color, Rotation, props => (props.marginLeft || props.marginRight) && (0, _styledComponents.css)(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n            margin-left: ", ";\n            margin-right: ", ";\n        "])), props.marginLeft, props.marginRight));

const Loader = props => {
  return /*#__PURE__*/_react.default.createElement(Container, _extends({
    border: props.border || 2,
    color: props.color || "primary",
    backgroundColor: props.backgroundColor || "white",
    size: props.size || 48
  }, props));
};

var _default = Loader;
exports.default = _default;