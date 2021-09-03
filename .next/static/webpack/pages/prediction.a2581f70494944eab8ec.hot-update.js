self["webpackHotUpdate_N_E"]("pages/prediction",{

/***/ "./components/Pages/PredictionPayments/Tabs/PaymentTab/PaymentTab.jsx":
/*!****************************************************************************!*\
  !*** ./components/Pages/PredictionPayments/Tabs/PaymentTab/PaymentTab.jsx ***!
  \****************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PaymentTab": function() { return /* binding */ PaymentTab; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_dist_client_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/client/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_dist_client_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_dist_client_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _src_games_data_extra_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../src/games_data/extra_data */ "./src/games_data/extra_data.js");
/* harmony import */ var _GameInfo_GameInfo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./GameInfo/GameInfo */ "./components/Pages/PredictionPayments/Tabs/PaymentTab/GameInfo/GameInfo.jsx");
/* harmony import */ var _PaymentPart_PaymentPart__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./PaymentPart/PaymentPart */ "./components/Pages/PredictionPayments/Tabs/PaymentTab/PaymentPart/PaymentPart.jsx");
/* harmony import */ var _PaymentTab_module_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./PaymentTab.module.scss */ "./components/Pages/PredictionPayments/Tabs/PaymentTab/PaymentTab.module.scss");
/* harmony import */ var _PaymentTab_module_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_PaymentTab_module_scss__WEBPACK_IMPORTED_MODULE_5__);
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "C:\\Users\\Admin\\Desktop\\projects\\foot-bet\\components\\Pages\\PredictionPayments\\Tabs\\PaymentTab\\PaymentTab.jsx",
    _s = $RefreshSig$();

// hooks 
 // db's

 // components


 // styles 


