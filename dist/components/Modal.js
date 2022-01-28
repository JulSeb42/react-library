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
const Container = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n    position: fixed;\n    top: 0;\n    left: 0;\n    z-index: 999;\n    background-color: ", ";\n    width: 100%;\n    height: 100vh;\n    display: none;\n    align-items: center;\n    justify-content: center;\n\n    &.open {\n        display: flex;\n    }\n\n    img {\n        width: 90%;\n        height: 90%;\n        object-fit: contain;\n    }\n\n    .lazy-load-image-background {\n        width: 90%;\n        height: 90%;\n\n        img {\n            width: 100%;\n            height: 100%;\n        }\n    }\n"])), _Variables.default.Overlays.Plain.Black50);

const Close = _styledComponents.default.button(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n    background: none;\n    border: none;\n    --size: 48px;\n    width: var(--size);\n    height: var(--size);\n    position: absolute;\n    top: ", ";\n    right: ", ";\n    z-index: 2;\n    display: inline-flex;\n    align-items: center;\n    justify-content: center;\n    color: ", ";\n    border-radius: 50%;\n    transition: ", ";\n    \n    &:hover {\n        background-color: ", "\n    }\n"])), _Variables.default.Margins.L, _Variables.default.Margins.L, _Variables.default.Colors.White, _Variables.default.Transitions.Short, _Variables.default.Colors.Gray500);

function Modal(props) {
  return /*#__PURE__*/_react.default.createElement(Container, props, props.close && /*#__PURE__*/_react.default.createElement(Close, {
    onClick: props.close
  }, /*#__PURE__*/_react.default.createElement(_Icon.default, {
    name: "close",
    size: 32,
    component: true
  })), props.children);
}

var _default = Modal;
exports.default = _default;