exports.id = 4587;
exports.ids = [4587];
exports.modules = {

/***/ 4587:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "D": () => (/* binding */ Title)
/* harmony export */ });
/* harmony import */ var next_translate_useTranslation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8841);
/* harmony import */ var next_translate_useTranslation__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_translate_useTranslation__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(543);
/* harmony import */ var _Title_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7889);
/* harmony import */ var _Title_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_Title_module_scss__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);
// hooks and helpers

 // styles



function Title({
  page = "common",
  textPathName = "You are dont put there text.",
  locationInPage = "",
  textStyles = null,
  href,
  classes
}) {
  const // translation consfigs
  {
    t
  } = next_translate_useTranslation__WEBPACK_IMPORTED_MODULE_0___default()(page),
        translate = key => t(`${locationInPage}${key}`);

  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("div", {
    className: (_Title_module_scss__WEBPACK_IMPORTED_MODULE_3___default().container),
    children: href ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx(next_link__WEBPACK_IMPORTED_MODULE_1__.default, {
      href: href,
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("p", {
        style: textStyles,
        style: {
          cursor: "pointer"
        },
        className: classes,
        children: translate(`${textPathName}`)
      })
    }) : /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("p", {
      style: textStyles,
      classes: classes,
      children: translate(`${textPathName}`)
    })
  });
}

/***/ }),

/***/ 7889:
/***/ ((module) => {

// Exports
module.exports = {
	"container": "Title_container__1g3-g"
};


/***/ })

};
;