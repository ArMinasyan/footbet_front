self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/Pages/Main/Matches/TodayMatches/TMBody/common/Row/RowDescription/RowDescription.jsx":
/*!********************************************************************************************************!*\
  !*** ./components/Pages/Main/Matches/TodayMatches/TMBody/common/Row/RowDescription/RowDescription.jsx ***!
  \********************************************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RowDescription": function() { return /* binding */ RowDescription; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_translate_useTranslation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-translate/useTranslation */ "./node_modules/next-translate/lib/esm/useTranslation.js");
/* harmony import */ var _RowDescription_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./RowDescription.module.scss */ "./components/Pages/Main/Matches/TodayMatches/TMBody/common/Row/RowDescription/RowDescription.module.scss");
/* harmony import */ var _RowDescription_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_RowDescription_module_scss__WEBPACK_IMPORTED_MODULE_2__);
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "C:\\Users\\Admin\\Desktop\\projects\\foot-bet\\components\\Pages\\Main\\Matches\\TodayMatches\\TMBody\\common\\Row\\RowDescription\\RowDescription.jsx",
    _s = $RefreshSig$();

// translations
 // styles


function RowDescription(_ref) {
  _s();

  var clickBuy = _ref.clickBuy,
      date = _ref.date,
      gameState = _ref.gameState,
      teamOne = _ref.teamOne,
      teamOneIcon = _ref.teamOneIcon,
      score = _ref.score,
      teamTwo = _ref.teamTwo,
      teamTwoIcon = _ref.teamTwoIcon,
      buyButtonName = _ref.buyButtonName,
      locationInMainPage = _ref.locationInMainPage;

  var _useTranslation = (0,next_translate_useTranslation__WEBPACK_IMPORTED_MODULE_1__.default)("home"),
      t = _useTranslation.t,
      translationPath = "".concat(locationInMainPage),
      translate = function translate(key) {
    return t("".concat(translationPath).concat(key));
  },
      gameStarted = gameState.slice(gameState.lastIndexOf(".") + 1) === "started";

  console.log();
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: (_RowDescription_module_scss__WEBPACK_IMPORTED_MODULE_2___default().container),
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: (_RowDescription_module_scss__WEBPACK_IMPORTED_MODULE_2___default().content),
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "\n                        ".concat((_RowDescription_module_scss__WEBPACK_IMPORTED_MODULE_2___default().date_gameNStarted_content), " \n                        ").concat(gameStarted ? (_RowDescription_module_scss__WEBPACK_IMPORTED_MODULE_2___default().date_gameStarted_content) : null, "\n                    "),
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
          children: date
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 35,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
          children: ["\xA0", translate(gameState)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 36,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: (_RowDescription_module_scss__WEBPACK_IMPORTED_MODULE_2___default().teams),
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: (_RowDescription_module_scss__WEBPACK_IMPORTED_MODULE_2___default().teamOne),
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
            children: teamOne
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 40,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
            src: teamOneIcon,
            alt: teamOne
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 41,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 39,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: (_RowDescription_module_scss__WEBPACK_IMPORTED_MODULE_2___default().score),
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
            children: score
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 44,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 43,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: (_RowDescription_module_scss__WEBPACK_IMPORTED_MODULE_2___default().teamTwo),
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
            src: teamTwoIcon,
            alt: teamTwo
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 47,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
            children: teamTwo
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 48,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 46,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: (_RowDescription_module_scss__WEBPACK_IMPORTED_MODULE_2___default().buyButton_container),
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: (_RowDescription_module_scss__WEBPACK_IMPORTED_MODULE_2___default().button_content),
          onClick: clickBuy,
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
            children: translate(buyButtonName)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 53,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 52,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 51,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 27,
    columnNumber: 5
  }, this);
}

_s(RowDescription, "zlIdU9EjM2llFt74AbE2KsUJXyM=", false, function () {
  return [next_translate_useTranslation__WEBPACK_IMPORTED_MODULE_1__.default];
});

_c = RowDescription;

var _c;

