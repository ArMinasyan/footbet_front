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
/* harmony import */ var _BarItems_module_scss__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./BarItems.module.scss */ "./components/Header/Bar/BarItems/BarItems.module.scss");
/* harmony import */ var _BarItems_module_scss__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_BarItems_module_scss__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _LanguageDrop_LanguageDrop__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./LanguageDrop/LanguageDrop */ "./components/Header/Bar/BarItems/LanguageDrop/LanguageDrop.jsx");
/* harmony import */ var _Logged_Logged__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Logged/Logged */ "./components/Header/Bar/BarItems/Logged/Logged.jsx");
/* harmony import */ var _public_images_header_register_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../../../public/images/header/register.png */ "./public/images/header/register.png");
/* harmony import */ var _public_images_header_login_png__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../../../public/images/header/login.png */ "./public/images/header/login.png");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
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

  var user_data = (0,react_redux__WEBPACK_IMPORTED_MODULE_10__.useSelector)(selectUser);
  console.log(user_data);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "".concat((_BarItems_module_scss__WEBPACK_IMPORTED_MODULE_11___default().bar_item_container), " ").concat(bar_items, " ").concat(router.pathname !== '/' ? (_BarItems_module_scss__WEBPACK_IMPORTED_MODULE_11___default().for_mobile) : null),
      children: [userLogged ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Logged_Logged__WEBPACK_IMPORTED_MODULE_7__.Logged, {
        data: user_data
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 62,
        columnNumber: 35
      }, this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: (_BarItems_module_scss__WEBPACK_IMPORTED_MODULE_11___default().auth_container),
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: (_BarItems_module_scss__WEBPACK_IMPORTED_MODULE_11___default().auth_buttons),
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: (_BarItems_module_scss__WEBPACK_IMPORTED_MODULE_11___default().sign_up_button),
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_5___default()), {
              href: registration_path,
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
                src: _public_images_header_register_png__WEBPACK_IMPORTED_MODULE_8__.default.src,
                alt: ""
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 67,
                columnNumber: 41
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 66,
              columnNumber: 37
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_5___default()), {
              href: registration_path,
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                children: registration
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 70,
                columnNumber: 41
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 69,
              columnNumber: 37
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 65,
            columnNumber: 33
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: (_BarItems_module_scss__WEBPACK_IMPORTED_MODULE_11___default().sign_in_button),
            onClick: loginModalHandle,
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
              src: _public_images_header_login_png__WEBPACK_IMPORTED_MODULE_9__.default.src,
              alt: ""
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 81,
              columnNumber: 37
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
              children: login
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 82,
              columnNumber: 37
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 77,
            columnNumber: 33
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 64,
          columnNumber: 29
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 63,
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
            lineNumber: 97,
            columnNumber: 29
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
            src: languagesTitle.icon,
            alt: "lang-flag"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 102,
            columnNumber: 29
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 92,
          columnNumber: 25
        }, this), showDrop && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_LanguageDrop_LanguageDrop__WEBPACK_IMPORTED_MODULE_6__.LanguageDrop, {
          click: changeLangTitle,
          onClose: function onClose() {
            return setShowDrop(false);
          },
          data: languages_data
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 107,
          columnNumber: 38
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 91,
        columnNumber: 21
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 17
    }, this)
  }, void 0, false);
}

