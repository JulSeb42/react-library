"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("core-js/modules/es.regexp.exec.js");

require("core-js/modules/es.string.replace.js");

// Function to convert YouTube links to embed links for iframe
const convertYoutube = str => {
  return str.replace("watch?v=", "embed/");
};

var _default = convertYoutube;
exports.default = _default;