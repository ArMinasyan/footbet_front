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

  var getSpecificDateMatches = _ref.getSpecificDateMatches;

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
      TMBoardState: showTomorrowGames,
      getSpecificDateMatches: function getSpecificDateMatches(value) {
        return console.log(value);
      }
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 7
    }, this), showTodayGames && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_TMBody_TDMatchesBoard_TDMatchesBoard__WEBPACK_IMPORTED_MODULE_2__.TDMatchesBoard, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 26
    }, this), showTomorrowGames && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_TMBody_TMMatchesBoard_TMMatchesBoard__WEBPACK_IMPORTED_MODULE_3__.TMMatchesBoard, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 29
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 15,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9QYWdlcy9NYWluL01hdGNoZXMvVG9kYXlNYXRjaGVzL1RvZGF5TWF0Y2hlcy5qc3giXSwibmFtZXMiOlsiVG9kYXlNYXRjaGVzIiwiZ2V0U3BlY2lmaWNEYXRlTWF0Y2hlcyIsInVzZVN0YXRlIiwic2hvd1RvZGF5R2FtZXMiLCJzZXRTaG93VG9kYXlHYW1lcyIsInNob3dUb21vcnJvd0dhbWVzIiwic2V0U2hvd1RvbW9ycm93R2FtZXMiLCJzdHlsZXMiLCJ2YWx1ZSIsImNvbnNvbGUiLCJsb2ciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtDQUVBOztBQUNBO0FBQ0E7Q0FFQTs7QUFDQTtBQUVPLFNBQVNBLFlBQVQsT0FBa0Q7QUFBQTs7QUFBQSxNQUExQkMsc0JBQTBCLFFBQTFCQSxzQkFBMEI7O0FBQUEsa0JBRWZDLCtDQUFRLENBQUMsSUFBRCxDQUZPO0FBQUEsTUFFcERDLGNBRm9EO0FBQUEsTUFFcENDLGlCQUZvQztBQUFBLG1CQUdURiwrQ0FBUSxDQUFDLEtBQUQsQ0FIQztBQUFBLE1BR3BERyxpQkFIb0Q7QUFBQSxNQUdqQ0Msb0JBSGlDOztBQUl2RCxzQkFDRTtBQUFLLGFBQVMsRUFBRUMsNEVBQWhCO0FBQUEsNEJBQ0UsOERBQUMsd0RBQUQsQ0FDRTtBQURGO0FBRUUsYUFBTyxFQUFFLG1CQUFNO0FBQ2JILHlCQUFpQixDQUFDLElBQUQsQ0FBakI7QUFDQUUsNEJBQW9CLENBQUMsS0FBRCxDQUFwQjtBQUNELE9BTEg7QUFNRSxrQkFBWSxFQUFFSCxjQU5oQixDQU9FO0FBUEY7QUFRRSxhQUFPLEVBQUUsbUJBQU07QUFDYkMseUJBQWlCLENBQUMsS0FBRCxDQUFqQjtBQUNBRSw0QkFBb0IsQ0FBQyxJQUFELENBQXBCO0FBQ0QsT0FYSDtBQVlFLGtCQUFZLEVBQUVELGlCQVpoQjtBQWFFLDRCQUFzQixFQUFFLGdDQUFDRyxLQUFEO0FBQUEsZUFBV0MsT0FBTyxDQUFDQyxHQUFSLENBQVlGLEtBQVosQ0FBWDtBQUFBO0FBYjFCO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERixFQWdCR0wsY0FBYyxpQkFBSSw4REFBQyxpRkFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBaEJyQixFQWlCR0UsaUJBQWlCLGlCQUFJLDhEQUFDLGlGQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFqQnhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBcUJEOztHQXpCZUwsWTs7S0FBQUEsWSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC4yOWJkNTIwNzQyZjg5MGE2Njk2Ny5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gaG9va3MgYW5kIGhlbHBlcnNcclxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuLy8gY29tcG9uZW50c1xyXG5pbXBvcnQgeyBURE1hdGNoZXNCb2FyZCB9IGZyb20gXCIuL1RNQm9keS9URE1hdGNoZXNCb2FyZC9URE1hdGNoZXNCb2FyZFwiO1xyXG5pbXBvcnQgeyBUTU1hdGNoZXNCb2FyZCB9IGZyb20gXCIuL1RNQm9keS9UTU1hdGNoZXNCb2FyZC9UTU1hdGNoZXNCb2FyZFwiO1xyXG5pbXBvcnQgeyBUTUhlYWRlciB9IGZyb20gXCIuL1RNSGVhZGVyL1RNSGVhZGVyXCI7XHJcbi8vIHN0eWxlc1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuL1RvZGF5TWF0Y2hlcy5tb2R1bGUuc2Nzc1wiO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIFRvZGF5TWF0Y2hlcyh7IGdldFNwZWNpZmljRGF0ZU1hdGNoZXMgfSkge1xyXG4gIGNvbnN0IC8vIHN0YXRlc1xyXG4gICAgW3Nob3dUb2RheUdhbWVzLCBzZXRTaG93VG9kYXlHYW1lc10gPSB1c2VTdGF0ZSh0cnVlKSxcclxuICAgIFtzaG93VG9tb3Jyb3dHYW1lcywgc2V0U2hvd1RvbW9ycm93R2FtZXNdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn0+XHJcbiAgICAgIDxUTUhlYWRlclxyXG4gICAgICAgIC8vIFREID0+IHRvZGF5IGdhbWVzIGJvYXJkIHNob3B3IGNvbmZpZ3NcclxuICAgICAgICBjbGlja1REPXsoKSA9PiB7XHJcbiAgICAgICAgICBzZXRTaG93VG9kYXlHYW1lcyh0cnVlKTtcclxuICAgICAgICAgIHNldFNob3dUb21vcnJvd0dhbWVzKGZhbHNlKTtcclxuICAgICAgICB9fVxyXG4gICAgICAgIFREQm9hcmRTdGF0ZT17c2hvd1RvZGF5R2FtZXN9XHJcbiAgICAgICAgLy8gVE0gPT4gdG9tbW9yb3cgZ2FtZXMgYm9hcmQgc2hvcHcgY29uZmlnc1xyXG4gICAgICAgIGNsaWNrVE09eygpID0+IHtcclxuICAgICAgICAgIHNldFNob3dUb2RheUdhbWVzKGZhbHNlKTtcclxuICAgICAgICAgIHNldFNob3dUb21vcnJvd0dhbWVzKHRydWUpO1xyXG4gICAgICAgIH19XHJcbiAgICAgICAgVE1Cb2FyZFN0YXRlPXtzaG93VG9tb3Jyb3dHYW1lc31cclxuICAgICAgICBnZXRTcGVjaWZpY0RhdGVNYXRjaGVzPXsodmFsdWUpID0+IGNvbnNvbGUubG9nKHZhbHVlKX1cclxuICAgICAgLz5cclxuICAgICAge3Nob3dUb2RheUdhbWVzICYmIDxURE1hdGNoZXNCb2FyZCAvPn1cclxuICAgICAge3Nob3dUb21vcnJvd0dhbWVzICYmIDxUTU1hdGNoZXNCb2FyZCAvPn1cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==