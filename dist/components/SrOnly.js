"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _templateObject;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

// Styles
const Container = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n    border: 0 !important;\n    clip: rect(1px, 1px, 1px, 1px) !important;\n    -webkit-clip-path: inset(50%) !important;\n    clip-path: inset(50%) !important;\n    height: 1px !important;\n    margin: -1px !important;\n    overflow: hidden !important;\n    padding: 0 !important;\n    position: absolute !important;\n    width: 1px !important;\n    white-space: nowrap !important;\n"])));

const SrOnly = props => {
  return /*#__PURE__*/_react.default.createElement(Container, props, props.children);
};

var _default = SrOnly;
exports.default = _default;