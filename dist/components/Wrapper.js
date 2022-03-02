"use strict";

require("core-js/modules/web.dom-collections.iterator.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _Variables = _interopRequireDefault(require("./Variables"));

var _templateObject, _templateObject2;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

const Wrapper = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n    display: grid;\n    grid-template-columns: ", ";\n    padding: ", ";\n\n    @media ", " {\n        grid-template-columns: ", ";\n    }\n\n    ", "\n"])), props => props.template === "1col" ? _Variables.default.Container.Template1Col : props.template === "aside-left" ? _Variables.default.Container.TemplateAsideLeft : props.template === "aside-right" ? _Variables.default.Container.TemplateAsideRight : props.template === "form" ? _Variables.default.Container.TemplateForm : props.template === "both-sides" ? _Variables.default.Container.TemplateBothSides : "" || _Variables.default.Container.Template1Col, _Variables.default.Container.Padding, _Variables.default.Breakpoints.Tablet, _Variables.default.Container.TemplateTablet, props => (props.template === "aside-left" || props.template === "aside-right" || props.template === "both-sides") && (0, _styledComponents.css)(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n            gap: ", ";\n        "])), _Variables.default.Margins.L));

var _default = Wrapper;
exports.default = _default;