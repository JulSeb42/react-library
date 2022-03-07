"use strict";

require("core-js/modules/web.dom-collections.iterator.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DropdownContainer = exports.Dropdown = void 0;

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Variables = _interopRequireDefault(require("./Variables"));

var _templateObject, _templateObject2, _templateObject3;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

// Styles
const DropdownContainer = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n    position: relative;\n"])));

exports.DropdownContainer = DropdownContainer;

const Dropdown = _styledComponents.default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n    position: absolute;\n    left: 0;\n    top: 42px;\n    list-style: none;\n    background-color: ", ";\n    box-shadow: ", ";\n    min-width: 150px;\n    padding: 0;\n    display: grid;\n    grid-template-columns: 1fr;\n    border-radius: ", ";\n    max-height: 0;\n    overflow: hidden;\n    transition: ", ";\n    z-index: 10;\n\n    & > a {\n        padding: ", ";\n        color: ", ";\n        text-decoration: none;\n        font-weight: ", ";\n        transition: ", ";\n\n        &:hover {\n            background-color: ", ";\n            color: ", ";\n        }\n    }\n\n    ", "\n"])), _Variables.default.Colors.White, _Variables.default.Shadows.S, _Variables.default.Radiuses.M, _Variables.default.Transitions.Long, _Variables.default.Spacers.XS, _Variables.default.Colors.Primary500, _Variables.default.FontWeights.Bold, _Variables.default.Transitions.Short, _Variables.default.Colors.Primary500, _Variables.default.Colors.White, props => props.open && (0, _styledComponents.css)(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n            max-height: 800px;\n            overflow-y: scroll;\n        "]))));

exports.Dropdown = Dropdown;
Dropdown.propTypes = {
  open: _propTypes.default.bool.isRequired
};