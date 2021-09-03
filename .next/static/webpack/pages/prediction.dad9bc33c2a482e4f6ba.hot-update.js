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
          prediction: 'test',
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
  console.log(slide_data);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: (_PredictionTab_module_scss__WEBPACK_IMPORTED_MODULE_8___default().container),
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_TabHeader_TabHeader__WEBPACK_IMPORTED_MODULE_5__.TabHeader, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 51,
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
          lineNumber: 55,
          columnNumber: 25
        }, _this);
      })
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 50,
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


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9QYWdlcy9QcmVkaWN0aW9uUGF5bWVudHMvVGFicy9QcmVkaWN0aW9uVGFiL1ByZWRpY3Rpb25UYWIuanN4Il0sIm5hbWVzIjpbIlByZWRpY3Rpb25UYWIiLCJjbGljayIsInVzZVN0YXRlIiwic2xpZGVfZGF0YSIsInNldFNsaWRlRGF0YSIsInJvdXRlciIsInVzZVJvdXRlciIsInVzZUVmZmVjdCIsInJlcXVlc3QiLCJHRVRfUFJFRElDVElPTlMiLCJhdXRoIiwidGhlbiIsInJzcCIsImRhdGEiLCJtYXAiLCJpdGVtIiwiaWQiLCJ0ZWFtT25lTmFtZSIsInRlYW1PbmVJY29uIiwidGVhbVR3b05hbWUiLCJ0ZWFtVHdvSWNvbiIsInByZWRpY3Rpb24iLCJ0eXBlIiwiZGF0ZSIsInRpbWUiLCJjb2VmZmljZW50IiwiZmFjdG9yIiwicHJlZGljdGlvbkJ1dHRvbk5hbWUiLCJidXlCdXR0b25OYW1lIiwicHJlZGljdGlvblRleHQiLCJvcmRpbmFyVGV4dCIsInByaWNlIiwiZXJyb3IiLCJjb25zb2xlIiwibG9nIiwic3R5bGVzIiwiZWwiLCJpIiwicHVzaCIsInBhdGhuYW1lIiwicXVlcnkiLCJnYW1lIiwiTWF0aCIsInJhbmRvbSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0NBRUE7O0NBRUE7O0FBQ0E7Q0FFQTs7QUFDQTtBQUNBO0FBQ0E7QUFHTyxTQUFTQSxhQUFULE9BQWtDO0FBQUE7O0FBQUE7O0FBQUEsTUFBVEMsS0FBUyxRQUFUQSxLQUFTOztBQUFBLGtCQUVBQywrQ0FBUSxDQUFDLEVBQUQsQ0FGUjtBQUFBLE1BRTdCQyxVQUY2QjtBQUFBLE1BRWpCQyxZQUZpQjs7QUFHckMsTUFBTUMsTUFBTSxHQUFHQyxrRUFBUyxFQUF4QjtBQUVBQyxrREFBUyxDQUFFLFlBQUs7QUFDWkMsd0RBQU8sQ0FBRUMsc0VBQUYsRUFBbUIsRUFBbkIsRUFBdUI7QUFBRUMsVUFBSSxFQUFFO0FBQVIsS0FBdkIsQ0FBUCxDQUNLQyxJQURMLENBQ1csVUFBQUMsR0FBRyxFQUFJO0FBQ1Y7QUFDQVIsa0JBQVksQ0FBRVEsR0FBRyxDQUFDQyxJQUFKLENBQVNBLElBQVQsQ0FBY0MsR0FBZCxDQUFtQixVQUFBQyxJQUFJLEVBQUk7QUFDckMsZUFBTztBQUNIQyxZQUFFLEVBQUVELElBQUksQ0FBQ0MsRUFETjtBQUVIQyxxQkFBVyxFQUFFLEVBRlY7QUFHSEMscUJBQVcsRUFBRUgsSUFBSSxrQkFIZDtBQUlISSxxQkFBVyxFQUFFLEVBSlY7QUFLSEMscUJBQVcsRUFBRUwsSUFBSSxrQkFMZDtBQU1ITSxvQkFBVSxFQUFFLE1BTlQ7QUFPSEMsY0FBSSxFQUFFUCxJQUFJLENBQUNPLElBUFI7QUFRSEMsY0FBSSxFQUFFUixJQUFJLENBQUNRLElBUlI7QUFTSEMsY0FBSSxFQUFFVCxJQUFJLENBQUNTLElBVFI7QUFVSEMsb0JBQVUsRUFBRVYsSUFBSSxDQUFDVyxNQVZkO0FBV0hDLDhCQUFvQixFQUFFLG9CQVhuQjtBQVlIQyx1QkFBYSxFQUFFLG1CQVpaO0FBYUhDLHdCQUFjLEVBQUUsMEJBYmI7QUFjSEMscUJBQVcsWUFBS2YsSUFBSSxDQUFDTyxJQUFWLGdCQUFvQlAsSUFBSSxDQUFDZ0IsS0FBekIsd0JBZFI7QUFlSEEsZUFBSyxFQUFFaEIsSUFBSSxDQUFDZ0IsS0FBTCxHQUFhO0FBZmpCLFNBQVA7QUFpQkgsT0FsQmEsQ0FBRixDQUFaO0FBbUJILEtBdEJMLFdBdUJZLFVBQUFDLEtBQUssRUFBSSxDQUFFLENBdkJ2QjtBQXdCSCxHQXpCUSxFQXlCTixFQXpCTSxDQUFUO0FBMkJBQyxTQUFPLENBQUNDLEdBQVIsQ0FBWS9CLFVBQVo7QUFFQSxzQkFDSTtBQUFLLGFBQVMsRUFBRWdDLDZFQUFoQjtBQUFBLDRCQUNJLDhEQUFDLDJEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFESixlQUVJO0FBQUssZUFBUyxFQUFFQSx5RUFBaEI7QUFBQSxnQkFFUWhDLFVBQVUsQ0FBQ1csR0FBWCxDQUFlLFVBQUNzQixFQUFELEVBQUtDLENBQUw7QUFBQSw0QkFDWCw4REFBQyx5Q0FBRDtBQUNJLGVBQUssRUFBRUEsQ0FBQyxHQUFHLENBRGY7QUFFSSxxQkFBVyxFQUFFRCxFQUFFLENBQUNuQixXQUZwQjtBQUdJLHFCQUFXLEVBQUVtQixFQUFFLENBQUNsQixXQUhwQjtBQUlJLHFCQUFXLEVBQUVrQixFQUFFLENBQUNqQixXQUpwQjtBQUtJLHFCQUFXLEVBQUVpQixFQUFFLENBQUNoQixXQUxwQjtBQU1JLGNBQUksRUFBRWdCLEVBQUUsQ0FBQ2IsSUFOYjtBQU9JLGNBQUksRUFBRWEsRUFBRSxDQUFDWixJQVBiO0FBUUksb0JBQVUsRUFBRVksRUFBRSxDQUFDZixVQVJuQjtBQVNJLGNBQUksRUFBRWUsRUFBRSxDQUFDZCxJQVRiO0FBVUksb0JBQVUsRUFBRWMsRUFBRSxDQUFDWCxVQVZuQjtBQVdJLGVBQUssRUFBRVcsRUFBRSxDQUFDTCxLQVhkO0FBYUksa0JBQVEsRUFBRTtBQUFBLG1CQUNOMUIsTUFBTSxDQUFDaUMsSUFBUCxDQUFZO0FBQ1JDLHNCQUFRLEVBQUUsYUFERjtBQUVSQyxtQkFBSyxFQUFFO0FBQUVDLG9CQUFJLEVBQUVMLEVBQUUsQ0FBQ3BCO0FBQVg7QUFGQyxhQUFaLENBRE07QUFBQSxXQWJkO0FBbUJJLHNCQUFZLEVBQUVmO0FBbkJsQixXQVlTeUMsSUFBSSxDQUFDQyxNQUFMLEVBWlQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFEVztBQUFBLE9BQWY7QUFGUjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBRko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREo7QUFnQ0g7O0dBbEVlM0MsYTtVQUdHTSw4RDs7O0tBSEhOLGEiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcHJlZGljdGlvbi5kYWQ5YmMzM2MyYTQ4MmU0ZjZiYS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gaG9va3NcclxuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9kaXN0L2NsaWVudC9yb3V0ZXInO1xyXG4vLyBkYXRhc1xyXG5pbXBvcnQgeyBwcmVkaWN0aW9ucyB9IGZyb20gJy9zcmMvZ2FtZXNfZGF0YS9wcmVkaWN0aW9ucy9wcmVkaWN0aW9ucydcclxuLy8gY29tcG9uZW50c1xyXG5pbXBvcnQgeyBSb3cgfSBmcm9tICcuLi9Sb3cvUm93J1xyXG5pbXBvcnQgeyBUYWJIZWFkZXIgfSBmcm9tICcuLi9UYWJIZWFkZXIvVGFiSGVhZGVyJztcclxuLy8gc3R5bGVzXHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9QcmVkaWN0aW9uVGFiLm1vZHVsZS5zY3NzJ1xyXG5pbXBvcnQgeyBHRVRfUFJFRElDVElPTlMgfSBmcm9tICcvbGliL3JlcXVlc3QtZGVzdGluYXRpb25zJ1xyXG5pbXBvcnQgeyByZXF1ZXN0IH0gZnJvbSAnL2xpYi9lci5saWInXHJcblxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIFByZWRpY3Rpb25UYWIoeyBjbGljayB9KSB7XHJcblxyXG4gICAgY29uc3QgWyBzbGlkZV9kYXRhLCBzZXRTbGlkZURhdGEgXSA9IHVzZVN0YXRlKFtdKVxyXG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcclxuXHJcbiAgICB1c2VFZmZlY3QoICgpPT4ge1xyXG4gICAgICAgIHJlcXVlc3QoIEdFVF9QUkVESUNUSU9OUywge30sIHsgYXV0aDogdHJ1ZSB9IClcclxuICAgICAgICAgICAgLnRoZW4oIHJzcCA9PiB7XHJcbiAgICAgICAgICAgICAgICAvLyB0b2FzdChgU3VjY2Vzc2Z1bGx5IHJlZ2lzdGVyZWRgKVxyXG4gICAgICAgICAgICAgICAgc2V0U2xpZGVEYXRhKCByc3AuZGF0YS5kYXRhLm1hcCggaXRlbSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWQ6IGl0ZW0uaWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRlYW1PbmVOYW1lOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGVhbU9uZUljb246IGl0ZW1bYHRlYW0xX2ltZ19wYXRoYF0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRlYW1Ud29OYW1lOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGVhbVR3b0ljb246IGl0ZW1bYHRlYW0yX2ltZ19wYXRoYF0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHByZWRpY3Rpb246ICd0ZXN0JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogaXRlbS50eXBlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRlOiBpdGVtLmRhdGUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpbWU6IGl0ZW0udGltZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29lZmZpY2VudDogaXRlbS5mYWN0b3IsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHByZWRpY3Rpb25CdXR0b25OYW1lOiAnLnNsaWRlLnByZWRfYnV0dG9uJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnV5QnV0dG9uTmFtZTogJy5zbGlkZS5idXlfYnV0dG9uJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgcHJlZGljdGlvblRleHQ6ICfQpNGD0LvRhdC10Lwg0YLQsSAxLDUgLyDQutC+0Y3RhCAzLDUnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvcmRpbmFyVGV4dDogYCR7aXRlbS50eXBlfSAvICR7aXRlbS5wcmljZX3RgNGD0LEuYCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgcHJpY2U6IGl0ZW0ucHJpY2UgKyAnINGA0YPQsS4nXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSkpXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5jYXRjaCggZXJyb3IgPT4ge30pXHJcbiAgICB9LCBbXSApO1xyXG5cclxuICAgIGNvbnNvbGUubG9nKHNsaWRlX2RhdGEpO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9PlxyXG4gICAgICAgICAgICA8VGFiSGVhZGVyIC8+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYm9hcmR9PlxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHNsaWRlX2RhdGEubWFwKChlbCwgaSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Um93XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcmRlcj17aSArIDF9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZWFtT25lTmFtZT17ZWwudGVhbU9uZU5hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZWFtT25lSWNvbj17ZWwudGVhbU9uZUljb259XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZWFtVHdvTmFtZT17ZWwudGVhbVR3b05hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZWFtVHdvSWNvbj17ZWwudGVhbVR3b0ljb259XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRlPXtlbC5kYXRlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGltZT17ZWwudGltZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByZWRpY3Rpb249e2VsLnByZWRpY3Rpb259XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPXtlbC50eXBlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29lZmZpY2VudD17ZWwuY29lZmZpY2VudH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByaWNlPXtlbC5wcmljZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17TWF0aC5yYW5kb20oKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrQnV5PXsoKSA9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvdXRlci5wdXNoKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGF0aG5hbWU6ICcvcHJlZGljdGlvbicsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHF1ZXJ5OiB7IGdhbWU6IGVsLmlkIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3BlblBheW1lbnRzPXtjbGlja31cclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICApKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9