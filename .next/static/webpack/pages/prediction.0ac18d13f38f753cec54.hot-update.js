self["webpackHotUpdate_N_E"]("pages/prediction",{

/***/ "./components/Pages/PredictionPayments/Tabs/PredictionTab/PredictionTab.jsx":
/*!**********************************************************************************!*\
  !*** ./components/Pages/PredictionPayments/Tabs/PredictionTab/PredictionTab.jsx ***!
  \**********************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PredictionTab": function() { return /* binding */ PredictionTab; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_dist_client_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/client/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_dist_client_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_client_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _src_games_data_predictions_predictions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../src/games_data/predictions/predictions */ "./src/games_data/predictions/predictions.js");
/* harmony import */ var _Row_Row__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Row/Row */ "./components/Pages/PredictionPayments/Tabs/Row/Row.jsx");
/* harmony import */ var _TabHeader_TabHeader__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../TabHeader/TabHeader */ "./components/Pages/PredictionPayments/Tabs/TabHeader/TabHeader.jsx");
/* harmony import */ var _PredictionTab_module_scss__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./PredictionTab.module.scss */ "./components/Pages/PredictionPayments/Tabs/PredictionTab/PredictionTab.module.scss");
/* harmony import */ var _PredictionTab_module_scss__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_PredictionTab_module_scss__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _lib_request_destinations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../../lib/request-destinations */ "./lib/request-destinations.js");
/* harmony import */ var _lib_er_lib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../../lib/er.lib */ "./lib/er.lib.js");
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "C:\\Users\\Admin\\Desktop\\projects\\foot-bet\\components\\Pages\\PredictionPayments\\Tabs\\PredictionTab\\PredictionTab.jsx",
    _s = $RefreshSig$();

// hooks

 // datas

 // components


 // styles 




function PredictionTab(_ref) {
  _s();

  var _this = this;

  var click = _ref.click;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]),
      slide_data = _useState[0],
      setSlideData = _useState[1];

  var router = (0,next_dist_client_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
    (0,_lib_er_lib__WEBPACK_IMPORTED_MODULE_7__.request)(_lib_request_destinations__WEBPACK_IMPORTED_MODULE_6__.GET_PREDICTIONS, {}, {
      auth: true
    }).then(function (rsp) {
      // toast(`Successfully registered`)
      setSlideData(rsp.data.data.map(function (item) {
        return {
          id: item.id,
          teamOneName: '',
          teamOneIcon: item["team1_img_path"],
          teamTwoName: '',
          teamTwoIcon: item["team2_img_path"],
          prediction: {
            thereIs: false,
            totalBet: 'тб 1,5 / ',
            coefficent: 'коеф 3,5'
          },
          type: item.type,
          date: item.date,
          time: item.time,
          coefficent: item.factor,
          predictionButtonName: '.slide.pred_button',
          buyButtonName: '.slide.buy_button',
          predictionText: 'Фулхем тб 1,5 / коэф 3,5',
          ordinarText: "".concat(item.type, " / ").concat(item.price, "\u0440\u0443\u0431."),
          price: item.price + ' руб.'
        };
      }));
    })["catch"](function (error) {});
  }, []);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: (_PredictionTab_module_scss__WEBPACK_IMPORTED_MODULE_8___default().container),
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_TabHeader_TabHeader__WEBPACK_IMPORTED_MODULE_5__.TabHeader, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: (_PredictionTab_module_scss__WEBPACK_IMPORTED_MODULE_8___default().board),
      children: slide_data.map(function (el, i) {
        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Row_Row__WEBPACK_IMPORTED_MODULE_4__.Row, {
          order: i + 1,
          teamOneName: el.teamOneName,
          teamOneIcon: el.teamOneIcon,
          teamTwoName: el.teamTwoName,
          teamTwoIcon: el.teamTwoIcon,
          date: el.date,
          time: el.time,
          prediction: el.prediction,
          type: el.type,
          coefficent: el.coefficent,
          price: el.price,
          clickBuy: function clickBuy() {
            return router.push({
              pathname: '/prediction',
              query: {
                game: el.id
              }
            });
          },
          openPayments: click
        }, Math.random(), false, {
          fileName: _jsxFileName,
          lineNumber: 57,
          columnNumber: 25
        }, _this);
      })
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 52,
    columnNumber: 9
  }, this);
}

_s(PredictionTab, "2pKTlPK66/YJB+bRS6PS0/I9mL8=", false, function () {
  return [next_dist_client_router__WEBPACK_IMPORTED_MODULE_2__.useRouter];
});

_c = PredictionTab;

var _c;

$RefreshReg$(_c, "PredictionTab");

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

/***/ "./src/games_data/express/express.js":
/*!*******************************************!*\
  !*** ./src/games_data/express/express.js ***!
  \*******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "express": function() { return /* binding */ express; }
/* harmony export */ });
/* harmony import */ var _public_images_games_atletico_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../public/images/games/atletico.png */ "./public/images/games/atletico.png");
/* harmony import */ var _public_images_games_atletic_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../public/images/games/atletic.png */ "./public/images/games/atletic.png");
/* harmony import */ var _public_images_main_matches_barca_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../public/images/main/matches/barca.png */ "./public/images/main/matches/barca.png");
/* harmony import */ var _public_images_main_matches_marcel_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../public/images/main/matches/marcel.png */ "./public/images/main/matches/marcel.png");
/* harmony import */ var _public_images_main_matches_psj_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../public/images/main/matches/psj.png */ "./public/images/main/matches/psj.png");
/* harmony import */ var _public_images_main_matches_rennais_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../public/images/main/matches/rennais.png */ "./public/images/main/matches/rennais.png");
/* module decorator */ module = __webpack_require__.hmd(module);
// icons






var express = [{
  id: "expressGame1",
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
  coefficent: '1.67',
  price: '1750 руб.'
}, {
  id: "expressGame2",
  teamOneName: 'Барселона',
  teamOneIcon: _public_images_main_matches_barca_png__WEBPACK_IMPORTED_MODULE_2__.default.src,
  teamTwoName: 'ПСЖ',
  teamTwoIcon: _public_images_main_matches_psj_png__WEBPACK_IMPORTED_MODULE_4__.default.src,
  prediction: {
    thereIs: false,
    totalBet: '',
    coefficent: ''
  },
  date: '14.01',
  time: '23:00',
  coefficent: '2.07',
  price: '2500 руб.'
}, {
  id: "expressGame3",
  teamOneName: 'Марсель',
  teamOneIcon: _public_images_main_matches_marcel_png__WEBPACK_IMPORTED_MODULE_3__.default.src,
  teamTwoName: 'Атлетик',
  teamTwoIcon: _public_images_main_matches_rennais_png__WEBPACK_IMPORTED_MODULE_5__.default.src,
  prediction: {
    thereIs: false,
    totalBet: '',
    coefficent: ''
  },
  date: '14.01',
  time: '23:00',
  coefficent: '2.07',
  price: '1800 руб. '
}, {
  id: "expressGame4",
  teamOneName: 'Атлетико',
  teamOneIcon: _public_images_games_atletico_png__WEBPACK_IMPORTED_MODULE_0__.default.src,
  teamTwoName: 'Атлетик',
  teamTwoIcon: _public_images_games_atletic_png__WEBPACK_IMPORTED_MODULE_1__.default.src,
  prediction: {
    thereIs: false,
    totalBet: '',
    coefficent: ''
  },
  date: '14.01',
  time: '22:30',
  coefficent: '1.67',
  price: '1500 руб.'
}, {
  id: "expressGame5",
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
  coefficent: '1.67',
  price: '1500 руб.'
}, {
  id: "expressGame6",
  teamOneName: 'Атлетико',
  teamOneIcon: _public_images_games_atletico_png__WEBPACK_IMPORTED_MODULE_0__.default.src,
  teamTwoName: 'Атлетик',
  teamTwoIcon: _public_images_games_atletic_png__WEBPACK_IMPORTED_MODULE_1__.default.src,
  prediction: {
    thereIs: false,
    totalBet: '',
    coefficent: ''
  },
  date: '14.01',
  time: '22:30',
  coefficent: '1.67',
  price: '1500 руб.'
}, {
  id: "expressGame7",
  teamOneName: 'Атлетико',
  teamOneIcon: _public_images_games_atletico_png__WEBPACK_IMPORTED_MODULE_0__.default.src,
  teamTwoName: 'Атлетик',
  teamTwoIcon: _public_images_games_atletic_png__WEBPACK_IMPORTED_MODULE_1__.default.src,
  prediction: {
    thereIs: false,
    totalBet: '',
    coefficent: ''
  },
  date: '14.01',
  time: '22:30',
  coefficent: '1.67',
  price: '1500 руб.'
}, {
  id: "expressGame8",
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
  coefficent: '1.67',
  price: '1500 руб.'
}, {
  id: "expressGame9",
  teamOneName: 'Атлетико',
  teamOneIcon: _public_images_games_atletico_png__WEBPACK_IMPORTED_MODULE_0__.default.src,
  teamTwoName: 'Атлетик',
  teamTwoIcon: _public_images_games_atletic_png__WEBPACK_IMPORTED_MODULE_1__.default.src,
  prediction: {
    thereIs: false,
    totalBet: '',
    coefficent: ''
  },
  date: '14.01',
  time: '22:30',
  coefficent: '1.67',
  price: '1500 руб.'
}, {
  id: "expressGame10",
  teamOneName: 'Атлетико',
  teamOneIcon: _public_images_games_atletico_png__WEBPACK_IMPORTED_MODULE_0__.default.src,
  teamTwoName: 'Атлетик',
  teamTwoIcon: _public_images_games_atletic_png__WEBPACK_IMPORTED_MODULE_1__.default.src,
  prediction: {
    thereIs: false,
    totalBet: '',
    coefficent: ''
  },
  date: '14.01',
  time: '22:30',
  coefficent: '1.67',
  price: '1500 руб.'
}, {
  id: "expressGame11",
  teamOneName: 'Атлетико',
  teamOneIcon: _public_images_games_atletico_png__WEBPACK_IMPORTED_MODULE_0__.default.src,
  teamTwoName: 'Атлетик',
  teamTwoIcon: _public_images_games_atletic_png__WEBPACK_IMPORTED_MODULE_1__.default.src,
  prediction: {
    thereIs: false,
    totalBet: '',
    coefficent: ''
  },
  date: '14.01',
  time: '22:30',
  coefficent: '1.67',
  price: '1500 руб.'
}, {
  id: "expressGame12",
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
  coefficent: '1.67',
  price: '1500 руб.'
}, {
  id: "expressGame13",
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
  coefficent: '1.67',
  price: '1500 руб.'
}, {
  id: "expressGame14",
  teamOneName: 'Атлетико',
  teamOneIcon: _public_images_games_atletico_png__WEBPACK_IMPORTED_MODULE_0__.default.src,
  teamTwoName: 'Атлетик',
  teamTwoIcon: _public_images_games_atletic_png__WEBPACK_IMPORTED_MODULE_1__.default.src,
  prediction: {
    thereIs: false,
    totalBet: '',
    coefficent: ''
  },
  date: '14.01',
  time: '22:30',
  coefficent: '1.67',
  price: '1500 руб.'
}, {
  id: "expressGame15",
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
  coefficent: '1.67',
  price: '1500 руб.'
}, {
  id: "expressGame16",
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
  coefficent: '1.67',
  price: '1500 руб.'
}, {
  id: "expressGame17",
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
  coefficent: '1.67',
  price: '1500 руб.'
}, {
  id: "expressGame18",
  teamOneName: 'Атлетико',
  teamOneIcon: _public_images_games_atletico_png__WEBPACK_IMPORTED_MODULE_0__.default.src,
  teamTwoName: 'Атлетик',
  teamTwoIcon: _public_images_games_atletic_png__WEBPACK_IMPORTED_MODULE_1__.default.src,
  prediction: {
    thereIs: false,
    totalBet: '',
    coefficent: ''
  },
  date: '14.01',
  time: '22:30',
  coefficent: '1.67',
  price: '1500 руб.'
}, {
  id: "expressGame19",
  teamOneName: 'Атлетико',
  teamOneIcon: _public_images_games_atletico_png__WEBPACK_IMPORTED_MODULE_0__.default.src,
  teamTwoName: 'Атлетик',
  teamTwoIcon: _public_images_games_atletic_png__WEBPACK_IMPORTED_MODULE_1__.default.src,
  prediction: {
    thereIs: false,
    totalBet: '',
    coefficent: ''
  },
  date: '14.01',
  time: '22:30',
  coefficent: '1.67',
  price: '1500 руб.'
}, {
  id: "expressGame20",
  teamOneName: 'Атлетико',
  teamOneIcon: _public_images_games_atletico_png__WEBPACK_IMPORTED_MODULE_0__.default.src,
  teamTwoName: 'Атлетик',
  teamTwoIcon: _public_images_games_atletic_png__WEBPACK_IMPORTED_MODULE_1__.default.src,
  prediction: {
    thereIs: false,
    totalBet: '',
    coefficent: ''
  },
  date: '14.01',
  time: '22:30',
  coefficent: '1.67',
  price: '1500 руб.'
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

/***/ "./src/games_data/invinsible_strategy/invinsible_strategy.js":
/*!*******************************************************************!*\
  !*** ./src/games_data/invinsible_strategy/invinsible_strategy.js ***!
  \*******************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "invinsible_strategy": function() { return /* binding */ invinsible_strategy; }
/* harmony export */ });
/* harmony import */ var _public_images_games_atletico_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../public/images/games/atletico.png */ "./public/images/games/atletico.png");
/* harmony import */ var _public_images_games_atletic_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../public/images/games/atletic.png */ "./public/images/games/atletic.png");
/* harmony import */ var _public_images_main_matches_barca_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../public/images/main/matches/barca.png */ "./public/images/main/matches/barca.png");
/* harmony import */ var _public_images_main_matches_marcel_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../public/images/main/matches/marcel.png */ "./public/images/main/matches/marcel.png");
/* harmony import */ var _public_images_main_matches_psj_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../public/images/main/matches/psj.png */ "./public/images/main/matches/psj.png");
/* harmony import */ var _public_images_main_matches_rennais_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../public/images/main/matches/rennais.png */ "./public/images/main/matches/rennais.png");
/* module decorator */ module = __webpack_require__.hmd(module);
// icons






var invinsible_strategy = [{
  id: "invinsibleStgyGame1",
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
  coefficent: '1.67',
  price: '1500 руб.'
}, {
  id: "invinsibleStgyGame2",
  teamOneName: 'Барселона',
  teamOneIcon: _public_images_main_matches_barca_png__WEBPACK_IMPORTED_MODULE_2__.default.src,
  teamTwoName: 'ПСЖ',
  teamTwoIcon: _public_images_main_matches_psj_png__WEBPACK_IMPORTED_MODULE_4__.default.src,
  prediction: {
    thereIs: false,
    totalBet: '',
    coefficent: ''
  },
  date: '14.01',
  time: '23:00',
  coefficent: '2.07',
  price: '2500 руб.'
}, {
  id: "invinsibleStgyGame3",
  teamOneName: 'Марсель',
  teamOneIcon: _public_images_main_matches_marcel_png__WEBPACK_IMPORTED_MODULE_3__.default.src,
  teamTwoName: 'Атлетик',
  teamTwoIcon: _public_images_main_matches_rennais_png__WEBPACK_IMPORTED_MODULE_5__.default.src,
  prediction: {
    thereIs: false,
    totalBet: '',
    coefficent: ''
  },
  date: '14.01',
  time: '23:00',
  coefficent: '2.07',
  price: '1800 руб. '
}, {
  id: "invinsibleStgyGame4",
  teamOneName: 'Атлетико',
  teamOneIcon: _public_images_games_atletico_png__WEBPACK_IMPORTED_MODULE_0__.default.src,
  teamTwoName: 'Атлетик',
  teamTwoIcon: _public_images_games_atletic_png__WEBPACK_IMPORTED_MODULE_1__.default.src,
  prediction: {
    thereIs: false,
    totalBet: '',
    coefficent: ''
  },
  date: '14.01',
  time: '22:30',
  coefficent: '1.67',
  price: '1500 руб.'
}, {
  id: "invinsibleStgyGame5",
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
  coefficent: '1.67',
  price: '1500 руб.'
}, {
  id: "invinsibleStgyGame6",
  teamOneName: 'Атлетико',
  teamOneIcon: _public_images_games_atletico_png__WEBPACK_IMPORTED_MODULE_0__.default.src,
  teamTwoName: 'Атлетик',
  teamTwoIcon: _public_images_games_atletic_png__WEBPACK_IMPORTED_MODULE_1__.default.src,
  prediction: {
    thereIs: false,
    totalBet: '',
    coefficent: ''
  },
  date: '14.01',
  time: '22:30',
  coefficent: '1.67',
  price: '1500 руб.'
}, {
  id: "invinsibleStgyGame7",
  teamOneName: 'Атлетико',
  teamOneIcon: _public_images_games_atletico_png__WEBPACK_IMPORTED_MODULE_0__.default.src,
  teamTwoName: 'Атлетик',
  teamTwoIcon: _public_images_games_atletic_png__WEBPACK_IMPORTED_MODULE_1__.default.src,
  prediction: {
    thereIs: false,
    totalBet: '',
    coefficent: ''
  },
  date: '14.01',
  time: '22:30',
  coefficent: '1.67',
  price: '1500 руб.'
}, {
  id: "invinsibleStgyGame8",
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
  coefficent: '1.67',
  price: '1500 руб.'
}, {
  id: "invinsibleStgyGame9",
  teamOneName: 'Атлетико',
  teamOneIcon: _public_images_games_atletico_png__WEBPACK_IMPORTED_MODULE_0__.default.src,
  teamTwoName: 'Атлетик',
  teamTwoIcon: _public_images_games_atletic_png__WEBPACK_IMPORTED_MODULE_1__.default.src,
  prediction: {
    thereIs: false,
    totalBet: '',
    coefficent: ''
  },
  date: '14.01',
  time: '22:30',
  coefficent: '1.67',
  price: '1500 руб.'
}, {
  id: "invinsibleStgyGame10",
  teamOneName: 'Атлетико',
  teamOneIcon: _public_images_games_atletico_png__WEBPACK_IMPORTED_MODULE_0__.default.src,
  teamTwoName: 'Атлетик',
  teamTwoIcon: _public_images_games_atletic_png__WEBPACK_IMPORTED_MODULE_1__.default.src,
  prediction: {
    thereIs: false,
    totalBet: '',
    coefficent: ''
  },
  date: '14.01',
  time: '22:30',
  coefficent: '1.67',
  price: '1500 руб.'
}, {
  id: "invinsibleStgyGame11",
  teamOneName: 'Атлетико',
  teamOneIcon: _public_images_games_atletico_png__WEBPACK_IMPORTED_MODULE_0__.default.src,
  teamTwoName: 'Атлетик',
  teamTwoIcon: _public_images_games_atletic_png__WEBPACK_IMPORTED_MODULE_1__.default.src,
  prediction: {
    thereIs: false,
    totalBet: '',
    coefficent: ''
  },
  date: '14.01',
  time: '22:30',
  coefficent: '1.67',
  price: '1500 руб.'
}, {
  id: "invinsibleStgyGame12",
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
  coefficent: '1.67',
  price: '1500 руб.'
}, {
  id: "invinsibleStgyGame13",
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
  coefficent: '1.67',
  price: '1500 руб.'
}, {
  id: "invinsibleStgyGame14",
  teamOneName: 'Атлетико',
  teamOneIcon: _public_images_games_atletico_png__WEBPACK_IMPORTED_MODULE_0__.default.src,
  teamTwoName: 'Атлетик',
  teamTwoIcon: _public_images_games_atletic_png__WEBPACK_IMPORTED_MODULE_1__.default.src,
  prediction: {
    thereIs: false,
    totalBet: '',
    coefficent: ''
  },
  date: '14.01',
  time: '22:30',
  coefficent: '1.67',
  price: '1500 руб.'
}, {
  id: "invinsibleStgyGame15",
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
  coefficent: '1.67',
  price: '1500 руб.'
}, {
  id: "invinsibleStgyGame16",
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
  coefficent: '1.67',
  price: '1500 руб.'
}, {
  id: "invinsibleStgyGame17",
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
  coefficent: '1.67',
  price: '1500 руб.'
}, {
  id: "invinsibleStgyGame18",
  teamOneName: 'Атлетико',
  teamOneIcon: _public_images_games_atletico_png__WEBPACK_IMPORTED_MODULE_0__.default.src,
  teamTwoName: 'Атлетик',
  teamTwoIcon: _public_images_games_atletic_png__WEBPACK_IMPORTED_MODULE_1__.default.src,
  prediction: {
    thereIs: false,
    totalBet: '',
    coefficent: ''
  },
  date: '14.01',
  time: '22:30',
  coefficent: '1.67',
  price: '1500 руб.'
}, {
  id: "invinsibleStgyGame19",
  teamOneName: 'Атлетико',
  teamOneIcon: _public_images_games_atletico_png__WEBPACK_IMPORTED_MODULE_0__.default.src,
  teamTwoName: 'Атлетик',
  teamTwoIcon: _public_images_games_atletic_png__WEBPACK_IMPORTED_MODULE_1__.default.src,
  prediction: {
    thereIs: false,
    totalBet: '',
    coefficent: ''
  },
  date: '14.01',
  time: '22:30',
  coefficent: '1.67',
  price: '1500 руб.'
}, {
  id: "invinsibleStgyGame20",
  teamOneName: 'Атлетико',
  teamOneIcon: _public_images_games_atletico_png__WEBPACK_IMPORTED_MODULE_0__.default.src,
  teamTwoName: 'Атлетик',
  teamTwoIcon: _public_images_games_atletic_png__WEBPACK_IMPORTED_MODULE_1__.default.src,
  prediction: {
    thereIs: false,
    totalBet: '',
    coefficent: ''
  },
  date: '14.01',
  time: '22:30',
  coefficent: '1.67',
  price: '1500 руб.'
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

/***/ "./src/games_data/ordinar/ordinar.js":
/*!*******************************************!*\
  !*** ./src/games_data/ordinar/ordinar.js ***!
  \*******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ordinar": function() { return /* binding */ ordinar; }
/* harmony export */ });
/* harmony import */ var _public_images_games_atletico_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../public/images/games/atletico.png */ "./public/images/games/atletico.png");
/* harmony import */ var _public_images_games_atletic_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../public/images/games/atletic.png */ "./public/images/games/atletic.png");
/* harmony import */ var _public_images_main_matches_barca_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../public/images/main/matches/barca.png */ "./public/images/main/matches/barca.png");
/* harmony import */ var _public_images_main_matches_marcel_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../public/images/main/matches/marcel.png */ "./public/images/main/matches/marcel.png");
/* harmony import */ var _public_images_main_matches_psj_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../public/images/main/matches/psj.png */ "./public/images/main/matches/psj.png");
/* harmony import */ var _public_images_main_matches_rennais_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../public/images/main/matches/rennais.png */ "./public/images/main/matches/rennais.png");
/* module decorator */ module = __webpack_require__.hmd(module);
// icons






