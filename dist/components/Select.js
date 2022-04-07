"use strict";

require("core-js/modules/web.dom-collections.iterator.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SelectItem = exports.Select = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _InputContainer = _interopRequireDefault(require("./InputContainer"));

var _Variables = _interopRequireDefault(require("./Variables"));

var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10;

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

// Styles
const Container = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n    position: relative;\n"])));

const Selected = _styledComponents.default.span(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n    position: relative;\n    z-index: 1;\n    border: 1px solid\n        ", ";\n    border-radius: ", ";\n    outline: none;\n    padding: ", " ", ";\n    font-family: ", ";\n    font-size: ", ";\n    height: 35px;\n    width: 100%;\n    display: block;\n    line-height: 100%;\n    transition: ", ";\n    user-select: none;\n\n    ", "\n\n    ", "\n\n    ", "\n"])), props => props.isOpen ? _Variables.default.Colors.Primary500 : _Variables.default.Colors.Gray200, _Variables.default.Radiuses.S, _Variables.default.Spacers.XS, _Variables.default.Spacers.XS, _Variables.default.FontFamilies.Body, _Variables.default.FontSizes.Body, _Variables.default.Transitions.Short, props => props.arrow && (0, _styledComponents.css)(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n            cursor: pointer;\n\n            &:after {\n                content: url(\"data:image/svg+xml,%3Csvg width='16' height='16' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M10.862 6.19533L8.00001 9.05733L5.13801 6.19533L4.19534 7.13799L8.00001 10.9427L11.8047 7.13799L10.862 6.19533Z' fill='%231B4568'/%3E%3C/svg%3E\");\n                color: ", ";\n                position: absolute;\n                z-index: 2;\n                top: calc(50% - 18px / 2);\n                right: ", ";\n                transition: ", ";\n\n                ", "\n            }\n        "])), _Variables.default.Colors.Primary500, _Variables.default.Spacers.XS, _Variables.default.Transitions.Short, props => props.isOpen && (0, _styledComponents.css)(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n                        transform: rotate(180deg);\n                    "])))), props => props.noSelect && (0, _styledComponents.css)(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n            border: 1px solid\n                ", ";\n        "])), props => props.isOpen ? _Variables.default.Colors.Gray200 : _Variables.default.Colors.Gray200), props => props.disabled && (0, _styledComponents.css)(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n            cursor: not-allowed;\n            color: ", ";\n            border-color: ", ";\n            background-color: ", ";\n\n            ", "\n        "])), _Variables.default.Colors.Gray800, _Variables.default.Colors.Gray200, _Variables.default.Colors.Gray50, props => props.arrow && (0, _styledComponents.css)(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n                    &:after {\n                        content: url(\"data:image/svg+xml,%3Csvg width='16' height='16' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M10.862 6.19533L8.00001 9.05733L5.13801 6.19533L4.19534 7.13799L8.00001 10.9427L11.8047 7.13799L10.862 6.19533Z' fill='%232F2F2F'/%3E%3C/svg%3E\");\n                    }\n                "])))));

const List = _styledComponents.default.ul(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n    position: absolute;\n    top: calc(35px + ", ");\n    left: 0;\n    padding: 0;\n    margin: 0;\n    list-style: none;\n    background-color: ", ";\n    box-shadow: ", ";\n    width: 100%;\n    border-radius: ", ";\n    overflow: hidden;\n    z-index: 10;\n    transition: ", ";\n    max-height: ", ";\n    overflow-y: scroll;\n    z-index: ", ";\n"])), _Variables.default.Spacers.XS, _Variables.default.Colors.White, _Variables.default.Shadows.S, _Variables.default.Radiuses.M, _Variables.default.Transitions.Short, props => props.isOpen ? "200px" : 0, props => props.index);

const SelectItem = _styledComponents.default.li(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral(["\n    cursor: pointer;\n    padding: ", ";\n    width: 100%;\n    transition: ", ";\n    user-select: none;\n\n    &:hover {\n        background-color: ", ";\n        color: ", ";\n    }\n\n    ", "\n"])), _Variables.default.Spacers.XS, _Variables.default.Transitions.Short, _Variables.default.Colors.Primary300, _Variables.default.Colors.White, props => props.selected && (0, _styledComponents.css)(_templateObject10 || (_templateObject10 = _taggedTemplateLiteral(["\n            background-color: ", ";\n            color: ", ";\n        "])), _Variables.default.Colors.Primary500, _Variables.default.Colors.White));

exports.SelectItem = SelectItem;

const Select = props => {
  return props.label || props.helper || props.validation || props.helperBottom ? /*#__PURE__*/_react.default.createElement(_InputContainer.default, {
    label: props.label,
    helper: props.helper,
    validation: props.validation,
    validationText: props.validationText,
    id: props.id,
    value: props.value,
    helperBottom: props.helperBottom
  }, /*#__PURE__*/_react.default.createElement(Container, null, /*#__PURE__*/_react.default.createElement(Selected, {
    onClick: !props.disabled && props.onClickSelect,
    isOpen: props.isOpen,
    disabled: props.disabled,
    arrow: props.children && true,
    noSelect: !props.children && true
  }, props.selected), props.children && /*#__PURE__*/_react.default.createElement(List, {
    isOpen: props.isOpen,
    index: props.index
  }, props.children))) : /*#__PURE__*/_react.default.createElement(Container, null, /*#__PURE__*/_react.default.createElement(Selected, {
    onClick: !props.disabled && props.onClickSelect,
    isOpen: props.isOpen,
    disabled: props.disabled,
    arrow: props.children && true,
    noSelect: !props.children && true
  }, props.selected), props.children && /*#__PURE__*/_react.default.createElement(List, {
    isOpen: props.isOpen,
    index: props.index
  }, props.children));
};

exports.Select = Select;
Select.propTypes = {
  selected: _propTypes.default.string.isRequired,
  items: _propTypes.default.array.isRequired,
  isOpen: _propTypes.default.bool.isRequired,
  onClickSelect: _propTypes.default.func.isRequired,
  children: _propTypes.default.any.isRequired
};
SelectItem.propTypes = {
  onClick: _propTypes.default.func.isRequired,
  selected: _propTypes.default.bool.isRequired,
  children: _propTypes.default.any.isRequired
};