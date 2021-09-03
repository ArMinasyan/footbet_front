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
  console.log(expiryTimestamp);

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
              lineNumber: 45,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
              children: teamOneName
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 46,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 44,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: (_Item_module_scss__WEBPACK_IMPORTED_MODULE_6___default().timer_container),
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
              children: gameStarted ? "\u0418\u0433\u0440\u0430 \u043D\u0430\u0447\u0430\u043B\u0441\u044F " : "\u0418\u0433\u0440\u0430 \u043D\u0430\u0447\u0438\u043D\u0430\u0435\u0442\u0441\u044F \u0447\u0435\u0440\u0435\u0437"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 49,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Timer_Timer__WEBPACK_IMPORTED_MODULE_3__.Timer, {
              expiryTimestamp: expiryTimestamp,
              timeClass: (_Item_module_scss__WEBPACK_IMPORTED_MODULE_6___default().timer),
              timeOut: function timeOut() {
                return setGameStarted(true);
              }
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 50,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 48,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: (_Item_module_scss__WEBPACK_IMPORTED_MODULE_6___default().team),
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
              src: teamTwoIcon,
              alt: ""
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 57,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
              children: teamTwoName
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 58,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 56,
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
            lineNumber: 61,
            columnNumber: 15
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 43,
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
                  lineNumber: 78,
                  columnNumber: 19
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 74,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 73,
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
                  lineNumber: 83,
                  columnNumber: 19
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 82,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 81,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 72,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 71,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 42,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 41,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9QYWdlcy9NYWluL1ByZWRpY3Rpb24vUHJlZGljdGlvblNsaWRlL0l0ZW0vSXRlbS5qc3giXSwibmFtZXMiOlsiSXRlbSIsInRlYW1PbmVOYW1lIiwidGVhbVR3b05hbWUiLCJ0ZWFtT25lSWNvbiIsInRlYW1Ud29JY29uIiwicHJlZGljdGlvbkJ1dHRvbk5hbWUiLCJidXlCdXR0b25OYW1lIiwibG9jYXRpb25Jbk1haW5QYWdlIiwiZXhwaXJ5VGltZXN0YW1wIiwicHJlZGljdGlvbiIsIm9yZGluYXIiLCJjbGlja0J1eSIsInJvdXRlciIsInVzZVJvdXRlciIsImNvbnNvbGUiLCJsb2ciLCJ1c2VUcmFuc2xhdGlvbiIsInQiLCJ0cmFuc2xhdGlvblBhdGgiLCJ0cmFuc2xhdGUiLCJrZXkiLCJ1c2VTdGF0ZSIsInNob3dQcmVkaWN0aW9uIiwic2V0U2hvd1ByZWRpY3Rpb24iLCJnYW1lU3RhcnRlZCIsInNldEdhbWVTdGFydGVkIiwiZ29Ub1ByZWRpY3Rpb25zIiwicHVzaCIsInN0eWxlcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0NBRUE7O0NBRUE7O0NBRUE7O0FBQ0E7QUFDQTtBQUNBO0FBRU8sU0FBU0EsSUFBVCxPQVlKO0FBQUE7O0FBQUEsTUFYREMsV0FXQyxRQVhEQSxXQVdDO0FBQUEsTUFWREMsV0FVQyxRQVZEQSxXQVVDO0FBQUEsTUFUREMsV0FTQyxRQVREQSxXQVNDO0FBQUEsTUFSREMsV0FRQyxRQVJEQSxXQVFDO0FBQUEsTUFQREMsb0JBT0MsUUFQREEsb0JBT0M7QUFBQSxNQU5EQyxhQU1DLFFBTkRBLGFBTUM7QUFBQSxNQUxEQyxrQkFLQyxRQUxEQSxrQkFLQztBQUFBLE1BSkRDLGVBSUMsUUFKREEsZUFJQztBQUFBLE1BSERDLFVBR0MsUUFIREEsVUFHQztBQUFBLE1BRkRDLE9BRUMsUUFGREEsT0FFQztBQUFBLE1BRERDLFFBQ0MsUUFE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RTtBQUFLLHlCQUFTLEVBQUVBLDZFQUFoQjtBQUEyQyx1QkFBTyxFQUFFakIsUUFBcEQ7QUFBQSx1Q0FDRTtBQUFBLDRCQUFJUSxTQUFTLENBQUNiLGFBQUQ7QUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBVEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkE3QkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGLG1CQURGO0FBcUREOztHQWhGZU4sSTtVQWFDYSw4RCxFQUdMRyxrRTs7O0tBaEJJaEIsSSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5mZjk3YzFmNTAwYTBiZDY5MWU2YS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gaG9va3NcclxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuLy8gdHJhbnNsYXRpb25zXHJcbmltcG9ydCB1c2VUcmFuc2xhdGlvbiBmcm9tIFwibmV4dC10cmFuc2xhdGUvdXNlVHJhbnNsYXRpb25cIjtcclxuLy8gc3R5bGVzXHJcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4vSXRlbS5tb2R1bGUuc2Nzc1wiO1xyXG4vL2NvbXBvbmVudHNcclxuaW1wb3J0IHsgVGltZXIgfSBmcm9tIFwiLi9UaW1lci9UaW1lclwiO1xyXG5pbXBvcnQgeyBQcmVkaWN0aW9uTW9kYWwgfSBmcm9tIFwiLi9QcmVkaWN0aW9uTW9kYWwvUHJlZGljdGlvbk1vZGFsXCI7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L2Rpc3QvY2xpZW50L3JvdXRlclwiO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIEl0ZW0oe1xyXG4gIHRlYW1PbmVOYW1lLFxyXG4gIHRlYW1Ud29OYW1lLFxyXG4gIHRlYW1PbmVJY29uLFxyXG4gIHRlYW1Ud29JY29uLFxyXG4gIHByZWRpY3Rpb25CdXR0b25OYW1lLFxyXG4gIGJ1eUJ1dHRvbk5hbWUsXHJcbiAgbG9jYXRpb25Jbk1haW5QYWdlLFxyXG4gIGV4cGlyeVRpbWVzdGFtcCxcclxuICBwcmVkaWN0aW9uLFxyXG4gIG9yZGluYXIsXHJcbiAgY2xpY2tCdXksXHJcbn0pIHtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICBjb25zb2xlLmxvZyhleHBpcnlUaW1lc3RhbXApO1xyXG4gIGNvbnN0IC8vIHRyYW5zbGF0aW9uIGNvbnNmaWdzXHJcbiAgICB7IHQgfSA9IHVzZVRyYW5zbGF0aW9uKFwiaG9tZVwiKSxcclxuICAgIHRyYW5zbGF0aW9uUGF0aCA9IGAke2xvY2F0aW9uSW5NYWluUGFnZX1gLFxyXG4gICAgdHJhbnNsYXRlID0gKGtleSkgPT4gdChgJHt0cmFuc2xhdGlvblBhdGh9JHtrZXl9YCksXHJcbiAgICBbc2hvd1ByZWRpY3Rpb24sIHNldFNob3dQcmVkaWN0aW9uXSA9IHVzZVN0YXRlKGZhbHNlKSxcclxuICAgIFtnYW1lU3RhcnRlZCwgc2V0R2FtZVN0YXJ0ZWRdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICBmdW5jdGlvbiBnb1RvUHJlZGljdGlvbnMoKSB7XHJcbiAgICAvLyBzZXRTaG93UHJlZGljdGlvbighc2hvd1ByZWRpY3Rpb24pO1xyXG4gICAgcm91dGVyLnB1c2goYC9wcmVkaWN0aW9uYCk7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGVudH0+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnRvcH0+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudGVhbX0+XHJcbiAgICAgICAgICAgICAgPGltZyBzcmM9e3RlYW1PbmVJY29ufSBhbHQ9XCJcIiAvPlxyXG4gICAgICAgICAgICAgIDxwPnt0ZWFtT25lTmFtZX08L3A+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnRpbWVyX2NvbnRhaW5lcn0+XHJcbiAgICAgICAgICAgICAgPHA+e2dhbWVTdGFydGVkID8gYNCY0LPRgNCwINC90LDRh9Cw0LvRgdGPIGAgOiBg0JjQs9GA0LAg0L3QsNGH0LjQvdCw0LXRgtGB0Y8g0YfQtdGA0LXQt2B9PC9wPlxyXG4gICAgICAgICAgICAgIDxUaW1lclxyXG4gICAgICAgICAgICAgICAgZXhwaXJ5VGltZXN0YW1wPXtleHBpcnlUaW1lc3RhbXB9XHJcbiAgICAgICAgICAgICAgICB0aW1lQ2xhc3M9e3N0eWxlcy50aW1lcn1cclxuICAgICAgICAgICAgICAgIHRpbWVPdXQ9eygpID0+IHNldEdhbWVTdGFydGVkKHRydWUpfVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnRlYW19PlxyXG4gICAgICAgICAgICAgIDxpbWcgc3JjPXt0ZWFtVHdvSWNvbn0gYWx0PVwiXCIgLz5cclxuICAgICAgICAgICAgICA8cD57dGVhbVR3b05hbWV9PC9wPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAge3Nob3dQcmVkaWN0aW9uICYmIChcclxuICAgICAgICAgICAgICA8UHJlZGljdGlvbk1vZGFsXHJcbiAgICAgICAgICAgICAgICB0ZWFtT25lTmFtZT17dGVhbU9uZU5hbWV9XHJcbiAgICAgICAgICAgICAgICB0ZWFtVHdvTmFtZT17dGVhbVR3b05hbWV9XHJcbiAgICAgICAgICAgICAgICB0ZWFtT25lSWNvbj17dGVhbU9uZUljb259XHJcbiAgICAgICAgICAgICAgICB0ZWFtVHdvSWNvbj17dGVhbVR3b0ljb259XHJcbiAgICAgICAgICAgICAgICBwcmVkaWN0aW9uPXtwcmVkaWN0aW9ufVxyXG4gICAgICAgICAgICAgICAgb3JkaW5hcj17b3JkaW5hcn1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICApfVxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmJvdHRvbX0+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYnV0dG9uc30+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5wcmVkaWN0aW9uX2J1dHRvbl9jb250YWluZXJ9PlxyXG4gICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5wcmVkaWN0aW9uX2J1dHRvbl9jb250ZW50fVxyXG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBnb1RvUHJlZGljdGlvbnMoKX1cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgPHA+e3RyYW5zbGF0ZShwcmVkaWN0aW9uQnV0dG9uTmFtZSl9PC9wPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5idXlfYnV0dG9uX2NvbnRhaW5lcn0+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmJ1eV9idXR0b25fY29udGVudH0gb25DbGljaz17Y2xpY2tCdXl9PlxyXG4gICAgICAgICAgICAgICAgICA8cD57dHJhbnNsYXRlKGJ1eUJ1dHRvbk5hbWUpfTwvcD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvPlxyXG4gICk7XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==