var ordinar = [{
  id: "ordinarGame1",
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
  coefficent: '1.67',
  price: '1522 руб.'
}, {
  id: "ordinarGame2",
  teamOneName: 'Барселона',
  teamOneIcon: _public_images_main_matches_barca_png__WEBPACK_IMPORTED_MODULE_2__.default.src,
  teamTwoName: 'ПСЖ',
  teamTwoIcon: _public_images_main_matches_psj_png__WEBPACK_IMPORTED_MODULE_4__.default.src,
  prediction: {
    thereIs: false,
    totalBet: '',
    coefficent: ''
  },
  date: '14.01',
  time: '23:00',
  coefficent: '2.07',
  price: '2500 руб.'
}, {
  id: "ordinarGame3",
  teamOneName: 'Марсель',
  teamOneIcon: _public_images_main_matches_marcel_png__WEBPACK_IMPORTED_MODULE_3__.default.src,
  teamTwoName: 'Атлетик',
  teamTwoIcon: _public_images_main_matches_rennais_png__WEBPACK_IMPORTED_MODULE_5__.default.src,
  prediction: {
    thereIs: false,
    totalBet: '',
    coefficent: ''
  },
  date: '14.01',
  time: '23:00',
  coefficent: '2.07',
  price: '1800 руб. '
}, {
  id: "ordinarGame4",
  teamOneName: 'Атлетико',
  teamOneIcon: _public_images_games_atletico_png__WEBPACK_IMPORTED_MODULE_0__.default.src,
  teamTwoName: 'Атлетик',
  teamTwoIcon: _public_images_games_atletic_png__WEBPACK_IMPORTED_MODULE_1__.default.src,
  prediction: {
    thereIs: false,
    totalBet: '',
    coefficent: ''
  },
  date: '14.01',
  time: '22:30',
  coefficent: '1.67',
  price: '1500 руб.'
}, {
  id: "ordinarGame5",
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
  coefficent: '1.67',
  price: '1500 руб.'
}, {
  id: "ordinarGame6",
  teamOneName: 'Атлетико',
  teamOneIcon: _public_images_games_atletico_png__WEBPACK_IMPORTED_MODULE_0__.default.src,
  teamTwoName: 'Атлетик',
  teamTwoIcon: _public_images_games_atletic_png__WEBPACK_IMPORTED_MODULE_1__.default.src,
  prediction: {
    thereIs: false,
    totalBet: '',
    coefficent: ''
  },
  date: '14.01',
  time: '22:30',
  coefficent: '1.67',
  price: '1500 руб.'
}, {
  id: "ordinarGame7",
  teamOneName: 'Атлетико',
  teamOneIcon: _public_images_games_atletico_png__WEBPACK_IMPORTED_MODULE_0__.default.src,
  teamTwoName: 'Атлетик',
  teamTwoIcon: _public_images_games_atletic_png__WEBPACK_IMPORTED_MODULE_1__.default.src,
  prediction: {
    thereIs: false,
    totalBet: '',
    coefficent: ''
  },
  date: '14.01',
  time: '22:30',
  coefficent: '1.67',
  price: '1500 руб.'
}, {
  id: "ordinarGame8",
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
  coefficent: '1.67',
  price: '1500 руб.'
}, {
  id: "ordinarGame9",
  teamOneName: 'Атлетико',
  teamOneIcon: _public_images_games_atletico_png__WEBPACK_IMPORTED_MODULE_0__.default.src,
  teamTwoName: 'Атлетик',
  teamTwoIcon: _public_images_games_atletic_png__WEBPACK_IMPORTED_MODULE_1__.default.src,
  prediction: {
    thereIs: false,
    totalBet: '',
    coefficent: ''
  },
  date: '14.01',
  time: '22:30',
  coefficent: '1.67',
  price: '1500 руб.'
}, {
  id: "ordinarGame10",
  teamOneName: 'Атлетико',
  teamOneIcon: _public_images_games_atletico_png__WEBPACK_IMPORTED_MODULE_0__.default.src,
  teamTwoName: 'Атлетик',
  teamTwoIcon: _public_images_games_atletic_png__WEBPACK_IMPORTED_MODULE_1__.default.src,
  prediction: {
    thereIs: false,
    totalBet: '',
    coefficent: ''
  },
  date: '14.01',
  time: '22:30',
  coefficent: '1.67',
  price: '1500 руб.'
}, {
  id: "ordinarGame11",
  teamOneName: 'Атлетико',
  teamOneIcon: _public_images_games_atletico_png__WEBPACK_IMPORTED_MODULE_0__.default.src,
  teamTwoName: 'Атлетик',
  teamTwoIcon: _public_images_games_atletic_png__WEBPACK_IMPORTED_MODULE_1__.default.src,
  prediction: {
    thereIs: false,
    totalBet: '',
    coefficent: ''
  },
  date: '14.01',
  time: '22:30',
  coefficent: '1.67',
  price: '1500 руб.'
}, {
  id: "ordinarGame12",
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
  coefficent: '1.67',
  price: '1500 руб.'
}, {
  id: "ordinarGame13",
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
  coefficent: '1.67',
  price: '1500 руб.'
}, {
  id: "ordinarGame14",
  teamOneName: 'Атлетико',
  teamOneIcon: _public_images_games_atletico_png__WEBPACK_IMPORTED_MODULE_0__.default.src,
  teamTwoName: 'Атлетик',
  teamTwoIcon: _public_images_games_atletic_png__WEBPACK_IMPORTED_MODULE_1__.default.src,
  prediction: {
    thereIs: false,
    totalBet: '',
    coefficent: ''
  },
  date: '14.01',
  time: '22:30',
  coefficent: '1.67',
  price: '1500 руб.'
}, {
  id: "ordinarGame15",
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
  coefficent: '1.67',
  price: '1500 руб.'
}, {
  id: "ordinarGame16",
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
  coefficent: '1.67',
  price: '1500 руб.'
}, {
  id: "ordinarGame17",
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
  coefficent: '1.67',
  price: '1500 руб.'
}, {
  id: "ordinarGame18",
  teamOneName: 'Атлетико',
  teamOneIcon: _public_images_games_atletico_png__WEBPACK_IMPORTED_MODULE_0__.default.src,
  teamTwoName: 'Атлетик',
  teamTwoIcon: _public_images_games_atletic_png__WEBPACK_IMPORTED_MODULE_1__.default.src,
  prediction: {
    thereIs: false,
    totalBet: '',
    coefficent: ''
  },
  date: '14.01',
  time: '22:30',
  coefficent: '1.67',
  price: '1500 руб.'
}, {
  id: "ordinarGame19",
  teamOneName: 'Атлетико',
  teamOneIcon: _public_images_games_atletico_png__WEBPACK_IMPORTED_MODULE_0__.default.src,
  teamTwoName: 'Атлетик',
  teamTwoIcon: _public_images_games_atletic_png__WEBPACK_IMPORTED_MODULE_1__.default.src,
  prediction: {
    thereIs: false,
    totalBet: '',
    coefficent: ''
  },
  date: '14.01',
  time: '22:30',
  coefficent: '1.67',
  price: '1500 руб.'
}, {
  id: "ordinarGame20",
  teamOneName: 'Атлетико',
  teamOneIcon: _public_images_games_atletico_png__WEBPACK_IMPORTED_MODULE_0__.default.src,
  teamTwoName: 'Атлетик',
  teamTwoIcon: _public_images_games_atletic_png__WEBPACK_IMPORTED_MODULE_1__.default.src,
  prediction: {
    thereIs: false,
    totalBet: '',
    coefficent: ''
  },
  date: '14.01',
  time: '22:30',
  coefficent: '1.67',
  price: '1500 руб.'
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

/***/ "./src/games_data/predictions/predictions.js":
/*!***************************************************!*\
  !*** ./src/games_data/predictions/predictions.js ***!
  \***************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "predictions": function() { return /* binding */ predictions; }
/* harmony export */ });
/* harmony import */ var _public_images_games_atletico_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../public/images/games/atletico.png */ "./public/images/games/atletico.png");
/* harmony import */ var _public_images_games_atletic_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../public/images/games/atletic.png */ "./public/images/games/atletic.png");
/* harmony import */ var _public_images_main_matches_barca_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../public/images/main/matches/barca.png */ "./public/images/main/matches/barca.png");
/* harmony import */ var _public_images_main_matches_marcel_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../public/images/main/matches/marcel.png */ "./public/images/main/matches/marcel.png");
/* harmony import */ var _public_images_main_matches_psj_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../public/images/main/matches/psj.png */ "./public/images/main/matches/psj.png");
/* harmony import */ var _public_images_main_matches_rennais_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../public/images/main/matches/rennais.png */ "./public/images/main/matches/rennais.png");
/* module decorator */ module = __webpack_require__.hmd(module);
// icons






var predictions = [{
  id: 'predictionspageGame1',
  teamOneName: 'Атлетико',
  teamOneIcon: _public_images_games_atletico_png__WEBPACK_IMPORTED_MODULE_0__.default.src,
  teamTwoName: 'Атлетик',
  teamTwoIcon: _public_images_games_atletic_png__WEBPACK_IMPORTED_MODULE_1__.default.src,
  prediction: {
    thereIs: false,
    totalBet: 'тб 1,5 / ',
    coefficent: 'коеф 3,5'
  },
  type: "Ординар",
  date: '14.01',
  time: '22:30',
  coefficent: '1.67',
  price: '1640 руб.'
}, {
  id: 'predictionspageGame2',
  teamOneName: 'Барселона',
  teamOneIcon: _public_images_main_matches_barca_png__WEBPACK_IMPORTED_MODULE_2__.default.src,
  teamTwoName: 'ПСЖ',
  teamTwoIcon: _public_images_main_matches_psj_png__WEBPACK_IMPORTED_MODULE_4__.default.src,
  prediction: {
    thereIs: false,
    totalBet: '',
    coefficent: ''
  },
  type: "Экспресс",
  date: '14.01',
  time: '22:30',
  coefficent: '2.07',
  price: '2500 руб.'
}, {
  id: 'predictionspageGame3',
  teamOneName: 'Марсель',
  teamOneIcon: _public_images_main_matches_marcel_png__WEBPACK_IMPORTED_MODULE_3__.default.src,
  teamTwoName: 'Атлетик',
  teamTwoIcon: _public_images_main_matches_rennais_png__WEBPACK_IMPORTED_MODULE_5__.default.src,
  prediction: {
    thereIs: false,
    totalBet: '',
    coefficent: ''
  },
  type: 'Экспресс',
  date: '14.01',
  time: '22:30',
  coefficent: '2.07',
  price: '1800 руб. '
}, {
  id: 'predictionspageGame4',
  teamOneName: 'Атлетико',
  teamOneIcon: _public_images_games_atletico_png__WEBPACK_IMPORTED_MODULE_0__.default.src,
  teamTwoName: 'Атлетик',
  teamTwoIcon: _public_images_games_atletic_png__WEBPACK_IMPORTED_MODULE_1__.default.src,
  prediction: {
    thereIs: false,
    totalBet: '',
    coefficent: ''
  },
  type: 'Экспресс',
  date: '14.01',
  time: '22:30',
  coefficent: '1.67',
  price: '1500 руб.'
}, {
  id: 'predictionspageGame5',
  teamOneName: 'Атлетико',
  teamOneIcon: _public_images_games_atletico_png__WEBPACK_IMPORTED_MODULE_0__.default.src,
  teamTwoName: 'Атлетик',
  teamTwoIcon: _public_images_games_atletic_png__WEBPACK_IMPORTED_MODULE_1__.default.src,
  prediction: {
    thereIs: false,
    totalBet: 'тб 1,5 / ',
    coefficent: 'коеф 3,5'
  },
  type: 'Экспресс',
  date: '14.01',
  time: '22:30',
  coefficent: '1.67',
  price: '1500 руб.'
}, {
  id: 'predictionspageGame6',
  teamOneName: 'Атлетико',
  teamOneIcon: _public_images_games_atletico_png__WEBPACK_IMPORTED_MODULE_0__.default.src,
  teamTwoName: 'Атлетик',
  teamTwoIcon: _public_images_games_atletic_png__WEBPACK_IMPORTED_MODULE_1__.default.src,
  prediction: {
    thereIs: false,
    totalBet: '',
    coefficent: ''
  },
  type: 'Экспресс',
  date: '14.01',
  time: '22:30',
  coefficent: '1.67',
  price: '1500 руб.'
}, {
  id: 'predictionspageGame7',
  teamOneName: 'Атлетико',
  teamOneIcon: _public_images_games_atletico_png__WEBPACK_IMPORTED_MODULE_0__.default.src,
  teamTwoName: 'Атлетик',
  teamTwoIcon: _public_images_games_atletic_png__WEBPACK_IMPORTED_MODULE_1__.default.src,
  prediction: {
    thereIs: false,
    totalBet: '',
    coefficent: ''
  },
  type: 'Экспресс',
  date: '14.01',
  time: '22:30',
  coefficent: '1.67',
  price: '1500 руб.'
}, {
  id: 'predictionspageGame8',
  teamOneName: 'Атлетико',
  teamOneIcon: _public_images_games_atletico_png__WEBPACK_IMPORTED_MODULE_0__.default.src,
  teamTwoName: 'Атлетик',
  teamTwoIcon: _public_images_games_atletic_png__WEBPACK_IMPORTED_MODULE_1__.default.src,
  prediction: {
    thereIs: false,
    totalBet: 'тб 1,5 / ',
    coefficent: 'коеф 3,5'
  },
  type: 'Экспресс',
  date: '14.01',
  time: '22:30',
  coefficent: '1.67',
  price: '1500 руб.'
}, {
  id: 'predictionspageGame9',
  teamOneName: 'Атлетико',
  teamOneIcon: _public_images_games_atletico_png__WEBPACK_IMPORTED_MODULE_0__.default.src,
  teamTwoName: 'Атлетик',
  teamTwoIcon: _public_images_games_atletic_png__WEBPACK_IMPORTED_MODULE_1__.default.src,
  prediction: {
    thereIs: false,
    totalBet: '',
    coefficent: ''
  },
  type: 'Экспресс',
  date: '14.01',
  time: '22:30',
  coefficent: '1.67',
  price: '1500 руб.'
}, {
  id: 'predictionspageGame10',
  teamOneName: 'Атлетико',
  teamOneIcon: _public_images_games_atletico_png__WEBPACK_IMPORTED_MODULE_0__.default.src,
  teamTwoName: 'Атлетик',
  teamTwoIcon: _public_images_games_atletic_png__WEBPACK_IMPORTED_MODULE_1__.default.src,
  prediction: {
    thereIs: false,
    totalBet: '',
    coefficent: ''
  },
  type: 'Экспресс',
  date: '14.01',
  time: '22:30',
  coefficent: '1.67',
  price: '1500 руб.'
}, {
  id: 'predictionspageGame11',
  teamOneName: 'Атлетико',
  teamOneIcon: _public_images_games_atletico_png__WEBPACK_IMPORTED_MODULE_0__.default.src,
  teamTwoName: 'Атлетик',
  teamTwoIcon: _public_images_games_atletic_png__WEBPACK_IMPORTED_MODULE_1__.default.src,
  prediction: {
    thereIs: false,
    totalBet: '',
    coefficent: ''
  },
  type: 'Экспресс',
  date: '14.01',
  time: '22:30',
  coefficent: '1.67',
  price: '1500 руб.'
}, {
  id: 'predictionspageGame12',
  teamOneName: 'Атлетико',
  teamOneIcon: _public_images_games_atletico_png__WEBPACK_IMPORTED_MODULE_0__.default.src,
  teamTwoName: 'Атлетик',
  teamTwoIcon: _public_images_games_atletic_png__WEBPACK_IMPORTED_MODULE_1__.default.src,
  prediction: {
    thereIs: false,
    totalBet: 'тб 1,5 / ',
    coefficent: 'коеф 3,5'
  },
  type: 'Экспресс',
  date: '14.01',
  time: '22:30',
  coefficent: '1.67',
  price: '1500 руб.'
}, {
  id: 'predictionspageGame13',
  teamOneName: 'Атлетико',
  teamOneIcon: _public_images_games_atletico_png__WEBPACK_IMPORTED_MODULE_0__.default.src,
  teamTwoName: 'Атлетик',
  teamTwoIcon: _public_images_games_atletic_png__WEBPACK_IMPORTED_MODULE_1__.default.src,
  prediction: {
    thereIs: false,
    totalBet: 'тб 1,5 / ',
    coefficent: 'коеф 3,5'
  },
  type: 'Экспресс',
  date: '14.01',
  time: '22:30',
  coefficent: '1.67',
  price: '1500 руб.'
}, {
  id: 'predictionspageGame14',
  teamOneName: 'Атлетико',
  teamOneIcon: _public_images_games_atletico_png__WEBPACK_IMPORTED_MODULE_0__.default.src,
  teamTwoName: 'Атлетик',
  teamTwoIcon: _public_images_games_atletic_png__WEBPACK_IMPORTED_MODULE_1__.default.src,
  prediction: {
    thereIs: false,
    totalBet: '',
    coefficent: ''
  },
  type: 'Экспресс',
  date: '14.01',
  time: '22:30',
  coefficent: '1.67',
  price: '1500 руб.'
}, {
  id: 'predictionspageGame15',
  teamOneName: 'Атлетико',
  teamOneIcon: _public_images_games_atletico_png__WEBPACK_IMPORTED_MODULE_0__.default.src,
  teamTwoName: 'Атлетик',
  teamTwoIcon: _public_images_games_atletic_png__WEBPACK_IMPORTED_MODULE_1__.default.src,
  prediction: {
    thereIs: false,
    totalBet: 'тб 1,5 / ',
    coefficent: 'коеф 3,5'
  },
  type: 'Экспресс',
  date: '14.01',
  time: '22:30',
  coefficent: '1.67',
  price: '1500 руб.'
}, {
  id: 'predictionspageGame16',
  teamOneName: 'Атлетико',
  teamOneIcon: _public_images_games_atletico_png__WEBPACK_IMPORTED_MODULE_0__.default.src,
  teamTwoName: 'Атлетик',
  teamTwoIcon: _public_images_games_atletic_png__WEBPACK_IMPORTED_MODULE_1__.default.src,
  prediction: {
    thereIs: false,
    totalBet: 'тб 1,5 / ',
    coefficent: 'коеф 3,5'
  },
  type: 'Экспресс',
  date: '14.01',
  time: '22:30',
  coefficent: '1.67',
  price: '1500 руб.'
}, {
  id: 'predictionspageGame17',
  teamOneName: 'Атлетико',
  teamOneIcon: _public_images_games_atletico_png__WEBPACK_IMPORTED_MODULE_0__.default.src,
  teamTwoName: 'Атлетик',
  teamTwoIcon: _public_images_games_atletic_png__WEBPACK_IMPORTED_MODULE_1__.default.src,
  prediction: {
    thereIs: false,
    totalBet: 'тб 1,5 / ',
    coefficent: 'коеф 3,5'
  },
  type: 'Экспресс',
  date: '14.01',
  time: '22:30',
  coefficent: '1.67',
  price: '1500 руб.'
}, {
  id: 'predictionspageGame18',
  teamOneName: 'Атлетико',
  teamOneIcon: _public_images_games_atletico_png__WEBPACK_IMPORTED_MODULE_0__.default.src,
  teamTwoName: 'Атлетик',
  teamTwoIcon: _public_images_games_atletic_png__WEBPACK_IMPORTED_MODULE_1__.default.src,
  prediction: {
    thereIs: false,
    totalBet: '',
    coefficent: ''
  },
  type: 'Экспресс',
  date: '14.01',
  time: '22:30',
  coefficent: '1.67',
  price: '1500 руб.'
}, {
  id: 'predictionspageGame19',
  teamOneName: 'Атлетико',
  teamOneIcon: _public_images_games_atletico_png__WEBPACK_IMPORTED_MODULE_0__.default.src,
  teamTwoName: 'Атлетик',
  teamTwoIcon: _public_images_games_atletic_png__WEBPACK_IMPORTED_MODULE_1__.default.src,
  prediction: {
    thereIs: false,
    totalBet: '',
    coefficent: ''
  },
  type: 'Экспресс',
  date: '14.01',
  time: '22:30',
  coefficent: '1.67',
  price: '1500 руб.'
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

/***/ "./src/games_data/predictions/slide.js":
/*!*********************************************!*\
  !*** ./src/games_data/predictions/slide.js ***!
  \*********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "slide_data": function() { return /* binding */ slide_data; }
/* harmony export */ });
/* harmony import */ var C_Users_Admin_Desktop_projects_foot_bet_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _public_images_games_atletico_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../public/images/games/atletico.png */ "./public/images/games/atletico.png");
/* harmony import */ var _public_images_main_prediction_barca_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../public/images/main/prediction/barca.png */ "./public/images/main/prediction/barca.png");
/* harmony import */ var _public_images_main_prediction_psj_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../public/images/main/prediction/psj.png */ "./public/images/main/prediction/psj.png");
/* harmony import */ var _public_images_games_atletic_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../public/images/games/atletic.png */ "./public/images/games/atletic.png");
/* harmony import */ var _public_images_main_matches_marcel_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../public/images/main/matches/marcel.png */ "./public/images/main/matches/marcel.png");
/* harmony import */ var _public_images_main_matches_rennais_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../../public/images/main/matches/rennais.png */ "./public/images/main/matches/rennais.png");
/* module decorator */ module = __webpack_require__.hmd(module);


var _ref, _ref2, _ref3;

// icons






