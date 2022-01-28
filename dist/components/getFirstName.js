"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("core-js/modules/es.regexp.exec.js");

require("core-js/modules/es.string.split.js");

const getFirstName = fullName => {
  let arr = fullName.split(" ");
  return arr[0];
};

var _default = getFirstName;
exports.default = _default;