"use strict";

require("core-js/modules/es.object.assign.js");

require("core-js/modules/web.dom-collections.iterator.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BasicCard = BasicCard;
exports.ImageCard = ImageCard;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _Variables = _interopRequireDefault(require("./Variables"));

var Font = _interopRequireWildcard(require("./Font"));

var _Button = _interopRequireDefault(require("./Button"));

var _Icon = _interopRequireDefault(require("./Icon"));

var _LinkScroll = _interopRequireDefault(require("./LinkScroll"));

var _Image = _interopRequireDefault(require("./Image"));

var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8;

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

// Styles
const BasicContainer = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n    background-color: ", ";\n    padding: ", ";\n    box-shadow: ", ";\n    border-radius: ", ";\n    max-width: 300px;\n    text-decoration: none;\n    color: ", ";\n\n    ", "\n\n    ", "\n    \n    ", "\n"])), _Variables.default.Colors.White, _Variables.default.Margins.M, _Variables.default.Shadows.S, _Variables.default.Radiuses.M, _Variables.default.Colors.Black, props => props.direction === "portrait" && (0, _styledComponents.css)(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n            display: grid;\n            gap: ", ";\n            justify-items: center;\n        "])), _Variables.default.Margins.XS), props => props.direction === "landscape" && (0, _styledComponents.css)(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n            display: flex;\n            align-items: center;\n\n            .icon {\n                margin-right: ", ";\n            }\n        "])), _Variables.default.Margins.S), props => props.to && (0, _styledComponents.css)(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n            transition: ", ";\n\n            &:hover {\n                transform: scale(1.01);\n                box-shadow: ", ";\n            }\n        "])), _Variables.default.Transitions.Short, _Variables.default.Shadows.M));

const BasicContent = _styledComponents.default.div(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n    display: grid;\n    gap: ", ";\n"])), _Variables.default.Margins.XS);

const ImageContainer = _styledComponents.default.div(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n    width: 100%;\n    max-width: 300px;\n    height: 12vw;\n    min-height: 150px;\n    overflow: hidden;\n    border-radius: ", ";\n    box-shadow: ", ";\n    text-decoration: none;\n    color: ", ";\n    position: relative;\n\n    &:after {\n        content: \"\";\n        background-color: ", ";\n        position: absolute;\n        top: 0;\n        left: 0;\n        width: 100%;\n        height: 100%;\n        z-index: 2;\n    }\n\n    & > span {\n        position: absolute;\n        top: 0;\n        left: 0;\n        width: 100%;\n        height: 100%;\n        z-index: 1;\n\n        img {\n            width: 100%;\n            height: 100%;\n        }\n    }\n\n    ", "\n"])), _Variables.default.Radiuses.M, _Variables.default.Shadows.S, _Variables.default.Colors.White, _Variables.default.Overlays.Plain.Black50, props => props.to && (0, _styledComponents.css)(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n            transition: ", ";\n\n            &:hover {\n                transform: scale(1.01);\n                box-shadow: ", ";\n            }\n        "])), _Variables.default.Transitions.Short, _Variables.default.Shadows.M));

const ContentImage = _styledComponents.default.div(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n    width: 100%;\n    height: 100%;\n    position: relative;\n    z-index: 3;\n    padding: ", ";\n    display: flex;\n    align-items: flex-start;\n    justify-content: flex-end;\n    flex-direction: column;\n"])), _Variables.default.Margins.S); // Functions


function FunctionBasicContent(props) {
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, props.title && /*#__PURE__*/_react.default.createElement(Font.H4, null, props.title), props.subtitle && /*#__PURE__*/_react.default.createElement(Font.P, null, props.subtitle), props.button && /*#__PURE__*/_react.default.createElement(_Button.default, {
    btnstyle: props.btnstyle || "plain",
    color: props.btncolor || "primary",
    iconleft: props.btniconleft,
    iconright: props.btniconright,
    to: props.btnto,
    onClick: props.onClickButton,
    nopadding: props.btnnopadding
  }, props.button));
}

function BasicCard(props) {
  return /*#__PURE__*/_react.default.createElement(BasicContainer, _extends({
    direction: props.direction,
    as: props.to && _LinkScroll.default,
    to: props.to
  }, props), props.icon && /*#__PURE__*/_react.default.createElement(_Icon.default, {
    name: props.icon,
    color: props.iconcolor,
    size: props.iconsize || 32,
    className: "icon"
  }), (props.title || props.subtitle || props.button) && (props.direction === "portrait" ? /*#__PURE__*/_react.default.createElement(FunctionBasicContent, {
    title: props.title,
    subtitle: props.subtitle,
    button: props.button,
    btnstyle: props.btnstyle,
    btncolor: props.btncolor,
    btniconleft: props.btniconleft,
    btniconright: props.btniconright,
    btnto: props.btnto,
    onClickButton: props.onClickButton,
    btnnopadding: props.btnnopadding
  }) : /*#__PURE__*/_react.default.createElement(BasicContent, null, /*#__PURE__*/_react.default.createElement(FunctionBasicContent, {
    title: props.title,
    subtitle: props.subtitle,
    button: props.button,
    btnstyle: props.btnstyle,
    btncolor: props.btncolor,
    btniconleft: props.btniconleft,
    btniconright: props.btniconright,
    btnto: props.btnto,
    onClickButton: props.onClickButton,
    btnnopadding: props.btnnopadding
  }))));
}

function ImageCard(props) {
  return /*#__PURE__*/_react.default.createElement(ImageContainer, _extends({
    to: props.to,
    as: props.to && _LinkScroll.default
  }, props), /*#__PURE__*/_react.default.createElement(_Image.default, {
    src: props.src,
    alt: props.alt,
    fit: "cover"
  }), (props.title || props.subtitle) && /*#__PURE__*/_react.default.createElement(ContentImage, null, props.title && /*#__PURE__*/_react.default.createElement(Font.H4, null, props.title), props.subtitle && /*#__PURE__*/_react.default.createElement(Font.P, null, props.subtitle)));
}