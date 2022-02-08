"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _styledComponents = require("styled-components");

var _Variables = _interopRequireDefault(require("./Variables"));

var _templateObject;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

// Styles
const GlobalStyles = (0, _styledComponents.createGlobalStyle)(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n    html,\n    body {\n        background-color: ", ";\n        color: ", ";\n        font-family: ", ";\n        font-weight: ", ";\n        line-height: ", ";\n    }\n\n    .stop-scrolling {\n        height: 100vh;\n        overflow: hidden;\n    }\n"])), _Variables.default.Colors.White, _Variables.default.Colors.Black, _Variables.default.FontFamilies.Body, _Variables.default.FontWeights.Regular, _Variables.default.LineHeight);
var _default = GlobalStyles;
exports.default = _default;