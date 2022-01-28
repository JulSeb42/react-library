"use strict";

require("core-js/modules/web.dom-collections.iterator.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TabsContent = exports.TabsContainer = exports.TabsButtonsContainer = exports.TabsButton = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var Variables = _interopRequireWildcard(require("./Variables"));

var _templateObject, _templateObject2, _templateObject3, _templateObject4;

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

// Styles
const TabsContainer = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n    width: 100%;\n    position: relative;\n"])));

exports.TabsContainer = TabsContainer;

const TabsButtonsContainer = _styledComponents.default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n    display: grid;\n    grid-template-columns: repeat(", ", 1fr);\n    gap: ", ";\n    position: relative;\n    padding-bottom: ", ";\n\n    &:after {\n        content: \"\";\n        position: absolute;\n        left: 0;\n        bottom: 0;\n        width: 100%;\n        height: 1px;\n        background-color: ", ";\n        z-index: 1;\n    }\n"])), props => props.col, Variables.Margins.M, Variables.Margins.XXS, Variables.Colors.Gray100);

exports.TabsButtonsContainer = TabsButtonsContainer;

const TabsButton = _styledComponents.default.button(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n    text-align: left;\n    background: none;\n    border: none;\n    font-size: ", ";\n    padding: 0;\n    position: relative;\n\n    &:after {\n        content: \"\";\n        position: absolute;\n        left: 0;\n        bottom: -4px;\n        width: 100%;\n        height: 2px;\n        background-color: transparent;\n        z-index: 2;\n    }\n\n    &.active:after {\n        background-color: ", ";\n    }\n"])), Variables.FontSizes.Body, Variables.Colors.Primary500);

exports.TabsButton = TabsButton;

const TabsContent = _styledComponents.default.div(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n    display: none;\n    margin-top: ", ";\n\n    &.active {\n        display: block;\n    }\n"])), Variables.Margins.S);

exports.TabsContent = TabsContent;