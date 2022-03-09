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
const Grid = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n    display: grid;\n    grid-template-columns: repeat(", ", 1fr);\n    gap: ", ";\n\n    @media ", " {\n        grid-template-columns: repeat(\n            ", ",\n            1fr\n        );\n    }\n\n    @media ", " {\n        grid-template-columns: repeat(\n            ", ",\n            1fr\n        );\n    }\n    }\n"])), props => props.col || 1, props => props.gap || _Variables.default.Spacers.L, _Variables.default.Breakpoints.Tablet, props => props.col >= 6 ? 4 : props.col === 5 || props.col === 4 ? 3 : props.col === 3 || props.col === 2 ? 2 : 1, _Variables.default.Breakpoints.Mobile, props => props.col >= 6 ? 2 : 1);

var _default = Grid;
exports.default = _default;