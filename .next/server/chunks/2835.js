"use strict";
exports.id = 2835;
exports.ids = [2835];
exports.modules = {

/***/ 6562:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "x4": () => (/* binding */ login),
/* harmony export */   "kS": () => (/* binding */ logout),
/* harmony export */   "dy": () => (/* binding */ selectUser),
/* harmony export */   "ZP": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* unused harmony export userSlice */
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6139);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);

const userSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({
  name: "user",
  initialState: {
    user: null
  },
  reducers: {
    login: (state, action) => {
      state.user = action.payload;
    },
    logout: state => {
      state.user = null;
    }
  }
});
const {
  login,
  logout
} = userSlice.actions;
const selectUser = state => state.user.user;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (userSlice.reducer);

/***/ }),

/***/ 7513:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/image/public/images/common/userDefault.0814c24b239138a8175fadd2554278a0.png","height":35,"width":36,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAAr0lEQVR42jWMMQrCUBBE9xKCWHgEC8HCk2gaPVICSiCghVWittYmpdgk2mnhFQQlJBrdzQwkC+//YWYYMTNR1TH+DPxABc7whswYjkBhuPiYaBwnSg3vBQYsnGgURfkVEQPUn6aUsFBRA3PdhXrekrpdeUs7HwQrnU5m6jhz9f2ABd5T8BzyPOd0Cf6Emh5uz0IfK480vVgU7SwMt5ZlV87fkHVZID2wAfeGNeiYmdRQANET+GpmcAAAAABJRU5ErkJggg=="});

/***/ })

};
;