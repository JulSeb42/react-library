"use strict";

require("core-js/modules/web.dom-collections.iterator.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SlideshowPaginationContainer = exports.SlideshowPaginationButton = exports.SlideshowItem = exports.SlideshowContainer = exports.SlideshowButton = exports.Slideshow = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var Variables = _interopRequireWildcard(require("./Variables"));

var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6;

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

// Styles
const SlideshowContainer = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n    position: relative;\n    display: grid;\n    grid-template-columns: 1fr;\n    gap: ", ";\n"])), Variables.Margins.XS);

exports.SlideshowContainer = SlideshowContainer;

const Slideshow = _styledComponents.default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n    width: 100%;\n    height: 70vh;\n    overflow: hidden;\n    position: relative;\n"])));

exports.Slideshow = Slideshow;

const SlideshowItem = _styledComponents.default.div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n    width: 100%;\n    height: 100%;\n    position: absolute;\n    top: 0;\n    z-index: 1;\n    transition: ", ";\n\n    &.previous {\n        left: -100%;\n    }\n\n    &.active {\n        left: 0;\n    }\n\n    &.next {\n        left: 100%;\n    }\n\n    & > span {\n        width: 100%;\n        height: 100%;\n\n        img {\n            width: 100%;\n            height: 100%;\n            object-fit: cover;\n        }\n    }\n"])), Variables.Transitions.Long);

exports.SlideshowItem = SlideshowItem;

const SlideshowButton = _styledComponents.default.button(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n    --size: 48px;\n    width: var(--size);\n    height: var(--size);\n    border: none;\n    background-color: ", ";\n    position: absolute;\n    top: calc(50% - var(--size) / 2);\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    transition: ", ";\n    z-index: 2;\n    color: ", ";\n\n    &:hover {\n        background-color: ", ";\n    }\n\n    &:first-child {\n        left: 0;\n        border-radius: 0 ", " ", " 0;\n    }\n\n    &:last-child {\n        right: 0;\n        border-radius: ", " 0 0 ", ";\n    }\n"])), Variables.Overlays.Plain.White50, Variables.Transitions.Short, Variables.Colors.Primary500, Variables.Overlays.Plain.White80, Variables.Margins.S, Variables.Margins.S, Variables.Margins.S, Variables.Margins.S);

exports.SlideshowButton = SlideshowButton;

const SlideshowPaginationContainer = _styledComponents.default.div(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    margin-top: ", ";\n\n    button:not(:last-child) {\n        margin-right: ", ";\n    }\n"])), Variables.Margins.M, Variables.Margins.XS);

exports.SlideshowPaginationContainer = SlideshowPaginationContainer;

const SlideshowPaginationButton = _styledComponents.default.button(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n    --size: ", ";\n    width: var(--size);\n    height: var(--size);\n    border-radius: 50%;\n    border: none;\n    background-color: ", ";\n    transition: all 0.2s ease;\n    display: block;\n    padding: 0;\n\n    &:hover,\n    &.active {\n        background-color: ", ";\n    }\n"])), props => "".concat(props.size || 8, "px"), Variables.Colors.Primary300, Variables.Colors.Primary500);

exports.SlideshowPaginationButton = SlideshowPaginationButton;