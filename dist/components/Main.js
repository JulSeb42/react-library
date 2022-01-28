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
const Main = _styledComponents.default.main(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n    grid-column: ", ";\n    display: grid;\n    grid-template-columns: 1fr;\n    gap: ", ";\n"])), props => props.col || 2, props => props.gap || _Variables.default.Margins.L);

var _default = Main;
exports.default = _default;