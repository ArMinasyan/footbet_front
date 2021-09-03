self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./components/Header/NavBar/NavBar.jsx":
/*!*********************************************!*\
  !*** ./components/Header/NavBar/NavBar.jsx ***!
  \*********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NavBar": function() { return /* binding */ NavBar; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_dist_client_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/client/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_dist_client_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_dist_client_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _NavBar_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./NavBar.module.scss */ "./components/Header/NavBar/NavBar.module.scss");
/* harmony import */ var _NavBar_module_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_NavBar_module_scss__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var next_translate_useTranslation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next-translate/useTranslation */ "./node_modules/next-translate/lib/esm/useTranslation.js");
/* harmony import */ var _Button_Button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Button/Button */ "./components/Header/NavBar/Button/Button.jsx");
/* harmony import */ var _Pages_Contacts_ContactsModal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../Pages/Contacts/ContactsModal */ "./components/Pages/Contacts/ContactsModal.jsx");
/* module decorator */ module = __webpack_require__.hmd(module);



var _jsxFileName = "C:\\Users\\Admin\\Desktop\\projects\\foot-bet\\components\\Header\\NavBar\\NavBar.jsx",
    _s = $RefreshSig$();

// hooks and helpers

 // styles

 // translation

 // componetns



function NavBar() {
  _s();

  var _this = this;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false),
      showContactsModal = _useState[0],
      setShowContactsModal = _useState[1],
      _useTranslation = (0,next_translate_useTranslation__WEBPACK_IMPORTED_MODULE_3__.default)("common"),
      t = _useTranslation.t,
      translationPath = "header.navBar.",
      translate = function translate(key) {
    return t("".concat(translationPath).concat(key));
  },
      router = (0,next_dist_client_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)(),
      buttonsInHomePage = [{
    id: "main",
    key: Math.random(),
    frstContent: translate("main"),
    href: "/"
  }, {
    id: "games",
    key: Math.random(),
    frstContent: translate("games.frs"),
    secContent: translate("games.sec"),
    href: "/games"
  }, {
    id: "statistics",
    key: Math.random(),
    frstContent: translate("statistics.frs"),
    secContent: translate("statistics.sec"),
    href: "/statistics"
  }, {
    id: "prediction",
    key: Math.random(),
    frstContent: translate("prediction.frs"),
    secContent: translate("prediction.sec"),
    href: "/prediction"
  }, {
    id: "testimonials",
    key: Math.random(),
    frstContent: translate("testimonials"),
    href: "/testimonials"
  }, {
    id: "aboutUs",
    key: Math.random(),
    frstContent: translate("aboutUs"),
    href: "/aboutUs"
  }, {
    id: "contacts",
    key: Math.random(),
    frstContent: translate("contacts"),
    href: null,
    click: function click() {
      return setShowContactsModal(true);
    }
  }],
      buttons = buttonsInHomePage.filter(function (el) {
    return el.id !== "statistics";
  });

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "".concat((_NavBar_module_scss__WEBPACK_IMPORTED_MODULE_6___default().container), " ").concat(router.pathname !== "/" ? (_NavBar_module_scss__WEBPACK_IMPORTED_MODULE_6___default().tablet) : null),
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: (_NavBar_module_scss__WEBPACK_IMPORTED_MODULE_6___default().content),
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: (_NavBar_module_scss__WEBPACK_IMPORTED_MODULE_6___default().top_on_tablet),
          children: (router.pathname === "/" ? buttonsInHomePage : buttons).map(function (el, i) {
            return i < 3 && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Button_Button__WEBPACK_IMPORTED_MODULE_4__.Button, {
              contentFrstP: el.frstContent,
              contentSecP: el.secContent,
              href: el.href,
              active: router.pathname === el.href ? "true" : null,
              click: el.click && el.click
            }, el.key, false, {
              fileName: _jsxFileName,
              lineNumber: 83,
              columnNumber: 19
            }, _this);
          })
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 79,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: (_NavBar_module_scss__WEBPACK_IMPORTED_MODULE_6___default().bottom_on_tablet),
          children: (router.pathname === "/" ? buttonsInHomePage : buttons).map(function (el, i) {
            return i >= 3 && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Button_Button__WEBPACK_IMPORTED_MODULE_4__.Button, {
              contentFrstP: el.frstContent,
              contentSecP: el.secContent,
              href: el.href,
              active: router.pathname === el.href ? "true" : null,
              click: el.click && el.click
            }, el.key, false, {
              fileName: _jsxFileName,
              lineNumber: 98,
              columnNumber: 19
            }, _this);
          })
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 94,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 78,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 7
    }, this), showContactsModal && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Pages_Contacts_ContactsModal__WEBPACK_IMPORTED_MODULE_5__.default, {
      opened: showContactsModal ? true : false,
      onModalClose: function onModalClose() {
        return setShowContactsModal(false);
      }
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 112,
      columnNumber: 9
    }, this)]
  }, void 0, true);
}

