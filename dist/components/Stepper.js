"use strict";

require("core-js/modules/web.dom-collections.iterator.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactRouterDom = require("react-router-dom");

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _Flexbox = _interopRequireDefault(require("./Flexbox"));

var _Badge = _interopRequireDefault(require("./Badge"));

var _Variables = _interopRequireDefault(require("./Variables"));

var Font = _interopRequireWildcard(require("./Font"));

var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5;

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

// Styles
const Container = (0, _styledComponents.default)(_Flexbox.default)(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n    position: relative;\n\n    &:before {\n        content: \"\";\n        position: absolute;\n        top: calc(12px - 2px / 2);\n        left: 12px;\n        width: calc(100% - 24px);\n        height: 2px;\n        background-color: ", ";\n        z-index: 1;\n    }\n"])), _Variables.default.Colors.Primary500);
const Step = (0, _styledComponents.default)(_Flexbox.default)(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n    position: relative;\n    z-index: 2;\n"])));
const Number = (0, _styledComponents.default)(_Badge.default)(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n    outline: 4px solid ", ";\n"])), _Variables.default.Colors.White);
const Text = (0, _styledComponents.default)(Font.Small)(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n    color: ", ";\n    text-decoration: none;\n\n    ", "\n"])), _Variables.default.Colors.Primary500, props => props.to && (0, _styledComponents.css)(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n            font-weight: ", ";\n            transition: ", ";\n\n            &:hover {\n                color: ", ";\n            }\n\n            &:active {\n                color: ", ";\n            }\n        "])), _Variables.default.FontWeights.Bold, _Variables.default.Transitions.Short, _Variables.default.Colors.Primary300, _Variables.default.Colors.Primary600));

const Stepper = props => {
  return /*#__PURE__*/_react.default.createElement(Container, {
    justify: "space-between"
  }, props.steps.map((step, i) => /*#__PURE__*/_react.default.createElement(Step, {
    key: i,
    as: "span",
    direction: "column",
    align: "center",
    justify: "center",
    gap: _Variables.default.Spacers.XXS
  }, /*#__PURE__*/_react.default.createElement(Number, {
    size: 24,
    color: props.active >= i + 1 ? "primary" : _Variables.default.Colors.Primary300,
    icon: props.active > i + 1 && "check"
  }, (props.active < i + 1 || props.active === i + 1) && i + 1), /*#__PURE__*/_react.default.createElement(Text, {
    as: step.to && _reactRouterDom.Link,
    to: step.to
  }, step.text))));
};

var _default = Stepper;
exports.default = _default;