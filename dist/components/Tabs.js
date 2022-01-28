"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TabsContent = exports.TabsContainer = exports.TabsButtonsContainer = exports.TabsButton = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _Variables = _interopRequireDefault(require("./Variables"));

var _templateObject, _templateObject2, _templateObject3, _templateObject4;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

// Styles
const TabsContainer = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n    width: 100%;\n    position: relative;\n"])));

exports.TabsContainer = TabsContainer;

const TabsButtonsContainer = _styledComponents.default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n    display: grid;\n    grid-template-columns: repeat(", ", 1fr);\n    gap: ", ";\n    position: relative;\n    padding-bottom: ", ";\n\n    &:after {\n        content: \"\";\n        position: absolute;\n        left: 0;\n        bottom: 0;\n        width: 100%;\n        height: 1px;\n        background-color: ", ";\n        z-index: 1;\n    }\n"])), props => props.col, _Variables.default.Margins.M, _Variables.default.Margins.XXS, _Variables.default.Colors.Gray100);

exports.TabsButtonsContainer = TabsButtonsContainer;

const TabsButton = _styledComponents.default.button(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n    text-align: left;\n    background: none;\n    border: none;\n    font-size: ", ";\n    padding: 0;\n    position: relative;\n\n    &:after {\n        content: \"\";\n        position: absolute;\n        left: 0;\n        bottom: -4px;\n        width: 100%;\n        height: 2px;\n        background-color: transparent;\n        z-index: 2;\n    }\n\n    &.active:after {\n        background-color: ", ";\n    }\n"])), _Variables.default.FontSizes.Body, _Variables.default.Colors.Primary500);

exports.TabsButton = TabsButton;

const TabsContent = _styledComponents.default.div(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n    display: none;\n    margin-top: ", ";\n\n    &.active {\n        display: block;\n    }\n"])), _Variables.default.Margins.S);

exports.TabsContent = TabsContent;