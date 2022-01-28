"use strict";

require("core-js/modules/es.object.assign.js");

require("core-js/modules/web.dom-collections.iterator.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _reactLazyLoadImageComponent = require("react-lazy-load-image-component");

require("react-lazy-load-image-component/src/effects/opacity.css");

var _Variables = _interopRequireDefault(require("./Variables"));

var Font = _interopRequireWildcard(require("./Font"));

const _excluded = ["scrollPosition"];

var _templateObject, _templateObject2, _templateObject3, _templateObject4;

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

// Styles
const Img = (0, _styledComponents.default)(_reactLazyLoadImageComponent.LazyLoadImage)(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n    width: ", ";\n    height: ", ";\n    position: relative;\n    z-index: 1;\n    display: block;\n\n    ", "\n"])), props => props.width || "100%", props => props.height || "auto", props => props.fit && (0, _styledComponents.css)(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n            object-fit: ", ";\n        "])), props => props.fit));

const Container = _styledComponents.default.div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n    position: relative;\n    width: ", ";\n    height: ", ";\n\n    span {\n        width: 100%;\n        display: block !important;\n        width: ", ";\n        height: ", ";\n    }\n"])), props => props.width || "100%", props => props.height || "auto", props => props.width || "100%", props => props.height || "auto");

const Caption = (0, _styledComponents.default)(Font.P)(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n    position: absolute;\n    bottom: 0;\n    left: 0;\n    width: 100%;\n    z-index: 2;\n    padding: ", " ", ";\n    background-color: ", ";\n    color: ", ";\n"])), _Variables.default.Margins.XS, _Variables.default.Margins.S, _Variables.default.Overlays.Plain.Black50, _Variables.default.Colors.White);

function Image(_ref) {
  let {
    scrollPosition
  } = _ref,
      props = _objectWithoutProperties(_ref, _excluded);

  return props.caption ? /*#__PURE__*/_react.default.createElement(Container, _extends({
    width: props.width,
    height: props.height
  }, props), /*#__PURE__*/_react.default.createElement(Img, {
    width: props.width,
    height: props.height,
    src: props.src,
    alt: props.alt,
    fit: props.fit,
    effect: "opacity",
    scrollPosition: scrollPosition
  }), /*#__PURE__*/_react.default.createElement(Caption, null, props.caption)) : /*#__PURE__*/_react.default.createElement(Img, _extends({
    width: props.width,
    height: props.height,
    src: props.src,
    alt: props.alt,
    fit: props.fit,
    effect: "opacity",
    scrollPosition: scrollPosition
  }, props));
}

var _default = (0, _reactLazyLoadImageComponent.trackWindowScroll)(Image);

exports.default = _default;