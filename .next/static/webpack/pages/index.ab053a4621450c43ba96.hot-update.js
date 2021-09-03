self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/Pages/Main/Matches/TodayMatches/TMHeader/TMHeader.jsx":
/*!**************************************************************************!*\
  !*** ./components/Pages/Main/Matches/TodayMatches/TMHeader/TMHeader.jsx ***!
  \**************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TMHeader": function() { return /* binding */ TMHeader; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _common_Title_Title__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../common/Title/Title */ "./components/Pages/common/Title/Title.jsx");
/* harmony import */ var _DayChangeButton_DayChangeButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./DayChangeButton/DayChangeButton */ "./components/Pages/Main/Matches/TodayMatches/TMHeader/DayChangeButton/DayChangeButton.jsx");
/* harmony import */ var react_calendar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-calendar */ "./node_modules/react-calendar/dist/esm/index.js");
/* harmony import */ var _TMHeader_module_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./TMHeader.module.scss */ "./components/Pages/Main/Matches/TodayMatches/TMHeader/TMHeader.module.scss");
/* harmony import */ var _TMHeader_module_scss__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_TMHeader_module_scss__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _public_images_main_matches_Calendar_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../public/images/main/matches/Calendar.png */ "./public/images/main/matches/Calendar.png");
/* harmony import */ var _public_images_main_matches_arrowRight_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../public/images/main/matches/arrowRight.png */ "./public/images/main/matches/arrowRight.png");
/* harmony import */ var _public_images_main_matches_arrowLeft_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../../public/images/main/matches/arrowLeft.png */ "./public/images/main/matches/arrowLeft.png");
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "C:\\Users\\Admin\\Desktop\\projects\\foot-bet\\components\\Pages\\Main\\Matches\\TodayMatches\\TMHeader\\TMHeader.jsx",
    _s = $RefreshSig$();

// hooks
 // components



 // styles

 // icons




function TMHeader(_ref) {
  _s();

  var clickTD = _ref.clickTD,
      clickTM = _ref.clickTM,
      TDBoardState = _ref.TDBoardState,
      TMBoardState = _ref.TMBoardState,
      getSpecificDatMatches = _ref.getSpecificDatMatches;

  // functions
  // get_date value changes y_d => yesterday, t_d => today, t_w =>tomorrow
  var get_date = function get_date(value) {
    var date = new Date(),
        day = null,
        month = date.getMonth() + 1,
        year = date.getFullYear();

    switch (value) {
      case "t_d":
        day = date.getDate();
        break;

      case "t_m":
        day = date.getDate() + 1;
        break;

      default:
        day = "";
        break;
    }

    return "".concat(day, ".").concat(month < 10 ? "0" + month : month, ".").concat(year);
  },
      _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false),
      showCalendar = _useState[0],
      setShowCalendar = _useState[1];

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: (_TMHeader_module_scss__WEBPACK_IMPORTED_MODULE_7___default().container),
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: (_TMHeader_module_scss__WEBPACK_IMPORTED_MODULE_7___default().content),
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_common_Title_Title__WEBPACK_IMPORTED_MODULE_2__.Title, {
        page: "home",
        locationInPage: "matches",
        textPathName: ".TM.headerTitle",
        classes: (_TMHeader_module_scss__WEBPACK_IMPORTED_MODULE_7___default().title)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 49,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: (_TMHeader_module_scss__WEBPACK_IMPORTED_MODULE_7___default().day_change_buttons),
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_DayChangeButton_DayChangeButton__WEBPACK_IMPORTED_MODULE_3__.DayChangeButton, {
          name: ".TM.headerButtons.today",
          locationInMainPage: "matches",
          date: get_date("t_d"),
          active: TDBoardState ? "show" : null,
          click: clickTD
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 56,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_DayChangeButton_DayChangeButton__WEBPACK_IMPORTED_MODULE_3__.DayChangeButton, {
          name: ".TM.headerButtons.tomorrow",
          locationInMainPage: "matches",
          date: get_date("t_m"),
          active: TMBoardState ? "show" : null,
          click: clickTM
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 63,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 55,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: (_TMHeader_module_scss__WEBPACK_IMPORTED_MODULE_7___default().calendar),
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
          src: _public_images_main_matches_Calendar_png__WEBPACK_IMPORTED_MODULE_4__.default.src,
          alt: "calendar-icon",
          onClick: function onClick() {
            return setShowCalendar(!showCalendar);
          }
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 72,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 71,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: (_TMHeader_module_scss__WEBPACK_IMPORTED_MODULE_7___default().calendar_body),
        children: showCalendar && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_calendar__WEBPACK_IMPORTED_MODULE_8__.default, {
          showNeighboringMonth: false,
          showWeekNumbers: false,
          nextLabel: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
            src: _public_images_main_matches_arrowRight_png__WEBPACK_IMPORTED_MODULE_5__.default.src
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 83,
            columnNumber: 26
          }, this),
          prevLabel: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
            src: _public_images_main_matches_arrowLeft_png__WEBPACK_IMPORTED_MODULE_6__.default.src
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 84,
            columnNumber: 26
          }, this),
          onChange: function onChange(value) {
            return getSpecificDatMatches(value);
          }
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 80,
          columnNumber: 13
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 78,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 47,
    columnNumber: 5
  }, this);
}

