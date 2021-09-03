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
      TMBoardState: showTomorrowGames
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 7
    }, this), showTodayGames && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_TMBody_TDMatchesBoard_TDMatchesBoard__WEBPACK_IMPORTED_MODULE_2__.TDMatchesBoard, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 26
    }, this), showTomorrowGames && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_TMBody_TMMatchesBoard_TMMatchesBoard__WEBPACK_IMPORTED_MODULE_3__.TMMatchesBoard, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 31,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9QYWdlcy9NYWluL01hdGNoZXMvVG9kYXlNYXRjaGVzL1RvZGF5TWF0Y2hlcy5qc3giXSwibmFtZXMiOlsiVG9kYXlNYXRjaGVzIiwiZ2V0U3BlY2lmaWNEYXRlTWF0Y2hlcyIsInVzZVN0YXRlIiwic2hvd1RvZGF5R2FtZXMiLCJzZXRTaG93VG9kYXlHYW1lcyIsInNob3dUb21vcnJvd0dhbWVzIiwic2V0U2hvd1RvbW9ycm93R2FtZXMiLCJzdHlsZXMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtDQUVBOztBQUNBO0FBQ0E7Q0FFQTs7QUFDQTtBQUVPLFNBQVNBLFlBQVQsT0FBa0Q7QUFBQTs7QUFBQSxNQUExQkMsc0JBQTBCLFFBQTFCQSxzQkFBMEI7O0FBQUEsa0JBRWZDLCtDQUFRLENBQUMsSUFBRCxDQUZPO0FBQUEsTUFFcERDLGNBRm9EO0FBQUEsTUFFcENDLGlCQUZvQztBQUFBLG1CQUdURiwrQ0FBUSxDQUFDLEtBQUQsQ0FIQztBQUFBLE1BR3BERyxpQkFIb0Q7QUFBQSxNQUdqQ0Msb0JBSGlDOztBQUl2RCxzQkFDRTtBQUFLLGFBQVMsRUFBRUMsNEVBQWhCO0FBQUEsNEJBQ0UsOERBQUMsd0RBQUQsQ0FDRTtBQURGO0FBRUUsYUFBTyxFQUFFLG1CQUFNO0FBQ2JILHlCQUFpQixDQUFDLElBQUQsQ0FBakI7QUFDQUUsNEJBQW9CLENBQUMsS0FBRCxDQUFwQjtBQUNELE9BTEg7QUFNRSxrQkFBWSxFQUFFSCxjQU5oQixDQU9FO0FBUEY7QUFRRSxhQUFPLEVBQUUsbUJBQU07QUFDYkMseUJBQWlCLENBQUMsS0FBRCxDQUFqQjtBQUNBRSw0QkFBb0IsQ0FBQyxJQUFELENBQXBCO0FBQ0QsT0FYSDtBQVlFLGtCQUFZLEVBQUVEO0FBWmhCO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERixFQWVHRixjQUFjLGlCQUFJLDhEQUFDLGlGQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFmckIsRUFnQkdFLGlCQUFpQixpQkFBSSw4REFBQyxpRkFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBaEJ4QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQW9CRDs7R0F4QmVMLFk7O0tBQUFBLFkiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguZDQ1MjUxZDRlMmYyNjBkY2RlMDMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGhvb2tzIGFuZCBoZWxwZXJzXHJcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbi8vIGNvbXBvbmVudHNcclxuaW1wb3J0IHsgVERNYXRjaGVzQm9hcmQgfSBmcm9tIFwiLi9UTUJvZHkvVERNYXRjaGVzQm9hcmQvVERNYXRjaGVzQm9hcmRcIjtcclxuaW1wb3J0IHsgVE1NYXRjaGVzQm9hcmQgfSBmcm9tIFwiLi9UTUJvZHkvVE1NYXRjaGVzQm9hcmQvVE1NYXRjaGVzQm9hcmRcIjtcclxuaW1wb3J0IHsgVE1IZWFkZXIgfSBmcm9tIFwiLi9UTUhlYWRlci9UTUhlYWRlclwiO1xyXG4vLyBzdHlsZXNcclxuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi9Ub2RheU1hdGNoZXMubW9kdWxlLnNjc3NcIjtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBUb2RheU1hdGNoZXMoeyBnZXRTcGVjaWZpY0RhdGVNYXRjaGVzIH0pIHtcclxuICBjb25zdCAvLyBzdGF0ZXNcclxuICAgIFtzaG93VG9kYXlHYW1lcywgc2V0U2hvd1RvZGF5R2FtZXNdID0gdXNlU3RhdGUodHJ1ZSksXHJcbiAgICBbc2hvd1RvbW9ycm93R2FtZXMsIHNldFNob3dUb21vcnJvd0dhbWVzXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9PlxyXG4gICAgICA8VE1IZWFkZXJcclxuICAgICAgICAvLyBURCA9PiB0b2RheSBnYW1lcyBib2FyZCBzaG9wdyBjb25maWdzXHJcbiAgICAgICAgY2xpY2tURD17KCkgPT4ge1xyXG4gICAgICAgICAgc2V0U2hvd1RvZGF5R2FtZXModHJ1ZSk7XHJcbiAgICAgICAgICBzZXRTaG93VG9tb3Jyb3dHYW1lcyhmYWxzZSk7XHJcbiAgICAgICAgfX1cclxuICAgICAgICBUREJvYXJkU3RhdGU9e3Nob3dUb2RheUdhbWVzfVxyXG4gICAgICAgIC8vIFRNID0+IHRvbW1vcm93IGdhbWVzIGJvYXJkIHNob3B3IGNvbmZpZ3NcclxuICAgICAgICBjbGlja1RNPXsoKSA9PiB7XHJcbiAgICAgICAgICBzZXRTaG93VG9kYXlHYW1lcyhmYWxzZSk7XHJcbiAgICAgICAgICBzZXRTaG93VG9tb3Jyb3dHYW1lcyh0cnVlKTtcclxuICAgICAgICB9fVxyXG4gICAgICAgIFRNQm9hcmRTdGF0ZT17c2hvd1RvbW9ycm93R2FtZXN9XHJcbiAgICAgIC8+XHJcbiAgICAgIHtzaG93VG9kYXlHYW1lcyAmJiA8VERNYXRjaGVzQm9hcmQgLz59XHJcbiAgICAgIHtzaG93VG9tb3Jyb3dHYW1lcyAmJiA8VE1NYXRjaGVzQm9hcmQgLz59XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=