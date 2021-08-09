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
/* harmony import */ var _src_user_user__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../src/user/user */ "./src/user/user.js");
/* harmony import */ var next_dist_client_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/dist/client/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_dist_client_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_dist_client_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_translate_useTranslation__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next-translate/useTranslation */ "./node_modules/next-translate/lib/esm/useTranslation.js");
/* harmony import */ var _BarItems_module_scss__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./BarItems.module.scss */ "./components/Header/Bar/BarItems/BarItems.module.scss");
/* harmony import */ var _BarItems_module_scss__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_BarItems_module_scss__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _LanguageDrop_LanguageDrop__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./LanguageDrop/LanguageDrop */ "./components/Header/Bar/BarItems/LanguageDrop/LanguageDrop.jsx");
/* harmony import */ var _Logged_Logged__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Logged/Logged */ "./components/Header/Bar/BarItems/Logged/Logged.jsx");
/* harmony import */ var _public_images_header_register_png__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../../../public/images/header/register.png */ "./public/images/header/register.png");
/* harmony import */ var _public_images_header_login_png__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../../../../public/images/header/login.png */ "./public/images/header/login.png");
/* module decorator */ module = __webpack_require__.hmd(module);



var _jsxFileName = "C:\\Users\\user\\Desktop\\projects\\ait-projects\\foot-bet\\components\\Header\\Bar\\BarItems\\BarItems.jsx",
    _s = $RefreshSig$();

// hooks and helpers



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

  var _useTranslation = (0,next_translate_useTranslation__WEBPACK_IMPORTED_MODULE_5__.default)('common'),
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

  var router = (0,next_dist_client_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)(),
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

  console.log(_src_user_user__WEBPACK_IMPORTED_MODULE_3__.user_data);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "".concat((_BarItems_module_scss__WEBPACK_IMPORTED_MODULE_11___default().bar_item_container), " ").concat(bar_items, " ").concat(router.pathname !== '/' ? (_BarItems_module_scss__WEBPACK_IMPORTED_MODULE_11___default().for_mobile) : null),
      children: [userLogged ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Logged_Logged__WEBPACK_IMPORTED_MODULE_8__.Logged, {
        data: _src_user_user__WEBPACK_IMPORTED_MODULE_3__.user_data
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 60,
        columnNumber: 35
      }, this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: (_BarItems_module_scss__WEBPACK_IMPORTED_MODULE_11___default().auth_container),
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: (_BarItems_module_scss__WEBPACK_IMPORTED_MODULE_11___default().auth_buttons),
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: (_BarItems_module_scss__WEBPACK_IMPORTED_MODULE_11___default().sign_up_button),
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_6___default()), {
              href: registration_path,
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
                src: _public_images_header_register_png__WEBPACK_IMPORTED_MODULE_9__.default.src,
                alt: ""
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 65,
                columnNumber: 41
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 64,
              columnNumber: 37
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_6___default()), {
              href: registration_path,
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                children: registration
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 68,
                columnNumber: 41
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 67,
              columnNumber: 37
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 63,
            columnNumber: 33
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: (_BarItems_module_scss__WEBPACK_IMPORTED_MODULE_11___default().sign_in_button),
            onClick: loginModalHandle,
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
              src: _public_images_header_login_png__WEBPACK_IMPORTED_MODULE_10__.default.src,
              alt: ""
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 79,
              columnNumber: 37
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
              children: login
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 80,
              columnNumber: 37
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 75,
            columnNumber: 33
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 62,
          columnNumber: 29
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 61,
        columnNumber: 25
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: (_BarItems_module_scss__WEBPACK_IMPORTED_MODULE_11___default().lang_button),
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: (_BarItems_module_scss__WEBPACK_IMPORTED_MODULE_11___default().lang_button_content),
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
            lineNumber: 95,
            columnNumber: 29
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
            src: languagesTitle.icon,
            alt: "lang-flag"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 100,
            columnNumber: 29
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 90,
          columnNumber: 25
        }, this), showDrop && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_LanguageDrop_LanguageDrop__WEBPACK_IMPORTED_MODULE_7__.LanguageDrop, {
          click: changeLangTitle,
          onClose: function onClose() {
            return setShowDrop(false);
          },
          data: languages_data
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 105,
          columnNumber: 38
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 89,
        columnNumber: 21
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 17
    }, this)
  }, void 0, false);
}

