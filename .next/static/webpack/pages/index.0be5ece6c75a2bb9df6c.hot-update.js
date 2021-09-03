self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/Pages/Main/Matches/TodayMatches/TMBody/common/Row/RowDescription/RowDescription.jsx":
/*!********************************************************************************************************!*\
  !*** ./components/Pages/Main/Matches/TodayMatches/TMBody/common/Row/RowDescription/RowDescription.jsx ***!
  \********************************************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RowDescription": function() { return /* binding */ RowDescription; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_translate_useTranslation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-translate/useTranslation */ "./node_modules/next-translate/lib/esm/useTranslation.js");
/* harmony import */ var _RowDescription_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./RowDescription.module.scss */ "./components/Pages/Main/Matches/TodayMatches/TMBody/common/Row/RowDescription/RowDescription.module.scss");
/* harmony import */ var _RowDescription_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_RowDescription_module_scss__WEBPACK_IMPORTED_MODULE_2__);
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "C:\\Users\\Admin\\Desktop\\projects\\foot-bet\\components\\Pages\\Main\\Matches\\TodayMatches\\TMBody\\common\\Row\\RowDescription\\RowDescription.jsx",
    _s = $RefreshSig$();

// translations
 // styles


function RowDescription(_ref) {
  _s();

  var clickBuy = _ref.clickBuy,
      date = _ref.date,
      gameState = _ref.gameState,
      teamOne = _ref.teamOne,
      teamOneIcon = _ref.teamOneIcon,
      score = _ref.score,
      teamTwo = _ref.teamTwo,
      teamTwoIcon = _ref.teamTwoIcon,
      buyButtonName = _ref.buyButtonName,
      locationInMainPage = _ref.locationInMainPage;

  var _useTranslation = (0,next_translate_useTranslation__WEBPACK_IMPORTED_MODULE_1__.default)("home"),
      t = _useTranslation.t,
      translationPath = "".concat(locationInMainPage),
      translate = function translate(key) {
    return t("".concat(translationPath).concat(key));
  },
      gameStarted = gameState.slice(gameState.lastIndexOf(".") + 1) === "started";

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: (_RowDescription_module_scss__WEBPACK_IMPORTED_MODULE_2___default().container),
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: (_RowDescription_module_scss__WEBPACK_IMPORTED_MODULE_2___default().content),
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "\n                        ".concat((_RowDescription_module_scss__WEBPACK_IMPORTED_MODULE_2___default().date_gameNStarted_content), " \n                        ").concat(gameStarted ? (_RowDescription_module_scss__WEBPACK_IMPORTED_MODULE_2___default().date_gameStarted_content) : null, "\n                    "),
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
          children: date
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 33,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
          children: ["\xA0", translate(gameState)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 34,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: (_RowDescription_module_scss__WEBPACK_IMPORTED_MODULE_2___default().teams),
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: (_RowDescription_module_scss__WEBPACK_IMPORTED_MODULE_2___default().teamOne),
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
            children: teamOne
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 38,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
            src: teamOneIcon,
            alt: teamOne
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 39,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 37,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: (_RowDescription_module_scss__WEBPACK_IMPORTED_MODULE_2___default().score),
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
            children: score
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 42,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 41,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: (_RowDescription_module_scss__WEBPACK_IMPORTED_MODULE_2___default().teamTwo),
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
            src: teamTwoIcon,
            alt: teamTwo
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 45,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
            children: teamTwo
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 46,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 44,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: (_RowDescription_module_scss__WEBPACK_IMPORTED_MODULE_2___default().buyButton_container),
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: (_RowDescription_module_scss__WEBPACK_IMPORTED_MODULE_2___default().button_content),
          onClick: clickBuy,
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
            children: translate(buyButtonName)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 51,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 50,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 49,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 25,
    columnNumber: 5
  }, this);
}

_s(RowDescription, "zlIdU9EjM2llFt74AbE2KsUJXyM=", false, function () {
  return [next_translate_useTranslation__WEBPACK_IMPORTED_MODULE_1__.default];
});

_c = RowDescription;

var _c;

