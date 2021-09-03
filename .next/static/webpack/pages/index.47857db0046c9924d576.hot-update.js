self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/Pages/Main/Prediction/PredictionSlide/Item/Item.jsx":
/*!************************************************************************!*\
  !*** ./components/Pages/Main/Prediction/PredictionSlide/Item/Item.jsx ***!
  \************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Item": function() { return /* binding */ Item; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_translate_useTranslation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-translate/useTranslation */ "./node_modules/next-translate/lib/esm/useTranslation.js");
/* harmony import */ var _Item_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Item.module.scss */ "./components/Pages/Main/Prediction/PredictionSlide/Item/Item.module.scss");
/* harmony import */ var _Item_module_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_Item_module_scss__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _Timer_Timer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Timer/Timer */ "./components/Pages/Main/Prediction/PredictionSlide/Item/Timer/Timer.jsx");
/* harmony import */ var _PredictionModal_PredictionModal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./PredictionModal/PredictionModal */ "./components/Pages/Main/Prediction/PredictionSlide/Item/PredictionModal/PredictionModal.jsx");
/* harmony import */ var next_dist_client_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/dist/client/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_dist_client_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_dist_client_router__WEBPACK_IMPORTED_MODULE_5__);
/* module decorator */ module = __webpack_require__.hmd(module);



var _jsxFileName = "C:\\Users\\Admin\\Desktop\\projects\\foot-bet\\components\\Pages\\Main\\Prediction\\PredictionSlide\\Item\\Item.jsx",
    _s = $RefreshSig$();

// hooks
 // translations

 // styles

 //components




function Item(_ref) {
  _s();

  var teamOneName = _ref.teamOneName,
      teamTwoName = _ref.teamTwoName,
      teamOneIcon = _ref.teamOneIcon,
      teamTwoIcon = _ref.teamTwoIcon,
      predictionButtonName = _ref.predictionButtonName,
      buyButtonName = _ref.buyButtonName,
      locationInMainPage = _ref.locationInMainPage,
      expiryTimestamp = _ref.expiryTimestamp,
      prediction = _ref.prediction,
      ordinar = _ref.ordinar,
      clickBuy = _ref.clickBuy;
  var router = (0,next_dist_client_router__WEBPACK_IMPORTED_MODULE_5__.useRouter)();

  var _useTranslation = (0,next_translate_useTranslation__WEBPACK_IMPORTED_MODULE_2__.default)("home"),
      t = _useTranslation.t,
      translationPath = "".concat(locationInMainPage),
      translate = function translate(key) {
    return t("".concat(translationPath).concat(key));
  },
      _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false),
      showPrediction = _useState[0],
      setShowPrediction = _useState[1],
      _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false),
      gameStarted = _useState2[0],
      setGameStarted = _useState2[1];

  function goToPredictions() {
    // setShowPrediction(!showPrediction);
    router.push("/prediction");
  }

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: (_Item_module_scss__WEBPACK_IMPORTED_MODULE_6___default().container),
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: (_Item_module_scss__WEBPACK_IMPORTED_MODULE_6___default().content),
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: (_Item_module_scss__WEBPACK_IMPORTED_MODULE_6___default().top),
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: (_Item_module_scss__WEBPACK_IMPORTED_MODULE_6___default().team),
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
              src: teamOneIcon,
              alt: ""
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 44,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
              children: teamOneName
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 45,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 43,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: (_Item_module_scss__WEBPACK_IMPORTED_MODULE_6___default().timer_container),
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
              children: gameStarted ? "\u0418\u0433\u0440\u0430 \u043D\u0430\u0447\u0430\u043B\u0441\u044F " : "\u0418\u0433\u0440\u0430 \u043D\u0430\u0447\u0438\u043D\u0430\u0435\u0442\u0441\u044F \u0447\u0435\u0440\u0435\u0437"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 48,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Timer_Timer__WEBPACK_IMPORTED_MODULE_3__.Timer, {
              expiryTimestamp: expiryTimestamp,
              timeClass: (_Item_module_scss__WEBPACK_IMPORTED_MODULE_6___default().timer),
              timeOut: function timeOut() {
                return setGameStarted(true);
              }
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 49,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 47,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: (_Item_module_scss__WEBPACK_IMPORTED_MODULE_6___default().team),
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
              src: teamTwoIcon,
              alt: ""
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 56,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
              children: teamTwoName
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 57,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 55,
            columnNumber: 13
          }, this), showPrediction && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_PredictionModal_PredictionModal__WEBPACK_IMPORTED_MODULE_4__.PredictionModal, {
            teamOneName: teamOneName,
            teamTwoName: teamTwoName,
            teamOneIcon: teamOneIcon,
            teamTwoIcon: teamTwoIcon,
            prediction: prediction,
            ordinar: ordinar
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 60,
            columnNumber: 15
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 42,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: (_Item_module_scss__WEBPACK_IMPORTED_MODULE_6___default().bottom),
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: (_Item_module_scss__WEBPACK_IMPORTED_MODULE_6___default().buttons),
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              className: (_Item_module_scss__WEBPACK_IMPORTED_MODULE_6___default().prediction_button_container),
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                className: (_Item_module_scss__WEBPACK_IMPORTED_MODULE_6___default().prediction_button_content),
                onClick: function onClick() {
                  return goToPredictions();
                },
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
                  children: translate(predictionButtonName)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 77,
                  columnNumber: 19
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 73,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 72,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              className: (_Item_module_scss__WEBPACK_IMPORTED_MODULE_6___default().buy_button_container),
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                className: (_Item_module_scss__WEBPACK_IMPORTED_MODULE_6___default().buy_button_content),
                onClick: clickBuy,
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
                  children: translate(buyButtonName)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 82,
                  columnNumber: 19
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 81,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 80,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 71,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 70,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 41,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 7
    }, this)
  }, void 0, false);
}