$RefreshReg$(_c, "RowDescription");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9QYWdlcy9NYWluL01hdGNoZXMvVG9kYXlNYXRjaGVzL1RNQm9keS9jb21tb24vUm93L1Jvd0Rlc2NyaXB0aW9uL1Jvd0Rlc2NyaXB0aW9uLmpzeCJdLCJuYW1lcyI6WyJSb3dEZXNjcmlwdGlvbiIsImNsaWNrQnV5IiwiZGF0ZSIsImdhbWVTdGF0ZSIsInRlYW1PbmUiLCJ0ZWFtT25lSWNvbiIsInNjb3JlIiwidGVhbVR3byIsInRlYW1Ud29JY29uIiwiYnV5QnV0dG9uTmFtZSIsImxvY2F0aW9uSW5NYWluUGFnZSIsInVzZVRyYW5zbGF0aW9uIiwidCIsInRyYW5zbGF0aW9uUGF0aCIsInRyYW5zbGF0ZSIsImtleSIsImdhbWVTdGFydGVkIiwic2xpY2UiLCJsYXN0SW5kZXhPZiIsImNvbnNvbGUiLCJsb2ciLCJzdHlsZXMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0NBRUE7O0FBQ0E7QUFFTyxTQUFTQSxjQUFULE9BV0o7QUFBQTs7QUFBQSxNQVZEQyxRQVVDLFFBVkRBLFFBVUM7QUFBQSxNQVREQyxJQVNDLFFBVERBLElBU0M7QUFBQSxNQVJEQyxTQVFDLFFBUkRBLFNBUUM7QUFBQSxNQVBEQyxPQU9DLFFBUERBLE9BT0M7QUFBQSxNQU5EQyxXQU1DLFFBTkRBLFdBTUM7QUFBQSxNQUxEQyxLQUtDLFFBTERBLEtBS0M7QUFBQSxNQUpEQyxPQUlDLFFBSkRBLE9BSUM7QUFBQSxNQUhEQyxXQUdDLFFBSERBLFdBR0M7QUFBQSxNQUZEQyxhQUVDLFFBRkRBLGFBRUM7QUFBQSxNQUREQyxrQkFDQyxRQUREQSxrQkFDQzs7QUFBQSx3QkFFU0Msc0VBQWMsQ0FBQyxNQUFELENBRnZCO0FBQUEsTUFFR0MsQ0FGSCxtQkFFR0EsQ0FGSDtBQUFBLE1BR0NDLGVBSEQsYUFHc0JILGtCQUh0QjtBQUFBLE1BSUNJLFNBSkQsR0FJYSxTQUFaQSxTQUFZLENBQUNDLEdBQUQ7QUFBQSxXQUFTSCxDQUFDLFdBQUlDLGVBQUosU0FBc0JFLEdBQXRCLEVBQVY7QUFBQSxHQUpiO0FBQUEsTUFLQ0MsV0FMRCxHQUtlYixTQUFTLENBQUNjLEtBQVYsQ0FBZ0JkLFNBQVMsQ0FBQ2UsV0FBVixDQUFzQixHQUF0QixJQUE2QixDQUE3QyxNQUFvRCxTQUxuRTs7QUFPREMsU0FBTyxDQUFDQyxHQUFSO0FBRUEsc0JBQ0U7QUFBSyxhQUFTLEVBQUVDLDhFQUFoQjtBQUFBLDJCQUNFO0FBQUssZUFBUyxFQUFFQSw0RUFBaEI7QUFBQSw4QkFDRTtBQUNFLGlCQUFTLHNDQUNPQSw4RkFEUCx3Q0FFT0wsV0FBVyxHQUFHSyw2RkFBSCxHQUFxQyxJQUZ2RCwyQkFEWDtBQUFBLGdDQU1FO0FBQUEsb0JBQU9uQjtBQUFQO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBTkYsZUFPRTtBQUFBLDZCQUFhWSxTQUFTLENBQUNYLFNBQUQsQ0FBdEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQVBGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURGLGVBVUU7QUFBSyxpQkFBUyxFQUFFa0IsMEVBQWhCO0FBQUEsZ0NBQ0U7QUFBSyxtQkFBUyxFQUFFQSw0RUFBaEI7QUFBQSxrQ0FDRTtBQUFBLHNCQUFJakI7QUFBSjtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQURGLGVBRUU7QUFBSyxlQUFHLEVBQUVDLFdBQVY7QUFBdUIsZUFBRyxFQUFFRDtBQUE1QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFERixlQUtFO0FBQUssbUJBQVMsRUFBRWlCLDBFQUFoQjtBQUFBLGlDQUNFO0FBQUEsc0JBQUlmO0FBQUo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBTEYsZUFRRTtBQUFLLG1CQUFTLEVBQUVlLDRFQUFoQjtBQUFBLGtDQUNFO0FBQUssZUFBRyxFQUFFYixXQUFWO0FBQXVCLGVBQUcsRUFBRUQ7QUFBNUI7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFERixlQUVFO0FBQUEsc0JBQUlBO0FBQUo7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBUkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBVkYsZUF1QkU7QUFBSyxpQkFBUyxFQUFFYyx3RkFBaEI7QUFBQSwrQkFDRTtBQUFLLG1CQUFTLEVBQUVBLG1GQUFoQjtBQUF1QyxpQkFBTyxFQUFFcEIsUUFBaEQ7QUFBQSxpQ0FDRTtBQUFBLHNCQUFJYSxTQUFTLENBQUNMLGFBQUQ7QUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0F2QkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBaUNEOztHQXJEZVQsYztVQWFKVyxrRTs7O0tBYklYLGMiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguZGI0MjU0MTllOWM4ZTYwZjBlZTguaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIHRyYW5zbGF0aW9uc1xyXG5pbXBvcnQgdXNlVHJhbnNsYXRpb24gZnJvbSBcIm5leHQtdHJhbnNsYXRlL3VzZVRyYW5zbGF0aW9uXCI7XHJcbi8vIHN0eWxlc1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuL1Jvd0Rlc2NyaXB0aW9uLm1vZHVsZS5zY3NzXCI7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gUm93RGVzY3JpcHRpb24oe1xyXG4gIGNsaWNrQnV5LFxyXG4gIGRhdGUsXHJcbiAgZ2FtZVN0YXRlLFxyXG4gIHRlYW1PbmUsXHJcbiAgdGVhbU9uZUljb24sXHJcbiAgc2NvcmUsXHJcbiAgdGVhbVR3byxcclxuICB0ZWFtVHdvSWNvbixcclxuICBidXlCdXR0b25OYW1lLFxyXG4gIGxvY2F0aW9uSW5NYWluUGFnZSxcclxufSkge1xyXG4gIGNvbnN0IC8vIHRyYW5zbGF0aW9uIGNvbnNmaWdzXHJcbiAgICB7IHQgfSA9IHVzZVRyYW5zbGF0aW9uKFwiaG9tZVwiKSxcclxuICAgIHRyYW5zbGF0aW9uUGF0aCA9IGAke2xvY2F0aW9uSW5NYWluUGFnZX1gLFxyXG4gICAgdHJhbnNsYXRlID0gKGtleSkgPT4gdChgJHt0cmFuc2xhdGlvblBhdGh9JHtrZXl9YCksXHJcbiAgICBnYW1lU3RhcnRlZCA9IGdhbWVTdGF0ZS5zbGljZShnYW1lU3RhdGUubGFzdEluZGV4T2YoXCIuXCIpICsgMSkgPT09IFwic3RhcnRlZFwiO1xyXG5cclxuICBjb25zb2xlLmxvZygpO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRlbnR9PlxyXG4gICAgICAgIDxkaXZcclxuICAgICAgICAgIGNsYXNzTmFtZT17YFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAke3N0eWxlcy5kYXRlX2dhbWVOU3RhcnRlZF9jb250ZW50fSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgJHtnYW1lU3RhcnRlZCA/IHN0eWxlcy5kYXRlX2dhbWVTdGFydGVkX2NvbnRlbnQgOiBudWxsfVxyXG4gICAgICAgICAgICAgICAgICAgIGB9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPHNwYW4+e2RhdGV9PC9zcGFuPlxyXG4gICAgICAgICAgPHNwYW4+Jm5ic3A7e3RyYW5zbGF0ZShnYW1lU3RhdGUpfTwvc3Bhbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnRlYW1zfT5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudGVhbU9uZX0+XHJcbiAgICAgICAgICAgIDxwPnt0ZWFtT25lfTwvcD5cclxuICAgICAgICAgICAgPGltZyBzcmM9e3RlYW1PbmVJY29ufSBhbHQ9e3RlYW1PbmV9IC8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuc2NvcmV9PlxyXG4gICAgICAgICAgICA8cD57c2NvcmV9PC9wPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnRlYW1Ud299PlxyXG4gICAgICAgICAgICA8aW1nIHNyYz17dGVhbVR3b0ljb259IGFsdD17dGVhbVR3b30gLz5cclxuICAgICAgICAgICAgPHA+e3RlYW1Ud299PC9wPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5idXlCdXR0b25fY29udGFpbmVyfT5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYnV0dG9uX2NvbnRlbnR9IG9uQ2xpY2s9e2NsaWNrQnV5fT5cclxuICAgICAgICAgICAgPHA+e3RyYW5zbGF0ZShidXlCdXR0b25OYW1lKX08L3A+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=