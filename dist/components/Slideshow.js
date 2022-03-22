"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("core-js/modules/web.dom-collections.iterator.js");

var _react = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Variables = _interopRequireDefault(require("./Variables"));

var _Icon = _interopRequireDefault(require("./Icon"));

var _Flexbox = _interopRequireDefault(require("./Flexbox"));

var _Grid = _interopRequireDefault(require("./Grid"));

var _ButtonIcon = _interopRequireDefault(require("./ButtonIcon"));

var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

// Styles
const Container = (0, _styledComponents.default)(_Grid.default)(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n    width: 100%;\n    gap: ", ";\n    align-items: start;\n"])), _Variables.default.Spacers.XS);
const Wrapper = (0, _styledComponents.default)(_Flexbox.default)(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n    width: 100%;\n    height: ", ";\n    position: relative;\n"])), props => props.height);

const ContentWrapper = _styledComponents.default.div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n    overflow: hidden;\n    width: 100%;\n    height: 100%;\n"])));

const Content = (0, _styledComponents.default)(_Flexbox.default)(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n    transition: all ", " ease;\n    -ms-overflow-style: none;\n    scrollbar-width: none;\n    width: ", ";\n    transform: ", ";\n    height: 100%;\n\n    &::-webkit-scrollbar {\n        display: none;\n    }\n\n    & > * {\n        width: 100%;\n        height: 100%;\n        flex-shrink: 0;\n        flex-grow: 1;\n    }\n"])), props => "".concat(props.speed, "ms"), props => props.show ? "calc(100% / ".concat(props.show, ")") : "100%", props => props.show ? "translateX(-".concat(props.active * (100 / props.show), "%)") : "translateX(-".concat(props.active * 100, "%)"));
const ButtonsContainer = (0, _styledComponents.default)(_Flexbox.default)(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n    position: absolute;\n    z-index: 2;\n    padding: 0 ", ";\n    height: 100%;\n    left: ", ";\n    right: ", ";\n\n    ", "\n"])), props => props.btnLarge ? 0 : _Variables.default.Spacers.XS, props => props.position === "left" ? 0 : "auto", props => props.position === "right" ? 0 : "auto", props => props.hideMobile && (0, _styledComponents.css)(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n            @media (hover: none) and (pointer: coarse) {\n                display: none;\n            }\n        "]))));

const ButtonLarge = _styledComponents.default.button(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n    --size: 48px;\n    width: var(--size);\n    height: var(--size);\n    background-color: ", ";\n    transition: ", ";\n    border: none;\n    color: ", ";\n    border-radius: ", ";\n\n    &:hover {\n        background-color: ", ";\n    }\n"])), _Variables.default.Overlays.Plain.White50, _Variables.default.Transitions.Short, _Variables.default.Colors.Primary500, props => props.position === "left" ? "0 ".concat(_Variables.default.Radiuses.M, " ").concat(_Variables.default.Radiuses.M, " 0") : "".concat(_Variables.default.Radiuses.M, " 0 0 ").concat(_Variables.default.Radiuses.M), _Variables.default.Overlays.Plain.White80);

const PaginationContainer = (0, _styledComponents.default)(_Flexbox.default)(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n    width: 100%;\n"])));

const Dot = _styledComponents.default.button(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral(["\n    width: ", ";\n    height: ", ";\n    padding: 0;\n    border-radius: 50%;\n    border: none;\n    background-color: ", ";\n    transition: ", ";\n\n    &:hover {\n        background-color: ", ";\n    }\n\n    &:active {\n        background-color: ", ";\n    }\n"])), props => "".concat(props.dotSize, "px"), props => "".concat(props.dotSize, "px"), props => props.active ? _Variables.default.Colors.Primary500 : _Variables.default.Colors.Primary300, _Variables.default.Transitions.Short, props => props.active ? _Variables.default.Colors.Primary300 : _Variables.default.Colors.Primary500, _Variables.default.Colors.Primary600);

const SlideshowButton = props => {
  return /*#__PURE__*/_react.default.createElement(ButtonsContainer, {
    align: "center",
    position: props.position,
    btnLarge: props.btnLarge,
    hideMobile: props.hideMobile
  }, props.btnLarge ? /*#__PURE__*/_react.default.createElement(ButtonLarge, {
    position: props.position,
    onClick: props.onClick
  }, /*#__PURE__*/_react.default.createElement(_Icon.default, {
    name: props.position === "left" ? "chevron-left" : "chevron-right",
    size: 32
  })) : /*#__PURE__*/_react.default.createElement(_ButtonIcon.default, {
    size: props.btnSize || 32,
    color: props.btnColor || "primary",
    icon: props.position === "left" ? "chevron-left" : "chevron-right",
    onClick: props.onClick
  }));
};

const Slideshow = props => {
  // Slideshow with buttons
  const [active, setActive] = (0, _react.useState)(0);
  const length = props.children.length;

  const handleNext = () => {
    if (!props.show) {
      setActive(active < length - 1 ? active + 1 : 0);
    } else {
      setActive(active < length + props.show ? active + props.show : 0);
    }
  };

  const handlePrev = () => {
    if (!props.show) {
      setActive(active > 0 ? active - 1 : length - 1);
    } else {
      setActive(active > 0 ? active - props.show : length + props.show + (props.show - 1));
    }
  }; // Automatic slideshow


  const autoSlideshow = (0, _react.useCallback)(() => {
    setActive(active < length - 1 ? active + 1 : 0);
  }, [active, length]);
  (0, _react.useEffect)(() => {
    if (props.auto) {
      setInterval(() => autoSlideshow(), props.auto);
    }
  }, [props.auto, autoSlideshow]); // Swipe

  const [touchPosition, setTouchPosition] = (0, _react.useState)(null);

  const handleTouchStart = e => setTouchPosition(e.touches[0].clientX);

  const handleTouchMove = e => {
    if (touchPosition === null) {
      return;
    }

    const diff = touchPosition - e.touches[0].clientX;

    if (diff > 5) {
      handleNext();
    }

    if (diff < -5) {
      handlePrev();
    }

    setTouchPosition(null);
  };

  return /*#__PURE__*/_react.default.createElement(Container, null, /*#__PURE__*/_react.default.createElement(Wrapper, {
    direction: "column",
    height: props.height || "60vh"
  }, (props.controls || props.controlsLarge) && /*#__PURE__*/_react.default.createElement(SlideshowButton, {
    position: "left",
    onClick: handlePrev,
    btnLarge: props.controlsLarge,
    hideMobile: props.hideButtonsMobile
  }), /*#__PURE__*/_react.default.createElement(ContentWrapper, {
    onTouchStart: handleTouchStart,
    onTouchMove: handleTouchMove
  }, /*#__PURE__*/_react.default.createElement(Content, {
    show: props.show,
    active: active,
    speed: props.speed || 250
  }, props.children)), (props.controls || props.controlsLarge) && /*#__PURE__*/_react.default.createElement(SlideshowButton, {
    position: "right",
    onClick: handleNext,
    btnLarge: props.controlsLarge,
    hideMobile: props.hideButtonsMobile
  })), props.pagination && /*#__PURE__*/_react.default.createElement(PaginationContainer, {
    justify: "center",
    align: "center",
    gap: props.gapDots || _Variables.default.Spacers.XS
  }, props.children.map((_, i) => /*#__PURE__*/_react.default.createElement(Dot, {
    onClick: () => setActive(i),
    dotSize: props.dotSize || 8,
    active: active === i && true,
    key: i
  }))));
};

Slideshow.propTypes = {
  children: _propTypes.default.any.isRequired
};
var _default = Slideshow;
exports.default = _default;