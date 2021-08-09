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
/* harmony import */ var _BarItems_module_scss__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./BarItems.module.scss */ "./components/Header/Bar/BarItems/BarItems.module.scss");
/* harmony import */ var _BarItems_module_scss__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_BarItems_module_scss__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _LanguageDrop_LanguageDrop__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./LanguageDrop/LanguageDrop */ "./components/Header/Bar/BarItems/LanguageDrop/LanguageDrop.jsx");
/* harmony import */ var _Logged_Logged__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Logged/Logged */ "./components/Header/Bar/BarItems/Logged/Logged.jsx");
/* harmony import */ var _public_images_header_register_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../../../public/images/header/register.png */ "./public/images/header/register.png");
/* harmony import */ var _public_images_header_login_png__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../../../public/images/header/login.png */ "./public/images/header/login.png");
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

  var user_data = useSelector(selectUser);
  console.log(user_data);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "".concat((_BarItems_module_scss__WEBPACK_IMPORTED_MODULE_10___default().bar_item_container), " ").concat(bar_items, " ").concat(router.pathname !== '/' ? (_BarItems_module_scss__WEBPACK_IMPORTED_MODULE_10___default().for_mobile) : null),
      children: [userLogged ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Logged_Logged__WEBPACK_IMPORTED_MODULE_7__.Logged, {
        data: user_data
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 61,
        columnNumber: 35
      }, this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: (_BarItems_module_scss__WEBPACK_IMPORTED_MODULE_10___default().auth_container),
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: (_BarItems_module_scss__WEBPACK_IMPORTED_MODULE_10___default().auth_buttons),
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: (_BarItems_module_scss__WEBPACK_IMPORTED_MODULE_10___default().sign_up_button),
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
            className: (_BarItems_module_scss__WEBPACK_IMPORTED_MODULE_10___default().sign_in_button),
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
        className: (_BarItems_module_scss__WEBPACK_IMPORTED_MODULE_10___default().lang_button),
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: (_BarItems_module_scss__WEBPACK_IMPORTED_MODULE_10___default().lang_button_content),
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

_s(BarItems, "ZoDYCyznpNikqm3UBctJF+Ll1H8=", true, function () {
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


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9IZWFkZXIvQmFyL0Jhckl0ZW1zL0Jhckl0ZW1zLmpzeCJdLCJuYW1lcyI6WyJCYXJJdGVtcyIsInJlZ2lzdHJhdGlvbiIsImxvZ2luIiwicmVnaXN0cmF0aW9uX3BhdGgiLCJsb2dpbk1vZGFsSGFuZGxlIiwiYmFyX2l0ZW1zIiwidXNlckxvZ2dlZCIsInVzZVRyYW5zbGF0aW9uIiwidCIsImxhbmciLCJ1c2VTdGF0ZSIsImxhbmd1YWdlcyIsImxhbmd1YWdlc1RpdGxlIiwic2V0TGFuZ3VhZ2VzVGl0bGUiLCJ1c2VFZmZlY3QiLCJuZXdMYW5nIiwiZWwiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJsYW5ndWFnZXNfZGF0YSIsInNob3dEcm9wIiwic2V0U2hvd0Ryb3AiLCJjaGFuZ2VMYW5nVGl0bGUiLCJldmVudCIsImxhbmdfdGl0bGVfZGF0YSIsImZpbHRlciIsInRhcmdldCIsImNsYXNzTmFtZSIsInRyYW5zbGF0aW9uUGF0aCIsInRyYW5zbGF0ZSIsImtleSIsInVzZXJfZGF0YSIsInVzZVNlbGVjdG9yIiwic2VsZWN0VXNlciIsImNvbnNvbGUiLCJsb2ciLCJzdHlsZXMiLCJwYXRobmFtZSIsInJlZ2lzdGVyX2ljb24iLCJsb2dpbl9pY29uIiwiZGlzcGxheSIsImNvbnRlbnRPblRpdGxlIiwiaWNvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtDQUVBOztDQUVBOztDQUVBOztDQUVBOztBQUNBO0FBQ0E7Q0FFQTs7QUFDQTtBQUNBO0FBT08sU0FBU0EsUUFBVCxPQU1XO0FBQUE7O0FBQUEsTUFMZEMsWUFLYyxRQUxkQSxZQUtjO0FBQUEsTUFKZEMsS0FJYyxRQUpkQSxLQUljO0FBQUEsTUFIZEMsaUJBR2MsUUFIZEEsaUJBR2M7QUFBQSxNQUZkQyxnQkFFYyxRQUZkQSxnQkFFYztBQUFBLE1BRGRDLFNBQ2MsUUFEZEEsU0FDYztBQUFBLE1BQWRDLFVBQWMsUUFBZEEsVUFBYzs7QUFBQSx3QkFFVUMsc0VBQWMsQ0FBQyxRQUFELENBRnhCO0FBQUEsTUFFRkMsQ0FGRSxtQkFFRkEsQ0FGRTtBQUFBLE1BRUNDLElBRkQsbUJBRUNBLElBRkQ7O0FBQUEsa0JBR2tDQywrQ0FBUSxDQUFDQywyRUFBRCxDQUgxQztBQUFBLE1BR0hDLGNBSEc7QUFBQSxNQUdhQyxpQkFIYjs7QUFJVkMsa0RBQVMsQ0FBRSxZQUFJO0FBQ1gsUUFBTUMsT0FBTyxHQUFHSiw2RUFBQSxDQUFnQixVQUFBSyxFQUFFO0FBQUEsYUFBSUEsRUFBRSxDQUFDUCxJQUFILEtBQVlBLElBQWhCO0FBQUEsS0FBbEIsQ0FBaEI7O0FBQ0EsUUFBS00sT0FBTCxFQUFlO0FBQ1hGLHVCQUFpQixDQUFFRSxPQUFGLENBQWpCO0FBQ0g7QUFDSixHQUxRLEVBS04sQ0FBQ04sSUFBRCxDQUxNLENBQVQ7O0FBUUEsTUFBQVEsTUFBTSxHQUFHQyxrRUFBUyxFQUFsQjtBQUFBLE1BQ0FDLGNBREEsR0FDaUJSLHdFQURqQjtBQUFBLG1CQUcwQkQsK0NBQVEsQ0FBQyxLQUFELENBSGxDO0FBQUEsTUFHQ1UsUUFIRDtBQUFBLE1BR1dDLFdBSFg7QUFBQSxNQUtBQyxlQUxBLEdBS2tCLFNBQWxCQSxlQUFrQixDQUFDQyxLQUFELEVBQVc7QUFDekIsUUFBSUMsZUFBZSxHQUFHTCxjQUFjLENBQUNNLE1BQWYsQ0FBc0IsVUFBQVQsRUFBRTtBQUFBLGFBQUlBLEVBQUUsQ0FBQ1AsSUFBSCxLQUFZYyxLQUFLLENBQUNHLE1BQU4sQ0FBYUMsU0FBN0I7QUFBQSxLQUF4QixDQUF0QjtBQUNBZCxxQkFBaUIsQ0FBQ1csZUFBZSxDQUFDLENBQUQsQ0FBaEIsQ0FBakI7QUFDQUgsZUFBVyxDQUFDLEtBQUQsQ0FBWDtBQUNILEdBVEQ7QUFBQSxNQVdBTyxlQVhBLEdBV2tCLGNBWGxCO0FBQUEsTUFZQUMsU0FaQSxHQVlZLFNBQVpBLFNBQVksQ0FBQ0MsR0FBRDtBQUFBLFdBQVN0QixDQUFDLFdBQUlvQixlQUFKLFNBQXNCRSxHQUF0QixFQUFWO0FBQUEsR0FaWjs7QUFjQSxNQUFNQyxTQUFTLEdBQUdDLFdBQVcsQ0FBQ0MsVUFBRCxDQUE3QjtBQUNBQyxTQUFPLENBQUNDLEdBQVIsQ0FBWUosU0FBWjtBQUNKLHNCQUNJO0FBQUEsMkJBRVE7QUFBSyxlQUFTLFlBQUtLLGtGQUFMLGNBQWtDL0IsU0FBbEMsY0FBK0NZLE1BQU0sQ0FBQ29CLFFBQVAsS0FBb0IsR0FBcEIsR0FBMEJELDBFQUExQixHQUE4QyxJQUE3RixDQUFkO0FBQUEsaUJBQ0s5QixVQUFVLGdCQUFHLDhEQUFDLGtEQUFEO0FBQVEsWUFBSSxFQUFFeUI7QUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBQUgsZ0JBQ1A7QUFBSyxpQkFBUyxFQUFFSyw4RUFBaEI7QUFBQSwrQkFDSTtBQUFLLG1CQUFTLEVBQUVBLDRFQUFoQjtBQUFBLGtDQUNJO0FBQUsscUJBQVMsRUFBRUEsOEVBQWhCO0FBQUEsb0NBQ0ksOERBQUMsa0RBQUQ7QUFBTSxrQkFBSSxFQUFFakMsaUJBQVo7QUFBQSxxQ0FDSTtBQUFLLG1CQUFHLEVBQUVtQywyRUFBVjtBQUE2QixtQkFBRyxFQUFDO0FBQWpDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQURKLGVBSUksOERBQUMsa0RBQUQ7QUFBTSxrQkFBSSxFQUFFbkMsaUJBQVo7QUFBQSxxQ0FDSTtBQUFBLDBCQUVRRjtBQUZSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQUpKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFESixlQWFJO0FBQ0kscUJBQVMsRUFBRW1DLDhFQURmO0FBRUksbUJBQU8sRUFBRWhDLGdCQUZiO0FBQUEsb0NBSUk7QUFBSyxpQkFBRyxFQUFFbUMsd0VBQVY7QUFBMEIsaUJBQUcsRUFBQztBQUE5QjtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQUpKLGVBS0k7QUFBQSx3QkFFUXJDO0FBRlI7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFMSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBYko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUZSLGVBOEJJO0FBQUssaUJBQVMsRUFBRWtDLDJFQUFoQjtBQUFBLGdDQUNJO0FBQ0ksbUJBQVMsRUFBRUEsbUZBRGY7QUFFSSxlQUFLLEVBQUVoQixRQUFRLEdBQUc7QUFBRW9CLG1CQUFPLEVBQUU7QUFBWCxXQUFILEdBQXlCLElBRjVDO0FBR0ksaUJBQU8sRUFBRTtBQUFBLG1CQUFNbkIsV0FBVyxDQUFDLElBQUQsQ0FBakI7QUFBQSxXQUhiO0FBQUEsa0NBS0k7QUFBQSxzQkFFUVEsU0FBUyxXQUFJakIsY0FBYyxDQUFDNkIsY0FBbkI7QUFGakI7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFMSixlQVVJO0FBQ0ksZUFBRyxFQUFFN0IsY0FBYyxDQUFDOEIsSUFEeEI7QUFFSSxlQUFHLEVBQUM7QUFGUjtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQVZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFESixFQWdCS3RCLFFBQVEsaUJBQUksOERBQUMsb0VBQUQ7QUFDVCxlQUFLLEVBQUVFLGVBREU7QUFFVCxpQkFBTyxFQUFFO0FBQUEsbUJBQU1ELFdBQVcsQ0FBQyxLQUFELENBQWpCO0FBQUEsV0FGQTtBQUdULGNBQUksRUFBRUY7QUFIRztBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQWhCakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBOUJKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUZSLG1CQURKO0FBMkRIOztHQTdGZW5CLFE7VUFRWU8sa0UsRUFVWFcsOEQ7OztLQWxCRGxCLFEiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvX2FwcC43MzE4ODJmMWE2MTdhNDk1Y2Q4YS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gaG9va3MgYW5kIGhlbHBlcnNcclxuaW1wb3J0IHsgbGFuZ3VhZ2VzIH0gZnJvbSAnLi9MYW5ndWFnZURyb3BDb25maWdzL2xhbmctY29uZmlncydcclxuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0J1xyXG4vLyBpbXBvcnQgeyB1c2VyX2RhdGEgfSBmcm9tICcvc3JjL3VzZXIvdXNlcidcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9kaXN0L2NsaWVudC9yb3V0ZXInXHJcbi8vIHRyYW5zbGF0aW9uIFxyXG5pbXBvcnQgdXNlVHJhbnNsYXRpb24gZnJvbSAnbmV4dC10cmFuc2xhdGUvdXNlVHJhbnNsYXRpb24nXHJcbi8vIHN0eWxlcyBcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL0Jhckl0ZW1zLm1vZHVsZS5zY3NzJ1xyXG4vLyBjb21wb25lbnRzXHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcclxuaW1wb3J0IHsgTGFuZ3VhZ2VEcm9wIH0gZnJvbSAnLi9MYW5ndWFnZURyb3AvTGFuZ3VhZ2VEcm9wJ1xyXG5pbXBvcnQgeyBMb2dnZWQgfSBmcm9tICcuL0xvZ2dlZC9Mb2dnZWQnXHJcbi8vIGljb25zXHJcbmltcG9ydCByZWdpc3Rlcl9pY29uIGZyb20gJy9wdWJsaWMvaW1hZ2VzL2hlYWRlci9yZWdpc3Rlci5wbmcnXHJcbmltcG9ydCBsb2dpbl9pY29uIGZyb20gJy9wdWJsaWMvaW1hZ2VzL2hlYWRlci9sb2dpbi5wbmcnXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBCYXJJdGVtcyh7XHJcbiAgICByZWdpc3RyYXRpb24sXHJcbiAgICBsb2dpbixcclxuICAgIHJlZ2lzdHJhdGlvbl9wYXRoLFxyXG4gICAgbG9naW5Nb2RhbEhhbmRsZSxcclxuICAgIGJhcl9pdGVtcyxcclxuICAgIHVzZXJMb2dnZWQgfSkge1xyXG4gICAgICAgIFxyXG4gICAgICAgIGNvbnN0IHsgdCwgbGFuZyB9ID0gdXNlVHJhbnNsYXRpb24oJ2NvbW1vbicpO1xyXG4gICAgICAgIGNvbnN0IFtsYW5ndWFnZXNUaXRsZSwgc2V0TGFuZ3VhZ2VzVGl0bGVdID0gdXNlU3RhdGUobGFuZ3VhZ2VzWzFdKTtcclxuICAgICAgICB1c2VFZmZlY3QoICgpPT57XHJcbiAgICAgICAgICAgIGNvbnN0IG5ld0xhbmcgPSBsYW5ndWFnZXMuZmluZCggZWwgPT4gZWwubGFuZyA9PT0gbGFuZyApO1xyXG4gICAgICAgICAgICBpZiAoIG5ld0xhbmcgKSB7XHJcbiAgICAgICAgICAgICAgICBzZXRMYW5ndWFnZXNUaXRsZSggbmV3TGFuZyApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSwgW2xhbmddICk7IFxyXG4gICAgICAgIFxyXG4gICAgICAgIGNvbnN0XHJcbiAgICAgICAgcm91dGVyID0gdXNlUm91dGVyKCksXHJcbiAgICAgICAgbGFuZ3VhZ2VzX2RhdGEgPSBsYW5ndWFnZXMsXHJcblxyXG4gICAgICAgIFtzaG93RHJvcCwgc2V0U2hvd0Ryb3BdID0gdXNlU3RhdGUoZmFsc2UpLFxyXG5cclxuICAgICAgICBjaGFuZ2VMYW5nVGl0bGUgPSAoZXZlbnQpID0+IHtcclxuICAgICAgICAgICAgbGV0IGxhbmdfdGl0bGVfZGF0YSA9IGxhbmd1YWdlc19kYXRhLmZpbHRlcihlbCA9PiBlbC5sYW5nID09PSBldmVudC50YXJnZXQuY2xhc3NOYW1lKVxyXG4gICAgICAgICAgICBzZXRMYW5ndWFnZXNUaXRsZShsYW5nX3RpdGxlX2RhdGFbMF0pXHJcbiAgICAgICAgICAgIHNldFNob3dEcm9wKGZhbHNlKVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXHJcbiAgICAgICAgdHJhbnNsYXRpb25QYXRoID0gJ2hlYWRlci5sYW5nLicsXHJcbiAgICAgICAgdHJhbnNsYXRlID0gKGtleSkgPT4gdChgJHt0cmFuc2xhdGlvblBhdGh9JHtrZXl9YClcclxuXHJcbiAgICAgICAgY29uc3QgdXNlcl9kYXRhID0gdXNlU2VsZWN0b3Ioc2VsZWN0VXNlcilcclxuICAgICAgICBjb25zb2xlLmxvZyh1c2VyX2RhdGEpO1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YCR7c3R5bGVzLmJhcl9pdGVtX2NvbnRhaW5lcn0gJHtiYXJfaXRlbXN9ICR7cm91dGVyLnBhdGhuYW1lICE9PSAnLycgPyBzdHlsZXMuZm9yX21vYmlsZSA6IG51bGx9YH0+XHJcbiAgICAgICAgICAgICAgICAgICAge3VzZXJMb2dnZWQgPyA8TG9nZ2VkIGRhdGE9e3VzZXJfZGF0YX0gLz4gOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmF1dGhfY29udGFpbmVyfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYXV0aF9idXR0b25zfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnNpZ25fdXBfYnV0dG9ufT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj17cmVnaXN0cmF0aW9uX3BhdGh9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e3JlZ2lzdGVyX2ljb24uc3JjfSBhbHQ9XCJcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9e3JlZ2lzdHJhdGlvbl9wYXRofT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVnaXN0cmF0aW9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5zaWduX2luX2J1dHRvbn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17bG9naW5Nb2RhbEhhbmRsZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtsb2dpbl9pY29uLnNyY30gYWx0PVwiXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbG9naW5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmxhbmdfYnV0dG9ufT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMubGFuZ19idXR0b25fY29udGVudH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXtzaG93RHJvcCA/IHsgZGlzcGxheTogJ25vbmUnIH0gOiBudWxsfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0U2hvd0Ryb3AodHJ1ZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNsYXRlKGAke2xhbmd1YWdlc1RpdGxlLmNvbnRlbnRPblRpdGxlfWApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz17bGFuZ3VhZ2VzVGl0bGUuaWNvbn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbHQ9XCJsYW5nLWZsYWdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtzaG93RHJvcCAmJiA8TGFuZ3VhZ2VEcm9wXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGljaz17Y2hhbmdlTGFuZ1RpdGxlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbG9zZT17KCkgPT4gc2V0U2hvd0Ryb3AoZmFsc2UpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YT17bGFuZ3VhZ2VzX2RhdGF9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+fVxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXYgPlxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgPC8+XHJcbiAgICApXHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==