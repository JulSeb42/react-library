"use strict";

require("core-js/modules/web.dom-collections.iterator.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var Variables = _interopRequireWildcard(require("./Variables"));

var _Loader = _interopRequireDefault(require("./Loader"));

var _templateObject;

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

// Styles
const Container = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n    position: fixed;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100vh;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    background-color: ", ";\n"])), props => props.backgroundcolor === "primary" ? Variables.Colors.Primary500 : props.backgroundcolor === "secondary" ? Variables.Colors.Secondary500 : props.backgroundcolor === "success" ? Variables.Colors.Success500 : props.backgroundcolor === "danger" ? Variables.Colors.Danger500 : props.backgroundcolor === "warning" ? Variables.Colors.Warning500 : props.backgroundcolor === "white" ? Variables.Colors.White : props.backgroundcolor);

function PageLoading(props) {
  return /*#__PURE__*/_react.default.createElement(Container, {
    backgroundcolor: props.backgroundcolor || "primary"
  }, /*#__PURE__*/_react.default.createElement(_Loader.default, {
    color: props.backgroundcolor === "white" ? Variables.Colors.Primary500 : Variables.Colors.White,
    backgroundcolor: props.backgroundcolor || "primary",
    size: 48,
    border: 8
  }));
}

var _default = PageLoading;
exports.default = _default;