_s(NavBar, "ahfk2dZZ76DSfkLM7jqBSFQ6m5Y=", false, function () {
  return [next_translate_useTranslation__WEBPACK_IMPORTED_MODULE_3__.default, next_dist_client_router__WEBPACK_IMPORTED_MODULE_1__.useRouter];
});

_c = NavBar;

var _c;

$RefreshReg$(_c, "NavBar");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9IZWFkZXIvTmF2QmFyL05hdkJhci5qc3giXSwibmFtZXMiOlsiTmF2QmFyIiwidXNlU3RhdGUiLCJzaG93Q29udGFjdHNNb2RhbCIsInNldFNob3dDb250YWN0c01vZGFsIiwidXNlVHJhbnNsYXRpb24iLCJ0IiwidHJhbnNsYXRpb25QYXRoIiwidHJhbnNsYXRlIiwia2V5Iiwicm91dGVyIiwidXNlUm91dGVyIiwiYnV0dG9uc0luSG9tZVBhZ2UiLCJpZCIsIk1hdGgiLCJyYW5kb20iLCJmcnN0Q29udGVudCIsImhyZWYiLCJzZWNDb250ZW50IiwiY2xpY2siLCJidXR0b25zIiwiZmlsdGVyIiwiZWwiLCJzdHlsZXMiLCJwYXRobmFtZSIsIm1hcCIsImkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0NBRUE7O0NBRUE7O0NBRUE7O0FBQ0E7QUFDQTtBQUVPLFNBQVNBLE1BQVQsR0FBa0I7QUFBQTs7QUFBQTs7QUFBQSxrQkFFdUJDLCtDQUFRLENBQUMsS0FBRCxDQUYvQjtBQUFBLE1BRXBCQyxpQkFGb0I7QUFBQSxNQUVEQyxvQkFGQztBQUFBLHdCQUdiQyxzRUFBYyxDQUFDLFFBQUQsQ0FIRDtBQUFBLE1BR25CQyxDQUhtQixtQkFHbkJBLENBSG1CO0FBQUEsTUFJckJDLGVBSnFCLEdBSUgsZ0JBSkc7QUFBQSxNQUtyQkMsU0FMcUIsR0FLVCxTQUFaQSxTQUFZLENBQUNDLEdBQUQ7QUFBQSxXQUFTSCxDQUFDLFdBQUlDLGVBQUosU0FBc0JFLEdBQXRCLEVBQVY7QUFBQSxHQUxTO0FBQUEsTUFPckJDLE1BUHFCLEdBT1pDLGtFQUFTLEVBUEc7QUFBQSxNQVNyQkMsaUJBVHFCLEdBU0QsQ0FDbEI7QUFDRUMsTUFBRSxFQUFFLE1BRE47QUFFRUosT0FBRyxFQUFFSyxJQUFJLENBQUNDLE1BQUwsRUFGUDtBQUdFQyxlQUFXLEVBQUVSLFNBQVMsQ0FBQyxN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QUFLLG1CQUFTLEVBQUVjLDZFQUFoQjtBQUFBLG9CQUNHLENBQUNiLE1BQU0sQ0FBQ2MsUUFBUCxLQUFvQixHQUFwQixHQUEwQlosaUJBQTFCLEdBQThDUSxPQUEvQyxFQUF3REssR0FBeEQsQ0FDQyxVQUFDSCxFQUFELEVBQUtJLENBQUw7QUFBQSxtQkFDRUEsQ0FBQyxJQUFJLENBQUwsaUJBQ0UsOERBQUMsa0RBQUQ7QUFDRSwwQkFBWSxFQUFFSixFQUFFLENBQUNOLFdBRG5CO0FBRUUseUJBQVcsRUFBRU0sRUFBRSxDQUFDSixVQUZsQjtBQUdFLGtCQUFJLEVBQUVJLEVBQUUsQ0FBQ0wsSUFIWDtBQUtFLG9CQUFNLEVBQUVQLE1BQU0sQ0FBQ2MsUUFBUCxLQUFvQkYsRUFBRSxDQUFDTCxJQUF2QixHQUE4QixNQUE5QixHQUF1QyxJQUxqRDtBQU1FLG1CQUFLLEVBQUVLLEVBQUUsQ0FBQ0gsS0FBSCxJQUFZRyxFQUFFLENBQUNIO0FBTnhCLGVBSU9HLEVBQUUsQ0FBQ2IsR0FKVjtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUZKO0FBQUEsV0FERDtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBaEJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUxGO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERixFQXVDR04saUJBQWlCLGlCQUNoQiw4REFBQyxrRUFBRDtBQUNFLFlBQU0sRUFBRUEsaUJBQWlCLEdBQUcsSUFBSCxHQUFVLEtBRHJDO0FBRUUsa0JBQVksRUFBRTtBQUFBLGVBQU1DLG9CQUFvQixDQUFDLEtBQUQsQ0FBMUI7QUFBQTtBQUZoQjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBeENKO0FBQUEsa0JBREY7QUFnREQ7O0dBM0dlSCxNO1VBR0pJLGtFLEVBSUNNLDhEOzs7S0FQR1YsTSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9fYXBwLjM2ZjI5NmZmYzU4ZTlhM2I1ZWRhLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBob29rcyBhbmQgaGVscGVyc1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9kaXN0L2NsaWVudC9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuLy8gc3R5bGVzXHJcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4vTmF2QmFyLm1vZHVsZS5zY3NzXCI7XHJcbi8vIHRyYW5zbGF0aW9uXHJcbmltcG9ydCB1c2VUcmFuc2xhdGlvbiBmcm9tIFwibmV4dC10cmFuc2xhdGUvdXNlVHJhbnNsYXRpb25cIjtcclxuLy8gY29tcG9uZXRuc1xyXG5pbXBvcnQgeyBCdXR0b24gfSBmcm9tIFwiLi9CdXR0b24vQnV0dG9uXCI7XHJcbmltcG9ydCBDb250YWN0c01vZGFsIGZyb20gXCIuLi8uLi9QYWdlcy9Db250YWN0cy9Db250YWN0c01vZGFsXCI7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gTmF2QmFyKCkge1xyXG4gIGNvbnN0IC8vc3RhdGVzXHJcbiAgICBbc2hvd0NvbnRhY3RzTW9kYWwsIHNldFNob3dDb250YWN0c01vZGFsXSA9IHVzZVN0YXRlKGZhbHNlKSxcclxuICAgIHsgdCB9ID0gdXNlVHJhbnNsYXRpb24oXCJjb21tb25cIiksXHJcbiAgICB0cmFuc2xhdGlvblBhdGggPSBcImhlYWRlci5uYXZCYXIuXCIsXHJcbiAgICB0cmFuc2xhdGUgPSAoa2V5KSA9PiB0KGAke3RyYW5zbGF0aW9uUGF0aH0ke2tleX1gKSxcclxuICAgIC8vIHJvdXRlclxyXG4gICAgcm91dGVyID0gdXNlUm91dGVyKCksXHJcbiAgICAvLyBuYXYgYmFyIGJ1dHRvbnMgY29uZmlnc1xyXG4gICAgYnV0dG9uc0luSG9tZVBhZ2UgPSBbXHJcbiAgICAgIHtcclxuICAgICAgICBpZDogXCJtYWluXCIsXHJcbiAgICAgICAga2V5OiBNYXRoLnJhbmRvbSgpLFxyXG4gICAgICAgIGZyc3RDb250ZW50OiB0cmFuc2xhdGUoXCJtYWluXCIpLFxyXG4gICAgICAgIGhyZWY6IFwiL1wiLFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgaWQ6IFwiZ2FtZXNcIixcclxuICAgICAgICBrZXk6IE1hdGgucmFuZG9tKCksXHJcbiAgICAgICAgZnJzdENvbnRlbnQ6IHRyYW5zbGF0ZShcImdhbWVzLmZyc1wiKSxcclxuICAgICAgICBzZWNDb250ZW50OiB0cmFuc2xhdGUoXCJnYW1lcy5zZWNcIiksXHJcbiAgICAgICAgaHJlZjogXCIvZ2FtZXNcIixcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIGlkOiBcInN0YXRpc3RpY3NcIixcclxuICAgICAgICBrZXk6IE1hdGgucmFuZG9tKCksXHJcbiAgICAgICAgZnJzdENvbnRlbnQ6IHRyYW5zbGF0ZShcInN0YXRpc3RpY3MuZnJzXCIpLFxyXG4gICAgICAgIHNlY0NvbnRlbnQ6IHRyYW5zbGF0ZShcInN0YXRpc3RpY3Muc2VjXCIpLFxyXG4gICAgICAgIGhyZWY6IFwiL3N0YXRpc3RpY3NcIixcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIGlkOiBcInByZWRpY3Rpb25cIixcclxuICAgICAgICBrZXk6IE1hdGgucmFuZG9tKCksXHJcbiAgICAgICAgZnJzdENvbnRlbnQ6IHRyYW5zbGF0ZShcInByZWRpY3Rpb24uZnJzXCIpLFxyXG4gICAgICAgIHNlY0NvbnRlbnQ6IHRyYW5zbGF0ZShcInByZWRpY3Rpb24uc2VjXCIpLFxyXG4gICAgICAgIGhyZWY6IFwiL3ByZWRpY3Rpb25cIixcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIGlkOiBcInRlc3RpbW9uaWFsc1wiLFxyXG4gICAgICAgIGtleTogTWF0aC5yYW5kb20oKSxcclxuICAgICAgICBmcnN0Q29udGVudDogdHJhbnNsYXRlKFwidGVzdGltb25pYWxzXCIpLFxyXG4gICAgICAgIGhyZWY6IFwiL3Rlc3RpbW9uaWFsc1wiLFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgaWQ6IFwiYWJvdXRVc1wiLFxyXG4gICAgICAgIGtleTogTWF0aC5yYW5kb20oKSxcclxuICAgICAgICBmcnN0Q29udGVudDogdHJhbnNsYXRlKFwiYWJvdXRVc1wiKSxcclxuICAgICAgICBocmVmOiBcIi9hYm91dFVzXCIsXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBpZDogXCJjb250YWN0c1wiLFxyXG4gICAgICAgIGtleTogTWF0aC5yYW5kb20oKSxcclxuICAgICAgICBmcnN0Q29udGVudDogdHJhbnNsYXRlKFwiY29udGFjdHNcIiksXHJcbiAgICAgICAgaHJlZjogbnVsbCxcclxuICAgICAgICBjbGljazogKCkgPT4gc2V0U2hvd0NvbnRhY3RzTW9kYWwodHJ1ZSksXHJcbiAgICAgIH0sXHJcbiAgICBdLFxyXG4gICAgYnV0dG9ucyA9IGJ1dHRvbnNJbkhvbWVQYWdlLmZpbHRlcigoZWwpID0+IGVsLmlkICE9PSBcInN0YXRpc3RpY3NcIik7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8ZGl2XHJcbiAgICAgICAgY2xhc3NOYW1lPXtgJHtzdHlsZXMuY29udGFpbmVyfSAke1xyXG4gICAgICAgICAgcm91dGVyLnBhdGhuYW1lICE9PSBcIi9cIiA/IHN0eWxlcy50YWJsZXQgOiBudWxsXHJcbiAgICAgICAgfWB9XHJcbiAgICAgID5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRlbnR9PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy50b3Bfb25fdGFibGV0fT5cclxuICAgICAgICAgICAgeyhyb3V0ZXIucGF0aG5hbWUgPT09IFwiL1wiID8gYnV0dG9uc0luSG9tZVBhZ2UgOiBidXR0b25zKS5tYXAoXHJcbiAgICAgICAgICAgICAgKGVsLCBpKSA9PlxyXG4gICAgICAgICAgICAgICAgaSA8IDMgJiYgKFxyXG4gICAgICAgICAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgY29udGVudEZyc3RQPXtlbC5mcnN0Q29udGVudH1cclxuICAgICAgICAgICAgICAgICAgICBjb250ZW50U2VjUD17ZWwuc2VjQ29udGVudH1cclxuICAgICAgICAgICAgICAgICAgICBocmVmPXtlbC5ocmVmfVxyXG4gICAgICAgICAgICAgICAgICAgIGtleT17ZWwua2V5fVxyXG4gICAgICAgICAgICAgICAgICAgIGFjdGl2ZT17cm91dGVyLnBhdGhuYW1lID09PSBlbC5ocmVmID8gXCJ0cnVlXCIgOiBudWxsfVxyXG4gICAgICAgICAgICAgICAgICAgIGNsaWNrPXtlbC5jbGljayAmJiBlbC5jbGlja31cclxuICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgKX1cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5ib3R0b21fb25fdGFibGV0fT5cclxuICAgICAgICAgICAgeyhyb3V0ZXIucGF0aG5hbWUgPT09IFwiL1wiID8gYnV0dG9uc0luSG9tZVBhZ2UgOiBidXR0b25zKS5tYXAoXHJcbiAgICAgICAgICAgICAgKGVsLCBpKSA9PlxyXG4gICAgICAgICAgICAgICAgaSA+PSAzICYmIChcclxuICAgICAgICAgICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnRGcnN0UD17ZWwuZnJzdENvbnRlbnR9XHJcbiAgICAgICAgICAgICAgICAgICAgY29udGVudFNlY1A9e2VsLnNlY0NvbnRlbnR9XHJcbiAgICAgICAgICAgICAgICAgICAgaHJlZj17ZWwuaHJlZn1cclxuICAgICAgICAgICAgICAgICAgICBrZXk9e2VsLmtleX1cclxuICAgICAgICAgICAgICAgICAgICBhY3RpdmU9e3JvdXRlci5wYXRobmFtZSA9PT0gZWwuaHJlZiA/IFwidHJ1ZVwiIDogbnVsbH1cclxuICAgICAgICAgICAgICAgICAgICBjbGljaz17ZWwuY2xpY2sgJiYgZWwuY2xpY2t9XHJcbiAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIHtzaG93Q29udGFjdHNNb2RhbCAmJiAoXHJcbiAgICAgICAgPENvbnRhY3RzTW9kYWxcclxuICAgICAgICAgIG9wZW5lZD17c2hvd0NvbnRhY3RzTW9kYWwgPyB0cnVlIDogZmFsc2V9XHJcbiAgICAgICAgICBvbk1vZGFsQ2xvc2U9eygpID0+IHNldFNob3dDb250YWN0c01vZGFsKGZhbHNlKX1cclxuICAgICAgICAvPlxyXG4gICAgICApfVxyXG4gICAgPC8+XHJcbiAgKTtcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9