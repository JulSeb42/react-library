"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _Variables = _interopRequireDefault(require("./Variables"));

var _templateObject;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

// Styles
const Aside = _styledComponents.default.aside(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n    grid-column: ", ";\n    display: grid;\n    grid-template-columns: 1fr;\n    gap: ", ";\n    align-content: start;\n"])), props => props.col || 3, props => props.gap || _Variables.default.Margins.L);

var _default = Aside;
exports.default = _default;