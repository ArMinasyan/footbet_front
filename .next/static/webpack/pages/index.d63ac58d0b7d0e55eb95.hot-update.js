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
      TMBoardState = _ref.TMBoardState;

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
        lineNumber: 43,
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
          lineNumber: 50,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_DayChangeButton_DayChangeButton__WEBPACK_IMPORTED_MODULE_3__.DayChangeButton, {
          name: ".TM.headerButtons.tomorrow",
          locationInMainPage: "matches",
          date: get_date("t_m"),
          active: TMBoardState ? "show" : null,
          click: clickTM
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 57,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 49,
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
          lineNumber: 66,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 65,
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
            lineNumber: 77,
            columnNumber: 26
          }, this),
          prevLabel: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
            src: _public_images_main_matches_arrowLeft_png__WEBPACK_IMPORTED_MODULE_6__.default.src
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 78,
            columnNumber: 26
          }, this),
          onChange: function onChange() {}
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 74,
          columnNumber: 13
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 72,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 41,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9QYWdlcy9NYWluL01hdGNoZXMvVG9kYXlNYXRjaGVzL1RNSGVhZGVyL1RNSGVhZGVyLmpzeCJdLCJuYW1lcyI6WyJUTUhlYWRlciIsImNsaWNrVEQiLCJjbGlja1RNIiwiVERCb2FyZFN0YXRlIiwiVE1Cb2FyZFN0YXRlIiwiZ2V0X2RhdGUiLCJ2YWx1ZSIsImRhdGUiLCJEYXRlIiwiZGF5IiwibW9udGgiLCJnZXRNb250aCIsInllYXIiLCJnZXRGdWxsWWVhciIsImdldERhdGUiLCJ1c2VTdGF0ZSIsInNob3dDYWxlbmRhciIsInNldFNob3dDYWxlbmRhciIsInN0eWxlcyIsInRpdGxlIiwiY2FsZW5kYXIiLCJhcnJvd1JpZ2h0Iiwic3JjIiwiYXJyb3dMZWZ0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Q0FFQTs7QUFDQTtBQUNBO0NBRUE7O0NBRUE7O0FBQ0E7QUFDQTtBQUNBO0FBRU8sU0FBU0EsUUFBVCxPQUFvRTtBQUFBOztBQUFBLE1BQWhEQyxPQUFnRCxRQUFoREEsT0FBZ0Q7QUFBQSxNQUF2Q0MsT0FBdUMsUUFBdkNBLE9BQXVDO0FBQUEsTUFBOUJDLFlBQThCLFFBQTlCQSxZQUE4QjtBQUFBLE1BQWhCQyxZQUFnQixRQUFoQkEsWUFBZ0I7O0FBQ25FO0FBQ0o7QUFDQSxNQUFBQyxRQUFRLEdBQUcsU0FBWEEsUUFBVyxDQUFDQyxLQUFELEVBQVc7QUFDcEIsUUFBSUMsSUFBSSxHQUFHLElBQUlDLElBQUosRUFBWDtBQUFBLFFBQ0VDLEdBQUcsR0FBRyxJQURSO0FBQUEsUUFFRUMsS0FBSyxHQUFHSCxJQUFJLENBQUNJLFFBQUwsS0FBa0IsQ0FGNUI7QUFBQSxRQUdFQyxJQUFJLEdBQUdMLElBQUksQ0FBQ00sV0FBTCxFQUhUOztBQUtBLFlBQVFQLEtBQVI7QUFDRSxXQUFLLEtBQUw7QUFDRUcsV0FBRyxHQUFHRixJQUFJLENBQUNPLE9BQUwsRUFBTjtBQUNBOztBQUNGLFdBQUssS0FBTDtBQUNFTCxXQUFHLEdBQUdGLElBQUksQ0FBQ08sT0FBTCxLQUFpQixDQUF2QjtBQUNBOztBQUNGO0FBQ0VMLFdBQUcsR0FBRyxFQUFOO0FBQ0E7QUFUSjs7QUFZQSxxQkFBVUEsR0FBVixjQUFpQkMsS0FBSyxHQUFHLEVBQVIsR0FBYSxNQUFNQSxLQUFuQixHQUEyQkEsS0FBNUMsY0FBcURFLElBQXJEO0FBQ0QsR0FuQkQ7QUFBQSxrQkFxQmtDRywrQ0FBUSxDQUFDLEtBQUQsQ0FyQjFDO0FBQUEsTUFxQkNDLFlBckJEO0FBQUEsTUFxQmVDLGVBckJmOztBQXVCRixzQkFDRTtBQUFLLGFBQVMsRUFBRUMsd0VBQWhCO0FBQUEsMkJBQ0U7QUFBSyxlQUFTLEVBQUVBLHNFQUFoQjtBQUFBLDhCQUNFLDhEQUFDLHNEQUFEO0FBQ0UsWUFBSSxFQUFFLE1BRFI7QUFFRSxzQkFBYyxFQUFFLFNBRmxCO0FBR0Usb0JBQVksRUFBRSxpQkFIaEI7QUFJRSxlQUFPLEVBQUVBLG9FQUFZQztBQUp2QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREYsZUFPRTtBQUFLLGlCQUFTLEVBQUVELGlGQUFoQjtBQUFBLGdDQUNFLDhEQUFDLDZFQUFEO0FBQ0UsY0FBSSxFQUFDLHlCQURQO0FBRUUsNEJBQWtCLEVBQUUsU0FGdEI7QUFHRSxjQUFJLEVBQUViLFFBQVEsQ0FBQyxLQUFELENBSGhCO0FBSUUsZ0JBQU0sRUFBRUYsWUFBWSxHQUFHLE1BQUgsR0FBWSxJQUpsQztBQUtFLGVBQUssRUFBRUY7QUFMVDtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURGLGVBUUUsOERBQUMsNkVBQUQ7QUFDRSxjQUFJLEVBQUMsNEJBRFA7QUFFRSw0QkFBa0IsRUFBRSxTQUZ0QjtBQUdFLGNBQUksRUFBRUksUUFBUSxDQUFDLEtBQUQsQ0FIaEI7QUFJRSxnQkFBTSxFQUFFRCxZQUFZLEdBQUcsTUFBSCxHQUFZLElBSmxDO0FBS0UsZUFBSyxFQUFFRjtBQUxUO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBUkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBUEYsZUF1QkU7QUFBSyxpQkFBUyxFQUFFZ0IsdUVBQWhCO0FBQUEsK0JBQ0U7QUFDRSxhQUFHLEVBQUVFLGlGQURQO0FBRUUsYUFBRyxFQUFDLGVBRk47QUFHRSxpQkFBTyxFQUFFO0FBQUEsbUJBQU1ILGVBQWUsQ0FBQyxDQUFDRCxZQUFGLENBQXJCO0FBQUE7QUFIWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQXZCRixlQThCRTtBQUFLLGlCQUFTLEVBQUVFLDRFQUFoQjtBQUFBLGtCQUNHRixZQUFZLGlCQUNYLDhEQUFDLG1EQUFEO0FBQ0UsOEJBQW9CLEVBQUUsS0FEeEI7QUFFRSx5QkFBZSxFQUFFLEtBRm5CO0FBR0UsbUJBQVMsZUFBRTtBQUFLLGVBQUcsRUFBRUssbUZBQWNDO0FBQXhCO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBSGI7QUFJRSxtQkFBUyxlQUFFO0FBQUssZUFBRyxFQUFFQyxrRkFBYUQ7QUFBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFKYjtBQUtFLGtCQUFRLEVBQUUsb0JBQU0sQ0FBRTtBQUxwQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRko7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQTlCRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUE4Q0Q7O0dBeEVldEIsUTs7S0FBQUEsUSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5kNjNhYzU4ZDBiN2QwZTU1ZWI5NS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gaG9va3NcclxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuLy8gY29tcG9uZW50c1xyXG5pbXBvcnQgeyBUaXRsZSB9IGZyb20gXCIuLi8uLi8uLi8uLi9jb21tb24vVGl0bGUvVGl0bGVcIjtcclxuaW1wb3J0IHsgRGF5Q2hhbmdlQnV0dG9uIH0gZnJvbSBcIi4vRGF5Q2hhbmdlQnV0dG9uL0RheUNoYW5nZUJ1dHRvblwiO1xyXG5pbXBvcnQgQ2FsZW5kYXIgZnJvbSBcInJlYWN0LWNhbGVuZGFyXCI7XHJcbi8vIHN0eWxlc1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuL1RNSGVhZGVyLm1vZHVsZS5zY3NzXCI7XHJcbi8vIGljb25zXHJcbmltcG9ydCBjYWxlbmRhciBmcm9tIFwiL3B1YmxpYy9pbWFnZXMvbWFpbi9tYXRjaGVzL0NhbGVuZGFyLnBuZ1wiO1xyXG5pbXBvcnQgYXJyb3dSaWdodCBmcm9tIFwiL3B1YmxpYy9pbWFnZXMvbWFpbi9tYXRjaGVzL2Fycm93UmlnaHQucG5nXCI7XHJcbmltcG9ydCBhcnJvd0xlZnQgZnJvbSBcIi9wdWJsaWMvaW1hZ2VzL21haW4vbWF0Y2hlcy9hcnJvd0xlZnQucG5nXCI7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gVE1IZWFkZXIoeyBjbGlja1RELCBjbGlja1RNLCBUREJvYXJkU3RhdGUsIFRNQm9hcmRTdGF0ZSB9KSB7XHJcbiAgY29uc3QgLy8gZnVuY3Rpb25zXHJcbiAgICAvLyBnZXRfZGF0ZSB2YWx1ZSBjaGFuZ2VzIHlfZCA9PiB5ZXN0ZXJkYXksIHRfZCA9PiB0b2RheSwgdF93ID0+dG9tb3Jyb3dcclxuICAgIGdldF9kYXRlID0gKHZhbHVlKSA9PiB7XHJcbiAgICAgIGxldCBkYXRlID0gbmV3IERhdGUoKSxcclxuICAgICAgICBkYXkgPSBudWxsLFxyXG4gICAgICAgIG1vbnRoID0gZGF0ZS5nZXRNb250aCgpICsgMSxcclxuICAgICAgICB5ZWFyID0gZGF0ZS5nZXRGdWxsWWVhcigpO1xyXG5cclxuICAgICAgc3dpdGNoICh2YWx1ZSkge1xyXG4gICAgICAgIGNhc2UgXCJ0X2RcIjpcclxuICAgICAgICAgIGRheSA9IGRhdGUuZ2V0RGF0ZSgpO1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSBcInRfbVwiOlxyXG4gICAgICAgICAgZGF5ID0gZGF0ZS5nZXREYXRlKCkgKyAxO1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgIGRheSA9IFwiXCI7XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG5cclxuICAgICAgcmV0dXJuIGAke2RheX0uJHttb250aCA8IDEwID8gXCIwXCIgKyBtb250aCA6IG1vbnRofS4ke3llYXJ9YDtcclxuICAgIH0sXHJcbiAgICAvLyBzdGF0ZXNcclxuICAgIFtzaG93Q2FsZW5kYXIsIHNldFNob3dDYWxlbmRhcl0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn0+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGVudH0+XHJcbiAgICAgICAgPFRpdGxlXHJcbiAgICAgICAgICBwYWdlPXtcImhvbWVcIn1cclxuICAgICAgICAgIGxvY2F0aW9uSW5QYWdlPXtcIm1hdGNoZXNcIn1cclxuICAgICAgICAgIHRleHRQYXRoTmFtZT17XCIuVE0uaGVhZGVyVGl0bGVcIn1cclxuICAgICAgICAgIGNsYXNzZXM9e3N0eWxlcy50aXRsZX1cclxuICAgICAgICAvPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZGF5X2NoYW5nZV9idXR0b25zfT5cclxuICAgICAgICAgIDxEYXlDaGFuZ2VCdXR0b25cclxuICAgICAgICAgICAgbmFtZT1cIi5UTS5oZWFkZXJCdXR0b25zLnRvZGF5XCJcclxuICAgICAgICAgICAgbG9jYXRpb25Jbk1haW5QYWdlPXtcIm1hdGNoZXNcIn1cclxuICAgICAgICAgICAgZGF0ZT17Z2V0X2RhdGUoXCJ0X2RcIil9XHJcbiAgICAgICAgICAgIGFjdGl2ZT17VERCb2FyZFN0YXRlID8gXCJzaG93XCIgOiBudWxsfVxyXG4gICAgICAgICAgICBjbGljaz17Y2xpY2tURH1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8RGF5Q2hhbmdlQnV0dG9uXHJcbiAgICAgICAgICAgIG5hbWU9XCIuVE0uaGVhZGVyQnV0dG9ucy50b21vcnJvd1wiXHJcbiAgICAgICAgICAgIGxvY2F0aW9uSW5NYWluUGFnZT17XCJtYXRjaGVzXCJ9XHJcbiAgICAgICAgICAgIGRhdGU9e2dldF9kYXRlKFwidF9tXCIpfVxyXG4gICAgICAgICAgICBhY3RpdmU9e1RNQm9hcmRTdGF0ZSA/IFwic2hvd1wiIDogbnVsbH1cclxuICAgICAgICAgICAgY2xpY2s9e2NsaWNrVE19XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY2FsZW5kYXJ9PlxyXG4gICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICBzcmM9e2NhbGVuZGFyLnNyY31cclxuICAgICAgICAgICAgYWx0PVwiY2FsZW5kYXItaWNvblwiXHJcbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldFNob3dDYWxlbmRhcighc2hvd0NhbGVuZGFyKX1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jYWxlbmRhcl9ib2R5fT5cclxuICAgICAgICAgIHtzaG93Q2FsZW5kYXIgJiYgKFxyXG4gICAgICAgICAgICA8Q2FsZW5kYXJcclxuICAgICAgICAgICAgICBzaG93TmVpZ2hib3JpbmdNb250aD17ZmFsc2V9XHJcbiAgICAgICAgICAgICAgc2hvd1dlZWtOdW1iZXJzPXtmYWxzZX1cclxuICAgICAgICAgICAgICBuZXh0TGFiZWw9ezxpbWcgc3JjPXthcnJvd1JpZ2h0LnNyY30gLz59XHJcbiAgICAgICAgICAgICAgcHJldkxhYmVsPXs8aW1nIHNyYz17YXJyb3dMZWZ0LnNyY30gLz59XHJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9eygpID0+IHt9fVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgKX1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=