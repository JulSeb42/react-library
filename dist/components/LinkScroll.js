"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("core-js/modules/es.object.assign.js");

var _react = _interopRequireDefault(require("react"));

var _reactRouterDom = require("react-router-dom");

var _scrollToTop = _interopRequireDefault(require("./scrollToTop"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function LinkScroll(props) {
  return /*#__PURE__*/_react.default.createElement(_reactRouterDom.Link, _extends({
    onClick: (0, _scrollToTop.default)()
  }, props), props.children);
}

var _default = LinkScroll;
exports.default = _default;