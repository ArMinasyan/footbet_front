self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./components/Header/Bar/BarItems/BarItems.jsx":
/*!*****************************************************!*\
  !*** ./components/Header/Bar/BarItems/BarItems.jsx ***!
  \*****************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BarItems": function() { return /* binding */ BarItems; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _LanguageDropConfigs_lang_configs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./LanguageDropConfigs/lang-configs */ "./components/Header/Bar/BarItems/LanguageDropConfigs/lang-configs.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_dist_client_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/dist/client/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_dist_client_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_dist_client_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_translate_useTranslation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next-translate/useTranslation */ "./node_modules/next-translate/lib/esm/useTranslation.js");
/* harmony import */ var _BarItems_module_scss__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./BarItems.module.scss */ "./components/Header/Bar/BarItems/BarItems.module.scss");
/* harmony import */ var _BarItems_module_scss__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_BarItems_module_scss__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _LanguageDrop_LanguageDrop__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./LanguageDrop/LanguageDrop */ "./components/Header/Bar/BarItems/LanguageDrop/LanguageDrop.jsx");
/* harmony import */ var _Logged_Logged__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Logged/Logged */ "./components/Header/Bar/BarItems/Logged/Logged.jsx");
/* harmony import */ var _public_images_header_register_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../../../public/images/header/register.png */ "./public/images/header/register.png");
/* harmony import */ var _public_images_header_login_png__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../../../public/images/header/login.png */ "./public/images/header/login.png");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _redux_features_userSlice__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../redux/features/userSlice */ "./redux/features/userSlice.js");
/* module decorator */ module = __webpack_require__.hmd(module);



var _jsxFileName = "C:\\Users\\user\\Desktop\\projects\\ait-projects\\foot-bet\\components\\Header\\Bar\\BarItems\\BarItems.jsx",
    _s = $RefreshSig$();

// hooks and helpers

 // import { user_data } from '/src/user/user'

 // translation 

 // styles 

 // components



 // icons





