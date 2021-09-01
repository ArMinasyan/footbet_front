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
/* harmony import */ var _statistics_tab__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./statistics_tab */ "./components/Pages/Statistics/Tab/StatisticsTab/statistics_tab.js");
/* harmony import */ var _StatisticsTab_module_scss__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./StatisticsTab.module.scss */ "./components/Pages/Statistics/Tab/StatisticsTab/StatisticsTab.module.scss");
/* harmony import */ var _StatisticsTab_module_scss__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_StatisticsTab_module_scss__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _lib_er_lib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../lib/er.lib */ "./lib/er.lib.js");
/* harmony import */ var _lib_request_destinations__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../lib/request-destinations */ "./lib/request-destinations.js");
/* module decorator */ module = __webpack_require__.hmd(module);





var _jsxFileName = "C:\\Users\\Admin\\Desktop\\projects\\foot-bet\\components\\Pages\\Statistics\\Tab\\StatisticsTab\\StatisticsTab.jsx",
    _s = $RefreshSig$();



 // styles 






function StatisticsTab() {
  _s();

  var _this = this;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_7__.useState)([]),
      statistics = _useState[0],
      setStatistics = _useState[1];

  (0,react__WEBPACK_IMPORTED_MODULE_7__.useEffect)(function () {
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
              return (0,_lib_er_lib__WEBPACK_IMPORTED_MODULE_8__.request)(_lib_request_destinations__WEBPACK_IMPORTED_MODULE_9__.GET_STATISTICS, {}, {
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

  (0,react__WEBPACK_IMPORTED_MODULE_7__.useEffect)(function () {
    console.log(statistics);
  }, [statistics]);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
    className: (_StatisticsTab_module_scss__WEBPACK_IMPORTED_MODULE_10___default().container),
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_TabHeader_TabHeader__WEBPACK_IMPORTED_MODULE_5__.TabHeader, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
      className: (_StatisticsTab_module_scss__WEBPACK_IMPORTED_MODULE_10___default().board),
      children: _statistics_tab__WEBPACK_IMPORTED_MODULE_6__.statistics_tab.map(function (el, i) {
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


/***/ }),

/***/ "./components/Pages/Statistics/Tab/StatisticsTab/statistics_tab.js":
/*!*************************************************************************!*\
  !*** ./components/Pages/Statistics/Tab/StatisticsTab/statistics_tab.js ***!
  \*************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "statistics_tab": function() { return /* binding */ statistics_tab; }
/* harmony export */ });
/* harmony import */ var _public_images_games_atletico_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../public/images/games/atletico.png */ "./public/images/games/atletico.png");
/* harmony import */ var _public_images_games_atletic_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../public/images/games/atletic.png */ "./public/images/games/atletic.png");
/* harmony import */ var _public_images_main_matches_barca_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../public/images/main/matches/barca.png */ "./public/images/main/matches/barca.png");
/* harmony import */ var _public_images_main_matches_marcel_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../public/images/main/matches/marcel.png */ "./public/images/main/matches/marcel.png");
/* harmony import */ var _public_images_main_matches_psj_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../public/images/main/matches/psj.png */ "./public/images/main/matches/psj.png");
/* harmony import */ var _public_images_main_matches_rennais_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../public/images/main/matches/rennais.png */ "./public/images/main/matches/rennais.png");
/* module decorator */ module = __webpack_require__.hmd(module);
// icons






