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
  var time = new Date();
  time.setSeconds(time.getSeconds() + 10600);
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
              lineNumber: 48,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
              children: teamOneName
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
            className: (_Item_module_scss__WEBPACK_IMPORTED_MODULE_6___default().timer_container),
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
              children: gameStarted ? "\u0418\u0433\u0440\u0430 \u043D\u0430\u0447\u0430\u043B\u0441\u044F " : "\u0418\u0433\u0440\u0430 \u043D\u0430\u0447\u0438\u043D\u0430\u0435\u0442\u0441\u044F \u0447\u0435\u0440\u0435\u0437"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 52,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Timer_Timer__WEBPACK_IMPORTED_MODULE_3__.Timer, {
              expiryTimestamp: expiryTimestamp,
              timeClass: (_Item_module_scss__WEBPACK_IMPORTED_MODULE_6___default().timer),
              timeOut: function timeOut() {
                return setGameStarted(true);
              }
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
            className: (_Item_module_scss__WEBPACK_IMPORTED_MODULE_6___default().team),
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
              src: teamTwoIcon,
              alt: ""
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 60,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
              children: teamTwoName
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 61,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 59,
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
            lineNumber: 64,
            columnNumber: 15
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 46,
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
                  lineNumber: 81,
                  columnNumber: 19
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 77,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 76,
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
                  lineNumber: 86,
                  columnNumber: 19
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 85,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 84,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 75,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 74,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 45,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 44,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9QYWdlcy9NYWluL1ByZWRpY3Rpb24vUHJlZGljdGlvblNsaWRlL0l0ZW0vSXRlbS5qc3giXSwibmFtZXMiOlsiSXRlbSIsInRlYW1PbmVOYW1lIiwidGVhbVR3b05hbWUiLCJ0ZWFtT25lSWNvbiIsInRlYW1Ud29JY29uIiwicHJlZGljdGlvbkJ1dHRvbk5hbWUiLCJidXlCdXR0b25OYW1lIiwibG9jYXRpb25Jbk1haW5QYWdlIiwiZXhwaXJ5VGltZXN0YW1wIiwicHJlZGljdGlvbiIsIm9yZGluYXIiLCJjbGlja0J1eSIsInJvdXRlciIsInVzZVJvdXRlciIsInVzZVRyYW5zbGF0aW9uIiwidCIsInRyYW5zbGF0aW9uUGF0aCIsInRyYW5zbGF0ZSIsImtleSIsInVzZVN0YXRlIiwic2hvd1ByZWRpY3Rpb24iLCJzZXRTaG93UHJlZGljdGlvbiIsImdhbWVTdGFydGVkIiwic2V0R2FtZVN0YXJ0ZWQiLCJnb1RvUHJlZGljdGlvbnMiLCJwdXNoIiwiY29uc29sZSIsImxvZyIsInRpbWUiLCJEYXRlIiwic2V0U2Vjb25kcyIsImdldFNlY29uZHMiLCJzdHlsZXMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtDQUVBOztDQUVBOztDQUVBOztBQUNBO0FBQ0E7QUFDQTtBQUVPLFNBQVNBLElBQVQsT0FZSjtBQUFBOztBQUFBLE1BWERDLFdBV0MsUUFYREEsV0FXQztBQUFBLE1BVkRDLFdBVUMsUUFWREEsV0FVQztBQUFBLE1BVERDLFdBU0MsUUFUREEsV0FTQztBQUFBLE1BUkRDLFdBUUMsUUFSREEsV0FRQztBQUFBLE1BUERDLG9CQU9DLFFBUERBLG9CQU9DO0FBQUEsTUFOREMsYUFNQyxRQU5EQSxhQU1DO0FBQUEsTUFMREMsa0JBS0MsUUFMREEsa0JBS0M7QUFBQSxNQUpEQyxlQUlDLFFBSkRBLGVBSUM7QUFBQSxNQUhEQyxVQUdDLFFBSERBLFVBR0M7QUFBQSxN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QVMsQ0FBQ1osb0JBQUQ7QUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBREYsZUFTRTtBQUFLLHVCQUFTLEVBQUUyQiwrRUFBaEI7QUFBQSxxQ0FDRTtBQUFLLHlCQUFTLEVBQUVBLDZFQUFoQjtBQUEyQyx1QkFBTyxFQUFFckIsUUFBcEQ7QUFBQSx1Q0FDRTtBQUFBLDRCQUFJTSxTQUFTLENBQUNYLGFBQUQ7QUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBVEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkE3QkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGLG1CQURGO0FBcUREOztHQW5GZU4sSTtVQWFDYSw4RCxFQUVMQyxrRTs7O0tBZklkLEkiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguNTA3ZmY5YWJiYTQ1ODk5MTJiZWYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGhvb2tzXHJcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbi8vIHRyYW5zbGF0aW9uc1xyXG5pbXBvcnQgdXNlVHJhbnNsYXRpb24gZnJvbSBcIm5leHQtdHJhbnNsYXRlL3VzZVRyYW5zbGF0aW9uXCI7XHJcbi8vIHN0eWxlc1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuL0l0ZW0ubW9kdWxlLnNjc3NcIjtcclxuLy9jb21wb25lbnRzXHJcbmltcG9ydCB7IFRpbWVyIH0gZnJvbSBcIi4vVGltZXIvVGltZXJcIjtcclxuaW1wb3J0IHsgUHJlZGljdGlvbk1vZGFsIH0gZnJvbSBcIi4vUHJlZGljdGlvbk1vZGFsL1ByZWRpY3Rpb25Nb2RhbFwiO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9kaXN0L2NsaWVudC9yb3V0ZXJcIjtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBJdGVtKHtcclxuICB0ZWFtT25lTmFtZSxcclxuICB0ZWFtVHdvTmFtZSxcclxuICB0ZWFtT25lSWNvbixcclxuICB0ZWFtVHdvSWNvbixcclxuICBwcmVkaWN0aW9uQnV0dG9uTmFtZSxcclxuICBidXlCdXR0b25OYW1lLFxyXG4gIGxvY2F0aW9uSW5NYWluUGFnZSxcclxuICBleHBpcnlUaW1lc3RhbXAsXHJcbiAgcHJlZGljdGlvbixcclxuICBvcmRpbmFyLFxyXG4gIGNsaWNrQnV5LFxyXG59KSB7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiAgY29uc3QgLy8gdHJhbnNsYXRpb24gY29uc2ZpZ3NcclxuICAgIHsgdCB9ID0gdXNlVHJhbnNsYXRpb24oXCJob21lXCIpLFxyXG4gICAgdHJhbnNsYXRpb25QYXRoID0gYCR7bG9jYXRpb25Jbk1haW5QYWdlfWAsXHJcbiAgICB0cmFuc2xhdGUgPSAoa2V5KSA9PiB0KGAke3RyYW5zbGF0aW9uUGF0aH0ke2tleX1gKSxcclxuICAgIFtzaG93UHJlZGljdGlvbiwgc2V0U2hvd1ByZWRpY3Rpb25dID0gdXNlU3RhdGUoZmFsc2UpLFxyXG4gICAgW2dhbWVTdGFydGVkLCBzZXRHYW1lU3RhcnRlZF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gIGZ1bmN0aW9uIGdvVG9QcmVkaWN0aW9ucygpIHtcclxuICAgIC8vIHNldFNob3dQcmVkaWN0aW9uKCFzaG93UHJlZGljdGlvbik7XHJcbiAgICByb3V0ZXIucHVzaChgL3ByZWRpY3Rpb25gKTtcclxuICB9XHJcbiAgY29uc29sZS5sb2coZXhwaXJ5VGltZXN0YW1wKTtcclxuXHJcbiAgbGV0IHRpbWUgPSBuZXcgRGF0ZSgpO1xyXG4gIHRpbWUuc2V0U2Vjb25kcyh0aW1lLmdldFNlY29uZHMoKSArIDEwNjAwKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfT5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRlbnR9PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy50b3B9PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnRlYW19PlxyXG4gICAgICAgICAgICAgIDxpbWcgc3JjPXt0ZWFtT25lSWNvbn0gYWx0PVwiXCIgLz5cclxuICAgICAgICAgICAgICA8cD57dGVhbU9uZU5hbWV9PC9wPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy50aW1lcl9jb250YWluZXJ9PlxyXG4gICAgICAgICAgICAgIDxwPntnYW1lU3RhcnRlZCA/IGDQmNCz0YDQsCDQvdCw0YfQsNC70YHRjyBgIDogYNCY0LPRgNCwINC90LDRh9C40L3QsNC10YLRgdGPINGH0LXRgNC10LdgfTwvcD5cclxuICAgICAgICAgICAgICA8VGltZXJcclxuICAgICAgICAgICAgICAgIGV4cGlyeVRpbWVzdGFtcD17ZXhwaXJ5VGltZXN0YW1wfVxyXG4gICAgICAgICAgICAgICAgdGltZUNsYXNzPXtzdHlsZXMudGltZXJ9XHJcbiAgICAgICAgICAgICAgICB0aW1lT3V0PXsoKSA9PiBzZXRHYW1lU3RhcnRlZCh0cnVlKX1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy50ZWFtfT5cclxuICAgICAgICAgICAgICA8aW1nIHNyYz17dGVhbVR3b0ljb259IGFsdD1cIlwiIC8+XHJcbiAgICAgICAgICAgICAgPHA+e3RlYW1Ud29OYW1lfTwvcD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIHtzaG93UHJlZGljdGlvbiAmJiAoXHJcbiAgICAgICAgICAgICAgPFByZWRpY3Rpb25Nb2RhbFxyXG4gICAgICAgICAgICAgICAgdGVhbU9uZU5hbWU9e3RlYW1PbmVOYW1lfVxyXG4gICAgICAgICAgICAgICAgdGVhbVR3b05hbWU9e3RlYW1Ud29OYW1lfVxyXG4gICAgICAgICAgICAgICAgdGVhbU9uZUljb249e3RlYW1PbmVJY29ufVxyXG4gICAgICAgICAgICAgICAgdGVhbVR3b0ljb249e3RlYW1Ud29JY29ufVxyXG4gICAgICAgICAgICAgICAgcHJlZGljdGlvbj17cHJlZGljdGlvbn1cclxuICAgICAgICAgICAgICAgIG9yZGluYXI9e29yZGluYXJ9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgKX1cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5ib3R0b219PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmJ1dHRvbnN9PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucHJlZGljdGlvbl9idXR0b25fY29udGFpbmVyfT5cclxuICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMucHJlZGljdGlvbl9idXR0b25fY29udGVudH1cclxuICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gZ29Ub1ByZWRpY3Rpb25zKCl9XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIDxwPnt0cmFuc2xhdGUocHJlZGljdGlvbkJ1dHRvbk5hbWUpfTwvcD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYnV5X2J1dHRvbl9jb250YWluZXJ9PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5idXlfYnV0dG9uX2NvbnRlbnR9IG9uQ2xpY2s9e2NsaWNrQnV5fT5cclxuICAgICAgICAgICAgICAgICAgPHA+e3RyYW5zbGF0ZShidXlCdXR0b25OYW1lKX08L3A+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8Lz5cclxuICApO1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=