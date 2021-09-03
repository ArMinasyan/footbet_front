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
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: (_PredictionTab_module_scss__WEBPACK_IMPORTED_MODULE_8___default().container),
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_TabHeader_TabHeader__WEBPACK_IMPORTED_MODULE_5__.TabHeader, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 49,
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
          lineNumber: 52,
          columnNumber: 11
        }, _this);
      })
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 48,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9QYWdlcy9QcmVkaWN0aW9uUGF5bWVudHMvVGFicy9QcmVkaWN0aW9uVGFiL1ByZWRpY3Rpb25UYWIuanN4Il0sIm5hbWVzIjpbIlByZWRpY3Rpb25UYWIiLCJjbGljayIsInVzZVN0YXRlIiwic2xpZGVfZGF0YSIsInNldFNsaWRlRGF0YSIsInJvdXRlciIsInVzZVJvdXRlciIsInVzZUVmZmVjdCIsInJlcXVlc3QiLCJHRVRfUFJFRElDVElPTlMiLCJhdXRoIiwidGhlbiIsInJzcCIsImRhdGEiLCJtYXAiLCJpdGVtIiwiaWQiLCJ0ZWFtT25lTmFtZSIsInRlYW1PbmVJY29uIiwidGVhbVR3b05hbWUiLCJ0ZWFtVHdvSWNvbiIsInByZWRpY3Rpb24iLCJ0eXBlIiwiZGF0ZSIsInRpbWUiLCJjb2VmZmljZW50IiwiZmFjdG9yIiwicHJlZGljdGlvbkJ1dHRvbk5hbWUiLCJidXlCdXR0b25OYW1lIiwicHJlZGljdGlvblRleHQiLCJvcmRpbmFyVGV4dCIsInByaWNlIiwiZXJyb3IiLCJzdHlsZXMiLCJlbCIsImkiLCJwdXNoIiwicGF0aG5hbWUiLCJxdWVyeSIsImdhbWUiLCJNYXRoIiwicmFuZG9tIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7Q0FFQTs7Q0FFQTs7QUFDQTtDQUVBOztBQUNBO0FBQ0E7QUFDQTtBQUVPLFNBQVNBLGFBQVQsT0FBa0M7QUFBQTs7QUFBQTs7QUFBQSxNQUFUQyxLQUFTLFFBQVRBLEtBQVM7O0FBQUEsa0JBQ0pDLCtDQUFRLENBQUMsRUFBRCxDQURKO0FBQUEsTUFDaENDLFVBRGdDO0FBQUEsTUFDcEJDLFlBRG9COztBQUV2QyxNQUFNQyxNQUFNLEdBQUdDLGtFQUFTLEVBQXhCO0FBRUFDLGtEQUFTLENBQUMsWUFBTTtBQUNkQyx3REFBTyxDQUFDQyxzRUFBRCxFQUFrQixFQUFsQixFQUFzQjtBQUFFQyxVQUFJLEVBQUU7QUFBUixLQUF0QixDQUFQLENBQ0dDLElBREgsQ0FDUSxVQUFDQyxHQUFELEVBQVM7QUFDYjtBQUNBUixrQkFBWSxDQUNWUSxHQUFHLENBQUNDLElBQUosQ0FBU0EsSUFBVCxDQUFjQyxHQUFkLENBQWtCLFVBQUNDLElBQUQsRUFBVTtBQUMxQixlQUFPO0FBQ0xDLFlBQUUsRUFBRUQsSUFBSSxDQUFDQyxFQURKO0FBRUxDLHFCQUFXLEVBQUUsRUFGUjtBQUdMQyxxQkFBVyxFQUFFSCxJQUFJLGtCQUhaO0FBSUxJLHFCQUFXLEVBQUUsRUFKUjtBQUtMQyxxQkFBVyxFQUFFTCxJQUFJLGtCQUxaO0FBTUxNLG9CQUFVLEVBQUVOLElBQUksQ0FBQ00sVUFOWjtBQU9MQyxjQUFJLEVBQUVQLElBQUksQ0FBQ08sSUFQTjtBQVFMQyxjQUFJLEVBQUVSLElBQUksQ0FBQ1EsSUFSTjtBQVNMQyxjQUFJLEVBQUVULElBQUksQ0FBQ1MsSUFUTjtBQVVMQyxvQkFBVSxFQUFFVixJQUFJLENBQUNXLE1BVlo7QUFXTEMsOEJBQW9CLEVBQUUsb0JBWGpCO0FBWUxDLHVCQUFhLEVBQUUsbUJBWlY7QUFhTEMsd0JBQWMsRUFBRSwwQkFiWDtBQWNMQyxxQkFBVyxZQUFLZixJQUFJLENBQUNPLElBQVYsZ0JBQW9CUCxJQUFJLENBQUNnQixLQUF6Qix3QkFkTjtBQWVMQSxlQUFLLEVBQUVoQixJQUFJLENBQUNnQixLQUFMLEdBQWE7QUFmZixTQUFQO0FBaUJELE9BbEJELENBRFUsQ0FBWjtBQXFCRCxLQXhCSCxXQXlCUyxVQUFDQyxLQUFELEVBQVcsQ0FBRSxDQXpCdEI7QUEwQkQsR0EzQlEsRUEyQk4sRUEzQk0sQ0FBVDtBQTZCQSxzQkFDRTtBQUFLLGFBQVMsRUFBRUMsNkVBQWhCO0FBQUEsNEJBQ0UsOERBQUMsMkRBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURGLGVBRUU7QUFBSyxlQUFTLEVBQUVBLHlFQUFoQjtBQUFBLGdCQUNHOUIsVUFBVSxDQUFDVyxHQUFYLENBQWUsVUFBQ29CLEVBQUQsRUFBS0MsQ0FBTDtBQUFBLDRCQUNkLDhEQUFDLHlDQUFEO0FBQ0UsZUFBSyxFQUFFQSxDQUFDLEdBQUcsQ0FEYjtBQUVFLHFCQUFXLEVBQUVELEVBQUUsQ0FBQ2pCLFdBRmxCO0FBR0UscUJBQVcsRUFBRWlCLEVBQUUsQ0FBQ2hCLFdBSGxCO0FBSUUscUJBQVcsRUFBRWdCLEVBQUUsQ0FBQ2YsV0FKbEI7QUFLRSxxQkFBVyxFQUFFZSxFQUFFLENBQUNkLFdBTGxCO0FBTUUsY0FBSSxFQUFFYyxFQUFFLENBQUNYLElBTlg7QUFPRSxjQUFJLEVBQUVXLEVBQUUsQ0FBQ1YsSUFQWDtBQVFFLG9CQUFVLEVBQUVVLEVBQUUsQ0FBQ2IsVUFSakI7QUFTRSxjQUFJLEVBQUVhLEVBQUUsQ0FBQ1osSUFUWDtBQVVFLG9CQUFVLEVBQUVZLEVBQUUsQ0FBQ1QsVUFWakI7QUFXRSxlQUFLLEVBQUVTLEVBQUUsQ0FBQ0gsS0FYWjtBQWFFLGtCQUFRLEVBQUU7QUFBQSxtQkFDUjFCLE1BQU0sQ0FBQytCLElBQVAsQ0FBWTtBQUNWQyxzQkFBUSxFQUFFLGFBREE7QUFFVkMsbUJBQUssRUFBRTtBQUFFQyxvQkFBSSxFQUFFTCxFQUFFLENBQUNsQjtBQUFYO0FBRkcsYUFBWixDQURRO0FBQUEsV0FiWjtBQW1CRSxzQkFBWSxFQUFFZjtBQW5CaEIsV0FZT3VDLElBQUksQ0FBQ0MsTUFBTCxFQVpQO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRGM7QUFBQSxPQUFmO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBOEJEOztHQS9EZXpDLGE7VUFFQ00sOEQ7OztLQUZETixhIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3ByZWRpY3Rpb24uNmNlZjY0ZTEwMjU2MTQxMmYwNWMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGhvb2tzXHJcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvZGlzdC9jbGllbnQvcm91dGVyXCI7XHJcbi8vIGRhdGFzXHJcbmltcG9ydCB7IHByZWRpY3Rpb25zIH0gZnJvbSBcIi9zcmMvZ2FtZXNfZGF0YS9wcmVkaWN0aW9ucy9wcmVkaWN0aW9uc1wiO1xyXG4vLyBjb21wb25lbnRzXHJcbmltcG9ydCB7IFJvdyB9IGZyb20gXCIuLi9Sb3cvUm93XCI7XHJcbmltcG9ydCB7IFRhYkhlYWRlciB9IGZyb20gXCIuLi9UYWJIZWFkZXIvVGFiSGVhZGVyXCI7XHJcbi8vIHN0eWxlc1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuL1ByZWRpY3Rpb25UYWIubW9kdWxlLnNjc3NcIjtcclxuaW1wb3J0IHsgR0VUX1BSRURJQ1RJT05TIH0gZnJvbSBcIi9saWIvcmVxdWVzdC1kZXN0aW5hdGlvbnNcIjtcclxuaW1wb3J0IHsgcmVxdWVzdCB9IGZyb20gXCIvbGliL2VyLmxpYlwiO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIFByZWRpY3Rpb25UYWIoeyBjbGljayB9KSB7XHJcbiAgY29uc3QgW3NsaWRlX2RhdGEsIHNldFNsaWRlRGF0YV0gPSB1c2VTdGF0ZShbXSk7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICByZXF1ZXN0KEdFVF9QUkVESUNUSU9OUywge30sIHsgYXV0aDogdHJ1ZSB9KVxyXG4gICAgICAudGhlbigocnNwKSA9PiB7XHJcbiAgICAgICAgLy8gdG9hc3QoYFN1Y2Nlc3NmdWxseSByZWdpc3RlcmVkYClcclxuICAgICAgICBzZXRTbGlkZURhdGEoXHJcbiAgICAgICAgICByc3AuZGF0YS5kYXRhLm1hcCgoaXRlbSkgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgIGlkOiBpdGVtLmlkLFxyXG4gICAgICAgICAgICAgIHRlYW1PbmVOYW1lOiBcIlwiLFxyXG4gICAgICAgICAgICAgIHRlYW1PbmVJY29uOiBpdGVtW2B0ZWFtMV9pbWdfcGF0aGBdLFxyXG4gICAgICAgICAgICAgIHRlYW1Ud29OYW1lOiBcIlwiLFxyXG4gICAgICAgICAgICAgIHRlYW1Ud29JY29uOiBpdGVtW2B0ZWFtMl9pbWdfcGF0aGBdLFxyXG4gICAgICAgICAgICAgIHByZWRpY3Rpb246IGl0ZW0ucHJlZGljdGlvbixcclxuICAgICAgICAgICAgICB0eXBlOiBpdGVtLnR5cGUsXHJcbiAgICAgICAgICAgICAgZGF0ZTogaXRlbS5kYXRlLFxyXG4gICAgICAgICAgICAgIHRpbWU6IGl0ZW0udGltZSxcclxuICAgICAgICAgICAgICBjb2VmZmljZW50OiBpdGVtLmZhY3RvcixcclxuICAgICAgICAgICAgICBwcmVkaWN0aW9uQnV0dG9uTmFtZTogXCIuc2xpZGUucHJlZF9idXR0b25cIixcclxuICAgICAgICAgICAgICBidXlCdXR0b25OYW1lOiBcIi5zbGlkZS5idXlfYnV0dG9uXCIsXHJcbiAgICAgICAgICAgICAgcHJlZGljdGlvblRleHQ6IFwi0KTRg9C70YXQtdC8INGC0LEgMSw1IC8g0LrQvtGN0YQgMyw1XCIsXHJcbiAgICAgICAgICAgICAgb3JkaW5hclRleHQ6IGAke2l0ZW0udHlwZX0gLyAke2l0ZW0ucHJpY2V90YDRg9CxLmAsXHJcbiAgICAgICAgICAgICAgcHJpY2U6IGl0ZW0ucHJpY2UgKyBcIiDRgNGD0LEuXCIsXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgICk7XHJcbiAgICAgIH0pXHJcbiAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHt9KTtcclxuICB9LCBbXSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn0+XHJcbiAgICAgIDxUYWJIZWFkZXIgLz5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5ib2FyZH0+XHJcbiAgICAgICAge3NsaWRlX2RhdGEubWFwKChlbCwgaSkgPT4gKFxyXG4gICAgICAgICAgPFJvd1xyXG4gICAgICAgICAgICBvcmRlcj17aSArIDF9XHJcbiAgICAgICAgICAgIHRlYW1PbmVOYW1lPXtlbC50ZWFtT25lTmFtZX1cclxuICAgICAgICAgICAgdGVhbU9uZUljb249e2VsLnRlYW1PbmVJY29ufVxyXG4gICAgICAgICAgICB0ZWFtVHdvTmFtZT17ZWwudGVhbVR3b05hbWV9XHJcbiAgICAgICAgICAgIHRlYW1Ud29JY29uPXtlbC50ZWFtVHdvSWNvbn1cclxuICAgICAgICAgICAgZGF0ZT17ZWwuZGF0ZX1cclxuICAgICAgICAgICAgdGltZT17ZWwudGltZX1cclxuICAgICAgICAgICAgcHJlZGljdGlvbj17ZWwucHJlZGljdGlvbn1cclxuICAgICAgICAgICAgdHlwZT17ZWwudHlwZX1cclxuICAgICAgICAgICAgY29lZmZpY2VudD17ZWwuY29lZmZpY2VudH1cclxuICAgICAgICAgICAgcHJpY2U9e2VsLnByaWNlfVxyXG4gICAgICAgICAgICBrZXk9e01hdGgucmFuZG9tKCl9XHJcbiAgICAgICAgICAgIGNsaWNrQnV5PXsoKSA9PlxyXG4gICAgICAgICAgICAgIHJvdXRlci5wdXNoKHtcclxuICAgICAgICAgICAgICAgIHBhdGhuYW1lOiBcIi9wcmVkaWN0aW9uXCIsXHJcbiAgICAgICAgICAgICAgICBxdWVyeTogeyBnYW1lOiBlbC5pZCB9LFxyXG4gICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgb3BlblBheW1lbnRzPXtjbGlja31cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgKSl9XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9