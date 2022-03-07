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
const Hr = _styledComponents.default.hr(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n    border: none;\n    width: 100%;\n    height: 1px;\n    background-color: ", ";\n"])), _Variables.default.Colors.Gray200);

var _default = Hr;
exports.default = _default;