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

  console.log(expiryTimestamp);
  var start = new Date().getTime();
  var end = new Date(expiryTimestamp).getTime();
  console.log((end - start) / 1000);
  var time = new Date();
  time.setSeconds(time.getSeconds() + (end - start) / 1000);
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
              lineNumber: 52,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
              children: teamOneName
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 53,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 51,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: (_Item_module_scss__WEBPACK_IMPORTED_MODULE_6___default().timer_container),
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
              children: gameStarted ? "\u0418\u0433\u0440\u0430 \u043D\u0430\u0447\u0430\u043B\u0441\u044F " : "\u0418\u0433\u0440\u0430 \u043D\u0430\u0447\u0438\u043D\u0430\u0435\u0442\u0441\u044F \u0447\u0435\u0440\u0435\u0437"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 56,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Timer_Timer__WEBPACK_IMPORTED_MODULE_3__.Timer, {
              expiryTimestamp: time,
              timeClass: (_Item_module_scss__WEBPACK_IMPORTED_MODULE_6___default().timer),
              timeOut: function timeOut() {
                return setGameStarted(true);
              }
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 57,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 55,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: (_Item_module_scss__WEBPACK_IMPORTED_MODULE_6___default().team),
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
              src: teamTwoIcon,
              alt: ""
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 64,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
              children: teamTwoName
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 65,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 63,
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
            lineNumber: 68,
            columnNumber: 15
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 50,
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
                  lineNumber: 85,
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
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              className: (_Item_module_scss__WEBPACK_IMPORTED_MODULE_6___default().buy_button_container),
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                className: (_Item_module_scss__WEBPACK_IMPORTED_MODULE_6___default().buy_button_content),
                onClick: clickBuy,
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
                  children: translate(buyButtonName)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 90,
                  columnNumber: 19
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 89,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 88,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 79,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 78,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 49,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 48,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9QYWdlcy9NYWluL1ByZWRpY3Rpb24vUHJlZGljdGlvblNsaWRlL0l0ZW0vSXRlbS5qc3giXSwibmFtZXMiOlsiSXRlbSIsInRlYW1PbmVOYW1lIiwidGVhbVR3b05hbWUiLCJ0ZWFtT25lSWNvbiIsInRlYW1Ud29JY29uIiwicHJlZGljdGlvbkJ1dHRvbk5hbWUiLCJidXlCdXR0b25OYW1lIiwibG9jYXRpb25Jbk1haW5QYWdlIiwiZXhwaXJ5VGltZXN0YW1wIiwicHJlZGljdGlvbiIsIm9yZGluYXIiLCJjbGlja0J1eSIsInJvdXRlciIsInVzZVJvdXRlciIsInVzZVRyYW5zbGF0aW9uIiwidCIsInRyYW5zbGF0aW9uUGF0aCIsInRyYW5zbGF0ZSIsImtleSIsInVzZVN0YXRlIiwic2hvd1ByZWRpY3Rpb24iLCJzZXRTaG93UHJlZGljdGlvbiIsImdhbWVTdGFydGVkIiwic2V0R2FtZVN0YXJ0ZWQiLCJnb1RvUHJlZGljdGlvbnMiLCJwdXNoIiwiY29uc29sZSIsImxvZyIsInN0YXJ0IiwiRGF0ZSIsImdldFRpbWUiLCJlbmQiLCJ0aW1lIiwic2V0U2Vjb25kcyIsImdldFNlY29uZHMiLCJzdHlsZXMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtDQUVBOztDQUVBOztDQUVBOztBQUNBO0FBQ0E7QUFDQTtBQUVPLFNBQVNBLElBQVQsT0FZSjtBQUFBOztBQUFBLE1BWERDLFdBV0MsUUFYREEsV0FXQztBQUFBLE1BVkRDLFdBVUMsUUFWREEsV0FVQztBQUFBLE1BVERDLFdBU0MsUUFUREEsV0FTQztBQUFBLE1BUkRDLFdBUUMsUUFSREEsV0FRQztBQUFBLE1BUERDLG9CQU9DLFFBUERBLG9CQU9DO0FBQUEsTUFOREMsYUFNQyxRQU5EQSxhQU1DO0FBQUEsTUFMREMsa0JBS0MsUUFMREEsa0JBS0M7QUFBQSxNQUpEQyxlQUlDLFFBSkRBLGVBSUM7QUFBQSxNQUhE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QTtBQUFBLGdCQURGLGVBNkJFO0FBQUssbUJBQVMsRUFBRXlCLGlFQUFoQjtBQUFBLGlDQUNFO0FBQUsscUJBQVMsRUFBRUEsa0VBQWhCO0FBQUEsb0NBQ0U7QUFBSyx1QkFBUyxFQUFFQSxzRkFBaEI7QUFBQSxxQ0FDRTtBQUNFLHlCQUFTLEVBQUVBLG9GQURiO0FBRUUsdUJBQU8sRUFBRTtBQUFBLHlCQUFNWCxlQUFlLEVBQXJCO0FBQUEsaUJBRlg7QUFBQSx1Q0FJRTtBQUFBLDRCQUFJUCxTQUFTLENBQUNaLG9CQUFEO0FBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUpGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQURGLGVBU0U7QUFBSyx1QkFBUyxFQUFFOEIsK0VBQWhCO0FBQUEscUNBQ0U7QUFBSyx5QkFBUyxFQUFFQSw2RUFBaEI7QUFBMkMsdUJBQU8sRUFBRXhCLFFBQXBEO0FBQUEsdUNBQ0U7QUFBQSw0QkFBSU0sU0FBUyxDQUFDWCxhQUFEO0FBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQVRGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBN0JGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERixtQkFERjtBQXFERDs7R0F2RmVOLEk7VUFhQ2EsOEQsRUFFTEMsa0U7OztLQWZJZCxJIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmVmZTJlMDI0N2E4Y2E5MTBhN2QxLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBob29rc1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG4vLyB0cmFuc2xhdGlvbnNcclxuaW1wb3J0IHVzZVRyYW5zbGF0aW9uIGZyb20gXCJuZXh0LXRyYW5zbGF0ZS91c2VUcmFuc2xhdGlvblwiO1xyXG4vLyBzdHlsZXNcclxuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi9JdGVtLm1vZHVsZS5zY3NzXCI7XHJcbi8vY29tcG9uZW50c1xyXG5pbXBvcnQgeyBUaW1lciB9IGZyb20gXCIuL1RpbWVyL1RpbWVyXCI7XHJcbmltcG9ydCB7IFByZWRpY3Rpb25Nb2RhbCB9IGZyb20gXCIuL1ByZWRpY3Rpb25Nb2RhbC9QcmVkaWN0aW9uTW9kYWxcIjtcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvZGlzdC9jbGllbnQvcm91dGVyXCI7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gSXRlbSh7XHJcbiAgdGVhbU9uZU5hbWUsXHJcbiAgdGVhbVR3b05hbWUsXHJcbiAgdGVhbU9uZUljb24sXHJcbiAgdGVhbVR3b0ljb24sXHJcbiAgcHJlZGljdGlvbkJ1dHRvbk5hbWUsXHJcbiAgYnV5QnV0dG9uTmFtZSxcclxuICBsb2NhdGlvbkluTWFpblBhZ2UsXHJcbiAgZXhwaXJ5VGltZXN0YW1wLFxyXG4gIHByZWRpY3Rpb24sXHJcbiAgb3JkaW5hcixcclxuICBjbGlja0J1eSxcclxufSkge1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gIGNvbnN0IC8vIHRyYW5zbGF0aW9uIGNvbnNmaWdzXHJcbiAgICB7IHQgfSA9IHVzZVRyYW5zbGF0aW9uKFwiaG9tZVwiKSxcclxuICAgIHRyYW5zbGF0aW9uUGF0aCA9IGAke2xvY2F0aW9uSW5NYWluUGFnZX1gLFxyXG4gICAgdHJhbnNsYXRlID0gKGtleSkgPT4gdChgJHt0cmFuc2xhdGlvblBhdGh9JHtrZXl9YCksXHJcbiAgICBbc2hvd1ByZWRpY3Rpb24sIHNldFNob3dQcmVkaWN0aW9uXSA9IHVzZVN0YXRlKGZhbHNlKSxcclxuICAgIFtnYW1lU3RhcnRlZCwgc2V0R2FtZVN0YXJ0ZWRdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICBmdW5jdGlvbiBnb1RvUHJlZGljdGlvbnMoKSB7XHJcbiAgICAvLyBzZXRTaG93UHJlZGljdGlvbighc2hvd1ByZWRpY3Rpb24pO1xyXG4gICAgcm91dGVyLnB1c2goYC9wcmVkaWN0aW9uYCk7XHJcbiAgfVxyXG4gIGNvbnNvbGUubG9nKGV4cGlyeVRpbWVzdGFtcCk7XHJcbiAgbGV0IHN0YXJ0ID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XHJcbiAgbGV0IGVuZCA9IG5ldyBEYXRlKGV4cGlyeVRpbWVzdGFtcCkuZ2V0VGltZSgpO1xyXG5cclxuICBjb25zb2xlLmxvZygoZW5kIC0gc3RhcnQpIC8gMTAwMCk7XHJcblxyXG4gIGxldCB0aW1lID0gbmV3IERhdGUoKTtcclxuICB0aW1lLnNldFNlY29uZHModGltZS5nZXRTZWNvbmRzKCkgKyAoZW5kIC0gc3RhcnQpIC8gMTAwMCk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn0+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250ZW50fT5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudG9wfT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy50ZWFtfT5cclxuICAgICAgICAgICAgICA8aW1nIHNyYz17dGVhbU9uZUljb259IGFsdD1cIlwiIC8+XHJcbiAgICAgICAgICAgICAgPHA+e3RlYW1PbmVOYW1lfTwvcD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudGltZXJfY29udGFpbmVyfT5cclxuICAgICAgICAgICAgICA8cD57Z2FtZVN0YXJ0ZWQgPyBg0JjQs9GA0LAg0L3QsNGH0LDQu9GB0Y8gYCA6IGDQmNCz0YDQsCDQvdCw0YfQuNC90LDQtdGC0YHRjyDRh9C10YDQtdC3YH08L3A+XHJcbiAgICAgICAgICAgICAgPFRpbWVyXHJcbiAgICAgICAgICAgICAgICBleHBpcnlUaW1lc3RhbXA9e3RpbWV9XHJcbiAgICAgICAgICAgICAgICB0aW1lQ2xhc3M9e3N0eWxlcy50aW1lcn1cclxuICAgICAgICAgICAgICAgIHRpbWVPdXQ9eygpID0+IHNldEdhbWVTdGFydGVkKHRydWUpfVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnRlYW19PlxyXG4gICAgICAgICAgICAgIDxpbWcgc3JjPXt0ZWFtVHdvSWNvbn0gYWx0PVwiXCIgLz5cclxuICAgICAgICAgICAgICA8cD57dGVhbVR3b05hbWV9PC9wPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAge3Nob3dQcmVkaWN0aW9uICYmIChcclxuICAgICAgICAgICAgICA8UHJlZGljdGlvbk1vZGFsXHJcbiAgICAgICAgICAgICAgICB0ZWFtT25lTmFtZT17dGVhbU9uZU5hbWV9XHJcbiAgICAgICAgICAgICAgICB0ZWFtVHdvTmFtZT17dGVhbVR3b05hbWV9XHJcbiAgICAgICAgICAgICAgICB0ZWFtT25lSWNvbj17dGVhbU9uZUljb259XHJcbiAgICAgICAgICAgICAgICB0ZWFtVHdvSWNvbj17dGVhbVR3b0ljb259XHJcbiAgICAgICAgICAgICAgICBwcmVkaWN0aW9uPXtwcmVkaWN0aW9ufVxyXG4gICAgICAgICAgICAgICAgb3JkaW5hcj17b3JkaW5hcn1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICApfVxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmJvdHRvbX0+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYnV0dG9uc30+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5wcmVkaWN0aW9uX2J1dHRvbl9jb250YWluZXJ9PlxyXG4gICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5wcmVkaWN0aW9uX2J1dHRvbl9jb250ZW50fVxyXG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBnb1RvUHJlZGljdGlvbnMoKX1cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgPHA+e3RyYW5zbGF0ZShwcmVkaWN0aW9uQnV0dG9uTmFtZSl9PC9wPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5idXlfYnV0dG9uX2NvbnRhaW5lcn0+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmJ1eV9idXR0b25fY29udGVudH0gb25DbGljaz17Y2xpY2tCdXl9PlxyXG4gICAgICAgICAgICAgICAgICA8cD57dHJhbnNsYXRlKGJ1eUJ1dHRvbk5hbWUpfTwvcD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvPlxyXG4gICk7XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==