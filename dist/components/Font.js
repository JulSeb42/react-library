"use strict";

require("core-js/modules/web.dom-collections.iterator.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Strong = exports.Small = exports.P = exports.List = exports.H6 = exports.H5 = exports.H4 = exports.H3 = exports.H2 = exports.H1 = exports.Em = void 0;

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var Variables = _interopRequireWildcard(require("./Variables"));

var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10, _templateObject11, _templateObject12, _templateObject13, _templateObject14, _templateObject15, _templateObject16, _templateObject17;

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

// Styles
// Styles
const H1 = _styledComponents.default.h1(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n    font-size: ", ";\n    font-weight: ", ";\n\n    a {\n        color: ", ";\n        text-decoration: none;\n        transition: ", ";\n\n        &:hover {\n            color: ", ";\n        }\n\n        &.active {\n            color: ", ";\n        }\n    }\n\n    ", "\n"])), Variables.FontSizes.Titles.ExtraLarge, Variables.FontWeights.Black, Variables.Colors.Primary500, Variables.Transitions.Short, Variables.Colors.Primary700, Variables.Colors.Primary600, props => props.display && (0, _styledComponents.css)(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n            font-size: ", ";\n        "])), Variables.FontSizes.Display.H1));

exports.H1 = H1;

const H2 = _styledComponents.default.h2(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n    font-size: ", ";\n    font-weight: ", ";\n\n    a {\n        color: ", ";\n        text-decoration: none;\n        transition: ", ";\n\n        &:hover {\n            color: ", ";\n        }\n\n        &.active {\n            color: ", ";\n        }\n    }\n\n    ", "\n"])), Variables.FontSizes.Titles.Large, Variables.FontWeights.Black, Variables.Colors.Primary500, Variables.Transitions.Short, Variables.Colors.Primary700, Variables.Colors.Primary600, props => props.display && (0, _styledComponents.css)(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n            font-size: ", ";\n        "])), Variables.FontSizes.Display.H2));

exports.H2 = H2;

const H3 = _styledComponents.default.h3(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n    font-size: ", ";\n    font-weight: ", ";\n\n    a {\n        color: ", ";\n        text-decoration: none;\n        transition: ", ";\n\n        &:hover {\n            color: ", ";\n        }\n\n        &.active {\n            color: ", ";\n        }\n    }\n\n    ", "\n"])), Variables.FontSizes.Titles.Large, Variables.FontWeights.Bold, Variables.Colors.Primary500, Variables.Transitions.Short, Variables.Colors.Primary700, Variables.Colors.Primary600, props => props.display && (0, _styledComponents.css)(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n            font-weight: ", ";\n            font-size: ", ";\n        "])), Variables.FontWeights.Black, Variables.FontSizes.Display.H3));

exports.H3 = H3;

const H4 = _styledComponents.default.h4(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n    font-size: ", ";\n    font-weight: ", ";\n\n    a {\n        color: ", ";\n        text-decoration: none;\n        transition: ", ";\n\n        &:hover {\n            color: ", ";\n        }\n\n        &.active {\n            color: ", ";\n        }\n    }\n\n    ", "\n"])), Variables.FontSizes.Titles.Medium, Variables.FontWeights.Black, Variables.Colors.Primary500, Variables.Transitions.Short, Variables.Colors.Primary700, Variables.Colors.Primary600, props => props.display && (0, _styledComponents.css)(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n            font-size: ", ";\n        "])), Variables.FontSizes.Display.H4));

exports.H4 = H4;

const H5 = _styledComponents.default.h5(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral(["\n    font-size: ", ";\n    font-weight: ", ";\n\n    a {\n        color: ", ";\n        text-decoration: none;\n        transition: ", ";\n\n        &:hover {\n            color: ", ";\n        }\n\n        &.active {\n            color: ", ";\n        }\n    }\n\n    ", "\n"])), Variables.FontSizes.Titles.Medium, Variables.FontWeights.Bold, Variables.Colors.Primary500, Variables.Transitions.Short, Variables.Colors.Primary700, Variables.Colors.Primary600, props => props.display && (0, _styledComponents.css)(_templateObject10 || (_templateObject10 = _taggedTemplateLiteral(["\n            font-weight: ", ";\n            font-size: ", ";\n        "])), Variables.FontWeights.Black, Variables.FontSizes.Display.H5));

exports.H5 = H5;

