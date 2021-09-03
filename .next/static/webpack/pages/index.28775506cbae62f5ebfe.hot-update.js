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
            return console.log(new Date(value));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9QYWdlcy9NYWluL01hdGNoZXMvVG9kYXlNYXRjaGVzL1RNSGVhZGVyL1RNSGVhZGVyLmpzeCJdLCJuYW1lcyI6WyJUTUhlYWRlciIsImNsaWNrVEQiLCJjbGlja1RNIiwiVERCb2FyZFN0YXRlIiwiVE1Cb2FyZFN0YXRlIiwiZ2V0U3BlY2lmaWNEYXRNYXRjaGVzIiwiZ2V0X2RhdGUiLCJ2YWx1ZSIsImRhdGUiLCJEYXRlIiwiZGF5IiwibW9udGgiLCJnZXRNb250aCIsInllYXIiLCJnZXRGdWxsWWVhciIsImdldERhdGUiLCJ1c2VTdGF0ZSIsInNob3dDYWxlbmRhciIsInNldFNob3dDYWxlbmRhciIsInN0eWxlcyIsInRpdGxlIiwiY2FsZW5kYXIiLCJhcnJvd1JpZ2h0Iiwic3JjIiwiYXJyb3dMZWZ0IiwiY29uc29sZSIsImxvZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0NBRUE7O0FBQ0E7QUFDQTtDQUVBOztDQUVBOztBQUNBO0FBQ0E7QUFDQTtBQUVPLFNBQVNBLFFBQVQsT0FNSjtBQUFBOztBQUFBLE1BTERDLE9BS0MsUUFMREEsT0FLQztBQUFBLE1BSkRDLE9BSUMsUUFKREEsT0FJQztBQUFBLE1BSERDLFlBR0MsUUFIREEsWUFHQztBQUFBLE1BRkRDLFlBRUMsUUFGREEsWUFFQztBQUFBLE1BRERDLHFCQUNDLFFBRERBLHFCQUNDOztBQUNLO0FBQ0o7QUFDQSxNQUFBQyxRQUFRLEdBQUcsU0FBWEEsUUFBVyxDQUFDQyxLQUFELEVBQVc7QUFDcEIsUUFBSUMsSUFBSSxHQUFHLElBQUlDLElBQUosRUFBWDtBQUFBLFFBQ0VDLEdBQUcsR0FBRyxJQURSO0FBQUEsUUFFRUMsS0FBSyxHQUFHSCxJQUFJLENBQUNJLFFBQUwsS0FBa0IsQ0FGNUI7QUFBQSxRQUdFQyxJQUFJLEdBQUdMLElBQUksQ0FBQ00sV0FBTCxFQUhUOztBQUtBLFlBQVFQLEtBQVI7QUFDRSxXQUFLLEtBQUw7QUFDRUcsV0FBRyxHQUFHRixJQUFJLENBQUNPLE9BQUwsRUFBTjtBQUNBOztBQUNGLFdBQUssS0FBTDtBQUNFTCxXQUFHLEdBQUdGLElBQUksQ0FBQ08sT0FBTCxLQUFpQixDQUF2QjtBQUNBOztBQUNGO0FBQ0VMLFdBQUcsR0FBRyxFQUFOO0FBQ0E7QUFUSjs7QUFZQSxxQkFBVUEsR0FBVixjQUFpQkMsS0FBSyxHQUFHLEVBQVIsR0FBYSxNQUFNQSxLQUFuQixHQUEyQkEsS0FBNUMsY0FBcURFLElBQXJEO0FBQ0QsR0FuQkQ7QUFBQSxrQkFxQmtDRywrQ0FBUSxDQUFDLEtBQUQsQ0FyQjFDO0FBQUEsTUFxQkNDLFlBckJEO0FBQUEsTUFxQmVDLGVBckJmOztBQXVCRixzQkFDRTtBQUFLLGFBQVMsRUFBRUMsd0VBQWhCO0FBQUEsMkJBQ0U7QUFBSyxlQUFTLEVBQUVBLHNFQUFoQjtBQUFBLDhCQUNFLDhEQUFDLHNEQUFEO0FBQ0UsWUFBSSxFQUFFLE1BRFI7QUFFRSxzQkFBYyxFQUFFLFNBRmxCO0FBR0Usb0JBQVksRUFBRSxpQkFIaEI7QUFJRSxlQUFPLEVBQUVBLG9FQUFZQztBQUp2QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREYsZUFPRTtBQUFLLGlCQUFTLEVBQUVELGlGQUFoQjtBQUFBLGdDQUNFLDhEQUFDLDZFQUFEO0FBQ0UsY0FBSSxFQUFDLHlCQURQO0FBRUUsNEJBQWtCLEVBQUUsU0FGdEI7QUFHRSxjQUFJLEVBQUViLFFBQVEsQ0FBQyxLQUFELENBSGhCO0FBSUUsZ0JBQU0sRUFBRUgsWUFBWSxHQUFHLE1BQUgsR0FBWSxJQUpsQztBQUtFLGVBQUssRUFBRUY7QUFMVDtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURGLGVBUUUsOERBQUMsNkVBQUQ7QUFDRSxjQUFJLEVBQUMsNEJBRFA7QUFFRSw0QkFBa0IsRUFBRSxTQUZ0QjtBQUdFLGNBQUksRUFBRUssUUFBUSxDQUFDLEtBQUQsQ0FIaEI7QUFJRSxnQkFBTSxFQUFFRixZQUFZLEdBQUcsTUFBSCxHQUFZLElBSmxDO0FBS0UsZUFBSyxFQUFFRjtBQUxUO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBUkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBUEYsZUF1QkU7QUFBSyxpQkFBUyxFQUFFaUIsdUVBQWhCO0FBQUEsK0JBQ0U7QUFDRSxhQUFHLEVBQUVFLGlGQURQO0FBRUUsYUFBRyxFQUFDLGVBRk47QUFHRSxpQkFBTyxFQUFFO0FBQUEsbUJBQU1ILGVBQWUsQ0FBQyxDQUFDRCxZQUFGLENBQXJCO0FBQUE7QUFIWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQXZCRixlQThCRTtBQUFLLGlCQUFTLEVBQUVFLDRFQUFoQjtBQUFBLGtCQUNHRixZQUFZLGlCQUNYLDhEQUFDLG1EQUFEO0FBQ0UsOEJBQW9CLEVBQUUsS0FEeEI7QUFFRSx5QkFBZSxFQUFFLEtBRm5CO0FBR0UsbUJBQVMsZUFBRTtBQUFLLGVBQUcsRUFBRUssbUZBQWNDO0FBQXhCO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBSGI7QUFJRSxtQkFBUyxlQUFFO0FBQUssZUFBRyxFQUFFQyxrRkFBYUQ7QUFBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFKYjtBQUtFLGtCQUFRLEVBQUUsa0JBQUNoQixLQUFEO0FBQUEsbUJBQVdrQixPQUFPLENBQUNDLEdBQVIsQ0FBWSxJQUFJakIsSUFBSixDQUFTRixLQUFULENBQVosQ0FBWDtBQUFBO0FBTFo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0E5QkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBOENEOztHQTlFZVAsUTs7S0FBQUEsUSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC4yODc3NTUwNmNiYWU2MmY1ZWJmZS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gaG9va3NcclxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuLy8gY29tcG9uZW50c1xyXG5pbXBvcnQgeyBUaXRsZSB9IGZyb20gXCIuLi8uLi8uLi8uLi9jb21tb24vVGl0bGUvVGl0bGVcIjtcclxuaW1wb3J0IHsgRGF5Q2hhbmdlQnV0dG9uIH0gZnJvbSBcIi4vRGF5Q2hhbmdlQnV0dG9uL0RheUNoYW5nZUJ1dHRvblwiO1xyXG5pbXBvcnQgQ2FsZW5kYXIgZnJvbSBcInJlYWN0LWNhbGVuZGFyXCI7XHJcbi8vIHN0eWxlc1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuL1RNSGVhZGVyLm1vZHVsZS5zY3NzXCI7XHJcbi8vIGljb25zXHJcbmltcG9ydCBjYWxlbmRhciBmcm9tIFwiL3B1YmxpYy9pbWFnZXMvbWFpbi9tYXRjaGVzL0NhbGVuZGFyLnBuZ1wiO1xyXG5pbXBvcnQgYXJyb3dSaWdodCBmcm9tIFwiL3B1YmxpYy9pbWFnZXMvbWFpbi9tYXRjaGVzL2Fycm93UmlnaHQucG5nXCI7XHJcbmltcG9ydCBhcnJvd0xlZnQgZnJvbSBcIi9wdWJsaWMvaW1hZ2VzL21haW4vbWF0Y2hlcy9hcnJvd0xlZnQucG5nXCI7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gVE1IZWFkZXIoe1xyXG4gIGNsaWNrVEQsXHJcbiAgY2xpY2tUTSxcclxuICBUREJvYXJkU3RhdGUsXHJcbiAgVE1Cb2FyZFN0YXRlLFxyXG4gIGdldFNwZWNpZmljRGF0TWF0Y2hlcyxcclxufSkge1xyXG4gIGNvbnN0IC8vIGZ1bmN0aW9uc1xyXG4gICAgLy8gZ2V0X2RhdGUgdmFsdWUgY2hhbmdlcyB5X2QgPT4geWVzdGVyZGF5LCB0X2QgPT4gdG9kYXksIHRfdyA9PnRvbW9ycm93XHJcbiAgICBnZXRfZGF0ZSA9ICh2YWx1ZSkgPT4ge1xyXG4gICAgICBsZXQgZGF0ZSA9IG5ldyBEYXRlKCksXHJcbiAgICAgICAgZGF5ID0gbnVsbCxcclxuICAgICAgICBtb250aCA9IGRhdGUuZ2V0TW9udGgoKSArIDEsXHJcbiAgICAgICAgeWVhciA9IGRhdGUuZ2V0RnVsbFllYXIoKTtcclxuXHJcbiAgICAgIHN3aXRjaCAodmFsdWUpIHtcclxuICAgICAgICBjYXNlIFwidF9kXCI6XHJcbiAgICAgICAgICBkYXkgPSBkYXRlLmdldERhdGUoKTtcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgXCJ0X21cIjpcclxuICAgICAgICAgIGRheSA9IGRhdGUuZ2V0RGF0ZSgpICsgMTtcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICBkYXkgPSBcIlwiO1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHJldHVybiBgJHtkYXl9LiR7bW9udGggPCAxMCA/IFwiMFwiICsgbW9udGggOiBtb250aH0uJHt5ZWFyfWA7XHJcbiAgICB9LFxyXG4gICAgLy8gc3RhdGVzXHJcbiAgICBbc2hvd0NhbGVuZGFyLCBzZXRTaG93Q2FsZW5kYXJdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRlbnR9PlxyXG4gICAgICAgIDxUaXRsZVxyXG4gICAgICAgICAgcGFnZT17XCJob21lXCJ9XHJcbiAgICAgICAgICBsb2NhdGlvbkluUGFnZT17XCJtYXRjaGVzXCJ9XHJcbiAgICAgICAgICB0ZXh0UGF0aE5hbWU9e1wiLlRNLmhlYWRlclRpdGxlXCJ9XHJcbiAgICAgICAgICBjbGFzc2VzPXtzdHlsZXMudGl0bGV9XHJcbiAgICAgICAgLz5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmRheV9jaGFuZ2VfYnV0dG9uc30+XHJcbiAgICAgICAgICA8RGF5Q2hhbmdlQnV0dG9uXHJcbiAgICAgICAgICAgIG5hbWU9XCIuVE0uaGVhZGVyQnV0dG9ucy50b2RheVwiXHJcbiAgICAgICAgICAgIGxvY2F0aW9uSW5NYWluUGFnZT17XCJtYXRjaGVzXCJ9XHJcbiAgICAgICAgICAgIGRhdGU9e2dldF9kYXRlKFwidF9kXCIpfVxyXG4gICAgICAgICAgICBhY3RpdmU9e1REQm9hcmRTdGF0ZSA/IFwic2hvd1wiIDogbnVsbH1cclxuICAgICAgICAgICAgY2xpY2s9e2NsaWNrVER9XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICAgPERheUNoYW5nZUJ1dHRvblxyXG4gICAgICAgICAgICBuYW1lPVwiLlRNLmhlYWRlckJ1dHRvbnMudG9tb3Jyb3dcIlxyXG4gICAgICAgICAgICBsb2NhdGlvbkluTWFpblBhZ2U9e1wibWF0Y2hlc1wifVxyXG4gICAgICAgICAgICBkYXRlPXtnZXRfZGF0ZShcInRfbVwiKX1cclxuICAgICAgICAgICAgYWN0aXZlPXtUTUJvYXJkU3RhdGUgPyBcInNob3dcIiA6IG51bGx9XHJcbiAgICAgICAgICAgIGNsaWNrPXtjbGlja1RNfVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNhbGVuZGFyfT5cclxuICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgc3JjPXtjYWxlbmRhci5zcmN9XHJcbiAgICAgICAgICAgIGFsdD1cImNhbGVuZGFyLWljb25cIlxyXG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRTaG93Q2FsZW5kYXIoIXNob3dDYWxlbmRhcil9XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY2FsZW5kYXJfYm9keX0+XHJcbiAgICAgICAgICB7c2hvd0NhbGVuZGFyICYmIChcclxuICAgICAgICAgICAgPENhbGVuZGFyXHJcbiAgICAgICAgICAgICAgc2hvd05laWdoYm9yaW5nTW9udGg9e2ZhbHNlfVxyXG4gICAgICAgICAgICAgIHNob3dXZWVrTnVtYmVycz17ZmFsc2V9XHJcbiAgICAgICAgICAgICAgbmV4dExhYmVsPXs8aW1nIHNyYz17YXJyb3dSaWdodC5zcmN9IC8+fVxyXG4gICAgICAgICAgICAgIHByZXZMYWJlbD17PGltZyBzcmM9e2Fycm93TGVmdC5zcmN9IC8+fVxyXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXsodmFsdWUpID0+IGNvbnNvbGUubG9nKG5ldyBEYXRlKHZhbHVlKSl9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICApfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==