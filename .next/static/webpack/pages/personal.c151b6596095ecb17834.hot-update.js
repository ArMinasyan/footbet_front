self["webpackHotUpdate_N_E"]("pages/personal",{

/***/ "./components/Pages/Personal/Content/UserInfo/UserInfo.jsx":
/*!*****************************************************************!*\
  !*** ./components/Pages/Personal/Content/UserInfo/UserInfo.jsx ***!
  \*****************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserInfo": function() { return /* binding */ UserInfo; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _src_user_user__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../../src/user/user */ "./src/user/user.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_translate_useTranslation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next-translate/useTranslation */ "./node_modules/next-translate/lib/esm/useTranslation.js");
/* harmony import */ var _UserInfo_module_scss__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./UserInfo.module.scss */ "./components/Pages/Personal/Content/UserInfo/UserInfo.module.scss");
/* harmony import */ var _UserInfo_module_scss__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_UserInfo_module_scss__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _public_images_personal_user_input_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../../public/images/personal/user-input.svg */ "./public/images/personal/user-input.svg");
/* harmony import */ var _public_images_personal_unknown_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../../public/images/personal/unknown.svg */ "./public/images/personal/unknown.svg");
/* harmony import */ var _public_images_personal_calendar_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../../../public/images/personal/calendar.svg */ "./public/images/personal/calendar.svg");
/* harmony import */ var _public_images_personal_mail_svg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../../../public/images/personal/mail.svg */ "./public/images/personal/mail.svg");
/* harmony import */ var _public_images_personal_phone_svg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../../../public/images/personal/phone.svg */ "./public/images/personal/phone.svg");
/* harmony import */ var _public_images_personal_key_svg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../../../public/images/personal/key.svg */ "./public/images/personal/key.svg");
/* harmony import */ var _public_images_personal_change_png__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../../../../public/images/personal/change.png */ "./public/images/personal/change.png");
/* harmony import */ var _public_images_personal_camera_svg__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../../../../public/images/personal/camera.svg */ "./public/images/personal/camera.svg");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _redux_features_userSlice__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../../../../redux/features/userSlice */ "./redux/features/userSlice.js");
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "C:\\Users\\user\\Desktop\\projects\\ait-projects\\foot-bet\\components\\Pages\\Personal\\Content\\UserInfo\\UserInfo.jsx",
    _s = $RefreshSig$();



 // styles 

 // icons 











