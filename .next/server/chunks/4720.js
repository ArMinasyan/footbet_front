exports.id = 4720;
exports.ids = [4720];
exports.modules = {

/***/ 4720:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "f": () => (/* binding */ InputContainer)
/* harmony export */ });
/* harmony import */ var _InputContainer_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5697);
/* harmony import */ var _InputContainer_module_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_InputContainer_module_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




function InputContainer({
  label,
  id,
  type,
  placeholder,
  errors,
  other
}) {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
    className: (_InputContainer_module_scss__WEBPACK_IMPORTED_MODULE_1___default().container),
    children: [label && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
      className: (_InputContainer_module_scss__WEBPACK_IMPORTED_MODULE_1___default().label_content),
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
        htmlFor: id,
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
          src: label.src,
          alt: "icon"
        })
      })
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
      className: (_InputContainer_module_scss__WEBPACK_IMPORTED_MODULE_1___default().input_container),
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: errors ? (_InputContainer_module_scss__WEBPACK_IMPORTED_MODULE_1___default().input_error_content) : (_InputContainer_module_scss__WEBPACK_IMPORTED_MODULE_1___default().input_success_content),
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", _objectSpread({
          id: id,
          type: type,
          placeholder: placeholder
        }, other))
      })
    })]
  });
}

/***/ }),

/***/ 5697:
/***/ ((module) => {

// Exports
module.exports = {
	"container": "InputContainer_container__1KzvS",
	"label_content": "InputContainer_label_content__2_yAQ",
	"input_container": "InputContainer_input_container__1bTRJ",
	"input_success_content": "InputContainer_input_success_content__1yOZD",
	"input_error_content": "InputContainer_input_error_content__3-W2W"
};


/***/ })

};
;