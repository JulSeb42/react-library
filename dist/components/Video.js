"use strict";

require("core-js/modules/es.object.assign.js");

require("core-js/modules/web.dom-collections.iterator.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _convertYoutube = _interopRequireDefault(require("./convertYoutube"));

var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5;

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

// Styles
const Container = _styledComponents.default.video(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n    width: ", ";\n    height: ", ";\n\n    ", "\n\n    ", "\n\n    ", "\n"])), props => props.width || "100%", props => props.height || "auto", props => props.fit && (0, _styledComponents.css)(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n            object-fit: ", ";\n        "])), props => props.fit), props => props.aspectRatio && (0, _styledComponents.css)(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n            height: inherit;\n            aspect-ratio: ", ";\n        "])), props => props.aspectRatio), props => props.youtube && (0, _styledComponents.css)(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n            height: ", ";\n\n            ", "\n        "])), props => props.height || "30vw", props => props.aspectRatio && (0, _styledComponents.css)(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n                    height: inherit;\n                    aspect-ratio: ", ";\n                "])), props => props.aspectRatio)));

function Video(props) {
  return props.youtube ? /*#__PURE__*/_react.default.createElement(Container, _extends({
    as: "iframe",
    src: (0, _convertYoutube.default)(props.youtube),
    title: "Youtube",
    frameBorder: "0",
    allow: "accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",
    allowFullScreen: true
  }, props)) : props.autoPlay ? /*#__PURE__*/_react.default.createElement(Container, _extends({
    muted: true,
    autoPlay: true,
    preLoad: "auto",
    loop: true
  }, props), /*#__PURE__*/_react.default.createElement("source", {
    src: props.src,
    type: "video/mp4"
  }), "Your browser does not support the video tag.") : /*#__PURE__*/_react.default.createElement(Container, props, /*#__PURE__*/_react.default.createElement("source", {
    src: props.src,
    type: "video/mp4"
  }), "Your browser does not support the video tag.");
}

var _default = Video;
exports.default = _default;