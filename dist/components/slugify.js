"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("core-js/modules/es.regexp.exec.js");

require("core-js/modules/es.string.replace.js");

require("core-js/modules/es.regexp.constructor.js");

require("core-js/modules/es.regexp.to-string.js");

function slugify(str) {
  str = str.replace(/^\s+|\s+$/g, ""); // trim

  str = str.toLowerCase(); // remove accents, swap ñ for n, etc

  let from = "àáäâèéëêìíïîòóöôùúüûñç·/_,:;";
  let to = "aaaaeeeeiiiioooouuuunc------";

  for (let i = 0, l = from.length; i < l; i++) {
    str = str.replace(new RegExp(from.charAt(i), "g"), to.charAt(i));
  }

  str = str.replace(/[^a-z0-9 -]/g, "").replace(/\s+/g, "-").replace(/-+/g, "-");
  return str;
}

var _default = slugify;
exports.default = _default;