exports.id = 8857;
exports.ids = [8857];
exports.modules = {

/***/ 8857:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "z": () => (/* binding */ Button)
/* harmony export */ });
/* harmony import */ var next_translate_useTranslation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8841);
/* harmony import */ var next_translate_useTranslation__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_translate_useTranslation__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Button_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5347);
/* harmony import */ var _Button_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Button_module_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);
// hooks and helpers
 // styles



function Button({
  page = 'common',
  textPathName = "You are dont put there text.",
  locationInPage = "",
  aditionalStyles = null,
  active = false,
  click = null,
  containerStyles = null
}) {
  const // translation consfigs
  {
    t
  } = next_translate_useTranslation__WEBPACK_IMPORTED_MODULE_0___default()(page),
        translationPath = `${locationInPage}`,
        translate = key => t(`${translationPath}${key}`);

  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("div", {
    className: `${(_Button_module_scss__WEBPACK_IMPORTED_MODULE_2___default().container)} ${aditionalStyles} ${active ? (_Button_module_scss__WEBPACK_IMPORTED_MODULE_2___default().active) : ''}`,
    style: containerStyles,
    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("div", {
      className: `${(_Button_module_scss__WEBPACK_IMPORTED_MODULE_2___default().content)}`,
      onClick: click,
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("pre", {
        children: translate(textPathName)
      })
    })
  });
}

/***/ }),

/***/ 5347:
/***/ ((module) => {

// Exports
module.exports = {
	"container": "Button_container__45KyD",
	"content": "Button_content__14FlU",
	"active": "Button_active__1MDg5"
};


/***/ })

};
;