var statistics_tab = [{
  teamOneName: 'Атлетико',
  teamOneIcon: _public_images_games_atletico_png__WEBPACK_IMPORTED_MODULE_0__.default.src,
  teamTwoName: 'Атлетик',
  teamTwoIcon: _public_images_games_atletic_png__WEBPACK_IMPORTED_MODULE_1__.default.src,
  prediction: {
    thereIs: false,
    totalBet: 'тб 1,5 / ',
    coefficent: 'коеф 3,5'
  },
  date: '14.01',
  time: '22:30',
  score: '1:0',
  gameResult: 'win'
}, {
  teamOneName: 'Барселона',
  teamOneIcon: _public_images_main_matches_barca_png__WEBPACK_IMPORTED_MODULE_2__.default.src,
  teamTwoName: 'ПСЖ',
  teamTwoIcon: _public_images_main_matches_psj_png__WEBPACK_IMPORTED_MODULE_4__.default.src,
  prediction: {
    thereIs: false,
    totalBet: 'тб 1,5 / ',
    coefficent: 'коеф 3,5'
  },
  date: '14.01',
  time: '22:30',
  score: '1:0',
  gameResult: 'lose'
}, {
  teamOneName: 'Марсель',
  teamOneIcon: _public_images_main_matches_marcel_png__WEBPACK_IMPORTED_MODULE_3__.default.src,
  teamTwoName: 'Атлетик',
  teamTwoIcon: _public_images_main_matches_rennais_png__WEBPACK_IMPORTED_MODULE_5__.default.src,
  prediction: {
    thereIs: false,
    totalBet: 'тб 1,5 / ',
    coefficent: 'коеф 3,5'
  },
  date: '14.01',
  time: '22:30',
  score: '1:0',
  gameResult: 'return'
}, {
  teamOneName: 'Атлетико',
  teamOneIcon: _public_images_games_atletico_png__WEBPACK_IMPORTED_MODULE_0__.default.src,
  teamTwoName: 'Атлетик',
  teamTwoIcon: _public_images_games_atletic_png__WEBPACK_IMPORTED_MODULE_1__.default.src,
  prediction: {
    thereIs: false,
    totalBet: 'тб 1,5 / ',
    coefficent: 'коеф 3,5'
  },
  date: '14.01',
  time: '22:30',
  score: '1:0',
  gameResult: 'lose'
}, {
  teamOneName: 'Атлетико',
  teamOneIcon: _public_images_games_atletico_png__WEBPACK_IMPORTED_MODULE_0__.default.src,
  teamTwoName: 'Атлетик',
  teamTwoIcon: _public_images_games_atletic_png__WEBPACK_IMPORTED_MODULE_1__.default.src,
  prediction: {
    thereIs: false,
    totalBet: 'тб 1,5 / ',
    coefficent: 'коеф 3,5'
  },
  date: '14.01',
  time: '22:30',
  score: '1:0',
  gameResult: 'lose'
}, {
  teamOneName: 'Атлетико',
  teamOneIcon: _public_images_games_atletico_png__WEBPACK_IMPORTED_MODULE_0__.default.src,
  teamTwoName: 'Атлетик',
  teamTwoIcon: _public_images_games_atletic_png__WEBPACK_IMPORTED_MODULE_1__.default.src,
  prediction: {
    thereIs: false,
    totalBet: 'тб 1,5 / ',
    coefficent: 'коеф 3,5'
  },
  date: '14.01',
  time: '22:30',
  score: '1:0',
  gameResult: 'lose'
}, {
  teamOneName: 'Атлетико',
  teamOneIcon: _public_images_games_atletico_png__WEBPACK_IMPORTED_MODULE_0__.default.src,
  teamTwoName: 'Атлетик',
  teamTwoIcon: _public_images_games_atletic_png__WEBPACK_IMPORTED_MODULE_1__.default.src,
  prediction: {
    thereIs: false,
    totalBet: 'тб 1,5 / ',
    coefficent: 'коеф 3,5'
  },
  date: '14.01',
  time: '22:30',
  score: '1:0',
  gameResult: 'return'
}, {
  teamOneName: 'Атлетико',
  teamOneIcon: _public_images_games_atletico_png__WEBPACK_IMPORTED_MODULE_0__.default.src,
  teamTwoName: 'Атлетик',
  teamTwoIcon: _public_images_games_atletic_png__WEBPACK_IMPORTED_MODULE_1__.default.src,
  prediction: {
    thereIs: false,
    totalBet: 'тб 1,5 / ',
    coefficent: 'коеф 3,5'
  },
  date: '14.01',
  time: '22:30',
  score: '1:0',
  gameResult: 'lose'
}, {
  teamOneName: 'Атлетико',
  teamOneIcon: _public_images_games_atletico_png__WEBPACK_IMPORTED_MODULE_0__.default.src,
  teamTwoName: 'Атлетик',
  teamTwoIcon: _public_images_games_atletic_png__WEBPACK_IMPORTED_MODULE_1__.default.src,
  prediction: {
    thereIs: false,
    totalBet: 'тб 1,5 / ',
    coefficent: 'коеф 3,5'
  },
  date: '14.01',
  time: '22:30',
  score: '1:0',
  gameResult: 'win'
}, {
  teamOneName: 'Атлетико',
  teamOneIcon: _public_images_games_atletico_png__WEBPACK_IMPORTED_MODULE_0__.default.src,
  teamTwoName: 'Атлетик',
  teamTwoIcon: _public_images_games_atletic_png__WEBPACK_IMPORTED_MODULE_1__.default.src,
  prediction: {
    thereIs: false,
    totalBet: 'тб 1,5 / ',
    coefficent: 'коеф 3,5'
  },
  date: '14.01',
  time: '22:30',
  score: '1:0',
  gameResult: 'lose'
}, {
  teamOneName: 'Атлетико',
  teamOneIcon: _public_images_games_atletico_png__WEBPACK_IMPORTED_MODULE_0__.default.src,
  teamTwoName: 'Атлетик',
  teamTwoIcon: _public_images_games_atletic_png__WEBPACK_IMPORTED_MODULE_1__.default.src,
  prediction: {
    thereIs: false,
    totalBet: 'тб 1,5 / ',
    coefficent: 'коеф 3,5'
  },
  date: '14.01',
  time: '22:30',
  score: '1:0',
  gameResult: 'win'
}, {
  teamOneName: 'Атлетико',
  teamOneIcon: _public_images_games_atletico_png__WEBPACK_IMPORTED_MODULE_0__.default.src,
  teamTwoName: 'Атлетик',
  teamTwoIcon: _public_images_games_atletic_png__WEBPACK_IMPORTED_MODULE_1__.default.src,
  prediction: {
    thereIs: false,
    totalBet: 'тб 1,5 / ',
    coefficent: 'коеф 3,5'
  },
  date: '14.01',
  time: '22:30',
  score: '1:0',
  gameResult: 'win'
}, {
  teamOneName: 'Атлетико',
  teamOneIcon: _public_images_games_atletico_png__WEBPACK_IMPORTED_MODULE_0__.default.src,
  teamTwoName: 'Атлетик',
  teamTwoIcon: _public_images_games_atletic_png__WEBPACK_IMPORTED_MODULE_1__.default.src,
  prediction: {
    thereIs: false,
    totalBet: 'тб 1,5 / ',
    coefficent: 'коеф 3,5'
  },
  date: '14.01',
  time: '22:30',
  score: '1:0',
  gameResult: 'win'
}, {
  teamOneName: 'Атлетико',
  teamOneIcon: _public_images_games_atletico_png__WEBPACK_IMPORTED_MODULE_0__.default.src,
  teamTwoName: 'Атлетик',
  teamTwoIcon: _public_images_games_atletic_png__WEBPACK_IMPORTED_MODULE_1__.default.src,
  prediction: {
    thereIs: false,
    totalBet: 'тб 1,5 / ',
    coefficent: 'коеф 3,5'
  },
  date: '14.01',
  time: '22:30',
  score: '1:0',
  gameResult: 'win'
}, {
  teamOneName: 'Атлетико',
  teamOneIcon: _public_images_games_atletico_png__WEBPACK_IMPORTED_MODULE_0__.default.src,
  teamTwoName: 'Атлетик',
  teamTwoIcon: _public_images_games_atletic_png__WEBPACK_IMPORTED_MODULE_1__.default.src,
  prediction: {
    thereIs: false,
    totalBet: 'тб 1,5 / ',
    coefficent: 'коеф 3,5'
  },
  date: '14.01',
  time: '22:30',
  score: '1:0',
  gameResult: 'lose'
}, {
  teamOneName: 'Атлетико',
  teamOneIcon: _public_images_games_atletico_png__WEBPACK_IMPORTED_MODULE_0__.default.src,
  teamTwoName: 'Атлетик',
  teamTwoIcon: _public_images_games_atletic_png__WEBPACK_IMPORTED_MODULE_1__.default.src,
  prediction: {
    thereIs: false,
    totalBet: 'тб 1,5 / ',
    coefficent: 'коеф 3,5'
  },
  date: '14.01',
  time: '22:30',
  score: '1:0',
  gameResult: 'lose'
}, {
  teamOneName: 'Атлетико',
  teamOneIcon: _public_images_games_atletico_png__WEBPACK_IMPORTED_MODULE_0__.default.src,
  teamTwoName: 'Атлетик',
  teamTwoIcon: _public_images_games_atletic_png__WEBPACK_IMPORTED_MODULE_1__.default.src,
  prediction: {
    thereIs: false,
    totalBet: 'тб 1,5 / ',
    coefficent: 'коеф 3,5'
  },
  date: '14.01',
  time: '22:30',
  score: '1:0',
  gameResult: 'lose'
}, {
  teamOneName: 'Атлетико',
  teamOneIcon: _public_images_games_atletico_png__WEBPACK_IMPORTED_MODULE_0__.default.src,
  teamTwoName: 'Атлетик',
  teamTwoIcon: _public_images_games_atletic_png__WEBPACK_IMPORTED_MODULE_1__.default.src,
  prediction: {
    thereIs: false,
    totalBet: 'тб 1,5 / ',
    coefficent: 'коеф 3,5'
  },
  date: '14.01',
  time: '22:30',
  score: '1:0',
  gameResult: 'return'
}, {
  teamOneName: 'Атлетико',
  teamOneIcon: _public_images_games_atletico_png__WEBPACK_IMPORTED_MODULE_0__.default.src,
  teamTwoName: 'Атлетик',
  teamTwoIcon: _public_images_games_atletic_png__WEBPACK_IMPORTED_MODULE_1__.default.src,
  prediction: {
    thereIs: false,
    totalBet: 'тб 1,5 / ',
    coefficent: 'коеф 3,5'
  },
  date: '14.01',
  time: '22:30',
  score: '1:0',
  gameResult: 'return'
}];

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


/***/ }),

/***/ "./public/images/games/atletic.png":
/*!*****************************************!*\
  !*** ./public/images/games/atletic.png ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({"src":"/_next/static/image/public/images/games/atletic.283820fd26ae308542c4998747f6f150.png","height":63,"width":58,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAcAAAAICAYAAAA1BOUGAAAA6UlEQVR42jXKv2rCUBgF8Dv4MoW+R4fOhT5L7RgXN6FLC5EUHBpq0g4XGkWw4o25XNAhEC5JMLmKUfDPoKAI0e/TDP6WwzkcEsdx7vs+cs5BCAFBEIAYjfC6AVFK7ZIkwSgMwfU8kFKCaxio0nRPGGOxruv4qmlnq9GA9Y99nlCKTqeTkMV8bl4P+FWtnjbNbzja9imLIhwrZRFPiKfZdIqrj/cce/+4rNfzRZbhgPNnUhinqZD9Pm4/jUPQ7aIMwyG50SqVO6fdPjDLwl9Kjy/l8j0pMNctFdk0zQfaauVvtdpj0f8cp3QBWfybj50+cosAAAAASUVORK5CYII="});

/***/ }),

/***/ "./public/images/games/atletico.png":
/*!******************************************!*\
  !*** ./public/images/games/atletico.png ***!
  \******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({"src":"/_next/static/image/public/images/games/atletico.2ce75e21162e2e6dc48b99e6018107e0.png","height":62,"width":47,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAYAAAAICAYAAADaxo44AAAA00lEQVR4nAHIADf/AWxthsTe3+cx8vP6CgwKBAAGBwX2BhAOzwGDhJb/NzYuANzc4f8EBwcAyMfSARDi4QABj5Cg/BEQDQL7//8BvKq+AHt8Xv/jr6v/AWhpgv319vkCMDEl/y/87AAyS0gBw6Wq/wFeaIP/JwH2/VlWRAP++voACBMT/dCwswMBnoWO9U5QRQrt4N/8/v7/ABEdHQTFsLb3AY2ToTAoBv6mJSAYKQAAAADc4ejYyv4KWwFqI0YAlt26BrmssrsAAAABR1RORVUoUfl+lVtrSTCy4QAAAABJRU5ErkJggg=="});

/***/ }),