function UserInfo() {
  _s();

  var user_info = (0,react_redux__WEBPACK_IMPORTED_MODULE_12__.useSelector)(_redux_features_userSlice__WEBPACK_IMPORTED_MODULE_13__.selectUser);
  console.log(user_info);

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false),
      changeName = _useState[0],
      setChangeName = _useState[1],
      _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false),
      changeDate = _useState2[0],
      setChangeDate = _useState2[1],
      _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false),
      changePhone = _useState3[0],
      setChangePhone = _useState3[1],
      _useState4 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false),
      changeEmail = _useState4[0],
      setChangeEmail = _useState4[1],
      _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(_src_user_user__WEBPACK_IMPORTED_MODULE_1__.user_data.photo),
      userPhoto = _useState5[0],
      setUserPhoto = _useState5[1],
      _useTranslation = (0,next_translate_useTranslation__WEBPACK_IMPORTED_MODULE_3__.default)('personal'),
      t = _useTranslation.t;

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: (_UserInfo_module_scss__WEBPACK_IMPORTED_MODULE_14___default().container),
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: (_UserInfo_module_scss__WEBPACK_IMPORTED_MODULE_14___default().content),
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: (_UserInfo_module_scss__WEBPACK_IMPORTED_MODULE_14___default().user_photo_content),
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
          htmlFor: "user_photo",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
              src: userPhoto ? userPhoto : _public_images_personal_unknown_svg__WEBPACK_IMPORTED_MODULE_5__.default.src,
              className: (_UserInfo_module_scss__WEBPACK_IMPORTED_MODULE_14___default().user_photo),
              alt: "icon"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 38,
              columnNumber: 29
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 37,
            columnNumber: 25
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
            src: _public_images_personal_camera_svg__WEBPACK_IMPORTED_MODULE_11__.default.src,
            alt: "icon",
            className: (_UserInfo_module_scss__WEBPACK_IMPORTED_MODULE_14___default().cameraIcon)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 40,
            columnNumber: 25
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 36,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
          type: "file",
          id: "user_photo",
          style: {
            display: 'none'
          },
          onChange: function onChange(e) {
            e.target.files.length !== 0 && setUserPhoto(URL.createObjectURL(e.target.files[0]));
          }
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 42,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 35,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: (_UserInfo_module_scss__WEBPACK_IMPORTED_MODULE_14___default().inputs_content),
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: (_UserInfo_module_scss__WEBPACK_IMPORTED_MODULE_14___default().info_input),
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
              src: _public_images_personal_user_input_svg__WEBPACK_IMPORTED_MODULE_4__.default.src,
              alt: "icon"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 54,
              columnNumber: 29
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 53,
            columnNumber: 25
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
              style: !changeName ? {
                display: 'block'
              } : {
                display: 'none'
              },
              children: _src_user_user__WEBPACK_IMPORTED_MODULE_1__.user_data.fullName
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 57,
              columnNumber: 29
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
              placeholder: _src_user_user__WEBPACK_IMPORTED_MODULE_1__.user_data.fullName,
              type: "text",
              style: changeName ? {
                display: 'block'
              } : {
                display: 'none'
              },
              onChange: function onChange(e) {
                return _src_user_user__WEBPACK_IMPORTED_MODULE_1__.user_data.fullName = e.target.value;
              }
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 60,
              columnNumber: 29
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 56,
            columnNumber: 25
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
              src: _public_images_personal_change_png__WEBPACK_IMPORTED_MODULE_10__.default.src,
              alt: "",
              onClick: function onClick() {
                return setChangeName(!changeName);
              }
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 70,
              columnNumber: 29
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 69,
            columnNumber: 25
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 52,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: (_UserInfo_module_scss__WEBPACK_IMPORTED_MODULE_14___default().info_input),
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
              src: _public_images_personal_calendar_svg__WEBPACK_IMPORTED_MODULE_6__.default.src,
              alt: ""
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 79,
              columnNumber: 29
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 78,
            columnNumber: 25
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
              style: !changeDate ? {
                display: 'block'
              } : {
                display: 'none'
              },
              children: _src_user_user__WEBPACK_IMPORTED_MODULE_1__.user_data.birthDate
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 82,
              columnNumber: 29
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
              placeholder: _src_user_user__WEBPACK_IMPORTED_MODULE_1__.user_data.birthDate,
              type: "date",
              style: changeDate ? {
                display: 'block'
              } : {
                display: 'none'
              },
              onChange: function onChange(e) {
                return _src_user_user__WEBPACK_IMPORTED_MODULE_1__.user_data.birthDate = e.target.value;
              }
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 85,
              columnNumber: 29
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 81,
            columnNumber: 25
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
              src: _public_images_personal_change_png__WEBPACK_IMPORTED_MODULE_10__.default.src,
              alt: "",
              onClick: function onClick() {
                return setChangeDate(!changeDate);
              }
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 95,
              columnNumber: 29
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 94,
            columnNumber: 25
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 77,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: (_UserInfo_module_scss__WEBPACK_IMPORTED_MODULE_14___default().info_input),
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
              src: _public_images_personal_phone_svg__WEBPACK_IMPORTED_MODULE_8__.default.src,
              alt: ""
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 104,
              columnNumber: 29
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 103,
            columnNumber: 25
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
              style: !changePhone ? {
                display: 'block'
              } : {
                display: 'none'
              },
              children: _src_user_user__WEBPACK_IMPORTED_MODULE_1__.user_data.telephone
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 107,
              columnNumber: 29
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
              placeholder: _src_user_user__WEBPACK_IMPORTED_MODULE_1__.user_data.telephone,
              type: "text",
              style: changePhone ? {
                display: 'block'
              } : {
                display: 'none'
              },
              onChange: function onChange(e) {
                return _src_user_user__WEBPACK_IMPORTED_MODULE_1__.user_data.telephone = e.target.value;
              }
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 110,
              columnNumber: 29
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 106,
            columnNumber: 25
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
              src: _public_images_personal_change_png__WEBPACK_IMPORTED_MODULE_10__.default.src,
              alt: "",
              onClick: function onClick() {
                return setChangePhone(!changePhone);
              }
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 120,
              columnNumber: 29
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 119,
            columnNumber: 25
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 102,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: (_UserInfo_module_scss__WEBPACK_IMPORTED_MODULE_14___default().info_input),
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
              src: _public_images_personal_mail_svg__WEBPACK_IMPORTED_MODULE_7__.default.src,
              alt: ""
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 129,
              columnNumber: 29
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 128,
            columnNumber: 25
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
              style: !changeEmail ? {
                display: 'block'
              } : {
                display: 'none'
              },
              children: _src_user_user__WEBPACK_IMPORTED_MODULE_1__.user_data.email
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 132,
              columnNumber: 29
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
              placeholder: _src_user_user__WEBPACK_IMPORTED_MODULE_1__.user_data.email,
              type: "text",
              style: changeEmail ? {
                display: 'block'
              } : {
                display: 'none'
              },
              onChange: function onChange(e) {
                return _src_user_user__WEBPACK_IMPORTED_MODULE_1__.user_data.email = e.target.value;
              }
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 135,
              columnNumber: 29
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 131,
            columnNumber: 25
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
              src: _public_images_personal_change_png__WEBPACK_IMPORTED_MODULE_10__.default.src,
              alt: "icon",
              onClick: function onClick() {
                return setChangeEmail(!changeEmail);
              }
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 145,
              columnNumber: 29
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 144,
            columnNumber: 25
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 127,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: (_UserInfo_module_scss__WEBPACK_IMPORTED_MODULE_14___default().changePassword),
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
              src: _public_images_personal_key_svg__WEBPACK_IMPORTED_MODULE_9__.default.src,
              alt: ""
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 154,
              columnNumber: 29
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 153,
            columnNumber: 25
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
              placeholder: t('board.headers.changePassword'),
              type: "password" // onChange={(e) => user_data.email = e.target.value}

            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 157,
              columnNumber: 29
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 156,
            columnNumber: 25
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
              src: _public_images_personal_change_png__WEBPACK_IMPORTED_MODULE_10__.default.src,
              alt: "icon",
              onClick: function onClick() {
                return setChangeEmail(!changeEmail);
              }
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 164,
              columnNumber: 29
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 163,
            columnNumber: 25
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 152,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 51,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 13
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 33,
    columnNumber: 9
  }, this);
}