_s(BarItems, "ZoDYCyznpNikqm3UBctJF+Ll1H8=", false, function () {
  return [next_translate_useTranslation__WEBPACK_IMPORTED_MODULE_4__.default, next_dist_client_router__WEBPACK_IMPORTED_MODULE_3__.useRouter, react_redux__WEBPACK_IMPORTED_MODULE_10__.useSelector];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9IZWFkZXIvQmFyL0Jhckl0ZW1zL0Jhckl0ZW1zLmpzeCJdLCJuYW1lcyI6WyJCYXJJdGVtcyIsInJlZ2lzdHJhdGlvbiIsImxvZ2luIiwicmVnaXN0cmF0aW9uX3BhdGgiLCJsb2dpbk1vZGFsSGFuZGxlIiwiYmFyX2l0ZW1zIiwidXNlckxvZ2dlZCIsInVzZVRyYW5zbGF0aW9uIiwidCIsImxhbmciLCJ1c2VTdGF0ZSIsImxhbmd1YWdlcyIsImxhbmd1YWdlc1RpdGxlIiwic2V0TGFuZ3VhZ2VzVGl0bGUiLCJ1c2VFZmZlY3QiLCJuZXdMYW5nIiwiZWwiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJsYW5ndWFnZXNfZGF0YSIsInNob3dEcm9wIiwic2V0U2hvd0Ryb3AiLCJjaGFuZ2VMYW5nVGl0bGUiLCJldmVudCIsImxhbmdfdGl0bGVfZGF0YSIsImZpbHRlciIsInRhcmdldCIsImNsYXNzTmFtZSIsInRyYW5zbGF0aW9uUGF0aCIsInRyYW5zbGF0ZSIsImtleSIsInVzZXJfZGF0YSIsInVzZVNlbGVjdG9yIiwic2VsZWN0VXNlciIsImNvbnNvbGUiLCJsb2ciLCJzdHlsZXMiLCJwYXRobmFtZSIsInJlZ2lzdGVyX2ljb24iLCJsb2dpbl9pY29uIiwiZGlzcGxheSIsImNvbnRlbnRPblRpdGxlIiwiaWNvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7Q0FFQTs7Q0FFQTs7Q0FFQTs7Q0FFQTs7QUFDQTtBQUNBO0NBRUE7O0FBQ0E7QUFDQTtBQUNBO0FBT08sU0FBU0EsUUFBVCxPQU1XO0FBQUE7O0FBQUEsTUFMZEMsWUFLYyxRQUxkQSxZQUtjO0FBQUEsTUFKZEMsS0FJYyxRQUpkQSxLQUljO0FBQUEsTUFIZEMsaUJBR2MsUUFIZEEsaUJBR2M7QUFBQSxNQUZkQyxnQkFFYyxRQUZkQSxnQkFFYztBQUFBLE1BRGRDLFNBQ2MsUUFEZEEsU0FD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QUFBO0FBQUEsb0JBTEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQWJKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FGUixlQThCSTtBQUFLLGlCQUFTLEVBQUVrQywyRUFBaEI7QUFBQSxnQ0FDSTtBQUNJLG1CQUFTLEVBQUVBLG1GQURmO0FBRUksZUFBSyxFQUFFaEIsUUFBUSxHQUFHO0FBQUVvQixtQkFBTyxFQUFFO0FBQVgsV0FBSCxHQUF5QixJQUY1QztBQUdJLGlCQUFPLEVBQUU7QUFBQSxtQkFBTW5CLFdBQVcsQ0FBQyxJQUFELENBQWpCO0FBQUEsV0FIYjtBQUFBLGtDQUtJO0FBQUEsc0JBRVFRLFNBQVMsV0FBSWpCLGNBQWMsQ0FBQzZCLGNBQW5CO0FBRmpCO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBTEosZUFVSTtBQUNJLGVBQUcsRUFBRTdCLGNBQWMsQ0FBQzhCLElBRHhCO0FBRUksZUFBRyxFQUFDO0FBRlI7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFWSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREosRUFnQkt0QixRQUFRLGlCQUFJLDhEQUFDLG9FQUFEO0FBQ1QsZUFBSyxFQUFFRSxlQURFO0FBRVQsaUJBQU8sRUFBRTtBQUFBLG1CQUFNRCxXQUFXLENBQUMsS0FBRCxDQUFqQjtBQUFBLFdBRkE7QUFHVCxjQUFJLEVBQUVGO0FBSEc7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFoQmpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQTlCSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFGUixtQkFESjtBQTJESDs7R0E3RmVuQixRO1VBUVlPLGtFLEVBVVhXLDhELEVBY1NjLHFEOzs7S0FoQ1ZoQyxRIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL19hcHAuMjZiYmMxMWM2ZTkyNGVmNzQzYWIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGhvb2tzIGFuZCBoZWxwZXJzXHJcbmltcG9ydCB7IGxhbmd1YWdlcyB9IGZyb20gJy4vTGFuZ3VhZ2VEcm9wQ29uZmlncy9sYW5nLWNvbmZpZ3MnXHJcbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCdcclxuLy8gaW1wb3J0IHsgdXNlcl9kYXRhIH0gZnJvbSAnL3NyYy91c2VyL3VzZXInXHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvZGlzdC9jbGllbnQvcm91dGVyJ1xyXG4vLyB0cmFuc2xhdGlvbiBcclxuaW1wb3J0IHVzZVRyYW5zbGF0aW9uIGZyb20gJ25leHQtdHJhbnNsYXRlL3VzZVRyYW5zbGF0aW9uJ1xyXG4vLyBzdHlsZXMgXHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9CYXJJdGVtcy5tb2R1bGUuc2NzcydcclxuLy8gY29tcG9uZW50c1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXHJcbmltcG9ydCB7IExhbmd1YWdlRHJvcCB9IGZyb20gJy4vTGFuZ3VhZ2VEcm9wL0xhbmd1YWdlRHJvcCdcclxuaW1wb3J0IHsgTG9nZ2VkIH0gZnJvbSAnLi9Mb2dnZWQvTG9nZ2VkJ1xyXG4vLyBpY29uc1xyXG5pbXBvcnQgcmVnaXN0ZXJfaWNvbiBmcm9tICcvcHVibGljL2ltYWdlcy9oZWFkZXIvcmVnaXN0ZXIucG5nJ1xyXG5pbXBvcnQgbG9naW5faWNvbiBmcm9tICcvcHVibGljL2ltYWdlcy9oZWFkZXIvbG9naW4ucG5nJ1xyXG5pbXBvcnQgeyB1c2VTZWxlY3RvciB9IGZyb20gJ3JlYWN0LXJlZHV4J1xyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gQmFySXRlbXMoe1xyXG4gICAgcmVnaXN0cmF0aW9uLFxyXG4gICAgbG9naW4sXHJcbiAgICByZWdpc3RyYXRpb25fcGF0aCxcclxuICAgIGxvZ2luTW9kYWxIYW5kbGUsXHJcbiAgICBiYXJfaXRlbXMsXHJcbiAgICB1c2VyTG9nZ2VkIH0pIHtcclxuICAgICAgICBcclxuICAgICAgICBjb25zdCB7IHQsIGxhbmcgfSA9IHVzZVRyYW5zbGF0aW9uKCdjb21tb24nKTtcclxuICAgICAgICBjb25zdCBbbGFuZ3VhZ2VzVGl0bGUsIHNldExhbmd1YWdlc1RpdGxlXSA9IHVzZVN0YXRlKGxhbmd1YWdlc1sxXSk7XHJcbiAgICAgICAgdXNlRWZmZWN0KCAoKT0+e1xyXG4gICAgICAgICAgICBjb25zdCBuZXdMYW5nID0gbGFuZ3VhZ2VzLmZpbmQoIGVsID0+IGVsLmxhbmcgPT09IGxhbmcgKTtcclxuICAgICAgICAgICAgaWYgKCBuZXdMYW5nICkge1xyXG4gICAgICAgICAgICAgICAgc2V0TGFuZ3VhZ2VzVGl0bGUoIG5ld0xhbmcgKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sIFtsYW5nXSApOyBcclxuICAgICAgICBcclxuICAgICAgICBjb25zdFxyXG4gICAgICAgIHJvdXRlciA9IHVzZVJvdXRlcigpLFxyXG4gICAgICAgIGxhbmd1YWdlc19kYXRhID0gbGFuZ3VhZ2VzLFxyXG5cclxuICAgICAgICBbc2hvd0Ryb3AsIHNldFNob3dEcm9wXSA9IHVzZVN0YXRlKGZhbHNlKSxcclxuXHJcbiAgICAgICAgY2hhbmdlTGFuZ1RpdGxlID0gKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgICAgIGxldCBsYW5nX3RpdGxlX2RhdGEgPSBsYW5ndWFnZXNfZGF0YS5maWx0ZXIoZWwgPT4gZWwubGFuZyA9PT0gZXZlbnQudGFyZ2V0LmNsYXNzTmFtZSlcclxuICAgICAgICAgICAgc2V0TGFuZ3VhZ2VzVGl0bGUobGFuZ190aXRsZV9kYXRhWzBdKVxyXG4gICAgICAgICAgICBzZXRTaG93RHJvcChmYWxzZSlcclxuICAgICAgICB9LFxyXG4gICAgICAgIFxyXG4gICAgICAgIHRyYW5zbGF0aW9uUGF0aCA9ICdoZWFkZXIubGFuZy4nLFxyXG4gICAgICAgIHRyYW5zbGF0ZSA9IChrZXkpID0+IHQoYCR7dHJhbnNsYXRpb25QYXRofSR7a2V5fWApXHJcblxyXG4gICAgICAgIGNvbnN0IHVzZXJfZGF0YSA9IHVzZVNlbGVjdG9yKHNlbGVjdFVzZXIpXHJcbiAgICAgICAgY29uc29sZS5sb2codXNlcl9kYXRhKTtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake3N0eWxlcy5iYXJfaXRlbV9jb250YWluZXJ9ICR7YmFyX2l0ZW1zfSAke3JvdXRlci5wYXRobmFtZSAhPT0gJy8nID8gc3R5bGVzLmZvcl9tb2JpbGUgOiBudWxsfWB9PlxyXG4gICAgICAgICAgICAgICAgICAgIHt1c2VyTG9nZ2VkID8gPExvZ2dlZCBkYXRhPXt1c2VyX2RhdGF9IC8+IDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5hdXRoX2NvbnRhaW5lcn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmF1dGhfYnV0dG9uc30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5zaWduX3VwX2J1dHRvbn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9e3JlZ2lzdHJhdGlvbl9wYXRofT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtyZWdpc3Rlcl9pY29uLnNyY30gYWx0PVwiXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPXtyZWdpc3RyYXRpb25fcGF0aH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlZ2lzdHJhdGlvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuc2lnbl9pbl9idXR0b259XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2xvZ2luTW9kYWxIYW5kbGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17bG9naW5faWNvbi5zcmN9IGFsdD1cIlwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxvZ2luXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5sYW5nX2J1dHRvbn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmxhbmdfYnV0dG9uX2NvbnRlbnR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17c2hvd0Ryb3AgPyB7IGRpc3BsYXk6ICdub25lJyB9IDogbnVsbH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldFNob3dEcm9wKHRydWUpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zbGF0ZShgJHtsYW5ndWFnZXNUaXRsZS5jb250ZW50T25UaXRsZX1gKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9e2xhbmd1YWdlc1RpdGxlLmljb259XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWx0PVwibGFuZy1mbGFnXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7c2hvd0Ryb3AgJiYgPExhbmd1YWdlRHJvcFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2s9e2NoYW5nZUxhbmdUaXRsZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xvc2U9eygpID0+IHNldFNob3dEcm9wKGZhbHNlKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE9e2xhbmd1YWdlc19kYXRhfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPn1cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2ID5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIDwvPlxyXG4gICAgKVxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=