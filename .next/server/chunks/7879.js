exports.id = 7879;
exports.ids = [7879];
exports.modules = {

/***/ 246:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "x4": function() { return /* binding */ login; },
/* harmony export */   "kS": function() { return /* binding */ logout; },
/* harmony export */   "dy": function() { return /* binding */ selectUser; }
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
/* harmony default export */ __webpack_exports__["ZP"] = (userSlice.reducer);

/***/ }),

/***/ 2483:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "g": function() { return /* binding */ user_data; }
});

;// CONCATENATED MODULE: ./public/images/common/userphoto.png
/* harmony default export */ var userphoto = ({"src":"/_next/static/image/public/images/common/userphoto.0847c5b7c13e4093107a1154a84d2352.png","height":426,"width":445,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAA6UlEQVR42iWMu0oDURRF97lz52EhYqoQ8BEs7K38Bitb8f8sBQs/QLAVA4GkUCxEZ8bMZMhoEif3cU64pNqbvRcLX9Wcq/aX19ZyPqv48eFemkXLLMLGe1aKiCCCKNI0eX1B+3yHtv4hAhB2FSJ0Fsj56QBJmiHN9gTYPcp5Hxy0XK1psdGkji9gVUxOABaBds6L94zPssF70WF4eY3JWwknMY76h1DeexjrQGxwdiD4m1cUicVs9IRVnUMbayhJU1FdQ4P/qfQ4RpGXtFkW8pHpAFiYroPe72E8aqj5nmJcJ7i6uUV/eIItlIqC+ZYXuQEAAAAASUVORK5CYII="});
;// CONCATENATED MODULE: ./src/user/user.js

const user_data = {
  photo: userphoto.src,
  birthDate: '12.03.1978',
  telephone: '+495 -254-24-75',
  fullName: 'Александр Михаева',
  email: ' alex.mikhaeva.19@mail.ru'
};

/***/ })

};
;