_s(UserInfo, "d/UzW6/MG+MHgZmw2VjP42bFO08=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_12__.useSelector, next_translate_useTranslation__WEBPACK_IMPORTED_MODULE_3__.default];
});

_c = UserInfo;

var _c;

$RefreshReg$(_c, "UserInfo");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ }),

/***/ "./components/Pages/Personal/Personal.jsx":
/*!************************************************!*\
  !*** ./components/Pages/Personal/Personal.jsx ***!
  \************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Personal; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _common_Title_Title__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/Title/Title */ "./components/Pages/common/Title/Title.jsx");
/* harmony import */ var _Content_Content__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Content/Content */ "./components/Pages/Personal/Content/Content.jsx");
/* harmony import */ var _Personal_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Personal.module.scss */ "./components/Pages/Personal/Personal.module.scss");
/* harmony import */ var _Personal_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_Personal_module_scss__WEBPACK_IMPORTED_MODULE_3__);
/* module decorator */ module = __webpack_require__.hmd(module);

var _jsxFileName = "C:\\Users\\user\\Desktop\\projects\\ait-projects\\foot-bet\\components\\Pages\\Personal\\Personal.jsx";
// components

 // styles 


function Personal() {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: (_Personal_module_scss__WEBPACK_IMPORTED_MODULE_3___default().container),
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_common_Title_Title__WEBPACK_IMPORTED_MODULE_1__.Title, {
      page: "personal",
      textPathName: "title"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: (_Personal_module_scss__WEBPACK_IMPORTED_MODULE_3___default().content),
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Content_Content__WEBPACK_IMPORTED_MODULE_2__.Content, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 13,
    columnNumber: 9
  }, this);
}
_c = Personal;

var _c;