const H6 = _styledComponents.default.h6(_templateObject11 || (_templateObject11 = _taggedTemplateLiteral(["\n    font-size: ", ";\n    font-weight: ", ";\n\n    a {\n        color: ", ";\n        text-decoration: none;\n        transition: ", ";\n\n        &:hover {\n            color: ", ";\n        }\n\n        &.active {\n            color: ", ";\n        }\n    }\n"])), Variables.FontSizes.Titles.Small, Variables.FontWeights.Black, Variables.Colors.Primary500, Variables.Transitions.Short, Variables.Colors.Primary700, Variables.Colors.Primary600);

exports.H6 = H6;

const P = _styledComponents.default.p(_templateObject12 || (_templateObject12 = _taggedTemplateLiteral(["\n    font-size: ", ";\n\n    a {\n        color: ", ";\n        text-decoration: none;\n        transition: ", ";\n        font-weight: ", ";\n\n        &:hover {\n            color: ", ";\n        }\n\n        &:active {\n            color: ", ";\n        }\n    }\n\n    ", "\n"])), Variables.FontSizes.Body, Variables.Colors.Primary500, Variables.Transitions.Short, Variables.FontWeights.Bold, Variables.Colors.Primary300, Variables.Colors.Primary600, props => props.pre && (0, _styledComponents.css)(_templateObject13 || (_templateObject13 = _taggedTemplateLiteral(["\n            white-space: pre-line;\n        "]))));

exports.P = P;

const Small = _styledComponents.default.small(_templateObject14 || (_templateObject14 = _taggedTemplateLiteral(["\n    font-size: ", ";\n    font-style: italic;\n    color: ", ";\n\n    a {\n        color: ", ";\n        text-decoration: none;\n        transition: ", ";\n        font-weight: ", ";\n\n        &:hover {\n            color: ", ";\n        }\n\n        &.active {\n            color: ", ";\n        }\n    }\n"])), Variables.FontSizes.Small, Variables.Colors.Gray500, Variables.Colors.Primary500, Variables.Transitions.Short, Variables.FontWeights.Bold, Variables.Colors.Primary700, Variables.Colors.Primary600);

exports.Small = Small;

const Strong = _styledComponents.default.strong(_templateObject15 || (_templateObject15 = _taggedTemplateLiteral(["\n    font-weight: ", ";\n\n    a {\n        color: ", ";\n        text-decoration: none;\n        transition: ", ";\n\n        &:hover {\n            color: ", ";\n        }\n\n        &.active {\n            color: ", ";\n        }\n    }\n"])), Variables.FontWeights.Bold, Variables.Colors.Primary500, Variables.Transitions.Short, Variables.Colors.Primary700, Variables.Colors.Primary600);

exports.Strong = Strong;

const Em = _styledComponents.default.em(_templateObject16 || (_templateObject16 = _taggedTemplateLiteral(["\n    font-style: italic;\n\n    a {\n        color: ", ";\n        text-decoration: none;\n        transition: ", ";\n\n        &:hover {\n            color: ", ";\n        }\n\n        &.active {\n            color: ", ";\n        }\n    }\n"])), Variables.Colors.Primary500, Variables.Transitions.Short, Variables.Colors.Primary700, Variables.Colors.Primary600);

exports.Em = Em;

const List = _styledComponents.default.ul(_templateObject17 || (_templateObject17 = _taggedTemplateLiteral(["\n    padding: 0;\n    margin: 0;\n    font-size: ", ";\n    padding-left: ", ";\n    display: grid;\n    grid-template-columns: 1fr;\n    gap: ", ";\n    list-style: none;\n\n    li {\n        padding-inline-start: ", ";\n        line-height: calc(\n            ", " * ", "\n        );\n\n        a {\n            color: ", ";\n            text-decoration: none;\n            transition: ", ";\n            font-weight: ", ";\n\n            &:hover {\n                color: ", ";\n            }\n\n            &.active {\n                color: ", ";\n            }\n        }\n\n        &::marker {\n            content: url(/icons/list-marker.svg);\n        }\n    }\n"])), Variables.FontSizes.Body, Variables.Margins.S, Variables.Margins.XS, Variables.Margins.XS, Variables.LineHeight, Variables.FontSizes.Body, Variables.Colors.Primary500, Variables.Transitions.Short, Variables.FontWeights.Bold, Variables.Colors.Primary700, Variables.Colors.Primary600);

exports.List = List;