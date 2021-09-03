self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/Pages/Main/Matches/TodayMatches/TodayMatches.jsx":
/*!*********************************************************************!*\
  !*** ./components/Pages/Main/Matches/TodayMatches/TodayMatches.jsx ***!
  \*********************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TodayMatches": function() { return /* binding */ TodayMatches; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _TMBody_TDMatchesBoard_TDMatchesBoard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./TMBody/TDMatchesBoard/TDMatchesBoard */ "./components/Pages/Main/Matches/TodayMatches/TMBody/TDMatchesBoard/TDMatchesBoard.jsx");
/* harmony import */ var _TMBody_TMMatchesBoard_TMMatchesBoard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./TMBody/TMMatchesBoard/TMMatchesBoard */ "./components/Pages/Main/Matches/TodayMatches/TMBody/TMMatchesBoard/TMMatchesBoard.jsx");
/* harmony import */ var _TMHeader_TMHeader__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./TMHeader/TMHeader */ "./components/Pages/Main/Matches/TodayMatches/TMHeader/TMHeader.jsx");
/* harmony import */ var _TodayMatches_module_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./TodayMatches.module.scss */ "./components/Pages/Main/Matches/TodayMatches/TodayMatches.module.scss");
/* harmony import */ var _TodayMatches_module_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_TodayMatches_module_scss__WEBPACK_IMPORTED_MODULE_5__);
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "C:\\Users\\Admin\\Desktop\\projects\\foot-bet\\components\\Pages\\Main\\Matches\\TodayMatches\\TodayMatches.jsx",
    _s = $RefreshSig$();

// hooks and helpers
 // components



 // styles


function TodayMatches(_ref) {
  _s();

  var getSpecificDatMatches = _ref.getSpecificDatMatches;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true),
      showTodayGames = _useState[0],
      setShowTodayGames = _useState[1],
      _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false),
      showTomorrowGames = _useState2[0],
      setShowTomorrowGames = _useState2[1];

  getSpecificDatMatches = function getSpecificDatMatches(value) {
    return value;
  };

  console.log(getSpecificDatMatches);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: (_TodayMatches_module_scss__WEBPACK_IMPORTED_MODULE_5___default().container),
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_TMHeader_TMHeader__WEBPACK_IMPORTED_MODULE_4__.TMHeader // TD => today games board shopw configs
    , {
      clickTD: function clickTD() {
        setShowTodayGames(true);
        setShowTomorrowGames(false);
      },
      TDBoardState: showTodayGames // TM => tommorow games board shopw configs
      ,
      clickTM: function clickTM() {
        setShowTodayGames(false);
        setShowTomorrowGames(true);
      },
      TMBoardState: showTomorrowGames
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 7
    }, this), showTodayGames && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_TMBody_TDMatchesBoard_TDMatchesBoard__WEBPACK_IMPORTED_MODULE_2__.TDMatchesBoard, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 26
    }, this), showTomorrowGames && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_TMBody_TMMatchesBoard_TMMatchesBoard__WEBPACK_IMPORTED_MODULE_3__.TMMatchesBoard, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 29
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 18,
    columnNumber: 5
  }, this);
}

_s(TodayMatches, "Q6G84FXdVIru8OdYIIHmka3l8ak=");

_c = TodayMatches;

var _c;

