"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("core-js/modules/es.symbol.description.js");

var _react = _interopRequireDefault(require("react"));

var _reactHelmet = require("react-helmet");

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Packages
const Helmet = props => {
  return /*#__PURE__*/_react.default.createElement(_reactHelmet.Helmet, null, /*#__PURE__*/_react.default.createElement("title", null, props.title), /*#__PURE__*/_react.default.createElement("link", {
    rel: "icon",
    href: props.favicon
  }), /*#__PURE__*/_react.default.createElement("meta", {
    content: "IE=edge",
    "http-equiv": "X-UA-Compatible"
  }), /*#__PURE__*/_react.default.createElement("meta", {
    content: "width=device-width, initial-scale=1",
    name: "viewport"
  }), /*#__PURE__*/_react.default.createElement("meta", {
    name: "description",
    content: props.description
  }), /*#__PURE__*/_react.default.createElement("meta", {
    name: "keywords",
    content: props.keywords
  }), /*#__PURE__*/_react.default.createElement("meta", {
    name: "author",
    content: props.author
  }), /*#__PURE__*/_react.default.createElement("meta", {
    property: "og:title",
    content: props.title
  }), /*#__PURE__*/_react.default.createElement("meta", {
    property: "og:type",
    content: props.type
  }), /*#__PURE__*/_react.default.createElement("meta", {
    property: "og:image",
    content: props.cover
  }), /*#__PURE__*/_react.default.createElement("meta", {
    property: "og:site_name",
    content: props.siteName
  }), /*#__PURE__*/_react.default.createElement("meta", {
    property: "og:locale",
    content: props.language
  }), props.children);
};

Helmet.propTypes = {
  title: _propTypes.default.string.isRequired
};
var _default = Helmet;
exports.default = _default;