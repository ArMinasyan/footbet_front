self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/Pages/Main/Prediction/PredictionSlide/Item/Timer/Timer.jsx":
/*!*******************************************************************************!*\
  !*** ./components/Pages/Main/Prediction/PredictionSlide/Item/Timer/Timer.jsx ***!
  \*******************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Timer": function() { return /* binding */ Timer; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_timer_hook__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-timer-hook */ "./node_modules/react-timer-hook/dist/index.js");
/* harmony import */ var react_timer_hook__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_timer_hook__WEBPACK_IMPORTED_MODULE_2__);
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "C:\\Users\\Admin\\Desktop\\projects\\foot-bet\\components\\Pages\\Main\\Prediction\\PredictionSlide\\Item\\Timer\\Timer.jsx",
    _s = $RefreshSig$();



function Timer(_ref) {
  _s();

  var expiryTimestamp = _ref.expiryTimestamp,
      timeClass = _ref.timeClass,
      timeOut = _ref.timeOut;

  var _useTimer = (0,react_timer_hook__WEBPACK_IMPORTED_MODULE_2__.useTimer)({
    expiryTimestamp: expiryTimestamp,
    onExpire: function onExpire() {
      return timeOut();
    }
  }),
      seconds = _useTimer.seconds,
      minutes = _useTimer.minutes,
      hours = _useTimer.hours,
      days = _useTimer.days;

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: timeClass,
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
        children: hours < 10 ? "0" + hours : days ? days * 24 + hours : hours
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 9
      }, this), ":", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
        children: minutes < 10 ? "0" + minutes : minutes
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 10
      }, this), ":", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
        children: seconds < 10 ? "0" + seconds : seconds
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 10,
    columnNumber: 5
  }, this);
}

_s(Timer, "jEWod3i489gf/krFQjZGadpKtco=", false, function () {
  return [react_timer_hook__WEBPACK_IMPORTED_MODULE_2__.useTimer];
});

_c = Timer;

var _c;

$RefreshReg$(_c, "Timer");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9QYWdlcy9NYWluL1ByZWRpY3Rpb24vUHJlZGljdGlvblNsaWRlL0l0ZW0vVGltZXIvVGltZXIuanN4Il0sIm5hbWVzIjpbIlRpbWVyIiwiZXhwaXJ5VGltZXN0YW1wIiwidGltZUNsYXNzIiwidGltZU91dCIsInVzZVRpbWVyIiwib25FeHBpcmUiLCJzZWNvbmRzIiwibWludXRlcyIsImhvdXJzIiwiZGF5cyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFTyxTQUFTQSxLQUFULE9BQXdEO0FBQUE7O0FBQUEsTUFBdkNDLGVBQXVDLFFBQXZDQSxlQUF1QztBQUFBLE1BQXRCQyxTQUFzQixRQUF0QkEsU0FBc0I7QUFBQSxNQUFYQyxPQUFXLFFBQVhBLE9BQVc7O0FBQUEsa0JBQ25CQywwREFBUSxDQUFDO0FBQ2pESCxtQkFBZSxFQUFmQSxlQURpRDtBQUVqREksWUFBUSxFQUFFO0FBQUEsYUFBTUYsT0FBTyxFQUFiO0FBQUE7QUFGdUMsR0FBRCxDQURXO0FBQUEsTUFDckRHLE9BRHFELGFBQ3JEQSxPQURxRDtBQUFBLE1BQzVDQyxPQUQ0QyxhQUM1Q0EsT0FENEM7QUFBQSxNQUNuQ0MsS0FEbUMsYUFDbkNBLEtBRG1DO0FBQUEsTUFDNUJDLElBRDRCLGFBQzVCQSxJQUQ0Qjs7QUFLN0Qsc0JBQ0U7QUFBSyxhQUFTLEVBQUVQLFNBQWhCO0FBQUEsMkJBQ0U7QUFBQSw4QkFDRTtBQUFBLGtCQUNHTSxLQUFLLEdBQUcsRUFBUixHQUFhLE1BQU1BLEtBQW5CLEdBQTJCQyxJQUFJLEdBQUlBLElBQUksR0FBRyxFQUFSLEdBQWNELEtBQWpCLEdBQXlCQTtBQUQzRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREYsb0JBSUc7QUFBQSxrQkFBT0QsT0FBTyxHQUFHLEVBQVYsR0FBZSxNQUFNQSxPQUFyQixHQUErQkE7QUFBdEM7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUpILG9CQUtFO0FBQUEsa0JBQU9ELE9BQU8sR0FBRyxFQUFWLEdBQWUsTUFBTUEsT0FBckIsR0FBK0JBO0FBQXRDO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FMRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFXRDs7R0FoQmVOLEs7VUFDNEJJLHNEOzs7S0FENUJKLEsiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguYzU3OGQwZDQ0NzhjMjhhMzgxY2EuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgdXNlVGltZXIgfSBmcm9tIFwicmVhY3QtdGltZXItaG9va1wiO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIFRpbWVyKHsgZXhwaXJ5VGltZXN0YW1wLCB0aW1lQ2xhc3MsIHRpbWVPdXQgfSkge1xyXG4gIGNvbnN0IHsgc2Vjb25kcywgbWludXRlcywgaG91cnMsIGRheXMgfSA9IHVzZVRpbWVyKHtcclxuICAgIGV4cGlyeVRpbWVzdGFtcCxcclxuICAgIG9uRXhwaXJlOiAoKSA9PiB0aW1lT3V0KCksXHJcbiAgfSk7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXt0aW1lQ2xhc3N9PlxyXG4gICAgICA8ZGl2PlxyXG4gICAgICAgIDxzcGFuPlxyXG4gICAgICAgICAge2hvdXJzIDwgMTAgPyBcIjBcIiArIGhvdXJzIDogZGF5cyA/IChkYXlzICogMjQpICsgaG91cnMgOiBob3Vyc31cclxuICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgOjxzcGFuPnttaW51dGVzIDwgMTAgPyBcIjBcIiArIG1pbnV0ZXMgOiBtaW51dGVzfTwvc3Bhbj46XHJcbiAgICAgICAgPHNwYW4+e3NlY29uZHMgPCAxMCA/IFwiMFwiICsgc2Vjb25kcyA6IHNlY29uZHN9PC9zcGFuPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==