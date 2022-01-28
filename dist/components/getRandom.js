"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

const getRandom = arr => {
  const randomNumber = Math.floor(Math.random() * arr.length);
  return arr[randomNumber];
};

var _default = getRandom;
exports.default = _default;