_s(TMHeader, "u1zb0Fc10LfynpQ7veqpddC2v5c=");

_c = TMHeader;

var _c;

$RefreshReg$(_c, "TMHeader");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9QYWdlcy9NYWluL01hdGNoZXMvVG9kYXlNYXRjaGVzL1RNSGVhZGVyL1RNSGVhZGVyLmpzeCJdLCJuYW1lcyI6WyJUTUhlYWRlciIsImNsaWNrVEQiLCJjbGlja1RNIiwiVERCb2FyZFN0YXRlIiwiVE1Cb2FyZFN0YXRlIiwiZ2V0U3BlY2lmaWNEYXRNYXRjaGVzIiwiZ2V0X2RhdGUiLCJ2YWx1ZSIsImRhdGUiLCJEYXRlIiwiZGF5IiwibW9udGgiLCJnZXRNb250aCIsInllYXIiLCJnZXRGdWxsWWVhciIsImdldERhdGUiLCJ1c2VTdGF0ZSIsInNob3dDYWxlbmRhciIsInNldFNob3dDYWxlbmRhciIsInN0eWxlcyIsInRpdGxlIiwiY2FsZW5kYXIiLCJhcnJvd1JpZ2h0Iiwic3JjIiwiYXJyb3dMZWZ0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Q0FFQTs7QUFDQTtBQUNBO0NBRUE7O0NBRUE7O0FBQ0E7QUFDQTtBQUNBO0FBRU8sU0FBU0EsUUFBVCxPQU1KO0FBQUE7O0FBQUEsTUFMREMsT0FLQyxRQUxEQSxPQUtDO0FBQUEsTUFKREMsT0FJQyxRQUpEQSxPQUlDO0FBQUEsTUFIREMsWUFHQyxRQUhEQSxZQUdDO0FBQUEsTUFGREMsWUFFQyxRQUZEQSxZQUVDO0FBQUEsTUFEREMscUJBQ0MsUUFEREEscUJBQ0M7O0FBQ0s7QUFDSjtBQUNBLE1BQUFDLFFBQVEsR0FBRyxTQUFYQSxRQUFXLENBQUNDLEtBQUQsRUFBVztBQUNwQixRQUFJQyxJQUFJLEdBQUcsSUFBSUMsSUFBSixFQUFYO0FBQUEsUUFDRUMsR0FBRyxHQUFHLElBRFI7QUFBQSxRQUVFQyxLQUFLLEdBQUdILElBQUksQ0FBQ0ksUUFBTCxLQUFrQixDQUY1QjtBQUFBLFFBR0VDLElBQUksR0FBR0wsSUFBSSxDQUFDTSxXQUFMLEVBSFQ7O0FBS0EsWUFBUVAsS0FBUjtBQUNFLFdBQUssS0FBTDtBQUNFRyxXQUFHLEdBQUdGLElBQUksQ0FBQ08sT0FBTCxFQUFOO0FBQ0E7O0FBQ0YsV0FBSyxLQUFMO0FBQ0VMLFdBQUcsR0FBR0YsSUFBSSxDQUFDTyxPQUFMLEtBQWlCLENBQXZCO0FBQ0E7O0FBQ0Y7QUFDRUwsV0FBRyxHQUFHLEVBQU47QUFDQTtBQVRKOztBQVlBLHFCQUFVQSxHQUFWLGNBQWlCQyxLQUFLLEdBQUcsRUFBUixHQUFhLE1BQU1BLEtBQW5CLEdBQTJCQSxLQUE1QyxjQUFxREUsSUFBckQ7QUFDRCxHQW5CRDtBQUFBLGtCQXFCa0NHLCtDQUFRLENBQUMsS0FBRCxDQXJCMUM7QUFBQSxNQXFCQ0MsWUFyQkQ7QUFBQSxNQXFCZUMsZUFyQmY7O0FBdUJGLHNCQUNFO0FBQUssYUFBUyxFQUFFQyx3RUFBaEI7QUFBQSwyQkFDRTtBQUFLLGVBQVMsRUFBRUEsc0VBQWhCO0FBQUEsOEJBQ0UsOERBQUMsc0RBQUQ7QUFDRSxZQUFJLEVBQUUsTUFEUjtBQUVFLHNCQUFjLEVBQUUsU0FGbEI7QUFHRSxvQkFBWSxFQUFFLGlCQUhoQjtBQUlFLGVBQU8sRUFBRUEsb0VBQVlDO0FBSnZCO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERixlQU9FO0FBQUssaUJBQVMsRUFBRUQsaUZBQWhCO0FBQUEsZ0NBQ0UsOERBQUMsNkVBQUQ7QUFDRSxjQUFJLEVBQUMseUJBRFA7QUFFRSw0QkFBa0IsRUFBRSxTQUZ0QjtBQUdFLGNBQUksRUFBRWIsUUFBUSxDQUFDLEtBQUQsQ0FIaEI7QUFJRSxnQkFBTSxFQUFFSCxZQUFZLEdBQUcsTUFBSCxHQUFZLElBSmxDO0FBS0UsZUFBSyxFQUFFRjtBQUxUO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREYsZUFRRSw4REFBQyw2RUFBRDtBQUNFLGNBQUksRUFBQyw0QkFEUDtBQUVFLDRCQUFrQixFQUFFLFNBRnRCO0FBR0UsY0FBSSxFQUFFSyxRQUFRLENBQUMsS0FBRCxDQUhoQjtBQUlFLGdCQUFNLEVBQUVGLFlBQVksR0FBRyxNQUFILEdBQVksSUFKbEM7QUFLRSxlQUFLLEVBQUVGO0FBTFQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFSRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FQRixlQXVCRTtBQUFLLGlCQUFTLEVBQUVpQix1RUFBaEI7QUFBQSwrQkFDRTtBQUNFLGFBQUcsRUFBRUUsaUZBRFA7QUFFRSxhQUFHLEVBQUMsZUFGTjtBQUdFLGlCQUFPLEVBQUU7QUFBQSxtQkFBTUgsZUFBZSxDQUFDLENBQUNELFlBQUYsQ0FBckI7QUFBQTtBQUhYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBdkJGLGVBOEJFO0FBQUssaUJBQVMsRUFBRUUsNEVBQWhCO0FBQUEsa0JBQ0dGLFlBQVksaUJBQ1gsOERBQUMsbURBQUQ7QUFDRSw4QkFBb0IsRUFBRSxLQUR4QjtBQUVFLHlCQUFlLEVBQUUsS0FGbkI7QUFHRSxtQkFBUyxlQUFFO0FBQUssZUFBRyxFQUFFSyxtRkFBY0M7QUFBeEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFIYjtBQUlFLG1CQUFTLGVBQUU7QUFBSyxlQUFHLEVBQUVDLGtGQUFhRDtBQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUpiO0FBS0Usa0JBQVEsRUFBRSxrQkFBQ2hCLEtBQUQ7QUFBQSxtQkFBV0YscUJBQXFCLENBQUNFLEtBQUQsQ0FBaEM7QUFBQTtBQUxaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFGSjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBOUJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQThDRDs7R0E5RWVQLFE7O0tBQUFBLFEiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguYWIwNTNhNDYyMTQ1MGM0M2JhOTYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGhvb2tzXHJcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbi8vIGNvbXBvbmVudHNcclxuaW1wb3J0IHsgVGl0bGUgfSBmcm9tIFwiLi4vLi4vLi4vLi4vY29tbW9uL1RpdGxlL1RpdGxlXCI7XHJcbmltcG9ydCB7IERheUNoYW5nZUJ1dHRvbiB9IGZyb20gXCIuL0RheUNoYW5nZUJ1dHRvbi9EYXlDaGFuZ2VCdXR0b25cIjtcclxuaW1wb3J0IENhbGVuZGFyIGZyb20gXCJyZWFjdC1jYWxlbmRhclwiO1xyXG4vLyBzdHlsZXNcclxuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi9UTUhlYWRlci5tb2R1bGUuc2Nzc1wiO1xyXG4vLyBpY29uc1xyXG5pbXBvcnQgY2FsZW5kYXIgZnJvbSBcIi9wdWJsaWMvaW1hZ2VzL21haW4vbWF0Y2hlcy9DYWxlbmRhci5wbmdcIjtcclxuaW1wb3J0IGFycm93UmlnaHQgZnJvbSBcIi9wdWJsaWMvaW1hZ2VzL21haW4vbWF0Y2hlcy9hcnJvd1JpZ2h0LnBuZ1wiO1xyXG5pbXBvcnQgYXJyb3dMZWZ0IGZyb20gXCIvcHVibGljL2ltYWdlcy9tYWluL21hdGNoZXMvYXJyb3dMZWZ0LnBuZ1wiO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIFRNSGVhZGVyKHtcclxuICBjbGlja1RELFxyXG4gIGNsaWNrVE0sXHJcbiAgVERCb2FyZFN0YXRlLFxyXG4gIFRNQm9hcmRTdGF0ZSxcclxuICBnZXRTcGVjaWZpY0RhdE1hdGNoZXMsXHJcbn0pIHtcclxuICBjb25zdCAvLyBmdW5jdGlvbnNcclxuICAgIC8vIGdldF9kYXRlIHZhbHVlIGNoYW5nZXMgeV9kID0+IHllc3RlcmRheSwgdF9kID0+IHRvZGF5LCB0X3cgPT50b21vcnJvd1xyXG4gICAgZ2V0X2RhdGUgPSAodmFsdWUpID0+IHtcclxuICAgICAgbGV0IGRhdGUgPSBuZXcgRGF0ZSgpLFxyXG4gICAgICAgIGRheSA9IG51bGwsXHJcbiAgICAgICAgbW9udGggPSBkYXRlLmdldE1vbnRoKCkgKyAxLFxyXG4gICAgICAgIHllYXIgPSBkYXRlLmdldEZ1bGxZZWFyKCk7XHJcblxyXG4gICAgICBzd2l0Y2ggKHZhbHVlKSB7XHJcbiAgICAgICAgY2FzZSBcInRfZFwiOlxyXG4gICAgICAgICAgZGF5ID0gZGF0ZS5nZXREYXRlKCk7XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIFwidF9tXCI6XHJcbiAgICAgICAgICBkYXkgPSBkYXRlLmdldERhdGUoKSArIDE7XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgZGF5ID0gXCJcIjtcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcblxyXG4gICAgICByZXR1cm4gYCR7ZGF5fS4ke21vbnRoIDwgMTAgPyBcIjBcIiArIG1vbnRoIDogbW9udGh9LiR7eWVhcn1gO1xyXG4gICAgfSxcclxuICAgIC8vIHN0YXRlc1xyXG4gICAgW3Nob3dDYWxlbmRhciwgc2V0U2hvd0NhbGVuZGFyXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfT5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250ZW50fT5cclxuICAgICAgICA8VGl0bGVcclxuICAgICAgICAgIHBhZ2U9e1wiaG9tZVwifVxyXG4gICAgICAgICAgbG9jYXRpb25JblBhZ2U9e1wibWF0Y2hlc1wifVxyXG4gICAgICAgICAgdGV4dFBhdGhOYW1lPXtcIi5UTS5oZWFkZXJUaXRsZVwifVxyXG4gICAgICAgICAgY2xhc3Nlcz17c3R5bGVzLnRpdGxlfVxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5kYXlfY2hhbmdlX2J1dHRvbnN9PlxyXG4gICAgICAgICAgPERheUNoYW5nZUJ1dHRvblxyXG4gICAgICAgICAgICBuYW1lPVwiLlRNLmhlYWRlckJ1dHRvbnMudG9kYXlcIlxyXG4gICAgICAgICAgICBsb2NhdGlvbkluTWFpblBhZ2U9e1wibWF0Y2hlc1wifVxyXG4gICAgICAgICAgICBkYXRlPXtnZXRfZGF0ZShcInRfZFwiKX1cclxuICAgICAgICAgICAgYWN0aXZlPXtUREJvYXJkU3RhdGUgPyBcInNob3dcIiA6IG51bGx9XHJcbiAgICAgICAgICAgIGNsaWNrPXtjbGlja1REfVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICAgIDxEYXlDaGFuZ2VCdXR0b25cclxuICAgICAgICAgICAgbmFtZT1cIi5UTS5oZWFkZXJCdXR0b25zLnRvbW9ycm93XCJcclxuICAgICAgICAgICAgbG9jYXRpb25Jbk1haW5QYWdlPXtcIm1hdGNoZXNcIn1cclxuICAgICAgICAgICAgZGF0ZT17Z2V0X2RhdGUoXCJ0X21cIil9XHJcbiAgICAgICAgICAgIGFjdGl2ZT17VE1Cb2FyZFN0YXRlID8gXCJzaG93XCIgOiBudWxsfVxyXG4gICAgICAgICAgICBjbGljaz17Y2xpY2tUTX1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jYWxlbmRhcn0+XHJcbiAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgIHNyYz17Y2FsZW5kYXIuc3JjfVxyXG4gICAgICAgICAgICBhbHQ9XCJjYWxlbmRhci1pY29uXCJcclxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0U2hvd0NhbGVuZGFyKCFzaG93Q2FsZW5kYXIpfVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNhbGVuZGFyX2JvZHl9PlxyXG4gICAgICAgICAge3Nob3dDYWxlbmRhciAmJiAoXHJcbiAgICAgICAgICAgIDxDYWxlbmRhclxyXG4gICAgICAgICAgICAgIHNob3dOZWlnaGJvcmluZ01vbnRoPXtmYWxzZX1cclxuICAgICAgICAgICAgICBzaG93V2Vla051bWJlcnM9e2ZhbHNlfVxyXG4gICAgICAgICAgICAgIG5leHRMYWJlbD17PGltZyBzcmM9e2Fycm93UmlnaHQuc3JjfSAvPn1cclxuICAgICAgICAgICAgICBwcmV2TGFiZWw9ezxpbWcgc3JjPXthcnJvd0xlZnQuc3JjfSAvPn1cclxuICAgICAgICAgICAgICBvbkNoYW5nZT17KHZhbHVlKSA9PiBnZXRTcGVjaWZpY0RhdE1hdGNoZXModmFsdWUpfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgKX1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=