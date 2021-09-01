self["webpackHotUpdate_N_E"]("pages/statistics",{

/***/ "./components/Pages/Statistics/Tab/StatisticsTab/StatisticsTab.jsx":
/*!*************************************************************************!*\
  !*** ./components/Pages/Statistics/Tab/StatisticsTab/StatisticsTab.jsx ***!
  \*************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StatisticsTab": function() { return /* binding */ StatisticsTab; }
/* harmony export */ });
/* harmony import */ var C_Users_Admin_Desktop_projects_foot_bet_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var C_Users_Admin_Desktop_projects_foot_bet_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(C_Users_Admin_Desktop_projects_foot_bet_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_Users_Admin_Desktop_projects_foot_bet_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var C_Users_Admin_Desktop_projects_foot_bet_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _Row_Row__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Row/Row */ "./components/Pages/Statistics/Tab/Row/Row.jsx");
/* harmony import */ var _TabHeader_TabHeader__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../TabHeader/TabHeader */ "./components/Pages/Statistics/Tab/TabHeader/TabHeader.jsx");
/* harmony import */ var _StatisticsTab_module_scss__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./StatisticsTab.module.scss */ "./components/Pages/Statistics/Tab/StatisticsTab/StatisticsTab.module.scss");
/* harmony import */ var _StatisticsTab_module_scss__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_StatisticsTab_module_scss__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _lib_er_lib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../lib/er.lib */ "./lib/er.lib.js");
/* harmony import */ var _lib_request_destinations__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../lib/request-destinations */ "./lib/request-destinations.js");
/* module decorator */ module = __webpack_require__.hmd(module);





var _jsxFileName = "C:\\Users\\Admin\\Desktop\\projects\\foot-bet\\components\\Pages\\Statistics\\Tab\\StatisticsTab\\StatisticsTab.jsx",
    _s = $RefreshSig$();


 // import { statistics_tab } from './statistics_tab';
// styles 






function StatisticsTab() {
  _s();

  var _this = this;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)([]),
      statistics = _useState[0],
      setStatistics = _useState[1];

  (0,react__WEBPACK_IMPORTED_MODULE_6__.useEffect)(function () {
    getHeapStatistics();
  }, []);

  function getHeapStatistics() {
    return _getHeapStatistics.apply(this, arguments);
  }

  function _getHeapStatistics() {
    _getHeapStatistics = (0,C_Users_Admin_Desktop_projects_foot_bet_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__.default)( /*#__PURE__*/C_Users_Admin_Desktop_projects_foot_bet_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {
      var _statisticsRsp$data, statisticsRsp;

      return C_Users_Admin_Desktop_projects_foot_bet_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              _context.next = 3;
              return (0,_lib_er_lib__WEBPACK_IMPORTED_MODULE_7__.request)(_lib_request_destinations__WEBPACK_IMPORTED_MODULE_8__.GET_STATISTICS, {}, {
                auth: true
              });

            case 3:
              statisticsRsp = _context.sent;
              setStatistics(((statisticsRsp === null || statisticsRsp === void 0 ? void 0 : (_statisticsRsp$data = statisticsRsp.data) === null || _statisticsRsp$data === void 0 ? void 0 : _statisticsRsp$data.data) || []).map(function (row) {
                var _ref;

                return _ref = {
                  teamOneName: "",
                  teamOneIcon: row.team1_img_path
                }, (0,C_Users_Admin_Desktop_projects_foot_bet_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(_ref, "teamOneName", ""), (0,C_Users_Admin_Desktop_projects_foot_bet_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(_ref, "teamOneIcon", row.team2_img_path), (0,C_Users_Admin_Desktop_projects_foot_bet_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(_ref, "date", row.date), (0,C_Users_Admin_Desktop_projects_foot_bet_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(_ref, "time", row.time), (0,C_Users_Admin_Desktop_projects_foot_bet_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(_ref, "prediction", row.prediction), (0,C_Users_Admin_Desktop_projects_foot_bet_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(_ref, "score", row.score), (0,C_Users_Admin_Desktop_projects_foot_bet_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(_ref, "gameResult", row.total), _ref;
              }));
              _context.next = 9;
              break;

            case 7:
              _context.prev = 7;
              _context.t0 = _context["catch"](0);

            case 9:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[0, 7]]);
    }));
    return _getHeapStatistics.apply(this, arguments);
  }

  (0,react__WEBPACK_IMPORTED_MODULE_6__.useEffect)(function () {
    console.log(statistics);
  }, [statistics]);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
    className: (_StatisticsTab_module_scss__WEBPACK_IMPORTED_MODULE_9___default().container),
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_TabHeader_TabHeader__WEBPACK_IMPORTED_MODULE_5__.TabHeader, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
      className: (_StatisticsTab_module_scss__WEBPACK_IMPORTED_MODULE_9___default().board),
      children: statistics.map(function (el, i) {
        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_Row_Row__WEBPACK_IMPORTED_MODULE_4__.Row, {
          order: i + 1,
          teamOneName: el.teamOneName,
          teamOneIcon: el.teamOneIcon,
          teamTwoName: el.teamTwoName,
          teamTwoIcon: el.teamTwoIcon,
          date: el.date,
          time: el.time,
          prediction: el.prediction,
          score: el.score,
          gameResult: el.gameResult
        }, Math.random(), false, {
          fileName: _jsxFileName,
          lineNumber: 48,
          columnNumber: 25
        }, _this);
      })
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 43,
    columnNumber: 9
  }, this);
}