$RefreshReg$(_c, "TodayMatches");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9QYWdlcy9NYWluL01hdGNoZXMvVG9kYXlNYXRjaGVzL1RvZGF5TWF0Y2hlcy5qc3giXSwibmFtZXMiOlsiVG9kYXlNYXRjaGVzIiwiZ2V0U3BlY2lmaWNEYXRNYXRjaGVzIiwidXNlU3RhdGUiLCJzaG93VG9kYXlHYW1lcyIsInNldFNob3dUb2RheUdhbWVzIiwic2hvd1RvbW9ycm93R2FtZXMiLCJzZXRTaG93VG9tb3Jyb3dHYW1lcyIsInZhbHVlIiwiY29uc29sZSIsImxvZyIsInN0eWxlcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0NBRUE7O0FBQ0E7QUFDQTtDQUVBOztBQUNBO0FBRU8sU0FBU0EsWUFBVCxPQUFpRDtBQUFBOztBQUFBLE1BQXpCQyxxQkFBeUIsUUFBekJBLHFCQUF5Qjs7QUFBQSxrQkFFZEMsK0NBQVEsQ0FBQyxJQUFELENBRk07QUFBQSxNQUVuREMsY0FGbUQ7QUFBQSxNQUVuQ0MsaUJBRm1DO0FBQUEsbUJBR1JGLCtDQUFRLENBQUMsS0FBRCxDQUhBO0FBQUEsTUFHbkRHLGlCQUhtRDtBQUFBLE1BR2hDQyxvQkFIZ0M7O0FBSXBETCx1QkFBcUIsR0FBRywrQkFBQ00sS0FBRDtBQUFBLFdBQVVBLEtBQVY7QUFBQSxHQUF4Qjs7QUFDQUMsU0FBTyxDQUFDQyxHQUFSLENBQVlSLHFCQUFaO0FBRUYsc0JBQ0U7QUFBSyxhQUFTLEVBQUVTLDRFQUFoQjtBQUFBLDRCQUNFLDhEQUFDLHdEQUFELENBQ0U7QUFERjtBQUVFLGFBQU8sRUFBRSxtQkFBTTtBQUNiTix5QkFBaUIsQ0FBQyxJQUFELENBQWpCO0FBQ0FFLDRCQUFvQixDQUFDLEtBQUQsQ0FBcEI7QUFDRCxPQUxIO0FBTUUsa0JBQVksRUFBRUgsY0FOaEIsQ0FPRTtBQVBGO0FBUUUsYUFBTyxFQUFFLG1CQUFNO0FBQ2JDLHlCQUFpQixDQUFDLEtBQUQsQ0FBakI7QUFDQUUsNEJBQW9CLENBQUMsSUFBRCxDQUFwQjtBQUNELE9BWEg7QUFZRSxrQkFBWSxFQUFFRDtBQVpoQjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREYsRUFlR0YsY0FBYyxpQkFBSSw4REFBQyxpRkFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBZnJCLEVBZ0JHRSxpQkFBaUIsaUJBQUksOERBQUMsaUZBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQWhCeEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFvQkQ7O0dBM0JlTCxZOztLQUFBQSxZIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmQ2M2QwYjE0MzA0MzgyOGMyYTAxLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBob29rcyBhbmQgaGVscGVyc1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG4vLyBjb21wb25lbnRzXHJcbmltcG9ydCB7IFRETWF0Y2hlc0JvYXJkIH0gZnJvbSBcIi4vVE1Cb2R5L1RETWF0Y2hlc0JvYXJkL1RETWF0Y2hlc0JvYXJkXCI7XHJcbmltcG9ydCB7IFRNTWF0Y2hlc0JvYXJkIH0gZnJvbSBcIi4vVE1Cb2R5L1RNTWF0Y2hlc0JvYXJkL1RNTWF0Y2hlc0JvYXJkXCI7XHJcbmltcG9ydCB7IFRNSGVhZGVyIH0gZnJvbSBcIi4vVE1IZWFkZXIvVE1IZWFkZXJcIjtcclxuLy8gc3R5bGVzXHJcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4vVG9kYXlNYXRjaGVzLm1vZHVsZS5zY3NzXCI7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gVG9kYXlNYXRjaGVzKHsgZ2V0U3BlY2lmaWNEYXRNYXRjaGVzIH0pIHtcclxuICBjb25zdCAvLyBzdGF0ZXNcclxuICAgIFtzaG93VG9kYXlHYW1lcywgc2V0U2hvd1RvZGF5R2FtZXNdID0gdXNlU3RhdGUodHJ1ZSksXHJcbiAgICBbc2hvd1RvbW9ycm93R2FtZXMsIHNldFNob3dUb21vcnJvd0dhbWVzXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGdldFNwZWNpZmljRGF0TWF0Y2hlcyA9ICh2YWx1ZSk9PiB2YWx1ZVxyXG4gICAgY29uc29sZS5sb2coZ2V0U3BlY2lmaWNEYXRNYXRjaGVzKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfT5cclxuICAgICAgPFRNSGVhZGVyXHJcbiAgICAgICAgLy8gVEQgPT4gdG9kYXkgZ2FtZXMgYm9hcmQgc2hvcHcgY29uZmlnc1xyXG4gICAgICAgIGNsaWNrVEQ9eygpID0+IHtcclxuICAgICAgICAgIHNldFNob3dUb2RheUdhbWVzKHRydWUpO1xyXG4gICAgICAgICAgc2V0U2hvd1RvbW9ycm93R2FtZXMoZmFsc2UpO1xyXG4gICAgICAgIH19XHJcbiAgICAgICAgVERCb2FyZFN0YXRlPXtzaG93VG9kYXlHYW1lc31cclxuICAgICAgICAvLyBUTSA9PiB0b21tb3JvdyBnYW1lcyBib2FyZCBzaG9wdyBjb25maWdzXHJcbiAgICAgICAgY2xpY2tUTT17KCkgPT4ge1xyXG4gICAgICAgICAgc2V0U2hvd1RvZGF5R2FtZXMoZmFsc2UpO1xyXG4gICAgICAgICAgc2V0U2hvd1RvbW9ycm93R2FtZXModHJ1ZSk7XHJcbiAgICAgICAgfX1cclxuICAgICAgICBUTUJvYXJkU3RhdGU9e3Nob3dUb21vcnJvd0dhbWVzfVxyXG4gICAgICAvPlxyXG4gICAgICB7c2hvd1RvZGF5R2FtZXMgJiYgPFRETWF0Y2hlc0JvYXJkIC8+fVxyXG4gICAgICB7c2hvd1RvbW9ycm93R2FtZXMgJiYgPFRNTWF0Y2hlc0JvYXJkIC8+fVxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9