_s(Item, "/PDn9j+kYG+9+pUQ1S1mp9Lwwt8=", false, function () {
  return [next_dist_client_router__WEBPACK_IMPORTED_MODULE_5__.useRouter, next_translate_useTranslation__WEBPACK_IMPORTED_MODULE_2__.default];
});

_c = Item;

var _c;

$RefreshReg$(_c, "Item");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9QYWdlcy9NYWluL1ByZWRpY3Rpb24vUHJlZGljdGlvblNsaWRlL0l0ZW0vSXRlbS5qc3giXSwibmFtZXMiOlsiSXRlbSIsInRlYW1PbmVOYW1lIiwidGVhbVR3b05hbWUiLCJ0ZWFtT25lSWNvbiIsInRlYW1Ud29JY29uIiwicHJlZGljdGlvbkJ1dHRvbk5hbWUiLCJidXlCdXR0b25OYW1lIiwibG9jYXRpb25Jbk1haW5QYWdlIiwiZXhwaXJ5VGltZXN0YW1wIiwicHJlZGljdGlvbiIsIm9yZGluYXIiLCJjbGlja0J1eSIsInJvdXRlciIsInVzZVJvdXRlciIsInVzZVRyYW5zbGF0aW9uIiwidCIsInRyYW5zbGF0aW9uUGF0aCIsInRyYW5zbGF0ZSIsImtleSIsInVzZVN0YXRlIiwic2hvd1ByZWRpY3Rpb24iLCJzZXRTaG93UHJlZGljdGlvbiIsImdhbWVTdGFydGVkIiwic2V0R2FtZVN0YXJ0ZWQiLCJnb1RvUHJlZGljdGlvbnMiLCJwdXNoIiwic3R5bGVzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Q0FFQTs7Q0FFQTs7Q0FFQTs7QUFDQTtBQUNBO0FBQ0E7QUFFTyxTQUFTQSxJQUFULE9BWUo7QUFBQTs7QUFBQSxNQVhEQyxXQVdDLFFBWERBLFdBV0M7QUFBQSxNQVZEQyxXQVVDLFFBVkRBLFdBVUM7QUFBQSxNQVREQyxXQVNDLFFBVERBLFdBU0M7QUFBQSxNQVJEQyxXQVFDLFFBUkRBLFdBUUM7QUFBQSxNQVBEQyxvQkFPQyxRQVBEQSxvQkFPQztBQUFBLE1BTkRDLGFBTUMsUUFOREEsYUFNQztBQUFBLE1BTERDLGtCQUtDLFFBTERBLGtCQUtDO0FBQUEsTUFKREMsZUFJQyxRQUpEQSxlQUlDO0FBQUEsTUFIREMsVUFHQyxRQUhEQSxVQUdDO0FBQUEsTUFGREMsT0FFQyxRQUZEQSxPQUVDO0FBQUEsTUFEREMsUUFDQyxRQUREQSxRQUNDO0FBQ0QsTUFB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QUFBQSx1Q0FDRTtBQUFBLDRCQUFJTSxTQUFTLENBQUNYLGFBQUQ7QUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBVEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkE3QkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGLG1CQURGO0FBcUREOztHQS9FZU4sSTtVQWFDYSw4RCxFQUVMQyxrRTs7O0tBZklkLEkiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguNDc4NTdkYjAwNDZjOTkyNGQ1NzYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGhvb2tzXHJcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbi8vIHRyYW5zbGF0aW9uc1xyXG5pbXBvcnQgdXNlVHJhbnNsYXRpb24gZnJvbSBcIm5leHQtdHJhbnNsYXRlL3VzZVRyYW5zbGF0aW9uXCI7XHJcbi8vIHN0eWxlc1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuL0l0ZW0ubW9kdWxlLnNjc3NcIjtcclxuLy9jb21wb25lbnRzXHJcbmltcG9ydCB7IFRpbWVyIH0gZnJvbSBcIi4vVGltZXIvVGltZXJcIjtcclxuaW1wb3J0IHsgUHJlZGljdGlvbk1vZGFsIH0gZnJvbSBcIi4vUHJlZGljdGlvbk1vZGFsL1ByZWRpY3Rpb25Nb2RhbFwiO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9kaXN0L2NsaWVudC9yb3V0ZXJcIjtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBJdGVtKHtcclxuICB0ZWFtT25lTmFtZSxcclxuICB0ZWFtVHdvTmFtZSxcclxuICB0ZWFtT25lSWNvbixcclxuICB0ZWFtVHdvSWNvbixcclxuICBwcmVkaWN0aW9uQnV0dG9uTmFtZSxcclxuICBidXlCdXR0b25OYW1lLFxyXG4gIGxvY2F0aW9uSW5NYWluUGFnZSxcclxuICBleHBpcnlUaW1lc3RhbXAsXHJcbiAgcHJlZGljdGlvbixcclxuICBvcmRpbmFyLFxyXG4gIGNsaWNrQnV5LFxyXG59KSB7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiAgY29uc3QgLy8gdHJhbnNsYXRpb24gY29uc2ZpZ3NcclxuICAgIHsgdCB9ID0gdXNlVHJhbnNsYXRpb24oXCJob21lXCIpLFxyXG4gICAgdHJhbnNsYXRpb25QYXRoID0gYCR7bG9jYXRpb25Jbk1haW5QYWdlfWAsXHJcbiAgICB0cmFuc2xhdGUgPSAoa2V5KSA9PiB0KGAke3RyYW5zbGF0aW9uUGF0aH0ke2tleX1gKSxcclxuICAgIFtzaG93UHJlZGljdGlvbiwgc2V0U2hvd1ByZWRpY3Rpb25dID0gdXNlU3RhdGUoZmFsc2UpLFxyXG4gICAgW2dhbWVTdGFydGVkLCBzZXRHYW1lU3RhcnRlZF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gIGZ1bmN0aW9uIGdvVG9QcmVkaWN0aW9ucygpIHtcclxuICAgIC8vIHNldFNob3dQcmVkaWN0aW9uKCFzaG93UHJlZGljdGlvbik7XHJcbiAgICByb3V0ZXIucHVzaChgL3ByZWRpY3Rpb25gKTtcclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn0+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250ZW50fT5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudG9wfT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy50ZWFtfT5cclxuICAgICAgICAgICAgICA8aW1nIHNyYz17dGVhbU9uZUljb259IGFsdD1cIlwiIC8+XHJcbiAgICAgICAgICAgICAgPHA+e3RlYW1PbmVOYW1lfTwvcD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudGltZXJfY29udGFpbmVyfT5cclxuICAgICAgICAgICAgICA8cD57Z2FtZVN0YXJ0ZWQgPyBg0JjQs9GA0LAg0L3QsNGH0LDQu9GB0Y8gYCA6IGDQmNCz0YDQsCDQvdCw0YfQuNC90LDQtdGC0YHRjyDRh9C10YDQtdC3YH08L3A+XHJcbiAgICAgICAgICAgICAgPFRpbWVyXHJcbiAgICAgICAgICAgICAgICBleHBpcnlUaW1lc3RhbXA9e2V4cGlyeVRpbWVzdGFtcH1cclxuICAgICAgICAgICAgICAgIHRpbWVDbGFzcz17c3R5bGVzLnRpbWVyfVxyXG4gICAgICAgICAgICAgICAgdGltZU91dD17KCkgPT4gc2V0R2FtZVN0YXJ0ZWQodHJ1ZSl9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudGVhbX0+XHJcbiAgICAgICAgICAgICAgPGltZyBzcmM9e3RlYW1Ud29JY29ufSBhbHQ9XCJcIiAvPlxyXG4gICAgICAgICAgICAgIDxwPnt0ZWFtVHdvTmFtZX08L3A+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICB7c2hvd1ByZWRpY3Rpb24gJiYgKFxyXG4gICAgICAgICAgICAgIDxQcmVkaWN0aW9uTW9kYWxcclxuICAgICAgICAgICAgICAgIHRlYW1PbmVOYW1lPXt0ZWFtT25lTmFtZX1cclxuICAgICAgICAgICAgICAgIHRlYW1Ud29OYW1lPXt0ZWFtVHdvTmFtZX1cclxuICAgICAgICAgICAgICAgIHRlYW1PbmVJY29uPXt0ZWFtT25lSWNvbn1cclxuICAgICAgICAgICAgICAgIHRlYW1Ud29JY29uPXt0ZWFtVHdvSWNvbn1cclxuICAgICAgICAgICAgICAgIHByZWRpY3Rpb249e3ByZWRpY3Rpb259XHJcbiAgICAgICAgICAgICAgICBvcmRpbmFyPXtvcmRpbmFyfVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYm90dG9tfT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5idXR0b25zfT5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnByZWRpY3Rpb25fYnV0dG9uX2NvbnRhaW5lcn0+XHJcbiAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLnByZWRpY3Rpb25fYnV0dG9uX2NvbnRlbnR9XHJcbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGdvVG9QcmVkaWN0aW9ucygpfVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICA8cD57dHJhbnNsYXRlKHByZWRpY3Rpb25CdXR0b25OYW1lKX08L3A+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmJ1eV9idXR0b25fY29udGFpbmVyfT5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYnV5X2J1dHRvbl9jb250ZW50fSBvbkNsaWNrPXtjbGlja0J1eX0+XHJcbiAgICAgICAgICAgICAgICAgIDxwPnt0cmFuc2xhdGUoYnV5QnV0dG9uTmFtZSl9PC9wPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC8+XHJcbiAgKTtcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9