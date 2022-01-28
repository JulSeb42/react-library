"use strict";

require("core-js/modules/es.object.assign.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("core-js/modules/web.dom-collections.iterator.js");

var _react = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _Variables = _interopRequireDefault(require("./Variables"));

var _Input = _interopRequireDefault(require("./Input"));

var _templateObject, _templateObject2;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

// Styles
const Container = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n    position: relative;\n    z-index: 10;\n\n    & > div {\n        position: relative;\n        z-index: 1;\n    }\n"])));

const List = _styledComponents.default.ul(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n    padding: 0;\n    margin: 0;\n    list-style: none;\n    position: absolute;\n    z-index: 0;\n    background-color: ", ";\n    width: 100%;\n    top: 28px;\n    border-radius: ", ";\n    border: 1px solid ", ";\n    max-height: 0;\n    transition: ", ";\n    overflow: hidden;\n    padding-top: 0;\n    opacity: 0;\n    overflow-y: scroll;\n\n    &.open {\n        padding-top: 28px;\n        max-height: 200px;\n        opacity: 1;\n    }\n\n    li {\n        padding: ", ";\n        transition: ", ";\n\n        &:hover {\n            background-color: ", ";\n            color: ", ";\n            cursor: pointer;\n        }\n    }\n"])), _Variables.default.Colors.White, _Variables.default.Radiuses.S, _Variables.default.Colors.Primary500, _Variables.default.Transitions.Long, _Variables.default.Margins.XS, _Variables.default.Transitions.Short, _Variables.default.Colors.Primary500, _Variables.default.Colors.White);

function ListSuggestions(props) {
  const [isOpen, setIsOpen] = (0, _react.useState)(false);
  const open = isOpen ? "open" : "";

  const handleOpen = () => setIsOpen(true);

  const handleClose = () => setTimeout(setIsOpen(false), 500);

  return /*#__PURE__*/_react.default.createElement(Container, {
    span: props.span
  }, /*#__PURE__*/_react.default.createElement(_Input.default, _extends({
    label: props.label,
    id: props.id,
    onFocus: handleOpen,
    onBlur: handleClose,
    span: props.span
  }, props)), /*#__PURE__*/_react.default.createElement(List, {
    className: open
  }, props.items.slice(0, 20).map((item, i) => /*#__PURE__*/_react.default.createElement("li", {
    onMouseDown: props.onMouseDown,
    key: i
  }, item))));
}

var _default = ListSuggestions;
exports.default = _default;