_s(BarItems, "2VsbiC+S3/UN+KsiMHOVZcQaaM8=", false, function () {
  return [next_translate_useTranslation__WEBPACK_IMPORTED_MODULE_5__.default, next_dist_client_router__WEBPACK_IMPORTED_MODULE_4__.useRouter];
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


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9IZWFkZXIvQmFyL0Jhckl0ZW1zL0Jhckl0ZW1zLmpzeCJdLCJuYW1lcyI6WyJCYXJJdGVtcyIsInJlZ2lzdHJhdGlvbiIsImxvZ2luIiwicmVnaXN0cmF0aW9uX3BhdGgiLCJsb2dpbk1vZGFsSGFuZGxlIiwiYmFyX2l0ZW1zIiwidXNlckxvZ2dlZCIsInVzZVRyYW5zbGF0aW9uIiwidCIsImxhbmciLCJ1c2VTdGF0ZSIsImxhbmd1YWdlcyIsImxhbmd1YWdlc1RpdGxlIiwic2V0TGFuZ3VhZ2VzVGl0bGUiLCJ1c2VFZmZlY3QiLCJuZXdMYW5nIiwiZWwiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJsYW5ndWFnZXNfZGF0YSIsInNob3dEcm9wIiwic2V0U2hvd0Ryb3AiLCJjaGFuZ2VMYW5nVGl0bGUiLCJldmVudCIsImxhbmdfdGl0bGVfZGF0YSIsImZpbHRlciIsInRhcmdldCIsImNsYXNzTmFtZSIsInRyYW5zbGF0aW9uUGF0aCIsInRyYW5zbGF0ZSIsImtleSIsImNvbnNvbGUiLCJsb2ciLCJ1c2VyX2RhdGEiLCJzdHlsZXMiLCJwYXRobmFtZSIsInJlZ2lzdGVyX2ljb24iLCJsb2dpbl9pY29uIiwiZGlzcGxheSIsImNvbnRlbnRPblRpdGxlIiwiaWNvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0NBRUE7O0NBRUE7O0NBRUE7O0FBQ0E7QUFDQTtDQUVBOztBQUNBO0FBQ0E7QUFPTyxTQUFTQSxRQUFULE9BTVc7QUFBQTs7QUFBQSxNQUxkQyxZQUtjLFFBTGRBLFlBS2M7QUFBQSxNQUpkQyxLQUljLFFBSmRBLEtBSWM7QUFBQSxNQUhkQyxpQkFHYyxRQUhkQSxpQkFHYztBQUFBLE1BRmRDLGdCQUVjLFFBRmRBLGdCQUVjO0FBQUEsTUFEZEMsU0FDYyxRQURkQSxTQUNjO0FBQUEsTUFBZEMsVUFBYyxRQUFkQSxVQUFj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QTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUZSLGVBOEJJO0FBQUssaUJBQVMsRUFBRWdDLDJFQUFoQjtBQUFBLGdDQUNJO0FBQ0ksbUJBQVMsRUFBRUEsbUZBRGY7QUFFSSxlQUFLLEVBQUVkLFFBQVEsR0FBRztBQUFFa0IsbUJBQU8sRUFBRTtBQUFYLFdBQUgsR0FBeUIsSUFGNUM7QUFHSSxpQkFBTyxFQUFFO0FBQUEsbUJBQU1qQixXQUFXLENBQUMsSUFBRCxDQUFqQjtBQUFBLFdBSGI7QUFBQSxrQ0FLSTtBQUFBLHNCQUVRUSxTQUFTLFdBQUlqQixjQUFjLENBQUMyQixjQUFuQjtBQUZqQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUxKLGVBVUk7QUFDSSxlQUFHLEVBQUUzQixjQUFjLENBQUM0QixJQUR4QjtBQUVJLGVBQUcsRUFBQztBQUZSO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBVko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURKLEVBZ0JLcEIsUUFBUSxpQkFBSSw4REFBQyxvRUFBRDtBQUNULGVBQUssRUFBRUUsZUFERTtBQUVULGlCQUFPLEVBQUU7QUFBQSxtQkFBTUQsV0FBVyxDQUFDLEtBQUQsQ0FBakI7QUFBQSxXQUZBO0FBR1QsY0FBSSxFQUFFRjtBQUhHO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBaEJqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0E5Qko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRlIsbUJBREo7QUEyREg7O0dBNUZlbkIsUTtVQVFZTyxrRSxFQVVYVyw4RDs7O0tBbEJEbEIsUSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9fYXBwLjdiZWZmZjc4MmYwZTBkYjQxYzk3LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBob29rcyBhbmQgaGVscGVyc1xyXG5pbXBvcnQgeyBsYW5ndWFnZXMgfSBmcm9tICcuL0xhbmd1YWdlRHJvcENvbmZpZ3MvbGFuZy1jb25maWdzJ1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IHVzZXJfZGF0YSB9IGZyb20gJy9zcmMvdXNlci91c2VyJ1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L2Rpc3QvY2xpZW50L3JvdXRlcidcclxuLy8gdHJhbnNsYXRpb24gXHJcbmltcG9ydCB1c2VUcmFuc2xhdGlvbiBmcm9tICduZXh0LXRyYW5zbGF0ZS91c2VUcmFuc2xhdGlvbidcclxuLy8gc3R5bGVzIFxyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vQmFySXRlbXMubW9kdWxlLnNjc3MnXHJcbi8vIGNvbXBvbmVudHNcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xyXG5pbXBvcnQgeyBMYW5ndWFnZURyb3AgfSBmcm9tICcuL0xhbmd1YWdlRHJvcC9MYW5ndWFnZURyb3AnXHJcbmltcG9ydCB7IExvZ2dlZCB9IGZyb20gJy4vTG9nZ2VkL0xvZ2dlZCdcclxuLy8gaWNvbnNcclxuaW1wb3J0IHJlZ2lzdGVyX2ljb24gZnJvbSAnL3B1YmxpYy9pbWFnZXMvaGVhZGVyL3JlZ2lzdGVyLnBuZydcclxuaW1wb3J0IGxvZ2luX2ljb24gZnJvbSAnL3B1YmxpYy9pbWFnZXMvaGVhZGVyL2xvZ2luLnBuZydcclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIEJhckl0ZW1zKHtcclxuICAgIHJlZ2lzdHJhdGlvbixcclxuICAgIGxvZ2luLFxyXG4gICAgcmVnaXN0cmF0aW9uX3BhdGgsXHJcbiAgICBsb2dpbk1vZGFsSGFuZGxlLFxyXG4gICAgYmFyX2l0ZW1zLFxyXG4gICAgdXNlckxvZ2dlZCB9KSB7XHJcbiAgICAgICAgXHJcbiAgICAgICAgY29uc3QgeyB0LCBsYW5nIH0gPSB1c2VUcmFuc2xhdGlvbignY29tbW9uJyk7XHJcbiAgICAgICAgY29uc3QgW2xhbmd1YWdlc1RpdGxlLCBzZXRMYW5ndWFnZXNUaXRsZV0gPSB1c2VTdGF0ZShsYW5ndWFnZXNbMV0pO1xyXG4gICAgICAgIHVzZUVmZmVjdCggKCk9PntcclxuICAgICAgICAgICAgY29uc3QgbmV3TGFuZyA9IGxhbmd1YWdlcy5maW5kKCBlbCA9PiBlbC5sYW5nID09PSBsYW5nICk7XHJcbiAgICAgICAgICAgIGlmICggbmV3TGFuZyApIHtcclxuICAgICAgICAgICAgICAgIHNldExhbmd1YWdlc1RpdGxlKCBuZXdMYW5nICk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LCBbbGFuZ10gKTsgXHJcbiAgICAgICAgXHJcbiAgICAgICAgY29uc3RcclxuICAgICAgICByb3V0ZXIgPSB1c2VSb3V0ZXIoKSxcclxuICAgICAgICBsYW5ndWFnZXNfZGF0YSA9IGxhbmd1YWdlcyxcclxuXHJcbiAgICAgICAgW3Nob3dEcm9wLCBzZXRTaG93RHJvcF0gPSB1c2VTdGF0ZShmYWxzZSksXHJcblxyXG4gICAgICAgIGNoYW5nZUxhbmdUaXRsZSA9IChldmVudCkgPT4ge1xyXG4gICAgICAgICAgICBsZXQgbGFuZ190aXRsZV9kYXRhID0gbGFuZ3VhZ2VzX2RhdGEuZmlsdGVyKGVsID0+IGVsLmxhbmcgPT09IGV2ZW50LnRhcmdldC5jbGFzc05hbWUpXHJcbiAgICAgICAgICAgIHNldExhbmd1YWdlc1RpdGxlKGxhbmdfdGl0bGVfZGF0YVswXSlcclxuICAgICAgICAgICAgc2V0U2hvd0Ryb3AoZmFsc2UpXHJcbiAgICAgICAgfSxcclxuICAgICAgICBcclxuICAgICAgICB0cmFuc2xhdGlvblBhdGggPSAnaGVhZGVyLmxhbmcuJyxcclxuICAgICAgICB0cmFuc2xhdGUgPSAoa2V5KSA9PiB0KGAke3RyYW5zbGF0aW9uUGF0aH0ke2tleX1gKVxyXG5cclxuICAgIGNvbnNvbGUubG9nKCB1c2VyX2RhdGEgKTtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake3N0eWxlcy5iYXJfaXRlbV9jb250YWluZXJ9ICR7YmFyX2l0ZW1zfSAke3JvdXRlci5wYXRobmFtZSAhPT0gJy8nID8gc3R5bGVzLmZvcl9tb2JpbGUgOiBudWxsfWB9PlxyXG4gICAgICAgICAgICAgICAgICAgIHt1c2VyTG9nZ2VkID8gPExvZ2dlZCBkYXRhPXt1c2VyX2RhdGF9IC8+IDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5hdXRoX2NvbnRhaW5lcn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmF1dGhfYnV0dG9uc30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5zaWduX3VwX2J1dHRvbn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9e3JlZ2lzdHJhdGlvbl9wYXRofT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtyZWdpc3Rlcl9pY29uLnNyY30gYWx0PVwiXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPXtyZWdpc3RyYXRpb25fcGF0aH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlZ2lzdHJhdGlvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuc2lnbl9pbl9idXR0b259XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2xvZ2luTW9kYWxIYW5kbGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17bG9naW5faWNvbi5zcmN9IGFsdD1cIlwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxvZ2luXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5sYW5nX2J1dHRvbn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmxhbmdfYnV0dG9uX2NvbnRlbnR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17c2hvd0Ryb3AgPyB7IGRpc3BsYXk6ICdub25lJyB9IDogbnVsbH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldFNob3dEcm9wKHRydWUpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zbGF0ZShgJHtsYW5ndWFnZXNUaXRsZS5jb250ZW50T25UaXRsZX1gKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9e2xhbmd1YWdlc1RpdGxlLmljb259XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWx0PVwibGFuZy1mbGFnXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7c2hvd0Ryb3AgJiYgPExhbmd1YWdlRHJvcFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2s9e2NoYW5nZUxhbmdUaXRsZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xvc2U9eygpID0+IHNldFNob3dEcm9wKGZhbHNlKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE9e2xhbmd1YWdlc19kYXRhfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPn1cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2ID5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIDwvPlxyXG4gICAgKVxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=