var slide_data = [{
  id: 'predictionslideGame1',
  teamOneName: 'Атлетико',
  teamOneIcon: _public_images_main_prediction_psj_png__WEBPACK_IMPORTED_MODULE_3__.default.src,
  teamTwoName: 'Атлетик',
  teamTwoIcon: _public_images_main_prediction_barca_png__WEBPACK_IMPORTED_MODULE_2__.default.src,
  prediction: {
    thereIs: false,
    totalBet: 'тб 1,5 / ',
    coefficent: 'коеф 3,5'
  },
  type: "Ординар",
  date: '14.01',
  time: '22:30',
  coefficent: '1.67',
  predictionButtonName: '.slide.pred_button',
  buyButtonName: '.slide.buy_button',
  predictionText: 'Фулхем тб 1,5 / коэф 3,5',
  ordinarText: 'Ординар / 1500руб.',
  price: '1500 руб.'
}, {
  id: 'predictionslideGame2',
  teamOneName: 'Барселона',
  teamOneIcon: _public_images_games_atletic_png__WEBPACK_IMPORTED_MODULE_4__.default.src,
  teamTwoName: 'ПСЖ',
  teamTwoIcon: _public_images_main_prediction_psj_png__WEBPACK_IMPORTED_MODULE_3__.default.src,
  prediction: {
    thereIs: false,
    totalBet: '',
    coefficent: ''
  },
  type: "Экспресс",
  date: '14.01',
  time: '22:30',
  coefficent: '2.07',
  predictionButtonName: '.slide.pred_button',
  buyButtonName: '.slide.buy_button',
  predictionText: 'Фулхем тб 1,5 / коэф 3,5',
  ordinarText: 'Ординар / 1500руб.',
  price: '2500 руб.'
}, {
  id: 'predictionslideGame3',
  teamOneName: 'Марсель',
  teamOneIcon: _public_images_main_prediction_barca_png__WEBPACK_IMPORTED_MODULE_2__.default.src,
  teamTwoName: 'Атлетик',
  teamTwoIcon: _public_images_main_matches_rennais_png__WEBPACK_IMPORTED_MODULE_6__.default.src,
  prediction: {
    thereIs: false,
    totalBet: '',
    coefficent: ''
  },
  type: 'Экспресс',
  date: '14.01',
  time: '22:30',
  coefficent: '2.07',
  predictionButtonName: '.slide.pred_button',
  buyButtonName: '.slide.buy_button',
  predictionText: 'Фулхем тб 1,5 / коэф 3,5',
  ordinarText: 'Ординар / 1500руб.',
  price: '1800 руб. '
}, (_ref = {
  id: 'predictionslideGame4',
  teamOneName: 'Атлетико',
  teamOneIcon: _public_images_games_atletico_png__WEBPACK_IMPORTED_MODULE_1__.default.src,
  teamTwoName: 'Атлетик',
  teamTwoIcon: _public_images_games_atletic_png__WEBPACK_IMPORTED_MODULE_4__.default.src,
  prediction: {
    thereIs: false,
    totalBet: '',
    coefficent: ''
  },
  type: 'Экспресс',
  date: '14.01',
  time: '22:30',
  coefficent: '1.67',
  predictionButtonName: '.slide.pred_button',
  buyButtonName: '.slide.buy_button',
  predictionText: 'Фулхем тб 1,5 / коэф 3,5',
  ordinarText: 'Ординар / 1500руб.',
  price: '1500 руб.'
}, (0,C_Users_Admin_Desktop_projects_foot_bet_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(_ref, "buyButtonName", '.slide.buy_button'), (0,C_Users_Admin_Desktop_projects_foot_bet_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(_ref, "buyButtonName", '.slide.buy_button'), (0,C_Users_Admin_Desktop_projects_foot_bet_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(_ref, "predictionText", 'Фулхем тб 1,5 / коэф 3,5'), (0,C_Users_Admin_Desktop_projects_foot_bet_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(_ref, "ordinarText", 'Ординар / 1500руб.'), _ref), (_ref2 = {
  id: 'predictionslideGame5',
  teamOneName: 'Атлетико',
  teamOneIcon: _public_images_games_atletico_png__WEBPACK_IMPORTED_MODULE_1__.default.src,
  teamTwoName: 'Атлетик',
  teamTwoIcon: _public_images_games_atletic_png__WEBPACK_IMPORTED_MODULE_4__.default.src,
  prediction: {
    thereIs: false,
    totalBet: 'тб 1,5 / ',
    coefficent: 'коеф 3,5'
  },
  type: 'Экспресс',
  date: '14.01',
  time: '22:30',
  coefficent: '1.67',
  predictionButtonName: '.slide.pred_button',
  buyButtonName: '.slide.buy_button',
  predictionText: 'Фулхем тб 1,5 / коэф 3,5',
  ordinarText: 'Ординар / 1500руб.',
  price: '1500 руб.'
}, (0,C_Users_Admin_Desktop_projects_foot_bet_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(_ref2, "predictionText", 'Фулхем тб 1,5 / коэф 3,5'), (0,C_Users_Admin_Desktop_projects_foot_bet_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(_ref2, "buyButtonName", '.slide.buy_button'), (0,C_Users_Admin_Desktop_projects_foot_bet_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(_ref2, "predictionText", 'Фулхем тб 1,5 / коэф 3,5'), (0,C_Users_Admin_Desktop_projects_foot_bet_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(_ref2, "ordinarText", 'Ординар / 1500руб.'), _ref2), (_ref3 = {
  id: 'predictionslideGame6',
  teamOneName: 'Атлетико',
  teamOneIcon: _public_images_games_atletico_png__WEBPACK_IMPORTED_MODULE_1__.default.src,
  teamTwoName: 'Атлетик',
  teamTwoIcon: _public_images_games_atletic_png__WEBPACK_IMPORTED_MODULE_4__.default.src,
  prediction: {
    thereIs: false,
    totalBet: '',
    coefficent: ''
  },
  type: 'Экспресс',
  date: '14.01',
  time: '22:30',
  coefficent: '1.67',
  predictionButtonName: '.slide.pred_button',
  buyButtonName: '.slide.buy_button',
  predictionText: 'Фулхем тб 1,5 / коэф 3,5',
  ordinarText: 'Ординар / 1500руб.',
  price: '1500 руб.'
}, (0,C_Users_Admin_Desktop_projects_foot_bet_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(_ref3, "ordinarText", 'Ординар / 1500руб.'), (0,C_Users_Admin_Desktop_projects_foot_bet_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(_ref3, "buyButtonName", '.slide.buy_button'), (0,C_Users_Admin_Desktop_projects_foot_bet_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(_ref3, "predictionText", 'Фулхем тб 1,5 / коэф 3,5'), (0,C_Users_Admin_Desktop_projects_foot_bet_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(_ref3, "ordinarText", 'Ординар / 1500руб.'), _ref3)];

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9QYWdlcy9QcmVkaWN0aW9uUGF5bWVudHMvVGFicy9QcmVkaWN0aW9uVGFiL1ByZWRpY3Rpb25UYWIuanN4Iiwid2VicGFjazovL19OX0UvLi9zcmMvZ2FtZXNfZGF0YS9leHByZXNzL2V4cHJlc3MuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9nYW1lc19kYXRhL2ludmluc2libGVfc3RyYXRlZ3kvaW52aW5zaWJsZV9zdHJhdGVneS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2dhbWVzX2RhdGEvb3JkaW5hci9vcmRpbmFyLmpzIiwid2VicGFjazovL19OX0UvLi9zcmMvZ2FtZXNfZGF0YS9wcmVkaWN0aW9ucy9wcmVkaWN0aW9ucy5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2dhbWVzX2RhdGEvcHJlZGljdGlvbnMvc2xpZGUuanMiXSwibmFtZXMiOlsiUHJlZGljdGlvblRhYiIsImNsaWNrIiwidXNlU3RhdGUiLCJzbGlkZV9kYXRhIiwic2V0U2xpZGVEYXRhIiwicm91dGVyIiwidXNlUm91dGVyIiwidXNlRWZmZWN0IiwicmVxdWVzdCIsIkdFVF9QUkVESUNUSU9OUyIsImF1dGgiLCJ0aGVuIiwicnNwIiwiZGF0YSIsIm1hcCIsIml0ZW0iLCJpZCIsInRlYW1PbmVOYW1lIiwidGVhbU9uZUljb24iLCJ0ZWFtVHdvTmFtZSIsInRlYW1Ud29JY29uIiwicHJlZGljdGlvbiIsInRoZXJlSXMiLCJ0b3RhbEJldCIsImNvZWZmaWNlbnQiLCJ0eXBlIiwiZGF0ZSIsInRpbWUiLCJmYWN0b3IiLCJwcmVkaWN0aW9uQnV0dG9uTmFtZSIsImJ1eUJ1dHRvbk5hbWUiLCJwcmVkaWN0aW9uVGV4dCIsIm9yZGluYXJUZXh0IiwicHJpY2UiLCJlcnJvciIsInN0eWxlcyIsImVsIiwiaSIsInB1c2giLCJwYXRobmFtZSIsInF1ZXJ5IiwiZ2FtZSIsIk1hdGgiLCJyYW5kb20iLCJleHByZXNzIiwiYXRsZXRpY29JY29uIiwiYXRsZXRpY0ljb24iLCJiYXJjYUljb24iLCJwc2pJY29uIiwibWFyY2VsSWNvbiIsInJlbm5haXNJY29uIiwiaW52aW5zaWJsZV9zdHJhdGVneSIsIm9yZGluYXIiLCJwcmVkaWN0aW9ucyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0NBRUE7O0NBRUE7O0FBQ0E7Q0FFQTs7QUFDQTtBQUNBO0FBQ0E7QUFHTyxTQUFTQSxhQUFULE9BQWtDO0FBQUE7O0FBQUE7O0FBQUEsTUFBVEMsS0FBUyxRQUFUQSxLQUFTOztBQUFBLGtCQUVBQywrQ0FBUSxDQUFDLEVBQUQsQ0FGUjtBQUFBLE1BRTdCQyxVQUY2QjtBQUFBLE1BRWpCQyxZQUZpQjs7QUFHckMsTUFBTUMsTUFBTSxHQUFHQyxrRUFBUyxFQUF4QjtBQUVBQyxrREFBUyxDQUFFLFlBQUs7QUFDWkMsd0RBQU8sQ0FBRUMsc0VBQUYsRUFBbUIsRUFBbkIsRUFBdUI7QUFBRUMsVUFBSSxFQUFFO0FBQVIsS0FBdkIsQ0FBUCxDQUNLQyxJQURMLENBQ1csVUFBQUMsR0FBRyxFQUFJO0FBQ1Y7QUFDQVIsa0JBQVksQ0FBRVEsR0FBRyxDQUFDQyxJQUFKLENBQVNBLElBQVQsQ0FBY0MsR0FBZCxDQUFtQixVQUFBQyxJQUFJLEVBQUk7QUFDckMsZUFBTztBQUNIQyxZQUFFLEVBQUVELElBQUksQ0FBQ0MsRUFETjtBQUVIQyxxQkFBVyxFQUFFLEVBRlY7QUFHSEMscUJBQVcsRUFBRUgsSUFBSSxrQkFIZDtBQUlISSxxQkFBVyxFQUFFLEVBSlY7QUFLSEMscUJBQVcsRUFBRUwsSUFBSSxrQkFMZDtBQU1ITSxvQkFBVSxFQUFFO0FBQ1JDLG1CQUFPLEVBQUUsS0FERDtBQUVSQyxvQkFBUSxFQUFFLFdBRkY7QUFHUkMsc0JBQVUsRUFBRTtBQUhKLFdBTlQ7QUFXSEMsY0FBSSxFQUFFVixJQUFJLENBQUNVLElBWFI7QUFZSEMsY0FBSSxFQUFFWCxJQUFJLENBQUNXLElBWlI7QUFhSEMsY0FBSSxFQUFF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bEJILFlBQVUsRUFBRSxNQWhJTTtBQWlJbEJLLHNCQUFvQixFQUFFLG9CQWpJSjtBQWtJbEJDLGVBQWEsRUFBRSxtQkFsSUc7QUFtSWxCQyxnQkFBYyxFQUFFLDBCQW5JRTtBQW9JbEJDLGFBQVcsRUFBRSxvQkFwSUs7QUFxSWxCQyxPQUFLLEVBQUU7QUFySVcsZ0tBc0lMLG9CQXRJSyxrS0F1SUgsbUJBdklHLG1LQXdJRiwwQkF4SUUsZ0tBeUlMLG9CQXpJSyxVQUFuQiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9wcmVkaWN0aW9uLjBhYzE4ZDEzZjM4Zjc1M2NlYzU0LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBob29rc1xyXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L2Rpc3QvY2xpZW50L3JvdXRlcic7XHJcbi8vIGRhdGFzXHJcbmltcG9ydCB7IHByZWRpY3Rpb25zIH0gZnJvbSAnL3NyYy9nYW1lc19kYXRhL3ByZWRpY3Rpb25zL3ByZWRpY3Rpb25zJ1xyXG4vLyBjb21wb25lbnRzXHJcbmltcG9ydCB7IFJvdyB9IGZyb20gJy4uL1Jvdy9Sb3cnXHJcbmltcG9ydCB7IFRhYkhlYWRlciB9IGZyb20gJy4uL1RhYkhlYWRlci9UYWJIZWFkZXInO1xyXG4vLyBzdHlsZXMgXHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9QcmVkaWN0aW9uVGFiLm1vZHVsZS5zY3NzJ1xyXG5pbXBvcnQgeyBHRVRfUFJFRElDVElPTlMgfSBmcm9tICcvbGliL3JlcXVlc3QtZGVzdGluYXRpb25zJ1xyXG5pbXBvcnQgeyByZXF1ZXN0IH0gZnJvbSAnL2xpYi9lci5saWInXHJcblxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIFByZWRpY3Rpb25UYWIoeyBjbGljayB9KSB7XHJcblxyXG4gICAgY29uc3QgWyBzbGlkZV9kYXRhLCBzZXRTbGlkZURhdGEgXSA9IHVzZVN0YXRlKFtdKVxyXG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcclxuXHJcbiAgICB1c2VFZmZlY3QoICgpPT4ge1xyXG4gICAgICAgIHJlcXVlc3QoIEdFVF9QUkVESUNUSU9OUywge30sIHsgYXV0aDogdHJ1ZSB9IClcclxuICAgICAgICAgICAgLnRoZW4oIHJzcCA9PiB7XHJcbiAgICAgICAgICAgICAgICAvLyB0b2FzdChgU3VjY2Vzc2Z1bGx5IHJlZ2lzdGVyZWRgKVxyXG4gICAgICAgICAgICAgICAgc2V0U2xpZGVEYXRhKCByc3AuZGF0YS5kYXRhLm1hcCggaXRlbSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWQ6IGl0ZW0uaWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRlYW1PbmVOYW1lOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGVhbU9uZUljb246IGl0ZW1bYHRlYW0xX2ltZ19wYXRoYF0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRlYW1Ud29OYW1lOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGVhbVR3b0ljb246IGl0ZW1bYHRlYW0yX2ltZ19wYXRoYF0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHByZWRpY3Rpb246IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoZXJlSXM6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdG90YWxCZXQ6ICfRgtCxIDEsNSAvICcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2VmZmljZW50OiAn0LrQvtC10YQgMyw1J1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBpdGVtLnR5cGUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGU6IGl0ZW0uZGF0ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGltZTogaXRlbS50aW1lLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2VmZmljZW50OiBpdGVtLmZhY3RvcixcclxuICAgICAgICAgICAgICAgICAgICAgICAgcHJlZGljdGlvbkJ1dHRvbk5hbWU6ICcuc2xpZGUucHJlZF9idXR0b24nLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBidXlCdXR0b25OYW1lOiAnLnNsaWRlLmJ1eV9idXR0b24nLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwcmVkaWN0aW9uVGV4dDogJ9Ck0YPQu9GF0LXQvCDRgtCxIDEsNSAvINC60L7RjdGEIDMsNScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9yZGluYXJUZXh0OiBgJHtpdGVtLnR5cGV9IC8gJHtpdGVtLnByaWNlfdGA0YPQsS5gLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwcmljZTogaXRlbS5wcmljZSArICcg0YDRg9CxLidcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KSlcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLmNhdGNoKCBlcnJvciA9PiB7fSlcclxuICAgIH0sIFtdICk7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn0+XHJcbiAgICAgICAgICAgIDxUYWJIZWFkZXIgLz5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5ib2FyZH0+XHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2xpZGVfZGF0YS5tYXAoKGVsLCBpKSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxSb3dcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9yZGVyPXtpICsgMX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRlYW1PbmVOYW1lPXtlbC50ZWFtT25lTmFtZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRlYW1PbmVJY29uPXtlbC50ZWFtT25lSWNvbn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRlYW1Ud29OYW1lPXtlbC50ZWFtVHdvTmFtZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRlYW1Ud29JY29uPXtlbC50ZWFtVHdvSWNvbn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGU9e2VsLmRhdGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aW1lPXtlbC50aW1lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJlZGljdGlvbj17ZWwucHJlZGljdGlvbn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9e2VsLnR5cGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2VmZmljZW50PXtlbC5jb2VmZmljZW50fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJpY2U9e2VsLnByaWNlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtNYXRoLnJhbmRvbSgpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2tCdXk9eygpID0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcm91dGVyLnB1c2goe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXRobmFtZTogJy9wcmVkaWN0aW9uJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcXVlcnk6IHsgZ2FtZTogZWwuaWQgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcGVuUGF5bWVudHM9e2NsaWNrfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICkpXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcbiIsIi8vIGljb25zXHJcbmltcG9ydCBhdGxldGljb0ljb24gZnJvbSAnL3B1YmxpYy9pbWFnZXMvZ2FtZXMvYXRsZXRpY28ucG5nJ1xyXG5pbXBvcnQgYXRsZXRpY0ljb24gZnJvbSAnL3B1YmxpYy9pbWFnZXMvZ2FtZXMvYXRsZXRpYy5wbmcnXHJcbmltcG9ydCBiYXJjYUljb24gZnJvbSAnL3B1YmxpYy9pbWFnZXMvbWFpbi9tYXRjaGVzL2JhcmNhLnBuZydcclxuaW1wb3J0IG1hcmNlbEljb24gZnJvbSAnL3B1YmxpYy9pbWFnZXMvbWFpbi9tYXRjaGVzL21hcmNlbC5wbmcnXHJcbmltcG9ydCBwc2pJY29uIGZyb20gJy9wdWJsaWMvaW1hZ2VzL21haW4vbWF0Y2hlcy9wc2oucG5nJ1xyXG5pbXBvcnQgcmVubmFpc0ljb24gZnJvbSAnL3B1YmxpYy9pbWFnZXMvbWFpbi9tYXRjaGVzL3Jlbm5haXMucG5nJ1xyXG5cclxuZXhwb3J0IGNvbnN0IGV4cHJlc3MgPSBbXHJcbiAgICB7XHJcbiAgICAgICAgaWQ6XCJleHByZXNzR2FtZTFcIixcclxuICAgICAgICB0ZWFtT25lTmFtZTogJ9CQ0YLQu9C10YLQuNC60L4nLFxyXG4gICAgICAgIHRlYW1PbmVJY29uOiBhdGxldGljb0ljb24uc3JjLFxyXG4gICAgICAgIHRlYW1Ud29OYW1lOiAn0JDRgtC70LXRgtC40LonLFxyXG4gICAgICAgIHRlYW1Ud29JY29uOiBhdGxldGljSWNvbi5zcmMsXHJcbiAgICAgICAgcHJlZGljdGlvbjoge1xyXG4gICAgICAgICAgICB0aGVyZUlzOiBmYWxzZSxcclxuICAgICAgICAgICAgdG90YWxCZXQ6ICfRgtCxIDEsNSAvICcsXHJcbiAgICAgICAgICAgIGNvZWZmaWNlbnQ6ICfQutC+0LXRhCAzLDUnXHJcbiAgICAgICAgfSxcclxuICAgICAgICBkYXRlOiAnMTQuMDEnLFxyXG4gICAgICAgIHRpbWU6ICcyMjozMCcsXHJcbiAgICAgICAgY29lZmZpY2VudDogJzEuNjcnLFxyXG4gICAgICAgIHByaWNlOiAnMTc1MCDRgNGD0LEuJ1xyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBpZDpcImV4cHJlc3NHYW1lMlwiLFxyXG4gICAgICAgIHRlYW1PbmVOYW1lOiAn0JHQsNGA0YHQtdC70L7QvdCwJyxcclxuICAgICAgICB0ZWFtT25lSWNvbjogYmFyY2FJY29uLnNyYyxcclxuICAgICAgICB0ZWFtVHdvTmFtZTogJ9Cf0KHQlicsXHJcbiAgICAgICAgdGVhbVR3b0ljb246IHBzakljb24uc3JjLFxyXG4gICAgICAgIHByZWRpY3Rpb246IHtcclxuICAgICAgICAgICAgdGhlcmVJczogZmFsc2UsXHJcbiAgICAgICAgICAgIHRvdGFsQmV0OiAnJyxcclxuICAgICAgICAgICAgY29lZmZpY2VudDogJydcclxuICAgICAgICB9LFxyXG4gICAgICAgIGRhdGU6ICcxNC4wMScsXHJcbiAgICAgICAgdGltZTogJzIzOjAwJyxcclxuICAgICAgICBjb2VmZmljZW50OiAnMi4wNycsXHJcbiAgICAgICAgcHJpY2U6ICcyNTAwINGA0YPQsS4nXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIGlkOlwiZXhwcmVzc0dhbWUzXCIsXHJcbiAgICAgICAgdGVhbU9uZU5hbWU6ICfQnNCw0YDRgdC10LvRjCcsXHJcbiAgICAgICAgdGVhbU9uZUljb246IG1hcmNlbEljb24uc3JjLFxyXG4gICAgICAgIHRlYW1Ud29OYW1lOiAn0JDRgtC70LXRgtC40LonLFxyXG4gICAgICAgIHRlYW1Ud29JY29uOiByZW5uYWlzSWNvbi5zcmMsXHJcbiAgICAgICAgcHJlZGljdGlvbjoge1xyXG4gICAgICAgICAgICB0aGVyZUlzOiBmYWxzZSxcclxuICAgICAgICAgICAgdG90YWxCZXQ6ICcnLFxyXG4gICAgICAgICAgICBjb2VmZmljZW50OiAnJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZGF0ZTogJzE0LjAxJyxcclxuICAgICAgICB0aW1lOiAnMjM6MDAnLFxyXG4gICAgICAgIGNvZWZmaWNlbnQ6ICcyLjA3JyxcclxuICAgICAgICBwcmljZTogJzE4MDAg0YDRg9CxLiAnXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIGlkOlwiZXhwcmVzc0dhbWU0XCIsXHJcbiAgICAgICAgdGVhbU9uZU5hbWU6ICfQkNGC0LvQtdGC0LjQutC+JyxcclxuICAgICAgICB0ZWFtT25lSWNvbjogYXRsZXRpY29JY29uLnNyYyxcclxuICAgICAgICB0ZWFtVHdvTmFtZTogJ9CQ0YLQu9C10YLQuNC6JyxcclxuICAgICAgICB0ZWFtVHdvSWNvbjogYXRsZXRpY0ljb24uc3JjLFxyXG4gICAgICAgIHByZWRpY3Rpb246IHtcclxuICAgICAgICAgICAgdGhlcmVJczogZmFsc2UsXHJcbiAgICAgICAgICAgIHRvdGFsQmV0OiAnJyxcclxuICAgICAgICAgICAgY29lZmZpY2VudDogJydcclxuICAgICAgICB9LFxyXG4gICAgICAgIGRhdGU6ICcxNC4wMScsXHJcbiAgICAgICAgdGltZTogJzIyOjMwJyxcclxuICAgICAgICBjb2VmZmljZW50OiAnMS42NycsXHJcbiAgICAgICAgcHJpY2U6ICcxNTAwINGA0YPQsS4nXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIGlkOlwiZXhwcmVzc0dhbWU1XCIsXHJcbiAgICAgICAgdGVhbU9uZU5hbWU6ICfQkNGC0LvQtdGC0LjQutC+JyxcclxuICAgICAgICB0ZWFtT25lSWNvbjogYXRsZXRpY29JY29uLnNyYyxcclxuICAgICAgICB0ZWFtVHdvTmFtZTogJ9CQ0YLQu9C10YLQuNC6JyxcclxuICAgICAgICB0ZWFtVHdvSWNvbjogYXRsZXRpY0ljb24uc3JjLFxyXG4gICAgICAgIHByZWRpY3Rpb246IHtcclxuICAgICAgICAgICAgdGhlcmVJczogZmFsc2UsXHJcbiAgICAgICAgICAgIHRvdGFsQmV0OiAn0YLQsSAxLDUgLyAnLFxyXG4gICAgICAgICAgICBjb2VmZmljZW50OiAn0LrQvtC10YQgMyw1J1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZGF0ZTogJzE0LjAxJyxcclxuICAgICAgICB0aW1lOiAnMjI6MzAnLFxyXG4gICAgICAgIGNvZWZmaWNlbnQ6ICcxLjY3JyxcclxuICAgICAgICBwcmljZTogJzE1MDAg0YDRg9CxLidcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgaWQ6XCJleHByZXNzR2FtZTZcIixcclxuICAgICAgICB0ZWFtT25lTmFtZTogJ9CQ0YLQu9C10YLQuNC60L4nLFxyXG4gICAgICAgIHRlYW1PbmVJY29uOiBhdGxldGljb0ljb24uc3JjLFxyXG4gICAgICAgIHRlYW1Ud29OYW1lOiAn0JDRgtC70LXRgtC40LonLFxyXG4gICAgICAgIHRlYW1Ud29JY29uOiBhdGxldGljSWNvbi5zcmMsXHJcbiAgICAgICAgcHJlZGljdGlvbjoge1xyXG4gICAgICAgICAgICB0aGVyZUlzOiBmYWxzZSxcclxuICAgICAgICAgICAgdG90YWxCZXQ6ICcnLFxyXG4gICAgICAgICAgICBjb2VmZmljZW50OiAnJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZGF0ZTogJzE0LjAxJyxcclxuICAgICAgICB0aW1lOiAnMjI6MzAnLFxyXG4gICAgICAgIGNvZWZmaWNlbnQ6ICcxLjY3JyxcclxuICAgICAgICBwcmljZTogJzE1MDAg0YDRg9CxLidcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgaWQ6XCJleHByZXNzR2FtZTdcIixcclxuICAgICAgICB0ZWFtT25lTmFtZTogJ9CQ0YLQu9C10YLQuNC60L4nLFxyXG4gICAgICAgIHRlYW1PbmVJY29uOiBhdGxldGljb0ljb24uc3JjLFxyXG4gICAgICAgIHRlYW1Ud29OYW1lOiAn0JDRgtC70LXRgtC40LonLFxyXG4gICAgICAgIHRlYW1Ud29JY29uOiBhdGxldGljSWNvbi5zcmMsXHJcbiAgICAgICAgcHJlZGljdGlvbjoge1xyXG4gICAgICAgICAgICB0aGVyZUlzOiBmYWxzZSxcclxuICAgICAgICAgICAgdG90YWxCZXQ6ICcnLFxyXG4gICAgICAgICAgICBjb2VmZmljZW50OiAnJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZGF0ZTogJzE0LjAxJyxcclxuICAgICAgICB0aW1lOiAnMjI6MzAnLFxyXG4gICAgICAgIGNvZWZmaWNlbnQ6ICcxLjY3JyxcclxuICAgICAgICBwcmljZTogJzE1MDAg0YDRg9CxLidcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgaWQ6XCJleHByZXNzR2FtZThcIixcclxuICAgICAgICB0ZWFtT25lTmFtZTogJ9CQ0YLQu9C10YLQuNC60L4nLFxyXG4gICAgICAgIHRlYW1PbmVJY29uOiBhdGxldGljb0ljb24uc3JjLFxyXG4gICAgICAgIHRlYW1Ud29OYW1lOiAn0JDRgtC70LXRgtC40LonLFxyXG4gICAgICAgIHRlYW1Ud29JY29uOiBhdGxldGljSWNvbi5zcmMsXHJcbiAgICAgICAgcHJlZGljdGlvbjoge1xyXG4gICAgICAgICAgICB0aGVyZUlzOiBmYWxzZSxcclxuICAgICAgICAgICAgdG90YWxCZXQ6ICfRgtCxIDEsNSAvICcsXHJcbiAgICAgICAgICAgIGNvZWZmaWNlbnQ6ICfQutC+0LXRhCAzLDUnXHJcbiAgICAgICAgfSxcclxuICAgICAgICBkYXRlOiAnMTQuMDEnLFxyXG4gICAgICAgIHRpbWU6ICcyMjozMCcsXHJcbiAgICAgICAgY29lZmZpY2VudDogJzEuNjcnLFxyXG4gICAgICAgIHByaWNlOiAnMTUwMCDRgNGD0LEuJ1xyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBpZDpcImV4cHJlc3NHYW1lOVwiLFxyXG4gICAgICAgIHRlYW1PbmVOYW1lOiAn0JDRgtC70LXRgtC40LrQvicsXHJcbiAgICAgICAgdGVhbU9uZUljb246IGF0bGV0aWNvSWNvbi5zcmMsXHJcbiAgICAgICAgdGVhbVR3b05hbWU6ICfQkNGC0LvQtdGC0LjQuicsXHJcbiAgICAgICAgdGVhbVR3b0ljb246IGF0bGV0aWNJY29uLnNyYyxcclxuICAgICAgICBwcmVkaWN0aW9uOiB7XHJcbiAgICAgICAgICAgIHRoZXJlSXM6IGZhbHNlLFxyXG4gICAgICAgICAgICB0b3RhbEJldDogJycsXHJcbiAgICAgICAgICAgIGNvZWZmaWNlbnQ6ICcnXHJcbiAgICAgICAgfSxcclxuICAgICAgICBkYXRlOiAnMTQuMDEnLFxyXG4gICAgICAgIHRpbWU6ICcyMjozMCcsXHJcbiAgICAgICAgY29lZmZpY2VudDogJzEuNjcnLFxyXG4gICAgICAgIHByaWNlOiAnMTUwMCDRgNGD0LEuJ1xyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBpZDpcImV4cHJlc3NHYW1lMTBcIixcclxuICAgICAgICB0ZWFtT25lTmFtZTogJ9CQ0YLQu9C10YLQuNC60L4nLFxyXG4gICAgICAgIHRlYW1PbmVJY29uOiBhdGxldGljb0ljb24uc3JjLFxyXG4gICAgICAgIHRlYW1Ud29OYW1lOiAn0JDRgtC70LXRgtC40LonLFxyXG4gICAgICAgIHRlYW1Ud29JY29uOiBhdGxldGljSWNvbi5zcmMsXHJcbiAgICAgICAgcHJlZGljdGlvbjoge1xyXG4gICAgICAgICAgICB0aGVyZUlzOiBmYWxzZSxcclxuICAgICAgICAgICAgdG90YWxCZXQ6ICcnLFxyXG4gICAgICAgICAgICBjb2VmZmljZW50OiAnJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZGF0ZTogJzE0LjAxJyxcclxuICAgICAgICB0aW1lOiAnMjI6MzAnLFxyXG4gICAgICAgIGNvZWZmaWNlbnQ6ICcxLjY3JyxcclxuICAgICAgICBwcmljZTogJzE1MDAg0YDRg9CxLidcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgaWQ6XCJleHByZXNzR2FtZTExXCIsXHJcbiAgICAgICAgdGVhbU9uZU5hbWU6ICfQkNGC0LvQtdGC0LjQutC+JyxcclxuICAgICAgICB0ZWFtT25lSWNvbjogYXRsZXRpY29JY29uLnNyYyxcclxuICAgICAgICB0ZWFtVHdvTmFtZTogJ9CQ0YLQu9C10YLQuNC6JyxcclxuICAgICAgICB0ZWFtVHdvSWNvbjogYXRsZXRpY0ljb24uc3JjLFxyXG4gICAgICAgIHByZWRpY3Rpb246IHtcclxuICAgICAgICAgICAgdGhlcmVJczogZmFsc2UsXHJcbiAgICAgICAgICAgIHRvdGFsQmV0OiAnJyxcclxuICAgICAgICAgICAgY29lZmZpY2VudDogJydcclxuICAgICAgICB9LFxyXG4gICAgICAgIGRhdGU6ICcxNC4wMScsXHJcbiAgICAgICAgdGltZTogJzIyOjMwJyxcclxuICAgICAgICBjb2VmZmljZW50OiAnMS42NycsXHJcbiAgICAgICAgcHJpY2U6ICcxNTAwINGA0YPQsS4nXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIGlkOlwiZXhwcmVzc0dhbWUxMlwiLFxyXG4gICAgICAgIHRlYW1PbmVOYW1lOiAn0JDRgtC70LXRgtC40LrQvicsXHJcbiAgICAgICAgdGVhbU9uZUljb246IGF0bGV0aWNvSWNvbi5zcmMsXHJcbiAgICAgICAgdGVhbVR3b05hbWU6ICfQkNGC0LvQtdGC0LjQuicsXHJcbiAgICAgICAgdGVhbVR3b0ljb246IGF0bGV0aWNJY29uLnNyYyxcclxuICAgICAgICBwcmVkaWN0aW9uOiB7XHJcbiAgICAgICAgICAgIHRoZXJlSXM6IGZhbHNlLFxyXG4gICAgICAgICAgICB0b3RhbEJldDogJ9GC0LEgMSw1IC8gJyxcclxuICAgICAgICAgICAgY29lZmZpY2VudDogJ9C60L7QtdGEIDMsNSdcclxuICAgICAgICB9LFxyXG4gICAgICAgIGRhdGU6ICcxNC4wMScsXHJcbiAgICAgICAgdGltZTogJzIyOjMwJyxcclxuICAgICAgICBjb2VmZmljZW50OiAnMS42NycsXHJcbiAgICAgICAgcHJpY2U6ICcxNTAwINGA0YPQsS4nXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIGlkOlwiZXhwcmVzc0dhbWUxM1wiLFxyXG4gICAgICAgIHRlYW1PbmVOYW1lOiAn0JDRgtC70LXRgtC40LrQvicsXHJcbiAgICAgICAgdGVhbU9uZUljb246IGF0bGV0aWNvSWNvbi5zcmMsXHJcbiAgICAgICAgdGVhbVR3b05hbWU6ICfQkNGC0LvQtdGC0LjQuicsXHJcbiAgICAgICAgdGVhbVR3b0ljb246IGF0bGV0aWNJY29uLnNyYyxcclxuICAgICAgICBwcmVkaWN0aW9uOiB7XHJcbiAgICAgICAgICAgIHRoZXJlSXM6IGZhbHNlLFxyXG4gICAgICAgICAgICB0b3RhbEJldDogJ9GC0LEgMSw1IC8gJyxcclxuICAgICAgICAgICAgY29lZmZpY2VudDogJ9C60L7QtdGEIDMsNSdcclxuICAgICAgICB9LFxyXG4gICAgICAgIGRhdGU6ICcxNC4wMScsXHJcbiAgICAgICAgdGltZTogJzIyOjMwJyxcclxuICAgICAgICBjb2VmZmljZW50OiAnMS42NycsXHJcbiAgICAgICAgcHJpY2U6ICcxNTAwINGA0YPQsS4nXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIGlkOlwiZXhwcmVzc0dhbWUxNFwiLFxyXG4gICAgICAgIHRlYW1PbmVOYW1lOiAn0JDRgtC70LXRgtC40LrQvicsXHJcbiAgICAgICAgdGVhbU9uZUljb246IGF0bGV0aWNvSWNvbi5zcmMsXHJcbiAgICAgICAgdGVhbVR3b05hbWU6ICfQkNGC0LvQtdGC0LjQuicsXHJcbiAgICAgICAgdGVhbVR3b0ljb246IGF0bGV0aWNJY29uLnNyYyxcclxuICAgICAgICBwcmVkaWN0aW9uOiB7XHJcbiAgICAgICAgICAgIHRoZXJlSXM6IGZhbHNlLFxyXG4gICAgICAgICAgICB0b3RhbEJldDogJycsXHJcbiAgICAgICAgICAgIGNvZWZmaWNlbnQ6ICcnXHJcbiAgICAgICAgfSxcclxuICAgICAgICBkYXRlOiAnMTQuMDEnLFxyXG4gICAgICAgIHRpbWU6ICcyMjozMCcsXHJcbiAgICAgICAgY29lZmZpY2VudDogJzEuNjcnLFxyXG4gICAgICAgIHByaWNlOiAnMTUwMCDRgNGD0LEuJ1xyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBpZDpcImV4cHJlc3NHYW1lMTVcIixcclxuICAgICAgICB0ZWFtT25lTmFtZTogJ9CQ0YLQu9C10YLQuNC60L4nLFxyXG4gICAgICAgIHRlYW1PbmVJY29uOiBhdGxldGljb0ljb24uc3JjLFxyXG4gICAgICAgIHRlYW1Ud29OYW1lOiAn0JDRgtC70LXRgtC40LonLFxyXG4gICAgICAgIHRlYW1Ud29JY29uOiBhdGxldGljSWNvbi5zcmMsXHJcbiAgICAgICAgcHJlZGljdGlvbjoge1xyXG4gICAgICAgICAgICB0aGVyZUlzOiBmYWxzZSxcclxuICAgICAgICAgICAgdG90YWxCZXQ6ICfRgtCxIDEsNSAvICcsXHJcbiAgICAgICAgICAgIGNvZWZmaWNlbnQ6ICfQutC+0LXRhCAzLDUnXHJcbiAgICAgICAgfSxcclxuICAgICAgICBkYXRlOiAnMTQuMDEnLFxyXG4gICAgICAgIHRpbWU6ICcyMjozMCcsXHJcbiAgICAgICAgY29lZmZpY2VudDogJzEuNjcnLFxyXG4gICAgICAgIHByaWNlOiAnMTUwMCDRgNGD0LEuJ1xyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBpZDpcImV4cHJlc3NHYW1lMTZcIixcclxuICAgICAgICB0ZWFtT25lTmFtZTogJ9CQ0YLQu9C10YLQuNC60L4nLFxyXG4gICAgICAgIHRlYW1PbmVJY29uOiBhdGxldGljb0ljb24uc3JjLFxyXG4gICAgICAgIHRlYW1Ud29OYW1lOiAn0JDRgtC70LXRgtC40LonLFxyXG4gICAgICAgIHRlYW1Ud29JY29uOiBhdGxldGljSWNvbi5zcmMsXHJcbiAgICAgICAgcHJlZGljdGlvbjoge1xyXG4gICAgICAgICAgICB0aGVyZUlzOiBmYWxzZSxcclxuICAgICAgICAgICAgdG90YWxCZXQ6ICfRgtCxIDEsNSAvICcsXHJcbiAgICAgICAgICAgIGNvZWZmaWNlbnQ6ICfQutC+0LXRhCAzLDUnXHJcbiAgICAgICAgfSxcclxuICAgICAgICBkYXRlOiAnMTQuMDEnLFxyXG4gICAgICAgIHRpbWU6ICcyMjozMCcsXHJcbiAgICAgICAgY29lZmZpY2VudDogJzEuNjcnLFxyXG4gICAgICAgIHByaWNlOiAnMTUwMCDRgNGD0LEuJ1xyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBpZDpcImV4cHJlc3NHYW1lMTdcIixcclxuICAgICAgICB0ZWFtT25lTmFtZTogJ9CQ0YLQu9C10YLQuNC60L4nLFxyXG4gICAgICAgIHRlYW1PbmVJY29uOiBhdGxldGljb0ljb24uc3JjLFxyXG4gICAgICAgIHRlYW1Ud29OYW1lOiAn0JDRgtC70LXRgtC40LonLFxyXG4gICAgICAgIHRlYW1Ud29JY29uOiBhdGxldGljSWNvbi5zcmMsXHJcbiAgICAgICAgcHJlZGljdGlvbjoge1xyXG4gICAgICAgICAgICB0aGVyZUlzOiBmYWxzZSxcclxuICAgICAgICAgICAgdG90YWxCZXQ6ICfRgtCxIDEsNSAvICcsXHJcbiAgICAgICAgICAgIGNvZWZmaWNlbnQ6ICfQutC+0LXRhCAzLDUnXHJcbiAgICAgICAgfSxcclxuICAgICAgICBkYXRlOiAnMTQuMDEnLFxyXG4gICAgICAgIHRpbWU6ICcyMjozMCcsXHJcbiAgICAgICAgY29lZmZpY2VudDogJzEuNjcnLFxyXG4gICAgICAgIHByaWNlOiAnMTUwMCDRgNGD0LEuJ1xyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBpZDpcImV4cHJlc3NHYW1lMThcIixcclxuICAgICAgICB0ZWFtT25lTmFtZTogJ9CQ0YLQu9C10YLQuNC60L4nLFxyXG4gICAgICAgIHRlYW1PbmVJY29uOiBhdGxldGljb0ljb24uc3JjLFxyXG4gICAgICAgIHRlYW1Ud29OYW1lOiAn0JDRgtC70LXRgtC40LonLFxyXG4gICAgICAgIHRlYW1Ud29JY29uOiBhdGxldGljSWNvbi5zcmMsXHJcbiAgICAgICAgcHJlZGljdGlvbjoge1xyXG4gICAgICAgICAgICB0aGVyZUlzOiBmYWxzZSxcclxuICAgICAgICAgICAgdG90YWxCZXQ6ICcnLFxyXG4gICAgICAgICAgICBjb2VmZmljZW50OiAnJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZGF0ZTogJzE0LjAxJyxcclxuICAgICAgICB0aW1lOiAnMjI6MzAnLFxyXG4gICAgICAgIGNvZWZmaWNlbnQ6ICcxLjY3JyxcclxuICAgICAgICBwcmljZTogJzE1MDAg0YDRg9CxLidcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgaWQ6XCJleHByZXNzR2FtZTE5XCIsXHJcbiAgICAgICAgdGVhbU9uZU5hbWU6ICfQkNGC0LvQtdGC0LjQutC+JyxcclxuICAgICAgICB0ZWFtT25lSWNvbjogYXRsZXRpY29JY29uLnNyYyxcclxuICAgICAgICB0ZWFtVHdvTmFtZTogJ9CQ0YLQu9C10YLQuNC6JyxcclxuICAgICAgICB0ZWFtVHdvSWNvbjogYXRsZXRpY0ljb24uc3JjLFxyXG4gICAgICAgIHByZWRpY3Rpb246IHtcclxuICAgICAgICAgICAgdGhlcmVJczogZmFsc2UsXHJcbiAgICAgICAgICAgIHRvdGFsQmV0OiAnJyxcclxuICAgICAgICAgICAgY29lZmZpY2VudDogJydcclxuICAgICAgICB9LFxyXG4gICAgICAgIGRhdGU6ICcxNC4wMScsXHJcbiAgICAgICAgdGltZTogJzIyOjMwJyxcclxuICAgICAgICBjb2VmZmljZW50OiAnMS42NycsXHJcbiAgICAgICAgcHJpY2U6ICcxNTAwINGA0YPQsS4nXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIGlkOlwiZXhwcmVzc0dhbWUyMFwiLFxyXG4gICAgICAgIHRlYW1PbmVOYW1lOiAn0JDRgtC70LXRgtC40LrQvicsXHJcbiAgICAgICAgdGVhbU9uZUljb246IGF0bGV0aWNvSWNvbi5zcmMsXHJcbiAgICAgICAgdGVhbVR3b05hbWU6ICfQkNGC0LvQtdGC0LjQuicsXHJcbiAgICAgICAgdGVhbVR3b0ljb246IGF0bGV0aWNJY29uLnNyYyxcclxuICAgICAgICBwcmVkaWN0aW9uOiB7XHJcbiAgICAgICAgICAgIHRoZXJlSXM6IGZhbHNlLFxyXG4gICAgICAgICAgICB0b3RhbEJldDogJycsXHJcbiAgICAgICAgICAgIGNvZWZmaWNlbnQ6ICcnXHJcbiAgICAgICAgfSxcclxuICAgICAgICBkYXRlOiAnMTQuMDEnLFxyXG4gICAgICAgIHRpbWU6ICcyMjozMCcsXHJcbiAgICAgICAgY29lZmZpY2VudDogJzEuNjcnLFxyXG4gICAgICAgIHByaWNlOiAnMTUwMCDRgNGD0LEuJ1xyXG4gICAgfSxcclxuXVxyXG4iLCIvLyBpY29uc1xyXG5pbXBvcnQgYXRsZXRpY29JY29uIGZyb20gJy9wdWJsaWMvaW1hZ2VzL2dhbWVzL2F0bGV0aWNvLnBuZydcclxuaW1wb3J0IGF0bGV0aWNJY29uIGZyb20gJy9wdWJsaWMvaW1hZ2VzL2dhbWVzL2F0bGV0aWMucG5nJ1xyXG5pbXBvcnQgYmFyY2FJY29uIGZyb20gJy9wdWJsaWMvaW1hZ2VzL21haW4vbWF0Y2hlcy9iYXJjYS5wbmcnXHJcbmltcG9ydCBtYXJjZWxJY29uIGZyb20gJy9wdWJsaWMvaW1hZ2VzL21haW4vbWF0Y2hlcy9tYXJjZWwucG5nJ1xyXG5pbXBvcnQgcHNqSWNvbiBmcm9tICcvcHVibGljL2ltYWdlcy9tYWluL21hdGNoZXMvcHNqLnBuZydcclxuaW1wb3J0IHJlbm5haXNJY29uIGZyb20gJy9wdWJsaWMvaW1hZ2VzL21haW4vbWF0Y2hlcy9yZW5uYWlzLnBuZydcclxuXHJcbmV4cG9ydCBjb25zdCBpbnZpbnNpYmxlX3N0cmF0ZWd5ID0gW1xyXG4gICAge1xyXG4gICAgICAgIGlkOiBcImludmluc2libGVTdGd5R2FtZTFcIixcclxuICAgICAgICB0ZWFtT25lTmFtZTogJ9CQ0YLQu9C10YLQuNC60L4nLFxyXG4gICAgICAgIHRlYW1PbmVJY29uOiBhdGxldGljb0ljb24uc3JjLFxyXG4gICAgICAgIHRlYW1Ud29OYW1lOiAn0JDRgtC70LXRgtC40LonLFxyXG4gICAgICAgIHRlYW1Ud29JY29uOiBhdGxldGljSWNvbi5zcmMsXHJcbiAgICAgICAgcHJlZGljdGlvbjoge1xyXG4gICAgICAgICAgICB0aGVyZUlzOiBmYWxzZSxcclxuICAgICAgICAgICAgdG90YWxCZXQ6ICfRgtCxIDEsNSAvICcsXHJcbiAgICAgICAgICAgIGNvZWZmaWNlbnQ6ICfQutC+0LXRhCAzLDUnXHJcbiAgICAgICAgfSxcclxuICAgICAgICBkYXRlOiAnMTQuMDEnLFxyXG4gICAgICAgIHRpbWU6ICcyMjozMCcsXHJcbiAgICAgICAgY29lZmZpY2VudDogJzEuNjcnLFxyXG4gICAgICAgIHByaWNlOiAnMTUwMCDRgNGD0LEuJ1xyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBpZDogXCJpbnZpbnNpYmxlU3RneUdhbWUyXCIsXHJcbiAgICAgICAgdGVhbU9uZU5hbWU6ICfQkdCw0YDRgdC10LvQvtC90LAnLFxyXG4gICAgICAgIHRlYW1PbmVJY29uOiBiYXJjYUljb24uc3JjLFxyXG4gICAgICAgIHRlYW1Ud29OYW1lOiAn0J/QodCWJyxcclxuICAgICAgICB0ZWFtVHdvSWNvbjogcHNqSWNvbi5zcmMsXHJcbiAgICAgICAgcHJlZGljdGlvbjoge1xyXG4gICAgICAgICAgICB0aGVyZUlzOiBmYWxzZSxcclxuICAgICAgICAgICAgdG90YWxCZXQ6ICcnLFxyXG4gICAgICAgICAgICBjb2VmZmljZW50OiAnJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZGF0ZTogJzE0LjAxJyxcclxuICAgICAgICB0aW1lOiAnMjM6MDAnLFxyXG4gICAgICAgIGNvZWZmaWNlbnQ6ICcyLjA3JyxcclxuICAgICAgICBwcmljZTogJzI1MDAg0YDRg9CxLidcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgaWQ6IFwiaW52aW5zaWJsZVN0Z3lHYW1lM1wiLFxyXG4gICAgICAgIHRlYW1PbmVOYW1lOiAn0JzQsNGA0YHQtdC70YwnLFxyXG4gICAgICAgIHRlYW1PbmVJY29uOiBtYXJjZWxJY29uLnNyYyxcclxuICAgICAgICB0ZWFtVHdvTmFtZTogJ9CQ0YLQu9C10YLQuNC6JyxcclxuICAgICAgICB0ZWFtVHdvSWNvbjogcmVubmFpc0ljb24uc3JjLFxyXG4gICAgICAgIHByZWRpY3Rpb246IHtcclxuICAgICAgICAgICAgdGhlcmVJczogZmFsc2UsXHJcbiAgICAgICAgICAgIHRvdGFsQmV0OiAnJyxcclxuICAgICAgICAgICAgY29lZmZpY2VudDogJydcclxuICAgICAgICB9LFxyXG4gICAgICAgIGRhdGU6ICcxNC4wMScsXHJcbiAgICAgICAgdGltZTogJzIzOjAwJyxcclxuICAgICAgICBjb2VmZmljZW50OiAnMi4wNycsXHJcbiAgICAgICAgcHJpY2U6ICcxODAwINGA0YPQsS4gJ1xyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBpZDogXCJpbnZpbnNpYmxlU3RneUdhbWU0XCIsXHJcbiAgICAgICAgdGVhbU9uZU5hbWU6ICfQkNGC0LvQtdGC0LjQutC+JyxcclxuICAgICAgICB0ZWFtT25lSWNvbjogYXRsZXRpY29JY29uLnNyYyxcclxuICAgICAgICB0ZWFtVHdvTmFtZTogJ9CQ0YLQu9C10YLQuNC6JyxcclxuICAgICAgICB0ZWFtVHdvSWNvbjogYXRsZXRpY0ljb24uc3JjLFxyXG4gICAgICAgIHByZWRpY3Rpb246IHtcclxuICAgICAgICAgICAgdGhlcmVJczogZmFsc2UsXHJcbiAgICAgICAgICAgIHRvdGFsQmV0OiAnJyxcclxuICAgICAgICAgICAgY29lZmZpY2VudDogJydcclxuICAgICAgICB9LFxyXG4gICAgICAgIGRhdGU6ICcxNC4wMScsXHJcbiAgICAgICAgdGltZTogJzIyOjMwJyxcclxuICAgICAgICBjb2VmZmljZW50OiAnMS42NycsXHJcbiAgICAgICAgcHJpY2U6ICcxNTAwINGA0YPQsS4nXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIGlkOiBcImludmluc2libGVTdGd5R2FtZTVcIixcclxuICAgICAgICB0ZWFtT25lTmFtZTogJ9CQ0YLQu9C10YLQuNC60L4nLFxyXG4gICAgICAgIHRlYW1PbmVJY29uOiBhdGxldGljb0ljb24uc3JjLFxyXG4gICAgICAgIHRlYW1Ud29OYW1lOiAn0JDRgtC70LXRgtC40LonLFxyXG4gICAgICAgIHRlYW1Ud29JY29uOiBhdGxldGljSWNvbi5zcmMsXHJcbiAgICAgICAgcHJlZGljdGlvbjoge1xyXG4gICAgICAgICAgICB0aGVyZUlzOiBmYWxzZSxcclxuICAgICAgICAgICAgdG90YWxCZXQ6ICfRgtCxIDEsNSAvICcsXHJcbiAgICAgICAgICAgIGNvZWZmaWNlbnQ6ICfQutC+0LXRhCAzLDUnXHJcbiAgICAgICAgfSxcclxuICAgICAgICBkYXRlOiAnMTQuMDEnLFxyXG4gICAgICAgIHRpbWU6ICcyMjozMCcsXHJcbiAgICAgICAgY29lZmZpY2VudDogJzEuNjcnLFxyXG4gICAgICAgIHByaWNlOiAnMTUwMCDRgNGD0LEuJ1xyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBpZDogXCJpbnZpbnNpYmxlU3RneUdhbWU2XCIsXHJcbiAgICAgICAgdGVhbU9uZU5hbWU6ICfQkNGC0LvQtdGC0LjQutC+JyxcclxuICAgICAgICB0ZWFtT25lSWNvbjogYXRsZXRpY29JY29uLnNyYyxcclxuICAgICAgICB0ZWFtVHdvTmFtZTogJ9CQ0YLQu9C10YLQuNC6JyxcclxuICAgICAgICB0ZWFtVHdvSWNvbjogYXRsZXRpY0ljb24uc3JjLFxyXG4gICAgICAgIHByZWRpY3Rpb246IHtcclxuICAgICAgICAgICAgdGhlcmVJczogZmFsc2UsXHJcbiAgICAgICAgICAgIHRvdGFsQmV0OiAnJyxcclxuICAgICAgICAgICAgY29lZmZpY2VudDogJydcclxuICAgICAgICB9LFxyXG4gICAgICAgIGRhdGU6ICcxNC4wMScsXHJcbiAgICAgICAgdGltZTogJzIyOjMwJyxcclxuICAgICAgICBjb2VmZmljZW50OiAnMS42NycsXHJcbiAgICAgICAgcHJpY2U6ICcxNTAwINGA0YPQsS4nXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIGlkOiBcImludmluc2libGVTdGd5R2FtZTdcIixcclxuICAgICAgICB0ZWFtT25lTmFtZTogJ9CQ0YLQu9C10YLQuNC60L4nLFxyXG4gICAgICAgIHRlYW1PbmVJY29uOiBhdGxldGljb0ljb24uc3JjLFxyXG4gICAgICAgIHRlYW1Ud29OYW1lOiAn0JDRgtC70LXRgtC40LonLFxyXG4gICAgICAgIHRlYW1Ud29JY29uOiBhdGxldGljSWNvbi5zcmMsXHJcbiAgICAgICAgcHJlZGljdGlvbjoge1xyXG4gICAgICAgICAgICB0aGVyZUlzOiBmYWxzZSxcclxuICAgICAgICAgICAgdG90YWxCZXQ6ICcnLFxyXG4gICAgICAgICAgICBjb2VmZmljZW50OiAnJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZGF0ZTogJzE0LjAxJyxcclxuICAgICAgICB0aW1lOiAnMjI6MzAnLFxyXG4gICAgICAgIGNvZWZmaWNlbnQ6ICcxLjY3JyxcclxuICAgICAgICBwcmljZTogJzE1MDAg0YDRg9CxLidcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgaWQ6IFwiaW52aW5zaWJsZVN0Z3lHYW1lOFwiLFxyXG4gICAgICAgIHRlYW1PbmVOYW1lOiAn0JDRgtC70LXRgtC40LrQvicsXHJcbiAgICAgICAgdGVhbU9uZUljb246IGF0bGV0aWNvSWNvbi5zcmMsXHJcbiAgICAgICAgdGVhbVR3b05hbWU6ICfQkNGC0LvQtdGC0LjQuicsXHJcbiAgICAgICAgdGVhbVR3b0ljb246IGF0bGV0aWNJY29uLnNyYyxcclxuICAgICAgICBwcmVkaWN0aW9uOiB7XHJcbiAgICAgICAgICAgIHRoZXJlSXM6IGZhbHNlLFxyXG4gICAgICAgICAgICB0b3RhbEJldDogJ9GC0LEgMSw1IC8gJyxcclxuICAgICAgICAgICAgY29lZmZpY2VudDogJ9C60L7QtdGEIDMsNSdcclxuICAgICAgICB9LFxyXG4gICAgICAgIGRhdGU6ICcxNC4wMScsXHJcbiAgICAgICAgdGltZTogJzIyOjMwJyxcclxuICAgICAgICBjb2VmZmljZW50OiAnMS42NycsXHJcbiAgICAgICAgcHJpY2U6ICcxNTAwINGA0YPQsS4nXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIGlkOiBcImludmluc2libGVTdGd5R2FtZTlcIixcclxuICAgICAgICB0ZWFtT25lTmFtZTogJ9CQ0YLQu9C10YLQuNC60L4nLFxyXG4gICAgICAgIHRlYW1PbmVJY29uOiBhdGxldGljb0ljb24uc3JjLFxyXG4gICAgICAgIHRlYW1Ud29OYW1lOiAn0JDRgtC70LXRgtC40LonLFxyXG4gICAgICAgIHRlYW1Ud29JY29uOiBhdGxldGljSWNvbi5zcmMsXHJcbiAgICAgICAgcHJlZGljdGlvbjoge1xyXG4gICAgICAgICAgICB0aGVyZUlzOiBmYWxzZSxcclxuICAgICAgICAgICAgdG90YWxCZXQ6ICcnLFxyXG4gICAgICAgICAgICBjb2VmZmljZW50OiAnJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZGF0ZTogJzE0LjAxJyxcclxuICAgICAgICB0aW1lOiAnMjI6MzAnLFxyXG4gICAgICAgIGNvZWZmaWNlbnQ6ICcxLjY3JyxcclxuICAgICAgICBwcmljZTogJzE1MDAg0YDRg9CxLidcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgaWQ6IFwiaW52aW5zaWJsZVN0Z3lHYW1lMTBcIixcclxuICAgICAgICB0ZWFtT25lTmFtZTogJ9CQ0YLQu9C10YLQuNC60L4nLFxyXG4gICAgICAgIHRlYW1PbmVJY29uOiBhdGxldGljb0ljb24uc3JjLFxyXG4gICAgICAgIHRlYW1Ud29OYW1lOiAn0JDRgtC70LXRgtC40LonLFxyXG4gICAgICAgIHRlYW1Ud29JY29uOiBhdGxldGljSWNvbi5zcmMsXHJcbiAgICAgICAgcHJlZGljdGlvbjoge1xyXG4gICAgICAgICAgICB0aGVyZUlzOiBmYWxzZSxcclxuICAgICAgICAgICAgdG90YWxCZXQ6ICcnLFxyXG4gICAgICAgICAgICBjb2VmZmljZW50OiAnJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZGF0ZTogJzE0LjAxJyxcclxuICAgICAgICB0aW1lOiAnMjI6MzAnLFxyXG4gICAgICAgIGNvZWZmaWNlbnQ6ICcxLjY3JyxcclxuICAgICAgICBwcmljZTogJzE1MDAg0YDRg9CxLidcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgaWQ6IFwiaW52aW5zaWJsZVN0Z3lHYW1lMTFcIixcclxuICAgICAgICB0ZWFtT25lTmFtZTogJ9CQ0YLQu9C10YLQuNC60L4nLFxyXG4gICAgICAgIHRlYW1PbmVJY29uOiBhdGxldGljb0ljb24uc3JjLFxyXG4gICAgICAgIHRlYW1Ud29OYW1lOiAn0JDRgtC70LXRgtC40LonLFxyXG4gICAgICAgIHRlYW1Ud29JY29uOiBhdGxldGljSWNvbi5zcmMsXHJcbiAgICAgICAgcHJlZGljdGlvbjoge1xyXG4gICAgICAgICAgICB0aGVyZUlzOiBmYWxzZSxcclxuICAgICAgICAgICAgdG90YWxCZXQ6ICcnLFxyXG4gICAgICAgICAgICBjb2VmZmljZW50OiAnJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZGF0ZTogJzE0LjAxJyxcclxuICAgICAgICB0aW1lOiAnMjI6MzAnLFxyXG4gICAgICAgIGNvZWZmaWNlbnQ6ICcxLjY3JyxcclxuICAgICAgICBwcmljZTogJzE1MDAg0YDRg9CxLidcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgaWQ6IFwiaW52aW5zaWJsZVN0Z3lHYW1lMTJcIixcclxuICAgICAgICB0ZWFtT25lTmFtZTogJ9CQ0YLQu9C10YLQuNC60L4nLFxyXG4gICAgICAgIHRlYW1PbmVJY29uOiBhdGxldGljb0ljb24uc3JjLFxyXG4gICAgICAgIHRlYW1Ud29OYW1lOiAn0JDRgtC70LXRgtC40LonLFxyXG4gICAgICAgIHRlYW1Ud29JY29uOiBhdGxldGljSWNvbi5zcmMsXHJcbiAgICAgICAgcHJlZGljdGlvbjoge1xyXG4gICAgICAgICAgICB0aGVyZUlzOiBmYWxzZSxcclxuICAgICAgICAgICAgdG90YWxCZXQ6ICfRgtCxIDEsNSAvICcsXHJcbiAgICAgICAgICAgIGNvZWZmaWNlbnQ6ICfQutC+0LXRhCAzLDUnXHJcbiAgICAgICAgfSxcclxuICAgICAgICBkYXRlOiAnMTQuMDEnLFxyXG4gICAgICAgIHRpbWU6ICcyMjozMCcsXHJcbiAgICAgICAgY29lZmZpY2VudDogJzEuNjcnLFxyXG4gICAgICAgIHByaWNlOiAnMTUwMCDRgNGD0LEuJ1xyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBpZDogXCJpbnZpbnNpYmxlU3RneUdhbWUxM1wiLFxyXG4gICAgICAgIHRlYW1PbmVOYW1lOiAn0JDRgtC70LXRgtC40LrQvicsXHJcbiAgICAgICAgdGVhbU9uZUljb246IGF0bGV0aWNvSWNvbi5zcmMsXHJcbiAgICAgICAgdGVhbVR3b05hbWU6ICfQkNGC0LvQtdGC0LjQuicsXHJcbiAgICAgICAgdGVhbVR3b0ljb246IGF0bGV0aWNJY29uLnNyYyxcclxuICAgICAgICBwcmVkaWN0aW9uOiB7XHJcbiAgICAgICAgICAgIHRoZXJlSXM6IGZhbHNlLFxyXG4gICAgICAgICAgICB0b3RhbEJldDogJ9GC0LEgMSw1IC8gJyxcclxuICAgICAgICAgICAgY29lZmZpY2VudDogJ9C60L7QtdGEIDMsNSdcclxuICAgICAgICB9LFxyXG4gICAgICAgIGRhdGU6ICcxNC4wMScsXHJcbiAgICAgICAgdGltZTogJzIyOjMwJyxcclxuICAgICAgICBjb2VmZmljZW50OiAnMS42NycsXHJcbiAgICAgICAgcHJpY2U6ICcxNTAwINGA0YPQsS4nXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIGlkOiBcImludmluc2libGVTdGd5R2FtZTE0XCIsXHJcbiAgICAgICAgdGVhbU9uZU5hbWU6ICfQkNGC0LvQtdGC0LjQutC+JyxcclxuICAgICAgICB0ZWFtT25lSWNvbjogYXRsZXRpY29JY29uLnNyYyxcclxuICAgICAgICB0ZWFtVHdvTmFtZTogJ9CQ0YLQu9C10YLQuNC6JyxcclxuICAgICAgICB0ZWFtVHdvSWNvbjogYXRsZXRpY0ljb24uc3JjLFxyXG4gICAgICAgIHByZWRpY3Rpb246IHtcclxuICAgICAgICAgICAgdGhlcmVJczogZmFsc2UsXHJcbiAgICAgICAgICAgIHRvdGFsQmV0OiAnJyxcclxuICAgICAgICAgICAgY29lZmZpY2VudDogJydcclxuICAgICAgICB9LFxyXG4gICAgICAgIGRhdGU6ICcxNC4wMScsXHJcbiAgICAgICAgdGltZTogJzIyOjMwJyxcclxuICAgICAgICBjb2VmZmljZW50OiAnMS42NycsXHJcbiAgICAgICAgcHJpY2U6ICcxNTAwINGA0YPQsS4nXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIGlkOiBcImludmluc2libGVTdGd5R2FtZTE1XCIsXHJcbiAgICAgICAgdGVhbU9uZU5hbWU6ICfQkNGC0LvQtdGC0LjQutC+JyxcclxuICAgICAgICB0ZWFtT25lSWNvbjogYXRsZXRpY29JY29uLnNyYyxcclxuICAgICAgICB0ZWFtVHdvTmFtZTogJ9CQ0YLQu9C10YLQuNC6JyxcclxuICAgICAgICB0ZWFtVHdvSWNvbjogYXRsZXRpY0ljb24uc3JjLFxyXG4gICAgICAgIHByZWRpY3Rpb246IHtcclxuICAgICAgICAgICAgdGhlcmVJczogZmFsc2UsXHJcbiAgICAgICAgICAgIHRvdGFsQmV0OiAn0YLQsSAxLDUgLyAnLFxyXG4gICAgICAgICAgICBjb2VmZmljZW50OiAn0LrQvtC10YQgMyw1J1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZGF0ZTogJzE0LjAxJyxcclxuICAgICAgICB0aW1lOiAnMjI6MzAnLFxyXG4gICAgICAgIGNvZWZmaWNlbnQ6ICcxLjY3JyxcclxuICAgICAgICBwcmljZTogJzE1MDAg0YDRg9CxLidcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgaWQ6IFwiaW52aW5zaWJsZVN0Z3lHYW1lMTZcIixcclxuICAgICAgICB0ZWFtT25lTmFtZTogJ9CQ0YLQu9C10YLQuNC60L4nLFxyXG4gICAgICAgIHRlYW1PbmVJY29uOiBhdGxldGljb0ljb24uc3JjLFxyXG4gICAgICAgIHRlYW1Ud29OYW1lOiAn0JDRgtC70LXRgtC40LonLFxyXG4gICAgICAgIHRlYW1Ud29JY29uOiBhdGxldGljSWNvbi5zcmMsXHJcbiAgICAgICAgcHJlZGljdGlvbjoge1xyXG4gICAgICAgICAgICB0aGVyZUlzOiBmYWxzZSxcclxuICAgICAgICAgICAgdG90YWxCZXQ6ICfRgtCxIDEsNSAvICcsXHJcbiAgICAgICAgICAgIGNvZWZmaWNlbnQ6ICfQutC+0LXRhCAzLDUnXHJcbiAgICAgICAgfSxcclxuICAgICAgICBkYXRlOiAnMTQuMDEnLFxyXG4gICAgICAgIHRpbWU6ICcyMjozMCcsXHJcbiAgICAgICAgY29lZmZpY2VudDogJzEuNjcnLFxyXG4gICAgICAgIHByaWNlOiAnMTUwMCDRgNGD0LEuJ1xyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBpZDogXCJpbnZpbnNpYmxlU3RneUdhbWUxN1wiLFxyXG4gICAgICAgIHRlYW1PbmVOYW1lOiAn0JDRgtC70LXRgtC40LrQvicsXHJcbiAgICAgICAgdGVhbU9uZUljb246IGF0bGV0aWNvSWNvbi5zcmMsXHJcbiAgICAgICAgdGVhbVR3b05hbWU6ICfQkNGC0LvQtdGC0LjQuicsXHJcbiAgICAgICAgdGVhbVR3b0ljb246IGF0bGV0aWNJY29uLnNyYyxcclxuICAgICAgICBwcmVkaWN0aW9uOiB7XHJcbiAgICAgICAgICAgIHRoZXJlSXM6IGZhbHNlLFxyXG4gICAgICAgICAgICB0b3RhbEJldDogJ9GC0LEgMSw1IC8gJyxcclxuICAgICAgICAgICAgY29lZmZpY2VudDogJ9C60L7QtdGEIDMsNSdcclxuICAgICAgICB9LFxyXG4gICAgICAgIGRhdGU6ICcxNC4wMScsXHJcbiAgICAgICAgdGltZTogJzIyOjMwJyxcclxuICAgICAgICBjb2VmZmljZW50OiAnMS42NycsXHJcbiAgICAgICAgcHJpY2U6ICcxNTAwINGA0YPQsS4nXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIGlkOiBcImludmluc2libGVTdGd5R2FtZTE4XCIsXHJcbiAgICAgICAgdGVhbU9uZU5hbWU6ICfQkNGC0LvQtdGC0LjQutC+JyxcclxuICAgICAgICB0ZWFtT25lSWNvbjogYXRsZXRpY29JY29uLnNyYyxcclxuICAgICAgICB0ZWFtVHdvTmFtZTogJ9CQ0YLQu9C10YLQuNC6JyxcclxuICAgICAgICB0ZWFtVHdvSWNvbjogYXRsZXRpY0ljb24uc3JjLFxyXG4gICAgICAgIHByZWRpY3Rpb246IHtcclxuICAgICAgICAgICAgdGhlcmVJczogZmFsc2UsXHJcbiAgICAgICAgICAgIHRvdGFsQmV0OiAnJyxcclxuICAgICAgICAgICAgY29lZmZpY2VudDogJydcclxuICAgICAgICB9LFxyXG4gICAgICAgIGRhdGU6ICcxNC4wMScsXHJcbiAgICAgICAgdGltZTogJzIyOjMwJyxcclxuICAgICAgICBjb2VmZmljZW50OiAnMS42NycsXHJcbiAgICAgICAgcHJpY2U6ICcxNTAwINGA0YPQsS4nXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIGlkOiBcImludmluc2libGVTdGd5R2FtZTE5XCIsXHJcbiAgICAgICAgdGVhbU9uZU5hbWU6ICfQkNGC0LvQtdGC0LjQutC+JyxcclxuICAgICAgICB0ZWFtT25lSWNvbjogYXRsZXRpY29JY29uLnNyYyxcclxuICAgICAgICB0ZWFtVHdvTmFtZTogJ9CQ0YLQu9C10YLQuNC6JyxcclxuICAgICAgICB0ZWFtVHdvSWNvbjogYXRsZXRpY0ljb24uc3JjLFxyXG4gICAgICAgIHByZWRpY3Rpb246IHtcclxuICAgICAgICAgICAgdGhlcmVJczogZmFsc2UsXHJcbiAgICAgICAgICAgIHRvdGFsQmV0OiAnJyxcclxuICAgICAgICAgICAgY29lZmZpY2VudDogJydcclxuICAgICAgICB9LFxyXG4gICAgICAgIGRhdGU6ICcxNC4wMScsXHJcbiAgICAgICAgdGltZTogJzIyOjMwJyxcclxuICAgICAgICBjb2VmZmljZW50OiAnMS42NycsXHJcbiAgICAgICAgcHJpY2U6ICcxNTAwINGA0YPQsS4nXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIGlkOiBcImludmluc2libGVTdGd5R2FtZTIwXCIsXHJcbiAgICAgICAgdGVhbU9uZU5hbWU6ICfQkNGC0LvQtdGC0LjQutC+JyxcclxuICAgICAgICB0ZWFtT25lSWNvbjogYXRsZXRpY29JY29uLnNyYyxcclxuICAgICAgICB0ZWFtVHdvTmFtZTogJ9CQ0YLQu9C10YLQuNC6JyxcclxuICAgICAgICB0ZWFtVHdvSWNvbjogYXRsZXRpY0ljb24uc3JjLFxyXG4gICAgICAgIHByZWRpY3Rpb246IHtcclxuICAgICAgICAgICAgdGhlcmVJczogZmFsc2UsXHJcbiAgICAgICAgICAgIHRvdGFsQmV0OiAnJyxcclxuICAgICAgICAgICAgY29lZmZpY2VudDogJydcclxuICAgICAgICB9LFxyXG4gICAgICAgIGRhdGU6ICcxNC4wMScsXHJcbiAgICAgICAgdGltZTogJzIyOjMwJyxcclxuICAgICAgICBjb2VmZmljZW50OiAnMS42NycsXHJcbiAgICAgICAgcHJpY2U6ICcxNTAwINGA0YPQsS4nXHJcbiAgICB9LFxyXG5dXHJcbiIsIi8vIGljb25zXHJcbmltcG9ydCBhdGxldGljb0ljb24gZnJvbSAnL3B1YmxpYy9pbWFnZXMvZ2FtZXMvYXRsZXRpY28ucG5nJ1xyXG5pbXBvcnQgYXRsZXRpY0ljb24gZnJvbSAnL3B1YmxpYy9pbWFnZXMvZ2FtZXMvYXRsZXRpYy5wbmcnXHJcbmltcG9ydCBiYXJjYUljb24gZnJvbSAnL3B1YmxpYy9pbWFnZXMvbWFpbi9tYXRjaGVzL2JhcmNhLnBuZydcclxuaW1wb3J0IG1hcmNlbEljb24gZnJvbSAnL3B1YmxpYy9pbWFnZXMvbWFpbi9tYXRjaGVzL21hcmNlbC5wbmcnXHJcbmltcG9ydCBwc2pJY29uIGZyb20gJy9wdWJsaWMvaW1hZ2VzL21haW4vbWF0Y2hlcy9wc2oucG5nJ1xyXG5pbXBvcnQgcmVubmFpc0ljb24gZnJvbSAnL3B1YmxpYy9pbWFnZXMvbWFpbi9tYXRjaGVzL3Jlbm5haXMucG5nJ1xyXG5cclxuZXhwb3J0IGNvbnN0IG9yZGluYXIgPSBbXHJcbiAgICB7XHJcbiAgICAgICAgaWQ6IFwib3JkaW5hckdhbWUxXCIsXHJcbiAgICAgICAgdGVhbU9uZU5hbWU6ICfQkNGC0LvQtdGC0LjQutC+JyxcclxuICAgICAgICB0ZWFtT25lSWNvbjogYXRsZXRpY29JY29uLnNyYyxcclxuICAgICAgICB0ZWFtVHdvTmFtZTogJ9CQ0YLQu9C10YLQuNC6JyxcclxuICAgICAgICB0ZWFtVHdvSWNvbjogYXRsZXRpY0ljb24uc3JjLFxyXG4gICAgICAgIHByZWRpY3Rpb246IHtcclxuICAgICAgICAgICAgdGhlcmVJczogZmFsc2UsXHJcbiAgICAgICAgICAgIHRvdGFsQmV0OiAn0YLQsSAxLDUgLyAnLFxyXG4gICAgICAgICAgICBjb2VmZmljZW50OiAn0LrQvtC10YQgMyw1J1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZGF0ZTogJzE0LjAxJyxcclxuICAgICAgICB0aW1lOiAnMjI6MzAnLFxyXG4gICAgICAgIGNvZWZmaWNlbnQ6ICcxLjY3JyxcclxuICAgICAgICBwcmljZTogJzE1MjIg0YDRg9CxLidcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgaWQ6IFwib3JkaW5hckdhbWUyXCIsXHJcbiAgICAgICAgdGVhbU9uZU5hbWU6ICfQkdCw0YDRgdC10LvQvtC90LAnLFxyXG4gICAgICAgIHRlYW1PbmVJY29uOiBiYXJjYUljb24uc3JjLFxyXG4gICAgICAgIHRlYW1Ud29OYW1lOiAn0J/QodCWJyxcclxuICAgICAgICB0ZWFtVHdvSWNvbjogcHNqSWNvbi5zcmMsXHJcbiAgICAgICAgcHJlZGljdGlvbjoge1xyXG4gICAgICAgICAgICB0aGVyZUlzOiBmYWxzZSxcclxuICAgICAgICAgICAgdG90YWxCZXQ6ICcnLFxyXG4gICAgICAgICAgICBjb2VmZmljZW50OiAnJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZGF0ZTogJzE0LjAxJyxcclxuICAgICAgICB0aW1lOiAnMjM6MDAnLFxyXG4gICAgICAgIGNvZWZmaWNlbnQ6ICcyLjA3JyxcclxuICAgICAgICBwcmljZTogJzI1MDAg0YDRg9CxLidcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgaWQ6IFwib3JkaW5hckdhbWUzXCIsXHJcbiAgICAgICAgdGVhbU9uZU5hbWU6ICfQnNCw0YDRgdC10LvRjCcsXHJcbiAgICAgICAgdGVhbU9uZUljb246IG1hcmNlbEljb24uc3JjLFxyXG4gICAgICAgIHRlYW1Ud29OYW1lOiAn0JDRgtC70LXRgtC40LonLFxyXG4gICAgICAgIHRlYW1Ud29JY29uOiByZW5uYWlzSWNvbi5zcmMsXHJcbiAgICAgICAgcHJlZGljdGlvbjoge1xyXG4gICAgICAgICAgICB0aGVyZUlzOiBmYWxzZSxcclxuICAgICAgICAgICAgdG90YWxCZXQ6ICcnLFxyXG4gICAgICAgICAgICBjb2VmZmljZW50OiAnJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZGF0ZTogJzE0LjAxJyxcclxuICAgICAgICB0aW1lOiAnMjM6MDAnLFxyXG4gICAgICAgIGNvZWZmaWNlbnQ6ICcyLjA3JyxcclxuICAgICAgICBwcmljZTogJzE4MDAg0YDRg9CxLiAnXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIGlkOiBcIm9yZGluYXJHYW1lNFwiLFxyXG4gICAgICAgIHRlYW1PbmVOYW1lOiAn0JDRgtC70LXRgtC40LrQvicsXHJcbiAgICAgICAgdGVhbU9uZUljb246IGF0bGV0aWNvSWNvbi5zcmMsXHJcbiAgICAgICAgdGVhbVR3b05hbWU6ICfQkNGC0LvQtdGC0LjQuicsXHJcbiAgICAgICAgdGVhbVR3b0ljb246IGF0bGV0aWNJY29uLnNyYyxcclxuICAgICAgICBwcmVkaWN0aW9uOiB7XHJcbiAgICAgICAgICAgIHRoZXJlSXM6IGZhbHNlLFxyXG4gICAgICAgICAgICB0b3RhbEJldDogJycsXHJcbiAgICAgICAgICAgIGNvZWZmaWNlbnQ6ICcnXHJcbiAgICAgICAgfSxcclxuICAgICAgICBkYXRlOiAnMTQuMDEnLFxyXG4gICAgICAgIHRpbWU6ICcyMjozMCcsXHJcbiAgICAgICAgY29lZmZpY2VudDogJzEuNjcnLFxyXG4gICAgICAgIHByaWNlOiAnMTUwMCDRgNGD0LEuJ1xyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBpZDogXCJvcmRpbmFyR2FtZTVcIixcclxuICAgICAgICB0ZWFtT25lTmFtZTogJ9CQ0YLQu9C10YLQuNC60L4nLFxyXG4gICAgICAgIHRlYW1PbmVJY29uOiBhdGxldGljb0ljb24uc3JjLFxyXG4gICAgICAgIHRlYW1Ud29OYW1lOiAn0JDRgtC70LXRgtC40LonLFxyXG4gICAgICAgIHRlYW1Ud29JY29uOiBhdGxldGljSWNvbi5zcmMsXHJcbiAgICAgICAgcHJlZGljdGlvbjoge1xyXG4gICAgICAgICAgICB0aGVyZUlzOiBmYWxzZSxcclxuICAgICAgICAgICAgdG90YWxCZXQ6ICfRgtCxIDEsNSAvICcsXHJcbiAgICAgICAgICAgIGNvZWZmaWNlbnQ6ICfQutC+0LXRhCAzLDUnXHJcbiAgICAgICAgfSxcclxuICAgICAgICBkYXRlOiAnMTQuMDEnLFxyXG4gICAgICAgIHRpbWU6ICcyMjozMCcsXHJcbiAgICAgICAgY29lZmZpY2VudDogJzEuNjcnLFxyXG4gICAgICAgIHByaWNlOiAnMTUwMCDRgNGD0LEuJ1xyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBpZDogXCJvcmRpbmFyR2FtZTZcIixcclxuICAgICAgICB0ZWFtT25lTmFtZTogJ9CQ0YLQu9C10YLQuNC60L4nLFxyXG4gICAgICAgIHRlYW1PbmVJY29uOiBhdGxldGljb0ljb24uc3JjLFxyXG4gICAgICAgIHRlYW1Ud29OYW1lOiAn0JDRgtC70LXRgtC40LonLFxyXG4gICAgICAgIHRlYW1Ud29JY29uOiBhdGxldGljSWNvbi5zcmMsXHJcbiAgICAgICAgcHJlZGljdGlvbjoge1xyXG4gICAgICAgICAgICB0aGVyZUlzOiBmYWxzZSxcclxuICAgICAgICAgICAgdG90YWxCZXQ6ICcnLFxyXG4gICAgICAgICAgICBjb2VmZmljZW50OiAnJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZGF0ZTogJzE0LjAxJyxcclxuICAgICAgICB0aW1lOiAnMjI6MzAnLFxyXG4gICAgICAgIGNvZWZmaWNlbnQ6ICcxLjY3JyxcclxuICAgICAgICBwcmljZTogJzE1MDAg0YDRg9CxLidcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgaWQ6IFwib3JkaW5hckdhbWU3XCIsXHJcbiAgICAgICAgdGVhbU9uZU5hbWU6ICfQkNGC0LvQtdGC0LjQutC+JyxcclxuICAgICAgICB0ZWFtT25lSWNvbjogYXRsZXRpY29JY29uLnNyYyxcclxuICAgICAgICB0ZWFtVHdvTmFtZTogJ9CQ0YLQu9C10YLQuNC6JyxcclxuICAgICAgICB0ZWFtVHdvSWNvbjogYXRsZXRpY0ljb24uc3JjLFxyXG4gICAgICAgIHByZWRpY3Rpb246IHtcclxuICAgICAgICAgICAgdGhlcmVJczogZmFsc2UsXHJcbiAgICAgICAgICAgIHRvdGFsQmV0OiAnJyxcclxuICAgICAgICAgICAgY29lZmZpY2VudDogJydcclxuICAgICAgICB9LFxyXG4gICAgICAgIGRhdGU6ICcxNC4wMScsXHJcbiAgICAgICAgdGltZTogJzIyOjMwJyxcclxuICAgICAgICBjb2VmZmljZW50OiAnMS42NycsXHJcbiAgICAgICAgcHJpY2U6ICcxNTAwINGA0YPQsS4nXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIGlkOiBcIm9yZGluYXJHYW1lOFwiLFxyXG4gICAgICAgIHRlYW1PbmVOYW1lOiAn0JDRgtC70LXRgtC40LrQvicsXHJcbiAgICAgICAgdGVhbU9uZUljb246IGF0bGV0aWNvSWNvbi5zcmMsXHJcbiAgICAgICAgdGVhbVR3b05hbWU6ICfQkNGC0LvQtdGC0LjQuicsXHJcbiAgICAgICAgdGVhbVR3b0ljb246IGF0bGV0aWNJY29uLnNyYyxcclxuICAgICAgICBwcmVkaWN0aW9uOiB7XHJcbiAgICAgICAgICAgIHRoZXJlSXM6IGZhbHNlLFxyXG4gICAgICAgICAgICB0b3RhbEJldDogJ9GC0LEgMSw1IC8gJyxcclxuICAgICAgICAgICAgY29lZmZpY2VudDogJ9C60L7QtdGEIDMsNSdcclxuICAgICAgICB9LFxyXG4gICAgICAgIGRhdGU6ICcxNC4wMScsXHJcbiAgICAgICAgdGltZTogJzIyOjMwJyxcclxuICAgICAgICBjb2VmZmljZW50OiAnMS42NycsXHJcbiAgICAgICAgcHJpY2U6ICcxNTAwINGA0YPQsS4nXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIGlkOiBcIm9yZGluYXJHYW1lOVwiLFxyXG4gICAgICAgIHRlYW1PbmVOYW1lOiAn0JDRgtC70LXRgtC40LrQvicsXHJcbiAgICAgICAgdGVhbU9uZUljb246IGF0bGV0aWNvSWNvbi5zcmMsXHJcbiAgICAgICAgdGVhbVR3b05hbWU6ICfQkNGC0LvQtdGC0LjQuicsXHJcbiAgICAgICAgdGVhbVR3b0ljb246IGF0bGV0aWNJY29uLnNyYyxcclxuICAgICAgICBwcmVkaWN0aW9uOiB7XHJcbiAgICAgICAgICAgIHRoZXJlSXM6IGZhbHNlLFxyXG4gICAgICAgICAgICB0b3RhbEJldDogJycsXHJcbiAgICAgICAgICAgIGNvZWZmaWNlbnQ6ICcnXHJcbiAgICAgICAgfSxcclxuICAgICAgICBkYXRlOiAnMTQuMDEnLFxyXG4gICAgICAgIHRpbWU6ICcyMjozMCcsXHJcbiAgICAgICAgY29lZmZpY2VudDogJzEuNjcnLFxyXG4gICAgICAgIHByaWNlOiAnMTUwMCDRgNGD0LEuJ1xyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBpZDogXCJvcmRpbmFyR2FtZTEwXCIsXHJcbiAgICAgICAgdGVhbU9uZU5hbWU6ICfQkNGC0LvQtdGC0LjQutC+JyxcclxuICAgICAgICB0ZWFtT25lSWNvbjogYXRsZXRpY29JY29uLnNyYyxcclxuICAgICAgICB0ZWFtVHdvTmFtZTogJ9CQ0YLQu9C10YLQuNC6JyxcclxuICAgICAgICB0ZWFtVHdvSWNvbjogYXRsZXRpY0ljb24uc3JjLFxyXG4gICAgICAgIHByZWRpY3Rpb246IHtcclxuICAgICAgICAgICAgdGhlcmVJczogZmFsc2UsXHJcbiAgICAgICAgICAgIHRvdGFsQmV0OiAnJyxcclxuICAgICAgICAgICAgY29lZmZpY2VudDogJydcclxuICAgICAgICB9LFxyXG4gICAgICAgIGRhdGU6ICcxNC4wMScsXHJcbiAgICAgICAgdGltZTogJzIyOjMwJyxcclxuICAgICAgICBjb2VmZmljZW50OiAnMS42NycsXHJcbiAgICAgICAgcHJpY2U6ICcxNTAwINGA0YPQsS4nXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIGlkOiBcIm9yZGluYXJHYW1lMTFcIixcclxuICAgICAgICB0ZWFtT25lTmFtZTogJ9CQ0YLQu9C10YLQuNC60L4nLFxyXG4gICAgICAgIHRlYW1PbmVJY29uOiBhdGxldGljb0ljb24uc3JjLFxyXG4gICAgICAgIHRlYW1Ud29OYW1lOiAn0JDRgtC70LXRgtC40LonLFxyXG4gICAgICAgIHRlYW1Ud29JY29uOiBhdGxldGljSWNvbi5zcmMsXHJcbiAgICAgICAgcHJlZGljdGlvbjoge1xyXG4gICAgICAgICAgICB0aGVyZUlzOiBmYWxzZSxcclxuICAgICAgICAgICAgdG90YWxCZXQ6ICcnLFxyXG4gICAgICAgICAgICBjb2VmZmljZW50OiAnJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZGF0ZTogJzE0LjAxJyxcclxuICAgICAgICB0aW1lOiAnMjI6MzAnLFxyXG4gICAgICAgIGNvZWZmaWNlbnQ6ICcxLjY3JyxcclxuICAgICAgICBwcmljZTogJzE1MDAg0YDRg9CxLidcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgaWQ6IFwib3JkaW5hckdhbWUxMlwiLFxyXG4gICAgICAgIHRlYW1PbmVOYW1lOiAn0JDRgtC70LXRgtC40LrQvicsXHJcbiAgICAgICAgdGVhbU9uZUljb246IGF0bGV0aWNvSWNvbi5zcmMsXHJcbiAgICAgICAgdGVhbVR3b05hbWU6ICfQkNGC0LvQtdGC0LjQuicsXHJcbiAgICAgICAgdGVhbVR3b0ljb246IGF0bGV0aWNJY29uLnNyYyxcclxuICAgICAgICBwcmVkaWN0aW9uOiB7XHJcbiAgICAgICAgICAgIHRoZXJlSXM6IGZhbHNlLFxyXG4gICAgICAgICAgICB0b3RhbEJldDogJ9GC0LEgMSw1IC8gJyxcclxuICAgICAgICAgICAgY29lZmZpY2VudDogJ9C60L7QtdGEIDMsNSdcclxuICAgICAgICB9LFxyXG4gICAgICAgIGRhdGU6ICcxNC4wMScsXHJcbiAgICAgICAgdGltZTogJzIyOjMwJyxcclxuICAgICAgICBjb2VmZmljZW50OiAnMS42NycsXHJcbiAgICAgICAgcHJpY2U6ICcxNTAwINGA0YPQsS4nXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIGlkOiBcIm9yZGluYXJHYW1lMTNcIixcclxuICAgICAgICB0ZWFtT25lTmFtZTogJ9CQ0YLQu9C10YLQuNC60L4nLFxyXG4gICAgICAgIHRlYW1PbmVJY29uOiBhdGxldGljb0ljb24uc3JjLFxyXG4gICAgICAgIHRlYW1Ud29OYW1lOiAn0JDRgtC70LXRgtC40LonLFxyXG4gICAgICAgIHRlYW1Ud29JY29uOiBhdGxldGljSWNvbi5zcmMsXHJcbiAgICAgICAgcHJlZGljdGlvbjoge1xyXG4gICAgICAgICAgICB0aGVyZUlzOiBmYWxzZSxcclxuICAgICAgICAgICAgdG90YWxCZXQ6ICfRgtCxIDEsNSAvICcsXHJcbiAgICAgICAgICAgIGNvZWZmaWNlbnQ6ICfQutC+0LXRhCAzLDUnXHJcbiAgICAgICAgfSxcclxuICAgICAgICBkYXRlOiAnMTQuMDEnLFxyXG4gICAgICAgIHRpbWU6ICcyMjozMCcsXHJcbiAgICAgICAgY29lZmZpY2VudDogJzEuNjcnLFxyXG4gICAgICAgIHByaWNlOiAnMTUwMCDRgNGD0LEuJ1xyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBpZDogXCJvcmRpbmFyR2FtZTE0XCIsXHJcbiAgICAgICAgdGVhbU9uZU5hbWU6ICfQkNGC0LvQtdGC0LjQutC+JyxcclxuICAgICAgICB0ZWFtT25lSWNvbjogYXRsZXRpY29JY29uLnNyYyxcclxuICAgICAgICB0ZWFtVHdvTmFtZTogJ9CQ0YLQu9C10YLQuNC6JyxcclxuICAgICAgICB0ZWFtVHdvSWNvbjogYXRsZXRpY0ljb24uc3JjLFxyXG4gICAgICAgIHByZWRpY3Rpb246IHtcclxuICAgICAgICAgICAgdGhlcmVJczogZmFsc2UsXHJcbiAgICAgICAgICAgIHRvdGFsQmV0OiAnJyxcclxuICAgICAgICAgICAgY29lZmZpY2VudDogJydcclxuICAgICAgICB9LFxyXG4gICAgICAgIGRhdGU6ICcxNC4wMScsXHJcbiAgICAgICAgdGltZTogJzIyOjMwJyxcclxuICAgICAgICBjb2VmZmljZW50OiAnMS42NycsXHJcbiAgICAgICAgcHJpY2U6ICcxNTAwINGA0YPQsS4nXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIGlkOiBcIm9yZGluYXJHYW1lMTVcIixcclxuICAgICAgICB0ZWFtT25lTmFtZTogJ9CQ0YLQu9C10YLQuNC60L4nLFxyXG4gICAgICAgIHRlYW1PbmVJY29uOiBhdGxldGljb0ljb24uc3JjLFxyXG4gICAgICAgIHRlYW1Ud29OYW1lOiAn0JDRgtC70LXRgtC40LonLFxyXG4gICAgICAgIHRlYW1Ud29JY29uOiBhdGxldGljSWNvbi5zcmMsXHJcbiAgICAgICAgcHJlZGljdGlvbjoge1xyXG4gICAgICAgICAgICB0aGVyZUlzOiBmYWxzZSxcclxuICAgICAgICAgICAgdG90YWxCZXQ6ICfRgtCxIDEsNSAvICcsXHJcbiAgICAgICAgICAgIGNvZWZmaWNlbnQ6ICfQutC+0LXRhCAzLDUnXHJcbiAgICAgICAgfSxcclxuICAgICAgICBkYXRlOiAnMTQuMDEnLFxyXG4gICAgICAgIHRpbWU6ICcyMjozMCcsXHJcbiAgICAgICAgY29lZmZpY2VudDogJzEuNjcnLFxyXG4gICAgICAgIHByaWNlOiAnMTUwMCDRgNGD0LEuJ1xyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBpZDogXCJvcmRpbmFyR2FtZTE2XCIsXHJcbiAgICAgICAgdGVhbU9uZU5hbWU6ICfQkNGC0LvQtdGC0LjQutC+JyxcclxuICAgICAgICB0ZWFtT25lSWNvbjogYXRsZXRpY29JY29uLnNyYyxcclxuICAgICAgICB0ZWFtVHdvTmFtZTogJ9CQ0YLQu9C10YLQuNC6JyxcclxuICAgICAgICB0ZWFtVHdvSWNvbjogYXRsZXRpY0ljb24uc3JjLFxyXG4gICAgICAgIHByZWRpY3Rpb246IHtcclxuICAgICAgICAgICAgdGhlcmVJczogZmFsc2UsXHJcbiAgICAgICAgICAgIHRvdGFsQmV0OiAn0YLQsSAxLDUgLyAnLFxyXG4gICAgICAgICAgICBjb2VmZmljZW50OiAn0LrQvtC10YQgMyw1J1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZGF0ZTogJzE0LjAxJyxcclxuICAgICAgICB0aW1lOiAnMjI6MzAnLFxyXG4gICAgICAgIGNvZWZmaWNlbnQ6ICcxLjY3JyxcclxuICAgICAgICBwcmljZTogJzE1MDAg0YDRg9CxLidcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgaWQ6IFwib3JkaW5hckdhbWUxN1wiLFxyXG4gICAgICAgIHRlYW1PbmVOYW1lOiAn0JDRgtC70LXRgtC40LrQvicsXHJcbiAgICAgICAgdGVhbU9uZUljb246IGF0bGV0aWNvSWNvbi5zcmMsXHJcbiAgICAgICAgdGVhbVR3b05hbWU6ICfQkNGC0LvQtdGC0LjQuicsXHJcbiAgICAgICAgdGVhbVR3b0ljb246IGF0bGV0aWNJY29uLnNyYyxcclxuICAgICAgICBwcmVkaWN0aW9uOiB7XHJcbiAgICAgICAgICAgIHRoZXJlSXM6IGZhbHNlLFxyXG4gICAgICAgICAgICB0b3RhbEJldDogJ9GC0LEgMSw1IC8gJyxcclxuICAgICAgICAgICAgY29lZmZpY2VudDogJ9C60L7QtdGEIDMsNSdcclxuICAgICAgICB9LFxyXG4gICAgICAgIGRhdGU6ICcxNC4wMScsXHJcbiAgICAgICAgdGltZTogJzIyOjMwJyxcclxuICAgICAgICBjb2VmZmljZW50OiAnMS42NycsXHJcbiAgICAgICAgcHJpY2U6ICcxNTAwINGA0YPQsS4nXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIGlkOiBcIm9yZGluYXJHYW1lMThcIixcclxuICAgICAgICB0ZWFtT25lTmFtZTogJ9CQ0YLQu9C10YLQuNC60L4nLFxyXG4gICAgICAgIHRlYW1PbmVJY29uOiBhdGxldGljb0ljb24uc3JjLFxyXG4gICAgICAgIHRlYW1Ud29OYW1lOiAn0JDRgtC70LXRgtC40LonLFxyXG4gICAgICAgIHRlYW1Ud29JY29uOiBhdGxldGljSWNvbi5zcmMsXHJcbiAgICAgICAgcHJlZGljdGlvbjoge1xyXG4gICAgICAgICAgICB0aGVyZUlzOiBmYWxzZSxcclxuICAgICAgICAgICAgdG90YWxCZXQ6ICcnLFxyXG4gICAgICAgICAgICBjb2VmZmljZW50OiAnJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZGF0ZTogJzE0LjAxJyxcclxuICAgICAgICB0aW1lOiAnMjI6MzAnLFxyXG4gICAgICAgIGNvZWZmaWNlbnQ6ICcxLjY3JyxcclxuICAgICAgICBwcmljZTogJzE1MDAg0YDRg9CxLidcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgaWQ6IFwib3JkaW5hckdhbWUxOVwiLFxyXG4gICAgICAgIHRlYW1PbmVOYW1lOiAn0JDRgtC70LXRgtC40LrQvicsXHJcbiAgICAgICAgdGVhbU9uZUljb246IGF0bGV0aWNvSWNvbi5zcmMsXHJcbiAgICAgICAgdGVhbVR3b05hbWU6ICfQkNGC0LvQtdGC0LjQuicsXHJcbiAgICAgICAgdGVhbVR3b0ljb246IGF0bGV0aWNJY29uLnNyYyxcclxuICAgICAgICBwcmVkaWN0aW9uOiB7XHJcbiAgICAgICAgICAgIHRoZXJlSXM6IGZhbHNlLFxyXG4gICAgICAgICAgICB0b3RhbEJldDogJycsXHJcbiAgICAgICAgICAgIGNvZWZmaWNlbnQ6ICcnXHJcbiAgICAgICAgfSxcclxuICAgICAgICBkYXRlOiAnMTQuMDEnLFxyXG4gICAgICAgIHRpbWU6ICcyMjozMCcsXHJcbiAgICAgICAgY29lZmZpY2VudDogJzEuNjcnLFxyXG4gICAgICAgIHByaWNlOiAnMTUwMCDRgNGD0LEuJ1xyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBpZDogXCJvcmRpbmFyR2FtZTIwXCIsXHJcbiAgICAgICAgdGVhbU9uZU5hbWU6ICfQkNGC0LvQtdGC0LjQutC+JyxcclxuICAgICAgICB0ZWFtT25lSWNvbjogYXRsZXRpY29JY29uLnNyYyxcclxuICAgICAgICB0ZWFtVHdvTmFtZTogJ9CQ0YLQu9C10YLQuNC6JyxcclxuICAgICAgICB0ZWFtVHdvSWNvbjogYXRsZXRpY0ljb24uc3JjLFxyXG4gICAgICAgIHByZWRpY3Rpb246IHtcclxuICAgICAgICAgICAgdGhlcmVJczogZmFsc2UsXHJcbiAgICAgICAgICAgIHRvdGFsQmV0OiAnJyxcclxuICAgICAgICAgICAgY29lZmZpY2VudDogJydcclxuICAgICAgICB9LFxyXG4gICAgICAgIGRhdGU6ICcxNC4wMScsXHJcbiAgICAgICAgdGltZTogJzIyOjMwJyxcclxuICAgICAgICBjb2VmZmljZW50OiAnMS42NycsXHJcbiAgICAgICAgcHJpY2U6ICcxNTAwINGA0YPQsS4nXHJcbiAgICB9LFxyXG5dXHJcbiIsIi8vIGljb25zXHJcbmltcG9ydCBhdGxldGljb0ljb24gZnJvbSAnL3B1YmxpYy9pbWFnZXMvZ2FtZXMvYXRsZXRpY28ucG5nJ1xyXG5pbXBvcnQgYXRsZXRpY0ljb24gZnJvbSAnL3B1YmxpYy9pbWFnZXMvZ2FtZXMvYXRsZXRpYy5wbmcnXHJcbmltcG9ydCBiYXJjYUljb24gZnJvbSAnL3B1YmxpYy9pbWFnZXMvbWFpbi9tYXRjaGVzL2JhcmNhLnBuZydcclxuaW1wb3J0IG1hcmNlbEljb24gZnJvbSAnL3B1YmxpYy9pbWFnZXMvbWFpbi9tYXRjaGVzL21hcmNlbC5wbmcnXHJcbmltcG9ydCBwc2pJY29uIGZyb20gJy9wdWJsaWMvaW1hZ2VzL21haW4vbWF0Y2hlcy9wc2oucG5nJ1xyXG5pbXBvcnQgcmVubmFpc0ljb24gZnJvbSAnL3B1YmxpYy9pbWFnZXMvbWFpbi9tYXRjaGVzL3Jlbm5haXMucG5nJ1xyXG5cclxuZXhwb3J0IGNvbnN0IHByZWRpY3Rpb25zID0gW1xyXG4gICAge1xyXG4gICAgICAgIGlkOidwcmVkaWN0aW9uc3BhZ2VHYW1lMScsXHJcbiAgICAgICAgdGVhbU9uZU5hbWU6ICfQkNGC0LvQtdGC0LjQutC+JyxcclxuICAgICAgICB0ZWFtT25lSWNvbjogYXRsZXRpY29JY29uLnNyYyxcclxuICAgICAgICB0ZWFtVHdvTmFtZTogJ9CQ0YLQu9C10YLQuNC6JyxcclxuICAgICAgICB0ZWFtVHdvSWNvbjogYXRsZXRpY0ljb24uc3JjLFxyXG4gICAgICAgIHByZWRpY3Rpb246IHtcclxuICAgICAgICAgICAgdGhlcmVJczogZmFsc2UsXHJcbiAgICAgICAgICAgIHRvdGFsQmV0OiAn0YLQsSAxLDUgLyAnLFxyXG4gICAgICAgICAgICBjb2VmZmljZW50OiAn0LrQvtC10YQgMyw1J1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgdHlwZTogXCLQntGA0LTQuNC90LDRgFwiLFxyXG4gICAgICAgIGRhdGU6ICcxNC4wMScsXHJcbiAgICAgICAgdGltZTogJzIyOjMwJyxcclxuICAgICAgICBjb2VmZmljZW50OiAnMS42NycsXHJcbiAgICAgICAgcHJpY2U6ICcxNjQwINGA0YPQsS4nXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIGlkOidwcmVkaWN0aW9uc3BhZ2VHYW1lMicsXHJcbiAgICAgICAgdGVhbU9uZU5hbWU6ICfQkdCw0YDRgdC10LvQvtC90LAnLFxyXG4gICAgICAgIHRlYW1PbmVJY29uOiBiYXJjYUljb24uc3JjLFxyXG4gICAgICAgIHRlYW1Ud29OYW1lOiAn0J/QodCWJyxcclxuICAgICAgICB0ZWFtVHdvSWNvbjogcHNqSWNvbi5zcmMsXHJcbiAgICAgICAgcHJlZGljdGlvbjoge1xyXG4gICAgICAgICAgICB0aGVyZUlzOiBmYWxzZSxcclxuICAgICAgICAgICAgdG90YWxCZXQ6ICcnLFxyXG4gICAgICAgICAgICBjb2VmZmljZW50OiAnJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgdHlwZTogXCLQrdC60YHQv9GA0LXRgdGBXCIsXHJcbiAgICAgICAgZGF0ZTogJzE0LjAxJyxcclxuICAgICAgICB0aW1lOiAnMjI6MzAnLFxyXG4gICAgICAgIGNvZWZmaWNlbnQ6ICcyLjA3JyxcclxuICAgICAgICBwcmljZTogJzI1MDAg0YDRg9CxLidcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgaWQ6J3ByZWRpY3Rpb25zcGFnZUdhbWUzJyxcclxuICAgICAgICB0ZWFtT25lTmFtZTogJ9Cc0LDRgNGB0LXQu9GMJyxcclxuICAgICAgICB0ZWFtT25lSWNvbjogbWFyY2VsSWNvbi5zcmMsXHJcbiAgICAgICAgdGVhbVR3b05hbWU6ICfQkNGC0LvQtdGC0LjQuicsXHJcbiAgICAgICAgdGVhbVR3b0ljb246IHJlbm5haXNJY29uLnNyYyxcclxuICAgICAgICBwcmVkaWN0aW9uOiB7XHJcbiAgICAgICAgICAgIHRoZXJlSXM6IGZhbHNlLFxyXG4gICAgICAgICAgICB0b3RhbEJldDogJycsXHJcbiAgICAgICAgICAgIGNvZWZmaWNlbnQ6ICcnXHJcbiAgICAgICAgfSxcclxuICAgICAgICB0eXBlOiAn0K3QutGB0L/RgNC10YHRgScsXHJcbiAgICAgICAgZGF0ZTogJzE0LjAxJyxcclxuICAgICAgICB0aW1lOiAnMjI6MzAnLFxyXG4gICAgICAgIGNvZWZmaWNlbnQ6ICcyLjA3JyxcclxuICAgICAgICBwcmljZTogJzE4MDAg0YDRg9CxLiAnXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIGlkOidwcmVkaWN0aW9uc3BhZ2VHYW1lNCcsXHJcbiAgICAgICAgdGVhbU9uZU5hbWU6ICfQkNGC0LvQtdGC0LjQutC+JyxcclxuICAgICAgICB0ZWFtT25lSWNvbjogYXRsZXRpY29JY29uLnNyYyxcclxuICAgICAgICB0ZWFtVHdvTmFtZTogJ9CQ0YLQu9C10YLQuNC6JyxcclxuICAgICAgICB0ZWFtVHdvSWNvbjogYXRsZXRpY0ljb24uc3JjLFxyXG4gICAgICAgIHByZWRpY3Rpb246IHtcclxuICAgICAgICAgICAgdGhlcmVJczogZmFsc2UsXHJcbiAgICAgICAgICAgIHRvdGFsQmV0OiAnJyxcclxuICAgICAgICAgICAgY29lZmZpY2VudDogJydcclxuICAgICAgICB9LFxyXG4gICAgICAgIHR5cGU6ICfQrdC60YHQv9GA0LXRgdGBJyxcclxuICAgICAgICBkYXRlOiAnMTQuMDEnLFxyXG4gICAgICAgIHRpbWU6ICcyMjozMCcsXHJcbiAgICAgICAgY29lZmZpY2VudDogJzEuNjcnLFxyXG4gICAgICAgIHByaWNlOiAnMTUwMCDRgNGD0LEuJ1xyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBpZDoncHJlZGljdGlvbnNwYWdlR2FtZTUnLFxyXG4gICAgICAgIHRlYW1PbmVOYW1lOiAn0JDRgtC70LXRgtC40LrQvicsXHJcbiAgICAgICAgdGVhbU9uZUljb246IGF0bGV0aWNvSWNvbi5zcmMsXHJcbiAgICAgICAgdGVhbVR3b05hbWU6ICfQkNGC0LvQtdGC0LjQuicsXHJcbiAgICAgICAgdGVhbVR3b0ljb246IGF0bGV0aWNJY29uLnNyYyxcclxuICAgICAgICBwcmVkaWN0aW9uOiB7XHJcbiAgICAgICAgICAgIHRoZXJlSXM6IGZhbHNlLFxyXG4gICAgICAgICAgICB0b3RhbEJldDogJ9GC0LEgMSw1IC8gJyxcclxuICAgICAgICAgICAgY29lZmZpY2VudDogJ9C60L7QtdGEIDMsNSdcclxuICAgICAgICB9LFxyXG4gICAgICAgIHR5cGU6ICfQrdC60YHQv9GA0LXRgdGBJyxcclxuICAgICAgICBkYXRlOiAnMTQuMDEnLFxyXG4gICAgICAgIHRpbWU6ICcyMjozMCcsXHJcbiAgICAgICAgY29lZmZpY2VudDogJzEuNjcnLFxyXG4gICAgICAgIHByaWNlOiAnMTUwMCDRgNGD0LEuJ1xyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBpZDoncHJlZGljdGlvbnNwYWdlR2FtZTYnLFxyXG4gICAgICAgIHRlYW1PbmVOYW1lOiAn0JDRgtC70LXRgtC40LrQvicsXHJcbiAgICAgICAgdGVhbU9uZUljb246IGF0bGV0aWNvSWNvbi5zcmMsXHJcbiAgICAgICAgdGVhbVR3b05hbWU6ICfQkNGC0LvQtdGC0LjQuicsXHJcbiAgICAgICAgdGVhbVR3b0ljb246IGF0bGV0aWNJY29uLnNyYyxcclxuICAgICAgICBwcmVkaWN0aW9uOiB7XHJcbiAgICAgICAgICAgIHRoZXJlSXM6IGZhbHNlLFxyXG4gICAgICAgICAgICB0b3RhbEJldDogJycsXHJcbiAgICAgICAgICAgIGNvZWZmaWNlbnQ6ICcnXHJcbiAgICAgICAgfSxcclxuICAgICAgICB0eXBlOiAn0K3QutGB0L/RgNC10YHRgScsXHJcbiAgICAgICAgZGF0ZTogJzE0LjAxJyxcclxuICAgICAgICB0aW1lOiAnMjI6MzAnLFxyXG4gICAgICAgIGNvZWZmaWNlbnQ6ICcxLjY3JyxcclxuICAgICAgICBwcmljZTogJzE1MDAg0YDRg9CxLidcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgaWQ6J3ByZWRpY3Rpb25zcGFnZUdhbWU3JyxcclxuICAgICAgICB0ZWFtT25lTmFtZTogJ9CQ0YLQu9C10YLQuNC60L4nLFxyXG4gICAgICAgIHRlYW1PbmVJY29uOiBhdGxldGljb0ljb24uc3JjLFxyXG4gICAgICAgIHRlYW1Ud29OYW1lOiAn0JDRgtC70LXRgtC40LonLFxyXG4gICAgICAgIHRlYW1Ud29JY29uOiBhdGxldGljSWNvbi5zcmMsXHJcbiAgICAgICAgcHJlZGljdGlvbjoge1xyXG4gICAgICAgICAgICB0aGVyZUlzOiBmYWxzZSxcclxuICAgICAgICAgICAgdG90YWxCZXQ6ICcnLFxyXG4gICAgICAgICAgICBjb2VmZmljZW50OiAnJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgdHlwZTogJ9Ct0LrRgdC/0YDQtdGB0YEnLFxyXG4gICAgICAgIGRhdGU6ICcxNC4wMScsXHJcbiAgICAgICAgdGltZTogJzIyOjMwJyxcclxuICAgICAgICBjb2VmZmljZW50OiAnMS42NycsXHJcbiAgICAgICAgcHJpY2U6ICcxNTAwINGA0YPQsS4nXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIGlkOidwcmVkaWN0aW9uc3BhZ2VHYW1lOCcsXHJcbiAgICAgICAgdGVhbU9uZU5hbWU6ICfQkNGC0LvQtdGC0LjQutC+JyxcclxuICAgICAgICB0ZWFtT25lSWNvbjogYXRsZXRpY29JY29uLnNyYyxcclxuICAgICAgICB0ZWFtVHdvTmFtZTogJ9CQ0YLQu9C10YLQuNC6JyxcclxuICAgICAgICB0ZWFtVHdvSWNvbjogYXRsZXRpY0ljb24uc3JjLFxyXG4gICAgICAgIHByZWRpY3Rpb246IHtcclxuICAgICAgICAgICAgdGhlcmVJczogZmFsc2UsXHJcbiAgICAgICAgICAgIHRvdGFsQmV0OiAn0YLQsSAxLDUgLyAnLFxyXG4gICAgICAgICAgICBjb2VmZmljZW50OiAn0LrQvtC10YQgMyw1J1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgdHlwZTogJ9Ct0LrRgdC/0YDQtdGB0YEnLFxyXG4gICAgICAgIGRhdGU6ICcxNC4wMScsXHJcbiAgICAgICAgdGltZTogJzIyOjMwJyxcclxuICAgICAgICBjb2VmZmljZW50OiAnMS42NycsXHJcbiAgICAgICAgcHJpY2U6ICcxNTAwINGA0YPQsS4nXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIGlkOidwcmVkaWN0aW9uc3BhZ2VHYW1lOScsXHJcbiAgICAgICAgdGVhbU9uZU5hbWU6ICfQkNGC0LvQtdGC0LjQutC+JyxcclxuICAgICAgICB0ZWFtT25lSWNvbjogYXRsZXRpY29JY29uLnNyYyxcclxuICAgICAgICB0ZWFtVHdvTmFtZTogJ9CQ0YLQu9C10YLQuNC6JyxcclxuICAgICAgICB0ZWFtVHdvSWNvbjogYXRsZXRpY0ljb24uc3JjLFxyXG4gICAgICAgIHByZWRpY3Rpb246IHtcclxuICAgICAgICAgICAgdGhlcmVJczogZmFsc2UsXHJcbiAgICAgICAgICAgIHRvdGFsQmV0OiAnJyxcclxuICAgICAgICAgICAgY29lZmZpY2VudDogJydcclxuICAgICAgICB9LFxyXG4gICAgICAgIHR5cGU6ICfQrdC60YHQv9GA0LXRgdGBJyxcclxuICAgICAgICBkYXRlOiAnMTQuMDEnLFxyXG4gICAgICAgIHRpbWU6ICcyMjozMCcsXHJcbiAgICAgICAgY29lZmZpY2VudDogJzEuNjcnLFxyXG4gICAgICAgIHByaWNlOiAnMTUwMCDRgNGD0LEuJ1xyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBpZDoncHJlZGljdGlvbnNwYWdlR2FtZTEwJyxcclxuICAgICAgICB0ZWFtT25lTmFtZTogJ9CQ0YLQu9C10YLQuNC60L4nLFxyXG4gICAgICAgIHRlYW1PbmVJY29uOiBhdGxldGljb0ljb24uc3JjLFxyXG4gICAgICAgIHRlYW1Ud29OYW1lOiAn0JDRgtC70LXRgtC40LonLFxyXG4gICAgICAgIHRlYW1Ud29JY29uOiBhdGxldGljSWNvbi5zcmMsXHJcbiAgICAgICAgcHJlZGljdGlvbjoge1xyXG4gICAgICAgICAgICB0aGVyZUlzOiBmYWxzZSxcclxuICAgICAgICAgICAgdG90YWxCZXQ6ICcnLFxyXG4gICAgICAgICAgICBjb2VmZmljZW50OiAnJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgdHlwZTogJ9Ct0LrRgdC/0YDQtdGB0YEnLFxyXG4gICAgICAgIGRhdGU6ICcxNC4wMScsXHJcbiAgICAgICAgdGltZTogJzIyOjMwJyxcclxuICAgICAgICBjb2VmZmljZW50OiAnMS42NycsXHJcbiAgICAgICAgcHJpY2U6ICcxNTAwINGA0YPQsS4nXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIGlkOidwcmVkaWN0aW9uc3BhZ2VHYW1lMTEnLFxyXG4gICAgICAgIHRlYW1PbmVOYW1lOiAn0JDRgtC70LXRgtC40LrQvicsXHJcbiAgICAgICAgdGVhbU9uZUljb246IGF0bGV0aWNvSWNvbi5zcmMsXHJcbiAgICAgICAgdGVhbVR3b05hbWU6ICfQkNGC0LvQtdGC0LjQuicsXHJcbiAgICAgICAgdGVhbVR3b0ljb246IGF0bGV0aWNJY29uLnNyYyxcclxuICAgICAgICBwcmVkaWN0aW9uOiB7XHJcbiAgICAgICAgICAgIHRoZXJlSXM6IGZhbHNlLFxyXG4gICAgICAgICAgICB0b3RhbEJldDogJycsXHJcbiAgICAgICAgICAgIGNvZWZmaWNlbnQ6ICcnXHJcbiAgICAgICAgfSxcclxuICAgICAgICB0eXBlOiAn0K3QutGB0L/RgNC10YHRgScsXHJcbiAgICAgICAgZGF0ZTogJzE0LjAxJyxcclxuICAgICAgICB0aW1lOiAnMjI6MzAnLFxyXG4gICAgICAgIGNvZWZmaWNlbnQ6ICcxLjY3JyxcclxuICAgICAgICBwcmljZTogJzE1MDAg0YDRg9CxLidcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgaWQ6J3ByZWRpY3Rpb25zcGFnZUdhbWUxMicsXHJcbiAgICAgICAgdGVhbU9uZU5hbWU6ICfQkNGC0LvQtdGC0LjQutC+JyxcclxuICAgICAgICB0ZWFtT25lSWNvbjogYXRsZXRpY29JY29uLnNyYyxcclxuICAgICAgICB0ZWFtVHdvTmFtZTogJ9CQ0YLQu9C10YLQuNC6JyxcclxuICAgICAgICB0ZWFtVHdvSWNvbjogYXRsZXRpY0ljb24uc3JjLFxyXG4gICAgICAgIHByZWRpY3Rpb246IHtcclxuICAgICAgICAgICAgdGhlcmVJczogZmFsc2UsXHJcbiAgICAgICAgICAgIHRvdGFsQmV0OiAn0YLQsSAxLDUgLyAnLFxyXG4gICAgICAgICAgICBjb2VmZmljZW50OiAn0LrQvtC10YQgMyw1J1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgdHlwZTogJ9Ct0LrRgdC/0YDQtdGB0YEnLFxyXG4gICAgICAgIGRhdGU6ICcxNC4wMScsXHJcbiAgICAgICAgdGltZTogJzIyOjMwJyxcclxuICAgICAgICBjb2VmZmljZW50OiAnMS42NycsXHJcbiAgICAgICAgcHJpY2U6ICcxNTAwINGA0YPQsS4nXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIGlkOidwcmVkaWN0aW9uc3BhZ2VHYW1lMTMnLFxyXG4gICAgICAgIHRlYW1PbmVOYW1lOiAn0JDRgtC70LXRgtC40LrQvicsXHJcbiAgICAgICAgdGVhbU9uZUljb246IGF0bGV0aWNvSWNvbi5zcmMsXHJcbiAgICAgICAgdGVhbVR3b05hbWU6ICfQkNGC0LvQtdGC0LjQuicsXHJcbiAgICAgICAgdGVhbVR3b0ljb246IGF0bGV0aWNJY29uLnNyYyxcclxuICAgICAgICBwcmVkaWN0aW9uOiB7XHJcbiAgICAgICAgICAgIHRoZXJlSXM6IGZhbHNlLFxyXG4gICAgICAgICAgICB0b3RhbEJldDogJ9GC0LEgMSw1IC8gJyxcclxuICAgICAgICAgICAgY29lZmZpY2VudDogJ9C60L7QtdGEIDMsNSdcclxuICAgICAgICB9LFxyXG4gICAgICAgIHR5cGU6ICfQrdC60YHQv9GA0LXRgdGBJyxcclxuICAgICAgICBkYXRlOiAnMTQuMDEnLFxyXG4gICAgICAgIHRpbWU6ICcyMjozMCcsXHJcbiAgICAgICAgY29lZmZpY2VudDogJzEuNjcnLFxyXG4gICAgICAgIHByaWNlOiAnMTUwMCDRgNGD0LEuJ1xyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBpZDoncHJlZGljdGlvbnNwYWdlR2FtZTE0JyxcclxuICAgICAgICB0ZWFtT25lTmFtZTogJ9CQ0YLQu9C10YLQuNC60L4nLFxyXG4gICAgICAgIHRlYW1PbmVJY29uOiBhdGxldGljb0ljb24uc3JjLFxyXG4gICAgICAgIHRlYW1Ud29OYW1lOiAn0JDRgtC70LXRgtC40LonLFxyXG4gICAgICAgIHRlYW1Ud29JY29uOiBhdGxldGljSWNvbi5zcmMsXHJcbiAgICAgICAgcHJlZGljdGlvbjoge1xyXG4gICAgICAgICAgICB0aGVyZUlzOiBmYWxzZSxcclxuICAgICAgICAgICAgdG90YWxCZXQ6ICcnLFxyXG4gICAgICAgICAgICBjb2VmZmljZW50OiAnJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgdHlwZTogJ9Ct0LrRgdC/0YDQtdGB0YEnLFxyXG4gICAgICAgIGRhdGU6ICcxNC4wMScsXHJcbiAgICAgICAgdGltZTogJzIyOjMwJyxcclxuICAgICAgICBjb2VmZmljZW50OiAnMS42NycsXHJcbiAgICAgICAgcHJpY2U6ICcxNTAwINGA0YPQsS4nXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIGlkOidwcmVkaWN0aW9uc3BhZ2VHYW1lMTUnLFxyXG4gICAgICAgIHRlYW1PbmVOYW1lOiAn0JDRgtC70LXRgtC40LrQvicsXHJcbiAgICAgICAgdGVhbU9uZUljb246IGF0bGV0aWNvSWNvbi5zcmMsXHJcbiAgICAgICAgdGVhbVR3b05hbWU6ICfQkNGC0LvQtdGC0LjQuicsXHJcbiAgICAgICAgdGVhbVR3b0ljb246IGF0bGV0aWNJY29uLnNyYyxcclxuICAgICAgICBwcmVkaWN0aW9uOiB7XHJcbiAgICAgICAgICAgIHRoZXJlSXM6IGZhbHNlLFxyXG4gICAgICAgICAgICB0b3RhbEJldDogJ9GC0LEgMSw1IC8gJyxcclxuICAgICAgICAgICAgY29lZmZpY2VudDogJ9C60L7QtdGEIDMsNSdcclxuICAgICAgICB9LFxyXG4gICAgICAgIHR5cGU6ICfQrdC60YHQv9GA0LXRgdGBJyxcclxuICAgICAgICBkYXRlOiAnMTQuMDEnLFxyXG4gICAgICAgIHRpbWU6ICcyMjozMCcsXHJcbiAgICAgICAgY29lZmZpY2VudDogJzEuNjcnLFxyXG4gICAgICAgIHByaWNlOiAnMTUwMCDRgNGD0LEuJ1xyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBpZDoncHJlZGljdGlvbnNwYWdlR2FtZTE2JyxcclxuICAgICAgICB0ZWFtT25lTmFtZTogJ9CQ0YLQu9C10YLQuNC60L4nLFxyXG4gICAgICAgIHRlYW1PbmVJY29uOiBhdGxldGljb0ljb24uc3JjLFxyXG4gICAgICAgIHRlYW1Ud29OYW1lOiAn0JDRgtC70LXRgtC40LonLFxyXG4gICAgICAgIHRlYW1Ud29JY29uOiBhdGxldGljSWNvbi5zcmMsXHJcbiAgICAgICAgcHJlZGljdGlvbjoge1xyXG4gICAgICAgICAgICB0aGVyZUlzOiBmYWxzZSxcclxuICAgICAgICAgICAgdG90YWxCZXQ6ICfRgtCxIDEsNSAvICcsXHJcbiAgICAgICAgICAgIGNvZWZmaWNlbnQ6ICfQutC+0LXRhCAzLDUnXHJcbiAgICAgICAgfSxcclxuICAgICAgICB0eXBlOiAn0K3QutGB0L/RgNC10YHRgScsXHJcbiAgICAgICAgZGF0ZTogJzE0LjAxJyxcclxuICAgICAgICB0aW1lOiAnMjI6MzAnLFxyXG4gICAgICAgIGNvZWZmaWNlbnQ6ICcxLjY3JyxcclxuICAgICAgICBwcmljZTogJzE1MDAg0YDRg9CxLidcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgaWQ6J3ByZWRpY3Rpb25zcGFnZUdhbWUxNycsXHJcbiAgICAgICAgdGVhbU9uZU5hbWU6ICfQkNGC0LvQtdGC0LjQutC+JyxcclxuICAgICAgICB0ZWFtT25lSWNvbjogYXRsZXRpY29JY29uLnNyYyxcclxuICAgICAgICB0ZWFtVHdvTmFtZTogJ9CQ0YLQu9C10YLQuNC6JyxcclxuICAgICAgICB0ZWFtVHdvSWNvbjogYXRsZXRpY0ljb24uc3JjLFxyXG4gICAgICAgIHByZWRpY3Rpb246IHtcclxuICAgICAgICAgICAgdGhlcmVJczogZmFsc2UsXHJcbiAgICAgICAgICAgIHRvdGFsQmV0OiAn0YLQsSAxLDUgLyAnLFxyXG4gICAgICAgICAgICBjb2VmZmljZW50OiAn0LrQvtC10YQgMyw1J1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgdHlwZTogJ9Ct0LrRgdC/0YDQtdGB0YEnLFxyXG4gICAgICAgIGRhdGU6ICcxNC4wMScsXHJcbiAgICAgICAgdGltZTogJzIyOjMwJyxcclxuICAgICAgICBjb2VmZmljZW50OiAnMS42NycsXHJcbiAgICAgICAgcHJpY2U6ICcxNTAwINGA0YPQsS4nXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIGlkOidwcmVkaWN0aW9uc3BhZ2VHYW1lMTgnLFxyXG4gICAgICAgIHRlYW1PbmVOYW1lOiAn0JDRgtC70LXRgtC40LrQvicsXHJcbiAgICAgICAgdGVhbU9uZUljb246IGF0bGV0aWNvSWNvbi5zcmMsXHJcbiAgICAgICAgdGVhbVR3b05hbWU6ICfQkNGC0LvQtdGC0LjQuicsXHJcbiAgICAgICAgdGVhbVR3b0ljb246IGF0bGV0aWNJY29uLnNyYyxcclxuICAgICAgICBwcmVkaWN0aW9uOiB7XHJcbiAgICAgICAgICAgIHRoZXJlSXM6IGZhbHNlLFxyXG4gICAgICAgICAgICB0b3RhbEJldDogJycsXHJcbiAgICAgICAgICAgIGNvZWZmaWNlbnQ6ICcnXHJcbiAgICAgICAgfSxcclxuICAgICAgICB0eXBlOiAn0K3QutGB0L/RgNC10YHRgScsXHJcbiAgICAgICAgZGF0ZTogJzE0LjAxJyxcclxuICAgICAgICB0aW1lOiAnMjI6MzAnLFxyXG4gICAgICAgIGNvZWZmaWNlbnQ6ICcxLjY3JyxcclxuICAgICAgICBwcmljZTogJzE1MDAg0YDRg9CxLidcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgaWQ6J3ByZWRpY3Rpb25zcGFnZUdhbWUxOScsXHJcbiAgICAgICAgdGVhbU9uZU5hbWU6ICfQkNGC0LvQtdGC0LjQutC+JyxcclxuICAgICAgICB0ZWFtT25lSWNvbjogYXRsZXRpY29JY29uLnNyYyxcclxuICAgICAgICB0ZWFtVHdvTmFtZTogJ9CQ0YLQu9C10YLQuNC6JyxcclxuICAgICAgICB0ZWFtVHdvSWNvbjogYXRsZXRpY0ljb24uc3JjLFxyXG4gICAgICAgIHByZWRpY3Rpb246IHtcclxuICAgICAgICAgICAgdGhlcmVJczogZmFsc2UsXHJcbiAgICAgICAgICAgIHRvdGFsQmV0OiAnJyxcclxuICAgICAgICAgICAgY29lZmZpY2VudDogJydcclxuICAgICAgICB9LFxyXG4gICAgICAgIHR5cGU6ICfQrdC60YHQv9GA0LXRgdGBJyxcclxuICAgICAgICBkYXRlOiAnMTQuMDEnLFxyXG4gICAgICAgIHRpbWU6ICcyMjozMCcsXHJcbiAgICAgICAgY29lZmZpY2VudDogJzEuNjcnLFxyXG4gICAgICAgIHByaWNlOiAnMTUwMCDRgNGD0LEuJ1xyXG4gICAgfSxcclxuXVxyXG4iLCIvLyBpY29uc1xyXG5pbXBvcnQgYXRsZXRpY29JY29uIGZyb20gJy9wdWJsaWMvaW1hZ2VzL2dhbWVzL2F0bGV0aWNvLnBuZydcclxuaW1wb3J0IGJhcmNhSWNvbiBmcm9tICcvcHVibGljL2ltYWdlcy9tYWluL3ByZWRpY3Rpb24vYmFyY2EucG5nJ1xyXG5pbXBvcnQgcHNqSWNvbiBmcm9tICcvcHVibGljL2ltYWdlcy9tYWluL3ByZWRpY3Rpb24vcHNqLnBuZydcclxuaW1wb3J0IGF0bGV0aWNJY29uIGZyb20gJy9wdWJsaWMvaW1hZ2VzL2dhbWVzL2F0bGV0aWMucG5nJ1xyXG5pbXBvcnQgbWFyY2VsSWNvbiBmcm9tICcvcHVibGljL2ltYWdlcy9tYWluL21hdGNoZXMvbWFyY2VsLnBuZydcclxuaW1wb3J0IHJlbm5haXNJY29uIGZyb20gJy9wdWJsaWMvaW1hZ2VzL21haW4vbWF0Y2hlcy9yZW5uYWlzLnBuZydcclxuXHJcbmV4cG9ydCBjb25zdCBzbGlkZV9kYXRhID0gW1xyXG4gICAge1xyXG4gICAgICAgIGlkOiAncHJlZGljdGlvbnNsaWRlR2FtZTEnLFxyXG4gICAgICAgIHRlYW1PbmVOYW1lOiAn0JDRgtC70LXRgtC40LrQvicsXHJcbiAgICAgICAgdGVhbU9uZUljb246IHBzakljb24uc3JjLFxyXG4gICAgICAgIHRlYW1Ud29OYW1lOiAn0JDRgtC70LXRgtC40LonLFxyXG4gICAgICAgIHRlYW1Ud29JY29uOiBiYXJjYUljb24uc3JjLFxyXG4gICAgICAgIHByZWRpY3Rpb246IHtcclxuICAgICAgICAgICAgdGhlcmVJczogZmFsc2UsXHJcbiAgICAgICAgICAgIHRvdGFsQmV0OiAn0YLQsSAxLDUgLyAnLFxyXG4gICAgICAgICAgICBjb2VmZmljZW50OiAn0LrQvtC10YQgMyw1J1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgdHlwZTogXCLQntGA0LTQuNC90LDRgFwiLFxyXG4gICAgICAgIGRhdGU6ICcxNC4wMScsXHJcbiAgICAgICAgdGltZTogJzIyOjMwJyxcclxuICAgICAgICBjb2VmZmljZW50OiAnMS42NycsXHJcbiAgICAgICAgcHJlZGljdGlvbkJ1dHRvbk5hbWU6ICcuc2xpZGUucHJlZF9idXR0b24nLFxyXG4gICAgICAgIGJ1eUJ1dHRvbk5hbWU6ICcuc2xpZGUuYnV5X2J1dHRvbicsXHJcbiAgICAgICAgcHJlZGljdGlvblRleHQ6ICfQpNGD0LvRhdC10Lwg0YLQsSAxLDUgLyDQutC+0Y3RhCAzLDUnLFxyXG4gICAgICAgIG9yZGluYXJUZXh0OiAn0J7RgNC00LjQvdCw0YAgLyAxNTAw0YDRg9CxLicsXHJcbiAgICAgICAgcHJpY2U6ICcxNTAwINGA0YPQsS4nLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBpZDogJ3ByZWRpY3Rpb25zbGlkZUdhbWUyJyxcclxuICAgICAgICB0ZWFtT25lTmFtZTogJ9CR0LDRgNGB0LXQu9C+0L3QsCcsXHJcbiAgICAgICAgdGVhbU9uZUljb246IGF0bGV0aWNJY29uLnNyYyxcclxuICAgICAgICB0ZWFtVHdvTmFtZTogJ9Cf0KHQlicsXHJcbiAgICAgICAgdGVhbVR3b0ljb246IHBzakljb24uc3JjLFxyXG4gICAgICAgIHByZWRpY3Rpb246IHtcclxuICAgICAgICAgICAgdGhlcmVJczogZmFsc2UsXHJcbiAgICAgICAgICAgIHRvdGFsQmV0OiAnJyxcclxuICAgICAgICAgICAgY29lZmZpY2VudDogJydcclxuICAgICAgICB9LFxyXG4gICAgICAgIHR5cGU6IFwi0K3QutGB0L/RgNC10YHRgVwiLFxyXG4gICAgICAgIGRhdGU6ICcxNC4wMScsXHJcbiAgICAgICAgdGltZTogJzIyOjMwJyxcclxuICAgICAgICBjb2VmZmljZW50OiAnMi4wNycsXHJcbiAgICAgICAgcHJlZGljdGlvbkJ1dHRvbk5hbWU6ICcuc2xpZGUucHJlZF9idXR0b24nLFxyXG4gICAgICAgIGJ1eUJ1dHRvbk5hbWU6ICcuc2xpZGUuYnV5X2J1dHRvbicsXHJcbiAgICAgICAgcHJlZGljdGlvblRleHQ6ICfQpNGD0LvRhdC10Lwg0YLQsSAxLDUgLyDQutC+0Y3RhCAzLDUnLFxyXG4gICAgICAgIG9yZGluYXJUZXh0OiAn0J7RgNC00LjQvdCw0YAgLyAxNTAw0YDRg9CxLicsXHJcbiAgICAgICAgcHJpY2U6ICcyNTAwINGA0YPQsS4nXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIGlkOiAncHJlZGljdGlvbnNsaWRlR2FtZTMnLFxyXG4gICAgICAgIHRlYW1PbmVOYW1lOiAn0JzQsNGA0YHQtdC70YwnLFxyXG4gICAgICAgIHRlYW1PbmVJY29uOiBiYXJjYUljb24uc3JjLFxyXG4gICAgICAgIHRlYW1Ud29OYW1lOiAn0JDRgtC70LXRgtC40LonLFxyXG4gICAgICAgIHRlYW1Ud29JY29uOiByZW5uYWlzSWNvbi5zcmMsXHJcbiAgICAgICAgcHJlZGljdGlvbjoge1xyXG4gICAgICAgICAgICB0aGVyZUlzOiBmYWxzZSxcclxuICAgICAgICAgICAgdG90YWxCZXQ6ICcnLFxyXG4gICAgICAgICAgICBjb2VmZmljZW50OiAnJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgdHlwZTogJ9Ct0LrRgdC/0YDQtdGB0YEnLFxyXG4gICAgICAgIGRhdGU6ICcxNC4wMScsXHJcbiAgICAgICAgdGltZTogJzIyOjMwJyxcclxuICAgICAgICBjb2VmZmljZW50OiAnMi4wNycsXHJcbiAgICAgICAgcHJlZGljdGlvbkJ1dHRvbk5hbWU6ICcuc2xpZGUucHJlZF9idXR0b24nLFxyXG4gICAgICAgIGJ1eUJ1dHRvbk5hbWU6ICcuc2xpZGUuYnV5X2J1dHRvbicsXHJcbiAgICAgICAgcHJlZGljdGlvblRleHQ6ICfQpNGD0LvRhdC10Lwg0YLQsSAxLDUgLyDQutC+0Y3RhCAzLDUnLFxyXG4gICAgICAgIG9yZGluYXJUZXh0OiAn0J7RgNC00LjQvdCw0YAgLyAxNTAw0YDRg9CxLicsXHJcbiAgICAgICAgcHJpY2U6ICcxODAwINGA0YPQsS4gJ1xyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBpZDogJ3ByZWRpY3Rpb25zbGlkZUdhbWU0JyxcclxuICAgICAgICB0ZWFtT25lTmFtZTogJ9CQ0YLQu9C10YLQuNC60L4nLFxyXG4gICAgICAgIHRlYW1PbmVJY29uOiBhdGxldGljb0ljb24uc3JjLFxyXG4gICAgICAgIHRlYW1Ud29OYW1lOiAn0JDRgtC70LXRgtC40LonLFxyXG4gICAgICAgIHRlYW1Ud29JY29uOiBhdGxldGljSWNvbi5zcmMsXHJcbiAgICAgICAgcHJlZGljdGlvbjoge1xyXG4gICAgICAgICAgICB0aGVyZUlzOiBmYWxzZSxcclxuICAgICAgICAgICAgdG90YWxCZXQ6ICcnLFxyXG4gICAgICAgICAgICBjb2VmZmljZW50OiAnJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgdHlwZTogJ9Ct0LrRgdC/0YDQtdGB0YEnLFxyXG4gICAgICAgIGRhdGU6ICcxNC4wMScsXHJcbiAgICAgICAgdGltZTogJzIyOjMwJyxcclxuICAgICAgICBjb2VmZmljZW50OiAnMS42NycsXHJcbiAgICAgICAgcHJlZGljdGlvbkJ1dHRvbk5hbWU6ICcuc2xpZGUucHJlZF9idXR0b24nLFxyXG4gICAgICAgIGJ1eUJ1dHRvbk5hbWU6ICcuc2xpZGUuYnV5X2J1dHRvbicsXHJcbiAgICAgICAgcHJlZGljdGlvblRleHQ6ICfQpNGD0LvRhdC10Lwg0YLQsSAxLDUgLyDQutC+0Y3RhCAzLDUnLFxyXG4gICAgICAgIG9yZGluYXJUZXh0OiAn0J7RgNC00LjQvdCw0YAgLyAxNTAw0YDRg9CxLicsXHJcbiAgICAgICAgcHJpY2U6ICcxNTAwINGA0YPQsS4nLFxyXG4gICAgICAgIGJ1eUJ1dHRvbk5hbWU6ICcuc2xpZGUuYnV5X2J1dHRvbicsXHJcbiAgICAgICAgYnV5QnV0dG9uTmFtZTogJy5zbGlkZS5idXlfYnV0dG9uJyxcclxuICAgICAgICBwcmVkaWN0aW9uVGV4dDogJ9Ck0YPQu9GF0LXQvCDRgtCxIDEsNSAvINC60L7RjdGEIDMsNScsXHJcbiAgICAgICAgb3JkaW5hclRleHQ6ICfQntGA0LTQuNC90LDRgCAvIDE1MDDRgNGD0LEuJ1xyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBpZDogJ3ByZWRpY3Rpb25zbGlkZUdhbWU1JyxcclxuICAgICAgICB0ZWFtT25lTmFtZTogJ9CQ0YLQu9C10YLQuNC60L4nLFxyXG4gICAgICAgIHRlYW1PbmVJY29uOiBhdGxldGljb0ljb24uc3JjLFxyXG4gICAgICAgIHRlYW1Ud29OYW1lOiAn0JDRgtC70LXRgtC40LonLFxyXG4gICAgICAgIHRlYW1Ud29JY29uOiBhdGxldGljSWNvbi5zcmMsXHJcbiAgICAgICAgcHJlZGljdGlvbjoge1xyXG4gICAgICAgICAgICB0aGVyZUlzOiBmYWxzZSxcclxuICAgICAgICAgICAgdG90YWxCZXQ6ICfRgtCxIDEsNSAvICcsXHJcbiAgICAgICAgICAgIGNvZWZmaWNlbnQ6ICfQutC+0LXRhCAzLDUnXHJcbiAgICAgICAgfSxcclxuICAgICAgICB0eXBlOiAn0K3QutGB0L/RgNC10YHRgScsXHJcbiAgICAgICAgZGF0ZTogJzE0LjAxJyxcclxuICAgICAgICB0aW1lOiAnMjI6MzAnLFxyXG4gICAgICAgIGNvZWZmaWNlbnQ6ICcxLjY3JyxcclxuICAgICAgICBwcmVkaWN0aW9uQnV0dG9uTmFtZTogJy5zbGlkZS5wcmVkX2J1dHRvbicsXHJcbiAgICAgICAgYnV5QnV0dG9uTmFtZTogJy5zbGlkZS5idXlfYnV0dG9uJyxcclxuICAgICAgICBwcmVkaWN0aW9uVGV4dDogJ9Ck0YPQu9GF0LXQvCDRgtCxIDEsNSAvINC60L7RjdGEIDMsNScsXHJcbiAgICAgICAgb3JkaW5hclRleHQ6ICfQntGA0LTQuNC90LDRgCAvIDE1MDDRgNGD0LEuJyxcclxuICAgICAgICBwcmljZTogJzE1MDAg0YDRg9CxLicsXHJcbiAgICAgICAgcHJlZGljdGlvblRleHQ6ICfQpNGD0LvRhdC10Lwg0YLQsSAxLDUgLyDQutC+0Y3RhCAzLDUnLFxyXG4gICAgICAgIGJ1eUJ1dHRvbk5hbWU6ICcuc2xpZGUuYnV5X2J1dHRvbicsXHJcbiAgICAgICAgcHJlZGljdGlvblRleHQ6ICfQpNGD0LvRhdC10Lwg0YLQsSAxLDUgLyDQutC+0Y3RhCAzLDUnLFxyXG4gICAgICAgIG9yZGluYXJUZXh0OiAn0J7RgNC00LjQvdCw0YAgLyAxNTAw0YDRg9CxLidcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgaWQ6ICdwcmVkaWN0aW9uc2xpZGVHYW1lNicsXHJcbiAgICAgICAgdGVhbU9uZU5hbWU6ICfQkNGC0LvQtdGC0LjQutC+JyxcclxuICAgICAgICB0ZWFtT25lSWNvbjogYXRsZXRpY29JY29uLnNyYyxcclxuICAgICAgICB0ZWFtVHdvTmFtZTogJ9CQ0YLQu9C10YLQuNC6JyxcclxuICAgICAgICB0ZWFtVHdvSWNvbjogYXRsZXRpY0ljb24uc3JjLFxyXG4gICAgICAgIHByZWRpY3Rpb246IHtcclxuICAgICAgICAgICAgdGhlcmVJczogZmFsc2UsXHJcbiAgICAgICAgICAgIHRvdGFsQmV0OiAnJyxcclxuICAgICAgICAgICAgY29lZmZpY2VudDogJydcclxuICAgICAgICB9LFxyXG4gICAgICAgIHR5cGU6ICfQrdC60YHQv9GA0LXRgdGBJyxcclxuICAgICAgICBkYXRlOiAnMTQuMDEnLFxyXG4gICAgICAgIHRpbWU6ICcyMjozMCcsXHJcbiAgICAgICAgY29lZmZpY2VudDogJzEuNjcnLFxyXG4gICAgICAgIHByZWRpY3Rpb25CdXR0b25OYW1lOiAnLnNsaWRlLnByZWRfYnV0dG9uJyxcclxuICAgICAgICBidXlCdXR0b25OYW1lOiAnLnNsaWRlLmJ1eV9idXR0b24nLFxyXG4gICAgICAgIHByZWRpY3Rpb25UZXh0OiAn0KTRg9C70YXQtdC8INGC0LEgMSw1IC8g0LrQvtGN0YQgMyw1JyxcclxuICAgICAgICBvcmRpbmFyVGV4dDogJ9Ce0YDQtNC40L3QsNGAIC8gMTUwMNGA0YPQsS4nLFxyXG4gICAgICAgIHByaWNlOiAnMTUwMCDRgNGD0LEuJyxcclxuICAgICAgICBvcmRpbmFyVGV4dDogJ9Ce0YDQtNC40L3QsNGAIC8gMTUwMNGA0YPQsS4nLFxyXG4gICAgICAgIGJ1eUJ1dHRvbk5hbWU6ICcuc2xpZGUuYnV5X2J1dHRvbicsXHJcbiAgICAgICAgcHJlZGljdGlvblRleHQ6ICfQpNGD0LvRhdC10Lwg0YLQsSAxLDUgLyDQutC+0Y3RhCAzLDUnLFxyXG4gICAgICAgIG9yZGluYXJUZXh0OiAn0J7RgNC00LjQvdCw0YAgLyAxNTAw0YDRg9CxLidcclxuICAgIH0sXHJcbl0iXSwic291cmNlUm9vdCI6IiJ9