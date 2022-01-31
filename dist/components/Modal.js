"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _Variables = _interopRequireDefault(require("./Variables"));

var _Icon = _interopRequireDefault(require("./Icon"));

var _templateObject, _templateObject2;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

// Styles
const Container = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n    position: fixed;\n    top: 0;\n    left: 0;\n    z-index: 999;\n    background-color: ", ";\n    width: 100%;\n    height: 100vh;\n    display: none;\n    align-items: center;\n    justify-content: center;\n\n    &.open {\n        display: flex;\n    }\n\n    img {\n        width: 90%;\n        height: 90%;\n        object-fit: contain;\n    }\n\n    .lazyload-wrapper {\n        width: 90%;\n        height: 90%;\n        display: block;\n\n        img {\n            width: 100%;\n            height: 100%;\n        }\n    }\n"])), _Variables.default.Overlays.Plain.Black50);

const Close = _styledComponents.default.button(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n    background: none;\n    border: none;\n    --size: 48px;\n    width: var(--size);\n    height: var(--size);\n    position: absolute;\n    top: ", ";\n    right: ", ";\n    z-index: 2;\n    display: inline-flex;\n    align-items: center;\n    justify-content: center;\n    color: ", ";\n    border-radius: 50%;\n    transition: ", ";\n\n    &:hover {\n        background-color: ", ";\n    }\n"])), _Variables.default.Margins.L, _Variables.default.Margins.L, _Variables.default.Colors.White, _Variables.default.Transitions.Short, _Variables.default.Colors.Gray500);

function Modal(props) {
  return /*#__PURE__*/_react.default.createElement(Container, props, props.close && /*#__PURE__*/_react.default.createElement(Close, {
    onClick: props.close
  }, props.icon ? /*#__PURE__*/_react.default.createElement(_Icon.default, {
    name: props.icon,
    size: 32
  }) : /*#__PURE__*/_react.default.createElement("svg", {
    width: "32",
    height: "32",
    viewBox: "0 0 32 32",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/_react.default.createElement("path", {
    d: "M21.5893 8.45866L15.932 14.1147L10.276 8.45866L8.39066 10.344L14.0467 16L8.39066 21.656L10.276 23.5413L15.932 17.8853L21.5893 23.5413L23.4747 21.656L17.8187 16L23.4747 10.344L21.5893 8.45866Z",
    fill: "currentColor"
  }))), props.children);
}

var _default = Modal;
exports.default = _default;