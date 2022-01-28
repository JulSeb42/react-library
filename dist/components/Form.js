"use strict";

require("core-js/modules/es.object.assign.js");

require("core-js/modules/web.dom-collections.iterator.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var Variables = _interopRequireWildcard(require("./Variables"));

var _Grid = _interopRequireDefault(require("./Grid"));

var _ButtonsContainer = _interopRequireDefault(require("./ButtonsContainer"));

var _Button = _interopRequireDefault(require("./Button"));

var _templateObject;

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

// Styles
const Container = (0, _styledComponents.default)(_Grid.default)(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n    width: 100%;\n    max-width: 400px;\n    margin: 0 auto;\n"])));

function Form(props) {
  return /*#__PURE__*/_react.default.createElement(Container, _extends({
    as: "form",
    gap: Variables.Margins.S
  }, props), props.children, (props.btnprimary || props.btncancel || props.btnreset) && /*#__PURE__*/_react.default.createElement(_ButtonsContainer.default, null, props.btnprimary && /*#__PURE__*/_react.default.createElement(_Button.default, {
    btnstyle: "plain",
    color: props.colorprimary || "primary",
    iconleft: props.iconleftprimary,
    iconright: props.iconrightprimary,
    type: "submit",
    loading: props.loading
  }, props.btnprimary), props.btncancel && /*#__PURE__*/_react.default.createElement(_Button.default, {
    btnstyle: "text",
    color: props.colorcancel || "primary",
    iconleft: props.iconleftcancel,
    iconright: props.iconrightcancel,
    to: props.btncancel
  }, props.textbtncancel || "Cancel"), props.btnreset && /*#__PURE__*/_react.default.createElement(_Button.default, {
    btnstyle: "text",
    color: props.colorreset || "primary",
    iconleft: props.iconleftreset,
    iconright: props.iconrightreset,
    type: "reset",
    onClick: props.onClickReset
  }, props.textbtnreset || "Reset")));
}

var _default = Form;
exports.default = _default;