_s(StatisticsTab, "Wnyb5xEBFZFZtqMXcdk0KIZWKYw=");

_c = StatisticsTab;

var _c;

$RefreshReg$(_c, "StatisticsTab");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9QYWdlcy9TdGF0aXN0aWNzL1RhYi9TdGF0aXN0aWNzVGFiL1N0YXRpc3RpY3NUYWIuanN4Il0sIm5hbWVzIjpbIlN0YXRpc3RpY3NUYWIiLCJ1c2VTdGF0ZSIsInN0YXRpc3RpY3MiLCJzZXRTdGF0aXN0aWNzIiwidXNlRWZmZWN0IiwiZ2V0SGVhcFN0YXRpc3RpY3MiLCJyZXF1ZXN0IiwiR0VUX1NUQVRJU1RJQ1MiLCJhdXRoIiwic3RhdGlzdGljc1JzcCIsImRhdGEiLCJtYXAiLCJyb3ciLCJ0ZWFtT25lTmFtZSIsInRlYW1PbmVJY29uIiwidGVhbTFfaW1nX3BhdGgiLCJ0ZWFtMl9pbWdfcGF0aCIsImRhdGUiLCJ0aW1lIiwicHJlZGljdGlvbiIsInNjb3JlIiwidG90YWwiLCJjb25zb2xlIiwibG9nIiwic3R5bGVzIiwiZWwiLCJpIiwidGVhbVR3b05hbWUiLCJ0ZWFtVHdvSWNvbiIsImdhbWVSZXN1bHQiLCJNYXRoIiwicmFuZG9tIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtDQUVBO0FBQ0E7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVPLFNBQVNBLGFBQVQsR0FBeUI7QUFBQTs7QUFBQTs7QUFBQSxrQkFDUUMsK0NBQVEsQ0FBQyxFQUFELENBRGhCO0FBQUEsTUFDdEJDLFVBRHNCO0FBQUEsTUFDVkMsYUFEVTs7QUFHOUJDLGtEQUFTLENBQUMsWUFBSztBQUNiQyxxQkFBaUI7QUFDbEIsR0FGUSxFQUVOLEVBRk0sQ0FBVDs7QUFIOEIsV0FPZkEsaUJBUGU7QUFBQTtBQUFBOztBQUFBO0FBQUEsMlNBTzlCO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBRWdDQyxvREFBTyxDQUFFQyxxRUFBRixFQUFrQixFQUFsQixFQUFzQjtBQUFFQyxvQkFBSSxFQUFFO0FBQVIsZUFBdEIsQ0FGdkM7O0FBQUE7QUFFVUMsMkJBRlY7QUFHSU4sMkJBQWEsQ0FBRSxDQUFFLENBQUFNLGFBQWEsU0FBYixJQUFBQSxhQUFhLFdBQWIsbUNBQUFBLGFBQWEsQ0FBRUMsSUFBZiw0RUFBcUJBLElBQXJCLEtBQTZCLEVBQS9CLEVBQW9DQyxHQUFwQyxDQUF5QyxVQUFBQyxHQUFHLEVBQUk7QUFBQTs7QUFDN0Q7QUFDRUMsNkJBQVcsSUFEYjtBQUVFQyw2QkFBVyxFQUFFRixHQUFHLENBQUNHO0FBRm5CLGdWQUllSCxHQUFHLENBQUNJLGNBSm5CLHdKQUtRSixHQUFHLENBQUNLLElBTFosd0pBTVFMLEdBQUcsQ0FBQ00sSUFOWiw4SkFPY04sR0FBRyxDQUFDTyxVQVBsQix5SkFRU1AsR0FBRyxDQUFDUSxLQVJiLDhKQVNjUixHQUFHLENBQUNTLEtBVGxCO0FBV0QsZUFaYyxDQUFGLENBQWI7QUFISjtBQUFBOztBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQVA4QjtBQUFBO0FBQUE7O0FBMkI5QmpCLGtEQUFTLENBQUMsWUFBSTtBQUNaa0IsV0FBTyxDQUFDQyxHQUFSLENBQWFyQixVQUFiO0FBQ0QsR0FGUSxFQUVOLENBQUNBLFVBQUQsQ0FGTSxDQUFUO0FBSUUsc0JBQ0k7QUFBSyxhQUFTLEVBQUVzQiw2RUFBaEI7QUFBQSw0QkFDSSw4REFBQywyREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREosZUFFSTtBQUFLLGVBQVMsRUFBRUEseUVBQWhCO0FBQUEsZ0JBRVF0QixVQUFVLENBQUNTLEdBQVgsQ0FBZSxVQUFDYyxFQUFELEVBQUtDLENBQUw7QUFBQSw0QkFDWCw4REFBQyx5Q0FBRDtBQUNJLGVBQUssRUFBRUEsQ0FBQyxHQUFHLENBRGY7QUFFSSxxQkFBVyxFQUFFRCxFQUFFLENBQUNaLFdBRnBCO0FBR0kscUJBQVcsRUFBRVksRUFBRSxDQUFDWCxXQUhwQjtBQUlJLHFCQUFXLEVBQUVXLEVBQUUsQ0FBQ0UsV0FKcEI7QUFLSSxxQkFBVyxFQUFFRixFQUFFLENBQUNHLFdBTHBCO0FBTUksY0FBSSxFQUFFSCxFQUFFLENBQUNSLElBTmI7QUFPSSxjQUFJLEVBQUVRLEVBQUUsQ0FBQ1AsSUFQYjtBQVFJLG9CQUFVLEVBQUVPLEVBQUUsQ0FBQ04sVUFSbkI7QUFTSSxlQUFLLEVBQUVNLEVBQUUsQ0FBQ0wsS0FUZDtBQVVJLG9CQUFVLEVBQUVLLEVBQUUsQ0FBQ0k7QUFWbkIsV0FXU0MsSUFBSSxDQUFDQyxNQUFMLEVBWFQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFEVztBQUFBLE9BQWY7QUFGUjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBRko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREo7QUF3Qkg7O0dBdkRlL0IsYTs7S0FBQUEsYSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9zdGF0aXN0aWNzLmFmMzU2YWU4NmJiYmJhYzNlNzk1LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBSb3cgfSBmcm9tICcuLi9Sb3cvUm93J1xyXG5pbXBvcnQgeyBUYWJIZWFkZXIgfSBmcm9tICcuLi9UYWJIZWFkZXIvVGFiSGVhZGVyJztcclxuLy8gaW1wb3J0IHsgc3RhdGlzdGljc190YWIgfSBmcm9tICcuL3N0YXRpc3RpY3NfdGFiJztcclxuLy8gc3R5bGVzIFxyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vU3RhdGlzdGljc1RhYi5tb2R1bGUuc2NzcydcclxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgcmVxdWVzdCB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL2xpYi9lci5saWInO1xyXG5pbXBvcnQgeyBHRVRfU1RBVElTVElDUyB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL2xpYi9yZXF1ZXN0LWRlc3RpbmF0aW9ucyc7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gU3RhdGlzdGljc1RhYigpIHtcclxuICBjb25zdCBbIHN0YXRpc3RpY3MsIHNldFN0YXRpc3RpY3MgXSA9IHVzZVN0YXRlKFtdKTtcclxuICBcclxuICB1c2VFZmZlY3QoKCk9PiB7XHJcbiAgICBnZXRIZWFwU3RhdGlzdGljcygpO1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgYXN5bmMgZnVuY3Rpb24gZ2V0SGVhcFN0YXRpc3RpY3MgKCkge1xyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3Qgc3RhdGlzdGljc1JzcCA9IGF3YWl0IHJlcXVlc3QoIEdFVF9TVEFUSVNUSUNTLCB7fSwgeyBhdXRoOiB0cnVlIH0gKTtcclxuICAgICAgc2V0U3RhdGlzdGljcyggKCBzdGF0aXN0aWNzUnNwPy5kYXRhPy5kYXRhIHx8IFtdICkubWFwKCByb3cgPT4ge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICB0ZWFtT25lTmFtZTogYGAsXHJcbiAgICAgICAgICB0ZWFtT25lSWNvbjogcm93LnRlYW0xX2ltZ19wYXRoLFxyXG4gICAgICAgICAgdGVhbU9uZU5hbWU6IGBgLFxyXG4gICAgICAgICAgdGVhbU9uZUljb246IHJvdy50ZWFtMl9pbWdfcGF0aCxcclxuICAgICAgICAgIGRhdGU6IHJvdy5kYXRlLFxyXG4gICAgICAgICAgdGltZTogcm93LnRpbWUsXHJcbiAgICAgICAgICBwcmVkaWN0aW9uOiByb3cucHJlZGljdGlvbixcclxuICAgICAgICAgIHNjb3JlOiByb3cuc2NvcmUsXHJcbiAgICAgICAgICBnYW1lUmVzdWx0OiByb3cudG90YWxcclxuICAgICAgICB9XHJcbiAgICAgIH0pKTtcclxuICAgIH1cclxuICAgIGNhdGNoICggZXJyICkgeyB9XHJcbiAgfVxyXG5cclxuICB1c2VFZmZlY3QoKCk9PntcclxuICAgIGNvbnNvbGUubG9nKCBzdGF0aXN0aWNzIClcclxuICB9LCBbc3RhdGlzdGljc10pXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn0+XHJcbiAgICAgICAgICAgIDxUYWJIZWFkZXIgLz5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5ib2FyZH0+XHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgc3RhdGlzdGljcy5tYXAoKGVsLCBpKSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxSb3dcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9yZGVyPXtpICsgMX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRlYW1PbmVOYW1lPXtlbC50ZWFtT25lTmFtZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRlYW1PbmVJY29uPXtlbC50ZWFtT25lSWNvbn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRlYW1Ud29OYW1lPXtlbC50ZWFtVHdvTmFtZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRlYW1Ud29JY29uPXtlbC50ZWFtVHdvSWNvbn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGU9e2VsLmRhdGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aW1lPXtlbC50aW1lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJlZGljdGlvbj17ZWwucHJlZGljdGlvbn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNjb3JlPXtlbC5zY29yZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdhbWVSZXN1bHQ9e2VsLmdhbWVSZXN1bHR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e01hdGgucmFuZG9tKCl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgKSlcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==