function BarItems(_ref) {
  _s();

  var registration = _ref.registration,
      login = _ref.login,
      registration_path = _ref.registration_path,
      loginModalHandle = _ref.loginModalHandle,
      bar_items = _ref.bar_items,
      userLogged = _ref.userLogged;

  var _useTranslation = (0,next_translate_useTranslation__WEBPACK_IMPORTED_MODULE_4__.default)('common'),
      t = _useTranslation.t,
      lang = _useTranslation.lang;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(_LanguageDropConfigs_lang_configs__WEBPACK_IMPORTED_MODULE_1__.languages[1]),
      languagesTitle = _useState[0],
      setLanguagesTitle = _useState[1];

  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function () {
    var newLang = _LanguageDropConfigs_lang_configs__WEBPACK_IMPORTED_MODULE_1__.languages.find(function (el) {
      return el.lang === lang;
    });

    if (newLang) {
      setLanguagesTitle(newLang);
    }
  }, [lang]);

  var router = (0,next_dist_client_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)(),
      languages_data = _LanguageDropConfigs_lang_configs__WEBPACK_IMPORTED_MODULE_1__.languages,
      _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false),
      showDrop = _useState2[0],
      setShowDrop = _useState2[1],
      changeLangTitle = function changeLangTitle(event) {
    var lang_title_data = languages_data.filter(function (el) {
      return el.lang === event.target.className;
    });
    setLanguagesTitle(lang_title_data[0]);
    setShowDrop(false);
  },
      translationPath = 'header.lang.',
      translate = function translate(key) {
    return t("".concat(translationPath).concat(key));
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "".concat((_BarItems_module_scss__WEBPACK_IMPORTED_MODULE_12___default().bar_item_container), " ").concat(bar_items, " ").concat(router.pathname !== '/' ? (_BarItems_module_scss__WEBPACK_IMPORTED_MODULE_12___default().for_mobile) : null),
      children: [userLogged ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Logged_Logged__WEBPACK_IMPORTED_MODULE_7__.Logged, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 61,
        columnNumber: 35
      }, this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: (_BarItems_module_scss__WEBPACK_IMPORTED_MODULE_12___default().auth_container),
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: (_BarItems_module_scss__WEBPACK_IMPORTED_MODULE_12___default().auth_buttons),
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: (_BarItems_module_scss__WEBPACK_IMPORTED_MODULE_12___default().sign_up_button),
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_5___default()), {
              href: registration_path,
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
                src: _public_images_header_register_png__WEBPACK_IMPORTED_MODULE_8__.default.src,
                alt: ""
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 66,
                columnNumber: 41
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 65,
              columnNumber: 37
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_5___default()), {
              href: registration_path,
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                children: registration
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 69,
                columnNumber: 41
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 68,
              columnNumber: 37
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 64,
            columnNumber: 33
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: (_BarItems_module_scss__WEBPACK_IMPORTED_MODULE_12___default().sign_in_button),
            onClick: loginModalHandle,
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
              src: _public_images_header_login_png__WEBPACK_IMPORTED_MODULE_9__.default.src,
              alt: ""
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 80,
              columnNumber: 37
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
              children: login
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 81,
              columnNumber: 37
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 76,
            columnNumber: 33
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 63,
          columnNumber: 29
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 62,
        columnNumber: 25
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: (_BarItems_module_scss__WEBPACK_IMPORTED_MODULE_12___default().lang_button),
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: (_BarItems_module_scss__WEBPACK_IMPORTED_MODULE_12___default().lang_button_content),
          style: showDrop ? {
            display: 'none'
          } : null,
          onClick: function onClick() {
            return setShowDrop(true);
          },
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
            children: translate("".concat(languagesTitle.contentOnTitle))
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 96,
            columnNumber: 29
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
            src: languagesTitle.icon,
            alt: "lang-flag"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 101,
            columnNumber: 29
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 91,
          columnNumber: 25
        }, this), showDrop && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_LanguageDrop_LanguageDrop__WEBPACK_IMPORTED_MODULE_6__.LanguageDrop, {
          click: changeLangTitle,
          onClose: function onClose() {
            return setShowDrop(false);
          },
          data: languages_data
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 106,
          columnNumber: 38
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 90,
        columnNumber: 21
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 17
    }, this)
  }, void 0, false);
}

_s(BarItems, "2VsbiC+S3/UN+KsiMHOVZcQaaM8=", false, function () {
  return [next_translate_useTranslation__WEBPACK_IMPORTED_MODULE_4__.default, next_dist_client_router__WEBPACK_IMPORTED_MODULE_3__.useRouter];
});

_c = BarItems;

var _c;

$RefreshReg$(_c, "BarItems");

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

/***/ "./components/Header/Bar/BarItems/Logged/Logged.jsx":
/*!**********************************************************!*\
  !*** ./components/Header/Bar/BarItems/Logged/Logged.jsx ***!
  \**********************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Logged": function() { return /* binding */ Logged; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _redux_features_userSlice__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../redux/features/userSlice */ "./redux/features/userSlice.js");
/* harmony import */ var _Logged_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Logged.module.scss */ "./components/Header/Bar/BarItems/Logged/Logged.module.scss");
/* harmony import */ var _Logged_module_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_Logged_module_scss__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _LoggedDrop_LoggedDrop__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./LoggedDrop/LoggedDrop */ "./components/Header/Bar/BarItems/Logged/LoggedDrop/LoggedDrop.jsx");
/* harmony import */ var _LoggedWallper_LoggedWallper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./LoggedWallper/LoggedWallper */ "./components/Header/Bar/BarItems/Logged/LoggedWallper/LoggedWallper.jsx");
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "C:\\Users\\user\\Desktop\\projects\\ait-projects\\foot-bet\\components\\Header\\Bar\\BarItems\\Logged\\Logged.jsx",
    _s = $RefreshSig$();