function PaymentTab() {
  _s();

  var _router$query, _router$query$game, _router$query2, _router$query2$game;

  var router = (0,next_dist_client_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)(),
      // find which type of game user want buy
  game_path_in_extradata = (_router$query = router.query) === null || _router$query === void 0 ? void 0 : (_router$query$game = _router$query.game) === null || _router$query$game === void 0 ? void 0 : _router$query$game.slice(0, router.query.game.indexOf('Game')),
      // find exactly which game user want buy
  game_id = (_router$query2 = router.query) === null || _router$query2 === void 0 ? void 0 : (_router$query2$game = _router$query2.game) === null || _router$query2$game === void 0 ? void 0 : _router$query2$game.slice("?"),
      // find game 
  get_game_data = function get_game_data(gameType, db) {
    switch (gameType) {
      case "express":
        return db.express.filter(function (el) {
          return el.id === game_id;
        });

      case "invinsibleStgy":
        return db.invinsibleStgy.filter(function (el) {
          return el.id === game_id;
        });

      case "ordinar":
        return db.ordinar.filter(function (el) {
          return el.id === game_id;
        });

      case "todayMatches":
        return db.todayMatches.filter(function (el) {
          return el.id === game_id;
        });

      case "predictionspage":
        return db.predictionspage.filter(function (el) {
          return el.id === game_id;
        });

      case "predictionslide":
        return db.predictionslide.filter(function (el) {
          return el.id === game_id;
        });

      default:
        return [];
    }
  },
      game_data = get_game_data(game_path_in_extradata, _src_games_data_extra_data__WEBPACK_IMPORTED_MODULE_2__.extra_data);

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: (_PaymentTab_module_scss__WEBPACK_IMPORTED_MODULE_5___default().container),
    children: [game_path_in_extradata !== undefined && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_GameInfo_GameInfo__WEBPACK_IMPORTED_MODULE_3__.GameInfo, {
      game: game_data[0]
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 17
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_PaymentPart_PaymentPart__WEBPACK_IMPORTED_MODULE_4__.PaymentPart, {
      game: game_data[0]
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 42,
    columnNumber: 9
  }, this);
}

_s(PaymentTab, "fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=", false, function () {
  return [next_dist_client_router__WEBPACK_IMPORTED_MODULE_1__.useRouter];
});

_c = PaymentTab;

var _c;

$RefreshReg$(_c, "PaymentTab");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9QYWdlcy9QcmVkaWN0aW9uUGF5bWVudHMvVGFicy9QYXltZW50VGFiL1BheW1lbnRUYWIuanN4Il0sIm5hbWVzIjpbIlBheW1lbnRUYWIiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJnYW1lX3BhdGhfaW5fZXh0cmFkYXRhIiwicXVlcnkiLCJnYW1lIiwic2xpY2UiLCJpbmRleE9mIiwiZ2FtZV9pZCIsImdldF9nYW1lX2RhdGEiLCJnYW1lVHlwZSIsImRiIiwiZXhwcmVzcyIsImZpbHRlciIsImVsIiwiaWQiLCJpbnZpbnNpYmxlU3RneSIsIm9yZGluYXIiLCJ0b2RheU1hdGNoZXMiLCJwcmVkaWN0aW9uc3BhZ2UiLCJwcmVkaWN0aW9uc2xpZGUiLCJnYW1lX2RhdGEiLCJleHRyYV9kYXRhIiwic3R5bGVzIiwidW5kZWZpbmVkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Q0FFQTs7Q0FFQTs7QUFDQTtDQUVBOztBQUNBO0FBRU8sU0FBU0EsVUFBVCxHQUFzQjtBQUFBOztBQUFBOztBQUV6QixNQUNJQyxNQUFNLEdBQUdDLGtFQUFTLEVBRHRCO0FBQUEsTUFFSTtBQUNBQyx3QkFBc0Isb0JBQUdGLE1BQU0sQ0FBQ0csS0FBVix3RUFBRyxjQUFjQyxJQUFqQix1REFBRyxtQkFBb0JDLEtBQXBCLENBQTBCLENBQTFCLEVBQTZCTCxNQUFNLENBQUNHLEtBQVAsQ0FBYUMsSUFBYixDQUFrQkUsT0FBbEIsQ0FBMEIsTUFBMUIsQ0FBN0IsQ0FIN0I7QUFBQSxNQUlJO0FBQ0FDLFNBQU8scUJBQUdQLE1BQU0sQ0FBQ0csS0FBViwwRUFBRyxlQUFjQyxJQUFqQix3REFBRyxvQkFBb0JDLEtBQXBCLENBQTBCLEdBQTFCLENBTGQ7QUFBQSxNQU1JO0FBQ0FHLGVBQWEsR0FBRyxTQUFoQkEsYUFBZ0IsQ0FBQ0MsUUFBRCxFQUFXQyxFQUFYLEVBQWtCO0FBQzlCLFlBQVFELFFBQVI7QUFDSSxXQUFLLFNBQUw7QUFDSSxlQUFPQyxFQUFFLENBQUNDLE9BQUgsQ0FBV0MsTUFBWCxDQUFrQixVQUFBQyxFQUFFO0FBQUEsaUJBQUlBLEVBQUUsQ0FBQ0MsRUFBSCxLQUFVUCxPQUFkO0FBQUEsU0FBcEIsQ0FBUDs7QUFDSixXQUFLLGdCQUFMO0FBQ0ksZUFBT0csRUFBRSxDQUFDSyxjQUFILENBQWtCSCxNQUFsQixDQUF5QixVQUFBQyxFQUFFO0FBQUEsaUJBQUlBLEVBQUUsQ0FBQ0MsRUFBSCxLQUFVUCxPQUFkO0FBQUEsU0FBM0IsQ0FBUDs7QUFDSixXQUFLLFNBQUw7QUFDSSxlQUFPRyxFQUFFLENBQUNNLE9BQUgsQ0FBV0osTUFBWCxDQUFrQixVQUFBQyxFQUFFO0FBQUEsaUJBQUlBLEVBQUUsQ0FBQ0MsRUFBSCxLQUFVUCxPQUFkO0FBQUEsU0FBcEIsQ0FBUDs7QUFDSixXQUFLLGNBQUw7QUFDSSxlQUFPRyxFQUFFLENBQUNPLFlBQUgsQ0FBZ0JMLE1BQWhCLENBQXVCLFVBQUFDLEVBQUU7QUFBQSxpQkFBSUEsRUFBRSxDQUFDQyxFQUFILEtBQVVQLE9BQWQ7QUFBQSxTQUF6QixDQUFQOztBQUNKLFdBQUssaUJBQUw7QUFDSSxlQUFPRyxFQUFFLENBQUNRLGVBQUgsQ0FBbUJOLE1BQW5CLENBQTBCLFVBQUFDLEVBQUU7QUFBQSxpQkFBSUEsRUFBRSxDQUFDQyxFQUFILEtBQVVQLE9BQWQ7QUFBQSxTQUE1QixDQUFQOztBQUNKLFdBQUssaUJBQUw7QUFDSSxlQUFPRyxFQUFFLENBQUNTLGVBQUgsQ0FBbUJQLE1BQW5CLENBQTBCLFVBQUFDLEVBQUU7QUFBQSxpQkFBSUEsRUFBRSxDQUFDQyxFQUFILEtBQVVQLE9BQWQ7QUFBQSxTQUE1QixDQUFQOztBQUNKO0FBQ0ksZUFBTyxFQUFQO0FBZFI7QUFnQkgsR0F4Qkw7QUFBQSxNQTBCSWEsU0FBUyxHQUFHWixhQUFhLENBQUNOLHNCQUFELEVBQXlCbUIsa0VBQXpCLENBMUI3Qjs7QUE0QkEsc0JBQ0k7QUFBSyxhQUFTLEVBQUVDLDBFQUFoQjtBQUFBLGVBQ0twQixzQkFBc0IsS0FBS3FCLFNBQTNCLGlCQUNHLDhEQUFDLHdEQUFEO0FBQVUsVUFBSSxFQUFFSCxTQUFTLENBQUMsQ0FBRDtBQUF6QjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBRlIsZUFJSSw4REFBQyxpRUFBRDtBQUFhLFVBQUksRUFBRUEsU0FBUyxDQUFDLENBQUQ7QUFBNUI7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUpKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURKO0FBUUg7O0dBdENlckIsVTtVQUdDRSw4RDs7O0tBSERGLFUiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcHJlZGljdGlvbi5hMjU4MWY3MDQ5NDk0NGVhYjhlYy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gaG9va3MgXHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L2Rpc3QvY2xpZW50L3JvdXRlclwiXHJcbi8vIGRiJ3NcclxuaW1wb3J0IHsgZXh0cmFfZGF0YSB9IGZyb20gXCIvc3JjL2dhbWVzX2RhdGEvZXh0cmFfZGF0YVwiO1xyXG4vLyBjb21wb25lbnRzXHJcbmltcG9ydCB7IEdhbWVJbmZvIH0gZnJvbSBcIi4vR2FtZUluZm8vR2FtZUluZm9cIjtcclxuaW1wb3J0IHsgUGF5bWVudFBhcnQgfSBmcm9tIFwiLi9QYXltZW50UGFydC9QYXltZW50UGFydFwiO1xyXG4vLyBzdHlsZXMgXHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9QYXltZW50VGFiLm1vZHVsZS5zY3NzJ1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIFBheW1lbnRUYWIoKSB7XHJcblxyXG4gICAgY29uc3RcclxuICAgICAgICByb3V0ZXIgPSB1c2VSb3V0ZXIoKSxcclxuICAgICAgICAvLyBmaW5kIHdoaWNoIHR5cGUgb2YgZ2FtZSB1c2VyIHdhbnQgYnV5XHJcbiAgICAgICAgZ2FtZV9wYXRoX2luX2V4dHJhZGF0YSA9IHJvdXRlci5xdWVyeT8uZ2FtZT8uc2xpY2UoMCwgcm91dGVyLnF1ZXJ5LmdhbWUuaW5kZXhPZignR2FtZScpKSxcclxuICAgICAgICAvLyBmaW5kIGV4YWN0bHkgd2hpY2ggZ2FtZSB1c2VyIHdhbnQgYnV5XHJcbiAgICAgICAgZ2FtZV9pZCA9IHJvdXRlci5xdWVyeT8uZ2FtZT8uc2xpY2UoXCI/XCIpLFxyXG4gICAgICAgIC8vIGZpbmQgZ2FtZSBcclxuICAgICAgICBnZXRfZ2FtZV9kYXRhID0gKGdhbWVUeXBlLCBkYikgPT4ge1xyXG4gICAgICAgICAgICBzd2l0Y2ggKGdhbWVUeXBlKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlIFwiZXhwcmVzc1wiOlxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBkYi5leHByZXNzLmZpbHRlcihlbCA9PiBlbC5pZCA9PT0gZ2FtZV9pZClcclxuICAgICAgICAgICAgICAgIGNhc2UgXCJpbnZpbnNpYmxlU3RneVwiOlxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBkYi5pbnZpbnNpYmxlU3RneS5maWx0ZXIoZWwgPT4gZWwuaWQgPT09IGdhbWVfaWQpXHJcbiAgICAgICAgICAgICAgICBjYXNlIFwib3JkaW5hclwiOlxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBkYi5vcmRpbmFyLmZpbHRlcihlbCA9PiBlbC5pZCA9PT0gZ2FtZV9pZClcclxuICAgICAgICAgICAgICAgIGNhc2UgXCJ0b2RheU1hdGNoZXNcIjpcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZGIudG9kYXlNYXRjaGVzLmZpbHRlcihlbCA9PiBlbC5pZCA9PT0gZ2FtZV9pZClcclxuICAgICAgICAgICAgICAgIGNhc2UgXCJwcmVkaWN0aW9uc3BhZ2VcIjpcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZGIucHJlZGljdGlvbnNwYWdlLmZpbHRlcihlbCA9PiBlbC5pZCA9PT0gZ2FtZV9pZClcclxuICAgICAgICAgICAgICAgIGNhc2UgXCJwcmVkaWN0aW9uc2xpZGVcIjpcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZGIucHJlZGljdGlvbnNsaWRlLmZpbHRlcihlbCA9PiBlbC5pZCA9PT0gZ2FtZV9pZClcclxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFtdXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG5cclxuICAgICAgICBnYW1lX2RhdGEgPSBnZXRfZ2FtZV9kYXRhKGdhbWVfcGF0aF9pbl9leHRyYWRhdGEsIGV4dHJhX2RhdGEpXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn0+XHJcbiAgICAgICAgICAgIHtnYW1lX3BhdGhfaW5fZXh0cmFkYXRhICE9PSB1bmRlZmluZWQgJiZcclxuICAgICAgICAgICAgICAgIDxHYW1lSW5mbyBnYW1lPXtnYW1lX2RhdGFbMF19IC8+XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgPFBheW1lbnRQYXJ0IGdhbWU9e2dhbWVfZGF0YVswXX0gLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9