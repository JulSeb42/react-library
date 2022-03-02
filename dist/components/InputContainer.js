"use strict";

require("core-js/modules/web.dom-collections.iterator.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _Variables = _interopRequireDefault(require("./Variables"));

var Font = _interopRequireWildcard(require("./Font"));

var _Grid = _interopRequireDefault(require("./Grid"));

var _templateObject, _templateObject2;

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

// Styles
const Label = _styledComponents.default.label(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n    color: ", ";\n    font-weight: ", ";\n"])), _Variables.default.Colors.Primary500, _Variables.default.FontWeights.Bold);

const Counter = (0, _styledComponents.default)(Font.Small)(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral([""])));

function InputContainer(props) {
  return /*#__PURE__*/_react.default.createElement(_Grid.default, {
    gap: _Variables.default.Margins.XXS
  }, props.label && /*#__PURE__*/_react.default.createElement(Label, null, props.label), props.helper && /*#__PURE__*/_react.default.createElement(Font.P, null, props.helper), props.children, props.helperBottom && /*#__PURE__*/_react.default.createElement(Font.Small, null, props.helperBottom), props.validationText && props.validation && props.value.length > 0 && /*#__PURE__*/_react.default.createElement(Font.Small, null, props.validationText), props.counter && /*#__PURE__*/_react.default.createElement(Counter, null, props.value.length, " / ", props.counter));
}

var _default = InputContainer;
exports.default = _default;