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
const TitleFlex = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n    width: 100%;\n    display: flex;\n    align-items: flex-start;\n    justify-content: space-between;\n\n    & > *:first-child {\n        margin-right: ", ";\n    }\n"])), _Variables.default.Spacers.XS);

var _default = TitleFlex;
exports.default = _default;