$RefreshReg$(_c, "RowDescription");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9QYWdlcy9NYWluL01hdGNoZXMvVG9kYXlNYXRjaGVzL1RNQm9keS9jb21tb24vUm93L1Jvd0Rlc2NyaXB0aW9uL1Jvd0Rlc2NyaXB0aW9uLmpzeCJdLCJuYW1lcyI6WyJSb3dEZXNjcmlwdGlvbiIsImNsaWNrQnV5IiwiZGF0ZSIsImdhbWVTdGF0ZSIsInRlYW1PbmUiLCJ0ZWFtT25lSWNvbiIsInNjb3JlIiwidGVhbVR3byIsInRlYW1Ud29JY29uIiwiYnV5QnV0dG9uTmFtZSIsImxvY2F0aW9uSW5NYWluUGFnZSIsInVzZVRyYW5zbGF0aW9uIiwidCIsInRyYW5zbGF0aW9uUGF0aCIsInRyYW5zbGF0ZSIsImtleSIsImdhbWVTdGFydGVkIiwic2xpY2UiLCJsYXN0SW5kZXhPZiIsInN0eWxlcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Q0FFQTs7QUFDQTtBQUVPLFNBQVNBLGNBQVQsT0FXSjtBQUFBOztBQUFBLE1BVkRDLFFBVUMsUUFWREEsUUFVQztBQUFBLE1BVERDLElBU0MsUUFUREEsSUFTQztBQUFBLE1BUkRDLFNBUUMsUUFSREEsU0FRQztBQUFBLE1BUERDLE9BT0MsUUFQREEsT0FPQztBQUFBLE1BTkRDLFdBTUMsUUFOREEsV0FNQztBQUFBLE1BTERDLEtBS0MsUUFMREEsS0FLQztBQUFBLE1BSkRDLE9BSUMsUUFKREEsT0FJQztBQUFBLE1BSERDLFdBR0MsUUFIREEsV0FHQztBQUFBLE1BRkRDLGFBRUMsUUFGREEsYUFFQztBQUFBLE1BRERDLGtCQUNDLFFBRERBLGtCQUNDOztBQUFBLHdCQUVTQyxzRUFBYyxDQUFDLE1BQUQsQ0FGdkI7QUFBQSxNQUVHQyxDQUZILG1CQUVHQSxDQUZIO0FBQUEsTUFHQ0MsZUFIRCxhQUdzQkgsa0JBSHRCO0FBQUEsTUFJQ0ksU0FKRCxHQUlhLFNBQVpBLFNBQVksQ0FBQ0MsR0FBRDtBQUFBLFdBQVNILENBQUMsV0FBSUMsZUFBSixTQUFzQkUsR0FBdEIsRUFBVjtBQUFBLEdBSmI7QUFBQSxNQUtDQyxXQUxELEdBS2ViLFNBQVMsQ0FBQ2MsS0FBVixDQUFnQmQsU0FBUyxDQUFDZSxXQUFWLENBQXNCLEdBQXRCLElBQTZCLENBQTdDLE1BQW9ELFNBTG5FOztBQU9ELHNCQUNFO0FBQUssYUFBUyxFQUFFQyw4RUFBaEI7QUFBQSwyQkFDRTtBQUFLLGVBQVMsRUFBRUEsNEVBQWhCO0FBQUEsOEJBQ0U7QUFDRSxpQkFBUyxzQ0FDT0EsOEZBRFAsd0NBRU9ILFdBQVcsR0FBR0csNkZBQUgsR0FBcUMsSUFGdkQsMkJBRFg7QUFBQSxnQ0FNRTtBQUFBLG9CQUFPakI7QUFBUDtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQU5GLGVBT0U7QUFBQSw2QkFBYVksU0FBUyxDQUFDWCxTQUFELENBQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFQRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERixlQVVFO0FBQUssaUJBQVMsRUFBRWdCLDBFQUFoQjtBQUFBLGdDQUNFO0FBQUssbUJBQVMsRUFBRUEsNEVBQWhCO0FBQUEsa0NBQ0U7QUFBQSxzQkFBSWY7QUFBSjtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQURGLGVBRUU7QUFBSyxlQUFHLEVBQUVDLFdBQVY7QUFBdUIsZUFBRyxFQUFFRDtBQUE1QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFERixlQUtFO0FBQUssbUJBQVMsRUFBRWUsMEVBQWhCO0FBQUEsaUNBQ0U7QUFBQSxzQkFBSWI7QUFBSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFMRixlQVFFO0FBQUssbUJBQVMsRUFBRWEsNEVBQWhCO0FBQUEsa0NBQ0U7QUFBSyxlQUFHLEVBQUVYLFdBQVY7QUFBdUIsZUFBRyxFQUFFRDtBQUE1QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQURGLGVBRUU7QUFBQSxzQkFBSUE7QUFBSjtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFSRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FWRixlQXVCRTtBQUFLLGlCQUFTLEVBQUVZLHdGQUFoQjtBQUFBLCtCQUNFO0FBQUssbUJBQVMsRUFBRUEsbUZBQWhCO0FBQXVDLGlCQUFPLEVBQUVsQixRQUFoRDtBQUFBLGlDQUNFO0FBQUEsc0JBQUlhLFNBQVMsQ0FBQ0wsYUFBRDtBQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQXZCRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFpQ0Q7O0dBbkRlVCxjO1VBYUpXLGtFOzs7S0FiSVgsYyIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC4wYmU1ZWNlNmM3NWEyYmI5ZGY2Yy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gdHJhbnNsYXRpb25zXHJcbmltcG9ydCB1c2VUcmFuc2xhdGlvbiBmcm9tIFwibmV4dC10cmFuc2xhdGUvdXNlVHJhbnNsYXRpb25cIjtcclxuLy8gc3R5bGVzXHJcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4vUm93RGVzY3JpcHRpb24ubW9kdWxlLnNjc3NcIjtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBSb3dEZXNjcmlwdGlvbih7XHJcbiAgY2xpY2tCdXksXHJcbiAgZGF0ZSxcclxuICBnYW1lU3RhdGUsXHJcbiAgdGVhbU9uZSxcclxuICB0ZWFtT25lSWNvbixcclxuICBzY29yZSxcclxuICB0ZWFtVHdvLFxyXG4gIHRlYW1Ud29JY29uLFxyXG4gIGJ1eUJ1dHRvbk5hbWUsXHJcbiAgbG9jYXRpb25Jbk1haW5QYWdlLFxyXG59KSB7XHJcbiAgY29uc3QgLy8gdHJhbnNsYXRpb24gY29uc2ZpZ3NcclxuICAgIHsgdCB9ID0gdXNlVHJhbnNsYXRpb24oXCJob21lXCIpLFxyXG4gICAgdHJhbnNsYXRpb25QYXRoID0gYCR7bG9jYXRpb25Jbk1haW5QYWdlfWAsXHJcbiAgICB0cmFuc2xhdGUgPSAoa2V5KSA9PiB0KGAke3RyYW5zbGF0aW9uUGF0aH0ke2tleX1gKSxcclxuICAgIGdhbWVTdGFydGVkID0gZ2FtZVN0YXRlLnNsaWNlKGdhbWVTdGF0ZS5sYXN0SW5kZXhPZihcIi5cIikgKyAxKSA9PT0gXCJzdGFydGVkXCI7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn0+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGVudH0+XHJcbiAgICAgICAgPGRpdlxyXG4gICAgICAgICAgY2xhc3NOYW1lPXtgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICR7c3R5bGVzLmRhdGVfZ2FtZU5TdGFydGVkX2NvbnRlbnR9IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAke2dhbWVTdGFydGVkID8gc3R5bGVzLmRhdGVfZ2FtZVN0YXJ0ZWRfY29udGVudCA6IG51bGx9XHJcbiAgICAgICAgICAgICAgICAgICAgYH1cclxuICAgICAgICA+XHJcbiAgICAgICAgICA8c3Bhbj57ZGF0ZX08L3NwYW4+XHJcbiAgICAgICAgICA8c3Bhbj4mbmJzcDt7dHJhbnNsYXRlKGdhbWVTdGF0ZSl9PC9zcGFuPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudGVhbXN9PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy50ZWFtT25lfT5cclxuICAgICAgICAgICAgPHA+e3RlYW1PbmV9PC9wPlxyXG4gICAgICAgICAgICA8aW1nIHNyYz17dGVhbU9uZUljb259IGFsdD17dGVhbU9uZX0gLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5zY29yZX0+XHJcbiAgICAgICAgICAgIDxwPntzY29yZX08L3A+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudGVhbVR3b30+XHJcbiAgICAgICAgICAgIDxpbWcgc3JjPXt0ZWFtVHdvSWNvbn0gYWx0PXt0ZWFtVHdvfSAvPlxyXG4gICAgICAgICAgICA8cD57dGVhbVR3b308L3A+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmJ1eUJ1dHRvbl9jb250YWluZXJ9PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5idXR0b25fY29udGVudH0gb25DbGljaz17Y2xpY2tCdXl9PlxyXG4gICAgICAgICAgICA8cD57dHJhbnNsYXRlKGJ1eUJ1dHRvbk5hbWUpfTwvcD5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==