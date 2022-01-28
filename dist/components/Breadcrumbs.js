"use strict";

require("core-js/modules/web.dom-collections.iterator.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BreadcrumbsLink = exports.BreadcrumbsActive = exports.Breadcrumbs = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _Variables = _interopRequireDefault(require("./Variables"));

var Font = _interopRequireWildcard(require("./Font"));

var _LinkScroll = _interopRequireDefault(require("./LinkScroll"));

var _templateObject, _templateObject2, _templateObject3;

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

// Styles
const Breadcrumbs = (0, _styledComponents.default)(Font.P)(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n    a:after {\n        content: \"/\";\n        margin: 0 ", ";\n        color: ", ";\n    }\n"])), _Variables.default.Margins.XXS, _Variables.default.Colors.Black);
exports.Breadcrumbs = Breadcrumbs;
const BreadcrumbsLink = (0, _styledComponents.default)(_LinkScroll.default)(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral([""])));
exports.BreadcrumbsLink = BreadcrumbsLink;

const BreadcrumbsActive = _styledComponents.default.span(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral([""])));

exports.BreadcrumbsActive = BreadcrumbsActive;