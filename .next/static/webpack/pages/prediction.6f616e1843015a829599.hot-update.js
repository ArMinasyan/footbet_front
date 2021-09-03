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
          teamOneName: "",
          teamOneIcon: item["team1_img_path"],
          teamTwoName: "",
          teamTwoIcon: item["team2_img_path"],
          prediction: item.prediction,
          type: item.type,
          date: item.date,
          time: item.time,
          coefficent: item.factor,
          predictionButtonName: ".slide.pred_button",
          buyButtonName: ".slide.buy_button",
          predictionText: "Фулхем тб 1,5 / коэф 3,5",
          ordinarText: "".concat(item.type, " / ").concat(item.price, "\u0440\u0443\u0431."),
          price: item.price + " руб."
        };
      }));
    })["catch"](function (error) {});
  }, []);
  console.log(slide_data);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: (_PredictionTab_module_scss__WEBPACK_IMPORTED_MODULE_8___default().container),
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_TabHeader_TabHeader__WEBPACK_IMPORTED_MODULE_5__.TabHeader, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 7
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
              pathname: "/prediction",
              query: {
                game: el.id
              }
            });
          },
          openPayments: click
        }, Math.random(), false, {
          fileName: _jsxFileName,
          lineNumber: 54,
          columnNumber: 11
        }, _this);
      })
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 50,
    columnNumber: 5
  }, this);
}

