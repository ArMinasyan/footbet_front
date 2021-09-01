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
              console.log(statisticsRsp, statisticsRsp.data);
              setStatistics(((statisticsRsp === null || statisticsRsp === void 0 ? void 0 : (_statisticsRsp$data = statisticsRsp.data) === null || _statisticsRsp$data === void 0 ? void 0 : _statisticsRsp$data.data) || []).map(function (row) {
                var _ref;

                return _ref = {
                  teamOneName: "",
                  teamOneIcon: row.team1_img_path
                }, (0,C_Users_Admin_Desktop_projects_foot_bet_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(_ref, "teamOneName", ""), (0,C_Users_Admin_Desktop_projects_foot_bet_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(_ref, "teamOneIcon", row.team2_img_path), (0,C_Users_Admin_Desktop_projects_foot_bet_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(_ref, "date", row.date), (0,C_Users_Admin_Desktop_projects_foot_bet_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(_ref, "time", row.time), (0,C_Users_Admin_Desktop_projects_foot_bet_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(_ref, "prediction", row.prediction), (0,C_Users_Admin_Desktop_projects_foot_bet_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(_ref, "score", row.score), (0,C_Users_Admin_Desktop_projects_foot_bet_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(_ref, "gameResult", row.total), _ref;
              }));
              _context.next = 10;
              break;

            case 8:
              _context.prev = 8;
              _context.t0 = _context["catch"](0);

            case 10:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[0, 8]]);
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
      lineNumber: 45,
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
          lineNumber: 49,
          columnNumber: 25
        }, _this);
      })
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 44,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9QYWdlcy9TdGF0aXN0aWNzL1RhYi9TdGF0aXN0aWNzVGFiL1N0YXRpc3RpY3NUYWIuanN4Il0sIm5hbWVzIjpbIlN0YXRpc3RpY3NUYWIiLCJ1c2VTdGF0ZSIsInN0YXRpc3RpY3MiLCJzZXRTdGF0aXN0aWNzIiwidXNlRWZmZWN0IiwiZ2V0SGVhcFN0YXRpc3RpY3MiLCJyZXF1ZXN0IiwiR0VUX1NUQVRJU1RJQ1MiLCJhdXRoIiwic3RhdGlzdGljc1JzcCIsImNvbnNvbGUiLCJsb2ciLCJkYXRhIiwibWFwIiwicm93IiwidGVhbU9uZU5hbWUiLCJ0ZWFtT25lSWNvbiIsInRlYW0xX2ltZ19wYXRoIiwidGVhbTJfaW1nX3BhdGgiLCJkYXRlIiwidGltZSIsInByZWRpY3Rpb24iLCJzY29yZSIsInRvdGFsIiwic3R5bGVzIiwiZWwiLCJpIiwidGVhbVR3b05hbWUiLCJ0ZWFtVHdvSWNvbiIsImdhbWVSZXN1bHQiLCJNYXRoIiwicmFuZG9tIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtDQUVBO0FBQ0E7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVPLFNBQVNBLGFBQVQsR0FBeUI7QUFBQTs7QUFBQTs7QUFBQSxrQkFDUUMsK0NBQVEsQ0FBQyxFQUFELENBRGhCO0FBQUEsTUFDdEJDLFVBRHNCO0FBQUEsTUFDVkMsYUFEVTs7QUFHOUJDLGtEQUFTLENBQUMsWUFBSztBQUNiQyxxQkFBaUI7QUFDbEIsR0FGUSxFQUVOLEVBRk0sQ0FBVDs7QUFIOEIsV0FPZkEsaUJBUGU7QUFBQTtBQUFBOztBQUFBO0FBQUEsMlNBTzlCO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBRWdDQyxvREFBTyxDQUFFQyxxRUFBRixFQUFrQixFQUFsQixFQUFzQjtBQUFFQyxvQkFBSSxFQUFFO0FBQVIsZUFBdEIsQ0FGdkM7O0FBQUE7QUFFVUMsMkJBRlY7QUFHSUMscUJBQU8sQ0FBQ0MsR0FBUixDQUFZRixhQUFaLEVBQTJCQSxhQUFhLENBQUNHLElBQXpDO0FBQ0FULDJCQUFhLENBQUUsQ0FBRSxDQUFBTSxhQUFhLFNBQWIsSUFBQUEsYUFBYSxXQUFiLG1DQUFBQSxhQUFhLENBQUVHLElBQWYsNEVBQXFCQSxJQUFyQixLQUE2QixFQUEvQixFQUFvQ0MsR0FBcEMsQ0FBeUMsVUFBQUMsR0FBRyxFQUFJO0FBQUE7O0FBQzdEO0FBQ0VDLDZCQUFXLElBRGI7QUFFRUMsNkJBQVcsRUFBRUYsR0FBRyxDQUFDRztBQUZuQixnVkFJZUgsR0FBRyxDQUFDSSxjQUpuQix3SkFLUUosR0FBRyxDQUFDSyxJQUxaLHdKQU1RTCxHQUFHLENBQUNNLElBTlosOEpBT2NOLEdBQUcsQ0FBQ08sVUFQbEIseUpBUVNQLEdBQUcsQ0FBQ1EsS0FSYiw4SkFTY1IsR0FBRyxDQUFDUyxLQVRsQjtBQVdELGVBWmMsQ0FBRixDQUFiO0FBSko7QUFBQTs7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FQOEI7QUFBQTtBQUFBOztBQTRCOUJuQixrREFBUyxDQUFDLFlBQUk7QUFDWk0sV0FBTyxDQUFDQyxHQUFSLENBQWFULFVBQWI7QUFDRCxHQUZRLEVBRU4sQ0FBQ0EsVUFBRCxDQUZNLENBQVQ7QUFJRSxzQkFDSTtBQUFLLGFBQVMsRUFBRXNCLDZFQUFoQjtBQUFBLDRCQUNJLDhEQUFDLDJEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFESixlQUVJO0FBQUssZUFBUyxFQUFFQSx5RUFBaEI7QUFBQSxnQkFFUXRCLFVBQVUsQ0FBQ1csR0FBWCxDQUFlLFVBQUNZLEVBQUQsRUFBS0MsQ0FBTDtBQUFBLDRCQUNYLDhEQUFDLHlDQUFEO0FBQ0ksZUFBSyxFQUFFQSxDQUFDLEdBQUcsQ0FEZjtBQUVJLHFCQUFXLEVBQUVELEVBQUUsQ0FBQ1YsV0FGcEI7QUFHSSxxQkFBVyxFQUFFVSxFQUFFLENBQUNULFdBSHBCO0FBSUkscUJBQVcsRUFBRVMsRUFBRSxDQUFDRSxXQUpwQjtBQUtJLHFCQUFXLEVBQUVGLEVBQUUsQ0FBQ0csV0FMcEI7QUFNSSxjQUFJLEVBQUVILEVBQUUsQ0FBQ04sSUFOYjtBQU9JLGNBQUksRUFBRU0sRUFBRSxDQUFDTCxJQVBiO0FBUUksb0JBQVUsRUFBRUssRUFBRSxDQUFDSixVQVJuQjtBQVNJLGVBQUssRUFBRUksRUFBRSxDQUFDSCxLQVRkO0FBVUksb0JBQVUsRUFBRUcsRUFBRSxDQUFDSTtBQVZuQixXQVdTQyxJQUFJLENBQUNDLE1BQUwsRUFYVDtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURXO0FBQUEsT0FBZjtBQUZSO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFGSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFESjtBQXdCSDs7R0F4RGUvQixhOztLQUFBQSxhIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3N0YXRpc3RpY3MuZjIyY2Q4MjkxYzFkOTdjY2I4ZDkuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFJvdyB9IGZyb20gJy4uL1Jvdy9Sb3cnXHJcbmltcG9ydCB7IFRhYkhlYWRlciB9IGZyb20gJy4uL1RhYkhlYWRlci9UYWJIZWFkZXInO1xyXG4vLyBpbXBvcnQgeyBzdGF0aXN0aWNzX3RhYiB9IGZyb20gJy4vc3RhdGlzdGljc190YWInO1xyXG4vLyBzdHlsZXMgXHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9TdGF0aXN0aWNzVGFiLm1vZHVsZS5zY3NzJ1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyByZXF1ZXN0IH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vbGliL2VyLmxpYic7XHJcbmltcG9ydCB7IEdFVF9TVEFUSVNUSUNTIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vbGliL3JlcXVlc3QtZGVzdGluYXRpb25zJztcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBTdGF0aXN0aWNzVGFiKCkge1xyXG4gIGNvbnN0IFsgc3RhdGlzdGljcywgc2V0U3RhdGlzdGljcyBdID0gdXNlU3RhdGUoW10pO1xyXG4gIFxyXG4gIHVzZUVmZmVjdCgoKT0+IHtcclxuICAgIGdldEhlYXBTdGF0aXN0aWNzKCk7XHJcbiAgfSwgW10pO1xyXG5cclxuICBhc3luYyBmdW5jdGlvbiBnZXRIZWFwU3RhdGlzdGljcyAoKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCBzdGF0aXN0aWNzUnNwID0gYXdhaXQgcmVxdWVzdCggR0VUX1NUQVRJU1RJQ1MsIHt9LCB7IGF1dGg6IHRydWUgfSApO1xyXG4gICAgICBjb25zb2xlLmxvZyhzdGF0aXN0aWNzUnNwLCBzdGF0aXN0aWNzUnNwLmRhdGEpO1xyXG4gICAgICBzZXRTdGF0aXN0aWNzKCAoIHN0YXRpc3RpY3NSc3A/LmRhdGE/LmRhdGEgfHwgW10gKS5tYXAoIHJvdyA9PiB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgIHRlYW1PbmVOYW1lOiBgYCxcclxuICAgICAgICAgIHRlYW1PbmVJY29uOiByb3cudGVhbTFfaW1nX3BhdGgsXHJcbiAgICAgICAgICB0ZWFtT25lTmFtZTogYGAsXHJcbiAgICAgICAgICB0ZWFtT25lSWNvbjogcm93LnRlYW0yX2ltZ19wYXRoLFxyXG4gICAgICAgICAgZGF0ZTogcm93LmRhdGUsXHJcbiAgICAgICAgICB0aW1lOiByb3cudGltZSxcclxuICAgICAgICAgIHByZWRpY3Rpb246IHJvdy5wcmVkaWN0aW9uLFxyXG4gICAgICAgICAgc2NvcmU6IHJvdy5zY29yZSxcclxuICAgICAgICAgIGdhbWVSZXN1bHQ6IHJvdy50b3RhbFxyXG4gICAgICAgIH1cclxuICAgICAgfSkpO1xyXG4gICAgfVxyXG4gICAgY2F0Y2ggKCBlcnIgKSB7IH1cclxuICB9XHJcblxyXG4gIHVzZUVmZmVjdCgoKT0+e1xyXG4gICAgY29uc29sZS5sb2coIHN0YXRpc3RpY3MgKVxyXG4gIH0sIFtzdGF0aXN0aWNzXSlcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfT5cclxuICAgICAgICAgICAgPFRhYkhlYWRlciAvPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmJvYXJkfT5cclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBzdGF0aXN0aWNzLm1hcCgoZWwsIGkpID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPFJvd1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3JkZXI9e2kgKyAxfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGVhbU9uZU5hbWU9e2VsLnRlYW1PbmVOYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGVhbU9uZUljb249e2VsLnRlYW1PbmVJY29ufVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGVhbVR3b05hbWU9e2VsLnRlYW1Ud29OYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGVhbVR3b0ljb249e2VsLnRlYW1Ud29JY29ufVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0ZT17ZWwuZGF0ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpbWU9e2VsLnRpbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcmVkaWN0aW9uPXtlbC5wcmVkaWN0aW9ufVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2NvcmU9e2VsLnNjb3JlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2FtZVJlc3VsdD17ZWwuZ2FtZVJlc3VsdH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17TWF0aC5yYW5kb20oKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICApKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9