$RefreshReg$(_c, "Personal");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9QYWdlcy9QZXJzb25hbC9Db250ZW50L1VzZXJJbmZvL1VzZXJJbmZvLmpzeCIsIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9QYWdlcy9QZXJzb25hbC9QZXJzb25hbC5qc3giXSwibmFtZXMiOlsiVXNlckluZm8iLCJ1c2VyX2luZm8iLCJ1c2VTZWxlY3RvciIsInNlbGVjdFVzZXIiLCJjb25zb2xlIiwibG9nIiwidXNlU3RhdGUiLCJjaGFuZ2VOYW1lIiwic2V0Q2hhbmdlTmFtZSIsImNoYW5nZURhdGUiLCJzZXRDaGFuZ2VEYXRlIiwiY2hhbmdlUGhvbmUiLCJzZXRDaGFuZ2VQaG9uZSIsImNoYW5nZUVtYWlsIiwic2V0Q2hhbmdlRW1haWwiLCJ1c2VyX2RhdGEiLCJ1c2VyUGhvdG8iLCJzZXRVc2VyUGhvdG8iLCJ1c2VUcmFuc2xhdGlvbiIsInQiLCJzdHlsZXMiLCJ1bmtub3duIiwiY2FtZXJhIiwiY2FtZXJhSWNvbiIsImRpc3BsYXkiLCJlIiwidGFyZ2V0IiwiZmlsZXMiLCJsZW5ndGgiLCJVUkwiLCJjcmVhdGVPYmplY3RVUkwiLCJ1c2VyIiwiZnVsbE5hbWUiLCJ2YWx1ZSIsImNoYW5nZSIsImNhbGVuZGFyIiwiYmlydGhEYXRlIiwicGhvbmUiLCJ0ZWxlcGhvbmUiLCJlbWFpbCIsImtleSIsIlBlcnNvbmFsIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtDQUVBOztDQUVBOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRU8sU0FBU0EsUUFBVCxHQUFvQjtBQUFBOztBQUV2QixNQUFNQyxTQUFTLEdBQUdDLHlEQUFXLENBQUNDLGtFQUFELENBQTdCO0FBQ0FDLFNBQU8sQ0FBQ0MsR0FBUixDQUFZSixTQUFaOztBQUh1QixrQkFNV0ssK0NBQVEsQ0FBQyxLQUFELENBTm5CO0FB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QUFBLFlBTEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREo7QUFXSDtLQWR1QnFCLFEiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcGVyc29uYWwuYzE1MWI2NTk2MDk1ZWNiMTc4MzQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZXJfZGF0YSB9IGZyb20gJy9zcmMvdXNlci91c2VyJ1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgdXNlVHJhbnNsYXRpb24gZnJvbSAnbmV4dC10cmFuc2xhdGUvdXNlVHJhbnNsYXRpb24nXHJcbi8vIHN0eWxlcyBcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL1VzZXJJbmZvLm1vZHVsZS5zY3NzJ1xyXG4vLyBpY29ucyBcclxuaW1wb3J0IHVzZXIgZnJvbSAnL3B1YmxpYy9pbWFnZXMvcGVyc29uYWwvdXNlci1pbnB1dC5zdmcnXHJcbmltcG9ydCB1bmtub3duIGZyb20gJy9wdWJsaWMvaW1hZ2VzL3BlcnNvbmFsL3Vua25vd24uc3ZnJ1xyXG5pbXBvcnQgY2FsZW5kYXIgZnJvbSAnL3B1YmxpYy9pbWFnZXMvcGVyc29uYWwvY2FsZW5kYXIuc3ZnJ1xyXG5pbXBvcnQgZW1haWwgZnJvbSAnL3B1YmxpYy9pbWFnZXMvcGVyc29uYWwvbWFpbC5zdmcnXHJcbmltcG9ydCBwaG9uZSBmcm9tICcvcHVibGljL2ltYWdlcy9wZXJzb25hbC9waG9uZS5zdmcnXHJcbmltcG9ydCBrZXkgZnJvbSAnL3B1YmxpYy9pbWFnZXMvcGVyc29uYWwva2V5LnN2ZydcclxuaW1wb3J0IGNoYW5nZSBmcm9tICcvcHVibGljL2ltYWdlcy9wZXJzb25hbC9jaGFuZ2UucG5nJ1xyXG5pbXBvcnQgY2FtZXJhIGZyb20gJy9wdWJsaWMvaW1hZ2VzL3BlcnNvbmFsL2NhbWVyYS5zdmcnXHJcblxyXG5pbXBvcnQgeyB1c2VTZWxlY3RvciB9IGZyb20gJ3JlYWN0LXJlZHV4J1xyXG5pbXBvcnQgeyBzZWxlY3RVc2VyIH0gZnJvbSAnL3JlZHV4L2ZlYXR1cmVzL3VzZXJTbGljZSdcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBVc2VySW5mbygpIHtcclxuXHJcbiAgICBjb25zdCB1c2VyX2luZm8gPSB1c2VTZWxlY3RvcihzZWxlY3RVc2VyKVxyXG4gICAgY29uc29sZS5sb2codXNlcl9pbmZvKTtcclxuICAgIGNvbnN0XHJcbiAgICAgICAgLy8gc3RhdGVzXHJcbiAgICAgICAgW2NoYW5nZU5hbWUsIHNldENoYW5nZU5hbWVdID0gdXNlU3RhdGUoZmFsc2UpLFxyXG4gICAgICAgIFtjaGFuZ2VEYXRlLCBzZXRDaGFuZ2VEYXRlXSA9IHVzZVN0YXRlKGZhbHNlKSxcclxuICAgICAgICBbY2hhbmdlUGhvbmUsIHNldENoYW5nZVBob25lXSA9IHVzZVN0YXRlKGZhbHNlKSxcclxuICAgICAgICBbY2hhbmdlRW1haWwsIHNldENoYW5nZUVtYWlsXSA9IHVzZVN0YXRlKGZhbHNlKSxcclxuICAgICAgICBbdXNlclBob3RvLCBzZXRVc2VyUGhvdG9dID0gdXNlU3RhdGUodXNlcl9kYXRhLnBob3RvKSxcclxuICAgICAgICB7IHQgfSA9IHVzZVRyYW5zbGF0aW9uKCdwZXJzb25hbCcpXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn0+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGVudH0+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnVzZXJfcGhvdG9fY29udGVudH0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9J3VzZXJfcGhvdG8nPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e3VzZXJQaG90byA/IHVzZXJQaG90byA6IHVua25vd24uc3JjfSBjbGFzc05hbWU9e3N0eWxlcy51c2VyX3Bob3RvfSBhbHQ9J2ljb24nIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17Y2FtZXJhLnNyY30gYWx0PVwiaWNvblwiIGNsYXNzTmFtZT17c3R5bGVzLmNhbWVyYUljb259IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT0nZmlsZSdcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWQ9J3VzZXJfcGhvdG8nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IGRpc3BsYXk6ICdub25lJyB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGUudGFyZ2V0LmZpbGVzLmxlbmd0aCAhPT0gMCAmJiBzZXRVc2VyUGhvdG8oVVJMLmNyZWF0ZU9iamVjdFVSTChlLnRhcmdldC5maWxlc1swXSkpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5pbnB1dHNfY29udGVudH0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5pbmZvX2lucHV0fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17dXNlci5zcmN9IGFsdD0naWNvbicgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgc3R5bGU9eyFjaGFuZ2VOYW1lID9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IGRpc3BsYXk6ICdibG9jaycgfSA6IHsgZGlzcGxheTogJ25vbmUnIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0+e3VzZXJfZGF0YS5mdWxsTmFtZX08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj17dXNlcl9kYXRhLmZ1bGxOYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9J3RleHQnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e2NoYW5nZU5hbWUgP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IGRpc3BsYXk6ICdibG9jaycgfSA6IHsgZGlzcGxheTogJ25vbmUnIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB1c2VyX2RhdGEuZnVsbE5hbWUgPSBlLnRhcmdldC52YWx1ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9e2NoYW5nZS5zcmN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWx0PScnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0Q2hhbmdlTmFtZSghY2hhbmdlTmFtZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5pbmZvX2lucHV0fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17Y2FsZW5kYXIuc3JjfSBhbHQ9JycgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgc3R5bGU9eyFjaGFuZ2VEYXRlID9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IGRpc3BsYXk6ICdibG9jaycgfSA6IHsgZGlzcGxheTogJ25vbmUnIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0+e3VzZXJfZGF0YS5iaXJ0aERhdGV9PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9e3VzZXJfZGF0YS5iaXJ0aERhdGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT0nZGF0ZSdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17Y2hhbmdlRGF0ZSA/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgZGlzcGxheTogJ2Jsb2NrJyB9IDogeyBkaXNwbGF5OiAnbm9uZScgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHVzZXJfZGF0YS5iaXJ0aERhdGUgPSBlLnRhcmdldC52YWx1ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9e2NoYW5nZS5zcmN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWx0PScnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0Q2hhbmdlRGF0ZSghY2hhbmdlRGF0ZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5pbmZvX2lucHV0fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17cGhvbmUuc3JjfSBhbHQ9JycgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgc3R5bGU9eyFjaGFuZ2VQaG9uZSA/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBkaXNwbGF5OiAnYmxvY2snIH0gOiB7IGRpc3BsYXk6ICdub25lJyB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9Pnt1c2VyX2RhdGEudGVsZXBob25lfTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPXt1c2VyX2RhdGEudGVsZXBob25lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9J3RleHQnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e2NoYW5nZVBob25lID9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBkaXNwbGF5OiAnYmxvY2snIH0gOiB7IGRpc3BsYXk6ICdub25lJyB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gdXNlcl9kYXRhLnRlbGVwaG9uZSA9IGUudGFyZ2V0LnZhbHVlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz17Y2hhbmdlLnNyY31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbHQ9JydcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRDaGFuZ2VQaG9uZSghY2hhbmdlUGhvbmUpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuaW5mb19pbnB1dH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e2VtYWlsLnNyY30gYWx0PScnIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIHN0eWxlPXshY2hhbmdlRW1haWwgP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgZGlzcGxheTogJ2Jsb2NrJyB9IDogeyBkaXNwbGF5OiAnbm9uZScgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfT57dXNlcl9kYXRhLmVtYWlsfTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPXt1c2VyX2RhdGEuZW1haWx9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT0ndGV4dCdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17Y2hhbmdlRW1haWwgP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IGRpc3BsYXk6ICdibG9jaycgfSA6IHsgZGlzcGxheTogJ25vbmUnIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB1c2VyX2RhdGEuZW1haWwgPSBlLnRhcmdldC52YWx1ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9e2NoYW5nZS5zcmN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWx0PSdpY29uJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldENoYW5nZUVtYWlsKCFjaGFuZ2VFbWFpbCl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jaGFuZ2VQYXNzd29yZH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e2tleS5zcmN9IGFsdD0nJyAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj17dCgnYm9hcmQuaGVhZGVycy5jaGFuZ2VQYXNzd29yZCcpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9J3Bhc3N3b3JkJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIG9uQ2hhbmdlPXsoZSkgPT4gdXNlcl9kYXRhLmVtYWlsID0gZS50YXJnZXQudmFsdWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPXtjaGFuZ2Uuc3JjfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsdD0naWNvbidcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRDaGFuZ2VFbWFpbCghY2hhbmdlRW1haWwpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcbiIsIi8vIGNvbXBvbmVudHNcclxuaW1wb3J0IHsgVGl0bGUgfSBmcm9tICcuLi9jb21tb24vVGl0bGUvVGl0bGUnXHJcbmltcG9ydCB7IENvbnRlbnQgfSBmcm9tICcuL0NvbnRlbnQvQ29udGVudCdcclxuLy8gc3R5bGVzIFxyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vUGVyc29uYWwubW9kdWxlLnNjc3MnXHJcblxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFBlcnNvbmFsKCkge1xyXG5cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfT5cclxuICAgICAgICAgICAgPFRpdGxlXHJcbiAgICAgICAgICAgICAgICBwYWdlPSdwZXJzb25hbCdcclxuICAgICAgICAgICAgICAgIHRleHRQYXRoTmFtZT0ndGl0bGUnXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGVudH0+XHJcbiAgICAgICAgICAgICAgICA8Q29udGVudCAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9