_s(PredictionTab, "M3SEymWfE/fhYUSEqUgQ5nBe+9Y=", false, function () {
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


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9QYWdlcy9QcmVkaWN0aW9uUGF5bWVudHMvVGFicy9QcmVkaWN0aW9uVGFiL1ByZWRpY3Rpb25UYWIuanN4Il0sIm5hbWVzIjpbIlByZWRpY3Rpb25UYWIiLCJjbGljayIsInVzZVN0YXRlIiwic2xpZGVfZGF0YSIsInNldFNsaWRlRGF0YSIsInJvdXRlciIsInVzZVJvdXRlciIsInVzZUVmZmVjdCIsInJlcXVlc3QiLCJHRVRfUFJFRElDVElPTlMiLCJhdXRoIiwidGhlbiIsInJzcCIsImRhdGEiLCJtYXAiLCJpdGVtIiwiaWQiLCJ0ZWFtT25lTmFtZSIsInRlYW1PbmVJY29uIiwidGVhbVR3b05hbWUiLCJ0ZWFtVHdvSWNvbiIsInByZWRpY3Rpb24iLCJ0eXBlIiwiZGF0ZSIsInRpbWUiLCJjb2VmZmljZW50IiwiZmFjdG9yIiwicHJlZGljdGlvbkJ1dHRvbk5hbWUiLCJidXlCdXR0b25OYW1lIiwicHJlZGljdGlvblRleHQiLCJvcmRpbmFyVGV4dCIsInByaWNlIiwiZXJyb3IiLCJjb25zb2xlIiwibG9nIiwic3R5bGVzIiwiZWwiLCJpIiwicHVzaCIsInBhdGhuYW1lIiwicXVlcnkiLCJnYW1lIiwiTWF0aCIsInJhbmRvbSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0NBRUE7O0NBRUE7O0FBQ0E7Q0FFQTs7QUFDQTtBQUNBO0FBQ0E7QUFFTyxTQUFTQSxhQUFULE9BQWtDO0FBQUE7O0FBQUE7O0FBQUEsTUFBVEMsS0FBUyxRQUFUQSxLQUFTOztBQUFBLGtCQUNKQywrQ0FBUSxDQUFDLEVBQUQsQ0FESjtBQUFBLE1BQ2hDQyxVQURnQztBQUFBLE1BQ3BCQyxZQURvQjs7QUFFdkMsTUFBTUMsTUFBTSxHQUFHQyxrRUFBUyxFQUF4QjtBQUVBQyxrREFBUyxDQUFDLFlBQU07QUFDZEMsd0RBQU8sQ0FBQ0Msc0VBQUQsRUFBa0IsRUFBbEIsRUFBc0I7QUFBRUMsVUFBSSxFQUFFO0FBQVIsS0FBdEIsQ0FBUCxDQUNHQyxJQURILENBQ1EsVUFBQ0MsR0FBRCxFQUFTO0FBQ2I7QUFDQVIsa0JBQVksQ0FDVlEsR0FBRyxDQUFDQyxJQUFKLENBQVNBLElBQVQsQ0FBY0MsR0FBZCxDQUFrQixVQUFDQyxJQUFELEVBQVU7QUFDMUIsZUFBTztBQUNMQyxZQUFFLEVBQUVELElBQUksQ0FBQ0MsRUFESjtBQUVMQyxxQkFBVyxFQUFFLEVBRlI7QUFHTEMscUJBQVcsRUFBRUgsSUFBSSxrQkFIWjtBQUlMSSxxQkFBVyxFQUFFLEVBSlI7QUFLTEMscUJBQVcsRUFBRUwsSUFBSSxrQkFMWjtBQU1MTSxvQkFBVSxFQUFFTixJQUFJLENBQUNNLFVBTlo7QUFPTEMsY0FBSSxFQUFFUCxJQUFJLENBQUNPLElBUE47QUFRTEMsY0FBSSxFQUFFUixJQUFJLENBQUNRLElBUk47QUFTTEMsY0FBSSxFQUFFVCxJQUFJLENBQUNTLElBVE47QUFVTEMsb0JBQVUsRUFBRVYsSUFBSSxDQUFDVyxNQVZaO0FBV0xDLDhCQUFvQixFQUFFLG9CQVhqQjtBQVlMQyx1QkFBYSxFQUFFLG1CQVpWO0FBYUxDLHdCQUFjLEVBQUUsMEJBYlg7QUFjTEMscUJBQVcsWUFBS2YsSUFBSSxDQUFDTyxJQUFWLGdCQUFvQlAsSUFBSSxDQUFDZ0IsS0FBekIsd0JBZE47QUFlTEEsZUFBSyxFQUFFaEIsSUFBSSxDQUFDZ0IsS0FBTCxHQUFhO0FBZmYsU0FBUDtBQWlCRCxPQWxCRCxDQURVLENBQVo7QUFxQkQsS0F4QkgsV0F5QlMsVUFBQ0MsS0FBRCxFQUFXLENBQUUsQ0F6QnRCO0FBMEJELEdBM0JRLEVBMkJOLEVBM0JNLENBQVQ7QUE2QkFDLFNBQU8sQ0FBQ0MsR0FBUixDQUFZL0IsVUFBWjtBQUVBLHNCQUNFO0FBQUssYUFBUyxFQUFFZ0MsNkVBQWhCO0FBQUEsNEJBQ0UsOERBQUMsMkRBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURGLGVBRUU7QUFBSyxlQUFTLEVBQUVBLHlFQUFoQjtBQUFBLGdCQUNHaEMsVUFBVSxDQUFDVyxHQUFYLENBQWUsVUFBQ3NCLEVBQUQsRUFBS0MsQ0FBTDtBQUFBLDRCQUNkLDhEQUFDLHlDQUFEO0FBQ0UsZUFBSyxFQUFFQSxDQUFDLEdBQUcsQ0FEYjtBQUVFLHFCQUFXLEVBQUVELEVBQUUsQ0FBQ25CLFdBRmxCO0FBR0UscUJBQVcsRUFBRW1CLEVBQUUsQ0FBQ2xCLFdBSGxCO0FBSUUscUJBQVcsRUFBRWtCLEVBQUUsQ0FBQ2pCLFdBSmxCO0FBS0UscUJBQVcsRUFBRWlCLEVBQUUsQ0FBQ2hCLFdBTGxCO0FBTUUsY0FBSSxFQUFFZ0IsRUFBRSxDQUFDYixJQU5YO0FBT0UsY0FBSSxFQUFFYSxFQUFFLENBQUNaLElBUFg7QUFRRSxvQkFBVSxFQUFFWSxFQUFFLENBQUNmLFVBUmpCO0FBU0UsY0FBSSxFQUFFZSxFQUFFLENBQUNkLElBVFg7QUFVRSxvQkFBVSxFQUFFYyxFQUFFLENBQUNYLFVBVmpCO0FBV0UsZUFBSyxFQUFFVyxFQUFFLENBQUNMLEtBWFo7QUFhRSxrQkFBUSxFQUFFO0FBQUEsbUJBQ1IxQixNQUFNLENBQUNpQyxJQUFQLENBQVk7QUFDVkMsc0JBQVEsRUFBRSxhQURBO0FBRVZDLG1CQUFLLEVBQUU7QUFBRUMsb0JBQUksRUFBRUwsRUFBRSxDQUFDcEI7QUFBWDtBQUZHLGFBQVosQ0FEUTtBQUFBLFdBYlo7QUFtQkUsc0JBQVksRUFBRWY7QUFuQmhCLFdBWU95QyxJQUFJLENBQUNDLE1BQUwsRUFaUDtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURjO0FBQUEsT0FBZjtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQThCRDs7R0FqRWUzQyxhO1VBRUNNLDhEOzs7S0FGRE4sYSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9wcmVkaWN0aW9uLjZmNjE2ZTE4NDMwMTVhODI5NTk5LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBob29rc1xyXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L2Rpc3QvY2xpZW50L3JvdXRlclwiO1xyXG4vLyBkYXRhc1xyXG5pbXBvcnQgeyBwcmVkaWN0aW9ucyB9IGZyb20gXCIvc3JjL2dhbWVzX2RhdGEvcHJlZGljdGlvbnMvcHJlZGljdGlvbnNcIjtcclxuLy8gY29tcG9uZW50c1xyXG5pbXBvcnQgeyBSb3cgfSBmcm9tIFwiLi4vUm93L1Jvd1wiO1xyXG5pbXBvcnQgeyBUYWJIZWFkZXIgfSBmcm9tIFwiLi4vVGFiSGVhZGVyL1RhYkhlYWRlclwiO1xyXG4vLyBzdHlsZXNcclxuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi9QcmVkaWN0aW9uVGFiLm1vZHVsZS5zY3NzXCI7XHJcbmltcG9ydCB7IEdFVF9QUkVESUNUSU9OUyB9IGZyb20gXCIvbGliL3JlcXVlc3QtZGVzdGluYXRpb25zXCI7XHJcbmltcG9ydCB7IHJlcXVlc3QgfSBmcm9tIFwiL2xpYi9lci5saWJcIjtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBQcmVkaWN0aW9uVGFiKHsgY2xpY2sgfSkge1xyXG4gIGNvbnN0IFtzbGlkZV9kYXRhLCBzZXRTbGlkZURhdGFdID0gdXNlU3RhdGUoW10pO1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgcmVxdWVzdChHRVRfUFJFRElDVElPTlMsIHt9LCB7IGF1dGg6IHRydWUgfSlcclxuICAgICAgLnRoZW4oKHJzcCkgPT4ge1xyXG4gICAgICAgIC8vIHRvYXN0KGBTdWNjZXNzZnVsbHkgcmVnaXN0ZXJlZGApXHJcbiAgICAgICAgc2V0U2xpZGVEYXRhKFxyXG4gICAgICAgICAgcnNwLmRhdGEuZGF0YS5tYXAoKGl0ZW0pID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICBpZDogaXRlbS5pZCxcclxuICAgICAgICAgICAgICB0ZWFtT25lTmFtZTogXCJcIixcclxuICAgICAgICAgICAgICB0ZWFtT25lSWNvbjogaXRlbVtgdGVhbTFfaW1nX3BhdGhgXSxcclxuICAgICAgICAgICAgICB0ZWFtVHdvTmFtZTogXCJcIixcclxuICAgICAgICAgICAgICB0ZWFtVHdvSWNvbjogaXRlbVtgdGVhbTJfaW1nX3BhdGhgXSxcclxuICAgICAgICAgICAgICBwcmVkaWN0aW9uOiBpdGVtLnByZWRpY3Rpb24sXHJcbiAgICAgICAgICAgICAgdHlwZTogaXRlbS50eXBlLFxyXG4gICAgICAgICAgICAgIGRhdGU6IGl0ZW0uZGF0ZSxcclxuICAgICAgICAgICAgICB0aW1lOiBpdGVtLnRpbWUsXHJcbiAgICAgICAgICAgICAgY29lZmZpY2VudDogaXRlbS5mYWN0b3IsXHJcbiAgICAgICAgICAgICAgcHJlZGljdGlvbkJ1dHRvbk5hbWU6IFwiLnNsaWRlLnByZWRfYnV0dG9uXCIsXHJcbiAgICAgICAgICAgICAgYnV5QnV0dG9uTmFtZTogXCIuc2xpZGUuYnV5X2J1dHRvblwiLFxyXG4gICAgICAgICAgICAgIHByZWRpY3Rpb25UZXh0OiBcItCk0YPQu9GF0LXQvCDRgtCxIDEsNSAvINC60L7RjdGEIDMsNVwiLFxyXG4gICAgICAgICAgICAgIG9yZGluYXJUZXh0OiBgJHtpdGVtLnR5cGV9IC8gJHtpdGVtLnByaWNlfdGA0YPQsS5gLFxyXG4gICAgICAgICAgICAgIHByaWNlOiBpdGVtLnByaWNlICsgXCIg0YDRg9CxLlwiLFxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgfSlcclxuICAgICAgICApO1xyXG4gICAgICB9KVxyXG4gICAgICAuY2F0Y2goKGVycm9yKSA9PiB7fSk7XHJcbiAgfSwgW10pO1xyXG5cclxuICBjb25zb2xlLmxvZyhzbGlkZV9kYXRhKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfT5cclxuICAgICAgPFRhYkhlYWRlciAvPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmJvYXJkfT5cclxuICAgICAgICB7c2xpZGVfZGF0YS5tYXAoKGVsLCBpKSA9PiAoXHJcbiAgICAgICAgICA8Um93XHJcbiAgICAgICAgICAgIG9yZGVyPXtpICsgMX1cclxuICAgICAgICAgICAgdGVhbU9uZU5hbWU9e2VsLnRlYW1PbmVOYW1lfVxyXG4gICAgICAgICAgICB0ZWFtT25lSWNvbj17ZWwudGVhbU9uZUljb259XHJcbiAgICAgICAgICAgIHRlYW1Ud29OYW1lPXtlbC50ZWFtVHdvTmFtZX1cclxuICAgICAgICAgICAgdGVhbVR3b0ljb249e2VsLnRlYW1Ud29JY29ufVxyXG4gICAgICAgICAgICBkYXRlPXtlbC5kYXRlfVxyXG4gICAgICAgICAgICB0aW1lPXtlbC50aW1lfVxyXG4gICAgICAgICAgICBwcmVkaWN0aW9uPXtlbC5wcmVkaWN0aW9ufVxyXG4gICAgICAgICAgICB0eXBlPXtlbC50eXBlfVxyXG4gICAgICAgICAgICBjb2VmZmljZW50PXtlbC5jb2VmZmljZW50fVxyXG4gICAgICAgICAgICBwcmljZT17ZWwucHJpY2V9XHJcbiAgICAgICAgICAgIGtleT17TWF0aC5yYW5kb20oKX1cclxuICAgICAgICAgICAgY2xpY2tCdXk9eygpID0+XHJcbiAgICAgICAgICAgICAgcm91dGVyLnB1c2goe1xyXG4gICAgICAgICAgICAgICAgcGF0aG5hbWU6IFwiL3ByZWRpY3Rpb25cIixcclxuICAgICAgICAgICAgICAgIHF1ZXJ5OiB7IGdhbWU6IGVsLmlkIH0sXHJcbiAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBvcGVuUGF5bWVudHM9e2NsaWNrfVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICApKX1cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=