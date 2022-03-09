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
const ButtonsContainer = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n    display: flex;\n    align-items: center;\n\n    & > *:not(:last-child) {\n        margin-right: ", ";\n    }\n"])), props => props.gap || _Variables.default.Spacers.S);

var _default = ButtonsContainer;
exports.default = _default;