/***/ "./public/images/main/matches/barca.png":
/*!**********************************************!*\
  !*** ./public/images/main/matches/barca.png ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({"src":"/_next/static/image/public/images/main/matches/barca.af35527b160676eac7a6d5c0a60883c3.png","height":49,"width":48,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAABCklEQVR42mPoy2TwWr+somt7i+/WTfNy+ta0SPVva2bbuqqduXNKGYM7Q0M6g9u1DbP+P84o/n930dT/D2aa/X87Tfz/5Ski/9sbGRwZgED00pxpH554FP5/OHX67xez7H5/nCLz/2Kr3DsGbQZhhi0dDBPfnq35f21xxJ8T62v/7epV/nd5DsOfl1sY/m/uZ+hhWNFju3JBif//OWl+v3uTXP7XxYX/n5oQ8XtxffL/ld0WSxmaquxTC3xK/ucylP/eOCXsz+apgX8KGEr/FPoW/e+ut45jYChgYF1aKrKxNzzp/7TC+P/Ti+L+94Yn/F9eJrKcARlMb2awW9WoMBuIZ81sZbCBiQMAkPt9WMwiZWwAAAAASUVORK5CYII="});

/***/ }),

/***/ "./public/images/main/matches/marcel.png":
/*!***********************************************!*\
  !*** ./public/images/main/matches/marcel.png ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({"src":"/_next/static/image/public/images/main/matches/marcel.eb4604864ce2401aa24fb4ed271f6e83.png","height":53,"width":41,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAYAAAAICAYAAADaxo44AAAAtUlEQVR42mOon7OFlQEI7i5n0H24gkEdxG6cswkoBgLTbrjazLgQazH9YgKQbQ8RnH6dn3n6tf1AgU6GadenANnbgTQXUPW1biBeDxRYwTTt+lqgwjVAiVYGoOB2IF4ExBeBAucZpl9bAmRvZhCafm2D4PRri/mmX5sBZPcKTL+2DogXAHXcaWGYdruXYeqdUIapdwOB7MlAXMewYn5f9t5FmR4rF3Q7r13Q5rV3UZbTovlTYgAFZVfAeuZWPQAAAABJRU5ErkJggg=="});

/***/ }),

/***/ "./public/images/main/matches/psj.png":
/*!********************************************!*\
  !*** ./public/images/main/matches/psj.png ***!
  \********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({"src":"/_next/static/image/public/images/main/matches/psj.19909cdc27e6e74da413f4a2212dad97.png","height":47,"width":47,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAABE0lEQVR4nAEIAff+AU1+rACzz+oPZT0bhgkHBEYJBgT/6e/2tqDf8XpVHAz2AQAiig9+ejHBCAcFLwQBAQD8/P0A9fv9APn8/smMtNdCAWaKsZrw7vVlBRQO+UH07QX6/v8A0hYY++jg7AcWFw2OAVF8quDy6/MfvQgK/tAD3wH5AQMAN/kd/0D69wIcGw/YAVZ9quHE6/YelS4O/ife1AECBAMAzxwq/1nR7wJiHg7aAW+Os5ys3e5jlyUJ+cb5+wUMAgAAKgIE+2ze+AdYJRORAUyFsA8aBADByu/4Lxn+/gAKCgYA5Pn9ADARCcn0CwpCAWmQtQDn8/oOHwoDiufy+UUGBAL/EwkFtcvs9nksFgz2Qop2DYh8YIkAAAAASUVORK5CYII="});

/***/ }),

