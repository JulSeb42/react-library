"use strict";

require("core-js/modules/es.object.assign.js");

require("core-js/modules/web.dom-collections.iterator.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _reactLazyload = _interopRequireWildcard(require("react-lazyload"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Variables = _interopRequireDefault(require("./Variables"));

var Font = _interopRequireWildcard(require("./Font"));

var _templateObject, _templateObject2, _templateObject3, _templateObject4;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

// Styles
const Container = (0, _styledComponents.default)(_reactLazyload.default)(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n    position: relative;\n    width: ", ";\n    height: ", ";\n"])), props => props.width || "100%", props => props.height || "auto");

const Img = _styledComponents.default.img(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n    width: ", ";\n    height: ", ";\n    position: relative;\n    z-index: 1;\n    display: block;\n\n    ", "\n"])), props => props.width || "100%", props => props.height || "auto", props => props.fit && (0, _styledComponents.css)(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n            object-fit: ", ";\n        "])), props => props.fit));

const Caption = (0, _styledComponents.default)(Font.P)(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n    position: absolute;\n    bottom: 0;\n    left: 0;\n    width: 100%;\n    z-index: 2;\n    padding: ", " ", ";\n    background-color: ", ";\n    color: ", ";\n"])), _Variables.default.Spacers.XS, _Variables.default.Spacers.S, _Variables.default.Overlays.Plain.Black50, _Variables.default.Colors.White);

const Image = props => {
  (0, _react.useEffect)(() => {
    (0, _reactLazyload.forceCheck)();
  });
  return /*#__PURE__*/_react.default.createElement(Container, {
    width: props.width,
    height: props.height,
    className: props.className
  }, /*#__PURE__*/_react.default.createElement(Img, _extends({
    width: props.width,
    height: props.height,
    src: props.src,
    alt: props.alt,
    fit: props.fit
  }, props, {
    once: true
  })), props.caption && /*#__PURE__*/_react.default.createElement(Caption, null, props.caption));
};

Image.propTypes = {
  src: _propTypes.default.string.isRequired,
  alt: _propTypes.default.string.isRequired
};
var _default = Image;
exports.default = _default;