// styles






function Logged() {
  _s();

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false),
      showUserDrop = _useState[0],
      setShowUserDrop = _useState[1];

  var data = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)(_redux_features_userSlice__WEBPACK_IMPORTED_MODULE_3__.selectUser);
  console.log(data);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: (_Logged_module_scss__WEBPACK_IMPORTED_MODULE_6___default().container),
    style: showUserDrop ? {
      padding: '17.5px 0'
    } : null,
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: (_Logged_module_scss__WEBPACK_IMPORTED_MODULE_6___default().content),
      children: !showUserDrop ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_LoggedWallper_LoggedWallper__WEBPACK_IMPORTED_MODULE_5__.LoggedWallper, {
        img: data.photo,
        fullName: data.username,
        click: function click() {
          return setShowUserDrop(true);
        }
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 21
      }, this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_LoggedDrop_LoggedDrop__WEBPACK_IMPORTED_MODULE_4__.LoggedDrop, {
        onClose: function onClose() {
          return setShowUserDrop(false);
        },
        user: data
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 21
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 13
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 18,
    columnNumber: 9
  }, this);
}

_s(Logged, "8A63VmpsCgwtbeEeA4boZQy08QQ=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector];
});

_c = Logged;

var _c;

$RefreshReg$(_c, "Logged");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9IZWFkZXIvQmFyL0Jhckl0ZW1zL0Jhckl0ZW1zLmpzeCIsIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9IZWFkZXIvQmFyL0Jhckl0ZW1zL0xvZ2dlZC9Mb2dnZWQuanN4Il0sIm5hbWVzIjpbIkJhckl0ZW1zIiwicmVnaXN0cmF0aW9uIiwibG9naW4iLCJyZWdpc3RyYXRpb25fcGF0aCIsImxvZ2luTW9kYWxIYW5kbGUiLCJiYXJfaXRlbXMiLCJ1c2VyTG9nZ2VkIiwidXNlVHJhbnNsYXRpb24iLCJ0IiwibGFuZyIsInVzZVN0YXRlIiwibGFuZ3VhZ2VzIiwibGFuZ3VhZ2VzVGl0bGUiLCJzZXRMYW5ndWFnZXNUaXRsZSIsInVzZUVmZmVjdCIsIm5ld0xhbmciLCJlbCIsInJvdXRlciIsInVzZVJvdXRlciIsImxhbmd1YWdlc19kYXRhIiwic2hvd0Ryb3AiLCJzZXRTaG93RHJvcCIsImNoYW5nZUxhbmdUaXRsZSIsImV2ZW50IiwibGFuZ190aXRsZV9kYXRhIiwiZmlsdGVyIiwidGFyZ2V0IiwiY2xhc3NOYW1lIiwidHJhbnNsYXRpb25QYXRoIiwidHJhbnNsYXRlIiwia2V5Iiwic3R5bGVzIiwicGF0aG5hbWUiLCJyZWdpc3Rlcl9pY29uIiwibG9naW5faWNvbiIsImRpc3BsYXkiLCJjb250ZW50T25UaXRsZSIsImljb24iLCJMb2dnZWQiLCJzaG93VXNlckRyb3AiLCJzZXRTaG93VXNlckRyb3AiLCJkYXRhIiwidXNlU2VsZWN0b3IiLCJzZWxlY3RVc2VyIiwiY29uc29sZSIsImxvZyIsInBhZGRpbmciLCJwaG90byIsInVzZXJuYW1lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7Q0FFQTs7Q0FFQTs7Q0FFQTs7Q0FFQTs7QUFDQTtBQUNBO0NBRUE7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFPTyxTQUFTQSxRQUFULE9BTVc7QUFB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aEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFTyxTQUFTc0MsTUFBVCxHQUFtQjtBQUFBOztBQUFBLGtCQUlnQjVCLCtDQUFRLENBQUMsS0FBRCxDQUp4QjtBQUFBLE1BSWpCNkIsWUFKaUI7QUFBQSxNQUlIQyxlQUpHOztBQU10QixNQUFNQyxJQUFJLEdBQUdDLHdEQUFXLENBQUNDLGlFQUFELENBQXhCO0FBQ0FDLFNBQU8sQ0FBQ0MsR0FBUixDQUFZSixJQUFaO0FBQ0Esc0JBQ0k7QUFDSSxhQUFTLEVBQUVWLHNFQURmO0FBRUksU0FBSyxFQUFFUSxZQUFZLEdBQUc7QUFBRU8sYUFBTyxFQUFFO0FBQVgsS0FBSCxHQUE2QixJQUZwRDtBQUFBLDJCQUdJO0FBQUssZUFBUyxFQUFFZixvRUFBaEI7QUFBQSxnQkFDSyxDQUFDUSxZQUFELGdCQUNHLDhEQUFDLHVFQUFEO0FBQ0ksV0FBRyxFQUFFRSxJQUFJLENBQUNNLEtBRGQ7QUFFSSxnQkFBUSxFQUFFTixJQUFJLENBQUNPLFFBRm5CO0FBR0ksYUFBSyxFQUFFO0FBQUEsaUJBQU1SLGVBQWUsQ0FBQyxJQUFELENBQXJCO0FBQUE7QUFIWDtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREgsZ0JBTUcsOERBQUMsOERBQUQ7QUFDSSxlQUFPLEVBQUU7QUFBQSxpQkFBTUEsZUFBZSxDQUFDLEtBQUQsQ0FBckI7QUFBQSxTQURiO0FBRUksWUFBSSxFQUFFQztBQUZWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFQUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSEo7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURKO0FBbUJIOztHQTNCZUgsTTtVQU1DSSxvRDs7O0tBTkRKLE0iLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvX2FwcC4xZmNjM2ExNWRjMDAwM2IxYWRiYy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gaG9va3MgYW5kIGhlbHBlcnNcclxuaW1wb3J0IHsgbGFuZ3VhZ2VzIH0gZnJvbSAnLi9MYW5ndWFnZURyb3BDb25maWdzL2xhbmctY29uZmlncydcclxuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0J1xyXG4vLyBpbXBvcnQgeyB1c2VyX2RhdGEgfSBmcm9tICcvc3JjL3VzZXIvdXNlcidcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9kaXN0L2NsaWVudC9yb3V0ZXInXHJcbi8vIHRyYW5zbGF0aW9uIFxyXG5pbXBvcnQgdXNlVHJhbnNsYXRpb24gZnJvbSAnbmV4dC10cmFuc2xhdGUvdXNlVHJhbnNsYXRpb24nXHJcbi8vIHN0eWxlcyBcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL0Jhckl0ZW1zLm1vZHVsZS5zY3NzJ1xyXG4vLyBjb21wb25lbnRzXHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcclxuaW1wb3J0IHsgTGFuZ3VhZ2VEcm9wIH0gZnJvbSAnLi9MYW5ndWFnZURyb3AvTGFuZ3VhZ2VEcm9wJ1xyXG5pbXBvcnQgeyBMb2dnZWQgfSBmcm9tICcuL0xvZ2dlZC9Mb2dnZWQnXHJcbi8vIGljb25zXHJcbmltcG9ydCByZWdpc3Rlcl9pY29uIGZyb20gJy9wdWJsaWMvaW1hZ2VzL2hlYWRlci9yZWdpc3Rlci5wbmcnXHJcbmltcG9ydCBsb2dpbl9pY29uIGZyb20gJy9wdWJsaWMvaW1hZ2VzL2hlYWRlci9sb2dpbi5wbmcnXHJcbmltcG9ydCB7IHVzZVNlbGVjdG9yIH0gZnJvbSAncmVhY3QtcmVkdXgnXHJcbmltcG9ydCB7IHNlbGVjdFVzZXIgfSBmcm9tICcuLi8uLi8uLi8uLi9yZWR1eC9mZWF0dXJlcy91c2VyU2xpY2UnXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBCYXJJdGVtcyh7XHJcbiAgICByZWdpc3RyYXRpb24sXHJcbiAgICBsb2dpbixcclxuICAgIHJlZ2lzdHJhdGlvbl9wYXRoLFxyXG4gICAgbG9naW5Nb2RhbEhhbmRsZSxcclxuICAgIGJhcl9pdGVtcyxcclxuICAgIHVzZXJMb2dnZWQgfSkge1xyXG4gICAgICAgIFxyXG4gICAgICAgIGNvbnN0IHsgdCwgbGFuZyB9ID0gdXNlVHJhbnNsYXRpb24oJ2NvbW1vbicpO1xyXG4gICAgICAgIGNvbnN0IFtsYW5ndWFnZXNUaXRsZSwgc2V0TGFuZ3VhZ2VzVGl0bGVdID0gdXNlU3RhdGUobGFuZ3VhZ2VzWzFdKTtcclxuICAgICAgICB1c2VFZmZlY3QoICgpPT57XHJcbiAgICAgICAgICAgIGNvbnN0IG5ld0xhbmcgPSBsYW5ndWFnZXMuZmluZCggZWwgPT4gZWwubGFuZyA9PT0gbGFuZyApO1xyXG4gICAgICAgICAgICBpZiAoIG5ld0xhbmcgKSB7XHJcbiAgICAgICAgICAgICAgICBzZXRMYW5ndWFnZXNUaXRsZSggbmV3TGFuZyApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSwgW2xhbmddICk7IFxyXG4gICAgICAgIFxyXG4gICAgICAgIGNvbnN0XHJcbiAgICAgICAgcm91dGVyID0gdXNlUm91dGVyKCksXHJcbiAgICAgICAgbGFuZ3VhZ2VzX2RhdGEgPSBsYW5ndWFnZXMsXHJcblxyXG4gICAgICAgIFtzaG93RHJvcCwgc2V0U2hvd0Ryb3BdID0gdXNlU3RhdGUoZmFsc2UpLFxyXG5cclxuICAgICAgICBjaGFuZ2VMYW5nVGl0bGUgPSAoZXZlbnQpID0+IHtcclxuICAgICAgICAgICAgbGV0IGxhbmdfdGl0bGVfZGF0YSA9IGxhbmd1YWdlc19kYXRhLmZpbHRlcihlbCA9PiBlbC5sYW5nID09PSBldmVudC50YXJnZXQuY2xhc3NOYW1lKVxyXG4gICAgICAgICAgICBzZXRMYW5ndWFnZXNUaXRsZShsYW5nX3RpdGxlX2RhdGFbMF0pXHJcbiAgICAgICAgICAgIHNldFNob3dEcm9wKGZhbHNlKVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXHJcbiAgICAgICAgdHJhbnNsYXRpb25QYXRoID0gJ2hlYWRlci5sYW5nLicsXHJcbiAgICAgICAgdHJhbnNsYXRlID0gKGtleSkgPT4gdChgJHt0cmFuc2xhdGlvblBhdGh9JHtrZXl9YClcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtzdHlsZXMuYmFyX2l0ZW1fY29udGFpbmVyfSAke2Jhcl9pdGVtc30gJHtyb3V0ZXIucGF0aG5hbWUgIT09ICcvJyA/IHN0eWxlcy5mb3JfbW9iaWxlIDogbnVsbH1gfT5cclxuICAgICAgICAgICAgICAgICAgICB7dXNlckxvZ2dlZCA/IDxMb2dnZWQgLz4gOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmF1dGhfY29udGFpbmVyfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYXV0aF9idXR0b25zfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnNpZ25fdXBfYnV0dG9ufT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj17cmVnaXN0cmF0aW9uX3BhdGh9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e3JlZ2lzdGVyX2ljb24uc3JjfSBhbHQ9XCJcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9e3JlZ2lzdHJhdGlvbl9wYXRofT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVnaXN0cmF0aW9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5zaWduX2luX2J1dHRvbn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17bG9naW5Nb2RhbEhhbmRsZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtsb2dpbl9pY29uLnNyY30gYWx0PVwiXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbG9naW5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmxhbmdfYnV0dG9ufT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMubGFuZ19idXR0b25fY29udGVudH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXtzaG93RHJvcCA/IHsgZGlzcGxheTogJ25vbmUnIH0gOiBudWxsfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0U2hvd0Ryb3AodHJ1ZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNsYXRlKGAke2xhbmd1YWdlc1RpdGxlLmNvbnRlbnRPblRpdGxlfWApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz17bGFuZ3VhZ2VzVGl0bGUuaWNvbn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbHQ9XCJsYW5nLWZsYWdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtzaG93RHJvcCAmJiA8TGFuZ3VhZ2VEcm9wXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGljaz17Y2hhbmdlTGFuZ1RpdGxlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbG9zZT17KCkgPT4gc2V0U2hvd0Ryb3AoZmFsc2UpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YT17bGFuZ3VhZ2VzX2RhdGF9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+fVxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXYgPlxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgPC8+XHJcbiAgICApXHJcbn1cclxuIiwiLy8gc3R5bGVzXHJcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyB1c2VTZWxlY3RvciB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuaW1wb3J0IHsgc2VsZWN0VXNlciB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL3JlZHV4L2ZlYXR1cmVzL3VzZXJTbGljZSc7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9Mb2dnZWQubW9kdWxlLnNjc3MnXHJcbmltcG9ydCB7IExvZ2dlZERyb3AgfSBmcm9tICcuL0xvZ2dlZERyb3AvTG9nZ2VkRHJvcCc7XHJcbmltcG9ydCB7IExvZ2dlZFdhbGxwZXIgfSBmcm9tICcuL0xvZ2dlZFdhbGxwZXIvTG9nZ2VkV2FsbHBlcidcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBMb2dnZWQoICkge1xyXG4gICAgY29uc3RcclxuICAgICAgICAvLyBzdGF0ZXNcclxuICAgICAgICAvL2NoYW5nZSB1c2VyIGRyb3Bkb3duXHJcbiAgICAgICAgW3Nob3dVc2VyRHJvcCwgc2V0U2hvd1VzZXJEcm9wXSA9IHVzZVN0YXRlKGZhbHNlKVxyXG5cclxuICAgIGNvbnN0IGRhdGEgPSB1c2VTZWxlY3RvcihzZWxlY3RVc2VyKTtcclxuICAgIGNvbnNvbGUubG9nKGRhdGEpO1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn1cclxuICAgICAgICAgICAgc3R5bGU9e3Nob3dVc2VyRHJvcCA/IHsgcGFkZGluZzogJzE3LjVweCAwJyB9IDogbnVsbH0+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGVudH0+XHJcbiAgICAgICAgICAgICAgICB7IXNob3dVc2VyRHJvcCA/XHJcbiAgICAgICAgICAgICAgICAgICAgPExvZ2dlZFdhbGxwZXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgaW1nPXtkYXRhLnBob3RvfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmdWxsTmFtZT17ZGF0YS51c2VybmFtZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2s9eygpID0+IHNldFNob3dVc2VyRHJvcCh0cnVlKX1cclxuICAgICAgICAgICAgICAgICAgICAvPiA6XHJcbiAgICAgICAgICAgICAgICAgICAgPExvZ2dlZERyb3BcclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbG9zZT17KCkgPT4gc2V0U2hvd1VzZXJEcm9wKGZhbHNlKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgdXNlcj17ZGF0YX1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9