/***/ "./public/images/main/matches/rennais.png":
/*!************************************************!*\
  !*** ./public/images/main/matches/rennais.png ***!
  \************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({"src":"/_next/static/image/public/images/main/matches/rennais.d7f597304947400fb20f05e2dae6b5fb.png","height":51,"width":47,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAcAAAAICAYAAAA1BOUGAAAA6klEQVR42mPY3cGjkeHPeTfEguHcVgOG/c+DxK+9SFY9+22DgADDujY9c3UGhv9Hq6v/H1+65P/apLT/T2wYPv7Y4CzB0Faq5p/IwPD/18H9vx9du/pn9apV/27rMfz8M9NNl6E6XqqXgYHh/62+rt+7erv/L6uu/vNQmuH/6wqDVIZcf4Etysbm/91MDH5v8PP8/zjY89fTYO//zzNU+hgaE3gmOJkZ/WewdPi/I8jn99uo8P+Pw93/vy6TzWD4f46BozWGoV/agOHLRh2B/6/9ZF8/y2aoZEAGu6aIq52ukOn5f0BfGCYGANZKZsFc21vHAAAAAElFTkSuQmCC"});

/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9QYWdlcy9TdGF0aXN0aWNzL1RhYi9TdGF0aXN0aWNzVGFiL1N0YXRpc3RpY3NUYWIuanN4Iiwid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL1BhZ2VzL1N0YXRpc3RpY3MvVGFiL1N0YXRpc3RpY3NUYWIvc3RhdGlzdGljc190YWIuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL3B1YmxpYy9pbWFnZXMvZ2FtZXMvYXRsZXRpYy5wbmciLCJ3ZWJwYWNrOi8vX05fRS8uL3B1YmxpYy9pbWFnZXMvZ2FtZXMvYXRsZXRpY28ucG5nIiwid2VicGFjazovL19OX0UvLi9wdWJsaWMvaW1hZ2VzL21haW4vbWF0Y2hlcy9iYXJjYS5wbmciLCJ3ZWJwYWNrOi8vX05fRS8uL3B1YmxpYy9pbWFnZXMvbWFpbi9tYXRjaGVzL21hcmNlbC5wbmciLCJ3ZWJwYWNrOi8vX05fRS8uL3B1YmxpYy9pbWFnZXMvbWFpbi9tYXRjaGVzL3Bzai5wbmciLCJ3ZWJwYWNrOi8vX05fRS8uL3B1YmxpYy9pbWFnZXMvbWFpbi9tYXRjaGVzL3Jlbm5haXMucG5nIl0sIm5hbWVzIjpbIlN0YXRpc3RpY3NUYWIiLCJ1c2VTdGF0ZSIsInN0YXRpc3RpY3MiLCJzZXRTdGF0aXN0aWNzIiwidXNlRWZmZWN0IiwiZ2V0SGVhcFN0YXRpc3RpY3MiLCJyZXF1ZXN0IiwiR0VUX1NUQVRJU1RJQ1MiLCJhdXRoIiwic3RhdGlzdGljc1JzcCIsImRhdGEiLCJtYXAiLCJyb3ciLCJ0ZWFtT25lTmFtZSIsInRlYW1PbmVJY29uIiwidGVhbTFfaW1nX3BhdGgiLCJ0ZWFtMl9pbWdfcGF0aCIsImRhdGUiLCJ0aW1lIiwicHJlZGljdGlvbiIsInNjb3JlIiwidG90YWwiLCJjb25zb2xlIiwibG9nIiwic3R5bGVzIiwic3RhdGlzdGljc190YWIiLCJlbCIsImkiLCJ0ZWFtVHdvTmFtZSIsInRlYW1Ud29JY29uIiwiZ2FtZVJlc3VsdCIsIk1hdGgiLCJyYW5kb20iLCJhdGxldGljb0ljb24iLCJhdGxldGljSWNvbiIsInRoZXJlSXMiLCJ0b3RhbEJldCIsImNvZWZmaWNlbnQiLCJiYXJjYUljb24iLCJwc2pJY29uIiwibWFyY2VsSWNvbiIsInJlbm5haXNJY29uIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtDQUVBOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFTyxTQUFTQSxhQUFULEdBQXlCO0FBQUE7O0FBQUE7O0FBQUEsa0JBQ1FDLCtDQUFRLENBQUMsRUFBRCxDQURoQjtBQUFBLE1BQ3RCQyxVQURzQjtBQUFBLE1BQ1ZDLGFBRFU7O0FBRzlCQyxrREFBUyxDQUFDLFlBQUs7QUFDYkMscUJBQWlCO0FBQ2xCLEdBRlEsRUFFTixFQUZNLENBQVQ7O0FBSDhCLFdBT2ZBLGlCQVBlO0FBQUE7QUFBQTs7QUFBQTtBQUFBLDJTQU85QjtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUVnQ0Msb0RBQU8sQ0FBRUMscUVBQUYsRUFBa0IsRUFBbEIsRUFBc0I7QUFBRUMsb0JBQUksRUFBRTtBQUFSLGVBQXRCLENBRnZDOztBQUFBO0FBRVVDLDJCQUZWO0FBR0lOLDJCQUFhLENBQUUsQ0FBRSxDQUFBTSxhQUFhLFNBQWIsSUFBQUEsYUFBYSxXQUFiLG1DQUFBQSxhQUFhLENBQUVDLElBQWYsNEVBQXFCQSxJQUFyQixLQUE2QixFQUEvQixFQUFvQ0MsR0FBcEMsQ0FBeUMsVUFBQUMsR0FBRyxFQUFJO0FBQUE7O0FBQzdEO0FBQ0VDLDZCQUFXLElBRGI7QUFFRUMsNkJBQVcsRUFBRUYsR0FBRyxDQUFDRztBQUZuQixnVkFJZUgsR0FBRyxDQUFDSSxjQUpuQix3SkFLUUosR0FBRyxDQUFDSyxJQUxaLHdKQU1RTCxHQUFHLENBQUNNLElBTlosOEpBT2NOLEdBQUcsQ0FBQ08sVUFQbEIseUpBUVNQLEdBQUcsQ0FBQ1EsS0FSYiw4SkFTY1IsR0FBRyxDQUFDUyxLQVRsQjtBQVdELGVB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Q0EvUTBCLENBQXZCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1JQLCtEQUFnQixDQUFDLGtKQUFrSiw2WUFBNlksRTs7Ozs7Ozs7Ozs7O0FDQWhqQiwrREFBZ0IsQ0FBQyxtSkFBbUosaVhBQWlYLEU7Ozs7Ozs7Ozs7OztBQ0FyaEIsK0RBQWdCLENBQUMsdUpBQXVKLHliQUF5YixFOzs7Ozs7Ozs7Ozs7QUNBam1CLCtEQUFnQixDQUFDLHdKQUF3Six5VUFBeVUsRTs7Ozs7Ozs7Ozs7O0FDQWxmLCtEQUFnQixDQUFDLHFKQUFxSixxY0FBcWMsRTs7Ozs7Ozs7Ozs7O0FDQTNtQiwrREFBZ0IsQ0FBQyx5SkFBeUosNllBQTZZLEUiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvc3RhdGlzdGljcy4xZjVmZmYyZTdjZDUwZTU5Yzg0YS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUm93IH0gZnJvbSAnLi4vUm93L1JvdydcclxuaW1wb3J0IHsgVGFiSGVhZGVyIH0gZnJvbSAnLi4vVGFiSGVhZGVyL1RhYkhlYWRlcic7XHJcbmltcG9ydCB7IHN0YXRpc3RpY3NfdGFiIH0gZnJvbSAnLi9zdGF0aXN0aWNzX3RhYic7XHJcbi8vIHN0eWxlcyBcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL1N0YXRpc3RpY3NUYWIubW9kdWxlLnNjc3MnXHJcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IHJlcXVlc3QgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9saWIvZXIubGliJztcclxuaW1wb3J0IHsgR0VUX1NUQVRJU1RJQ1MgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9saWIvcmVxdWVzdC1kZXN0aW5hdGlvbnMnO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIFN0YXRpc3RpY3NUYWIoKSB7XHJcbiAgY29uc3QgWyBzdGF0aXN0aWNzLCBzZXRTdGF0aXN0aWNzIF0gPSB1c2VTdGF0ZShbXSk7XHJcbiAgXHJcbiAgdXNlRWZmZWN0KCgpPT4ge1xyXG4gICAgZ2V0SGVhcFN0YXRpc3RpY3MoKTtcclxuICB9LCBbXSk7XHJcblxyXG4gIGFzeW5jIGZ1bmN0aW9uIGdldEhlYXBTdGF0aXN0aWNzICgpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IHN0YXRpc3RpY3NSc3AgPSBhd2FpdCByZXF1ZXN0KCBHRVRfU1RBVElTVElDUywge30sIHsgYXV0aDogdHJ1ZSB9ICk7XHJcbiAgICAgIHNldFN0YXRpc3RpY3MoICggc3RhdGlzdGljc1JzcD8uZGF0YT8uZGF0YSB8fCBbXSApLm1hcCggcm93ID0+IHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgdGVhbU9uZU5hbWU6IGBgLFxyXG4gICAgICAgICAgdGVhbU9uZUljb246IHJvdy50ZWFtMV9pbWdfcGF0aCxcclxuICAgICAgICAgIHRlYW1PbmVOYW1lOiBgYCxcclxuICAgICAgICAgIHRlYW1PbmVJY29uOiByb3cudGVhbTJfaW1nX3BhdGgsXHJcbiAgICAgICAgICBkYXRlOiByb3cuZGF0ZSxcclxuICAgICAgICAgIHRpbWU6IHJvdy50aW1lLFxyXG4gICAgICAgICAgcHJlZGljdGlvbjogcm93LnByZWRpY3Rpb24sXHJcbiAgICAgICAgICBzY29yZTogcm93LnNjb3JlLFxyXG4gICAgICAgICAgZ2FtZVJlc3VsdDogcm93LnRvdGFsXHJcbiAgICAgICAgfVxyXG4gICAgICB9KSk7XHJcbiAgICB9XHJcbiAgICBjYXRjaCAoIGVyciApIHsgfVxyXG4gIH1cclxuXHJcbiAgdXNlRWZmZWN0KCgpPT57XHJcbiAgICBjb25zb2xlLmxvZyggc3RhdGlzdGljcyApXHJcbiAgfSwgW3N0YXRpc3RpY3NdKVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9PlxyXG4gICAgICAgICAgICA8VGFiSGVhZGVyIC8+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYm9hcmR9PlxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHN0YXRpc3RpY3NfdGFiLm1hcCgoZWwsIGkpID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPFJvd1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3JkZXI9e2kgKyAxfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGVhbU9uZU5hbWU9e2VsLnRlYW1PbmVOYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGVhbU9uZUljb249e2VsLnRlYW1PbmVJY29ufVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGVhbVR3b05hbWU9e2VsLnRlYW1Ud29OYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGVhbVR3b0ljb249e2VsLnRlYW1Ud29JY29ufVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0ZT17ZWwuZGF0ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpbWU9e2VsLnRpbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcmVkaWN0aW9uPXtlbC5wcmVkaWN0aW9ufVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2NvcmU9e2VsLnNjb3JlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2FtZVJlc3VsdD17ZWwuZ2FtZVJlc3VsdH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17TWF0aC5yYW5kb20oKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICApKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG4iLCIvLyBpY29uc1xyXG5pbXBvcnQgYXRsZXRpY29JY29uIGZyb20gJy9wdWJsaWMvaW1hZ2VzL2dhbWVzL2F0bGV0aWNvLnBuZydcclxuaW1wb3J0IGF0bGV0aWNJY29uIGZyb20gJy9wdWJsaWMvaW1hZ2VzL2dhbWVzL2F0bGV0aWMucG5nJ1xyXG5pbXBvcnQgYmFyY2FJY29uIGZyb20gJy9wdWJsaWMvaW1hZ2VzL21haW4vbWF0Y2hlcy9iYXJjYS5wbmcnXHJcbmltcG9ydCBtYXJjZWxJY29uIGZyb20gJy9wdWJsaWMvaW1hZ2VzL21haW4vbWF0Y2hlcy9tYXJjZWwucG5nJ1xyXG5pbXBvcnQgcHNqSWNvbiBmcm9tICcvcHVibGljL2ltYWdlcy9tYWluL21hdGNoZXMvcHNqLnBuZydcclxuaW1wb3J0IHJlbm5haXNJY29uIGZyb20gJy9wdWJsaWMvaW1hZ2VzL21haW4vbWF0Y2hlcy9yZW5uYWlzLnBuZydcclxuXHJcbmV4cG9ydCBjb25zdCBzdGF0aXN0aWNzX3RhYiA9IFtcclxuICAgIHtcclxuICAgICAgICB0ZWFtT25lTmFtZTogJ9CQ0YLQu9C10YLQuNC60L4nLFxyXG4gICAgICAgIHRlYW1PbmVJY29uOiBhdGxldGljb0ljb24uc3JjLFxyXG4gICAgICAgIHRlYW1Ud29OYW1lOiAn0JDRgtC70LXRgtC40LonLFxyXG4gICAgICAgIHRlYW1Ud29JY29uOiBhdGxldGljSWNvbi5zcmMsXHJcbiAgICAgICAgcHJlZGljdGlvbjoge1xyXG4gICAgICAgICAgICB0aGVyZUlzOiBmYWxzZSxcclxuICAgICAgICAgICAgdG90YWxCZXQ6ICfRgtCxIDEsNSAvICcsXHJcbiAgICAgICAgICAgIGNvZWZmaWNlbnQ6ICfQutC+0LXRhCAzLDUnXHJcbiAgICAgICAgfSxcclxuICAgICAgICBkYXRlOiAnMTQuMDEnLFxyXG4gICAgICAgIHRpbWU6ICcyMjozMCcsXHJcbiAgICAgICAgc2NvcmU6ICcxOjAnLFxyXG4gICAgICAgIGdhbWVSZXN1bHQ6ICd3aW4nXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIHRlYW1PbmVOYW1lOiAn0JHQsNGA0YHQtdC70L7QvdCwJyxcclxuICAgICAgICB0ZWFtT25lSWNvbjogYmFyY2FJY29uLnNyYyxcclxuICAgICAgICB0ZWFtVHdvTmFtZTogJ9Cf0KHQlicsXHJcbiAgICAgICAgdGVhbVR3b0ljb246IHBzakljb24uc3JjLFxyXG4gICAgICAgIHByZWRpY3Rpb246IHtcclxuICAgICAgICAgICAgdGhlcmVJczogZmFsc2UsXHJcbiAgICAgICAgICAgIHRvdGFsQmV0OiAn0YLQsSAxLDUgLyAnLFxyXG4gICAgICAgICAgICBjb2VmZmljZW50OiAn0LrQvtC10YQgMyw1J1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZGF0ZTogJzE0LjAxJyxcclxuICAgICAgICB0aW1lOiAnMjI6MzAnLFxyXG4gICAgICAgIHNjb3JlOiAnMTowJyxcclxuICAgICAgICBnYW1lUmVzdWx0OiAnbG9zZSdcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgdGVhbU9uZU5hbWU6ICfQnNCw0YDRgdC10LvRjCcsXHJcbiAgICAgICAgdGVhbU9uZUljb246IG1hcmNlbEljb24uc3JjLFxyXG4gICAgICAgIHRlYW1Ud29OYW1lOiAn0JDRgtC70LXRgtC40LonLFxyXG4gICAgICAgIHRlYW1Ud29JY29uOiByZW5uYWlzSWNvbi5zcmMsXHJcbiAgICAgICAgcHJlZGljdGlvbjoge1xyXG4gICAgICAgICAgICB0aGVyZUlzOiBmYWxzZSxcclxuICAgICAgICAgICAgdG90YWxCZXQ6ICfRgtCxIDEsNSAvICcsXHJcbiAgICAgICAgICAgIGNvZWZmaWNlbnQ6ICfQutC+0LXRhCAzLDUnXHJcbiAgICAgICAgfSxcclxuICAgICAgICBkYXRlOiAnMTQuMDEnLFxyXG4gICAgICAgIHRpbWU6ICcyMjozMCcsXHJcbiAgICAgICAgc2NvcmU6ICcxOjAnLFxyXG4gICAgICAgIGdhbWVSZXN1bHQ6ICdyZXR1cm4nXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIHRlYW1PbmVOYW1lOiAn0JDRgtC70LXRgtC40LrQvicsXHJcbiAgICAgICAgdGVhbU9uZUljb246IGF0bGV0aWNvSWNvbi5zcmMsXHJcbiAgICAgICAgdGVhbVR3b05hbWU6ICfQkNGC0LvQtdGC0LjQuicsXHJcbiAgICAgICAgdGVhbVR3b0ljb246IGF0bGV0aWNJY29uLnNyYyxcclxuICAgICAgICBwcmVkaWN0aW9uOiB7XHJcbiAgICAgICAgICAgIHRoZXJlSXM6IGZhbHNlLFxyXG4gICAgICAgICAgICB0b3RhbEJldDogJ9GC0LEgMSw1IC8gJyxcclxuICAgICAgICAgICAgY29lZmZpY2VudDogJ9C60L7QtdGEIDMsNSdcclxuICAgICAgICB9LFxyXG4gICAgICAgIGRhdGU6ICcxNC4wMScsXHJcbiAgICAgICAgdGltZTogJzIyOjMwJyxcclxuICAgICAgICBzY29yZTogJzE6MCcsXHJcbiAgICAgICAgZ2FtZVJlc3VsdDogJ2xvc2UnXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIHRlYW1PbmVOYW1lOiAn0JDRgtC70LXRgtC40LrQvicsXHJcbiAgICAgICAgdGVhbU9uZUljb246IGF0bGV0aWNvSWNvbi5zcmMsXHJcbiAgICAgICAgdGVhbVR3b05hbWU6ICfQkNGC0LvQtdGC0LjQuicsXHJcbiAgICAgICAgdGVhbVR3b0ljb246IGF0bGV0aWNJY29uLnNyYyxcclxuICAgICAgICBwcmVkaWN0aW9uOiB7XHJcbiAgICAgICAgICAgIHRoZXJlSXM6IGZhbHNlLFxyXG4gICAgICAgICAgICB0b3RhbEJldDogJ9GC0LEgMSw1IC8gJyxcclxuICAgICAgICAgICAgY29lZmZpY2VudDogJ9C60L7QtdGEIDMsNSdcclxuICAgICAgICB9LFxyXG4gICAgICAgIGRhdGU6ICcxNC4wMScsXHJcbiAgICAgICAgdGltZTogJzIyOjMwJyxcclxuICAgICAgICBzY29yZTogJzE6MCcsXHJcbiAgICAgICAgZ2FtZVJlc3VsdDogJ2xvc2UnXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIHRlYW1PbmVOYW1lOiAn0JDRgtC70LXRgtC40LrQvicsXHJcbiAgICAgICAgdGVhbU9uZUljb246IGF0bGV0aWNvSWNvbi5zcmMsXHJcbiAgICAgICAgdGVhbVR3b05hbWU6ICfQkNGC0LvQtdGC0LjQuicsXHJcbiAgICAgICAgdGVhbVR3b0ljb246IGF0bGV0aWNJY29uLnNyYyxcclxuICAgICAgICBwcmVkaWN0aW9uOiB7XHJcbiAgICAgICAgICAgIHRoZXJlSXM6IGZhbHNlLFxyXG4gICAgICAgICAgICB0b3RhbEJldDogJ9GC0LEgMSw1IC8gJyxcclxuICAgICAgICAgICAgY29lZmZpY2VudDogJ9C60L7QtdGEIDMsNSdcclxuICAgICAgICB9LFxyXG4gICAgICAgIGRhdGU6ICcxNC4wMScsXHJcbiAgICAgICAgdGltZTogJzIyOjMwJyxcclxuICAgICAgICBzY29yZTogJzE6MCcsXHJcbiAgICAgICAgZ2FtZVJlc3VsdDogJ2xvc2UnXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIHRlYW1PbmVOYW1lOiAn0JDRgtC70LXRgtC40LrQvicsXHJcbiAgICAgICAgdGVhbU9uZUljb246IGF0bGV0aWNvSWNvbi5zcmMsXHJcbiAgICAgICAgdGVhbVR3b05hbWU6ICfQkNGC0LvQtdGC0LjQuicsXHJcbiAgICAgICAgdGVhbVR3b0ljb246IGF0bGV0aWNJY29uLnNyYyxcclxuICAgICAgICBwcmVkaWN0aW9uOiB7XHJcbiAgICAgICAgICAgIHRoZXJlSXM6IGZhbHNlLFxyXG4gICAgICAgICAgICB0b3RhbEJldDogJ9GC0LEgMSw1IC8gJyxcclxuICAgICAgICAgICAgY29lZmZpY2VudDogJ9C60L7QtdGEIDMsNSdcclxuICAgICAgICB9LFxyXG4gICAgICAgIGRhdGU6ICcxNC4wMScsXHJcbiAgICAgICAgdGltZTogJzIyOjMwJyxcclxuICAgICAgICBzY29yZTogJzE6MCcsXHJcbiAgICAgICAgZ2FtZVJlc3VsdDogJ3JldHVybidcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgdGVhbU9uZU5hbWU6ICfQkNGC0LvQtdGC0LjQutC+JyxcclxuICAgICAgICB0ZWFtT25lSWNvbjogYXRsZXRpY29JY29uLnNyYyxcclxuICAgICAgICB0ZWFtVHdvTmFtZTogJ9CQ0YLQu9C10YLQuNC6JyxcclxuICAgICAgICB0ZWFtVHdvSWNvbjogYXRsZXRpY0ljb24uc3JjLFxyXG4gICAgICAgIHByZWRpY3Rpb246IHtcclxuICAgICAgICAgICAgdGhlcmVJczogZmFsc2UsXHJcbiAgICAgICAgICAgIHRvdGFsQmV0OiAn0YLQsSAxLDUgLyAnLFxyXG4gICAgICAgICAgICBjb2VmZmljZW50OiAn0LrQvtC10YQgMyw1J1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZGF0ZTogJzE0LjAxJyxcclxuICAgICAgICB0aW1lOiAnMjI6MzAnLFxyXG4gICAgICAgIHNjb3JlOiAnMTowJyxcclxuICAgICAgICBnYW1lUmVzdWx0OiAnbG9zZSdcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgdGVhbU9uZU5hbWU6ICfQkNGC0LvQtdGC0LjQutC+JyxcclxuICAgICAgICB0ZWFtT25lSWNvbjogYXRsZXRpY29JY29uLnNyYyxcclxuICAgICAgICB0ZWFtVHdvTmFtZTogJ9CQ0YLQu9C10YLQuNC6JyxcclxuICAgICAgICB0ZWFtVHdvSWNvbjogYXRsZXRpY0ljb24uc3JjLFxyXG4gICAgICAgIHByZWRpY3Rpb246IHtcclxuICAgICAgICAgICAgdGhlcmVJczogZmFsc2UsXHJcbiAgICAgICAgICAgIHRvdGFsQmV0OiAn0YLQsSAxLDUgLyAnLFxyXG4gICAgICAgICAgICBjb2VmZmljZW50OiAn0LrQvtC10YQgMyw1J1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZGF0ZTogJzE0LjAxJyxcclxuICAgICAgICB0aW1lOiAnMjI6MzAnLFxyXG4gICAgICAgIHNjb3JlOiAnMTowJyxcclxuICAgICAgICBnYW1lUmVzdWx0OiAnd2luJ1xyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICB0ZWFtT25lTmFtZTogJ9CQ0YLQu9C10YLQuNC60L4nLFxyXG4gICAgICAgIHRlYW1PbmVJY29uOiBhdGxldGljb0ljb24uc3JjLFxyXG4gICAgICAgIHRlYW1Ud29OYW1lOiAn0JDRgtC70LXRgtC40LonLFxyXG4gICAgICAgIHRlYW1Ud29JY29uOiBhdGxldGljSWNvbi5zcmMsXHJcbiAgICAgICAgcHJlZGljdGlvbjoge1xyXG4gICAgICAgICAgICB0aGVyZUlzOiBmYWxzZSxcclxuICAgICAgICAgICAgdG90YWxCZXQ6ICfRgtCxIDEsNSAvICcsXHJcbiAgICAgICAgICAgIGNvZWZmaWNlbnQ6ICfQutC+0LXRhCAzLDUnXHJcbiAgICAgICAgfSxcclxuICAgICAgICBkYXRlOiAnMTQuMDEnLFxyXG4gICAgICAgIHRpbWU6ICcyMjozMCcsXHJcbiAgICAgICAgc2NvcmU6ICcxOjAnLFxyXG4gICAgICAgIGdhbWVSZXN1bHQ6ICdsb3NlJ1xyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICB0ZWFtT25lTmFtZTogJ9CQ0YLQu9C10YLQuNC60L4nLFxyXG4gICAgICAgIHRlYW1PbmVJY29uOiBhdGxldGljb0ljb24uc3JjLFxyXG4gICAgICAgIHRlYW1Ud29OYW1lOiAn0JDRgtC70LXRgtC40LonLFxyXG4gICAgICAgIHRlYW1Ud29JY29uOiBhdGxldGljSWNvbi5zcmMsXHJcbiAgICAgICAgcHJlZGljdGlvbjoge1xyXG4gICAgICAgICAgICB0aGVyZUlzOiBmYWxzZSxcclxuICAgICAgICAgICAgdG90YWxCZXQ6ICfRgtCxIDEsNSAvICcsXHJcbiAgICAgICAgICAgIGNvZWZmaWNlbnQ6ICfQutC+0LXRhCAzLDUnXHJcbiAgICAgICAgfSxcclxuICAgICAgICBkYXRlOiAnMTQuMDEnLFxyXG4gICAgICAgIHRpbWU6ICcyMjozMCcsXHJcbiAgICAgICAgc2NvcmU6ICcxOjAnLFxyXG4gICAgICAgIGdhbWVSZXN1bHQ6ICd3aW4nXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIHRlYW1PbmVOYW1lOiAn0JDRgtC70LXRgtC40LrQvicsXHJcbiAgICAgICAgdGVhbU9uZUljb246IGF0bGV0aWNvSWNvbi5zcmMsXHJcbiAgICAgICAgdGVhbVR3b05hbWU6ICfQkNGC0LvQtdGC0LjQuicsXHJcbiAgICAgICAgdGVhbVR3b0ljb246IGF0bGV0aWNJY29uLnNyYyxcclxuICAgICAgICBwcmVkaWN0aW9uOiB7XHJcbiAgICAgICAgICAgIHRoZXJlSXM6IGZhbHNlLFxyXG4gICAgICAgICAgICB0b3RhbEJldDogJ9GC0LEgMSw1IC8gJyxcclxuICAgICAgICAgICAgY29lZmZpY2VudDogJ9C60L7QtdGEIDMsNSdcclxuICAgICAgICB9LFxyXG4gICAgICAgIGRhdGU6ICcxNC4wMScsXHJcbiAgICAgICAgdGltZTogJzIyOjMwJyxcclxuICAgICAgICBzY29yZTogJzE6MCcsXHJcbiAgICAgICAgZ2FtZVJlc3VsdDogJ3dpbidcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgdGVhbU9uZU5hbWU6ICfQkNGC0LvQtdGC0LjQutC+JyxcclxuICAgICAgICB0ZWFtT25lSWNvbjogYXRsZXRpY29JY29uLnNyYyxcclxuICAgICAgICB0ZWFtVHdvTmFtZTogJ9CQ0YLQu9C10YLQuNC6JyxcclxuICAgICAgICB0ZWFtVHdvSWNvbjogYXRsZXRpY0ljb24uc3JjLFxyXG4gICAgICAgIHByZWRpY3Rpb246IHtcclxuICAgICAgICAgICAgdGhlcmVJczogZmFsc2UsXHJcbiAgICAgICAgICAgIHRvdGFsQmV0OiAn0YLQsSAxLDUgLyAnLFxyXG4gICAgICAgICAgICBjb2VmZmljZW50OiAn0LrQvtC10YQgMyw1J1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZGF0ZTogJzE0LjAxJyxcclxuICAgICAgICB0aW1lOiAnMjI6MzAnLFxyXG4gICAgICAgIHNjb3JlOiAnMTowJyxcclxuICAgICAgICBnYW1lUmVzdWx0OiAnd2luJ1xyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICB0ZWFtT25lTmFtZTogJ9CQ0YLQu9C10YLQuNC60L4nLFxyXG4gICAgICAgIHRlYW1PbmVJY29uOiBhdGxldGljb0ljb24uc3JjLFxyXG4gICAgICAgIHRlYW1Ud29OYW1lOiAn0JDRgtC70LXRgtC40LonLFxyXG4gICAgICAgIHRlYW1Ud29JY29uOiBhdGxldGljSWNvbi5zcmMsXHJcbiAgICAgICAgcHJlZGljdGlvbjoge1xyXG4gICAgICAgICAgICB0aGVyZUlzOiBmYWxzZSxcclxuICAgICAgICAgICAgdG90YWxCZXQ6ICfRgtCxIDEsNSAvICcsXHJcbiAgICAgICAgICAgIGNvZWZmaWNlbnQ6ICfQutC+0LXRhCAzLDUnXHJcbiAgICAgICAgfSxcclxuICAgICAgICBkYXRlOiAnMTQuMDEnLFxyXG4gICAgICAgIHRpbWU6ICcyMjozMCcsXHJcbiAgICAgICAgc2NvcmU6ICcxOjAnLFxyXG4gICAgICAgIGdhbWVSZXN1bHQ6ICd3aW4nXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIHRlYW1PbmVOYW1lOiAn0JDRgtC70LXRgtC40LrQvicsXHJcbiAgICAgICAgdGVhbU9uZUljb246IGF0bGV0aWNvSWNvbi5zcmMsXHJcbiAgICAgICAgdGVhbVR3b05hbWU6ICfQkNGC0LvQtdGC0LjQuicsXHJcbiAgICAgICAgdGVhbVR3b0ljb246IGF0bGV0aWNJY29uLnNyYyxcclxuICAgICAgICBwcmVkaWN0aW9uOiB7XHJcbiAgICAgICAgICAgIHRoZXJlSXM6IGZhbHNlLFxyXG4gICAgICAgICAgICB0b3RhbEJldDogJ9GC0LEgMSw1IC8gJyxcclxuICAgICAgICAgICAgY29lZmZpY2VudDogJ9C60L7QtdGEIDMsNSdcclxuICAgICAgICB9LFxyXG4gICAgICAgIGRhdGU6ICcxNC4wMScsXHJcbiAgICAgICAgdGltZTogJzIyOjMwJyxcclxuICAgICAgICBzY29yZTogJzE6MCcsXHJcbiAgICAgICAgZ2FtZVJlc3VsdDogJ2xvc2UnXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIHRlYW1PbmVOYW1lOiAn0JDRgtC70LXRgtC40LrQvicsXHJcbiAgICAgICAgdGVhbU9uZUljb246IGF0bGV0aWNvSWNvbi5zcmMsXHJcbiAgICAgICAgdGVhbVR3b05hbWU6ICfQkNGC0LvQtdGC0LjQuicsXHJcbiAgICAgICAgdGVhbVR3b0ljb246IGF0bGV0aWNJY29uLnNyYyxcclxuICAgICAgICBwcmVkaWN0aW9uOiB7XHJcbiAgICAgICAgICAgIHRoZXJlSXM6IGZhbHNlLFxyXG4gICAgICAgICAgICB0b3RhbEJldDogJ9GC0LEgMSw1IC8gJyxcclxuICAgICAgICAgICAgY29lZmZpY2VudDogJ9C60L7QtdGEIDMsNSdcclxuICAgICAgICB9LFxyXG4gICAgICAgIGRhdGU6ICcxNC4wMScsXHJcbiAgICAgICAgdGltZTogJzIyOjMwJyxcclxuICAgICAgICBzY29yZTogJzE6MCcsXHJcbiAgICAgICAgZ2FtZVJlc3VsdDogJ2xvc2UnXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIHRlYW1PbmVOYW1lOiAn0JDRgtC70LXRgtC40LrQvicsXHJcbiAgICAgICAgdGVhbU9uZUljb246IGF0bGV0aWNvSWNvbi5zcmMsXHJcbiAgICAgICAgdGVhbVR3b05hbWU6ICfQkNGC0LvQtdGC0LjQuicsXHJcbiAgICAgICAgdGVhbVR3b0ljb246IGF0bGV0aWNJY29uLnNyYyxcclxuICAgICAgICBwcmVkaWN0aW9uOiB7XHJcbiAgICAgICAgICAgIHRoZXJlSXM6IGZhbHNlLFxyXG4gICAgICAgICAgICB0b3RhbEJldDogJ9GC0LEgMSw1IC8gJyxcclxuICAgICAgICAgICAgY29lZmZpY2VudDogJ9C60L7QtdGEIDMsNSdcclxuICAgICAgICB9LFxyXG4gICAgICAgIGRhdGU6ICcxNC4wMScsXHJcbiAgICAgICAgdGltZTogJzIyOjMwJyxcclxuICAgICAgICBzY29yZTogJzE6MCcsXHJcbiAgICAgICAgZ2FtZVJlc3VsdDogJ2xvc2UnXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIHRlYW1PbmVOYW1lOiAn0JDRgtC70LXRgtC40LrQvicsXHJcbiAgICAgICAgdGVhbU9uZUljb246IGF0bGV0aWNvSWNvbi5zcmMsXHJcbiAgICAgICAgdGVhbVR3b05hbWU6ICfQkNGC0LvQtdGC0LjQuicsXHJcbiAgICAgICAgdGVhbVR3b0ljb246IGF0bGV0aWNJY29uLnNyYyxcclxuICAgICAgICBwcmVkaWN0aW9uOiB7XHJcbiAgICAgICAgICAgIHRoZXJlSXM6IGZhbHNlLFxyXG4gICAgICAgICAgICB0b3RhbEJldDogJ9GC0LEgMSw1IC8gJyxcclxuICAgICAgICAgICAgY29lZmZpY2VudDogJ9C60L7QtdGEIDMsNSdcclxuICAgICAgICB9LFxyXG4gICAgICAgIGRhdGU6ICcxNC4wMScsXHJcbiAgICAgICAgdGltZTogJzIyOjMwJyxcclxuICAgICAgICBzY29yZTogJzE6MCcsXHJcbiAgICAgICAgZ2FtZVJlc3VsdDogJ3JldHVybidcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgdGVhbU9uZU5hbWU6ICfQkNGC0LvQtdGC0LjQutC+JyxcclxuICAgICAgICB0ZWFtT25lSWNvbjogYXRsZXRpY29JY29uLnNyYyxcclxuICAgICAgICB0ZWFtVHdvTmFtZTogJ9CQ0YLQu9C10YLQuNC6JyxcclxuICAgICAgICB0ZWFtVHdvSWNvbjogYXRsZXRpY0ljb24uc3JjLFxyXG4gICAgICAgIHByZWRpY3Rpb246IHtcclxuICAgICAgICAgICAgdGhlcmVJczogZmFsc2UsXHJcbiAgICAgICAgICAgIHRvdGFsQmV0OiAn0YLQsSAxLDUgLyAnLFxyXG4gICAgICAgICAgICBjb2VmZmljZW50OiAn0LrQvtC10YQgMyw1J1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZGF0ZTogJzE0LjAxJyxcclxuICAgICAgICB0aW1lOiAnMjI6MzAnLFxyXG4gICAgICAgIHNjb3JlOiAnMTowJyxcclxuICAgICAgICBnYW1lUmVzdWx0OiAncmV0dXJuJ1xyXG4gICAgfSxcclxuXVxyXG4iLCJleHBvcnQgZGVmYXVsdCAge1wic3JjXCI6XCIvX25leHQvc3RhdGljL2ltYWdlL3B1YmxpYy9pbWFnZXMvZ2FtZXMvYXRsZXRpYy4yODM4MjBmZDI2YWUzMDg1NDJjNDk5ODc0N2Y2ZjE1MC5wbmdcIixcImhlaWdodFwiOjYzLFwid2lkdGhcIjo1OCxcImJsdXJEYXRhVVJMXCI6XCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUFjQUFBQUlDQVlBQUFBMUJPVUdBQUFBNlVsRVFWUjQyalhLdjJyQ1VCZ0Y4RHY0TW9XK1I0Zk9oVDVMN1JnWE42RkxDNUVVSEJwcTBnNFhHa1d3NG8yNVhOQWhFQzVKTUxtS1VmRFBvS0FJMGUvVERQNld3emtjRXNkeDd2cytjczVCQ0FGQkVJQVlqZkM2QVZGSzdaSWt3U2dNd2ZVOGtGS0NheGlvMG5SUEdHT3hydXY0cW1sbnE5R0E5WTk5bmxDS1RxZVRrTVY4Ymw0UCtGV3RuamJOYnpqYTlpbUxJaHdyWlJGUGlLZlpkSXFyai9jY2UvKzRyTmZ6UlpiaGdQTm5VaGlucVpEOVBtNC9qVVBRN2FJTXd5RzUwU3FWTzZmZFBqREx3bDlLankvbDhqMHBNTmN0RmRrMHpRZmFhdVZ2dGRwajBmOGNwM1FCV2Z5Ymo1MCtjb3NBQUFBQVNVVk9SSzVDWUlJPVwifTsiLCJleHBvcnQgZGVmYXVsdCAge1wic3JjXCI6XCIvX25leHQvc3RhdGljL2ltYWdlL3B1YmxpYy9pbWFnZXMvZ2FtZXMvYXRsZXRpY28uMmNlNzVlMjExNjJlMmU2ZGM0OGI5OWU2MDE4MTA3ZTAucG5nXCIsXCJoZWlnaHRcIjo2MixcIndpZHRoXCI6NDcsXCJibHVyRGF0YVVSTFwiOlwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFBWUFBQUFJQ0FZQUFBRGF4bzQ0QUFBQTAwbEVRVlI0bkFISUFEZi9BV3h0aHNUZTMrY3g4dlA2Q2d3S0JBQUdCd1gyQmhBT3p3R0RoSmIvTnpZdUFOemM0ZjhFQndjQXlNZlNBUkRpNFFBQmo1Q2cvQkVRRFFMNy8vOEJ2S3ErQUh0OFh2L2pyNnYvQVdocGd2MzE5dmtDTURFbC95Lzg3QUF5UzBnQnc2V3Evd0ZlYUlQL0p3SDIvVmxXUkFQKyt2b0FDQk1UL2RDd3N3TUJub1dPOVU1UVJRcnQ0Ti84L3Y3L0FCRWRIUVRGc0xiM0FZMlRvVEFvQnY2bUpTQVlLUUFBQUFEYzRlall5djRLV3dGcUkwWUFsdDI2QnJtc3Nyc0FBQUFCUjFST1JWVW9VZmwrbFZ0clNUQ3k0UUFBQUFCSlJVNUVya0pnZ2c9PVwifTsiLCJleHBvcnQgZGVmYXVsdCAge1wic3JjXCI6XCIvX25leHQvc3RhdGljL2ltYWdlL3B1YmxpYy9pbWFnZXMvbWFpbi9tYXRjaGVzL2JhcmNhLmFmMzU1MjdiMTYwNjc2ZWFjN2E2ZDVjMGE2MDg4M2MzLnBuZ1wiLFwiaGVpZ2h0XCI6NDksXCJ3aWR0aFwiOjQ4LFwiYmx1ckRhdGFVUkxcIjpcImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBQWdBQUFBSUNBWUFBQURFRDc2TEFBQUJDa2xFUVZSNDJtUG95MlR3V3Irc29tdDdpKy9XVGZOeSt0YTBTUFZ2YTJiYnVxcWR1WE5LR1lNN1EwTTZnOXUxRGJQK1A4NG8vbjkzMGRUL0QyYWEvWDg3VGZ6LzVTa2kvOXNiR1J3WmdFRDAwcHhwSDU1NEZQNS9PSFg2N3hlejdINS9uQ0x6LzJLcjNEc0diUVpoaGkwZERCUGZucTM1ZjIxeHhKOFQ2MnYvN2VwVi9uZDVEc09mbDFzWS9tL3VaK2hoV05GanUzSkJpZi8vT1dsK3YzdVRYUDdYeFlYL241b1E4WHR4ZmZML2xkMFdTeG1hcXV4VEMzeEsvdWN5bFAvZU9DWHN6K2FwZ1g4S0dFci9GUG9XL2UrdXQ0NWpZQ2hnWUYxYUtyS3hOenpwLzdUQytQL1RpK0wrOTRZbi9GOWVKcktjQVJsTWIyYXdXOVdvTUJ1SVo4MXNaYkNCaVFNQWtQdDlXTXdpWld3QUFBQUFTVVZPUks1Q1lJST1cIn07IiwiZXhwb3J0IGRlZmF1bHQgIHtcInNyY1wiOlwiL19uZXh0L3N0YXRpYy9pbWFnZS9wdWJsaWMvaW1hZ2VzL21haW4vbWF0Y2hlcy9tYXJjZWwuZWI0NjA0ODY0Y2UyNDAxYWEyNGZiNGVkMjcxZjZlODMucG5nXCIsXCJoZWlnaHRcIjo1MyxcIndpZHRoXCI6NDEsXCJibHVyRGF0YVVSTFwiOlwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFBWUFBQUFJQ0FZQUFBRGF4bzQ0QUFBQXRVbEVRVlI0Mm1Pb243T0ZsUUVJN2k1bjBIMjRna0VkeEc2Y3N3a29CZ0xUYnJqYXpMZ1Fhekg5WWdLUWJROFJuSDZkbjNuNnRmMUFnVTZHYWRlbkFObmJnVFFYVVBXMWJpQmVEeFJZd1RUdCtscWd3alZBaVZZR29PQjJJRjRFeEJlQkF1Y1pwbDliQW1SdlpoQ2FmbTJENFBScmkvbW1YNXNCWlBjS1RMKzJEb2dYQUhYY2FXR1lkcnVYWWVxZFVJYXBkd09CN01sQVhNZXdZbjVmOXQ1Rm1SNHJGM1E3cjEzUTVyVjNVWmJUb3ZsVFlnQUZaVmZBZXVaV1BRQUFBQUJKUlU1RXJrSmdnZz09XCJ9OyIsImV4cG9ydCBkZWZhdWx0ICB7XCJzcmNcIjpcIi9fbmV4dC9zdGF0aWMvaW1hZ2UvcHVibGljL2ltYWdlcy9tYWluL21hdGNoZXMvcHNqLjE5OTA5Y2RjMjdlNmU3NGRhNDEzZjRhMjIxMmRhZDk3LnBuZ1wiLFwiaGVpZ2h0XCI6NDcsXCJ3aWR0aFwiOjQ3LFwiYmx1ckRhdGFVUkxcIjpcImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBQWdBQUFBSUNBWUFBQURFRDc2TEFBQUJFMGxFUVZSNG5BRUlBZmYrQVUxK3JBQ3p6K29QWlQwYmhna0hCRVlKQmdULzZlLzJ0cURmOFhwVkhBejJBUUFpaWc5K2VqSEJDQWNGTHdRQkFRRDgvUDBBOWZ2OUFQbjgvc21NdE5kQ0FXYUtzWnJ3N3ZWbEJSUU8rVUgwN1FYNi92OEEwaFlZKytqZzdBY1dGdzJPQVZGOHF1RHk2L01mdlFnSy90QUQzd0g1QVFNQU4va2QvMEQ2OXdJY0d3L1lBVlo5cXVIRTYvWWVsUzRPL2lmZTFBRUNCQU1Benh3cS8xblI3d0ppSGc3YUFXK09zNXlzM2U1amx5VUorY2I1K3dVTUFnQUFLZ0lFKzJ6ZStBZFlKUk9SQVV5RnNBOGFCQURCeXUvNEx4bisvZ0FLQ2dZQTVQbjlBREFSQ2NuMEN3cENBV21RdFFEbjgvb09Id29EaXVmeStVVUdCQUwvRXdrRnRjdnM5bmtzRmd6MlFvcDJEWWg4WUlrQUFBQUFTVVZPUks1Q1lJST1cIn07IiwiZXhwb3J0IGRlZmF1bHQgIHtcInNyY1wiOlwiL19uZXh0L3N0YXRpYy9pbWFnZS9wdWJsaWMvaW1hZ2VzL21haW4vbWF0Y2hlcy9yZW5uYWlzLmQ3ZjU5NzMwNDk0NzQwMGZiMjBmMDVlMmRhZTZiNWZiLnBuZ1wiLFwiaGVpZ2h0XCI6NTEsXCJ3aWR0aFwiOjQ3LFwiYmx1ckRhdGFVUkxcIjpcImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBQWNBQUFBSUNBWUFBQUExQk9VR0FBQUE2a2xFUVZSNDJtUFkzY0dqa2VIUGVUZkVndUhjVmdPRy9jK0R4Sys5U0ZZOSsyMkRnQUREdWpZOWMzVUdodjlIcTZ2L0gxKzY1UC9hcExUL1Qyd1lQdjdZNEN6QjBGYXE1cC9Jd1BELzE4SDl2eDlkdS9wbjlhcFYvMjdyTWZ6OE05Tk5sNkU2WHFxWGdZSGgvNjIrcnQrN2Vydi9MNnV1L3ZOUW11SC82d3FEVklaY2Y0RXR5c2JtLzkxTURINXY4UFA4L3pqWTg5ZlRZTy8venpOVStoZ2FFM2dtT0prWi9XZXdkUGkvSThqbjk5dW84UCtQdzkzL3Z5NlR6V0Q0ZjQ2Qm96V0dvVi9hZ09ITFJoMkIvNi85WkY4L3kyYW9aRUFHdTZhSXE1MnVrT241ZjBCZkdDWUdBTlpLWnNGYzIxdkhBQUFBQUVsRlRrU3VRbUNDXCJ9OyJdLCJzb3VyY2VSb290IjoiIn0=