"use strict";

require("core-js/modules/es.object.assign.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _Variables = _interopRequireDefault(require("./Variables"));

var _Grid = _interopRequireDefault(require("./Grid"));

var _ButtonsContainer = _interopRequireDefault(require("./ButtonsContainer"));

var _Button = _interopRequireDefault(require("./Button"));

var _templateObject;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

// Styles
const Container = (0, _styledComponents.default)(_Grid.default)(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n    width: 100%;\n    margin: 0 auto;\n"])));

const Form = props => {
  return /*#__PURE__*/_react.default.createElement(Container, _extends({
    as: "form",
    gap: _Variables.default.Spacers.S
  }, props), props.children, (props.btnPrimary || props.btnCancel || props.btnReset) && /*#__PURE__*/_react.default.createElement(_ButtonsContainer.default, null, props.btnPrimary && /*#__PURE__*/_react.default.createElement(_Button.default, {
    btnStyle: "plain",
    color: props.colorPrimary || "primary",
    iconLeft: props.iconLeftPrimary,
    iconRight: props.iconRightPrimary,
    type: "submit",
    loading: props.loading,
    disabled: props.loading
  }, props.btnPrimary), props.btnCancel && /*#__PURE__*/_react.default.createElement(_Button.default, {
    btnStyle: "text",
    color: props.colorCancel || "primary",
    iconLeft: props.iconLeftCancel,
    iconRight: props.iconRightCancel,
    to: props.btnCancel
  }, props.textBtnCancel || "Cancel"), (props.btnReset || props.textBtnReset) && /*#__PURE__*/_react.default.createElement(_Button.default, {
    btnStyle: "text",
    color: props.colorReset || "primary",
    iconLeft: props.iconLeftReset,
    iconRight: props.iconRightReset,
    type: "reset",
    onClick: props.onClickReset
  }, props.textBtnReset || "Reset")));
};

var _default = Form;
exports.default = _default;