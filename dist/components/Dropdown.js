"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DropdownContainer = exports.Dropdown = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _Variables = _interopRequireDefault(require("./Variables"));

var _templateObject, _templateObject2;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

// Styles
const DropdownContainer = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n    position: relative;\n"])));

exports.DropdownContainer = DropdownContainer;

const Dropdown = _styledComponents.default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n    position: absolute;\n    left: 0;\n    top: 42px;\n    list-style: none;\n    background-color: ", ";\n    box-shadow: ", ";\n    min-width: 150px;\n    padding: 0;\n    display: grid;\n    grid-template-columns: 1fr;\n    border-radius: ", ";\n    max-height: 0;\n    overflow: hidden;\n    transition: ", ";\n    z-index: 10;\n\n    & > a {\n        padding: ", ";\n        color: ", ";\n        text-decoration: none;\n        font-weight: ", ";\n        transition: ", ";\n\n        &:hover {\n            background-color: ", ";\n            color: ", ";\n        }\n    }\n\n    &.open {\n        max-height: 800px;\n    }\n"])), _Variables.default.Colors.White, _Variables.default.Shadows.S, _Variables.default.Radiuses.M, _Variables.default.Transitions.Long, _Variables.default.Margins.XS, _Variables.default.Colors.Primary500, _Variables.default.FontWeights.Bold, _Variables.default.Transitions.Short, _Variables.default.Colors.Primary500, _Variables.default.Colors.White);

exports.Dropdown = Dropdown;