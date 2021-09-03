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
          prediction: item.prediction,
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
      lineNumber: 49,
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
          lineNumber: 53,
          columnNumber: 25
        }, _this);
      })
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 48,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9QYWdlcy9QcmVkaWN0aW9uUGF5bWVudHMvVGFicy9QcmVkaWN0aW9uVGFiL1ByZWRpY3Rpb25UYWIuanN4Il0sIm5hbWVzIjpbIlByZWRpY3Rpb25UYWIiLCJjbGljayIsInVzZVN0YXRlIiwic2xpZGVfZGF0YSIsInNldFNsaWRlRGF0YSIsInJvdXRlciIsInVzZVJvdXRlciIsInVzZUVmZmVjdCIsInJlcXVlc3QiLCJHRVRfUFJFRElDVElPTlMiLCJhdXRoIiwidGhlbiIsInJzcCIsImRhdGEiLCJtYXAiLCJpdGVtIiwiaWQiLCJ0ZWFtT25lTmFtZSIsInRlYW1PbmVJY29uIiwidGVhbVR3b05hbWUiLCJ0ZWFtVHdvSWNvbiIsInByZWRpY3Rpb24iLCJ0eXBlIiwiZGF0ZSIsInRpbWUiLCJjb2VmZmljZW50IiwiZmFjdG9yIiwicHJlZGljdGlvbkJ1dHRvbk5hbWUiLCJidXlCdXR0b25OYW1lIiwicHJlZGljdGlvblRleHQiLCJvcmRpbmFyVGV4dCIsInByaWNlIiwiZXJyb3IiLCJzdHlsZXMiLCJlbCIsImkiLCJwdXNoIiwicGF0aG5hbWUiLCJxdWVyeSIsImdhbWUiLCJNYXRoIiwicmFuZG9tIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7Q0FFQTs7Q0FFQTs7QUFDQTtDQUVBOztBQUNBO0FBQ0E7QUFDQTtBQUdPLFNBQVNBLGFBQVQsT0FBa0M7QUFBQTs7QUFBQTs7QUFBQSxNQUFUQyxLQUFTLFFBQVRBLEtBQVM7O0FBQUEsa0JBRUFDLCtDQUFRLENBQUMsRUFBRCxDQUZSO0FBQUEsTUFFN0JDLFVBRjZCO0FBQUEsTUFFakJDLFlBRmlCOztBQUdyQyxNQUFNQyxNQUFNLEdBQUdDLGtFQUFTLEVBQXhCO0FBRUFDLGtEQUFTLENBQUUsWUFBSztBQUNaQyx3REFBTyxDQUFFQyxzRUFBRixFQUFtQixFQUFuQixFQUF1QjtBQUFFQyxVQUFJLEVBQUU7QUFBUixLQUF2QixDQUFQLENBQ0tDLElBREwsQ0FDVyxVQUFBQyxHQUFHLEVBQUk7QUFDVjtBQUNBUixrQkFBWSxDQUFFUSxHQUFHLENBQUNDLElBQUosQ0FBU0EsSUFBVCxDQUFjQyxHQUFkLENBQW1CLFVBQUFDLElBQUksRUFBSTtBQUNyQyxlQUFPO0FBQ0hDLFlBQUUsRUFBRUQsSUFBSSxDQUFDQyxFQUROO0FBRUhDLHFCQUFXLEVBQUUsRUFGVjtBQUdIQyxxQkFBVyxFQUFFSCxJQUFJLGtCQUhkO0FBSUhJLHFCQUFXLEVBQUUsRUFKVjtBQUtIQyxxQkFBVyxFQUFFTCxJQUFJLGtCQUxkO0FBTUhNLG9CQUFVLEVBQUVOLElBQUksQ0FBQ00sVUFOZDtBQU9IQyxjQUFJLEVBQUVQLElBQUksQ0FBQ08sSUFQUjtBQVFIQyxjQUFJLEVBQUVSLElBQUksQ0FBQ1EsSUFSUjtBQVNIQyxjQUFJLEVBQUVULElBQUksQ0FBQ1MsSUFUUjtBQVVIQyxvQkFBVSxFQUFFVixJQUFJLENBQUNXLE1BVmQ7QUFXSEMsOEJBQW9CLEVBQUUsb0JBWG5CO0FBWUhDLHVCQUFhLEVBQUUsbUJBWlo7QUFhSEMsd0JBQWMsRUFBRSwwQkFiYjtBQWNIQyxxQkFBVyxZQUFLZixJQUFJLENBQUNPLElBQVYsZ0JBQW9CUCxJQUFJLENBQUNnQixLQUF6Qix3QkFkUjtBQWVIQSxlQUFLLEVBQUVoQixJQUFJLENBQUNnQixLQUFMLEdBQWE7QUFmakIsU0FBUDtBQWlCSCxPQWxCYSxDQUFGLENBQVo7QUFtQkgsS0F0QkwsV0F1QlksVUFBQUMsS0FBSyxFQUFJLENBQUUsQ0F2QnZCO0FBd0JILEdBekJRLEVBeUJOLEVBekJNLENBQVQ7QUEyQkEsc0JBQ0k7QUFBSyxhQUFTLEVBQUVDLDZFQUFoQjtBQUFBLDRCQUNJLDhEQUFDLDJEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFESixlQUVJO0FBQUssZUFBUyxFQUFFQSx5RUFBaEI7QUFBQSxnQkFFUTlCLFVBQVUsQ0FBQ1csR0FBWCxDQUFlLFVBQUNvQixFQUFELEVBQUtDLENBQUw7QUFBQSw0QkFDWCw4REFBQyx5Q0FBRDtBQUNJLGVBQUssRUFBRUEsQ0FBQyxHQUFHLENBRGY7QUFFSSxxQkFBVyxFQUFFRCxFQUFFLENBQUNqQixXQUZwQjtBQUdJLHFCQUFXLEVBQUVpQixFQUFFLENBQUNoQixXQUhwQjtBQUlJLHFCQUFXLEVBQUVnQixFQUFFLENBQUNmLFdBSnBCO0FBS0kscUJBQVcsRUFBRWUsRUFBRSxDQUFDZCxXQUxwQjtBQU1JLGNBQUksRUFBRWMsRUFBRSxDQUFDWCxJQU5iO0FBT0ksY0FBSSxFQUFFVyxFQUFFLENBQUNWLElBUGI7QUFRSSxvQkFBVSxFQUFFVSxFQUFFLENBQUNiLFVBUm5CO0FBU0ksY0FBSSxFQUFFYSxFQUFFLENBQUNaLElBVGI7QUFVSSxvQkFBVSxFQUFFWSxFQUFFLENBQUNULFVBVm5CO0FBV0ksZUFBSyxFQUFFUyxFQUFFLENBQUNILEtBWGQ7QUFhSSxrQkFBUSxFQUFFO0FBQUEsbUJBQ04xQixNQUFNLENBQUMrQixJQUFQLENBQVk7QUFDUkMsc0JBQVEsRUFBRSxhQURGO0FBRVJDLG1CQUFLLEVBQUU7QUFBRUMsb0JBQUksRUFBRUwsRUFBRSxDQUFDbEI7QUFBWDtBQUZDLGFBQVosQ0FETTtBQUFBLFdBYmQ7QUFtQkksc0JBQVksRUFBRWY7QUFuQmxCLFdBWVN1QyxJQUFJLENBQUNDLE1BQUwsRUFaVDtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURXO0FBQUEsT0FBZjtBQUZSO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFGSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFESjtBQWdDSDs7R0FoRWV6QyxhO1VBR0dNLDhEOzs7S0FISE4sYSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9wcmVkaWN0aW9uLjQxMWZhZjdjN2Q0ZWI4ZmZjZGIzLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBob29rc1xyXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L2Rpc3QvY2xpZW50L3JvdXRlcic7XHJcbi8vIGRhdGFzXHJcbmltcG9ydCB7IHByZWRpY3Rpb25zIH0gZnJvbSAnL3NyYy9nYW1lc19kYXRhL3ByZWRpY3Rpb25zL3ByZWRpY3Rpb25zJ1xyXG4vLyBjb21wb25lbnRzXHJcbmltcG9ydCB7IFJvdyB9IGZyb20gJy4uL1Jvdy9Sb3cnXHJcbmltcG9ydCB7IFRhYkhlYWRlciB9IGZyb20gJy4uL1RhYkhlYWRlci9UYWJIZWFkZXInO1xyXG4vLyBzdHlsZXNcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL1ByZWRpY3Rpb25UYWIubW9kdWxlLnNjc3MnXHJcbmltcG9ydCB7IEdFVF9QUkVESUNUSU9OUyB9IGZyb20gJy9saWIvcmVxdWVzdC1kZXN0aW5hdGlvbnMnXHJcbmltcG9ydCB7IHJlcXVlc3QgfSBmcm9tICcvbGliL2VyLmxpYidcclxuXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gUHJlZGljdGlvblRhYih7IGNsaWNrIH0pIHtcclxuXHJcbiAgICBjb25zdCBbIHNsaWRlX2RhdGEsIHNldFNsaWRlRGF0YSBdID0gdXNlU3RhdGUoW10pXHJcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxyXG5cclxuICAgIHVzZUVmZmVjdCggKCk9PiB7XHJcbiAgICAgICAgcmVxdWVzdCggR0VUX1BSRURJQ1RJT05TLCB7fSwgeyBhdXRoOiB0cnVlIH0gKVxyXG4gICAgICAgICAgICAudGhlbiggcnNwID0+IHtcclxuICAgICAgICAgICAgICAgIC8vIHRvYXN0KGBTdWNjZXNzZnVsbHkgcmVnaXN0ZXJlZGApXHJcbiAgICAgICAgICAgICAgICBzZXRTbGlkZURhdGEoIHJzcC5kYXRhLmRhdGEubWFwKCBpdGVtID0+IHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZDogaXRlbS5pZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGVhbU9uZU5hbWU6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZWFtT25lSWNvbjogaXRlbVtgdGVhbTFfaW1nX3BhdGhgXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGVhbVR3b05hbWU6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZWFtVHdvSWNvbjogaXRlbVtgdGVhbTJfaW1nX3BhdGhgXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgcHJlZGljdGlvbjogaXRlbS5wcmVkaWN0aW9uLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBpdGVtLnR5cGUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGU6IGl0ZW0uZGF0ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGltZTogaXRlbS50aW1lLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2VmZmljZW50OiBpdGVtLmZhY3RvcixcclxuICAgICAgICAgICAgICAgICAgICAgICAgcHJlZGljdGlvbkJ1dHRvbk5hbWU6ICcuc2xpZGUucHJlZF9idXR0b24nLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBidXlCdXR0b25OYW1lOiAnLnNsaWRlLmJ1eV9idXR0b24nLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwcmVkaWN0aW9uVGV4dDogJ9Ck0YPQu9GF0LXQvCDRgtCxIDEsNSAvINC60L7RjdGEIDMsNScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9yZGluYXJUZXh0OiBgJHtpdGVtLnR5cGV9IC8gJHtpdGVtLnByaWNlfdGA0YPQsS5gLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwcmljZTogaXRlbS5wcmljZSArICcg0YDRg9CxLidcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KSlcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLmNhdGNoKCBlcnJvciA9PiB7fSlcclxuICAgIH0sIFtdICk7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn0+XHJcbiAgICAgICAgICAgIDxUYWJIZWFkZXIgLz5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5ib2FyZH0+XHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2xpZGVfZGF0YS5tYXAoKGVsLCBpKSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxSb3dcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9yZGVyPXtpICsgMX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRlYW1PbmVOYW1lPXtlbC50ZWFtT25lTmFtZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRlYW1PbmVJY29uPXtlbC50ZWFtT25lSWNvbn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRlYW1Ud29OYW1lPXtlbC50ZWFtVHdvTmFtZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRlYW1Ud29JY29uPXtlbC50ZWFtVHdvSWNvbn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGU9e2VsLmRhdGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aW1lPXtlbC50aW1lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJlZGljdGlvbj17ZWwucHJlZGljdGlvbn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9e2VsLnR5cGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2VmZmljZW50PXtlbC5jb2VmZmljZW50fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJpY2U9e2VsLnByaWNlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtNYXRoLnJhbmRvbSgpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2tCdXk9eygpID0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcm91dGVyLnB1c2goe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXRobmFtZTogJy9wcmVkaWN0aW9uJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcXVlcnk6IHsgZ2FtZTogZWwuaWQgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcGVuUGF5bWVudHM9e2NsaWNrfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICkpXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=