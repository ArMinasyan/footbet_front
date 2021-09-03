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
      columnNumber: 13
    }, this), showTodayGames && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_TMBody_TDMatchesBoard_TDMatchesBoard__WEBPACK_IMPORTED_MODULE_2__.TDMatchesBoard, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 32
    }, this), showTomorrowGames && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_TMBody_TMMatchesBoard_TMMatchesBoard__WEBPACK_IMPORTED_MODULE_3__.TMMatchesBoard, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 35
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 18,
    columnNumber: 9
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9QYWdlcy9NYWluL01hdGNoZXMvVG9kYXlNYXRjaGVzL1RvZGF5TWF0Y2hlcy5qc3giXSwibmFtZXMiOlsiVG9kYXlNYXRjaGVzIiwiZ2V0U3BlY2lmaWNEYXRNYXRjaGVzIiwidXNlU3RhdGUiLCJzaG93VG9kYXlHYW1lcyIsInNldFNob3dUb2RheUdhbWVzIiwic2hvd1RvbW9ycm93R2FtZXMiLCJzZXRTaG93VG9tb3Jyb3dHYW1lcyIsInN0eWxlcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0NBRUE7O0FBQ0E7QUFDQTtDQUVBOztBQUNBO0FBRU8sU0FBU0EsWUFBVCxPQUErQztBQUFBOztBQUFBLE1BQXhCQyxxQkFBd0IsUUFBeEJBLHFCQUF3Qjs7QUFBQSxrQkFJUkMsK0NBQVEsQ0FBQyxJQUFELENBSkE7QUFBQSxNQUk3Q0MsY0FKNkM7QUFBQSxNQUk3QkMsaUJBSjZCO0FBQUEsbUJBS0ZGLCtDQUFRLENBQUMsS0FBRCxDQUxOO0FBQUEsTUFLN0NHLGlCQUw2QztBQUFBLE1BSzFCQyxvQkFMMEI7O0FBT2xELHNCQUNJO0FBQUssYUFBUyxFQUFFQyw0RUFBaEI7QUFBQSw0QkFDSSw4REFBQyx3REFBRCxDQUNJO0FBREo7QUFFSSxhQUFPLEVBQUUsbUJBQU07QUFDWEgseUJBQWlCLENBQUMsSUFBRCxDQUFqQjtBQUNBRSw0QkFBb0IsQ0FBQyxLQUFELENBQXBCO0FBQ0gsT0FMTDtBQU1JLGtCQUFZLEVBQUVILGNBTmxCLENBT0k7QUFQSjtBQVFJLGFBQU8sRUFBRSxtQkFBTTtBQUNYQyx5QkFBaUIsQ0FBQyxLQUFELENBQWpCO0FBQ0FFLDRCQUFvQixDQUFDLElBQUQsQ0FBcEI7QUFDSCxPQVhMO0FBWUksa0JBQVksRUFBRUQ7QUFabEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURKLEVBZUtGLGNBQWMsaUJBQUksOERBQUMsaUZBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQWZ2QixFQWdCS0UsaUJBQWlCLGlCQUFJLDhEQUFDLGlGQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFoQjFCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURKO0FBcUJIOztHQTVCZUwsWTs7S0FBQUEsWSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5kMzYwOGIxY2I1YTEyMTE1ODg1OS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gaG9va3MgYW5kIGhlbHBlcnNcclxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcclxuLy8gY29tcG9uZW50c1xyXG5pbXBvcnQgeyBURE1hdGNoZXNCb2FyZCB9IGZyb20gJy4vVE1Cb2R5L1RETWF0Y2hlc0JvYXJkL1RETWF0Y2hlc0JvYXJkJ1xyXG5pbXBvcnQgeyBUTU1hdGNoZXNCb2FyZCB9IGZyb20gJy4vVE1Cb2R5L1RNTWF0Y2hlc0JvYXJkL1RNTWF0Y2hlc0JvYXJkJ1xyXG5pbXBvcnQgeyBUTUhlYWRlciB9IGZyb20gJy4vVE1IZWFkZXIvVE1IZWFkZXInXHJcbi8vIHN0eWxlc1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vVG9kYXlNYXRjaGVzLm1vZHVsZS5zY3NzJ1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIFRvZGF5TWF0Y2hlcyh7Z2V0U3BlY2lmaWNEYXRNYXRjaGVzfSkge1xyXG5cclxuICAgIGNvbnN0XHJcbiAgICAgICAgLy8gc3RhdGVzXHJcbiAgICAgICAgW3Nob3dUb2RheUdhbWVzLCBzZXRTaG93VG9kYXlHYW1lc10gPSB1c2VTdGF0ZSh0cnVlKSxcclxuICAgICAgICBbc2hvd1RvbW9ycm93R2FtZXMsIHNldFNob3dUb21vcnJvd0dhbWVzXSA9IHVzZVN0YXRlKGZhbHNlKVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9PlxyXG4gICAgICAgICAgICA8VE1IZWFkZXJcclxuICAgICAgICAgICAgICAgIC8vIFREID0+IHRvZGF5IGdhbWVzIGJvYXJkIHNob3B3IGNvbmZpZ3NcclxuICAgICAgICAgICAgICAgIGNsaWNrVEQ9eygpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBzZXRTaG93VG9kYXlHYW1lcyh0cnVlKVxyXG4gICAgICAgICAgICAgICAgICAgIHNldFNob3dUb21vcnJvd0dhbWVzKGZhbHNlKVxyXG4gICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgIFREQm9hcmRTdGF0ZT17c2hvd1RvZGF5R2FtZXN9XHJcbiAgICAgICAgICAgICAgICAvLyBUTSA9PiB0b21tb3JvdyBnYW1lcyBib2FyZCBzaG9wdyBjb25maWdzXHJcbiAgICAgICAgICAgICAgICBjbGlja1RNPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0U2hvd1RvZGF5R2FtZXMoZmFsc2UpXHJcbiAgICAgICAgICAgICAgICAgICAgc2V0U2hvd1RvbW9ycm93R2FtZXModHJ1ZSlcclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICBUTUJvYXJkU3RhdGU9e3Nob3dUb21vcnJvd0dhbWVzfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICB7c2hvd1RvZGF5R2FtZXMgJiYgPFRETWF0Y2hlc0JvYXJkIC8+fVxyXG4gICAgICAgICAgICB7c2hvd1RvbW9ycm93R2FtZXMgJiYgPFRNTWF0Y2hlc0JvYXJkIC8+fVxyXG5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9