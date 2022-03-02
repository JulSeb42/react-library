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

const Wrapper = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n    display: grid;\n    gap: ", ";\n    padding: ", ";\n    grid-template-columns: ", ";\n\n    @media ", " {\n        grid-template-columns: ", ";\n    }\n"])), _Variables.default.Margins.L, _Variables.default.Container.Padding, props => props.template === "aside-left" ? _Variables.default.Container.TemplateAsideLeft : props.template === "aside-right" ? _Variables.default.Container.TemplateAsideRight : props.template === "both-sides" ? _Variables.default.Container.TemplateBothSides : props.template === "form" ? _Variables.default.Container.TemplateForm : _Variables.default.Container.Template1Col, _Variables.default.Breakpoints.Tablet, _Variables.default.Container.TemplateTablet);

var _default = Wrapper;
exports.default = _default;