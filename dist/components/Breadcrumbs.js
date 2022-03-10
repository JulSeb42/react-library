"use strict";

require("core-js/modules/es.object.assign.js");

require("core-js/modules/web.dom-collections.iterator.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BreadcrumbsItem = exports.Breadcrumbs = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactRouterDom = require("react-router-dom");

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Variables = _interopRequireDefault(require("./Variables"));

var Font = _interopRequireWildcard(require("./Font"));

var _IconMixin = _interopRequireDefault(require("./IconMixin"));

var _templateObject, _templateObject2, _templateObject3;

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

// Styles
const Breadcrumbs = (0, _styledComponents.default)(Font.P)(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n    a:after {\n        content: \"/\";\n        margin: 0 ", ";\n        color: ", ";\n    }\n\n    ", "\n    }\n"])), _Variables.default.Spacers.XXS, _Variables.default.Colors.Gray500, props => props.icon && (0, _styledComponents.css)(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n            a {\n                display: inline-flex;\n                align-items: center;\n\n                &:after {\n                    ", ";\n                    margin-top: 2px;\n                }\n            }\n        "])), (0, _IconMixin.default)({
  icon: props.icon,
  size: 14,
  color: _Variables.default.Colors.Gray500
})));
exports.Breadcrumbs = Breadcrumbs;

const Item = _styledComponents.default.span(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral([""])));

const BreadcrumbsItem = props => {
  return /*#__PURE__*/_react.default.createElement(Item, _extends({
    as: props.to && _reactRouterDom.Link,
    to: props.to
  }, props), props.children);
};

exports.BreadcrumbsItem = BreadcrumbsItem;
BreadcrumbsItem.propTypes = {
  children: _propTypes.default.string.isRequired
};