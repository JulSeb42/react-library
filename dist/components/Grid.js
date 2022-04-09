"use strict";

require("core-js/modules/web.dom-collections.iterator.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _Variables = _interopRequireDefault(require("./Variables"));

var _templateObject, _templateObject2, _templateObject3;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

// Styles
const Grid = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n    display: ", ";\n    grid-template-columns: repeat(", ", 1fr);\n    gap: ", ";\n    justify-items: ", ";\n    align-items: ", ";\n\n    ", "\n\n    ", "\n\n    @media ", " {\n        grid-template-columns: repeat(\n            ", ",\n            1fr\n        );\n    }\n\n    @media ", " {\n        grid-template-columns: repeat(\n            ", ",\n            1fr\n        );\n    }\n"])), props => props.inline ? "inline-grid" : "grid", props => props.col || 1, props => props.gap || _Variables.default.Spacers.L, props => props.justify || "stretch", props => props.align || "stretch", props => props.row && (0, _styledComponents.css)(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n            grid-template-rows: ", ";\n        "])), props.row), props => props.area && (0, _styledComponents.css)(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n            grid-template-areas: ", ";\n        "])), props.area), _Variables.default.Breakpoints.Tablet, props => props.col >= 6 ? 4 : props.col === 5 || props.col === 4 ? 3 : props.col === 3 || props.col === 2 ? 2 : 1, _Variables.default.Breakpoints.Mobile, props => props.col >= 6 ? 2 : 1);

var _default = Grid;
exports.default = _default;