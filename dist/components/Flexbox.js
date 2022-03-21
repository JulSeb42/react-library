"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _templateObject;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

// Styles
const Flexbox = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n    display: flex;\n    align-items: ", ";\n    justify-content: ", ";\n    flex-direction: ", ";\n    flex-wrap: ", ";\n    gap: ", ";\n"])), props => props.align || "flex-start", props => props.justify || "flex-start", props => props.direction || "row", props => props.wrap || "nowrap", props => props.gap || 0);

var _default = Flexbox;
exports.default = _default;